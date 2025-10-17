import type { Service } from '@/lib/definitions';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Home, Wrench, Palette, BrainCircuit, CheckCircle2 } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const services: Service[] = [
  {
    icon: Home,
    name: 'Home Services',
    description: 'Cleaning, repairs, and maintenance for your home.',
    features: ['Vetted professionals', 'Easy online booking', 'Satisfaction guaranteed'],
  },
  {
    icon: Wrench,
    name: 'Skilled Trades',
    description: 'Expert plumbers, electricians, and carpenters.',
    features: ['Licensed & insured', 'Upfront pricing', 'Emergency services available'],
  },
  {
    icon: Palette,
    name: 'Creative & Design',
    description: 'Graphic design, web development, and content creation.',
    features: ['Portfolio reviews', 'Project-based pricing', 'Collaborative workflow'],
  },
  {
    icon: BrainCircuit,
    name: 'Professional Services',
    description: 'Consulting, marketing, and business support.',
    features: ['Expert consultations', 'Customized strategies', 'Measurable results'],
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Explore Our Services
          </h2>
          <p className="text-lg text-muted-foreground mt-4">
            Find the right professional for any task, big or small.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <Card key={service.name} className="flex flex-col hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="flex-row items-center gap-4 pb-4">
                <service.icon className="w-10 h-10 text-primary" />
                <CardTitle className="text-xl">{service.name}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col">
                <p className="text-muted-foreground mb-4 flex-grow">{service.description}</p>
                <ul className="space-y-2 text-sm mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Badge variant="secondary" className="self-start text-sm bg-accent/20 text-accent-foreground border-accent/30">
                  Book Now
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
