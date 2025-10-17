import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Hero() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-background');

  return (
    <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center text-center text-white overflow-hidden">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          priority
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 p-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-extrabold !leading-tight tracking-tight mb-6 text-shadow">
          Unleash Scalable Growth with Leywok
        </h1>
        <p className="text-lg md:text-xl text-neutral-200 max-w-2xl mx-auto mb-10">
          Robust, secure, and efficient cloud solutions designed for the modern enterprise.
        </p>
        <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
          <Link href="#consultation">Request a Consultation</Link>
        </Button>
      </div>
    </section>
  );
}
