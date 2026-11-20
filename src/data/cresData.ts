import {
  ComparisonRow,
  FaqItem,
  FleetClassItem,
  GalleryItem,
  LifecycleStep,
  PageId,
  ServicePillar,
} from '../types';

export const IMAGES = {
  heroFleet: '/src/assets/images/toyota_rav4_carshed_1795182493621.jpg',
  ownerInspection: '/src/assets/images/ethiopian_car_inspection_1795181115803.jpg',
  renterVehicle: '/src/assets/images/suzuki_dzire_carshed_1795182493386.jpg',
  monitoringCenter: '/src/assets/images/gps_monitoring_screen_1795181115797.jpg',
  addisSkyline: '/src/assets/images/about_addis_skyline_1795094118058.jpg',
  executiveInterior: '/src/assets/images/gallery_executive_interior_1795094653008.jpg',
  addisEveningDrive: '/src/assets/images/gallery_addis_evening_drive_1795094653783.jpg',
  gpsHardware: '/src/assets/images/gallery_gps_hardware_precision_1795094653497.jpg',
  diplomaticLineup: '/src/assets/images/gallery_diplomatic_fleet_lineup_1795094652704.jpg',
  businessContracts: '/src/assets/images/hero_business_contracts_1795095616920.jpg',
  insuranceProtection: '/src/assets/images/hero_insurance_protection_1795095617688.jpg',
  addisCorporateDesk: '/src/assets/images/hero_addis_corporate_desk_1795095617317.jpg',
  fleetCompactSedan: '/src/assets/images/toyota_corolla_carshed_1795182494955.jpg',
  suzukiDzire: '/src/assets/images/suzuki_dzire_carshed_1795182493386.jpg',
  bydSeagull: '/src/assets/images/byd_seagull_carshed_1795182493473.jpg',
  toyotaRav4: '/src/assets/images/toyota_rav4_carshed_1795182493621.jpg',
  landCruiserPrado: '/src/assets/images/land_cruiser_prado_carshed_1795182494223.jpg',
  toyotaHiace: '/src/assets/images/toyota_hiace_carshed_1795182492975.jpg',
} as const;

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-diplomatic-lineup',
    src: IMAGES.diplomaticLineup,
    alt: 'Three late-model executive SUVs and sedans staged outside a modern corporate pavilion',
    title: 'Executive & Diplomatic Fleet Lineup',
    category: 'Fleet Showcase',
    location: 'Bole Corporate Corridor',
    caption:
      'Representative late-model sedans and SUVs prepared for verified corporate, NGO, and private placements under standardized CRES agreements.',
    highlight: true,
  },
  {
    id: 'gal-gps-hardware',
    src: IMAGES.gpsHardware,
    alt: 'Precision automotive dual GPS hardware modules and shielded wiring harnesses',
    title: 'Dual GPS & Telemetry Hardware Suite',
    category: 'Security & GPS',
    location: 'CRES Installation Bay',
    caption:
      'Primary ignition-integrated telemetry paired with a concealed, battery-backed secondary GPS unit to eliminate single-point tampering.',
  },
  {
    id: 'gal-executive-interior',
    src: IMAGES.executiveInterior,
    alt: 'Tailored leather executive vehicle cabin inspected prior to handover',
    title: 'Cabin Quality & Interior Readiness',
    category: 'Fleet Showcase',
    location: 'Pre-Handover Inspection',
    caption:
      'Every vehicle undergoes interior detailing, instrument diagnostics, and timestamped photo verification before keys change hands.',
  },
  {
    id: 'gal-monitoring-center',
    src: IMAGES.monitoringCenter,
    alt: 'Ethiopian CRES operations specialist watching active fleet routes and vehicle icons on a large desktop map monitor',
    title: '24-Hour Fleet Monitoring Workstation',
    category: 'Security & GPS',
    location: 'Addis Ababa Operations Desk',
    caption:
      'A dedicated specialist tracks live Addis Ababa map routes, geofence zones, and vehicle positions on a high-visibility dispatch screen around the clock.',
    highlight: true,
  },
  {
    id: 'gal-inspection-bay',
    src: IMAGES.ownerInspection,
    alt: 'Ethiopian automotive specialist recording multi-point mechanical inspection on tablet in Addis Ababa',
    title: 'Multi-Point Mechanical Inspection',
    category: 'Addis Operations',
    location: 'Authorized Addis Ababa Bay',
    caption:
      'Ethiopian technical inspectors check brakes, tires, fluids, suspension, and body panels into a digital asset dossier signed by both owner and CRES.',
  },
  {
    id: 'gal-addis-evening',
    src: IMAGES.addisEveningDrive,
    alt: 'Executive SUV driving along illuminated modern Addis Ababa boulevard at twilight',
    title: '24/7 Corridor Protection Across Addis Ababa',
    category: 'Addis Operations',
    location: 'Central Business Boulevard',
    caption:
      'Continuous nighttime telemetry and emergency dispatch coverage keep both corporate renters and vehicle owners protected after hours.',
  },
  {
    id: 'gal-renter-handover',
    src: IMAGES.renterVehicle,
    alt: 'Pearl white Suzuki Dzire sedan parked neatly under a covered car shed inside a clean compound',
    title: 'Verified Handover & Condition Baseline',
    category: 'Fleet Showcase',
    location: 'Kazanchis District',
    caption:
      'Joint walkaround documentation ensures renters are never held liable for pre-existing cosmetic wear.',
  },
  {
    id: 'gal-addis-skyline',
    src: IMAGES.addisSkyline,
    alt: 'Modern glass office towers and wide paved avenues in Addis Ababa commercial center',
    title: 'Serving Addis Ababa’s Mobility Infrastructure',
    category: 'Addis Operations',
    location: 'Addis Ababa, Ethiopia',
    caption:
      'Built specifically for Ethiopian legal frameworks, insurance collaboration, and urban commercial standards.',
  },
];

export const PAGE_TITLES: Record<PageId, string> = {
  home: 'CRES – Managed Car Rental Ecosystem in Addis Ababa',
  about: 'About CRES – Mission, Vision & Industry Reform | CRES',
  'owner-services': 'Vehicle Owner Services – Full-Lifecycle Asset Management | CRES',
  'renter-services': 'Renter Services – Verified & Transparent Mobility | CRES',
  security: 'Security & Technology – Dual GPS & 24/7 Monitoring | CRES',
  'how-it-works': 'How It Works – Eight-Step Rental Lifecycle | CRES',
  'business-model': 'Business Model – Transparent 8% / 3% Fee Structure | CRES',
  insurance: 'Insurance & Theft Protection – Active Abay Insurance Coverage | CRES',
  faq: 'Frequently Asked Questions | CRES',
  contact: 'Contact Us – Addis Ababa Corporate Office | CRES',
};

export const CORE_METRICS = [
  {
    value: 24,
    suffix: '/7',
    label: 'Continuous Monitoring',
    detail: 'Dedicated operations desk overseeing active fleet corridors.',
  },
  {
    value: 2,
    suffix: 'x',
    label: 'Redundant GPS Units',
    detail: 'Primary telemetry paired with a concealed secondary tracker.',
  },
  {
    value: 8,
    suffix: ' Steps',
    label: 'Managed Lifecycle',
    detail: 'Structured accountability from onboarding through return.',
  },
  {
    value: 92,
    suffix: '%',
    label: 'Owner Net Payout',
    detail: 'Owners keep 92% (only 8% fee cut); the +3% renter fee comes from the renter.',
  },
];

export const LIFECYCLE_STEPS: LifecycleStep[] = [
  {
    stepNumber: '01',
    id: 'registration',
    title: 'Vehicle Registration',
    shortSummary: 'Ownership documentation review and formal fleet onboarding.',
    detailedOverview:
      'Vehicle owners submit title deeds (Libre), valid Ethiopian registration certificates, roadworthiness records, and current policy papers. CRES verifies legal ownership before scheduling a physical intake.',
    ownerRole: 'Present original ownership booklet, national ID, and vehicle availability preferences.',
    renterRole: 'Not yet involved; fleet eligibility is cleared prior to market exposure.',
    cresAction: 'Authenticate ownership records, establish the management mandate, and open a digital asset dossier.',
    safeguard: 'Eliminates undocumented vehicles and disputed third-party subleasing.',
  },
  {
    stepNumber: '02',
    id: 'inspection',
    title: 'Multi-Point Technical Inspection',
    shortSummary: 'Baseline mechanical, exterior, interior, and odometer documentation.',
    detailedOverview:
      'Every vehicle undergoes a standardized physical and mechanical assessment at an authorized inspection bay in Addis Ababa. Brake integrity, tire tread, fluid levels, suspension, and cosmetic condition are recorded with timestamped photographs.',
    ownerRole: 'Review and countersign the baseline digital condition report.',
    renterRole: 'Benefits from verified mechanical safety and reliable roadworthiness.',
    cresAction: 'Execute multi-point diagnostic checklist and archive high-resolution baseline imagery.',
    safeguard: 'Creates an objective condition benchmark that prevents unfair damage disputes.',
  },
  {
    stepNumber: '03',
    id: 'gps-installation',
    title: 'Dual GPS Hardware Installation',
    shortSummary: 'Primary telematics and concealed backup tracker commissioning.',
    detailedOverview:
      'Certified technicians install two independent tracking units inside the vehicle: a primary operational GPS transceiver connected to ignition immobilization relays, and an independent concealed secondary unit with internal battery backup.',
    ownerRole: 'Approves hardware installation and receives dual-protection certification.',
    renterRole: 'Operates within clearly communicated geofencing and safety parameters.',
    cresAction: 'Calibrate primary and secondary telemetry, verify remote immobilization response, and test geofence alerts.',
    safeguard: 'Maintains asset visibility even if a primary unit is tampered with or disconnected.',
  },
  {
    stepNumber: '04',
    id: 'listing',
    title: 'Curated Fleet Listing',
    shortSummary: 'Professional vehicle presentation and corporate market placement.',
    detailedOverview:
      'Once cleared mechanically and equipped with security hardware, the vehicle is added to CRES’s managed fleet portfolio with accurate specifications, transparent daily rates in ETB, and defined permitted travel zones.',
    ownerRole: 'Agrees on recommended ETB pricing bands and minimum rental durations.',
    renterRole: 'Reviews standardized vehicle specifications without hidden broker markups.',
    cresAction: 'Photograph the vehicle, calibrate market pricing, and match it with vetted corporate or individual demand.',
    safeguard: 'Protects owners from underpricing and protects renters from misleading vehicle descriptions.',
  },
  {
    stepNumber: '05',
    id: 'verification',
    title: 'Strict Customer Verification',
    shortSummary: 'Identity, driver license, and guarantor screening prior to approval.',
    detailedOverview:
      'Prospective renters undergo multi-layered screening before receiving vehicle keys. CRES validates national IDs or passports, active Ethiopian or international driving permits, residential/corporate references, and security deposit compliance.',
    ownerRole: 'Enjoys peace of mind knowing no unverified driver operates the vehicle.',
    renterRole: 'Completes one structured verification dossier rather than ad-hoc informal checks.',
    cresAction: 'Cross-verify identity credentials, driving history, and guarantor or corporate authorization documents.',
    safeguard: 'Filters out high-risk applicants and unauthorized third-party drivers.',
  },
  {
    stepNumber: '06',
    id: 'agreement',
    title: 'Standardized Rental Agreement',
    shortSummary: 'Legally structured Ethiopian contract covering terms, fees, and liability.',
    detailedOverview:
      'Both parties are governed by clear, standardized contractual documentation outlining the exact daily rate, the 8% owner and 3% renter service fees, fuel and mileage expectations, permitted geographic corridors, and incident procedures.',
    ownerRole: 'Protected by legally enforceable terms prepared with local legal standards.',
    renterRole: 'Receives transparent fee schedules, clear liability limits, and documented handover terms.',
    cresAction: 'Prepare contract terms, conduct joint pre-handover walkaround, and record signatures.',
    safeguard: 'Replaces verbal broker promises with enforceable legal clarity.',
  },
  {
    stepNumber: '07',
    id: 'active-management',
    title: '24/7 Active Rental Management',
    shortSummary: 'Continuous monitoring, roadside coordination, and mid-term support.',
    detailedOverview:
      'Throughout the rental duration, CRES’s monitoring desk oversees corridor compliance, geofence boundaries, scheduled service intervals, and emergency assistance. Neither the owner nor the renter is left handling breakdowns or disputes alone.',
    ownerRole: 'Exempt from late-night phone calls, renter follow-ups, or emergency dispatch.',
    renterRole: 'Supported by 24-hour emergency assistance and scheduled replacement coordination if needed.',
    cresAction: 'Monitor telemetry alerts, coordinate preventive maintenance, and mediate operational questions.',
    safeguard: 'Early anomaly detection enables immediate response before minor issues escalate.',
  },
  {
    stepNumber: '08',
    id: 'vehicle-return',
    title: 'Verified Return & Settlement',
    shortSummary: 'Post-rental comparison inspection, fee reconciliation, and payout release.',
    detailedOverview:
      'At contract completion, CRES conducts a structured return inspection against the baseline digital report from Step 02. Fuel levels, mileage, exterior panels, and mechanical health are verified prior to deposit release and owner income settlement.',
    ownerRole: 'Receives transparent ETB settlement statements less the 8% owner service fee.',
    renterRole: 'Receives documented return sign-off and prompt security deposit clearance.',
    cresAction: 'Compare pre- and post-rental inspection media, finalize ledger settlement, and prepare the vehicle for its next cycle.',
    safeguard: 'Ensures fair accountability for any documented wear, damage, or late return charges.',
  },
];

export const OWNER_PILLARS: ServicePillar[] = [
  {
    index: '01',
    title: 'Vehicle Registration Process',
    summary: 'Structured asset onboarding with full legal title verification.',
    details:
      'CRES verifies your vehicle title booklet (Libre), annual inspection certificate, and tax clearance before placing your asset under formal management, ensuring every fleet vehicle meets strict institutional standards.',
    keyPoints: [
      'Ownership title and compliance check',
      'Signed management mandate defining boundaries',
      'Dedicated digital asset dossier creation',
    ],
  },
  {
    index: '02',
    title: 'Professional Vehicle Marketing',
    summary: 'Targeted placement with vetted corporate, NGO, and private clients.',
    details:
      'Instead of exposing your vehicle to unscreened street inquiries, CRES presents your car to high-trust corporate teams, diplomatic visitors, and vetted private renters across Addis Ababa.',
    keyPoints: [
      'Standardized photography and specification sheets',
      'Market-calibrated daily and monthly ETB rates',
      'Zero informal middleman commission markups',
    ],
  },
  {
    index: '03',
    title: 'Rigorous Renter Verification',
    summary: 'Multi-step identity, license, and guarantor vetting before handover.',
    details:
      'Every applicant is screened against national identification or passport records, valid driving credentials, and verified guarantor or institutional sponsorship.',
    keyPoints: [
      'Government ID and driver license verification',
      'Employment or corporate sponsor confirmation',
      'Security deposit and contract compliance screening',
    ],
  },
  {
    index: '04',
    title: 'Dual GPS Hardware Protection',
    summary: 'Redundant primary and concealed secondary tracking architecture.',
    details:
      'Every enrolled vehicle is fitted with two independent GPS units—one primary telematics system and one covert secondary unit with independent power—protecting against signal tampering.',
    keyPoints: [
      'Primary telemetry with ignition cut-off capability',
      'Concealed battery-backed secondary GPS beacon',
      'Tamper and power-disconnect alert triggers',
    ],
  },
  {
    index: '05',
    title: '24-Hour Monitoring Center',
    summary: 'Around-the-clock oversight by trained operations personnel.',
    details:
      'Our Addis Ababa operations team monitors route corridors, geofence thresholds, and unusual vehicle behavior day and night, ready to intervene immediately.',
    keyPoints: [
      'Authorized regional geofence enforcement',
      'Immediate escalation on boundary breach',
      'Coordinated local recovery protocols',
    ],
  },
  {
    index: '06',
    title: 'Standardized Vehicle Inspections',
    summary: 'Timestamped pre-rental and post-rental condition records.',
    details:
      'Detailed visual and mechanical inspections are logged before every departure and immediately upon return, giving owners indisputable proof of vehicle condition.',
    keyPoints: [
      'High-resolution exterior and cabin photo logs',
      'Odometer, tire, and mechanical baseline checks',
      'Objective damage attribution at return',
    ],
  },
  {
    index: '07',
    title: 'Preventive & Corrective Maintenance',
    summary: 'Scheduled servicing through vetted Addis Ababa workshops.',
    details:
      'CRES tracks mileage intervals and coordinates oil changes, brake checks, and routine servicing with approved mechanics so your car retains long-term mechanical value.',
    keyPoints: [
      'Automated service interval tracking',
      'Pre-approved repair estimates before work begins',
      'Documented workshop receipts for every service',
    ],
  },
  {
    index: '08',
    title: 'Legal Assistance & Contract Enforcement',
    summary: 'Structured Ethiopian rental agreements and dispute support.',
    details:
      'Traditional brokers vanish when a dispute arises. CRES issues binding contracts and supports owners with formal legal escalation, notice issuance, and claim documentation.',
    keyPoints: [
      'Standardized contracts aligned with Ethiopian law',
      'Formal breach and overdue-return escalation',
      'Compiled telemetry and inspection evidence packs',
    ],
  },
  {
    index: '09',
    title: 'Transparent Income Management',
    summary: 'Predictable ETB payouts with a single 8% owner service fee.',
    details:
      'Owners receive clear itemization of rental days, gross revenue, any approved maintenance deductions, and the flat 8% CRES management fee—never hidden commission cuts.',
    keyPoints: [
      'Itemized rental and payout statements in ETB',
      'Flat 8% service fee deducted only on completed rentals',
      'Clear reconciliation of security deposits and extensions',
    ],
  },
];

export const RENTER_PILLARS: ServicePillar[] = [
  {
    index: '01',
    title: 'Renting Through a Managed Ecosystem',
    summary: 'Reliable, roadworthy vehicles backed by corporate accountability.',
    details:
      'Renting through CRES removes the uncertainty of informal street brokers. Every vehicle in our portfolio is legally documented, mechanically inspected, and maintained to consistent corporate standards.',
    keyPoints: [
      'Guaranteed mechanical readiness prior to handover',
      'Accurate vehicle model and condition disclosures',
      'Dedicated corporate point of contact throughout the trip',
    ],
  },
  {
    index: '02',
    title: 'Streamlined Customer Verification',
    summary: 'Clear, dignified onboarding requirements with predictable timelines.',
    details:
      'CRES conducts standardized verification of your driver license, identification, and security guarantee once—protecting both the renter and the vehicle owner from fraudulent arrangements.',
    keyPoints: [
      'Clear checklist of required ID and license documents',
      'Corporate and NGO direct-billing verification support',
      'Respectful, confidential handling of personal records',
    ],
  },
  {
    index: '03',
    title: 'Fair & Clear Rental Agreements',
    summary: 'Plain-language contracts without ambiguous broker clauses.',
    details:
      'Before taking delivery, renters review and sign a clear contract detailing daily rates, mileage and regional corridor permissions, fuel policies, and return schedules.',
    keyPoints: [
      'Written terms in plain, transparent language',
      'Explicitly defined authorized travel zones',
      'Clear extension and late-return rules upfront',
    ],
  },
  {
    index: '04',
    title: 'Transparent 3% Renter Service Fee',
    summary: 'Upfront pricing with zero hidden broker commissions.',
    details:
      'In traditional Addis Ababa rentals, broker fees are arbitrarily inflated behind closed doors. CRES charges a transparent 3% renter service fee clearly itemized alongside the base rental rate.',
    keyPoints: [
      'Fixed 3% service fee visible before commitment',
      'Full ETB cost breakdown prior to contract signing',
      'Official receipts for corporate expense reimbursement',
    ],
  },
  {
    index: '05',
    title: 'Joint Pre- & Post-Rental Inspections',
    summary: 'Protect yourself against pre-existing scratch or mechanical disputes.',
    details:
      'CRES specialists walk around the vehicle with the renter at pickup and return, recording timestamped photos of every panel so you are never held liable for prior wear.',
    keyPoints: [
      'Shared baseline photo record signed at pickup',
      'Objective return comparison against baseline media',
      'Prompt deposit clearance upon clean sign-off',
    ],
  },
  {
    index: '06',
    title: 'Customer Protection & Fair Mediation',
    summary: 'Impartial operational oversight instead of informal disputes.',
    details:
      'Because CRES manages the contract, GPS logs, and inspection evidence neutrally, renters are shielded from arbitrary deposit withholding or sudden rate renegotiations.',
    keyPoints: [
      'Locked-in contractual rates for the agreed term',
      'Evidence-based resolution of any condition inquiry',
      'Protected deposit return protocols',
    ],
  },
  {
    index: '07',
    title: '24/7 Emergency & Roadside Assistance',
    summary: 'Immediate coordination if mechanical issues or incidents occur.',
    details:
      'If a flat tire, battery issue, mechanical fault, or traffic incident happens anywhere within authorized corridors, CRES’s monitoring team coordinates roadside aid and support immediately.',
    keyPoints: [
      'Direct 24-hour emergency hotline access',
      'Coordinated mechanic dispatch and recovery support',
      'Guidance through incident documentation and reporting',
    ],
  },
];

export const BROKER_COMPARISON: ComparisonRow[] = [
  {
    dimension: 'Post-Handover Involvement',
    traditionalBroker: 'Disappears immediately after collecting an informal finder’s fee.',
    cresEcosystem: 'Actively manages the entire 8-step lifecycle until final return and payout.',
  },
  {
    dimension: 'Vehicle Security',
    traditionalBroker: 'No tracking or relies on a single easily disabled aftermarket tracker.',
    cresEcosystem: 'Dual GPS protection (primary + concealed backup), geofencing, and remote immobilization.',
  },
  {
    dimension: 'Renter Screening',
    traditionalBroker: 'Minimal verbal checks or photocopied IDs without verification.',
    cresEcosystem: 'Structured identity, license, guarantor, and corporate sponsorship screening.',
  },
  {
    dimension: 'Fee Transparency',
    traditionalBroker: 'Opaque double-sided markups hidden from both owner and renter.',
    cresEcosystem: 'Fixed, published 8% owner service fee and 3% renter service fee (11% combined).',
  },
  {
    dimension: 'Condition Documentation',
    traditionalBroker: 'Informal walkaround; frequent disputes over scratches or mechanical faults.',
    cresEcosystem: 'Timestamped digital inspection records signed at intake, pickup, and return.',
  },
  {
    dimension: 'Legal & Emergency Support',
    traditionalBroker: 'Owners and renters left alone during breakdowns, theft, or contract breach.',
    cresEcosystem: '24-hour monitoring center, emergency dispatch, and structured legal escalation.',
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'General',
    question: 'What is CRES and how is it different from a traditional car rental broker?',
    answer:
      'CRES (Car Rental Ecosystem) is a professional vehicle rental management company based in Addis Ababa. Traditional brokers simply introduce a vehicle owner to a renter, take an informal commission, and step away. CRES manages the entire rental lifecycle—from legal verification, technical inspection, and dual GPS installation to 24-hour monitoring, maintenance coordination, legal support, and final return settlement.',
  },
  {
    id: 'faq-2',
    category: 'General',
    question: 'Can I book a vehicle or log into an account on this website?',
    answer:
      'No. This website is CRES’s official corporate informational platform designed to explain our services, security architecture, business model, and partnership roadmap. A dedicated mobile application is planned as a separate future phase. To inquire about onboarding a vehicle or corporate mobility, please reach out through our Contact Us page.',
  },
  {
    id: 'faq-3',
    category: 'Vehicle Owners',
    question: 'Do I have to communicate with renters or manage handovers myself?',
    answer:
      'No. CRES acts as your dedicated asset manager. Once your vehicle completes registration, inspection, and GPS installation, CRES handles marketing, renter screening, contract signing, handover walkarounds, active trip monitoring, and return reconciliation on your behalf.',
  },
  {
    id: 'faq-4',
    category: 'Vehicle Owners',
    question: 'What documents are needed to enroll a vehicle with CRES?',
    answer:
      'Vehicle owners provide the original ownership booklet (Libre), valid Ethiopian registration and annual technical inspection (Bolo) records, current insurance documentation, and owner identification. Every document is verified prior to fleet onboarding.',
  },
  {
    id: 'faq-5',
    category: 'Security & GPS',
    question: 'Why does CRES install two GPS devices in every managed vehicle?',
    answer:
      'Single GPS units are vulnerable to discovery and disconnection. CRES installs a primary GPS unit integrated with vehicle diagnostics and immobilization relays, plus a completely independent, concealed secondary GPS unit equipped with its own internal battery. If the primary unit is tampered with, the secondary unit continues transmitting location data to our 24-hour monitoring center.',
  },
  {
    id: 'faq-6',
    category: 'Security & GPS',
    question: 'How do geofencing and remote engine immobilization work?',
    answer:
      'Every rental contract specifies authorized travel boundaries (for example, Addis Ababa metropolitan boundaries or approved regional corridors). If a vehicle exits an authorized geofence without prior approval or triggers a security alert, the monitoring center contacts the driver immediately and, where safety protocols dictate, can safely activate remote engine immobilization so the vehicle cannot be restarted once stopped.',
  },
  {
    id: 'faq-7',
    category: 'Renters',
    question: 'How does CRES protect renters from unfair damage claims?',
    answer:
      'Before you drive away, a CRES inspector conducts a joint walkaround with you and captures timestamped digital photographs of the exterior, interior, tires, and odometer. The exact same checklist is used upon return, ensuring you are never charged for pre-existing wear or undocumented marks.',
  },
  {
    id: 'faq-8',
    category: 'Renters',
    question: 'What happens if the vehicle experiences a mechanical breakdown during my rental?',
    answer:
      'Renters have direct access to CRES’s 24-hour operations and emergency support line. Our team coordinates immediate roadside assistance, recovery if required, and workshop inspection—eliminating the stress of negotiating repairs directly with an owner.',
  },
  {
    id: 'faq-9',
    category: 'Fees & Insurance',
    question: 'How does the 8% owner and 3% renter service fee structure work?',
    answer:
      'CRES replaces hidden broker markups with full clarity. CRES deducts only an 8% service fee from the vehicle owner’s agreed base rental income—so the owner always receives 92% net payout. Separately, the 3% renter service fee is paid directly out of the renter’s pocket on top of the 100% base rate (103% total paid by the renter) and is never deducted from the owner. Combined across both parties, this equals 11% total ecosystem revenue for CRES.',
  },
  {
    id: 'faq-10',
    category: 'Fees & Insurance',
    question: 'Does CRES have active theft insurance with Abay Insurance S.C.?',
    answer:
      'Yes. CRES’s theft insurance process with Abay Insurance S.C. is completed and active—not ongoing or pending. Alongside verified vehicle insurance certificates, dual GPS hardware, and 24-hour monitoring, managed vehicles benefit from established theft protection backed by Abay Insurance S.C.',
  },
];

export const CONTACT_INFO = {
  officeName: 'CRES Corporate Headquarters',
  addressLine1: 'Bole Commercial Corridor, Bole Sub-City',
  addressLine2: 'Addis Ababa, Ethiopia',
  phone: '+251922559021',
  email: 'cresmobility@gmail.com',
  hours: 'Monday – Saturday · 08:30 – 17:30 EAT (24/7 Active Monitoring Desk)',
};

export const INQUIRY_CATEGORIES = [
  'Vehicle Owner Onboarding Inquiry',
  'Renter & Corporate Mobility Inquiry',
  'Insurance & Legal Partnership',
  'Investor & Strategic Relations',
  'General Corporate Inquiry',
] as const;

export const FLEET_CLASSES: FleetClassItem[] = [
  {
    id: 'class-suzuki-dzire',
    category: 'Sedans',
    name: 'Suzuki Dzire',
    examples: 'Compact City Sedan · Addis Ababa Daily Favorite',
    src: IMAGES.suzukiDzire,
    alt: 'Pearl white Suzuki Dzire compact sedan parked under a shaded car shed inside a gated compound',
    seats: '5 Seats',
    transmission: 'Automatic',
    idealFor: 'Efficient daily city errands, business appointments, and low fuel consumption in Addis Ababa',
    description:
      'One of Ethiopia’s most popular and reliable compact sedans—offering easy urban maneuverability, proven fuel efficiency, and dependable suspension for daily Addis Ababa commuting.',
    securityFeatures: [
      'Primary ignition-integrated GPS & concealed battery-backed secondary tracker',
      'Addis Ababa metropolitan geofence boundary protection',
      'Timestamped pre-rental & post-rental multi-point condition logs',
    ],
  },
  {
    id: 'class-byd-seagull',
    category: 'Electric Cars',
    name: 'BYD Seagull EV',
    examples: 'All-Electric City Hatchback · Zero Fuel Expense',
    src: IMAGES.bydSeagull,
    alt: 'Modern white BYD Seagull electric hatchback parked beneath a steel car-shed canopy inside a clean walled compound',
    seats: '4 Seats',
    transmission: 'Single-Speed Electric',
    idealFor: 'Eco-friendly Addis Ababa urban driving without fuel station queues',
    description:
      'A fast-growing all-electric city hatchback across Ethiopia, delivering quiet, clean-energy urban mobility paired with full CRES inspection and battery readiness checks.',
    securityFeatures: [
      'Dual redundant GPS hardware compatible with high-voltage EV electrical systems',
      'Charging readiness & cable handover verification at every pickup',
      '24-hour Addis Ababa monitoring desk & roadside recovery support',
    ],
  },
  {
    id: 'class-toyota-corolla',
    category: 'Sedans',
    name: 'Toyota Corolla Executive',
    examples: 'Midsize Sedan · Corporate & Private Mobility',
    src: IMAGES.fleetCompactSedan,
    alt: 'Silver Toyota Corolla executive sedan parked beneath a covered car shed inside an Addis Ababa compound',
    seats: '5 Seats',
    transmission: 'Automatic',
    idealFor: 'Executive meetings, medium-term corporate placements, and reliable daily transport',
    description:
      'Refined and widely trusted across Ethiopia, providing quiet cabin comfort, air conditioning, and multi-point mechanical verification before every corporate placement.',
    securityFeatures: [
      'Primary ignition-integrated GPS & concealed battery-backed secondary tracker',
      'Standardized Ethiopian contract with verified guarantor clearance',
      'Scheduled workshop servicing tracked by live telemetry mileage',
    ],
  },
  {
    id: 'class-toyota-rav4',
    category: 'SUVs & 4x4',
    name: 'Toyota RAV4',
    examples: 'All-Weather Crossover SUV · City & Regional Travel',
    src: IMAGES.toyotaRav4,
    alt: 'Silver Toyota RAV4 crossover SUV parked under a covered compound car shed in Addis Ababa',
    seats: '5 Seats',
    transmission: 'Automatic · AWD',
    idealFor: 'Corporate teams, NGO staff mobility, and elevated clearance on city & regional roads',
    description:
      'Versatile crossover SUV balancing elevated ground clearance, spacious luggage capacity, and dependable performance across Addis Ababa and approved regional highways.',
    securityFeatures: [
      'Dual redundant GPS architecture with 24-hour operations desk monitoring',
      'Approved regional highway corridor geofencing & tamper alerts',
      'Active Abay Insurance S.C. theft protection framework',
    ],
  },
  {
    id: 'class-land-cruiser-prado',
    category: 'SUVs & 4x4',
    name: 'Toyota Land Cruiser Prado',
    examples: 'Full-Size 4WD · Diplomatic & Upcountry Operations',
    src: IMAGES.landCruiserPrado,
    alt: 'Black Toyota Land Cruiser Prado 4x4 SUV parked under a covered car-shed canopy in a secure compound',
    seats: '7 Seats',
    transmission: 'Automatic · Full 4WD',
    idealFor: 'Diplomatic missions, senior executives, and multi-region NGO field travel',
    description:
      'Flagship high-clearance 4x4 SUV built for senior delegation travel, rugged upcountry routes across Ethiopia, and demanding institutional contracts.',
    securityFeatures: [
      'Hidden auxiliary battery GPS beacon for remote regional corridor continuity',
      'Strict corporate/guarantor verification & standardized Ethiopian contracts',
      '24/7 emergency roadside & recovery dispatch coordination',
    ],
  },
  {
    id: 'class-toyota-hiace',
    category: 'Corporate Vans',
    name: 'Toyota HiAce Executive Van',
    examples: 'Corporate Group Shuttle · Airport & Conference Logistics',
    src: IMAGES.toyotaHiace,
    alt: 'Silver Toyota HiAce commuter van parked under a high car-shed roof inside a walled compound',
    seats: '12 – 15 Seats',
    transmission: 'Manual / Automatic',
    idealFor: 'Delegation transfers, Bole airport shuttles, and conference group logistics',
    description:
      'Spacious multi-passenger shuttle trusted across Ethiopia for visiting delegations, embassy logistics, hotel airport transfers, and corporate staff transport.',
    securityFeatures: [
      'Continuous dual-GPS route tracking & speed/corridor compliance',
      'Verified driver & corporate sponsor onboarding protocol',
      'Transparent 8% owner / 3% renter service fee contracts with official receipts',
    ],
  },
];

