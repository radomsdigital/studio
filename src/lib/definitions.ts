import type { LucideIcon } from 'lucide-react';

export interface Product {
  icon: LucideIcon;
  name: string;
  description: string;
  benefits: string[];
  price: string;
}

export interface Testimonial {
  logoId: string;
  companyName: string;
  quote: string;
  authorName: string;
  authorTitle: string;
}
