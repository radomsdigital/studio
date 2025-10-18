import Link from 'next/link';
import { Logo } from '../icons/logo';
import { Facebook, Twitter, Instagram, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-secondary to-secondary/80 border-t border-border">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <Logo />
            <p className="text-sm text-muted-foreground mt-4 leading-relaxed">
              Connect with trusted professionals for any task. Quality service, on demand.
            </p>
            <div className="flex gap-4 mt-6">
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* For Customers */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">For Customers</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#booking" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Post a Task
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Browse Services
                </Link>
              </li>
              <li>
                <Link href="/waiting-list" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Join Waiting List
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  How It Works
                </Link>
              </li>
            </ul>
          </div>

          {/* For Providers */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">For Providers</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/provider-signup" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Become a Provider
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Provider Benefits
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Success Stories
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Resources
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Leywok. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Mail className="w-4 h-4" />
            <a href="mailto:support@leywok.com" className="hover:text-primary transition-colors">
              support@leywok.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
