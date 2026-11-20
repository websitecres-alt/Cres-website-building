import React, { useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { Radio, ShieldAlert, Lock, Navigation, CheckCircle2 } from 'lucide-react';

export const AddisGpsMapIllustration: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();
  const [scenario, setScenario] = useState<'normal' | 'boundary' | 'tamper'>('normal');

  const vehicleCoords =
    scenario === 'normal'
      ? { x: [185, 250, 325, 385, 320, 235, 185], y: [232, 206, 182, 204, 238, 250, 232] }
      : scenario === 'boundary'
        ? { x: [255, 360, 455, 534, 534], y: [208, 194, 178, 165, 165] }
        : { x: [220, 285, 355, 405], y: [220, 198, 186, 178] };

  const deskNode = { x: 315, y: 122 };
  const activeAnchor =
    scenario === 'normal'
      ? { x: 325, y: 182 }
      : scenario === 'boundary'
        ? { x: 534, y: 165 }
        : { x: 405, y: 178 };

  return (
    <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-[#071126] text-white overflow-hidden shadow-xl">
      {/* Diagram Header & Interactive Simulation Mode Switch */}
      <div className="px-5 sm:px-6 py-4 border-b border-slate-800/90 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div>
          <p className="text-xs text-cyan-300 font-medium">
            Illustrative Security Architecture · Interactive Telemetry Simulation
          </p>
          <h3 className="font-display text-lg font-semibold text-white mt-0.5">
            Dual GPS, Radar Watch &amp; Geofencing Protection Model
          </h3>
        </div>

        <div
          role="group"
          aria-label="Select security illustration scenario"
          className="flex items-center p-1 rounded-xl bg-slate-900/90 border border-slate-700/80 overflow-x-auto no-scrollbar max-w-full"
        >
          <button
            type="button"
            onClick={() => setScenario('normal')}
            className={`px-3 py-1.5 min-h-[36px] text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
              scenario === 'normal'
                ? 'bg-blue-700 text-white shadow-sm'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            Authorized Corridor
          </button>
          <button
            type="button"
            onClick={() => setScenario('boundary')}
            className={`px-3 py-1.5 min-h-[36px] text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
              scenario === 'boundary'
                ? 'bg-cyan-600 text-white shadow-sm'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            Boundary Escalation
          </button>
          <button
            type="button"
            onClick={() => setScenario('tamper')}
            className={`px-3 py-1.5 min-h-[36px] text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
              scenario === 'tamper'
                ? 'bg-amber-600 text-white shadow-sm'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            Primary Tamper Failover
          </button>
        </div>
      </div>

      {/* Animated Vector Radar & Corridor Map Canvas */}
      <div className="relative p-4 sm:p-6 grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-center">
        <div className="lg:col-span-8 relative rounded-xl bg-[#091833] border border-slate-800 overflow-hidden aspect-[16/10]">
          <svg
            viewBox="0 0 640 400"
            className="w-full h-full"
            role="img"
            aria-label="Animated Addis Ababa corridor illustration demonstrating moving vehicle telemetry, rotating radar scan, primary GPS, concealed secondary GPS failover, and geofencing perimeter"
          >
            <defs>
              <pattern id="cresGrid" width="32" height="32" patternUnits="userSpaceOnUse">
                <path
                  d="M 32 0 L 0 0 0 32"
                  fill="none"
                  stroke="rgba(148, 163, 184, 0.08)"
                  strokeWidth="1"
                />
              </pattern>

              <radialGradient id="geofenceFill" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="rgba(29, 78, 216, 0.16)" />
                <stop offset="78%" stopColor="rgba(6, 182, 212, 0.09)" />
                <stop offset="100%" stopColor="rgba(6, 182, 212, 0.0)" />
              </radialGradient>

              <linearGradient id="radarSweepGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(34, 211, 238, 0.24)" />
                <stop offset="100%" stopColor="rgba(34, 211, 238, 0.0)" />
              </linearGradient>

              <linearGradient id="routeGlowGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#1D4ED8" />
                <stop offset="60%" stopColor="#06B6D4" />
                <stop
                  offset="100%"
                  stopColor={
                    scenario === 'boundary'
                      ? '#38BDF8'
                      : scenario === 'tamper'
                        ? '#F59E0B'
                        : '#22D3EE'
                  }
                />
              </linearGradient>
            </defs>

            <rect width="640" height="400" fill="url(#cresGrid)" />

            {/* Subtle Topographic Contour Rings */}
            <ellipse
              cx="315"
              cy="200"
              rx="255"
              ry="172"
              fill="none"
              stroke="rgba(148, 163, 184, 0.07)"
              strokeWidth="1"
            />
            <ellipse
              cx="315"
              cy="200"
              rx="115"
              ry="82"
              fill="none"
              stroke="rgba(148, 163, 184, 0.08)"
              strokeWidth="1"
            />

            {/* Stylized Addis Ababa Arterial Corridors */}
            <path
              d="M 40 245 Q 190 215 320 205 T 600 165"
              fill="none"
              stroke="rgba(148, 163, 184, 0.22)"
              strokeWidth="3"
            />
            <path
              d="M 285 35 Q 305 180 320 205 T 370 365"
              fill="none"
              stroke="rgba(148, 163, 184, 0.20)"
              strokeWidth="2.5"
            />
            <path
              d="M 110 85 Q 240 160 320 205 T 535 315"
              fill="none"
              stroke="rgba(148, 163, 184, 0.15)"
              strokeWidth="2"
            />
            <path
              d="M 135 285 Q 290 272 440 245"
              fill="none"
              stroke="rgba(148, 163, 184, 0.13)"
              strokeWidth="2"
            />

            {/* Geofence Perimeter */}
            <ellipse
              cx="315"
              cy="200"
              rx="188"
              ry="132"
              fill="url(#geofenceFill)"
              stroke={
                scenario === 'boundary'
                  ? '#38BDF8'
                  : scenario === 'tamper'
                    ? '#22D3EE'
                    : '#06B6D4'
              }
              strokeWidth="2"
              strokeDasharray="8 6"
            />

            {/* Animated Rotating Radar Sweep Centered on Operations Hub */}
            {!prefersReducedMotion && (
              <motion.g
                style={{ originX: '315px', originY: '200px' }}
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
              >
                <path
                  d="M 315 200 L 490 155 A 185 130 0 0 1 468 258 Z"
                  fill="url(#radarSweepGrad)"
                  opacity="0.55"
                />
              </motion.g>
            )}

            {/* District & Hub Labels */}
            <g fill="rgba(203, 213, 225, 0.78)" fontSize="11" fontFamily="DM Sans, sans-serif">
              <text x="148" y="268">Old Airport Axis</text>
              <text x="366" y="232">Bole Commercial Zone</text>
              <text x="480" y="88" fill="rgba(103, 232, 249, 0.9)">
                Geofence Boundary
              </text>
            </g>

            {/* CRES 24/7 Operations Hub Node */}
            <g transform={`translate(${deskNode.x}, ${deskNode.y})`}>
              {!prefersReducedMotion && (
                <motion.circle
                  r="18"
                  fill="none"
                  stroke="#06B6D4"
                  strokeWidth="1.2"
                  initial={{ scale: 0.7, opacity: 0.75 }}
                  animate={{ scale: 1.65, opacity: 0 }}
                  transition={{ duration: 2.6, repeat: Infinity, ease: 'easeOut' }}
                />
              )}
              <circle r="7" fill="#0F172A" stroke="#22D3EE" strokeWidth="2" />
              <circle r="2.5" fill="#22D3EE" />
              <rect
                x="-70"
                y="-31"
                width="140"
                height="20"
                rx="6"
                fill="rgba(7, 17, 38, 0.88)"
                stroke="rgba(34, 211, 238, 0.45)"
                strokeWidth="1"
              />
              <text
                x="0"
                y="-17"
                textAnchor="middle"
                fill="#E0F2FE"
                fontSize="10"
                fontWeight="600"
                fontFamily="Plus Jakarta Sans, sans-serif"
              >
                24/7 Monitoring Desk
              </text>
            </g>

            {/* Animated Telemetry Route Trace */}
            {scenario === 'normal' && (
              <motion.path
                d="M 185 232 Q 250 206 325 182 Q 385 204 320 238 Q 235 250 185 232"
                fill="none"
                stroke="url(#routeGlowGrad)"
                strokeWidth="3"
                strokeLinecap="round"
                strokeDasharray="10 6"
                animate={prefersReducedMotion ? undefined : { strokeDashoffset: [0, -64] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              />
            )}

            {scenario === 'boundary' && (
              <>
                <motion.path
                  key="boundary-route"
                  d="M 255 208 Q 400 186 534 165"
                  fill="none"
                  stroke="url(#routeGlowGrad)"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  initial={prefersReducedMotion ? false : { pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1] }}
                />
                {/* Geofence Crossing Marker */}
                <g transform="translate(486, 172)">
                  {!prefersReducedMotion && (
                    <motion.circle
                      r="16"
                      fill="none"
                      stroke="#38BDF8"
                      strokeWidth="1.5"
                      initial={{ scale: 0.6, opacity: 0.9 }}
                      animate={{ scale: 1.9, opacity: 0 }}
                      transition={{ duration: 1.6, repeat: Infinity, ease: 'easeOut' }}
                    />
                  )}
                  <circle r="4.5" fill="#38BDF8" />
                </g>
              </>
            )}

            {scenario === 'tamper' && (
              <motion.path
                key="tamper-route"
                d="M 220 220 Q 315 190 405 178"
                fill="none"
                stroke="url(#routeGlowGrad)"
                strokeWidth="3.5"
                strokeLinecap="round"
                initial={prefersReducedMotion ? false : { pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
              />
            )}

            {/* Animated Telemetry Uplink Beam from Active Vehicle to Operations Desk */}
            <motion.line
              x1={deskNode.x}
              y1={deskNode.y}
              x2={activeAnchor.x}
              y2={activeAnchor.y}
              stroke={scenario === 'tamper' ? '#F59E0B' : '#22D3EE'}
              strokeWidth="1.5"
              strokeDasharray="5 5"
              opacity="0.7"
              animate={prefersReducedMotion ? undefined : { strokeDashoffset: [0, -40] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'linear' }}
            />

            {/* Smoothly Moving Dual-GPS Vehicle Node */}
            <motion.g
              key={`vehicle-${scenario}`}
              initial={
                prefersReducedMotion
                  ? { x: activeAnchor.x, y: activeAnchor.y }
                  : { x: vehicleCoords.x[0], y: vehicleCoords.y[0] }
              }
              animate={
                prefersReducedMotion
                  ? { x: activeAnchor.x, y: activeAnchor.y }
                  : {
                      x: vehicleCoords.x,
                      y: vehicleCoords.y,
                    }
              }
              transition={
                scenario === 'normal'
                  ? { duration: 10, repeat: Infinity, ease: 'easeInOut' }
                  : { duration: 2.6, ease: [0.16, 1, 0.3, 1] }
              }
            >
              {/* Layer 2 Concealed GPS Ripple */}
              {!prefersReducedMotion && (
                <motion.circle
                  r="26"
                  fill="none"
                  stroke={scenario === 'tamper' ? '#22D3EE' : '#06B6D4'}
                  strokeWidth="1.6"
                  initial={{ scale: 0.65, opacity: 0.85 }}
                  animate={{ scale: 1.65, opacity: 0 }}
                  transition={{ duration: 1.8, repeat: Infinity, ease: 'easeOut' }}
                />
              )}

              {/* Layer 1 Primary GPS Ring (dims to Amber on Tamper Failover) */}
              {!prefersReducedMotion && (
                <motion.circle
                  r="17"
                  fill="none"
                  stroke={scenario === 'tamper' ? '#F59E0B' : '#3B82F6'}
                  strokeWidth="1.6"
                  initial={{ scale: 0.75, opacity: 0.9 }}
                  animate={{ scale: 1.35, opacity: 0 }}
                  transition={{ duration: 1.8, delay: 0.55, repeat: Infinity, ease: 'easeOut' }}
                />
              )}

              {/* Outer Primary Shell */}
              <circle
                r="12"
                fill={scenario === 'tamper' ? '#78350F' : '#1D4ED8'}
                stroke={scenario === 'tamper' ? '#F59E0B' : '#FFFFFF'}
                strokeWidth="2"
              />
              {/* Inner Concealed Secondary GPS Core (always active cyan) */}
              <circle r="5" fill="#22D3EE" />
            </motion.g>

            {/* Dynamic Callout Badge for Boundary / Tamper Scenarios */}
            {scenario === 'boundary' && (
              <motion.g
                initial={prefersReducedMotion ? false : { opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1, duration: 0.3 }}
                transform="translate(495, 134)"
              >
                <rect
                  x="-118"
                  y="-24"
                  width="202"
                  height="28"
                  rx="7"
                  fill="#09142A"
                  stroke="#38BDF8"
                  strokeWidth="1.2"
                />
                <text
                  x="-17"
                  y="-6"
                  textAnchor="middle"
                  fill="#E0F2FE"
                  fontSize="10.5"
                  fontWeight="600"
                  fontFamily="Plus Jakarta Sans, sans-serif"
                >
                  Perimeter Exit · Immobilizer Ready
                </text>
              </motion.g>
            )}

            {scenario === 'tamper' && (
              <motion.g
                initial={prefersReducedMotion ? false : { opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.3 }}
                transform="translate(405, 146)"
              >
                <rect
                  x="-112"
                  y="-24"
                  width="224"
                  height="28"
                  rx="7"
                  fill="#09142A"
                  stroke="#22D3EE"
                  strokeWidth="1.2"
                />
                <text
                  x="0"
                  y="-6"
                  textAnchor="middle"
                  fill="#A5F3FC"
                  fontSize="10.5"
                  fontWeight="600"
                  fontFamily="Plus Jakarta Sans, sans-serif"
                >
                  Primary Cut · Concealed Backup Active
                </text>
              </motion.g>
            )}
          </svg>

          {/* Compact Telemetry Overlay Bar Inside Map Frame */}
          <div className="absolute bottom-3 left-3 right-3 flex flex-wrap items-center justify-between gap-2 px-3 py-2 rounded-lg bg-[#050B18]/85 backdrop-blur-sm border border-slate-700/70 text-[11px] font-mono-tabular">
            <span className="text-slate-200">
              Layer 1:{' '}
              <strong
                className={scenario === 'tamper' ? 'text-amber-300' : 'text-blue-300'}
              >
                {scenario === 'tamper' ? 'Tamper Alert' : 'Active'}
              </strong>
            </span>
            <span className="text-slate-200">
              Layer 2 (Backup): <strong className="text-cyan-300">Locked &amp; Tracking</strong>
            </span>
            <span className="hidden sm:inline text-slate-200">
              Geofence:{' '}
              <strong
                className={scenario === 'boundary' ? 'text-sky-300' : 'text-emerald-300'}
              >
                {scenario === 'boundary' ? 'Escalation Triggered' : 'Within Corridor'}
              </strong>
            </span>
          </div>
        </div>

        {/* Right Side Explanatory Breakdown */}
        <div className="lg:col-span-4 space-y-3.5 sm:space-y-4">
          <div
            className={`p-4 rounded-xl border transition-colors ${
              scenario === 'tamper'
                ? 'bg-amber-950/35 border-amber-500/50'
                : 'bg-slate-900/90 border-slate-800'
            } space-y-2`}
          >
            <div
              className={`flex items-center gap-2 text-xs font-semibold ${
                scenario === 'tamper' ? 'text-amber-300' : 'text-cyan-300'
              }`}
            >
              <Radio className="w-4 h-4" aria-hidden="true" />
              <span>Layer 1 · Primary GPS Transceiver</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              {scenario === 'tamper'
                ? 'If someone disconnects main vehicle power or locates the primary OBD/ignition transceiver, an instant tamper discrepancy alert fires to CRES.'
                : 'Tracks authorized corridor movement, ignition state, and geofence compliance in coordination with CRES’s 24-hour operations desk.'}
            </p>
          </div>

          <div
            className={`p-4 rounded-xl border transition-colors ${
              scenario === 'tamper'
                ? 'bg-cyan-950/40 border-cyan-400/60'
                : 'bg-slate-900/90 border-slate-800'
            } space-y-2`}
          >
            <div className="flex items-center gap-2 text-xs font-semibold text-cyan-300">
              <Navigation className="w-4 h-4" aria-hidden="true" />
              <span>Layer 2 · Concealed Secondary GPS</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Hidden independently inside the vehicle with dedicated internal battery power, ensuring
              uninterrupted coordinate tracking even during primary unit tampering.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2">
            <div className="flex items-center gap-2 text-xs font-semibold text-cyan-300">
              {scenario === 'normal' ? (
                <CheckCircle2 className="w-4 h-4" aria-hidden="true" />
              ) : (
                <Lock className="w-4 h-4" aria-hidden="true" />
              )}
              <span>
                {scenario === 'normal'
                  ? 'Active Geofence Compliance'
                  : scenario === 'boundary'
                    ? 'Remote Immobilization Protocol'
                    : 'Zero-Blindspot Continuity'}
              </span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              {scenario === 'normal'
                ? 'While operating inside the contracted Addis Ababa perimeter, monitoring remains unobtrusive while protecting both owner and renter.'
                : scenario === 'boundary'
                  ? 'On an unauthorized boundary breach, the monitoring desk contacts the driver immediately and prepares safe remote ignition immobilization.'
                  : 'Backup telemetry feeds directly to CRES recovery coordinators so asset location is never lost.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const FeeBreakdownDiagram: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();
  return (
    <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0B1528] p-6 md:p-8">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
        <div>
          <p className="text-xs font-medium text-blue-700 dark:text-cyan-400">
            Transparent Two-Sided Fee Allocation
          </p>
          <h3 className="font-display text-xl font-bold text-[#09142A] dark:text-white mt-1">
            92% Owner Net Payout · Separate +3% Renter Fee
          </h3>
        </div>
        <p className="text-xs text-slate-500 dark:text-slate-400">
          Combined CRES Fee: 11% (8% from Owner + 3% paid directly by Renter)
        </p>
      </div>

      {/* Track 1: Owner Share (100% Agreed Base -> 92% Owner Net + 8% Owner Fee) */}
      <div className="space-y-4">
        <div>
          <div className="flex items-center justify-between text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
            <span>Owner Rental Share (100% Agreed Base Rate)</span>
            <span className="font-mono-tabular text-[#09142A] dark:text-cyan-300">
              Owner Keeps 92%
            </span>
          </div>
          <div
            className="w-full h-11 rounded-lg overflow-hidden flex border border-slate-200 dark:border-slate-700"
            role="img"
            aria-label="92 percent net owner payout and 8 percent owner service fee"
          >
            <motion.div
              initial={prefersReducedMotion ? false : { scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              style={{ width: '92%', transformOrigin: 'left center' }}
              className="bg-[#09142A] text-white flex items-center justify-between px-4 text-xs font-semibold"
            >
              <span className="truncate">Net Owner Payout</span>
              <span className="font-mono-tabular ml-2">92%</span>
            </motion.div>
            <motion.div
              initial={prefersReducedMotion ? false : { scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              style={{ width: '8%', transformOrigin: 'left center' }}
              className="bg-blue-700 text-white flex items-center justify-center text-[11px] sm:text-xs font-mono-tabular font-semibold border-l border-white/20"
              title="8% Owner Service Fee"
            >
              <span>8%</span>
            </motion.div>
          </div>
        </div>

        {/* Track 2: Renter Total Payment (100% Base + 3% Renter Fee from Renter Pocket) */}
        <div>
          <div className="flex items-center justify-between text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
            <span>Renter Payment Breakdown (Not Deducted from Owner)</span>
            <span className="font-mono-tabular text-cyan-700 dark:text-cyan-300">
              103% Paid by Renter
            </span>
          </div>
          <div
            className="w-full h-10 rounded-lg overflow-hidden flex border border-slate-200 dark:border-slate-700"
            role="img"
            aria-label="100 percent base rental rate plus 3 percent renter service fee paid separately by renter"
          >
            <motion.div
              initial={prefersReducedMotion ? false : { scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              style={{ width: '95%', transformOrigin: 'left center' }}
              className="bg-slate-200 dark:bg-[#132340] text-slate-800 dark:text-slate-200 flex items-center justify-between px-4 text-xs font-semibold"
            >
              <span className="truncate">Agreed Base Rental Rate (8% CRES / 92% Owner)</span>
              <span className="font-mono-tabular ml-2">100% Base</span>
            </motion.div>
            <motion.div
              initial={prefersReducedMotion ? false : { scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.35, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              style={{ width: '5%', transformOrigin: 'left center' }}
              className="bg-cyan-500 text-[#09142A] flex items-center justify-center text-[11px] font-mono-tabular font-bold border-l border-white/20"
              title="+3% Renter Service Fee paid directly by renter"
            >
              <span>+3%</span>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Legend Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 mt-6">
        <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#101E38] border border-slate-200/80 dark:border-slate-800">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-600 dark:text-slate-300">
              Owner Net Payout
            </span>
            <span className="font-mono-tabular text-sm font-bold text-[#09142A] dark:text-white">
              92%
            </span>
          </div>
          <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
            Deposited cleanly to the vehicle owner. CRES only cuts 8% from the owner—the 3% renter
            fee never comes out of the owner’s earnings.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#101E38] border border-slate-200/80 dark:border-slate-800">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-blue-800 dark:text-blue-400">
              Owner Service Fee
            </span>
            <span className="font-mono-tabular text-sm font-bold text-blue-700 dark:text-blue-400">
              8%
            </span>
          </div>
          <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
            Only management cut taken from owner income—funding dual GPS hardware, 24/7 monitoring,
            vetting, maintenance coordination, and legal care.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#101E38] border border-slate-200/80 dark:border-slate-800">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-cyan-800 dark:text-cyan-300">
              Renter Service Fee
            </span>
            <span className="font-mono-tabular text-sm font-bold text-cyan-700 dark:text-cyan-300">
              +3%
            </span>
          </div>
          <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
            Paid directly out of the renter’s pocket on top of base rate (11% combined to CRES) for
            verified quality and 24-hour roadside support.
          </p>
        </div>
      </div>
    </div>
  );
};

export const MonitoringProtocolDiagram: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();
  const stages = [
    {
      step: '01',
      title: 'Telemetry & Tamper Signal',
      desc: 'Primary and secondary GPS units transmit encrypted corridor and ignition status to CRES.',
      icon: Radio,
    },
    {
      step: '02',
      title: 'Automated Boundary Check',
      desc: 'Operations software compares vehicle coordinates against contracted Addis Ababa or regional geofences.',
      icon: Navigation,
    },
    {
      step: '03',
      title: 'Immediate Driver Verification',
      desc: 'Specialists contact the verified renter first to confirm route authorization or mechanical need.',
      icon: ShieldAlert,
    },
    {
      step: '04',
      title: 'Immobilization & Recovery',
      desc: 'If unauthorized deviation is confirmed, remote ignition cut-off and local recovery protocols activate.',
      icon: Lock,
    },
  ];

  return (
    <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 overflow-x-auto sm:overflow-visible snap-x snap-mandatory no-scrollbar -mx-5 px-5 sm:mx-0 sm:px-0 pb-2 sm:pb-0">
      {stages.map((item, idx) => {
        const Icon = item.icon;
        return (
          <motion.div
            key={item.step}
            initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.35, delay: idx * 0.06, ease: [0.16, 1, 0.3, 1] }}
            whileHover={prefersReducedMotion ? undefined : { y: -4 }}
            className="w-[78vw] sm:w-auto shrink-0 snap-center rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0B1528] p-5 sm:p-6 flex flex-col justify-between transition-colors hover:border-blue-600/40 dark:hover:border-cyan-500/40"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono-tabular text-xs font-semibold text-blue-700 dark:text-cyan-400">
                  Stage {item.step}
                </span>
                <Icon className="w-5 h-5 text-cyan-600 dark:text-cyan-400" aria-hidden="true" />
              </div>
              <h4 className="font-display text-base font-bold text-[#09142A] dark:text-white">
                {item.title}
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                {item.desc}
              </p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};
