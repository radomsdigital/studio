import type { Product } from '@/lib/definitions';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Cpu, Database, Network, BrainCircuit, CheckCircle2 } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const products: Product[] = [
  {
    icon: Cpu,
    name: 'Apex Compute',
    description: 'Scalable virtual servers for any workload.',
    benefits: ['On-demand scaling', '99.99% uptime SLA', 'Pay-as-you-go pricing'],
    price: 'From $20/mo',
  },
  {
    icon: Database,
    name: 'Apex Storage',
    description: 'Durable, secure, and scalable object storage.',
    benefits: ['Infinite scalability', 'Data encryption at rest', 'Global content delivery'],
    price: 'From $0.02/GB',
  },
  {
    icon: Network,
    name: 'Apex Networking',
    description: 'Isolated, high-performance private networks.',
    benefits: ['VPC isolation', 'Low-latency connectivity', 'Advanced security rules'],
    price: 'From $5/VPC',
  },
  {
    icon: BrainCircuit,
    name: 'Apex AI Services',
    description: 'Integrate powerful AI and machine learning models.',
    benefits: ['Pre-trained models', 'Custom model training', 'Scalable inference APIs'],
    price: 'Usage-based',
  },
];

export function Products() {
  return (
    <section id="products" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Our Top Products
          </h2>
          <p className="text-lg text-muted-foreground mt-4">
            Powerful and reliable cloud solutions to fuel your enterprise growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <Card key={product.name} className="flex flex-col hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="flex-row items-center gap-4 pb-4">
                <product.icon className="w-10 h-10 text-primary" />
                <CardTitle className="text-xl">{product.name}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col">
                <p className="text-muted-foreground mb-4 flex-grow">{product.description}</p>
                <ul className="space-y-2 text-sm mb-6">
                  {product.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
                <Badge variant="secondary" className="self-start text-sm bg-accent/20 text-accent-foreground border-accent/30">
                  {product.price}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
