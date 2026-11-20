import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { ChevronLeft, ChevronRight, Expand, X } from 'lucide-react';
import { GalleryCategory, GalleryItem } from '../types';
import { GALLERY_ITEMS } from '../data/cresData';
import { SafeImage } from './SafeImage';

interface EditorialGalleryProps {
  title?: string;
  subtitle?: string;
  kicker?: string;
  items?: GalleryItem[];
  showFilters?: boolean;
}

const FILTER_TABS: ('All' | GalleryCategory)[] = [
  'All',
  'Fleet Showcase',
  'Security & GPS',
  'Addis Operations',
];

export const EditorialGallery: React.FC<EditorialGalleryProps> = ({
  kicker = 'Visual Operations & Fleet Gallery',
  title = 'Inside the CRES standard in Addis Ababa.',
  subtitle = 'Explore representative vehicle classes, technical inspection protocols, precision dual GPS hardware, and our 24-hour operations environment.',
  items = GALLERY_ITEMS,
  showFilters = true,
}) => {
  const [activeFilter, setActiveFilter] = useState<'All' | GalleryCategory>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const prefersReducedMotion = useReducedMotion();

  const filteredItems =
    activeFilter === 'All' ? items : items.filter((item) => item.category === activeFilter);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setLightboxIndex(null);
      } else if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) =>
          prev === null ? null : (prev + 1) % filteredItems.length
        );
      } else if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) =>
          prev === null ? null : (prev - 1 + filteredItems.length) % filteredItems.length
        );
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, filteredItems.length]);

  const activeLightboxItem =
    lightboxIndex !== null && filteredItems[lightboxIndex]
      ? filteredItems[lightboxIndex]
      : null;

  return (
    <div>
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold text-blue-700 dark:text-cyan-400">{kicker}</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#09142A] dark:text-white mt-2">
            {title}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mt-3 leading-relaxed">
            {subtitle}
          </p>
        </div>

        {showFilters && (
          <div
            role="tablist"
            aria-label="Filter gallery images"
            className="flex items-center gap-1 p-1 rounded-xl bg-slate-100 dark:bg-[#0D192F] border border-slate-200 dark:border-slate-800 self-start max-w-full overflow-x-auto no-scrollbar"
          >
            {FILTER_TABS.map((tab) => {
              const isSelected = activeFilter === tab;
              return (
                <button
                  key={tab}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => {
                    setActiveFilter(tab);
                    setLightboxIndex(null);
                  }}
                  className={`relative px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    isSelected
                      ? 'text-[#09142A] dark:text-white'
                      : 'text-slate-600 dark:text-slate-400 hover:text-[#09142A] dark:hover:text-white'
                  }`}
                >
                  {isSelected && (
                    <motion.span
                      layoutId="galleryFilterPill"
                      transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute inset-0 rounded-lg bg-white dark:bg-[#162744] shadow-sm border border-slate-200/80 dark:border-slate-700"
                    />
                  )}
                  <span className="relative z-10">{tab}</span>
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* Mobile Swipe Hint */}
      <p className="md:hidden text-xs font-medium text-slate-500 dark:text-slate-400 mb-3">
        Swipe cards to explore · Tap any photo to inspect
      </p>

      {/* Mobile Snap Carousel + Desktop Asymmetric Bento Grid */}
      <motion.div
        layout
        className="flex md:grid md:grid-cols-2 lg:grid-cols-12 gap-4 md:gap-5 overflow-x-auto md:overflow-visible snap-x snap-mandatory no-scrollbar -mx-5 px-5 md:mx-0 md:px-0 pb-2 md:pb-0"
      >
        {filteredItems.map((item, idx) => {
          const isWide = item.highlight || (filteredItems.length >= 4 && idx % 5 === 0);
          const colSpanClass = isWide ? 'lg:col-span-7' : 'lg:col-span-5';
          const aspectClass = isWide ? 'aspect-[16/10]' : 'aspect-[4/3] lg:aspect-[16/12]';

          return (
            <motion.button
              key={item.id}
              type="button"
              layout
              initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => setLightboxIndex(idx)}
              aria-label={`Open gallery image: ${item.title}`}
              className={`w-[82vw] sm:w-[65vw] md:w-auto shrink-0 snap-center ${colSpanClass} group relative rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-900 text-left cursor-pointer focus-visible:outline-none`}
            >
              <div className={`${aspectClass} w-full overflow-hidden`}>
                <SafeImage
                  src={item.src}
                  alt={item.alt}
                  fallbackTitle={item.title}
                  className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.035]"
                />
              </div>

              {/* Measured Scrim Overlay */}
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-[#050B18]/90 via-[#050B18]/30 to-transparent opacity-90 transition-opacity duration-200 group-hover:opacity-100"
              />

              {/* Expand Hint Icon */}
              <div
                aria-hidden="true"
                className="absolute top-4 right-4 w-9 h-9 rounded-lg bg-[#050B18]/65 backdrop-blur-sm border border-white/15 text-white flex items-center justify-center opacity-80 group-hover:opacity-100 group-hover:bg-blue-700 transition-all duration-150"
              >
                <Expand className="w-4 h-4" />
              </div>

              {/* Unboxed Clean Editorial Caption */}
              <div className="absolute inset-x-0 bottom-0 p-6">
                <div className="flex items-center gap-2 text-xs font-medium text-cyan-300">
                  <span>{item.category}</span>
                  <span aria-hidden="true" className="text-slate-400">
                    ·
                  </span>
                  <span className="text-slate-300">{item.location}</span>
                </div>
                <h3 className="font-display text-lg sm:text-xl font-bold text-white mt-1.5">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-200/90 mt-1.5 line-clamp-2 max-w-xl">
                  {item.caption}
                </p>
              </div>
            </motion.button>
          );
        })}
      </motion.div>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {activeLightboxItem && lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            role="dialog"
            aria-modal="true"
            aria-label={activeLightboxItem.title}
            className="fixed inset-0 z-50 bg-[#040914]/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
            onClick={() => setLightboxIndex(null)}
          >
            <motion.div
              initial={prefersReducedMotion ? false : { scale: 0.97, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={prefersReducedMotion ? undefined : { scale: 0.97, opacity: 0 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl rounded-2xl border border-slate-800 bg-[#09142A] overflow-hidden shadow-2xl"
            >
              {/* Top Lightbox Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800">
                <div className="flex items-center gap-3 text-xs text-slate-300">
                  <span className="font-mono-tabular text-cyan-300 font-semibold">
                    {String(lightboxIndex + 1).padStart(2, '0')} /{' '}
                    {String(filteredItems.length).padStart(2, '0')}
                  </span>
                  <span aria-hidden="true" className="text-slate-600">
                    ·
                  </span>
                  <span>{activeLightboxItem.category}</span>
                  <span aria-hidden="true" className="text-slate-600 hidden sm:inline">
                    ·
                  </span>
                  <span className="hidden sm:inline text-slate-400">
                    {activeLightboxItem.location}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setLightboxIndex(null)}
                  aria-label="Close gallery viewer"
                  className="inline-flex items-center justify-center w-9 h-9 rounded-lg border border-slate-700 text-slate-200 hover:bg-slate-800 hover:text-white transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Media Viewport */}
              <div className="relative bg-black aspect-[16/9] max-h-[64vh] w-full flex items-center justify-center">
                <SafeImage
                  src={activeLightboxItem.src}
                  alt={activeLightboxItem.alt}
                  fallbackTitle={activeLightboxItem.title}
                  className="w-full h-full object-contain"
                />

                {filteredItems.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={() =>
                        setLightboxIndex(
                          (lightboxIndex - 1 + filteredItems.length) % filteredItems.length
                        )
                      }
                      aria-label="Previous image"
                      className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-lg bg-[#09142A]/85 border border-slate-700 text-white hover:bg-blue-700 transition-colors flex items-center justify-center cursor-pointer"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      type="button"
                      onClick={() =>
                        setLightboxIndex((lightboxIndex + 1) % filteredItems.length)
                      }
                      aria-label="Next image"
                      className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-lg bg-[#09142A]/85 border border-slate-700 text-white hover:bg-blue-700 transition-colors flex items-center justify-center cursor-pointer"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </>
                )}
              </div>

              {/* Caption Footer */}
              <div className="p-6 bg-[#09142A]">
                <h3 className="font-display text-xl font-bold text-white">
                  {activeLightboxItem.title}
                </h3>
                <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                  {activeLightboxItem.caption}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
