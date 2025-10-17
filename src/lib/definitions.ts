import type { LucideIcon } from 'lucide-react';

export interface Service {
  icon: LucideIcon;
  name: string;
  description: string;
  features: string[];
}

export interface Testimonial {
  logoId: string;
  companyName: string;
  quote: string;
  authorName: string;
  authorTitle: string;
}
