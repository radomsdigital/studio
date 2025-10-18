'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const banners = [
  {
    id: 1,
    image: '/home_banner_a.png',
    alt: 'Leywok Banner 1',
  },
  {
    id: 2,
    image: '/home_banner_b.png',
    alt: 'Leywok Banner 2',
  },
  {
    id: 3,
    image: '/home_banner_c.png',
    alt: 'Leywok Banner 3',
  },
];

export function BannerSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % banners.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length);
  }, []);

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index);
  }, []);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  // Pause auto-play on hover
  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  return (
    <section 
      className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden bg-gradient-to-b from-trust-navy/5 to-background"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Slider Container */}
      <div className="relative w-full h-full">
        {banners.map((banner, index) => (
          <div
            key={banner.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <div className="relative w-full h-full">
              <Image
                src={banner.image}
                alt={banner.alt}
                fill
                className="object-cover"
                priority={index === 0}
                quality={90}
              />
              {/* Overlay gradient for better text visibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <Button
        variant="ghost"
        size="icon"
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white backdrop-blur-sm rounded-full w-12 h-12 shadow-lg transition-all hover:scale-110"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-trust-navy" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white backdrop-blur-sm rounded-full w-12 h-12 shadow-lg transition-all hover:scale-110"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-trust-navy" />
      </Button>

      {/* Dot Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentSlide
                ? 'w-12 h-3 bg-trust-blue'
                : 'w-3 h-3 bg-white/60 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Slide Counter */}
      <div className="absolute top-6 right-6 z-20 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
        <span className="text-sm font-semibold text-trust-navy">
          {currentSlide + 1} / {banners.length}
        </span>
      </div>
    </section>
  );
}

