import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useReducedMotion, AnimatePresence } from 'motion/react';
import { ArrowRight, ShieldCheck, Check, Eye, FileCheck2, Compass, Radio, Shield, Layers, Percent } from 'lucide-react';
import { CORE_METRICS, IMAGES, LIFECYCLE_STEPS } from '../data/cresData';
import { PageId } from '../types';
import { SafeImage } from '../components/SafeImage';
import { AnimatedCounter } from '../components/AnimatedCounter';
import { AddisGpsMapIllustration, FeeBreakdownDiagram } from '../components/VisualIllustrations';
import { FleetShowcaseGallery } from '../components/FleetShowcaseGallery';
import { MarqueeRibbon } from '../components/MarqueeRibbon';
import { StaggerContainer, RevealItem, RevealBlock } from '../components/MotionPrimitives';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
}

const HERO_FRAMES = [
  {
    src: IMAGES.toyotaRav4,
    title: 'Addis Ababa Managed Fleet',
    location: 'CRES Managed Compound · Bole District',
  },
  {
    src: IMAGES.suzukiDzire,
    title: 'City-Ready Inspected Sedans',
    location: 'Suzuki Dzire · Multi-Point Verified',
  },
  {
    src: IMAGES.bydSeagull,
    title: 'All-Electric Urban Mobility',
    location: 'BYD Seagull EV · 24/7 GPS Guarded',
  },
];

const METRIC_ICONS = [Eye, Radio, Layers, Percent];

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const prefersReducedMotion = useReducedMotion();
  const [activeHeroIdx, setActiveHeroIdx] = useState(0);
  const [mobileAudienceTab, setMobileAudienceTab] = useState<'owners' | 'renters'>('owners');
  const heroRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const frameParallax = useTransform(scrollYProgress, [0, 1], ['0%', '6%']);

  useEffect(() => {
    if (prefersReducedMotion) return;
    const timer = window.setInterval(() => {
      setActiveHeroIdx((prev) => (prev + 1) % HERO_FRAMES.length);
    }, 5500);
    return () => window.clearInterval(timer);
  }, [prefersReducedMotion, activeHeroIdx]);

  return (
    <div className="bg-white dark:bg-[#050B18] transition-colors duration-200">
      {/* 1. Animated Architectural Hero */}
      <section
        ref={heroRef}
        className="relative overflow-hidden bg-[#061024] dark:bg-[#040914] text-white"
      >
        {/* Multi-layer volumetric orbital lighting blooms */}
        <motion.div
          aria-hidden="true"
          animate={
            prefersReducedMotion
              ? undefined
              : {
                  opacity: [0.55, 0.95, 0.55],
                  scale: [1, 1.14, 1],
                  x: [0, -38, 12, 0],
                  y: [0, 22, -10, 0],
                }
          }
          transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-40 right-0 w-[680px] h-[680px] rounded-full bg-[radial-gradient(circle,rgba(37,99,235,0.46)_0%,rgba(6,182,212,0.20)_48%,transparent_72%)] pointer-events-none"
        />
        <motion.div
          aria-hidden="true"
          animate={
            prefersReducedMotion
              ? undefined
              : {
                  opacity: [0.35, 0.82, 0.35],
                  scale: [1, 1.12, 1],
                  x: [0, 36, -12, 0],
                  y: [0, -24, 10, 0],
                }
          }
          transition={{ duration: 13, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -bottom-44 -left-24 w-[560px] h-[560px] rounded-full bg-[radial-gradient(circle,rgba(6,182,212,0.28)_0%,rgba(29,78,216,0.14)_50%,transparent_72%)] pointer-events-none"
        />
        <motion.div
          aria-hidden="true"
          animate={
            prefersReducedMotion
              ? undefined
              : {
                  opacity: [0.2, 0.55, 0.2],
                  x: [-120, 220, -120],
                  y: [0, -30, 0],
                }
          }
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/3 left-1/4 w-[420px] h-[420px] rounded-full bg-[radial-gradient(circle,rgba(34,211,238,0.18)_0%,transparent_70%)] pointer-events-none"
        />

        {/* Slow horizontal light-sweep scanner wave */}
        {!prefersReducedMotion && (
          <motion.div
            aria-hidden="true"
            animate={{ x: ['-30%', '130%'] }}
            transition={{ duration: 9, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent skew-x-[-18deg] pointer-events-none"
          />
        )}

        {/* Slowly panning architectural coordinate grid (transform-only) */}
        <motion.div
          aria-hidden="true"
          animate={
            prefersReducedMotion
              ? undefined
              : {
                  x: [0, -44],
                  y: [0, -44],
                }
          }
          transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
          className="absolute -inset-16 opacity-25 pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(148,163,184,0.16) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.16) 1px, transparent 1px)',
            backgroundSize: '44px 44px',
          }}
        />

        {/* Kinetic Corridor Network SVG Backdrop */}
        <svg
          aria-hidden="true"
          viewBox="0 0 1200 520"
          preserveAspectRatio="none"
          className="absolute inset-0 w-full h-full opacity-55 pointer-events-none"
        >
          <defs>
            <linearGradient id="homeHeroArcGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(37,99,235,0)" />
              <stop offset="45%" stopColor="rgba(34,211,238,0.68)" />
              <stop offset="100%" stopColor="rgba(37,99,235,0)" />
            </linearGradient>
            <linearGradient id="homeHeroSecondaryGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(6,182,212,0)" />
              <stop offset="50%" stopColor="rgba(59,130,246,0.55)" />
              <stop offset="100%" stopColor="rgba(6,182,212,0)" />
            </linearGradient>
          </defs>

          <motion.path
            d="M -40 360 Q 320 185 700 295 T 1240 125"
            fill="none"
            stroke="url(#homeHeroArcGrad)"
            strokeWidth="2"
            initial={prefersReducedMotion ? false : { pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.25, ease: [0.16, 1, 0.3, 1] }}
          />
          <motion.path
            d="M -40 430 Q 380 285 760 355 T 1240 225"
            fill="none"
            stroke="url(#homeHeroArcGrad)"
            strokeWidth="1.4"
            strokeDasharray="8 8"
            animate={prefersReducedMotion ? undefined : { strokeDashoffset: [0, -64] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: 'linear' }}
          />
          <motion.path
            d="M -40 165 Q 340 250 740 140 T 1240 280"
            fill="none"
            stroke="url(#homeHeroSecondaryGrad)"
            strokeWidth="1.2"
            strokeDasharray="4 10"
            animate={prefersReducedMotion ? undefined : { strokeDashoffset: [0, 56] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
          />

          {/* Orbiting Telemetry Radar Rings on Background */}
          {!prefersReducedMotion && (
            <motion.g
              style={{ originX: '920px', originY: '260px' }}
              animate={{ rotate: 360 }}
              transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
            >
              <circle
                cx="920"
                cy="260"
                r="210"
                fill="none"
                stroke="rgba(34,211,238,0.14)"
                strokeWidth="1"
                strokeDasharray="10 14"
              />
              <circle cx="1130" cy="260" r="3.5" fill="rgba(34,211,238,0.75)" />
            </motion.g>
          )}
          {!prefersReducedMotion && (
            <motion.g
              style={{ originX: '240px', originY: '120px' }}
              animate={{ rotate: -360 }}
              transition={{ duration: 36, repeat: Infinity, ease: 'linear' }}
            >
              <circle
                cx="240"
                cy="120"
                r="165"
                fill="none"
                stroke="rgba(59,130,246,0.12)"
                strokeWidth="1"
                strokeDasharray="6 12"
              />
            </motion.g>
          )}

          {/* Pulsing Corridor Beacons */}
          {!prefersReducedMotion && (
            <>
              <motion.circle
                cx="340"
                cy="235"
                r="18"
                fill="none"
                stroke="rgba(34,211,238,0.45)"
                strokeWidth="1"
                initial={{ scale: 0.4, opacity: 0.9 }}
                animate={{ scale: 2.2, opacity: 0 }}
                transition={{ duration: 3.2, repeat: Infinity, ease: 'easeOut' }}
              />
              <circle cx="340" cy="235" r="3" fill="#22D3EE" opacity="0.8" />
              <motion.circle
                cx="700"
                cy="295"
                r="18"
                fill="none"
                stroke="rgba(59,130,246,0.45)"
                strokeWidth="1"
                initial={{ scale: 0.4, opacity: 0.9 }}
                animate={{ scale: 2.2, opacity: 0 }}
                transition={{ duration: 3.6, delay: 1.4, repeat: Infinity, ease: 'easeOut' }}
              />
              <circle cx="700" cy="295" r="3" fill="#60A5FA" opacity="0.8" />
            </>
          )}
        </svg>

        <div className="relative max-w-[1200px] mx-auto px-5 sm:px-6 py-10 sm:py-14 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            {/* Left Column: Staggered Editorial Value Proposition */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              <motion.p
                initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="text-xs font-semibold text-cyan-300 tracking-wide mb-3 sm:mb-4"
              >
                Addis Ababa, Ethiopia · Managed Vehicle Rental Ecosystem
              </motion.p>

              <motion.h1
                initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.42, delay: 0.06, ease: [0.16, 1, 0.3, 1] }}
                className="font-display text-3xl sm:text-5xl lg:text-[52px] font-extrabold tracking-tight text-white leading-[1.08]"
              >
                Safer, transparent, and professionally managed car rentals.
              </motion.h1>

              <motion.p
                initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.42, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
                className="mt-4 text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed max-w-xl"
              >
                CRES replaces informal street brokerage with full-lifecycle vehicle stewardship—
                combining dual GPS security, 24-hour monitoring, verified renters, and predictable
                service fees.
              </motion.p>

              <motion.div
                initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
                className="mt-6 sm:mt-8 flex flex-wrap items-center gap-3 sm:gap-4"
              >
                <motion.button
                  type="button"
                  whileHover={prefersReducedMotion ? undefined : { y: -2 }}
                  whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
                  onClick={() => onNavigate('how-it-works')}
                  className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3.5 min-h-[44px] rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer shadow-lg shadow-blue-900/30"
                >
                  <span>Explore the 8-Step Lifecycle</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </motion.button>
              </motion.div>
            </div>

            {/* Right Column: Interactive Auto-Advancing Showcase Frame */}
            <motion.div
              style={prefersReducedMotion ? undefined : { y: frameParallax }}
              initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.97, y: 14 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.48, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-6 flex flex-col gap-3"
            >
              <div className="relative flex-1 aspect-[16/10] lg:aspect-auto lg:min-h-[380px] rounded-2xl overflow-hidden border border-slate-700/70 bg-[#09142A] shadow-2xl">
                <AnimatePresence initial={false}>
                  <motion.div
                    key={HERO_FRAMES[activeHeroIdx].src}
                    initial={prefersReducedMotion ? false : { opacity: 0, scale: 1.03 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={prefersReducedMotion ? undefined : { opacity: 0 }}
                    transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-0"
                  >
                    <SafeImage
                      src={HERO_FRAMES[activeHeroIdx].src}
                      alt={HERO_FRAMES[activeHeroIdx].title}
                      fallbackTitle={HERO_FRAMES[activeHeroIdx].title}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                </AnimatePresence>
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-[#050B18]/90 via-[#050B18]/20 to-transparent"
                />
                <motion.div
                  key={`caption-${activeHeroIdx}`}
                  initial={prefersReducedMotion ? false : { opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.32 }}
                  className="absolute inset-x-0 bottom-0 p-4 sm:p-6"
                >
                  <p className="text-[11px] sm:text-xs font-medium text-cyan-300">
                    {HERO_FRAMES[activeHeroIdx].location}
                  </p>
                  <p className="font-display text-base sm:text-lg font-bold text-white mt-0.5">
                    {HERO_FRAMES[activeHeroIdx].title}
                  </p>
                </motion.div>
              </div>

              {/* Interactive Thumbnail Switcher with Slide Progress */}
              <div className="grid grid-cols-3 gap-2.5 sm:gap-3">
                {HERO_FRAMES.map((frame, index) => {
                  const isActive = activeHeroIdx === index;
                  return (
                    <motion.button
                      key={frame.title}
                      type="button"
                      whileHover={prefersReducedMotion ? undefined : { y: -2 }}
                      whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
                      onClick={() => setActiveHeroIdx(index)}
                      aria-label={`View showcase scene: ${frame.title}`}
                      className={`group relative aspect-[16/9] rounded-xl overflow-hidden border transition-colors duration-150 cursor-pointer ${
                        isActive
                          ? 'border-cyan-400 ring-2 ring-cyan-400/35'
                          : 'border-slate-700/70 opacity-70 hover:opacity-100'
                      }`}
                    >
                      <SafeImage
                        src={frame.src}
                        alt={frame.title}
                        fallbackTitle={frame.title}
                        className="w-full h-full object-cover"
                      />
                      {isActive && !prefersReducedMotion && (
                        <motion.span
                          key={`progress-${activeHeroIdx}`}
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          transition={{ duration: 5.5, ease: 'linear' }}
                          style={{ transformOrigin: 'left center' }}
                          className="absolute inset-x-0 bottom-0 h-1 bg-cyan-400"
                        />
                      )}
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Visual Metrics Strip (Crisp 2x2 Cards on Mobile, 4-Column Row on Desktop) */}
      <section className="overflow-hidden bg-slate-50 dark:bg-[#081022] border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 py-8 sm:py-10">
          <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {CORE_METRICS.map((metric, idx) => {
              const Icon = METRIC_ICONS[idx % METRIC_ICONS.length];
              return (
                <RevealItem
                  key={metric.label}
                  hoverLift
                  className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-[#0B1528] border border-slate-200 dark:border-slate-800 hover:border-blue-300 dark:hover:border-cyan-500/40 space-y-1.5 transition-colors"
                >
                  <div className="flex items-center justify-between gap-2">
                    <div className="font-display text-2xl sm:text-4xl font-extrabold text-[#09142A] dark:text-white">
                      <AnimatedCounter target={metric.value} suffix={metric.suffix} />
                    </div>
                    <Icon
                      className="w-4 h-4 sm:w-5 sm:h-5 text-blue-700 dark:text-cyan-400 shrink-0"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-blue-800 dark:text-cyan-300">
                    {metric.label}
                  </div>
                  <p className="hidden sm:block text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {metric.detail}
                  </p>
                </RevealItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Kinetic Editorial Ribbon */}
      <MarqueeRibbon />

      {/* 3. Managed Fleet Classes: Types of Vehicles We Rent */}
      <section className="py-14 sm:py-20 bg-white dark:bg-[#050B18]">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6">
          <RevealBlock>
            <FleetShowcaseGallery onNavigate={onNavigate} />
          </RevealBlock>
        </div>
      </section>

      {/* 4. Company Introduction & Visual Pillars */}
      <section className="bg-slate-50 dark:bg-[#081022] py-14 sm:py-20 border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <RevealBlock className="lg:col-span-6 space-y-4 sm:space-y-5">
              <p className="text-xs font-semibold text-blue-700 dark:text-cyan-400">
                Why CRES Exists · Beyond Informal Brokers
              </p>
              <h2 className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-[#09142A] dark:text-white leading-tight">
                Institutional accountability for every kilometer in Ethiopia.
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                Traditional vehicle rental brokers in Addis Ababa act purely as short-term
                middlemen. Once keys change hands, both owner and renter are left exposed to
                unverified drivers, fee disputes, and theft risk.
              </p>
              <p className="hidden sm:block text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                CRES assumes continuous operational stewardship across the entire rental period—from
                document verification and dual GPS installation to active monitoring, scheduled
                maintenance, legal coordination, and verified vehicle return.
              </p>
              <div className="pt-1">
                <button
                  type="button"
                  onClick={() => onNavigate('about')}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 dark:text-cyan-300 hover:text-blue-900 dark:hover:text-white transition-colors cursor-pointer"
                >
                  <span>Read About CRES &amp; Industry Reform</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>
            </RevealBlock>

            {/* 2x2 Tactile Cards on Mobile & Desktop */}
            <StaggerContainer className="lg:col-span-6 grid grid-cols-2 gap-3 sm:gap-4">
              <RevealItem
                hoverLift
                className="p-4 sm:p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0B1528] hover:border-blue-300 dark:hover:border-cyan-500/40 space-y-2 transition-colors"
              >
                <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 text-blue-700 dark:text-cyan-400" aria-hidden="true" />
                <h3 className="font-display text-sm sm:text-base font-bold text-[#09142A] dark:text-white">
                  Verified Participants
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Titles (Libre), licenses, and guarantors screened before every contract.
                </p>
              </RevealItem>

              <RevealItem
                hoverLift
                className="p-4 sm:p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0B1528] hover:border-blue-300 dark:hover:border-cyan-500/40 space-y-2 transition-colors"
              >
                <Eye className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-600 dark:text-cyan-400" aria-hidden="true" />
                <h3 className="font-display text-sm sm:text-base font-bold text-[#09142A] dark:text-white">
                  24-Hour Oversight
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Continuous telemetry, geofence alerts, and emergency dispatch.
                </p>
              </RevealItem>

              <RevealItem
                hoverLift
                className="p-4 sm:p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0B1528] hover:border-blue-300 dark:hover:border-cyan-500/40 space-y-2 transition-colors"
              >
                <FileCheck2 className="w-5 h-5 sm:w-6 sm:h-6 text-blue-700 dark:text-cyan-400" aria-hidden="true" />
                <h3 className="font-display text-sm sm:text-base font-bold text-[#09142A] dark:text-white">
                  Digital Condition Logs
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Timestamped intake and return checklists prevent unfair disputes.
                </p>
              </RevealItem>

              <RevealItem
                hoverLift
                className="p-4 sm:p-6 rounded-2xl border border-slate-200 dark:border-blue-800/60 bg-[#09142A] dark:bg-[#102040] hover:border-cyan-500/50 text-white space-y-2 transition-colors"
              >
                <div className="font-mono-tabular text-base sm:text-lg font-bold text-cyan-300">
                  92% Net
                </div>
                <h3 className="font-display text-sm sm:text-base font-bold text-white">
                  8% Owner · +3% Renter
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Only 8% is cut from owners; the 3% renter fee comes from the renter.
                </p>
              </RevealItem>
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* 5. Services Overview: Interactive Segmented View on Mobile, Side-by-Side on Desktop */}
      <section className="bg-white dark:bg-[#050B18] py-14 sm:py-20">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6">
          <RevealBlock className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-12">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold text-blue-700 dark:text-cyan-400">
                Services Overview
              </p>
              <h2 className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-[#09142A] dark:text-white mt-2">
                Structured protection for owners. Reliable access for renters.
              </h2>
            </div>

            {/* Mobile Audience Switcher */}
            <div
              role="tablist"
              aria-label="Switch between Vehicle Owner and Renter overview"
              className="lg:hidden grid grid-cols-2 gap-1 p-1 rounded-xl bg-slate-100 dark:bg-[#0D192F] border border-slate-200 dark:border-slate-800"
            >
              <button
                type="button"
                role="tab"
                aria-selected={mobileAudienceTab === 'owners'}
                onClick={() => setMobileAudienceTab('owners')}
                className={`py-2.5 px-3 min-h-[44px] rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                  mobileAudienceTab === 'owners'
                    ? 'bg-white dark:bg-[#162744] text-[#09142A] dark:text-white shadow-sm'
                    : 'text-slate-600 dark:text-slate-400'
                }`}
              >
                For Vehicle Owners
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={mobileAudienceTab === 'renters'}
                onClick={() => setMobileAudienceTab('renters')}
                className={`py-2.5 px-3 min-h-[44px] rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                  mobileAudienceTab === 'renters'
                    ? 'bg-white dark:bg-[#162744] text-[#09142A] dark:text-white shadow-sm'
                    : 'text-slate-600 dark:text-slate-400'
                }`}
              >
                For Renters
              </button>
            </div>
          </RevealBlock>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-stretch">
            {/* Vehicle Owner Card */}
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.08 }}
              whileHover={prefersReducedMotion ? undefined : { y: -4 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className={`${
                mobileAudienceTab === 'owners' ? 'flex' : 'hidden lg:flex'
              } rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-blue-300 dark:hover:border-cyan-500/40 bg-slate-50/70 dark:bg-[#0B1528] overflow-hidden flex-col transition-colors`}
            >
              <div className="aspect-[16/10] w-full overflow-hidden bg-slate-900 relative group">
                <SafeImage
                  src={IMAGES.ownerInspection}
                  alt="Ethiopian CRES specialist performing digital multi-point inspection on a vehicle in Addis Ababa"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  fallbackTitle="Owner Fleet Inspection"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-[#050B18]/70 via-transparent to-transparent"
                />
                <span className="absolute bottom-3 left-4 text-xs font-semibold text-cyan-300">
                  For Vehicle Owners · 8% Management Fee
                </span>
              </div>
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-[#09142A] dark:text-white">
                    Earn managed rental income without operational burden
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 mt-2.5 leading-relaxed">
                    CRES manages registration, marketing, renter screening, dual GPS security,
                    preventive maintenance, legal assistance, and monthly ETB income reconciliation.
                  </p>
                  <ul className="mt-4 space-y-2 text-sm text-slate-700 dark:text-slate-200">
                    {[
                      'Dual GPS installation & 24-hour geofence oversight',
                      'Verified renter identity & guarantor documentation',
                      '8% flat owner management fee on completed rentals',
                    ].map((point) => (
                      <li key={point} className="flex items-start gap-2.5">
                        <Check
                          className="w-4 h-4 text-blue-700 dark:text-cyan-400 shrink-0 mt-0.5"
                          aria-hidden="true"
                        />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-800">
                  <button
                    type="button"
                    onClick={() => onNavigate('owner-services')}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 dark:text-cyan-300 hover:text-blue-900 dark:hover:text-white transition-colors cursor-pointer min-h-[44px]"
                  >
                    <span>Explore Vehicle Owner Services</span>
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Renter Card */}
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.08 }}
              whileHover={prefersReducedMotion ? undefined : { y: -4 }}
              transition={{ duration: 0.35, delay: 0.06, ease: [0.16, 1, 0.3, 1] }}
              className={`${
                mobileAudienceTab === 'renters' ? 'flex' : 'hidden lg:flex'
              } rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-blue-300 dark:hover:border-cyan-500/40 bg-slate-50/70 dark:bg-[#0B1528] overflow-hidden flex-col transition-colors`}
            >
              <div className="aspect-[16/10] w-full overflow-hidden bg-slate-900 relative group">
                <SafeImage
                  src={IMAGES.renterVehicle}
                  alt="Silver executive crossover SUV ready for verified corporate handover in Addis Ababa"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  fallbackTitle="CRES Renter Mobility"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-[#050B18]/70 via-transparent to-transparent"
                />
                <span className="absolute bottom-3 left-4 text-xs font-semibold text-cyan-300">
                  For Individual &amp; Corporate Renters · 3% Service Fee
                </span>
              </div>
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-[#09142A] dark:text-white">
                    Dependable vehicles with clear agreements and 24/7 support
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 mt-2.5 leading-relaxed">
                    Avoid arbitrary pricing and uninspected cars. Every CRES rental includes
                    mechanical clearance, joint digital handover records, and emergency assistance.
                  </p>
                  <ul className="mt-4 space-y-2 text-sm text-slate-700 dark:text-slate-200">
                    {[
                      'Transparent 3% renter service fee with zero hidden markups',
                      'Joint baseline inspection protecting against unfair claims',
                      '24-hour emergency roadside and mechanical dispatch',
                    ].map((point) => (
                      <li key={point} className="flex items-start gap-2.5">
                        <Check
                          className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0 mt-0.5"
                          aria-hidden="true"
                        />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-800">
                  <button
                    type="button"
                    onClick={() => onNavigate('renter-services')}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 dark:text-cyan-300 hover:text-blue-900 dark:hover:text-white transition-colors cursor-pointer min-h-[44px]"
                  >
                    <span>Explore Renter Services</span>
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. Security Highlights & Stylized Dual GPS Graphic */}
      <section className="bg-slate-50 dark:bg-[#081022] py-14 sm:py-20 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 space-y-8 sm:space-y-10">
          <RevealBlock className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold text-blue-700 dark:text-cyan-400">
                Security &amp; Technology
              </p>
              <h2 className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-[#09142A] dark:text-white mt-2">
                Redundant Dual GPS architecture built for asset resilience.
              </h2>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('security')}
              className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 dark:text-cyan-300 hover:text-blue-900 dark:hover:text-white whitespace-nowrap shrink-0 cursor-pointer"
            >
              <span>Full Security Specifications</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>
          </RevealBlock>

          <RevealBlock delay={0.08}>
            <AddisGpsMapIllustration />
          </RevealBlock>
        </div>
      </section>

      {/* 7. Eight-Step Lifecycle Overview (Swipeable Horizontal Deck on Mobile) */}
      <section className="bg-[#071124] dark:bg-[#040914] text-white py-14 sm:py-20 border-y border-slate-800">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6">
          <RevealBlock className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-8 sm:mb-12">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold text-cyan-300">Managed Process</p>
              <h2 className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-white mt-2">
                The 8-Step CRES Rental Lifecycle
              </h2>
              <p className="text-sm sm:text-base text-slate-300 mt-2.5 leading-relaxed">
                Every rental follows eight documented operational milestones designed to eliminate
                ambiguity from intake to final payout.
              </p>
            </div>
            <motion.button
              type="button"
              whileHover={prefersReducedMotion ? undefined : { y: -2 }}
              whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
              onClick={() => onNavigate('how-it-works')}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 min-h-[44px] rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold transition-colors whitespace-nowrap shrink-0 cursor-pointer self-start md:self-auto"
            >
              <span>Interactive Lifecycle Guide</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </motion.button>
          </RevealBlock>

          <p className="sm:hidden text-xs text-cyan-300/90 font-medium mb-3">
            Swipe through the 8 stages · Tap any card for details
          </p>

          <StaggerContainer className="flex sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4 overflow-x-auto sm:overflow-visible snap-x snap-mandatory no-scrollbar -mx-5 px-5 sm:mx-0 sm:px-0 pb-2 sm:pb-0">
            {LIFECYCLE_STEPS.map((step) => (
              <RevealItem
                key={step.id}
                hoverLift
                className="w-[74vw] sm:w-auto shrink-0 snap-center flex"
              >
                <button
                  type="button"
                  onClick={() => onNavigate('how-it-works')}
                  className="w-full text-left p-5 rounded-2xl bg-[#0D1A33] border border-slate-800 hover:border-cyan-500/50 transition-colors cursor-pointer flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2.5">
                      <span className="font-mono-tabular text-xs font-semibold text-cyan-300">
                        Step {step.stepNumber}
                      </span>
                      <Shield className="w-4 h-4 text-slate-500" aria-hidden="true" />
                    </div>
                    <h3 className="font-display text-base font-bold text-white">{step.title}</h3>
                    <p className="text-xs text-slate-300 mt-2 leading-relaxed">{step.shortSummary}</p>
                  </div>
                </button>
              </RevealItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* 8. Transparent Business Model Preview & CTA */}
      <section className="overflow-hidden bg-slate-50 dark:bg-[#081022] py-14 sm:py-20">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 space-y-10 sm:space-y-12">
          <RevealBlock>
            <FeeBreakdownDiagram />
          </RevealBlock>

          <RevealBlock delay={0.06}>
            <div className="rounded-2xl bg-[#09142A] dark:bg-[#0B1528] border border-slate-800 text-white p-6 sm:p-10 md:p-12 flex flex-col lg:flex-row lg:items-center justify-between gap-6 sm:gap-8">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-300 mb-3">
                  <Compass className="w-4 h-4" aria-hidden="true" />
                  <span>Addis Ababa Corporate Desk</span>
                </div>
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">
                  Interested in fleet onboarding, corporate mobility, or strategic partnership?
                </h2>
                <p className="text-sm sm:text-base text-slate-300 mt-2.5 leading-relaxed">
                  Connect directly with CRES’s Addis Ababa leadership and operations team to discuss
                  vehicle enrollment, corporate mobility requirements, or institutional collaboration.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 shrink-0">
                <motion.button
                  type="button"
                  whileHover={prefersReducedMotion ? undefined : { y: -2 }}
                  whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
                  onClick={() => onNavigate('contact')}
                  className="px-6 py-3.5 min-h-[44px] rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                >
                  Contact Addis Ababa Office
                </motion.button>
                <motion.button
                  type="button"
                  whileHover={prefersReducedMotion ? undefined : { y: -2 }}
                  whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
                  onClick={() => onNavigate('insurance')}
                  className="px-5 py-3.5 min-h-[44px] rounded-xl border border-slate-600 hover:bg-white/10 text-white text-sm font-semibold transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                >
                  Theft Insurance &amp; Coverage
                </motion.button>
              </div>
            </div>
          </RevealBlock>
        </div>
      </section>
    </div>
  );
};
