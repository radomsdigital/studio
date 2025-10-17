
export interface Service {
  name: string;
  description: string;
  features: string[];
}

export const services: Pick<Service, 'name' | 'description' | 'features'>[] = [
  {
    name: 'Home Services',
    description: 'Cleaning, repairs, and maintenance for your home.',
    features: ['Vetted professionals', 'Easy online booking', 'Satisfaction guaranteed'],
  },
  {
    name: 'Skilled Trades',
    description: 'Expert plumbers, electricians, and carpenters.',
    features: ['Licensed & insured', 'Upfront pricing', 'Emergency services available'],
  },
  {
    name: 'Creative & Design',
    description: 'Graphic design, web development, and content creation.',
    features: ['Portfolio reviews', 'Project-based pricing', 'Collaborative workflow'],
  },
  {
    name: 'Professional Services',
    description: 'Consulting, marketing, and business support.',
    features: ['Expert consultations', 'Customized strategies', 'Measurable results'],
  },
];


export interface Testimonial {
  logoId: string;
  companyName: string;
  quote: string;
  authorName: string;
  authorTitle: string;
}
