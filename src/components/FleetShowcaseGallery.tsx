import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { ArrowRight, Check, ShieldCheck, X } from 'lucide-react';
import { FLEET_CLASSES } from '../data/cresData';
import { FleetClassCategory, FleetClassItem, PageId } from '../types';
import { SafeImage } from './SafeImage';

interface FleetShowcaseGalleryProps {
  onNavigate: (page: PageId) => void;
}

const FLEET_FILTERS: ('All Vehicles' | FleetClassCategory)[] = [
  'All Vehicles',
  'Sedans',
  'Electric Cars',
  'SUVs & 4x4',
  'Corporate Vans',
];

export const FleetShowcaseGallery: React.FC<FleetShowcaseGalleryProps> = ({ onNavigate }) => {
  const [activeFilter, setActiveFilter] = useState<'All Vehicles' | FleetClassCategory>(
    'All Vehicles'
  );
  const [selectedVehicle, setSelectedVehicle] = useState<FleetClassItem | null>(null);
  const prefersReducedMotion = useReducedMotion();

  const filteredVehicles =
    activeFilter === 'All Vehicles'
      ? FLEET_CLASSES
      : FLEET_CLASSES.filter((item) => item.category === activeFilter);

  useEffect(() => {
    if (!selectedVehicle) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedVehicle(null);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [selectedVehicle]);

  return (
    <div>
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-5 mb-8 sm:mb-10">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold text-blue-700 dark:text-cyan-400">
            Managed Ethiopian Fleet
          </p>
          <h2 className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-[#09142A] dark:text-white mt-2">
            Vehicles available across our managed Ethiopian fleet.
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mt-2.5 leading-relaxed">
            Every vehicle model enrolled with CRES in Addis Ababa undergoes multi-point mechanical
            verification, dual GPS installation, and 24-hour operational oversight.
          </p>
        </div>

        {/* Category Filter Switcher */}
        <div
          role="tablist"
          aria-label="Filter vehicle fleet classes"
          className="flex items-center gap-1 p-1 rounded-xl bg-slate-100 dark:bg-[#0D192F] border border-slate-200 dark:border-slate-800 self-start max-w-full overflow-x-auto no-scrollbar"
        >
          {FLEET_FILTERS.map((tab) => {
            const isSelected = activeFilter === tab;
            return (
              <button
                key={tab}
                type="button"
                role="tab"
                aria-selected={isSelected}
                onClick={() => setActiveFilter(tab)}
                className={`relative px-3.5 py-2 min-h-[40px] text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  isSelected
                    ? 'text-[#09142A] dark:text-white'
                    : 'text-slate-600 dark:text-slate-400 hover:text-[#09142A] dark:hover:text-white'
                }`}
              >
                {isSelected && (
                  <motion.span
                    layoutId="fleetClassFilterTab"
                    transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-0 rounded-lg bg-white dark:bg-[#162744] shadow-sm border border-slate-200/80 dark:border-slate-700"
                  />
                )}
                <span className="relative z-10">{tab}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Mobile Swipe Guidance */}
      <p className="md:hidden text-xs font-medium text-slate-500 dark:text-slate-400 mb-3">
        Swipe vehicles · Tap any car for full specifications
      </p>

      {/* Mobile Horizontal Snap Carousel / Desktop Multi-Column Grid */}
      <motion.div
        layout
        className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 overflow-x-auto md:overflow-visible snap-x snap-mandatory no-scrollbar -mx-5 px-5 md:mx-0 md:px-0 pb-2 md:pb-0"
      >
        {filteredVehicles.map((vehicle, idx) => (
          <motion.button
            key={vehicle.id}
            type="button"
            layout
            initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.3, delay: idx * 0.04, ease: [0.16, 1, 0.3, 1] }}
            whileHover={prefersReducedMotion ? undefined : { y: -4 }}
            onClick={() => setSelectedVehicle(vehicle)}
            className="w-[80vw] sm:w-[58vw] md:w-auto shrink-0 snap-center group rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0B1528] overflow-hidden text-left flex flex-col justify-between cursor-pointer transition-colors hover:border-blue-600/60 dark:hover:border-cyan-500/50"
          >
            <div>
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-900">
                <SafeImage
                  src={vehicle.src}
                  alt={vehicle.alt}
                  fallbackTitle={vehicle.name}
                  className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.04]"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-[#050B18]/70 via-transparent to-transparent"
                />
              </div>

              <div className="p-5 space-y-2">
                <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 font-medium">
                  <span>{vehicle.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{vehicle.seats}</span>
                  <span aria-hidden="true">·</span>
                  <span>{vehicle.transmission}</span>
                </div>

                <h3 className="font-display text-lg font-bold text-[#09142A] dark:text-white group-hover:text-blue-700 dark:group-hover:text-cyan-300 transition-colors">
                  {vehicle.name}
                </h3>

                <p className="text-xs font-medium text-blue-700 dark:text-cyan-400">
                  {vehicle.examples}
                </p>

                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-2 pt-0.5">
                  {vehicle.idealFor}
                </p>
              </div>
            </div>

            <div className="px-5 pb-5 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs font-semibold text-blue-700 dark:text-cyan-300">
              <span>Inspect Vehicle Details</span>
              <ArrowRight
                className="w-3.5 h-3.5 transition-transform duration-150 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </div>
          </motion.button>
        ))}
      </motion.div>

      {/* Vehicle Class Detail Modal */}
      <AnimatePresence>
        {selectedVehicle && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            role="dialog"
            aria-modal="true"
            aria-label={selectedVehicle.name}
            onClick={() => setSelectedVehicle(null)}
            className="fixed inset-0 z-50 bg-[#040914]/90 backdrop-blur-md flex items-end sm:items-center justify-center p-0 sm:p-6"
          >
            <motion.div
              initial={prefersReducedMotion ? false : { y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={prefersReducedMotion ? undefined : { y: 20, opacity: 0 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="w-full sm:max-w-3xl rounded-t-3xl sm:rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#09142A] overflow-hidden shadow-2xl max-h-[88vh] overflow-y-auto"
            >
              <div className="relative aspect-[16/9] w-full bg-slate-900">
                <SafeImage
                  src={selectedVehicle.src}
                  alt={selectedVehicle.alt}
                  fallbackTitle={selectedVehicle.name}
                  className="w-full h-full object-cover"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-[#050B18]/90 via-transparent to-transparent"
                />
                <button
                  type="button"
                  onClick={() => setSelectedVehicle(null)}
                  aria-label="Close vehicle class preview"
                  className="absolute top-4 right-4 w-10 h-10 rounded-xl bg-[#050B18]/75 border border-white/20 text-white hover:bg-blue-700 transition-colors flex items-center justify-center cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                  <div className="flex items-center gap-2 text-xs text-cyan-300 font-medium">
                    <span>{selectedVehicle.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{selectedVehicle.seats}</span>
                    <span aria-hidden="true">·</span>
                    <span>{selectedVehicle.transmission}</span>
                  </div>
                  <h3 className="font-display text-2xl font-bold text-white mt-1">
                    {selectedVehicle.name}
                  </h3>
                </div>
              </div>

              <div className="p-5 sm:p-7 space-y-5">
                <div className="pb-4 border-b border-slate-200 dark:border-slate-800">
                  <div className="text-xs text-slate-500 dark:text-slate-400">
                    Model Availability in Addis Ababa
                  </div>
                  <div className="text-sm font-semibold text-[#09142A] dark:text-white mt-0.5">
                    {selectedVehicle.examples}
                  </div>
                </div>

                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {selectedVehicle.description}
                </p>

                <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#0D1A33] border border-slate-200 dark:border-slate-800 space-y-2.5">
                  <div className="flex items-center gap-2 text-xs font-semibold text-blue-700 dark:text-cyan-400">
                    <ShieldCheck className="w-4 h-4" aria-hidden="true" />
                    <span>Included CRES Fleet Standards</span>
                  </div>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-200">
                    {selectedVehicle.securityFeatures.map((feat) => (
                      <li key={feat} className="flex items-start gap-2">
                        <Check
                          className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0 mt-0.5"
                          aria-hidden="true"
                        />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-1">
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedVehicle(null);
                      onNavigate('business-model');
                    }}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 min-h-[44px] rounded-xl bg-blue-700 hover:bg-blue-800 text-white text-sm font-semibold transition-colors cursor-pointer"
                  >
                    <span>Calculate ETB Rental Fees</span>
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedVehicle(null);
                      onNavigate('contact');
                    }}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 min-h-[44px] rounded-xl border border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-[#09142A] dark:text-white text-sm font-semibold transition-colors cursor-pointer"
                  >
                    <span>Inquire About This Class</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
