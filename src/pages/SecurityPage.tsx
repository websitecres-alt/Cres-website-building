import React, { useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import {
  Radio,
  ShieldAlert,
  MapPin,
  PowerOff,
  Eye,
  Truck,
  ClipboardCheck,
  ArrowRight,
  Check,
} from 'lucide-react';
import { PageId } from '../types';
import { GALLERY_ITEMS, IMAGES } from '../data/cresData';
import { PageHeader } from '../components/PageHeader';
import { SafeImage } from '../components/SafeImage';
import {
  AddisGpsMapIllustration,
  MonitoringProtocolDiagram,
} from '../components/VisualIllustrations';
import { EditorialGallery } from '../components/EditorialGallery';
import { StaggerContainer, RevealItem, RevealBlock } from '../components/MotionPrimitives';

interface SecurityPageProps {
  onNavigate: (page: PageId) => void;
}

export const SecurityPage: React.FC<SecurityPageProps> = ({ onNavigate }) => {
  const [mobileGpsTab, setMobileGpsTab] = useState<'primary' | 'secondary'>('primary');
  const prefersReducedMotion = useReducedMotion();

  const securityCapabilities = [
    {
      icon: MapPin,
      title: 'Geofencing Controls',
      desc: 'Contract-specific geographic boundaries define where a vehicle is authorized to operate—triggering immediate verification alerts upon boundary exit.',
    },
    {
      icon: PowerOff,
      title: 'Remote Engine Immobilization',
      desc: 'Under strictly governed breach or non-return protocols, authorized operators issue safe remote immobilization preventing vehicle restart once stationary.',
    },
    {
      icon: Truck,
      title: 'Vehicle Recovery Support',
      desc: 'If an unauthorized deviation or overdue return escalates, CRES coordinates location intelligence from dual tracking layers directly with legal and recovery teams.',
    },
    {
      icon: ClipboardCheck,
      title: 'Digital Inspection Records',
      desc: 'Every handover and return is logged with timestamped photographs, odometer readings, and mechanical checklists—eliminating post-rental disputes.',
    },
  ];

  const securityGallery = GALLERY_ITEMS.filter((item) => item.category === 'Security & GPS');

  return (
    <div className="bg-white dark:bg-[#050B18] transition-colors duration-200">
      <PageHeader
        sectionLabel="Security & Technology"
        title="Multi-layered asset protection built to defeat tampering and blind spots."
        subtitle="CRES pairs redundant primary and concealed secondary GPS hardware with 24-hour operational monitoring, geofencing, and digital condition auditing."
        heroVariant="security"
        heroImageTitle="Dual GPS & 24-Hour Fleet Oversight"
        heroImageLocation="Addis Ababa Operations Desk"
        highlights={[
          { value: '2 Layers', label: 'Primary + Covert GPS' },
          { value: '24/7', label: 'Human Desk Watch' },
          { value: 'Safe Cut', label: 'Remote Immobilizer' },
        ]}
        primaryCta={{ label: 'Explore 8-Step Lifecycle', target: 'how-it-works' }}
        secondaryCta={{ label: 'Owner Protection', target: 'owner-services' }}
        onNavigate={onNavigate}
      />

      {/* Dual GPS Architecture Comparison */}
      <section className="py-14 sm:py-20 bg-white dark:bg-[#050B18] border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 space-y-8 sm:space-y-12">
          <RevealBlock className="max-w-2xl">
            <p className="text-xs font-semibold text-blue-700 dark:text-cyan-400 mb-2">
              Dual GPS Protection
            </p>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#09142A] dark:text-white tracking-tight">
              Why two independent GPS layers outperform single-tracker setups.
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mt-3 leading-relaxed">
              Standard rental trackers rely on a single accessible diagnostic port or wiring loom.
              CRES eliminates that single point of failure by pairing two distinct hardware layers
              in every enrolled vehicle.
            </p>
          </RevealBlock>

          {/* Mobile Layer Switcher */}
          <div
            role="tablist"
            aria-label="Select GPS hardware layer"
            className="lg:hidden grid grid-cols-2 gap-1 p-1 rounded-xl bg-slate-100 dark:bg-[#0D192F] border border-slate-200 dark:border-slate-800"
          >
            <button
              type="button"
              role="tab"
              aria-selected={mobileGpsTab === 'primary'}
              onClick={() => setMobileGpsTab('primary')}
              className={`py-2.5 px-3 min-h-[44px] rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                mobileGpsTab === 'primary'
                  ? 'bg-white dark:bg-[#162744] text-[#09142A] dark:text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400'
              }`}
            >
              Layer 01 · Primary GPS
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={mobileGpsTab === 'secondary'}
              onClick={() => setMobileGpsTab('secondary')}
              className={`py-2.5 px-3 min-h-[44px] rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                mobileGpsTab === 'secondary'
                  ? 'bg-[#09142A] dark:bg-blue-700 text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400'
              }`}
            >
              Layer 02 · Backup GPS
            </button>
          </div>

          <StaggerContainer className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {/* Primary GPS */}
            <RevealItem
              hoverLift
              className={`${
                mobileGpsTab === 'primary' ? 'block' : 'hidden lg:block'
              } p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-blue-300 dark:hover:border-cyan-500/40 bg-slate-50 dark:bg-[#0B1528] transition-colors`}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono-tabular text-xs font-semibold text-blue-700 dark:text-cyan-400">
                  Layer 01 · Active Telemetry
                </span>
                <Radio className="w-5 h-5 text-blue-700 dark:text-cyan-400" aria-hidden="true" />
              </div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-[#09142A] dark:text-white mb-3">
                Primary GPS Functionality
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-5">
                Hardwired into vehicle power and ignition circuits to provide continuous operational
                visibility throughout every active rental agreement.
              </p>
              <ul className="space-y-2.5 text-sm text-slate-700 dark:text-slate-200">
                {[
                  'Continuous route, speed, and ignition status reporting',
                  'Automated geofence perimeter compliance monitoring',
                  'Mileage tracking for scheduled preventative maintenance',
                  'Controlled remote immobilization interface for breach protocols',
                ].map((line) => (
                  <li key={line} className="flex items-start gap-2.5">
                    <Check
                      className="w-4 h-4 text-blue-700 dark:text-cyan-400 shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </RevealItem>

            {/* Secondary GPS */}
            <RevealItem
              hoverLift
              className={`${
                mobileGpsTab === 'secondary' ? 'block' : 'hidden lg:block'
              } p-6 sm:p-8 rounded-2xl bg-[#09142A] dark:bg-[#102040] border border-slate-800 hover:border-cyan-500/50 text-white transition-colors`}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono-tabular text-xs font-semibold text-cyan-400">
                  Layer 02 · Concealed Redundancy
                </span>
                <ShieldAlert className="w-5 h-5 text-cyan-400" aria-hidden="true" />
              </div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-3">
                Secondary GPS Functionality
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-5">
                Independently powered and discreetly concealed inside non-standard vehicle cavities
                to maintain continuity if the primary unit is tampered with.
              </p>
              <ul className="space-y-2.5 text-sm text-slate-200">
                {[
                  'Independent internal battery reserve isolated from main starter battery',
                  'Concealed installation location unknown to renters or third parties',
                  'Automatic tamper and power-cut discrepancy alerts',
                  'Dedicated backup coordinate relay during vehicle recovery',
                ].map((line) => (
                  <li key={line} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </RevealItem>
          </StaggerContainer>

          <RevealBlock>
            <AddisGpsMapIllustration />
          </RevealBlock>
        </div>
      </section>

      {/* Monitoring Center Showcase */}
      <section className="py-14 sm:py-20 bg-slate-50 dark:bg-[#081022] border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 space-y-10 sm:space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
            <RevealBlock className="lg:col-span-6 aspect-[16/10] lg:aspect-auto lg:min-h-[280px] rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 group">
              <SafeImage
                src={IMAGES.monitoringCenter}
                alt="CRES specialist in Addis Ababa watching live vehicle pins and routes on a large desktop map computer"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                fallbackTitle="24/7 Fleet Monitoring Workstation"
              />
            </RevealBlock>
            <RevealBlock delay={0.08} className="lg:col-span-6 flex flex-col justify-center space-y-4">
              <div className="flex items-center gap-2 text-xs font-semibold text-blue-700 dark:text-cyan-400">
                <Eye className="w-4 h-4" aria-hidden="true" />
                <span>24-Hour Monitoring Center</span>
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#09142A] dark:text-white tracking-tight">
                Dedicated human oversight watching every active rental, day and night.
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                Hardware alerts only protect an owner when trained professionals act on them
                immediately. CRES’s 24-hour monitoring center verifies boundary crossings, power
                disconnection warnings, and overdue return notifications against signed contract
                terms—responding in minutes rather than days.
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                The same operations desk serves as the 24/7 emergency assistance point for verified
                renters experiencing mechanical faults or roadside incidents.
              </p>
            </RevealBlock>
          </div>

          <RevealBlock>
            <MonitoringProtocolDiagram />
          </RevealBlock>
        </div>
      </section>

      {/* Security Hardware & Ops Gallery */}
      <section className="py-14 sm:py-20 bg-white dark:bg-[#050B18] border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6">
          <RevealBlock>
            <EditorialGallery
              kicker="Hardware & Operations Gallery"
              title="Inside CRES’s telemetry hardware and monitoring facilities."
              subtitle="Select any photograph to inspect dual GPS components and operations infrastructure."
              items={securityGallery}
              showFilters={false}
            />
          </RevealBlock>
        </div>
      </section>

      {/* Four Additional Core Safeguards */}
      <section className="overflow-hidden py-14 sm:py-20 bg-slate-50 dark:bg-[#081022]">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6">
          <RevealBlock className="max-w-2xl mb-8 sm:mb-12">
            <p className="text-xs font-semibold text-blue-700 dark:text-cyan-400 mb-2">
              End-to-End Safeguards
            </p>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#09142A] dark:text-white tracking-tight">
              Geofencing, immobilization, recovery, and digital inspection records.
            </h2>
          </RevealBlock>

          <StaggerContainer className="flex md:grid md:grid-cols-2 gap-4 sm:gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory no-scrollbar -mx-5 px-5 md:mx-0 md:px-0 pb-2 md:pb-0">
            {securityCapabilities.map((cap) => {
              const Icon = cap.icon;
              return (
                <RevealItem
                  key={cap.title}
                  hoverLift
                  className="w-[80vw] sm:w-[60vw] md:w-auto shrink-0 snap-center p-6 sm:p-7 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-blue-300 dark:hover:border-cyan-500/40 bg-white dark:bg-[#0B1528] transition-colors"
                >
                  <Icon className="w-6 h-6 text-blue-700 dark:text-cyan-400 mb-3.5" aria-hidden="true" />
                  <h3 className="font-display text-lg sm:text-xl font-bold text-[#09142A] dark:text-white mb-2">
                    {cap.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {cap.desc}
                  </p>
                </RevealItem>
              );
            })}
          </StaggerContainer>

          <RevealBlock className="mt-10 sm:mt-12 pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4">
            <p className="text-sm text-slate-600 dark:text-slate-300">
              See how security installation fits into CRES’s full eight-stage rental process.
            </p>
            <motion.button
              type="button"
              whileHover={prefersReducedMotion ? undefined : { y: -2 }}
              whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
              onClick={() => onNavigate('how-it-works')}
              className="inline-flex items-center gap-2 px-5 py-3 min-h-[44px] text-sm font-semibold text-white bg-[#1D4ED8] hover:bg-[#1E40AF] rounded-xl transition-colors cursor-pointer"
            >
              <span>Explore 8-Step Lifecycle</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </motion.button>
          </RevealBlock>
        </div>
      </section>
    </div>
  );
};
