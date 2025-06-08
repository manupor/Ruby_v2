import { BookText, Facebook, Instagram, Newspaper, Youtube } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer>
      {/* Main footer section */}
      <div className="bg-[#1A1A1A] text-[#F5F5F5]">
        <div className="mx-auto max-w-[1200px] px-4 py-16 lg:px-8">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
            {/* Brand section */}
            <div className="flex flex-col items-center text-center">
              <Link href="/">
                <Image
                  src="/footer-logo.svg"
                  alt="RubyWager Logo"
                  width={120}
                  height={30}
                  priority
                />
              </Link>
              <p className="mt-4 max-w-[220px] text-sm text-white/70">
                Your trusted platform for online wagering
              </p>
            </div>

            {/* Links section */}
            <div className="flex flex-col items-center space-y-3 text-center">
              <div className="mb-2 flex items-center gap-2">
                <BookText className="text-brand h-5 w-5" />
                <h4 className="text-sm font-bold tracking-wide uppercase">
                  Learn More
                </h4>
              </div>
              <Link
                href="/about"
                className="hover:text-brand text-sm text-white/90 transition"
              >
                About Us
              </Link>
              <Link
                href="/rules"
                className="hover:text-brand text-sm text-white/90 transition"
              >
                Sports Rules
              </Link>

              {/* Responsible Gaming hidden */}
              {false && (
                <Link
                  href="/responsible-gaming"
                  className="hover:text-brand text-sm text-white/90 transition"
                >
                  Responsible Gaming
                </Link>
              )}

              <Link
                href="/terms-conditions"
                className="hover:text-brand text-sm text-white/90 transition"
              >
                Terms & Conditions
              </Link>
              <Link
                href="/why-ruby"
                className="hover:text-brand text-sm text-white/90 transition"
              >
                Why Ruby?
              </Link>
              <Link
                href="/faqs"
                className="hover:text-brand text-sm text-white/90 transition"
              >
                FAQs
              </Link>
            </div>

            {/* Other section + Socials */}
            <div className="flex flex-col items-center space-y-3 text-center">
              <div className="mb-2 flex items-center gap-2">
                <Newspaper className="text-brand h-5 w-5" />
                <h4 className="text-sm font-bold tracking-wide uppercase">
                  Resources
                </h4>
              </div>
              <Link
                href="/banking"
                className="hover:text-brand text-sm text-white/90 transition"
              >
                Banking
              </Link>
              <Link
                href="/crypto-tutorial"
                className="hover:text-brand text-sm text-white/90 transition"
              >
                Crypto Tutorial
              </Link>
              <Link
                href="/sports-blog"
                className="hover:text-brand text-sm text-white/90 transition"
              >
                Sports Blog
              </Link>

              {/* Social Media */}
              <div className="mt-6">
                <h4 className="mb-2 text-sm font-bold tracking-wide uppercase">
                  Follow Us
                </h4>
                <div className="flex justify-center gap-4">
                  <Link
                    href="https://www.instagram.com/betwithruby"
                    target="_blank"
                    aria-label="Instagram"
                  >
                    <Instagram className="hover:text-brand h-5 w-5 text-white transition" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright section */}
          <div className="mt-10 border-t border-white/10 pt-6 text-center">
            <p className="text-xs text-white/50">
              &copy; {new Date().getFullYear()} RubyWager. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
