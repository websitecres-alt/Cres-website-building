import React, { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { FaqItem, PageId } from '../types';
import { FAQ_ITEMS } from '../data/cresData';
import { PageHeader } from '../components/PageHeader';
import { RevealBlock } from '../components/MotionPrimitives';

interface FaqPageProps {
  onNavigate: (page: PageId) => void;
}

type CategoryFilter = 'All' | FaqItem['category'];

const CATEGORIES: CategoryFilter[] = [
  'All',
  'General',
  'Vehicle Owners',
  'Renters',
  'Security & GPS',
  'Fees & Insurance',
];

export const FaqPage: React.FC<FaqPageProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('All');
  const [openId, setOpenId] = useState<string>('faq-1');
  const prefersReducedMotion = useReducedMotion();

  const filteredItems =
    selectedCategory === 'All'
      ? FAQ_ITEMS
      : FAQ_ITEMS.filter((item) => item.category === selectedCategory);

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? '' : id));
  };

  return (
    <div className="bg-white dark:bg-[#050B18] transition-colors duration-200">
      <PageHeader
        sectionLabel="Frequently Asked Questions"
        title="Clear answers on CRES operations, dual GPS security, and fees."
        subtitle="Everything prospective vehicle owners, corporate renters, partners, and investors need to know about the CRES managed ecosystem in Addis Ababa."
        heroVariant="faq"
        heroImageTitle="24/7 Operations & Policy Clarity"
        heroImageLocation="Owner, Renter & Partner Knowledge Base"
        highlights={[
          { value: '10 Topics', label: 'Core Answers' },
          { value: '92% Net', label: 'Owner Payout' },
          { value: '24/7', label: 'Addis Support Desk' },
        ]}
        primaryCta={{ label: 'Ask Our Office', target: 'contact' }}
        secondaryCta={{ label: 'ETB Calculator', target: 'business-model' }}
        onNavigate={onNavigate}
      />

      <section className="overflow-hidden py-12 sm:py-16 bg-white dark:bg-[#050B18]">
        <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-8">
          {/* Interactive Category Filter Buttons (Horizontal Scroll on Mobile) */}
          <RevealBlock>
            <div
              className="flex items-center gap-1.5 p-1.5 bg-slate-100 dark:bg-[#0D192F] border border-slate-200 dark:border-slate-800 rounded-xl mb-8 sm:mb-10 overflow-x-auto no-scrollbar"
              role="tablist"
              aria-label="Filter FAQ by topic"
            >
              {CATEGORIES.map((category) => {
                const isActive = selectedCategory === category;
                return (
                  <button
                    key={category}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => {
                      setSelectedCategory(category);
                      const firstMatch =
                        category === 'All'
                          ? FAQ_ITEMS[0]
                          : FAQ_ITEMS.find((i) => i.category === category);
                      if (firstMatch) setOpenId(firstMatch.id);
                    }}
                    className={`relative px-3.5 py-2 min-h-[40px] text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                      isActive
                        ? 'text-[#09142A] dark:text-white'
                        : 'text-slate-600 dark:text-slate-400 hover:text-[#09142A] dark:hover:text-white'
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="faqCategoryTab"
                        transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute inset-0 rounded-lg bg-white dark:bg-[#162744] shadow-sm border border-slate-200/80 dark:border-slate-700"
                      />
                    )}
                    <span className="relative z-10">{category}</span>
                  </button>
                );
              })}
            </div>
          </RevealBlock>

          {/* Accordion List */}
          <div className="space-y-3 sm:space-y-0 sm:divide-y sm:divide-slate-200 sm:dark:divide-slate-800 sm:border-t sm:border-b sm:border-slate-200 sm:dark:border-slate-800">
            {filteredItems.map((item, idx) => {
              const isOpen = openId === item.id;
              return (
                <motion.div
                  key={item.id}
                  initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.28, delay: idx * 0.03, ease: [0.16, 1, 0.3, 1] }}
                  className="p-4 sm:p-0 sm:py-5 rounded-2xl sm:rounded-none border border-slate-200 dark:border-slate-800 sm:border-0 bg-slate-50/70 dark:bg-[#0B1528] sm:bg-transparent sm:dark:bg-transparent"
                >
                  <button
                    type="button"
                    onClick={() => toggleItem(item.id)}
                    aria-expanded={isOpen}
                    aria-controls={`panel-${item.id}`}
                    className="w-full flex items-start justify-between gap-4 sm:gap-6 text-left cursor-pointer group min-h-[44px]"
                  >
                    <div>
                      <span className="text-xs font-medium text-blue-700 dark:text-cyan-400 block mb-1">
                        {item.category}
                      </span>
                      <span className="font-display text-sm sm:text-lg font-bold text-[#09142A] dark:text-white group-hover:text-blue-700 dark:group-hover:text-cyan-300 transition-colors">
                        {item.question}
                      </span>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-500 dark:text-slate-400 shrink-0 mt-1 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-blue-700 dark:text-cyan-400' : ''
                      }`}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`panel-${item.id}`}
                        initial={prefersReducedMotion ? false : { opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={prefersReducedMotion ? undefined : { opacity: 0, y: -4 }}
                        transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
                        className="pt-3 sm:pr-8 text-xs sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed"
                      >
                        {item.answer}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

          {/* Footer Prompt */}
          <RevealBlock className="mt-10 sm:mt-12 p-6 sm:p-7 rounded-2xl bg-[#09142A] dark:bg-[#0B1528] border border-slate-800 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-5">
            <div>
              <h2 className="font-display text-lg font-bold text-white">
                Have a specific operational or partnership question?
              </h2>
              <p className="text-sm text-slate-300 mt-1">
                Send an inquiry directly to our Addis Ababa corporate team, or ask CRES AI in the
                bottom corner.
              </p>
            </div>
            <motion.button
              type="button"
              whileHover={prefersReducedMotion ? undefined : { y: -2 }}
              whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 min-h-[44px] text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-xl transition-colors cursor-pointer whitespace-nowrap shrink-0"
            >
              <span>Contact Us</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </RevealBlock>
        </div>
      </section>
    </div>
  );
};
