import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { PageId } from '../types';
import { PageHeroVector } from './PageHeroVector';

export interface HeroHighlight {
  value: string;
  label: string;
}

interface PageHeaderProps {
  sectionLabel: string;
  title: string;
  subtitle: string;
  heroVariant: Exclude<PageId, 'home'>;
  heroImageTitle?: string;
  heroImageLocation?: string;
  highlights?: HeroHighlight[];
  primaryCta?: { label: string; target: PageId };
  secondaryCta?: { label: string; target: PageId };
  onNavigate?: (page: PageId) => void;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  sectionLabel,
  title,
  subtitle,
  heroVariant,
  heroImageTitle,
  heroImageLocation = 'Addis Ababa · CRES Operations',
  highlights,
  primaryCta,
  secondaryCta,
  onNavigate,
}) => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-[#061024] dark:bg-[#040914] text-white border-b border-slate-800/90">
      {/* Kinetic Ambient Light Blooms */}
      <motion.div
        aria-hidden="true"
        animate={
          prefersReducedMotion
            ? undefined
            : {
                opacity: [0.55, 0.92, 0.55],
                scale: [1, 1.09, 1],
                x: [0, -24, 0],
                y: [0, 14, 0],
              }
        }
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-36 -right-20 w-[620px] h-[620px] rounded-full bg-[radial-gradient(circle,rgba(37,99,235,0.40)_0%,rgba(6,182,212,0.16)_45%,transparent_72%)] pointer-events-none"
      />
      <motion.div
        aria-hidden="true"
        animate={
          prefersReducedMotion
            ? undefined
            : {
                opacity: [0.35, 0.72, 0.35],
                x: [0, 28, 0],
                y: [0, -12, 0],
              }
        }
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -bottom-36 -left-24 w-[480px] h-[480px] rounded-full bg-[radial-gradient(circle,rgba(6,182,212,0.22)_0%,transparent_70%)] pointer-events-none"
      />

      {/* Animated Vector Corridor Horizon Line */}
      <svg
        aria-hidden="true"
        viewBox="0 0 1200 320"
        preserveAspectRatio="none"
        className="absolute inset-0 w-full h-full opacity-35 pointer-events-none"
      >
        <defs>
          <linearGradient id="heroArcGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(37,99,235,0)" />
            <stop offset="45%" stopColor="rgba(34,211,238,0.55)" />
            <stop offset="100%" stopColor="rgba(37,99,235,0)" />
          </linearGradient>
        </defs>
        <motion.path
          d="M -40 265 Q 320 140 680 215 T 1240 95"
          fill="none"
          stroke="url(#heroArcGrad)"
          strokeWidth="1.5"
          initial={prefersReducedMotion ? false : { pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        />
        <motion.path
          d="M -40 295 Q 380 205 740 250 T 1240 160"
          fill="none"
          stroke="url(#heroArcGrad)"
          strokeWidth="1"
          strokeDasharray="6 6"
          animate={prefersReducedMotion ? undefined : { strokeDashoffset: [0, -48] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
        />
      </svg>

      {/* Architectural Grid Texture */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(148,163,184,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.12) 1px, transparent 1px)',
          backgroundSize: '44px 44px',
        }}
      />

      <div className="relative max-w-[1200px] mx-auto px-5 sm:px-6 py-10 sm:py-14 lg:py-18">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 lg:gap-10 items-stretch">
          {/* Left Column: Staggered Editorial Proposition */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-6">
            <div>
              <motion.div
                initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-center gap-2 text-xs text-cyan-300 font-medium tracking-wide mb-3"
              >
                <button
                  type="button"
                  onClick={() => onNavigate?.('home')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  CRES
                </button>
                <span aria-hidden="true" className="text-slate-500">
                  /
                </span>
                <span>{sectionLabel}</span>
              </motion.div>

              <motion.h1
                initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.42, delay: 0.06, ease: [0.16, 1, 0.3, 1] }}
                className="font-display text-3xl sm:text-4xl lg:text-[44px] font-extrabold tracking-tight text-white max-w-2xl leading-[1.1]"
              >
                {title}
              </motion.h1>

              <motion.p
                initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.42, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
                className="mt-3.5 text-sm sm:text-base lg:text-lg text-slate-300 max-w-xl leading-relaxed"
              >
                {subtitle}
              </motion.p>

              {(primaryCta || secondaryCta) && onNavigate && (
                <motion.div
                  initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
                  className="mt-6 flex flex-wrap items-center gap-3"
                >
                  {primaryCta && (
                    <motion.button
                      type="button"
                      whileHover={prefersReducedMotion ? undefined : { y: -2 }}
                      whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
                      onClick={() => onNavigate(primaryCta.target)}
                      className="inline-flex items-center justify-center gap-2 px-5 py-3 min-h-[44px] rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold transition-colors whitespace-nowrap shrink-0 cursor-pointer shadow-lg shadow-blue-900/30"
                    >
                      <span>{primaryCta.label}</span>
                      <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </motion.button>
                  )}
                  {secondaryCta && (
                    <motion.button
                      type="button"
                      whileHover={prefersReducedMotion ? undefined : { y: -2 }}
                      whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
                      onClick={() => onNavigate(secondaryCta.target)}
                      className="inline-flex items-center justify-center gap-2 px-4 py-3 min-h-[44px] rounded-xl border border-slate-700 bg-white/5 hover:bg-white/10 text-slate-100 text-sm font-semibold transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                    >
                      <span>{secondaryCta.label}</span>
                    </motion.button>
                  )}
                </motion.div>
              )}
            </div>

            {/* Staggered 3-Column Visual Highlight Strip */}
            {highlights && highlights.length > 0 && (
              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      staggerChildren: 0.08,
                      delayChildren: 0.2,
                    },
                  },
                }}
                className="grid grid-cols-3 gap-2.5 sm:gap-4 pt-4 border-t border-slate-800/90"
              >
                {highlights.map((item) => (
                  <motion.div
                    key={item.label}
                    variants={
                      prefersReducedMotion
                        ? undefined
                        : {
                            hidden: { opacity: 0, y: 12, scale: 0.97 },
                            visible: {
                              opacity: 1,
                              y: 0,
                              scale: 1,
                              transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
                            },
                          }
                    }
                    whileHover={prefersReducedMotion ? undefined : { y: -2 }}
                    className="rounded-xl bg-[#0B1933]/85 border border-slate-800 hover:border-cyan-500/40 px-3 py-2.5 sm:px-4 sm:py-3 transition-colors"
                  >
                    <div className="font-mono-tabular text-base sm:text-xl font-bold text-cyan-300">
                      {item.value}
                    </div>
                    <div className="text-[11px] sm:text-xs text-slate-300 mt-0.5 leading-snug">
                      {item.label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </div>

          {/* Right Column: Purpose-Built Animated Vector Showcase */}
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.96, y: 14 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.48, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            whileHover={prefersReducedMotion ? undefined : { y: -3 }}
            className="lg:col-span-5 flex"
          >
            <PageHeroVector
              variant={heroVariant}
              title={heroImageTitle}
              location={heroImageLocation}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
