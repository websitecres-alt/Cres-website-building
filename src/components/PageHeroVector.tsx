import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { PageId } from '../types';

interface PageHeroVectorProps {
  variant: Exclude<PageId, 'home'>;
  title?: string;
  location?: string;
}

export const PageHeroVector: React.FC<PageHeroVectorProps> = ({
  variant,
  title,
  location = 'Addis Ababa · CRES Operations',
}) => {
  const prefersReducedMotion = useReducedMotion();

  const renderGraphic = () => {
    switch (variant) {
      case 'about':
        return (
          <svg
            viewBox="0 0 480 320"
            className="w-full h-full"
            role="img"
            aria-label="Vector diagram of CRES institutional mobility ecosystem connecting owners and renters"
          >
            <defs>
              <linearGradient id="aboutGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#1D4ED8" />
                <stop offset="100%" stopColor="#06B6D4" />
              </linearGradient>
            </defs>
            <motion.circle
              cx="240"
              cy="152"
              r="110"
              fill="none"
              stroke="rgba(34,211,238,0.16)"
              strokeWidth="1.5"
              strokeDasharray="6 6"
              animate={prefersReducedMotion ? undefined : { rotate: 360 }}
              transition={{ duration: 36, repeat: Infinity, ease: 'linear' }}
              style={{ originX: '240px', originY: '152px' }}
            />
            <circle cx="240" cy="152" r="68" fill="rgba(29,78,216,0.12)" stroke="#3B82F6" strokeWidth="1.5" />
            <motion.path
              d="M 102 152 H 172 M 308 152 H 378"
              stroke="url(#aboutGrad)"
              strokeWidth="2.5"
              strokeDasharray="6 6"
              animate={prefersReducedMotion ? undefined : { strokeDashoffset: [0, -24] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: 'linear' }}
            />
            <motion.path
              d="M 240 42 V 84"
              stroke="#22D3EE"
              strokeWidth="2"
              strokeDasharray="4 5"
              animate={prefersReducedMotion ? undefined : { strokeDashoffset: [0, -18] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
            />
            <rect x="44" y="124" width="68" height="56" rx="12" fill="#0B1933" stroke="#38BDF8" strokeWidth="1.5" />
            <text x="78" y="149" textAnchor="middle" fill="#E0F2FE" fontSize="11" fontWeight="700">
              OWNER
            </text>
            <text x="78" y="165" textAnchor="middle" fill="#7DD3FC" fontSize="9.5">
              92% Net
            </text>

            <rect x="368" y="124" width="68" height="56" rx="12" fill="#0B1933" stroke="#38BDF8" strokeWidth="1.5" />
            <text x="402" y="149" textAnchor="middle" fill="#E0F2FE" fontSize="11" fontWeight="700">
              RENTER
            </text>
            <text x="402" y="165" textAnchor="middle" fill="#7DD3FC" fontSize="9.5">
              Verified
            </text>

            <rect x="192" y="20" width="96" height="32" rx="8" fill="#0F1F3D" stroke="#60A5FA" strokeWidth="1.2" />
            <text x="240" y="40" textAnchor="middle" fill="#DBEAFE" fontSize="10" fontWeight="600">
              Addis Ababa Law
            </text>

            <path
              d="M 240 112 L 274 128 V 156 C274 176 259 190 240 198 C221 190 206 176 206 156 V 128 Z"
              fill="#09142A"
              stroke="#22D3EE"
              strokeWidth="2"
            />
            <text x="240" y="156" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="800">
              CRES
            </text>
            <text x="240" y="170" textAnchor="middle" fill="#67E8F9" fontSize="8.5" fontWeight="600">
              STEWARDSHIP
            </text>
          </svg>
        );

      case 'owner-services':
        return (
          <svg
            viewBox="0 0 480 320"
            className="w-full h-full"
            role="img"
            aria-label="Vector blueprint showing vehicle asset protection, dual GPS radar, maintenance, and 92% owner payout"
          >
            <motion.circle
              cx="240"
              cy="144"
              r="96"
              fill="none"
              stroke="rgba(34,211,238,0.22)"
              strokeWidth="1.5"
              strokeDasharray="8 6"
              animate={prefersReducedMotion ? undefined : { rotate: 360 }}
              transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
              style={{ originX: '240px', originY: '144px' }}
            />
            <circle cx="240" cy="144" r="64" fill="rgba(29,78,216,0.16)" stroke="#3B82F6" strokeWidth="1.5" />
            <g transform="translate(174, 118)">
              <path
                d="M 16 32 L 32 10 H 98 L 116 32 H 126 C 130 32 132 35 132 39 V 48 H 0 V 39 C 0 35 4 32 16 32 Z"
                fill="#0D1F42"
                stroke="#38BDF8"
                strokeWidth="2"
              />
              <circle cx="30" cy="50" r="10" fill="#061024" stroke="#22D3EE" strokeWidth="2.5" />
              <circle cx="102" cy="50" r="10" fill="#061024" stroke="#22D3EE" strokeWidth="2.5" />
              <circle cx="52" cy="26" r="4" fill="#60A5FA" />
              <circle cx="84" cy="26" r="4" fill="#22D3EE" />
            </g>
            <rect x="34" y="42" width="114" height="36" rx="10" fill="#0B1933" stroke="#38BDF8" strokeWidth="1.2" />
            <text x="91" y="64" textAnchor="middle" fill="#E0F2FE" fontSize="10.5" fontWeight="700">
              92% Owner Payout
            </text>
            <rect x="332" y="42" width="114" height="36" rx="10" fill="#0B1933" stroke="#60A5FA" strokeWidth="1.2" />
            <text x="389" y="64" textAnchor="middle" fill="#DBEAFE" fontSize="10.5" fontWeight="700">
              Dual GPS Guard
            </text>
            <rect x="34" y="212" width="118" height="36" rx="10" fill="#0B1933" stroke="#60A5FA" strokeWidth="1.2" />
            <text x="93" y="234" textAnchor="middle" fill="#DBEAFE" fontSize="10.5" fontWeight="700">
              Verified Renters
            </text>
            <rect x="328" y="212" width="118" height="36" rx="10" fill="#0B1933" stroke="#38BDF8" strokeWidth="1.2" />
            <text x="387" y="234" textAnchor="middle" fill="#E0F2FE" fontSize="10.5" fontWeight="700">
              Service &amp; Legal Care
            </text>
          </svg>
        );

      case 'renter-services':
        return (
          <svg
            viewBox="0 0 480 320"
            className="w-full h-full"
            role="img"
            aria-label="Vector illustration of verified renter mobility pass, digital condition baseline, and 24/7 roadside assistance"
          >
            <rect x="86" y="42" width="308" height="196" rx="16" fill="#0B1933" stroke="#38BDF8" strokeWidth="1.6" />
            <line x1="86" y1="84" x2="394" y2="84" stroke="rgba(148,163,184,0.22)" strokeWidth="1" />
            <text x="108" y="68" fill="#67E8F9" fontSize="11" fontWeight="700">
              CRES VERIFIED RENTER MOBILITY PASS
            </text>
            <rect x="108" y="102" width="84" height="96" rx="10" fill="#071226" stroke="#3B82F6" strokeWidth="1.2" />
            <circle cx="150" cy="136" r="16" fill="#1D4ED8" stroke="#93C5FD" strokeWidth="1.5" />
            <path d="M 126 178 C 126 164 174 164 174 178" fill="none" stroke="#93C5FD" strokeWidth="2" strokeLinecap="round" />
            <g fill="#E2E8F0" fontSize="11" fontWeight="600">
              <text x="212" y="122">01. Driver License &amp; ID Cleared</text>
              <text x="212" y="148">02. Signed Photo Baseline Log</text>
              <text x="212" y="174">03. Fixed +3% Transparent Fee</text>
              <text x="212" y="200" fill="#67E8F9">04. 24/7 Addis Roadside Dispatch</text>
            </g>
            <motion.circle
              cx="358"
              cy="63"
              r="7"
              fill="#22D3EE"
              animate={prefersReducedMotion ? undefined : { opacity: [0.45, 1, 0.45] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
            />
          </svg>
        );

      case 'security':
        return (
          <svg
            viewBox="0 0 480 320"
            className="w-full h-full"
            role="img"
            aria-label="Vector telemetry schematic displaying primary ignition GPS, concealed secondary backup GPS, and geofence perimeter"
          >
            <ellipse
              cx="240"
              cy="148"
              rx="170"
              ry="104"
              fill="rgba(6,182,212,0.06)"
              stroke="#06B6D4"
              strokeWidth="1.6"
              strokeDasharray="7 5"
            />
            {!prefersReducedMotion && (
              <motion.g
                style={{ originX: '240px', originY: '148px' }}
                animate={{ rotate: 360 }}
                transition={{ duration: 7, repeat: Infinity, ease: 'linear' }}
              >
                <path d="M 240 148 L 395 110 A 168 102 0 0 1 384 188 Z" fill="rgba(34,211,238,0.16)" />
              </motion.g>
            )}
            <rect x="165" y="116" width="150" height="64" rx="18" fill="#0B1933" stroke="#60A5FA" strokeWidth="2" />
            <circle cx="204" cy="148" r="14" fill="#1D4ED8" stroke="#FFFFFF" strokeWidth="1.5" />
            <text x="204" y="152" textAnchor="middle" fill="#FFFFFF" fontSize="9.5" fontWeight="700">
              GPS 1
            </text>
            <circle cx="276" cy="148" r="14" fill="#0891B2" stroke="#A5F3FC" strokeWidth="1.5" />
            <text x="276" y="152" textAnchor="middle" fill="#FFFFFF" fontSize="9.5" fontWeight="700">
              GPS 2
            </text>
            <motion.line
              x1="204"
              y1="148"
              x2="276"
              y2="148"
              stroke="#22D3EE"
              strokeWidth="1.8"
              strokeDasharray="4 4"
              animate={prefersReducedMotion ? undefined : { strokeDashoffset: [0, -16] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
            />
            <text x="240" y="34" textAnchor="middle" fill="#67E8F9" fontSize="10.5" fontWeight="700">
              ACTIVE GEOFENCE PERIMETER · REMOTE IMMOBILIZER READY
            </text>
          </svg>
        );

      case 'how-it-works': {
        const steps = Array.from({ length: 8 }, (_, idx) => {
          const angle = ((idx * 45 - 90) * Math.PI) / 180;
          return {
            num: `0${idx + 1}`,
            x: 240 + Math.cos(angle) * 96,
            y: 146 + Math.sin(angle) * 96,
          };
        });
        return (
          <svg
            viewBox="0 0 480 320"
            className="w-full h-full"
            role="img"
            aria-label="Vector orbital diagram showing stages 01 through 08 of the CRES managed rental lifecycle"
          >
            <motion.circle
              cx="240"
              cy="146"
              r="96"
              fill="none"
              stroke="rgba(59,130,246,0.45)"
              strokeWidth="2"
              strokeDasharray="8 6"
              animate={prefersReducedMotion ? undefined : { rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
              style={{ originX: '240px', originY: '146px' }}
            />
            <circle cx="240" cy="146" r="46" fill="#0B1933" stroke="#22D3EE" strokeWidth="2" />
            <text x="240" y="142" textAnchor="middle" fill="#67E8F9" fontSize="11" fontWeight="700">
              8-STAGE
            </text>
            <text x="240" y="158" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="700">
              LIFECYCLE
            </text>
            {steps.map((st) => (
              <g key={st.num} transform={`translate(${st.x}, ${st.y})`}>
                <circle r="17" fill="#09142A" stroke="#38BDF8" strokeWidth="1.6" />
                <text
                  x="0"
                  y="4"
                  textAnchor="middle"
                  fill="#E0F2FE"
                  fontSize="11"
                  fontWeight="700"
                >
                  {st.num}
                </text>
              </g>
            ))}
          </svg>
        );
      }

      case 'business-model':
        return (
          <svg
            viewBox="0 0 480 320"
            className="w-full h-full"
            role="img"
            aria-label="Vector financial diagram showing 92 percent owner payout, 8 percent owner fee, and separate 3 percent renter fee"
          >
            <text x="48" y="54" fill="#93C5FD" fontSize="11" fontWeight="700">
              OWNER BASE SHARE (100% AGREED RATE)
            </text>
            <rect x="48" y="66" width="384" height="44" rx="10" fill="#0B1933" stroke="#334155" strokeWidth="1.2" />
            <rect x="48" y="66" width="332" height="44" rx="10" fill="#1D4ED8" />
            <text x="64" y="93" fill="#FFFFFF" fontSize="13" fontWeight="800">
              92% NET OWNER PAYOUT
            </text>
            <rect x="380" y="66" width="52" height="44" rx="8" fill="#06B6D4" />
            <text x="406" y="93" textAnchor="middle" fill="#061024" fontSize="12" fontWeight="800">
              8%
            </text>

            <text x="48" y="152" fill="#67E8F9" fontSize="11" fontWeight="700">
              SEPARATE RENTER FEE (NOT DEDUCTED FROM OWNER)
            </text>
            <rect x="48" y="164" width="340" height="44" rx="10" fill="#0B1933" stroke="#38BDF8" strokeWidth="1.2" />
            <text x="64" y="191" fill="#CBD5E1" fontSize="12" fontWeight="700">
              100% RENTAL BASE
            </text>
            <rect x="388" y="164" width="56" height="44" rx="10" fill="#22D3EE" />
            <text x="416" y="191" textAnchor="middle" fill="#061024" fontSize="12" fontWeight="800">
              +3%
            </text>

            <text x="48" y="238" fill="#A5F3FC" fontSize="10.5" fontWeight="600">
              Total CRES Fee Across Both Parties = 11% (8% Owner + 3% Renter)
            </text>
          </svg>
        );

      case 'insurance':
        return (
          <svg
            viewBox="0 0 480 320"
            className="w-full h-full"
            role="img"
            aria-label="Vector shield emblem representing completed and active Abay Insurance S.C. theft protection"
          >
            <motion.circle
              cx="240"
              cy="144"
              r="98"
              fill="none"
              stroke="rgba(34,211,238,0.2)"
              strokeWidth="1.5"
              strokeDasharray="6 6"
              animate={prefersReducedMotion ? undefined : { rotate: -360 }}
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              style={{ originX: '240px', originY: '144px' }}
            />
            <path
              d="M 240 52 L 320 84 V 146 C 320 194 285 224 240 242 C 195 224 160 194 160 146 V 84 Z"
              fill="#0B1933"
              stroke="#22D3EE"
              strokeWidth="2.2"
            />
            <path
              d="M 240 72 L 300 96 V 144 C 300 180 274 204 240 218 C 206 204 180 180 180 144 V 96 Z"
              fill="rgba(29,78,216,0.28)"
              stroke="#60A5FA"
              strokeWidth="1.2"
            />
            <text x="240" y="128" textAnchor="middle" fill="#67E8F9" fontSize="10" fontWeight="700">
              ACTIVE COVERAGE
            </text>
            <text x="240" y="150" textAnchor="middle" fill="#FFFFFF" fontSize="14" fontWeight="800">
              ABAY INSURANCE
            </text>
            <text x="240" y="170" textAnchor="middle" fill="#CBD5E1" fontSize="10" fontWeight="600">
              Theft Protection Finalized
            </text>
          </svg>
        );

      case 'faq':
        return (
          <svg
            viewBox="0 0 480 320"
            className="w-full h-full"
            role="img"
            aria-label="Vector knowledge base index connecting CRES operations, dual GPS, owner payouts, and insurance policy guidance"
          >
            {[
              { y: 48, q: '01 · 8-Step Lifecycle Accountability', a: 'Onboarding to Verified ETB Return' },
              { y: 108, q: '02 · Dual GPS & 24/7 Protection', a: 'Primary + Covert Backup Hardware' },
              { y: 168, q: '03 · Owner Keeps 92% Net Payout', a: 'Only 8% Owner Cut · +3% Renter Fee' },
            ].map((item) => (
              <g key={item.q}>
                <rect
                  x="56"
                  y={item.y}
                  width="368"
                  height="48"
                  rx="11"
                  fill="#0B1933"
                  stroke="#3B82F6"
                  strokeWidth="1.3"
                />
                <text x="76" y={item.y + 21} fill="#FFFFFF" fontSize="11.5" fontWeight="700">
                  {item.q}
                </text>
                <text x="76" y={item.y + 37} fill="#67E8F9" fontSize="10">
                  {item.a}
                </text>
              </g>
            ))}
          </svg>
        );

      case 'contact':
        return (
          <svg
            viewBox="0 0 480 320"
            className="w-full h-full"
            role="img"
            aria-label="Vector coordinate map pinpointing the CRES Corporate Headquarters in Bole, Addis Ababa"
          >
            <path d="M 40 160 H 440 M 240 28 V 260" stroke="rgba(148,163,184,0.22)" strokeWidth="1.5" />
            <path
              d="M 80 72 Q 220 128 400 220"
              fill="none"
              stroke="rgba(59,130,246,0.35)"
              strokeWidth="2"
            />
            {!prefersReducedMotion && (
              <motion.circle
                cx="240"
                cy="144"
                r="26"
                fill="none"
                stroke="#22D3EE"
                strokeWidth="1.6"
                initial={{ scale: 0.7, opacity: 0.85 }}
                animate={{ scale: 2.1, opacity: 0 }}
                transition={{ duration: 2.4, repeat: Infinity, ease: 'easeOut' }}
              />
            )}
            <circle cx="240" cy="144" r="14" fill="#1D4ED8" stroke="#22D3EE" strokeWidth="2.5" />
            <circle cx="240" cy="144" r="4" fill="#FFFFFF" />
            <rect x="116" y="182" width="248" height="44" rx="10" fill="#0B1933" stroke="#38BDF8" strokeWidth="1.3" />
            <text x="240" y="201" textAnchor="middle" fill="#FFFFFF" fontSize="11.5" fontWeight="700">
              CRES ADDIS ABABA HQ · BOLE CORRIDOR
            </text>
            <text x="240" y="217" textAnchor="middle" fill="#67E8F9" fontSize="9.5">
              9.0054° N · 38.7636° E · Mon–Sat Operations
            </text>
          </svg>
        );
    }
  };

  return (
    <div className="relative w-full aspect-[16/10] lg:aspect-auto lg:min-h-[300px] rounded-2xl overflow-hidden border border-slate-700/70 bg-[#071226] shadow-2xl flex flex-col justify-between">
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-25 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle at 75% 25%, rgba(34,211,238,0.22), transparent 55%), linear-gradient(to right, rgba(148,163,184,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.12) 1px, transparent 1px)',
          backgroundSize: '100% 100%, 28px 28px, 28px 28px',
        }}
      />

      <div className="relative flex-1 w-full p-3 sm:p-4 flex items-center justify-center">
        {renderGraphic()}
      </div>

      <motion.div
        initial={prefersReducedMotion ? false : { opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, delay: 0.2 }}
        className="relative px-4 sm:px-5 py-3.5 border-t border-slate-800/90 bg-[#050C1B]/90"
      >
        <p className="text-[11px] sm:text-xs font-medium text-cyan-300">{location}</p>
        {title && (
          <p className="font-display text-sm sm:text-base font-bold text-white mt-0.5">
            {title}
          </p>
        )}
      </motion.div>
    </div>
  );
};

export const CompanyBackgroundVector: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="relative w-full h-full min-h-[300px] rounded-2xl overflow-hidden border border-slate-700/70 bg-[#071226] shadow-2xl flex flex-col justify-between">
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-25 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle at 75% 25%, rgba(34,211,238,0.22), transparent 55%), linear-gradient(to right, rgba(148,163,184,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.12) 1px, transparent 1px)',
          backgroundSize: '100% 100%, 28px 28px, 28px 28px',
        }}
      />

      <div className="relative flex-1 w-full p-4 sm:p-5 flex items-center justify-center">
        <svg
          viewBox="0 0 480 310"
          className="w-full h-full"
          role="img"
          aria-label="Vector blueprint showing Addis Ababa market transformation from informal brokers to CRES institutional stewardship"
        >
          <defs>
            <linearGradient id="bgReformGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#64748B" />
              <stop offset="50%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#22D3EE" />
            </linearGradient>
          </defs>

          {/* Left: Informal Fragmentation */}
          <rect
            x="24"
            y="48"
            width="124"
            height="194"
            rx="14"
            fill="#0B1933"
            stroke="rgba(148,163,184,0.32)"
            strokeWidth="1.2"
            strokeDasharray="4 4"
          />
          <text x="86" y="72" textAnchor="middle" fill="#94A3B8" fontSize="9.5" fontWeight="700">
            INFORMAL BROKERS
          </text>
          <g fontSize="9" fill="#64748B" fontWeight="600">
            <rect x="38" y="88" width="96" height="28" rx="7" fill="#071226" stroke="rgba(148,163,184,0.2)" />
            <text x="86" y="106" textAnchor="middle">
              Unverified Drivers
            </text>
            <rect x="38" y="126" width="96" height="28" rx="7" fill="#071226" stroke="rgba(148,163,184,0.2)" />
            <text x="86" y="144" textAnchor="middle">
              Opaque Street Cuts
            </text>
            <rect x="38" y="164" width="96" height="28" rx="7" fill="#071226" stroke="rgba(148,163,184,0.2)" />
            <text x="86" y="182" textAnchor="middle">
              No Exit Accountability
            </text>
          </g>
          <text x="86" y="222" textAnchor="middle" fill="#64748B" fontSize="8.5">
            Replaced by CRES Model
          </text>

          {/* Animated Transition Conduit */}
          <motion.path
            d="M 152 145 H 196"
            stroke="url(#bgReformGrad)"
            strokeWidth="2.5"
            strokeDasharray="5 5"
            animate={prefersReducedMotion ? undefined : { strokeDashoffset: [0, -20] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'linear' }}
          />
          <polygon points="194,140 202,145 194,150" fill="#22D3EE" />

          {/* Center-Right: CRES Institutional Ecosystem */}
          <rect
            x="204"
            y="34"
            width="252"
            height="222"
            rx="16"
            fill="#0B1933"
            stroke="#38BDF8"
            strokeWidth="1.6"
          />
          <text x="330" y="59" textAnchor="middle" fill="#67E8F9" fontSize="10.5" fontWeight="700">
            CRES INSTITUTIONAL ECOSYSTEM
          </text>
          <line x1="220" y1="70" x2="440" y2="70" stroke="rgba(56,189,248,0.22)" strokeWidth="1" />

          {/* Four Institutional Pillars Grid */}
          <rect x="220" y="84" width="102" height="62" rx="10" fill="#071226" stroke="#3B82F6" strokeWidth="1.2" />
          <text x="271" y="109" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="700">
            LIBRE &amp; ID CHECK
          </text>
          <text x="271" y="126" textAnchor="middle" fill="#93C5FD" fontSize="8.5">
            Ethiopian Contracts
          </text>

          <rect x="338" y="84" width="102" height="62" rx="10" fill="#071226" stroke="#22D3EE" strokeWidth="1.2" />
          <text x="389" y="109" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="700">
            2x GPS GUARD
          </text>
          <text x="389" y="126" textAnchor="middle" fill="#67E8F9" fontSize="8.5">
            24/7 Operations Desk
          </text>

          <rect x="220" y="158" width="102" height="62" rx="10" fill="#071226" stroke="#22D3EE" strokeWidth="1.2" />
          <text x="271" y="183" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="700">
            ABAY INSURANCE
          </text>
          <text x="271" y="200" textAnchor="middle" fill="#67E8F9" fontSize="8.5">
            Active Theft Cover
          </text>

          <rect x="338" y="158" width="102" height="62" rx="10" fill="#071226" stroke="#3B82F6" strokeWidth="1.2" />
          <text x="389" y="183" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="700">
            92% OWNER NET
          </text>
          <text x="389" y="200" textAnchor="middle" fill="#93C5FD" fontSize="8.5">
            8% Owner · +3% Renter
          </text>

          {/* Subtle orbital verification ring on top-right corner */}
          <motion.circle
            cx="434"
            cy="55"
            r="6"
            fill="#22D3EE"
            animate={prefersReducedMotion ? undefined : { opacity: [0.45, 1, 0.45] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
          />
          <text x="330" y="242" textAnchor="middle" fill="#CBD5E1" fontSize="9.5" fontWeight="600">
            Full Lifecycle Stewardship Across Addis Ababa
          </text>
        </svg>
      </div>

      <div className="relative px-4 sm:px-5 py-3.5 border-t border-slate-800/90 bg-[#050C1B]/90">
        <p className="text-[11px] sm:text-xs font-medium text-cyan-300">
          Market Reform Architecture · Addis Ababa
        </p>
        <p className="font-display text-sm sm:text-base font-bold text-white mt-0.5">
          From Informal Brokerage to Managed Corporate Accountability
        </p>
      </div>
    </div>
  );
};

