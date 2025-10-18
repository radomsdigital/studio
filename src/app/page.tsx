import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { BannerSlider } from '@/components/landing/banner-slider';
import { Hero } from '@/components/landing/hero';
import { TrustStats } from '@/components/landing/trust-stats';
import { Services } from '@/components/landing/services';
import { Testimonials } from '@/components/landing/testimonials';
import { ServiceRequestForm } from '@/components/landing/service-request-form';
import { HowItWorks } from '@/components/landing/how-it-works';
import { CTASection } from '@/components/landing/cta-section';
import { FAQ } from '@/components/landing/faq';
import { AnimatedSection } from '@/components/shared/animated-section';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Home - Professional Service Marketplace",
  description: "Find trusted professionals for any task. Post a job, receive competitive bids, and hire the best service provider for your needs. Home services, repairs, cleaning, and more.",
  openGraph: {
    title: "Leywok - Post a Task, Get It Done",
    description: "Connect with skilled professionals for any task. Safe, secure, and reliable service marketplace.",
    images: ['/opengraph-image'],
  },
};

// JSON-LD Structured Data for SEO
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://leywok.com/#organization',
      name: 'Leywok',
      url: 'https://leywok.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://leywok.com/leywok_logo.png',
        width: 120,
        height: 80,
      },
      sameAs: [
        'https://www.facebook.com/leywok',
        'https://www.twitter.com/leywok',
        'https://www.linkedin.com/company/leywok',
        'https://www.instagram.com/leywok',
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+1-555-123-4567',
        contactType: 'Customer Service',
        areaServed: 'US',
        availableLanguage: ['English'],
      },
    },
    {
      '@type': 'WebSite',
      '@id': 'https://leywok.com/#website',
      url: 'https://leywok.com',
      name: 'Leywok',
      description: 'Professional service marketplace connecting customers with skilled service providers',
      publisher: {
        '@id': 'https://leywok.com/#organization',
      },
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: 'https://leywok.com/search?q={search_term_string}',
        },
        'query-input': 'required name=search_term_string',
      },
    },
    {
      '@type': 'Service',
      '@id': 'https://leywok.com/#service',
      serviceType: 'Service Marketplace',
      provider: {
        '@id': 'https://leywok.com/#organization',
      },
      areaServed: {
        '@type': 'Country',
        name: 'United States',
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Home & Maintenance',
              description: 'Professional home maintenance and repair services',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Cleaning & Organization',
              description: 'Expert cleaning and organization services',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Moving & Delivery',
              description: 'Reliable moving and delivery services',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Creative & Design',
              description: 'Professional creative and design services',
            },
          },
        ],
      },
    },
    {
      '@type': 'WebPage',
      '@id': 'https://leywok.com/#webpage',
      url: 'https://leywok.com',
      name: 'Leywok - Post a Task, Get It Done',
      isPartOf: {
        '@id': 'https://leywok.com/#website',
      },
      about: {
        '@id': 'https://leywok.com/#organization',
      },
      description: 'Connect with skilled professionals for any task. Post your job and receive competitive bids from verified service providers.',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How does Leywok work?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Post your task, receive bids from qualified professionals, choose the best provider, and get your task completed. It\'s that simple!',
          },
        },
        {
          '@type': 'Question',
          name: 'Is it free to post a task?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes! Posting tasks on Leywok is completely free. You only pay when you hire a service provider.',
          },
        },
        {
          '@type': 'Question',
          name: 'Are service providers verified?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, all service providers go through our verification process, including background checks and skill assessments.',
          },
        },
      ],
    },
  ],
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <Header />
      <main className="flex-1">
        {/* Banner Slider */}
        <BannerSlider />
        
        {/* Hero Section */}
        <Hero />
        
        {/* Trust Stats */}
        <AnimatedSection>
          <TrustStats />
        </AnimatedSection>

        {/* Services Section */}
        <AnimatedSection>
          <Services />
        </AnimatedSection>

        {/* How It Works Section */}
        <AnimatedSection>
          <HowItWorks />
        </AnimatedSection>
        
        {/* CTA Section */}
        <AnimatedSection>
          <CTASection />
        </AnimatedSection>

        {/* Testimonials Section */}
        <AnimatedSection>
          <Testimonials />
        </AnimatedSection>

        {/* Task Submission Form */}
        <AnimatedSection>
          <section id="booking" className="py-20 md:py-32 bg-gradient-to-b from-secondary/50 to-background">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center mb-12">
                <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
                  Post Your Task
                </h2>
                <p className="text-lg md:text-xl text-muted-foreground">
                  Describe the task you need done, and get bids from qualified providers.
                </p>
              </div>
              <ServiceRequestForm />
            </div>
          </section>
        </AnimatedSection>

        {/* FAQ Section */}
        <AnimatedSection>
          <FAQ />
        </AnimatedSection>

        {/* Waiting List CTA */}
        <AnimatedSection>
          <section className="py-20 md:py-32 bg-gradient-to-b from-background to-trust-navy/5">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-5xl font-bold text-trust-navy mb-6">
                  Not Ready to Post Yet?
                </h2>
                <p className="text-lg md:text-xl text-trust-slate mb-8 max-w-2xl mx-auto">
                  Join our waiting list to be the first to know when we launch in your city. Get early access and exclusive perks!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" asChild className="bg-trust-gradient text-white hover:opacity-90 font-semibold">
                    <Link href="/waiting-list">
                      Join Waiting List
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild className="border-trust-blue text-trust-blue hover:bg-trust-blue hover:text-white font-semibold">
                    <Link href="#services">
                      Learn More
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
}
