import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';

export const metadata: Metadata = {
  metadataBase: new URL('https://leywok.com'),
  title: {
    default: "Leywok - Post a Task, Get It Done | Professional Service Marketplace",
    template: "%s | Leywok"
  },
  description: "Connect with skilled professionals for any task. Post your job and receive competitive bids from verified service providers in your area. Home services, repairs, cleaning, and more. Safe, secure, and reliable.",
  keywords: [
    "task marketplace",
    "service providers",
    "home services",
    "professionals",
    "task posting",
    "hire professionals",
    "local services",
    "service bidding",
    "home repairs",
    "cleaning services",
    "handyman services",
    "plumbing services",
    "electrical services",
    "moving services",
    "delivery services",
    "professional services",
    "freelance marketplace",
    "gig economy",
    "task management",
    "service booking",
    "find professionals near me",
    "hire local services",
    "trusted service providers"
  ],
  authors: [{ name: "Leywok", url: "https://leywok.com" }],
  creator: "Leywok",
  publisher: "Leywok",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Leywok - Post a Task, Get It Done | Professional Service Marketplace",
    description: "Connect with skilled professionals for any task. Post your job and receive competitive bids from verified service providers in your area. Safe, secure, and reliable.",
    url: "https://leywok.com",
    siteName: "Leywok",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Leywok - Professional Service Marketplace - Post a Task, Get It Done",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Leywok - Post a Task, Get It Done",
    description: "Connect with skilled professionals for any task. Post your job and receive competitive bids from verified service providers.",
    images: ["/twitter-image"],
    creator: "@leywok",
    site: "@leywok",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
  alternates: {
    canonical: "https://leywok.com",
  },
  category: "Services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/leywok_logo.png" />
        <link rel="apple-touch-icon" href="/leywok_logo.png" />
        <meta name="theme-color" content="#2563eb" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Leywok" />
      </head>
      <body className="font-body antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
