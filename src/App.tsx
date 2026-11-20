import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { PageId, ThemeMode } from './types';
import { PAGE_TITLES } from './data/cresData';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { CresAssistant } from './components/CresAssistant';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { OwnerServicesPage } from './pages/OwnerServicesPage';
import { RenterServicesPage } from './pages/RenterServicesPage';
import { SecurityPage } from './pages/SecurityPage';
import { HowItWorksPage } from './pages/HowItWorksPage';
import { BusinessModelPage } from './pages/BusinessModelPage';
import { InsurancePage } from './pages/InsurancePage';
import { FaqPage } from './pages/FaqPage';
import { ContactPage } from './pages/ContactPage';

const VALID_PAGES: PageId[] = [
  'home',
  'about',
  'owner-services',
  'renter-services',
  'security',
  'how-it-works',
  'business-model',
  'insurance',
  'faq',
  'contact',
];

function getInitialPage(): PageId {
  if (typeof window !== 'undefined') {
    const hash = window.location.hash.replace('#', '') as PageId;
    if (VALID_PAGES.includes(hash)) {
      return hash;
    }
  }
  return 'home';
}

function getInitialTheme(): ThemeMode {
  if (typeof window !== 'undefined') {
    try {
      const stored = window.localStorage.getItem('cres-theme');
      if (stored === 'dark' || stored === 'light') {
        return stored;
      }
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
      }
    } catch {
      return 'light';
    }
  }
  return 'light';
}

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>(getInitialPage);
  const [theme, setTheme] = useState<ThemeMode>(getInitialTheme);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    try {
      window.localStorage.setItem('cres-theme', theme);
    } catch {
      // Ignore storage errors in private browsing contexts
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const navigate = (page: PageId) => {
    setCurrentPage(page);
    if (typeof window !== 'undefined') {
      window.location.hash = page === 'home' ? '' : page;
      window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
    }
  };

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageId;
      if (VALID_PAGES.includes(hash)) {
        setCurrentPage(hash);
      } else if (!hash) {
        setCurrentPage('home');
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    document.title = PAGE_TITLES[currentPage];
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={navigate} />;
      case 'about':
        return <AboutPage onNavigate={navigate} />;
      case 'owner-services':
        return <OwnerServicesPage onNavigate={navigate} />;
      case 'renter-services':
        return <RenterServicesPage onNavigate={navigate} />;
      case 'security':
        return <SecurityPage onNavigate={navigate} />;
      case 'how-it-works':
        return <HowItWorksPage onNavigate={navigate} />;
      case 'business-model':
        return <BusinessModelPage onNavigate={navigate} />;
      case 'insurance':
        return <InsurancePage onNavigate={navigate} />;
      case 'faq':
        return <FaqPage onNavigate={navigate} />;
      case 'contact':
        return <ContactPage onNavigate={navigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-[#050B18] text-slate-900 dark:text-slate-100 transition-colors duration-200 overflow-x-clip">
      <Navbar
        currentPage={currentPage}
        theme={theme}
        onToggleTheme={toggleTheme}
        onNavigate={navigate}
      />

      <main className="flex-1 overflow-x-clip">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={prefersReducedMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={prefersReducedMotion ? undefined : { opacity: 0 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer theme={theme} onToggleTheme={toggleTheme} onNavigate={navigate} />
      <CresAssistant currentPage={currentPage} onNavigate={navigate} />
    </div>
  );
}
