import Link from 'next/link'
import Image from 'next/image'
import {
  Building,
  BookText,
  Newspaper,
  Facebook,
  Instagram,
  Youtube
} from 'lucide-react' // Asegúrate de tener estos íconos disponibles

export default function Footer() {
  return (
    <footer>
      <div className="bg-[#1A1A1A] text-[#F5F5F5]">
        <div className="mx-auto max-w-[1200px] px-4 py-20 lg:px-8">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
            {/* Brand section */}
            <div className="flex flex-col items-start text-left space-y-4">
              <Link href="/">
                <Image
                  src="/Ruby-Wager-Logo.png"
                  alt="RubyWager Logo"
                  width={120}
                  height={30}
                  priority
                />
              </Link>
              <p className="text-sm text-white/70 max-w-[220px]">
                Your trusted platform for online wagering
              </p>
            </div>

            {/* Links section */}
            <div className="flex flex-col items-start text-left space-y-3">
              <div className="flex items-center gap-2 mb-2">
                <BookText className="w-5 h-5 text-brand" />
                <h4 className="font-bold uppercase text-sm tracking-wide">Learn More</h4>
              </div>
              <Link href="/about" className="text-sm text-white/90 hover:text-brand transition">
                About Us
              </Link>
              <Link href="/rules" className="text-sm text-white/90 hover:text-brand transition">
                Sports Rules
              </Link>
              <Link href="/responsible-gaming" className="text-sm text-white/90 hover:text-brand transition">
                Responsible Gaming
              </Link>
              <Link href="/why-ruby" className="text-sm text-white/90 hover:text-brand transition">
                Why Ruby?
              </Link>
              <Link href="/faqs" className="text-sm text-white/90 hover:text-brand transition">
                FAQs
              </Link>
            </div>

            {/* Other section + Socials */}
            <div className="flex flex-col items-start text-left space-y-3">
              <div className="flex items-center gap-2 mb-2">
                <Newspaper className="w-5 h-5 text-brand" />
                <h4 className="font-bold uppercase text-sm tracking-wide">Resources</h4>
              </div>
              <Link href="/banking" className="text-sm text-white/90 hover:text-brand transition">
                Banking
              </Link>
              <Link href="/crypto-tutorial" className="text-sm text-white/90 hover:text-brand transition">
                Crypto Tutorial
              </Link>
              <Link href="/news" className="text-sm text-white/90 hover:text-brand transition">
                News Room
              </Link>

              {/* Social Media */}
              <div className="mt-6">
                <h4 className="font-bold uppercase text-sm tracking-wide mb-2">Follow Us</h4>
                <div className="flex gap-4">
                  <Link href="https://www.instagram.com" target="_blank" aria-label="Instagram">
                    <Instagram className="w-5 h-5 text-white hover:text-brand transition" />
                  </Link>
                  <Link href="https://www.youtube.com" target="_blank" aria-label="YouTube">
                    <Youtube className="w-5 h-5 text-white hover:text-brand transition" />
                  </Link>
                  <Link href="https://www.facebook.com" target="_blank" aria-label="Facebook">
                    <Facebook className="w-5 h-5 text-white hover:text-brand transition" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright section */}
          <div className="mt-10 pt-6 border-t border-white/10 text-center">
            <p className="text-xs text-white/50">
              &copy; {new Date().getFullYear()} RubyWager. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
