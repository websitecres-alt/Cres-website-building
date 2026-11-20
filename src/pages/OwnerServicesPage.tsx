import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { ArrowRight, Check, ChevronDown } from 'lucide-react';
import { IMAGES, OWNER_PILLARS } from '../data/cresData';
import { PageId } from '../types';
import { PageHeader } from '../components/PageHeader';
import { SafeImage } from '../components/SafeImage';
import { StaggerContainer, RevealItem, RevealBlock } from '../components/MotionPrimitives';

interface OwnerServicesPageProps {
  onNavigate: (page: PageId) => void;
}

export const OwnerServicesPage: React.FC<OwnerServicesPageProps> = ({ onNavigate }) => {
  const prefersReducedMotion = useReducedMotion();
  const [expandedIndex, setExpandedIndex] = useState<string>('01');

  return (
    <div className="bg-white dark:bg-[#050B18] transition-colors duration-200">
      <PageHeader
        sectionLabel="Vehicle Owner Services"
        title="Turn your vehicle into a professionally managed, protected asset."
        subtitle="CRES removes the operational risk and daily coordination burden from vehicle ownership—cutting only 8% from owner earnings (92% net payout) while handling vetting, dual GPS, and settlements."
        heroVariant="owner-services"
        heroImageTitle="Multi-Point Intake & Asset Stewardship"
        heroImageLocation="Authorized Inspection Bay · Addis Ababa"
        highlights={[
          { value: '92%', label: 'Owner Net Payout' },
          { value: '8%', label: 'Flat Owner Fee Only' },
          { value: '2x GPS', label: 'Tamper-Proof Security' },
        ]}
        primaryCta={{ label: 'Estimate Net ETB Income', target: 'business-model' }}
        secondaryCta={{ label: 'Inspect Dual GPS Security', target: 'security' }}
        onNavigate={onNavigate}
      />

      {/* Owner Overview Split + Mini Photo Gallery */}
      <section className="py-12 sm:py-16 bg-white dark:bg-[#050B18] border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          <RevealBlock className="lg:col-span-6 aspect-[16/10] lg:aspect-auto lg:min-h-[300px] rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-900 group">
            <SafeImage
              src={IMAGES.ownerInspection}
              alt="Ethiopian CRES automotive specialist inspecting a vehicle in Addis Ababa"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              fallbackTitle="Ethiopian Technical Inspection"
            />
          </RevealBlock>

          <RevealBlock delay={0.08} className="lg:col-span-6 flex flex-col justify-between space-y-6">
            <div className="space-y-3 sm:space-y-4">
              <p className="text-xs font-semibold text-blue-700 dark:text-cyan-400">
                Full-Stewardship Asset Management
              </p>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#09142A] dark:text-white tracking-tight">
                Earn steady rental returns without handing your car to unverified brokers.
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                With CRES, you never negotiate with strangers, field late-night breakdown calls, or
                wonder where your vehicle is located. You receive 92% net payout—CRES only takes 8%
                from your rental earnings, while the 3% renter fee comes directly from the renter.
              </p>
              <div className="flex flex-wrap gap-3 pt-1">
                <motion.button
                  type="button"
                  whileHover={prefersReducedMotion ? undefined : { y: -2 }}
                  whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
                  onClick={() => onNavigate('business-model')}
                  className="inline-flex items-center gap-2 px-5 py-3 min-h-[44px] rounded-xl bg-blue-700 hover:bg-blue-800 text-white text-sm font-semibold transition-colors cursor-pointer"
                >
                  <span>Estimate Net ETB Income</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </motion.button>
                <motion.button
                  type="button"
                  whileHover={prefersReducedMotion ? undefined : { y: -2 }}
                  whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
                  onClick={() => onNavigate('security')}
                  className="inline-flex items-center gap-2 px-4 py-3 min-h-[44px] rounded-xl border border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-[#09142A] dark:text-white text-sm font-semibold transition-colors cursor-pointer"
                >
                  <span>Dual GPS Details</span>
                </motion.button>
              </div>
            </div>

            {/* Companion Strip Gallery */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 pt-1">
              <motion.div
                whileHover={prefersReducedMotion ? undefined : { y: -3 }}
                className="aspect-[16/10] rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-900 relative group"
              >
                <SafeImage
                  src={IMAGES.gpsHardware}
                  alt="Dual GPS telemetry units installed in enrolled owner vehicles"
                  fallbackTitle="Dual GPS Protection"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent"
                />
                <span className="absolute bottom-2.5 left-3 text-[11px] font-semibold text-white">
                  Dual GPS Hardware
                </span>
              </motion.div>
              <motion.div
                whileHover={prefersReducedMotion ? undefined : { y: -3 }}
                className="aspect-[16/10] rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-900 relative group"
              >
                <SafeImage
                  src={IMAGES.monitoringCenter}
                  alt="Large single desktop GPS monitor displaying Addis Ababa fleet map and tracked cars"
                  fallbackTitle="24/7 Monitoring Desk"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent"
                />
                <span className="absolute bottom-2.5 left-3 text-[11px] font-semibold text-white">
                  24-Hour Oversight
                </span>
              </motion.div>
            </div>
          </RevealBlock>
        </div>
      </section>

      {/* 9 Owner Service Pillars (Compact Interactive Accordion on Mobile, Grid on Desktop) */}
      <section className="overflow-hidden py-14 sm:py-20 bg-slate-50 dark:bg-[#081022]">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6">
          <RevealBlock className="max-w-2xl mb-8 sm:mb-12">
            <p className="text-xs font-semibold text-blue-700 dark:text-cyan-400">
              Nine Management Pillars
            </p>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#09142A] dark:text-white tracking-tight mt-2">
              Complete lifecycle coverage for every enrolled vehicle.
            </h2>
          </RevealBlock>

          {/* Mobile Interactive Pillar Cards (Tap-to-Expand) */}
          <div className="md:hidden space-y-2.5">
            {OWNER_PILLARS.map((pillar) => {
              const isOpen = expandedIndex === pillar.index;
              return (
                <div
                  key={pillar.index}
                  className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0B1528] overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => setExpandedIndex(isOpen ? '' : pillar.index)}
                    aria-expanded={isOpen}
                    className="w-full p-4 min-h-[60px] flex items-center justify-between gap-3 text-left cursor-pointer"
                  >
                    <div className="flex items-start gap-3 min-w-0">
                      <span className="w-8 h-8 rounded-lg bg-[#09142A] dark:bg-blue-700 text-cyan-300 dark:text-white font-mono-tabular text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                        {pillar.index}
                      </span>
                      <div className="min-w-0">
                        <h3 className="font-display text-sm font-bold text-[#09142A] dark:text-white">
                          {pillar.title}
                        </h3>
                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 line-clamp-1">
                          {pillar.summary}
                        </p>
                      </div>
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
                        className="px-4 pb-4 pt-1 border-t border-slate-100 dark:border-slate-800 space-y-3"
                      >
                        <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                          {pillar.details}
                        </p>
                        <ul className="space-y-1.5 text-xs text-slate-700 dark:text-slate-200">
                          {pillar.keyPoints.map((pt) => (
                            <li key={pt} className="flex items-start gap-2">
                              <Check
                                className="w-3.5 h-3.5 text-blue-700 dark:text-cyan-400 shrink-0 mt-0.5"
                                aria-hidden="true"
                              />
                              <span>{pt}</span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Desktop Full 3-Column Card Grid */}
          <StaggerContainer className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {OWNER_PILLARS.map((pillar) => (
              <RevealItem
                key={pillar.index}
                hoverLift
                className="p-7 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-blue-300 dark:hover:border-cyan-500/40 bg-white dark:bg-[#0B1528] flex flex-col justify-between transition-colors"
              >
                <div>
                  <div className="font-mono-tabular text-xs font-bold text-blue-700 dark:text-cyan-400 mb-3">
                    {pillar.index}.
                  </div>
                  <h3 className="font-display text-xl font-bold text-[#09142A] dark:text-white">
                    {pillar.title}
                  </h3>
                  <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mt-1">
                    {pillar.summary}
                  </p>
                  <p className="text-sm text-slate-600 dark:text-slate-300 mt-3 leading-relaxed">
                    {pillar.details}
                  </p>
                </div>

                <ul className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800 space-y-2 text-xs text-slate-700 dark:text-slate-300">
                  {pillar.keyPoints.map((pt) => (
                    <li key={pt} className="flex items-start gap-2">
                      <Check
                        className="w-3.5 h-3.5 text-blue-700 dark:text-cyan-400 shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </RevealItem>
            ))}
          </StaggerContainer>

          <RevealBlock className="mt-12 sm:mt-14 p-6 sm:p-8 rounded-2xl bg-[#09142A] dark:bg-[#0B1528] border border-slate-800 text-white flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h3 className="font-display text-lg sm:text-xl font-bold text-white">
                Interested in enrolling your vehicle when fleet onboarding opens?
              </h3>
              <p className="text-sm text-slate-300 mt-1">
                Submit a vehicle owner onboarding inquiry to receive fleet requirements from our
                Addis Ababa team.
              </p>
            </div>
            <motion.button
              type="button"
              whileHover={prefersReducedMotion ? undefined : { y: -2 }}
              whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
              onClick={() => onNavigate('contact')}
              className="px-5 py-3 min-h-[44px] rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold transition-colors whitespace-nowrap shrink-0 cursor-pointer self-start md:self-auto"
            >
              Inquire About Enrollment
            </motion.button>
          </RevealBlock>
        </div>
      </section>
    </div>
  );
};
