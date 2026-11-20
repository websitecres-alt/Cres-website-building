export type PageId =
  | 'home'
  | 'about'
  | 'owner-services'
  | 'renter-services'
  | 'security'
  | 'how-it-works'
  | 'business-model'
  | 'insurance'
  | 'faq'
  | 'contact';

export type ThemeMode = 'light' | 'dark';

export interface NavItem {
  id: PageId;
  label: string;
  description: string;
}

export interface LifecycleStep {
  stepNumber: string;
  id: string;
  title: string;
  shortSummary: string;
  detailedOverview: string;
  ownerRole: string;
  renterRole: string;
  cresAction: string;
  safeguard: string;
}

export interface ServicePillar {
  index: string;
  title: string;
  summary: string;
  details: string;
  keyPoints: string[];
}

export interface FaqItem {
  id: string;
  category: 'General' | 'Vehicle Owners' | 'Renters' | 'Security & GPS' | 'Fees & Insurance';
  question: string;
  answer: string;
}

export interface ComparisonRow {
  dimension: string;
  traditionalBroker: string;
  cresEcosystem: string;
}

export type GalleryCategory = 'Fleet Showcase' | 'Security & GPS' | 'Addis Operations';

export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  title: string;
  category: GalleryCategory;
  location: string;
  caption: string;
  highlight?: boolean;
}

export type FleetClassCategory = 'Sedans' | 'Electric Cars' | 'SUVs & 4x4' | 'Corporate Vans';

export interface FleetClassItem {
  id: string;
  category: FleetClassCategory;
  name: string;
  examples: string;
  src: string;
  alt: string;
  seats: string;
  transmission: string;
  idealFor: string;
  description: string;
  securityFeatures: string[];
}
