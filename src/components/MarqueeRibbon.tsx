import React from 'react';
import { motion, useReducedMotion } from 'motion/react';

const MARQUEE_ITEMS = [
  'Dual GPS Protection',
  '24-Hour Monitoring Center',
  'Verified Ethiopian Renters',
  'Transparent 8% Owner Fee',
  'Upfront 3% Renter Fee',
  'Abay Insurance Theft Coverage',
  'Digital Inspection Records',
  'Addis Ababa Managed Fleet',
];

export const MarqueeRibbon: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div
      aria-label="CRES Core Operational Standards"
      className="relative overflow-hidden border-y border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#070F20] py-3.5 select-none"
    >
      {prefersReducedMotion ? (
        <div className="max-w-[1200px] mx-auto px-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-semibold text-slate-600 dark:text-slate-300">
          {MARQUEE_ITEMS.map((item, idx) => (
            <React.Fragment key={item}>
              <span>{item}</span>
              {idx < MARQUEE_ITEMS.length - 1 && (
                <span aria-hidden="true" className="text-cyan-600 dark:text-cyan-400">
                  ·
                </span>
              )}
            </React.Fragment>
          ))}
        </div>
      ) : (
        <div className="flex w-max">
          <motion.div
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 34, repeat: Infinity, ease: 'linear' }}
            className="flex items-center gap-8 pr-8 text-xs font-semibold tracking-wide text-slate-600 dark:text-slate-300 whitespace-nowrap"
          >
            {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, index) => (
              <React.Fragment key={`${item}-${index}`}>
                <span>{item}</span>
                <span aria-hidden="true" className="text-cyan-600 dark:text-cyan-400">
                  ·
                </span>
              </React.Fragment>
            ))}
          </motion.div>
        </div>
      )}
    </div>
  );
};
