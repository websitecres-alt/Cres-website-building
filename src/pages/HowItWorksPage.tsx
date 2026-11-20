import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { ChevronLeft, ChevronRight, ShieldCheck, ArrowRight, ChevronDown } from 'lucide-react';
import { LIFECYCLE_STEPS } from '../data/cresData';
import { PageId } from '../types';
import { PageHeader } from '../components/PageHeader';
import { StaggerContainer, RevealItem, RevealBlock } from '../components/MotionPrimitives';

interface HowItWorksPageProps {
  onNavigate: (page: PageId) => void;
}

export const HowItWorksPage: React.FC<HowItWorksPageProps> = ({ onNavigate }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [openSequenceId, setOpenSequenceId] = useState<string>('registration');
  const activeStep = LIFECYCLE_STEPS[activeIndex];
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="bg-white dark:bg-[#050B18] transition-colors duration-200">
      <PageHeader
        sectionLabel="How It Works"
        title="The eight-step managed rental lifecycle."
        subtitle="Explore how CRES bridges vehicle registration, technical inspection, dual GPS security, renter verification, active management, and verified return into one continuous system."
        heroVariant="how-it-works"
        heroImageTitle="Eight-Stage Managed Stewardship"
        heroImageLocation="Intake Through Final ETB Settlement"
        highlights={[
          { value: '01 – 04', label: 'Onboarding & GPS' },
          { value: '05 – 06', label: 'Vetting & Contract' },
          { value: '07 – 08', label: '24/7 Watch & Return' },
        ]}
        primaryCta={{ label: 'Review 8% / 3% Fees', target: 'business-model' }}
        secondaryCta={{ label: 'Contact Operations', target: 'contact' }}
        onNavigate={onNavigate}
      />

      {/* Interactive Timeline Stepper */}
      <section className="py-12 sm:py-16 bg-white dark:bg-[#050B18] border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 space-y-6 sm:space-y-10">
          <RevealBlock className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold text-blue-700 dark:text-cyan-400">
                Interactive Lifecycle Explorer
              </p>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#09142A] dark:text-white mt-1">
                Select any stage to inspect responsibilities and safeguards
              </h2>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <button
                type="button"
                onClick={() => setActiveIndex((prev) => Math.max(0, prev - 1))}
                disabled={activeIndex === 0}
                aria-label="Previous lifecycle step"
                className="inline-flex items-center justify-center w-11 h-11 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 disabled:opacity-40 disabled:pointer-events-none transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" aria-hidden="true" />
              </button>
              <span className="font-mono-tabular text-xs font-semibold text-slate-600 dark:text-slate-300 px-2">
                {activeStep.stepNumber} / 08
              </span>
              <button
                type="button"
                onClick={() =>
                  setActiveIndex((prev) => Math.min(LIFECYCLE_STEPS.length - 1, prev + 1))
                }
                disabled={activeIndex === LIFECYCLE_STEPS.length - 1}
                aria-label="Next lifecycle step"
                className="inline-flex items-center justify-center w-11 h-11 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 disabled:opacity-40 disabled:pointer-events-none transition-colors cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>
          </RevealBlock>

          {/* Horizontal Scrollable Progress Rail on Mobile, 8-Column Grid on Desktop */}
          <div
            role="tablist"
            aria-label="Eight-step rental lifecycle"
            className="flex lg:grid lg:grid-cols-8 gap-2 overflow-x-auto lg:overflow-visible snap-x no-scrollbar -mx-5 px-5 lg:mx-0 lg:px-0 pb-1 lg:pb-0"
          >
            {LIFECYCLE_STEPS.map((step, idx) => {
              const isSelected = idx === activeIndex;
              return (
                <button
                  key={step.id}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setActiveIndex(idx)}
                  className={`relative w-[42vw] sm:w-[28vw] lg:w-auto shrink-0 snap-start text-left p-3 rounded-xl border transition-colors duration-150 cursor-pointer ${
                    isSelected
                      ? 'text-white border-[#09142A] dark:border-blue-600'
                      : 'bg-slate-50 dark:bg-[#0B1528] text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-[#101E38]'
                  }`}
                >
                  {isSelected && (
                    <motion.span
                      layoutId="lifecycleActiveStep"
                      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute inset-0 rounded-xl bg-[#09142A] dark:bg-blue-700"
                    />
                  )}
                  <div className="relative z-10">
                    <div
                      className={`font-mono-tabular text-[11px] font-semibold ${
                        isSelected ? 'text-cyan-300' : 'text-blue-700 dark:text-cyan-400'
                      }`}
                    >
                      Step {step.stepNumber}
                    </div>
                    <div className="font-display text-xs font-bold mt-1 leading-snug">
                      {step.title}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Stage Detail Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep.id}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={prefersReducedMotion ? undefined : { opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              role="tabpanel"
              className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#0B1528] p-5 sm:p-6 md:p-10"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
                <div className="lg:col-span-6 space-y-4">
                  <div className="font-mono-tabular text-xs font-semibold text-blue-700 dark:text-cyan-400">
                    Stage {activeStep.stepNumber} of 08 · Lifecycle Detail
                  </div>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#09142A] dark:text-white">
                    {activeStep.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-700 dark:text-slate-200 leading-relaxed">
                    {activeStep.detailedOverview}
                  </p>
                  <div className="p-4 rounded-xl bg-white dark:bg-[#101E38] border border-slate-200 dark:border-slate-800 flex items-start gap-3">
                    <ShieldCheck
                      className="w-5 h-5 text-cyan-600 dark:text-cyan-400 shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <div>
                      <div className="text-xs font-semibold text-[#09142A] dark:text-white">
                        Key Ecosystem Safeguard
                      </div>
                      <p className="text-sm text-slate-600 dark:text-slate-300 mt-0.5">
                        {activeStep.safeguard}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-6 space-y-4">
                  <div className="p-4 sm:p-5 rounded-xl bg-white dark:bg-[#101E38] border border-slate-200 dark:border-slate-800">
                    <div className="text-xs font-semibold text-blue-700 dark:text-cyan-400">
                      CRES Action
                    </div>
                    <p className="text-sm text-slate-700 dark:text-slate-200 mt-1.5 leading-relaxed">
                      {activeStep.cresAction}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div className="p-4 sm:p-5 rounded-xl bg-white dark:bg-[#101E38] border border-slate-200 dark:border-slate-800">
                      <div className="text-xs font-semibold text-[#09142A] dark:text-white">
                        Vehicle Owner Role
                      </div>
                      <p className="text-sm text-slate-600 dark:text-slate-300 mt-1.5 leading-relaxed">
                        {activeStep.ownerRole}
                      </p>
                    </div>
                    <div className="p-4 sm:p-5 rounded-xl bg-white dark:bg-[#101E38] border border-slate-200 dark:border-slate-800">
                      <div className="text-xs font-semibold text-[#09142A] dark:text-white">
                        Renter Role
                      </div>
                      <p className="text-sm text-slate-600 dark:text-slate-300 mt-1.5 leading-relaxed">
                        {activeStep.renterRole}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Complete Sequential Overview: Compact Accordion on Mobile, Grid on Desktop */}
      <section className="overflow-hidden py-14 sm:py-20 bg-slate-50 dark:bg-[#081022]">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6">
          <RevealBlock className="max-w-2xl mb-8 sm:mb-12">
            <p className="text-xs font-semibold text-blue-700 dark:text-cyan-400">
              Complete Sequence
            </p>
            <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#09142A] dark:text-white mt-2">
              End-to-end chronological overview
            </h2>
          </RevealBlock>

          {/* Mobile Compact Accordion */}
          <div className="md:hidden space-y-2.5">
            {LIFECYCLE_STEPS.map((step) => {
              const isOpen = openSequenceId === step.id;
              return (
                <div
                  key={step.id}
                  className="rounded-2xl bg-white dark:bg-[#0B1528] border border-slate-200 dark:border-slate-800 overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => setOpenSequenceId(isOpen ? '' : step.id)}
                    aria-expanded={isOpen}
                    className="w-full p-4 min-h-[56px] flex items-center justify-between gap-3 text-left cursor-pointer"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <span className="w-8 h-8 rounded-lg bg-[#09142A] dark:bg-blue-700 text-cyan-300 dark:text-white font-mono-tabular text-xs font-bold flex items-center justify-center shrink-0">
                        {step.stepNumber}
                      </span>
                      <span className="font-display text-sm font-bold text-[#09142A] dark:text-white truncate">
                        {step.title}
                      </span>
                    </div>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-500 shrink-0 transition-transform duration-150 ${
                        isOpen ? 'rotate-180 text-blue-700 dark:text-cyan-400' : ''
                      }`}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={prefersReducedMotion ? false : { opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={prefersReducedMotion ? undefined : { opacity: 0, y: -4 }}
                        transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
                        className="px-4 pb-4 pt-2 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-300 leading-relaxed"
                      >
                        {step.detailedOverview}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Desktop 2-Column Sequence */}
          <StaggerContainer className="hidden md:grid md:grid-cols-2 gap-6">
            {LIFECYCLE_STEPS.map((step) => (
              <RevealItem
                key={step.id}
                hoverLift
                className="p-6 rounded-2xl bg-white dark:bg-[#0B1528] border border-slate-200 dark:border-slate-800 hover:border-blue-300 dark:hover:border-cyan-500/40 flex gap-5 transition-colors"
              >
                <div className="w-11 h-11 rounded-lg bg-[#09142A] dark:bg-blue-700 text-cyan-300 dark:text-white font-mono-tabular text-sm font-bold flex items-center justify-center shrink-0">
                  {step.stepNumber}
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-[#09142A] dark:text-white">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 mt-1.5 leading-relaxed">
                    {step.detailedOverview}
                  </p>
                </div>
              </RevealItem>
            ))}
          </StaggerContainer>

          <RevealBlock className="mt-10 sm:mt-12 flex flex-wrap items-center gap-3 sm:gap-4">
            <motion.button
              type="button"
              whileHover={prefersReducedMotion ? undefined : { y: -2 }}
              whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
              onClick={() => onNavigate('business-model')}
              className="inline-flex items-center gap-2 px-6 py-3 min-h-[44px] rounded-xl bg-blue-700 hover:bg-blue-800 text-white text-sm font-semibold transition-colors cursor-pointer"
            >
              <span>Review 8% / 3% Business Model</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </motion.button>
            <motion.button
              type="button"
              whileHover={prefersReducedMotion ? undefined : { y: -2 }}
              whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-2 px-5 py-3 min-h-[44px] rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-[#0B1528] hover:bg-slate-50 dark:hover:bg-slate-800 text-[#09142A] dark:text-white text-sm font-semibold transition-colors cursor-pointer"
            >
              <span>Contact CRES Operations</span>
            </motion.button>
          </RevealBlock>
        </div>
      </section>
    </div>
  );
};
