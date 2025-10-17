import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import type { Testimonial } from '@/lib/definitions';

const testimonials: Testimonial[] = [
  {
    logoId: 'logo-quantum',
    companyName: 'QuantumLeap Inc.',
    quote: 'Apex Cloud has been a game-changer for our infrastructure. Their scalability and reliability are unmatched, allowing us to focus on innovation.',
    authorName: 'Jane Doe',
    authorTitle: 'CTO, QuantumLeap Inc.',
  },
  {
    logoId: 'logo-stellar',
    companyName: 'Stellar Solutions',
    quote: 'The migration to Apex was seamless. Their support team is top-notch, and we’ve seen a 30% reduction in our operational costs.',
    authorName: 'John Smith',
    authorTitle: 'Head of Engineering, Stellar Solutions',
  },
  {
    logoId: 'logo-nexus',
    companyName: 'Nexus Corp',
    quote: 'Apex AI Services enabled us to deploy our machine learning models at scale with incredible speed. It’s a powerful platform for any data-driven company.',
    authorName: 'Emily White',
    authorTitle: 'Lead Data Scientist, Nexus Corp',
  },
    {
    logoId: 'logo-zenith',
    companyName: 'Zenith Dynamics',
    quote: 'Security and compliance are critical for us. Apex Cloud provides the robust security features we need to protect our enterprise data confidently.',
    authorName: 'Michael Brown',
    authorTitle: 'CISO, Zenith Dynamics',
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-32 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Trusted by Leading Enterprises
          </h2>
          <p className="text-lg text-muted-foreground mt-4">
            See how businesses like yours are transforming with Apex Cloud.
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
