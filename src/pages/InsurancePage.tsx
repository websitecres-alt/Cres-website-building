import React, { useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { ShieldCheck, FileText, ArrowRight, Check } from 'lucide-react';
import { PageId } from '../types';
import { PageHeader } from '../components/PageHeader';
import { StaggerContainer, RevealItem, RevealBlock } from '../components/MotionPrimitives';

interface InsurancePageProps {
  onNavigate: (page: PageId) => void;
}

export const InsurancePage: React.FC<InsurancePageProps> = ({ onNavigate }) => {
  const [mobileStatusTab, setMobileStatusTab] = useState<'theft' | 'operations'>('theft');
  const prefersReducedMotion = useReducedMotion();

  const coverageBenefits = [
    {
      title: 'Finalized Abay Insurance S.C. Theft Protection',
      desc: 'CRES’s theft insurance framework with Abay Insurance S.C. is completed and active—removing uncertainty and establishing formal theft protection across managed fleet operations.',
    },
    {
      title: 'Integrated Dual-GPS Risk Mitigation',
      desc: 'Pairing active Abay Insurance S.C. theft coverage with CRES’s dual GPS architecture and 24-hour monitoring logs strengthens asset security and incident response.',
    },
    {
      title: 'Evidence-Backed Claims Dossiers',
      desc: 'Timestamped pre- and post-rental digital inspection records, GPS route logs, and verified renter files streamline claims verification whenever an incident occurs.',
    },
    {
      title: 'Clear Liability Boundaries for Owners & Renters',
      desc: 'Contracted agreements establish explicit protection scopes, deductibles, and third-party coverage rules prior to key handover.',
    },
  ];

  return (
    <div className="bg-white dark:bg-[#050B18] transition-colors duration-200">
      <PageHeader
        sectionLabel="Insurance & Theft Protection"
        title="Active theft insurance with Abay Insurance S.C. alongside institutional safeguards."
        subtitle="CRES’s theft insurance arrangement with Abay Insurance S.C. is completed and in effect—pairing formal domestic insurer backing with dual GPS telemetry and 24/7 operational oversight."
        heroVariant="insurance"
        heroImageTitle="Completed Theft Coverage & Risk Protection"
        heroImageLocation="Abay Insurance S.C. · Active Theft Protection"
        highlights={[
          { value: 'Active', label: 'Abay Theft Insurance' },
          { value: 'Verified', label: 'Motor Policy Checks' },
          { value: '2x GPS', label: 'Underwriting Safeguard' },
        ]}
        primaryCta={{ label: 'Fleet Onboarding Inquiry', target: 'contact' }}
        secondaryCta={{ label: 'Security Architecture', target: 'security' }}
        onNavigate={onNavigate}
      />

      {/* Active Theft Insurance Confirmation Banner */}
      <section className="py-10 sm:py-12 bg-slate-50 dark:bg-[#081022] border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6">
          <RevealBlock>
            <div className="rounded-2xl border border-cyan-200 dark:border-cyan-800/70 bg-white dark:bg-[#0B1528] p-5 sm:p-8 flex flex-col md:flex-row gap-4 sm:gap-6 items-start">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-cyan-300 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-6 h-6" aria-hidden="true" />
              </div>
              <div className="space-y-2">
                <p className="text-xs font-semibold text-blue-700 dark:text-cyan-400">
                  Confirmed Protection Status · Process Completed
                </p>
                <h2 className="font-display text-lg sm:text-xl font-bold text-[#09142A] dark:text-white">
                  Theft insurance with Abay Insurance S.C. is finalized and active
                </h2>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                  CRES has finalized its theft insurance coverage process with{' '}
                  <strong className="text-[#09142A] dark:text-white">Abay Insurance S.C.</strong>
                  —this protection is complete and active, not an ongoing negotiation. Vehicles
                  managed inside the CRES ecosystem benefit from established theft coverage backed
                  by Abay Insurance S.C., verified Ethiopian motor policy checks, and redundant
                  dual GPS tracking.
                </p>
              </div>
            </div>
          </RevealBlock>
        </div>
      </section>

      {/* Coverage Pillars */}
      <section className="py-14 sm:py-20 bg-white dark:bg-[#050B18] border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <RevealBlock className="lg:col-span-5 space-y-4 sm:space-y-5">
            <p className="text-xs font-semibold text-blue-700 dark:text-cyan-400">
              Insurer Alignment
            </p>
            <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#09142A] dark:text-white">
              Coordinated protection with Abay Insurance S.C.
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              In Ethiopia’s traditional informal market, vehicle owners face acute theft exposure
              and stalled claims when cars are handed out through unverified street brokers.
            </p>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              CRES closes that protection gap through completed theft insurance coverage with Abay
              Insurance S.C., paired directly with verified renter records, dual GPS telemetry, and
              digital inspection documentation.
            </p>
          </RevealBlock>

          <StaggerContainer className="lg:col-span-7 flex sm:grid sm:grid-cols-2 gap-4 sm:gap-5 overflow-x-auto sm:overflow-visible snap-x snap-mandatory no-scrollbar -mx-5 px-5 sm:mx-0 sm:px-0 pb-2 sm:pb-0">
            {coverageBenefits.map((benefit) => (
              <RevealItem
                key={benefit.title}
                hoverLift
                className="w-[78vw] sm:w-auto shrink-0 snap-center p-5 sm:p-6 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-blue-300 dark:hover:border-cyan-500/40 bg-slate-50/70 dark:bg-[#0B1528] space-y-2.5 transition-colors"
              >
                <ShieldCheck
                  className="w-5 h-5 text-blue-700 dark:text-cyan-400"
                  aria-hidden="true"
                />
                <h3 className="font-display text-base font-bold text-[#09142A] dark:text-white">
                  {benefit.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {benefit.desc}
                </p>
              </RevealItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Active Protection Matrix */}
      <section className="overflow-hidden py-14 sm:py-20 bg-slate-50 dark:bg-[#081022]">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 space-y-6 sm:space-y-10">
          <RevealBlock className="max-w-2xl">
            <p className="text-xs font-semibold text-blue-700 dark:text-cyan-400">
              Protection Architecture
            </p>
            <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#09142A] dark:text-white mt-2">
              Dual-Layer Insurer Coverage &amp; Operational Controls
            </h2>
          </RevealBlock>

          <div
            role="tablist"
            aria-label="Compare Abay theft insurance and operational safeguards"
            className="md:hidden grid grid-cols-2 gap-1 p-1 rounded-xl bg-white dark:bg-[#0D192F] border border-slate-200 dark:border-slate-800"
          >
            <button
              type="button"
              role="tab"
              aria-selected={mobileStatusTab === 'theft'}
              onClick={() => setMobileStatusTab('theft')}
              className={`py-2.5 px-3 min-h-[44px] rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                mobileStatusTab === 'theft'
                  ? 'bg-[#09142A] dark:bg-blue-700 text-white'
                  : 'text-slate-600 dark:text-slate-400'
              }`}
            >
              Abay Theft Coverage
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={mobileStatusTab === 'operations'}
              onClick={() => setMobileStatusTab('operations')}
              className={`py-2.5 px-3 min-h-[44px] rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                mobileStatusTab === 'operations'
                  ? 'bg-[#09142A] dark:bg-blue-700 text-white'
                  : 'text-slate-600 dark:text-slate-400'
              }`}
            >
              Operational Safeguards
            </button>
          </div>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <RevealItem
              hoverLift
              className={`${
                mobileStatusTab === 'theft' ? 'block' : 'hidden md:block'
              } p-6 sm:p-8 rounded-2xl bg-[#09142A] dark:bg-[#102040] border border-slate-800 hover:border-cyan-500/50 text-white space-y-4 transition-colors`}
            >
              <div className="flex items-center gap-2 text-sm font-bold text-cyan-300">
                <ShieldCheck className="w-5 h-5 text-cyan-300" aria-hidden="true" />
                <span>Finalized Abay Insurance S.C. Theft Protection (Active)</span>
              </div>
              <ul className="space-y-3 text-sm text-slate-300">
                {[
                  'Completed and active theft insurance backing with Abay Insurance S.C.',
                  'Integrated theft-risk protection reinforced by dual GPS telemetry',
                  'Verified inspection and custody documentation to support claims accuracy',
                  'Structured protection layer safeguarding owner vehicle equity',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </RevealItem>

            <RevealItem
              hoverLift
              className={`${
                mobileStatusTab === 'operations' ? 'block' : 'hidden md:block'
              } p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#0B1528] border border-slate-200 dark:border-slate-800 hover:border-blue-300 dark:hover:border-cyan-500/40 space-y-4 transition-colors`}
            >
              <div className="flex items-center gap-2 text-sm font-bold text-[#09142A] dark:text-white">
                <FileText
                  className="w-5 h-5 text-blue-700 dark:text-cyan-400"
                  aria-hidden="true"
                />
                <span>Active Operational &amp; Documentation Controls</span>
              </div>
              <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
                {[
                  'Verification of existing motor insurance certificates before fleet onboarding',
                  'Written Ethiopian rental contracts specifying driver liability & boundaries',
                  'Dual GPS installation, geofencing, and 24-hour monitoring oversight',
                  'Digital intake and return inspection photo logs for objective evidence',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <Check
                      className="w-4 h-4 text-blue-700 dark:text-cyan-400 shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </RevealItem>
          </StaggerContainer>

          <RevealBlock className="pt-2">
            <motion.button
              type="button"
              whileHover={prefersReducedMotion ? undefined : { y: -2 }}
              whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-2 px-6 py-3 min-h-[44px] rounded-xl bg-blue-700 hover:bg-blue-800 text-white text-sm font-semibold transition-colors cursor-pointer"
            >
              <span>Inquire About Fleet Protection</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </motion.button>
          </RevealBlock>
        </div>
      </section>
    </div>
  );
};
