import { services } from '@/lib/definitions';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Home, Wrench, Palette, BrainCircuit } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Services() {
  const serviceIcons: { [key: string]: string } = {
    'Home Services': 'service-home',
    'Skilled Trades': 'service-trades',
    'Creative & Design': 'service-design',
    'Professional Services': 'service-professional',
  };

  return (
    <section id="services" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Explore a World of Services
          </h2>
          <p className="text-lg text-muted-foreground mt-4">
            From household chores to professional consultations, find the right expert for any task.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => {
            const image = PlaceHolderImages.find(img => img.id === serviceIcons[service.name]);
            return (
              <Card key={service.name} className="flex flex-col overflow-hidden text-center items-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="p-6">
                  {image && (
                     <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mb-4 mx-auto p-4">
                        <Image
                            src={image.imageUrl}
                            alt={service.name}
                            width={64}
                            height={64}
                            className="object-contain"
                            data-ai-hint={image.imageHint}
                        />
                     </div>
                  )}
                  <CardTitle className="text-xl">{service.name}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col p-6 pt-0">
                  <p className="text-muted-foreground mb-4 flex-grow">{service.description}</p>
                   <Badge variant="secondary" className="self-center">
                    Starting from $25
                  </Badge>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
