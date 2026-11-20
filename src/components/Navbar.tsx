import React, { useEffect, useRef, useState } from 'react';
import { ChevronDown, Menu, Moon, Sun, X } from 'lucide-react';
import { AnimatePresence, motion, useScroll, useSpring } from 'motion/react';
import { PageId, ThemeMode } from '../types';

interface NavbarProps {
  currentPage: PageId;
  theme: ThemeMode;
  onToggleTheme: () => void;
  onNavigate: (page: PageId) => void;
}

interface DropdownGroup {
  id: 'company' | 'services';
  label: string;
  items: { id: PageId; label: string; summary: string }[];
}

const DROPDOWN_GROUPS: Record<'company' | 'services', DropdownGroup> = {
  company: {
    id: 'company',
    label: 'Company',
    items: [
      { id: 'about', label: 'About CRES', summary: 'Mission, vision, and industry reform' },
      {
        id: 'insurance',
        label: 'Insurance & Partnerships',
        summary: 'Active Abay Insurance S.C. theft protection',
      },
      {
        id: 'faq',
        label: 'Frequently Asked Questions',
        summary: 'Answers for owners, renters, and partners',
      },
    ],
  },
  services: {
    id: 'services',
    label: 'Services',
    items: [
      {
        id: 'owner-services',
        label: 'Vehicle Owner Services',
        summary: 'End-to-end fleet management & payouts',
      },
      {
        id: 'renter-services',
        label: 'Renter Services',
        summary: 'Verified vehicles and fair agreements',
      },
      {
        id: 'how-it-works',
        label: 'How It Works',
        summary: 'Eight-step managed rental lifecycle',
      },
    ],
  },
};

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  theme,
  onToggleTheme,
  onNavigate,
}) => {
  const [openMenu, setOpenMenu] = useState<'company' | 'services' | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 320, damping: 42, restDelta: 0.002 });

  useEffect(() => {
    const handleOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenMenu(null);
      }
    };
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpenMenu(null);
        setMobileOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutside);
    document.addEventListener('keydown', handleKey);
    return () => {
      document.removeEventListener('mousedown', handleOutside);
      document.removeEventListener('keydown', handleKey);
    };
  }, []);

  const handleSelect = (page: PageId) => {
    setOpenMenu(null);
    setMobileOpen(false);
    onNavigate(page);
  };

  const isCompanyActive = ['about', 'insurance', 'faq'].includes(currentPage);
  const isServicesActive = ['owner-services', 'renter-services', 'how-it-works'].includes(
    currentPage
  );

  return (
    <header
      ref={navRef}
      className="sticky top-0 z-40 bg-white/95 dark:bg-[#050B18]/92 backdrop-blur-md border-b border-slate-200/90 dark:border-slate-800 transition-colors duration-200"
    >
      {/* Scroll Progress Indicator */}
      <motion.div
        aria-hidden="true"
        style={{ scaleX, transformOrigin: '0%' }}
        className="h-[2px] w-full bg-gradient-to-r from-blue-700 via-cyan-500 to-blue-600"
      />

      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 h-14 lg:h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Single-line brand wordmark */}
        <button
          type="button"
          onClick={() => handleSelect('home')}
          className="font-display text-xl font-extrabold tracking-tight text-[#09142A] dark:text-white whitespace-nowrap shrink-0 flex items-center gap-2.5 cursor-pointer"
          aria-label="CRES Car Rental Ecosystem Home"
        >
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
            <rect width="28" height="28" rx="6" fill="#1E3A8A" />
            <path
              d="M19.5 9.5A6.5 6.5 0 1 0 19.5 18.5"
              stroke="#FFFFFF"
              strokeWidth="2.4"
              strokeLinecap="round"
            />
            <circle cx="19.5" cy="14" r="2.2" fill="#06B6D4" />
          </svg>
          <span>CRES</span>
        </button>

        {/* Zone 2: 5 concise single-line nav items */}
        <nav
          aria-label="Primary Navigation"
          className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-600 dark:text-slate-300"
        >
          <button
            type="button"
            onClick={() => handleSelect('home')}
            className={`whitespace-nowrap shrink-0 py-1 border-b-2 transition-colors duration-150 cursor-pointer ${
              currentPage === 'home'
                ? 'border-blue-700 dark:border-cyan-400 text-[#09142A] dark:text-white font-semibold'
                : 'border-transparent hover:text-[#09142A] dark:hover:text-white'
            }`}
          >
            Home
          </button>

          {/* Company Dropdown */}
          <div className="relative">
            <button
              type="button"
              aria-expanded={openMenu === 'company'}
              onClick={() => setOpenMenu(openMenu === 'company' ? null : 'company')}
              className={`inline-flex items-center gap-1 whitespace-nowrap shrink-0 py-1 border-b-2 transition-colors duration-150 cursor-pointer ${
                isCompanyActive
                  ? 'border-blue-700 dark:border-cyan-400 text-[#09142A] dark:text-white font-semibold'
                  : 'border-transparent hover:text-[#09142A] dark:hover:text-white'
              }`}
            >
              <span>Company</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-150 ${
                  openMenu === 'company' ? 'rotate-180' : ''
                }`}
                aria-hidden="true"
              />
            </button>

            <AnimatePresence>
              {openMenu === 'company' && (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 4 }}
                  transition={{ duration: 0.15 }}
                  className="absolute left-0 top-full mt-3 w-76 bg-white dark:bg-[#0B1528] border border-slate-200 dark:border-slate-800 rounded-xl shadow-xl p-2 z-50"
                >
                  {DROPDOWN_GROUPS.company.items.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => handleSelect(item.id)}
                      className={`w-full text-left px-3.5 py-2.5 rounded-lg transition-colors duration-150 cursor-pointer ${
                        currentPage === item.id
                          ? 'bg-blue-50 dark:bg-blue-950/60 text-blue-800 dark:text-cyan-300'
                          : 'hover:bg-slate-50 dark:hover:bg-slate-800/70 text-slate-800 dark:text-slate-100'
                      }`}
                    >
                      <div className="text-sm font-semibold">{item.label}</div>
                      <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                        {item.summary}
                      </div>
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Services Dropdown */}
          <div className="relative">
            <button
              type="button"
              aria-expanded={openMenu === 'services'}
              onClick={() => setOpenMenu(openMenu === 'services' ? null : 'services')}
              className={`inline-flex items-center gap-1 whitespace-nowrap shrink-0 py-1 border-b-2 transition-colors duration-150 cursor-pointer ${
                isServicesActive
                  ? 'border-blue-700 dark:border-cyan-400 text-[#09142A] dark:text-white font-semibold'
                  : 'border-transparent hover:text-[#09142A] dark:hover:text-white'
              }`}
            >
              <span>Services</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-150 ${
                  openMenu === 'services' ? 'rotate-180' : ''
                }`}
                aria-hidden="true"
              />
            </button>

            <AnimatePresence>
              {openMenu === 'services' && (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 4 }}
                  transition={{ duration: 0.15 }}
                  className="absolute left-0 top-full mt-3 w-76 bg-white dark:bg-[#0B1528] border border-slate-200 dark:border-slate-800 rounded-xl shadow-xl p-2 z-50"
                >
                  {DROPDOWN_GROUPS.services.items.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => handleSelect(item.id)}
                      className={`w-full text-left px-3.5 py-2.5 rounded-lg transition-colors duration-150 cursor-pointer ${
                        currentPage === item.id
                          ? 'bg-blue-50 dark:bg-blue-950/60 text-blue-800 dark:text-cyan-300'
                          : 'hover:bg-slate-50 dark:hover:bg-slate-800/70 text-slate-800 dark:text-slate-100'
                      }`}
                    >
                      <div className="text-sm font-semibold">{item.label}</div>
                      <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                        {item.summary}
                      </div>
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <button
            type="button"
            onClick={() => handleSelect('security')}
            className={`whitespace-nowrap shrink-0 py-1 border-b-2 transition-colors duration-150 cursor-pointer ${
              currentPage === 'security'
                ? 'border-blue-700 dark:border-cyan-400 text-[#09142A] dark:text-white font-semibold'
                : 'border-transparent hover:text-[#09142A] dark:hover:text-white'
            }`}
          >
            Security
          </button>

          <button
            type="button"
            onClick={() => handleSelect('business-model')}
            className={`whitespace-nowrap shrink-0 py-1 border-b-2 transition-colors duration-150 cursor-pointer ${
              currentPage === 'business-model'
                ? 'border-blue-700 dark:border-cyan-400 text-[#09142A] dark:text-white font-semibold'
                : 'border-transparent hover:text-[#09142A] dark:hover:text-white'
            }`}
          >
            Business Model
          </button>
        </nav>

        {/* Zone 3: Theme Switch + Primary CTA + Mobile Trigger */}
        <div className="flex items-center gap-2.5 shrink-0">
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            className="inline-flex items-center justify-center w-10 h-10 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-[#0D192F] text-slate-700 dark:text-cyan-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-150 cursor-pointer"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          <button
            type="button"
            onClick={() => handleSelect('contact')}
            className="hidden lg:inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-white bg-blue-700 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-500 rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer"
          >
            Contact Us
          </button>

          <button
            type="button"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="lg:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-[#050B18] px-6 py-4 max-h-[80vh] overflow-y-auto"
          >
            <div className="grid grid-cols-1 gap-1">
              {(
                [
                  { id: 'home', label: 'Home' },
                  { id: 'about', label: 'About CRES' },
                  { id: 'owner-services', label: 'Vehicle Owner Services' },
                  { id: 'renter-services', label: 'Renter Services' },
                  { id: 'security', label: 'Security & Technology' },
                  { id: 'how-it-works', label: 'How It Works' },
                  { id: 'business-model', label: 'Business Model & Calculator' },
                  { id: 'insurance', label: 'Insurance & Partnerships' },
                  { id: 'faq', label: 'Frequently Asked Questions' },
                ] as { id: PageId; label: string }[]
              ).map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleSelect(item.id)}
                  className={`w-full text-left px-3 py-2.5 min-h-[44px] rounded-lg text-sm font-medium transition-colors ${
                    currentPage === item.id
                      ? 'bg-blue-50 dark:bg-blue-950/60 text-blue-800 dark:text-cyan-300 font-semibold'
                      : 'text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800/70'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button
                type="button"
                onClick={() => handleSelect('contact')}
                className="mt-3 w-full py-3 px-4 rounded-lg bg-blue-700 text-white text-sm font-semibold text-center min-h-[44px]"
              >
                Contact Us
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
