import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { PageId, ThemeMode } from '../types';
import { CONTACT_INFO } from '../data/cresData';

interface FooterProps {
  theme: ThemeMode;
  onToggleTheme: () => void;
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ theme, onToggleTheme, onNavigate }) => {
  const linkClass =
    'text-sm text-slate-400 hover:text-white transition-colors text-left cursor-pointer';

  return (
    <footer className="bg-[#060E1F] dark:bg-[#030712] text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-white/10">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
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
              <span className="font-display text-lg font-extrabold tracking-tight text-white">
                CRES
              </span>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed max-w-xs">
              Car Rental Ecosystem. Managed vehicle rental operations in Addis Ababa built around
              dual GPS security, verified renters, and transparent fee administration.
            </p>
            <div className="pt-1">
              <button
                type="button"
                onClick={onToggleTheme}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-slate-700 bg-white/5 hover:bg-white/10 text-xs font-medium text-slate-200 transition-colors cursor-pointer"
              >
                {theme === 'dark' ? (
                  <>
                    <Sun className="w-3.5 h-3.5 text-cyan-300" />
                    <span>Light Theme</span>
                  </>
                ) : (
                  <>
                    <Moon className="w-3.5 h-3.5 text-cyan-300" />
                    <span>Dark Theme</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Ecosystem & Services */}
          <div>
            <h3 className="font-display text-sm font-semibold text-white mb-4">
              Services &amp; Operations
            </h3>
            <ul className="space-y-2.5">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('owner-services')}
                  className={linkClass}
                >
                  Vehicle Owner Services
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('renter-services')}
                  className={linkClass}
                >
                  Renter Services
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('how-it-works')}
                  className={linkClass}
                >
                  How It Works (8 Steps)
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('security')}
                  className={linkClass}
                >
                  Security &amp; Dual GPS
                </button>
              </li>
            </ul>
          </div>

          {/* Company & Governance */}
          <div>
            <h3 className="font-display text-sm font-semibold text-white mb-4">
              Company &amp; Model
            </h3>
            <ul className="space-y-2.5">
              <li>
                <button type="button" onClick={() => onNavigate('about')} className={linkClass}>
                  About CRES
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('business-model')}
                  className={linkClass}
                >
                  Business Model &amp; ETB Calculator
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('insurance')}
                  className={linkClass}
                >
                  Insurance &amp; Partnerships
                </button>
              </li>
              <li>
                <button type="button" onClick={() => onNavigate('faq')} className={linkClass}>
                  Frequently Asked Questions
                </button>
              </li>
            </ul>
          </div>

          {/* Corporate Contact */}
          <div>
            <h3 className="font-display text-sm font-semibold text-white mb-4">
              Addis Ababa Office
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>Bole Commercial District, Addis Ababa, Ethiopia</li>
              <li>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="hover:text-white transition-colors break-all"
                >
                  {CONTACT_INFO.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="hover:text-white transition-colors font-mono-tabular"
                >
                  {CONTACT_INFO.phone}
                </a>
              </li>
              <li className="pt-2">
                <button
                  type="button"
                  onClick={() => onNavigate('contact')}
                  className="inline-flex items-center px-4 py-2 text-xs font-semibold text-white bg-[#1D4ED8] hover:bg-[#1E40AF] rounded-lg transition-colors cursor-pointer whitespace-nowrap"
                >
                  Submit Corporate Inquiry
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} CRES (Car Rental Ecosystem). All rights reserved.</p>
          <p className="max-w-xl sm:text-right">
            Informational corporate website only. Online vehicle booking, account portals, and the
            CRES mobile application are separate future phases.
          </p>
        </div>
      </div>
    </footer>
  );
};
