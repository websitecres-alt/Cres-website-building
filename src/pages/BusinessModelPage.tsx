import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowRight, Check } from 'lucide-react';
import { PageId } from '../types';
import { PageHeader } from '../components/PageHeader';
import { FeeBreakdownDiagram } from '../components/VisualIllustrations';
import { FeeCalculator } from '../components/FeeCalculator';
import { AnimatedCounter } from '../components/AnimatedCounter';
import { StaggerContainer, RevealItem, RevealBlock } from '../components/MotionPrimitives';

interface BusinessModelPageProps {
  onNavigate: (page: PageId) => void;
}

export const BusinessModelPage: React.FC<BusinessModelPageProps> = ({ onNavigate }) => {
  const prefersReducedMotion = useReducedMotion();

  const feePillars = [
    {
      figure: 92,
      suffix: '%',
      title: 'Owner Net Payout',
      desc: 'Kept directly by the vehicle owner on completed rentals. Only 8% is cut from owner earnings—the 3% renter fee is never deducted from the owner.',
    },
    {
      figure: 8,
      suffix: '%',
      title: 'Owner Service Fee',
      desc: 'Charged to the vehicle owner only on completed rental value—covering marketing, renter vetting, dual GPS hardware operations, 24/7 monitoring, maintenance coordination, and legal support.',
    },
    {
      figure: 3,
      suffix: '%',
      title: 'Renter Service Fee',
      desc: 'Paid directly out of the renter’s pocket on top of the 100% base rate (103% total paid by renter)—covering verified mechanical quality, photo baselines, and 24-hour emergency support.',
    },
    {
      figure: 11,
      suffix: '%',
      title: 'Total CRES Fee (Combined)',
      desc: 'The total combined ecosystem revenue across both parties (8% from owner + 3% from renter), replacing unpredictable informal street broker spreads.',
    },
  ];

  return (
    <div className="bg-white dark:bg-[#050B18] transition-colors duration-200">
      <PageHeader
        sectionLabel="Business Model"
        title="Transparent, aligned service fees built in Ethiopian Birr."
        subtitle="CRES deducts only 8% from the vehicle owner—so owners receive 92% net payout—while renters pay a separate 3% fee directly out of pocket, totaling 11% across both parties."
        heroVariant="business-model"
        heroImageTitle="Published 8% Owner · +3% Renter Structure"
        heroImageLocation="Audit-Ready ETB Contracts"
        highlights={[
          { value: '92%', label: 'Owner Net Payout' },
          { value: '8%', label: 'Owner Fee Only' },
          { value: '+3%', label: 'From Renter Pocket' },
        ]}
        primaryCta={{ label: 'Discuss Fleet Economics', target: 'contact' }}
        secondaryCta={{ label: 'See 8-Step Process', target: 'how-it-works' }}
        onNavigate={onNavigate}
      />

      {/* Four Key Fee Percentages (2x2 Dashboard Grid on Mobile) */}
      <section className="py-12 sm:py-16 bg-white dark:bg-[#050B18] border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 space-y-8 sm:space-y-12">
          <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {feePillars.map((item) => (
              <RevealItem
                key={item.title}
                hoverLift
                className="p-4 sm:p-6 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-blue-300 dark:hover:border-cyan-500/40 bg-slate-50/70 dark:bg-[#0B1528] space-y-2 sm:space-y-3 transition-colors"
              >
                <div className="font-mono-tabular text-2xl sm:text-4xl font-bold text-[#09142A] dark:text-white">
                  <AnimatedCounter target={item.figure} suffix={item.suffix} />
                </div>
                <h2 className="font-display text-sm sm:text-lg font-bold text-blue-800 dark:text-cyan-300">
                  {item.title}
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3 sm:line-clamp-none">
                  {item.desc}
                </p>
              </RevealItem>
            ))}
          </StaggerContainer>

          <RevealBlock>
            <FeeBreakdownDiagram />
          </RevealBlock>
        </div>
      </section>

      {/* Interactive ETB Calculator */}
      <section className="py-14 sm:py-20 bg-slate-50 dark:bg-[#081022] border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 space-y-6 sm:space-y-8">
          <RevealBlock className="max-w-2xl">
            <p className="text-xs font-semibold text-blue-700 dark:text-cyan-400">
              ETB Value Estimator
            </p>
            <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#09142A] dark:text-white mt-2">
              Calculate exact rental payouts and fees in ETB
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
              Adjust the agreed daily rate in Ethiopian Birr (ETB) and rental duration below to
              view an instant itemized breakdown.
            </p>
          </RevealBlock>

          <RevealBlock delay={0.08}>
            <FeeCalculator />
          </RevealBlock>
        </div>
      </section>

      {/* Why Transparent Fees Matter */}
      <section className="overflow-hidden py-14 sm:py-20 bg-white dark:bg-[#050B18]">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <RevealBlock className="lg:col-span-6 space-y-4 sm:space-y-5">
            <p className="text-xs font-semibold text-blue-700 dark:text-cyan-400">
              Economic Alignment
            </p>
            <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#09142A] dark:text-white">
              Why CRES rejects hidden broker spreads
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              In traditional informal rentals, a broker may quote a renter 7,000 ETB/day while
              telling the vehicle owner the market only pays 5,000 ETB/day—pocketing an undisclosed
              28% spread while providing zero post-handover protection.
            </p>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              CRES publishes both sides of its service fee upfront. Both the vehicle owner and the
              renter see the exact agreed base rate, ensuring aligned incentives, audit-ready
              receipts for corporate clients, and sustainable fleet reinvestment.
            </p>
          </RevealBlock>

          <RevealBlock
            delay={0.08}
            className="lg:col-span-6 p-6 sm:p-8 rounded-2xl bg-[#09142A] dark:bg-[#0B1528] border border-slate-800 text-white space-y-5"
          >
            <h3 className="font-display text-lg sm:text-xl font-bold text-white">
              Included Within the Combined 11% Ecosystem Fee
            </h3>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-200">
              {[
                'Dual GPS hardware monitoring & 24/7 Addis Ababa operations desk',
                'Document, driver license, and guarantor verification workflows',
                'Standardized Ethiopian rental contracts & legal escalation support',
                'Timestamped pre-rental and post-rental digital inspection logs',
                'Preventive workshop scheduling & emergency roadside coordination',
              ].map((line) => (
                <li key={line} className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" aria-hidden="true" />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
            <div className="pt-2">
              <motion.button
                type="button"
                whileHover={prefersReducedMotion ? undefined : { y: -2 }}
                whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center gap-2 px-5 py-3 min-h-[44px] rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold transition-colors cursor-pointer"
              >
                <span>Discuss Fleet Economics</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </motion.button>
            </div>
          </RevealBlock>
        </div>
      </section>
    </div>
  );
};
