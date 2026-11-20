import React, { useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { Target, Compass, ShieldCheck, ArrowRight, Check, X as CloseIcon } from 'lucide-react';
import { BROKER_COMPARISON, GALLERY_ITEMS } from '../data/cresData';
import { PageId } from '../types';
import { PageHeader } from '../components/PageHeader';
import { CompanyBackgroundVector } from '../components/PageHeroVector';
import { EditorialGallery } from '../components/EditorialGallery';
import { StaggerContainer, RevealItem, RevealBlock } from '../components/MotionPrimitives';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  const prefersReducedMotion = useReducedMotion();
  const [mobileMissionTab, setMobileMissionTab] = useState<'mission' | 'vision'>('mission');

  const coreValues = [
    {
      index: '01',
      title: 'Radical Fee Transparency',
      desc: 'Published 8% owner and 3% renter service fees replace opaque street commissions and hidden markups.',
    },
    {
      index: '02',
      title: 'Continuous Stewardship',
      desc: 'We stay accountable from intake inspection through final settlement—never disappearing after key handover.',
    },
    {
      index: '03',
      title: 'Verified Trust Architecture',
      desc: 'Every driver, guarantor, and vehicle title undergoes disciplined institutional screening before contract execution.',
    },
    {
      index: '04',
      title: 'Asset Preservation First',
      desc: 'Dual GPS protection, geofencing, and preventive workshop scheduling preserve long-term vehicle equity.',
    },
  ];

  const problemsSolved = [
    {
      title: 'Broker Disappearance After Handover',
      detail:
        'Informal intermediaries collect a finder’s fee and exit immediately. CRES remains the managing party across every single day of the rental.',
    },
    {
      title: 'Single-Tracker Vulnerabilities',
      detail:
        'Single OBD or accessible trackers are routinely disconnected. CRES mandates independent primary and concealed secondary GPS protection.',
    },
    {
      title: 'Unverified Drivers & Informal Agreements',
      detail:
        'Verbal handshakes leave vehicle owners legally vulnerable. CRES enforces standardized Ethiopian contracts and multi-point renter vetting.',
    },
    {
      title: 'Condition & Deposit Disputes',
      detail:
        'Without timestamped pre-rental logs, scratches and wear trigger conflict. Digital inspection records protect both owners and renters objectively.',
    },
  ];

  const addisGallery = GALLERY_ITEMS.filter(
    (item) => item.category === 'Addis Operations' || item.id === 'gal-diplomatic-lineup'
  );

  return (
    <div className="bg-white dark:bg-[#050B18] transition-colors duration-200">
      <PageHeader
        sectionLabel="About CRES"
        title="Transforming Ethiopia’s car rental sector through institutional management."
        subtitle="CRES (Car Rental Ecosystem) is established in Addis Ababa to replace fragmented street brokerage with a secure, transparent, end-to-end vehicle rental management model."
        heroVariant="about"
        heroImageTitle="Serving Addis Ababa’s Mobility Infrastructure"
        heroImageLocation="Bole Commercial District · Addis Ababa"
        highlights={[
          { value: '8 Steps', label: 'Managed Lifecycle' },
          { value: '2x GPS', label: 'Redundant Security' },
          { value: '92% Net', label: 'Owner Payout' },
        ]}
        primaryCta={{ label: 'View 8-Step Lifecycle', target: 'how-it-works' }}
        secondaryCta={{ label: 'Contact Office', target: 'contact' }}
        onNavigate={onNavigate}
      />

      {/* Company Background & Skyline Split */}
      <section className="py-14 sm:py-20 bg-white dark:bg-[#050B18]">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            <RevealBlock className="lg:col-span-6 space-y-4 sm:space-y-5 flex flex-col justify-center">
              <p className="text-xs font-semibold text-blue-700 dark:text-cyan-400">
                Company Background · Addis Ababa
              </p>
              <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#09142A] dark:text-white">
                Built to bring corporate structure to a high-demand urban market.
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                Addis Ababa’s growing diplomatic, corporate, NGO, and private mobility sectors depend
                heavily on rented vehicles—yet the market has historically been dominated by
                informal street brokers operating without standardized inspections, verified customer
                screening, or continuous asset monitoring.
              </p>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                CRES was founded to solve both sides of that trust deficit. For vehicle owners, we
                provide disciplined asset protection and effortless income management. For renters,
                we deliver dependable vehicles, transparent ETB pricing, and 24-hour operational
                support.
              </p>
            </RevealBlock>

            <RevealBlock delay={0.08} className="lg:col-span-6">
              <CompanyBackgroundVector />
            </RevealBlock>
          </div>
        </div>
      </section>

      {/* Mission & Vision (Interactive Toggle on Mobile, Side-by-Side on Desktop) */}
      <section className="bg-slate-50 dark:bg-[#081022] py-12 sm:py-16 border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 space-y-5">
          <div
            role="tablist"
            aria-label="Toggle Mission and Vision"
            className="md:hidden grid grid-cols-2 gap-1 p-1 rounded-xl bg-white dark:bg-[#0D192F] border border-slate-200 dark:border-slate-800"
          >
            <button
              type="button"
              role="tab"
              aria-selected={mobileMissionTab === 'mission'}
              onClick={() => setMobileMissionTab('mission')}
              className={`py-2.5 px-3 min-h-[44px] rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                mobileMissionTab === 'mission'
                  ? 'bg-[#09142A] text-white dark:bg-blue-700'
                  : 'text-slate-600 dark:text-slate-400'
              }`}
            >
              Our Mission
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={mobileMissionTab === 'vision'}
              onClick={() => setMobileMissionTab('vision')}
              className={`py-2.5 px-3 min-h-[44px] rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                mobileMissionTab === 'vision'
                  ? 'bg-[#09142A] text-white dark:bg-blue-700'
                  : 'text-slate-600 dark:text-slate-400'
              }`}
            >
              Our Vision
            </button>
          </div>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <RevealItem
              hoverLift
              className={`${
                mobileMissionTab === 'mission' ? 'block' : 'hidden md:block'
              } p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#0B1528] border border-slate-200 dark:border-slate-800 hover:border-blue-300 dark:hover:border-cyan-500/40 space-y-3 transition-colors`}
            >
              <Target className="w-6 h-6 text-blue-700 dark:text-cyan-400" aria-hidden="true" />
              <h3 className="font-display text-xl sm:text-2xl font-bold text-[#09142A] dark:text-white">
                Our Mission
              </h3>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                To make vehicle renting in Addis Ababa safer, clearer, and professionally managed—
                protecting owners’ automotive equity while giving renters reliable, fairly priced
                mobility backed by 24/7 operational oversight.
              </p>
            </RevealItem>

            <RevealItem
              hoverLift
              className={`${
                mobileMissionTab === 'vision' ? 'block' : 'hidden md:block'
              } p-6 sm:p-8 rounded-2xl bg-[#09142A] dark:bg-[#102040] border border-slate-800 hover:border-cyan-500/50 text-white space-y-3 transition-colors`}
            >
              <Compass className="w-6 h-6 text-cyan-300" aria-hidden="true" />
              <h3 className="font-display text-xl sm:text-2xl font-bold text-white">Our Vision</h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                To establish Ethiopia’s benchmark managed vehicle rental ecosystem—setting the
                national standard for dual GPS security, legal contract integrity, transparent fee
                structures, and institutional insurance collaboration.
              </p>
            </RevealItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Core Values (Horizontal Snap Cards on Mobile) */}
      <section className="py-14 sm:py-20 bg-white dark:bg-[#050B18]">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6">
          <RevealBlock className="max-w-2xl mb-8 sm:mb-12">
            <p className="text-xs font-semibold text-blue-700 dark:text-cyan-400">
              Core Principles
            </p>
            <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#09142A] dark:text-white mt-2">
              The four values governing every CRES contract.
            </h2>
          </RevealBlock>

          <p className="md:hidden text-xs font-medium text-slate-500 dark:text-slate-400 mb-3">
            Swipe cards to explore all four principles
          </p>

          <StaggerContainer className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory no-scrollbar -mx-5 px-5 md:mx-0 md:px-0 pb-2 md:pb-0">
            {coreValues.map((value) => (
              <RevealItem
                key={value.index}
                hoverLift
                className="w-[76vw] sm:w-[60vw] md:w-auto shrink-0 snap-center p-5 sm:p-6 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-blue-300 dark:hover:border-cyan-500/40 bg-slate-50/70 dark:bg-[#0B1528] transition-colors"
              >
                <div className="font-mono-tabular text-xs font-bold text-blue-700 dark:text-cyan-400 mb-2.5">
                  {value.index}.
                </div>
                <h3 className="font-display text-base sm:text-lg font-bold text-[#09142A] dark:text-white">
                  {value.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                  {value.desc}
                </p>
              </RevealItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* The Problems CRES Solves (Horizontal Snap Cards on Mobile) */}
      <section className="bg-slate-50 dark:bg-[#081022] py-14 sm:py-20 border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6">
          <RevealBlock className="max-w-2xl mb-8 sm:mb-12">
            <p className="text-xs font-semibold text-blue-700 dark:text-cyan-400">
              Market Gaps Addressed
            </p>
            <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#09142A] dark:text-white mt-2">
              Structural problems CRES solves from day one.
            </h2>
          </RevealBlock>

          <StaggerContainer className="flex md:grid md:grid-cols-2 gap-4 sm:gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory no-scrollbar -mx-5 px-5 md:mx-0 md:px-0 pb-2 md:pb-0">
            {problemsSolved.map((problem) => (
              <RevealItem
                key={problem.title}
                hoverLift
                className="w-[82vw] sm:w-[65vw] md:w-auto shrink-0 snap-center p-6 sm:p-7 rounded-2xl bg-white dark:bg-[#0B1528] border border-slate-200 dark:border-slate-800 hover:border-blue-300 dark:hover:border-cyan-500/40 space-y-2.5 transition-colors"
              >
                <div className="flex items-center gap-2.5">
                  <ShieldCheck
                    className="w-5 h-5 text-blue-700 dark:text-cyan-400 shrink-0"
                    aria-hidden="true"
                  />
                  <h3 className="font-display text-base sm:text-lg font-bold text-[#09142A] dark:text-white">
                    {problem.title}
                  </h3>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {problem.detail}
                </p>
              </RevealItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Traditional Brokers vs CRES: Visual Comparison Cards on Mobile, Table on Desktop */}
      <section className="py-14 sm:py-20 bg-white dark:bg-[#050B18]">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6">
          <RevealBlock className="max-w-2xl mb-8 sm:mb-10">
            <p className="text-xs font-semibold text-blue-700 dark:text-cyan-400">
              Competitive Differentiation
            </p>
            <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#09142A] dark:text-white mt-2">
              Traditional Brokers vs. CRES Managed Ecosystem
            </h2>
          </RevealBlock>

          {/* Mobile Comparison Snap Cards */}
          <StaggerContainer className="md:hidden flex gap-4 overflow-x-auto snap-x snap-mandatory no-scrollbar -mx-5 px-5 pb-2">
            {BROKER_COMPARISON.map((row) => (
              <RevealItem
                key={row.dimension}
                className="w-[84vw] shrink-0 snap-center rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-[#0B1528] overflow-hidden flex flex-col justify-between"
              >
                <div className="px-4 py-3 bg-[#09142A] text-white font-display text-sm font-bold">
                  {row.dimension}
                </div>
                <div className="p-4 space-y-3 flex-1">
                  <div className="p-3 rounded-xl bg-white dark:bg-[#101E38] border border-slate-200/80 dark:border-slate-800">
                    <div className="flex items-center gap-1.5 text-[11px] font-semibold text-slate-500 dark:text-slate-400 mb-1">
                      <CloseIcon className="w-3.5 h-3.5 text-slate-400" aria-hidden="true" />
                      <span>Traditional Brokers</span>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      {row.traditionalBroker}
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-blue-50/80 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800/70">
                    <div className="flex items-center gap-1.5 text-[11px] font-semibold text-blue-800 dark:text-cyan-300 mb-1">
                      <Check className="w-3.5 h-3.5 text-blue-700 dark:text-cyan-400" aria-hidden="true" />
                      <span>CRES Ecosystem</span>
                    </div>
                    <p className="text-xs font-medium text-[#09142A] dark:text-white leading-relaxed">
                      {row.cresEcosystem}
                    </p>
                  </div>
                </div>
              </RevealItem>
            ))}
          </StaggerContainer>

          {/* Desktop Full Table */}
          <RevealBlock className="hidden md:block overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#09142A] dark:bg-[#0B1528] text-white text-xs uppercase tracking-wider border-b border-slate-800">
                  <th className="py-4 px-6 font-semibold">Operational Area</th>
                  <th className="py-4 px-6 font-semibold text-slate-300">Traditional Brokers</th>
                  <th className="py-4 px-6 font-semibold text-cyan-300">CRES Ecosystem</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-800 text-sm">
                {BROKER_COMPARISON.map((row, idx) => (
                  <motion.tr
                    key={row.dimension}
                    initial={prefersReducedMotion ? false : { opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.05 }}
                    transition={{ duration: 0.25, delay: idx * 0.04 }}
                    className="bg-white dark:bg-[#050B18] hover:bg-slate-50/70 dark:hover:bg-[#0B1528]/70 transition-colors"
                  >
                    <td className="py-4 px-6 font-semibold text-[#09142A] dark:text-white whitespace-nowrap">
                      {row.dimension}
                    </td>
                    <td className="py-4 px-6 text-slate-600 dark:text-slate-400">
                      {row.traditionalBroker}
                    </td>
                    <td className="py-4 px-6 text-[#09142A] dark:text-slate-100 font-medium bg-blue-50/40 dark:bg-blue-950/30">
                      {row.cresEcosystem}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </RevealBlock>
        </div>
      </section>

      {/* Addis Operations Visual Gallery */}
      <section className="overflow-hidden py-14 sm:py-20 bg-slate-50 dark:bg-[#081022] border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 space-y-10 sm:space-y-12">
          <RevealBlock>
            <EditorialGallery
              kicker="Addis Ababa Context"
              title="Operations & infrastructure visual overview."
              subtitle="Click any scene below to inspect CRES’s operational environments in full detail."
              items={addisGallery}
              showFilters={false}
            />
          </RevealBlock>

          <RevealBlock className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-slate-200 dark:border-slate-800">
            <p className="text-sm text-slate-600 dark:text-slate-300">
              See how CRES operationalizes these principles across eight structured stages.
            </p>
            <motion.button
              type="button"
              whileHover={prefersReducedMotion ? undefined : { y: -2 }}
              whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
              onClick={() => onNavigate('how-it-works')}
              className="inline-flex items-center gap-2 px-5 py-3 min-h-[44px] rounded-xl bg-blue-700 hover:bg-blue-800 text-white text-sm font-semibold transition-colors cursor-pointer"
            >
              <span>View 8-Step Lifecycle</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </motion.button>
          </RevealBlock>
        </div>
      </section>
    </div>
  );
};
