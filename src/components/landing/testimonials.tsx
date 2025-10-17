import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import type { Testimonial } from '@/lib/definitions';

const testimonials: Testimonial[] = [
  {
    logoId: 'logo-quantum',
    companyName: 'QuantumLeap Inc.',
    quote: 'Leywok made it incredibly easy to find a reliable plumber on short notice. The booking process was simple and the service was top-notch!',
    authorName: 'Jane Doe',
    authorTitle: 'Homeowner',
  },
  {
    logoId: 'logo-stellar',
    companyName: 'Stellar Solutions',
    quote: 'As a service provider, Leywok has connected me with so many new clients. The platform is user-friendly and has been great for my business.',
    authorName: 'John Smith',
    authorTitle: 'Electrician, Stellar Electric',
  },
  {
    logoId: 'logo-nexus',
    companyName: 'Nexus Corp',
    quote: 'I needed a last-minute caterer for an event, and Leywok came to the rescue. The quality of service exceeded my expectations.',
    authorName: 'Emily White',
    authorTitle: 'Event Planner, Nexus Events',
  },
    {
    logoId: 'logo-zenith',
    companyName: 'Zenith Dynamics',
    quote: 'The variety of services available is amazing. From cleaning to landscaping, I can find everything I need in one place. Highly recommend!',
    authorName: 'Michael Brown',
    authorTitle: 'Property Manager',
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-32 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            What Our Users Are Saying
          </h2>
          <p className="text-lg text-muted-foreground mt-4">
            Hear from satisfied customers and service providers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => {
            const logo = PlaceHolderImages.find(img => img.id === testimonial.logoId);
            return (
              <Card key={testimonial.companyName} className="flex flex-col justify-between hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 flex flex-col h-full">
                  {logo && (
                    <Image
                      src={logo.imageUrl}
                      alt={`${testimonial.companyName} logo`}
                      width={120}
                      height={40}
                      className="object-contain mb-6 filter grayscale opacity-70"
                      data-ai-hint={logo.imageHint}
                    />
                  )}
                  <blockquote className="text-lg text-foreground mb-6 flex-grow">
                    “{testimonial.quote}”
                  </blockquote>
                  <div>
                    <p className="font-semibold">{testimonial.authorName}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.authorTitle}</p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
