import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer>
      <div className="bg-foreground">
        <div className="container mx-auto px-4 py-20 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* Brand section */}
            <div className="space-y-2">
              <Link href="/">
                <Image
                  src="/Ruby-Wager-Logo.png"
                  alt="RubyWager Logo"
                  width={92}
                  height={20}
                  priority
                />
              </Link>
              <p className="text-background mt-5 w-[180px] font-mono text-sm leading-5">
                Your trusted platform for online wagering
              </p>
            </div>

            {/* Links section */}
            <nav className="flex flex-col space-y-2">
              <Link
                href="/about"
                className="text-background hover:text-brand text-sm transition-colors"
              >
                About Us
              </Link>
              <Link
                href="/rules"
                className="text-background hover:text-brand text-sm transition-colors"
              >
                Sports Rules
              </Link>
              <Link
                href="/responsible-gaming"
                className="text-background hover:text-brand text-sm transition-colors"
              >
                Responsible Gaming
              </Link>
              <Link
                href="/why-ruby"
                className="text-background hover:text-brand text-sm transition-colors"
              >
                Why Ruby?
              </Link>
              <Link
                href="/faqs"
                className="text-background hover:text-brand text-sm transition-colors"
              >
                FAQS
              </Link>
            </nav>

            {/* section */}
            <div className="flex flex-col space-y-2">
              <Link
                href="/banking"
                className="text-background hover:text-brand text-sm transition-colors"
              >
                Banking
              </Link>
              <Link
                href="/crypto-tutorial"
                className="text-background hover:text-brand text-sm transition-colors"
              >
                Crypto Tutorial
              </Link>
              <Link
                href="/news"
                className="text-background hover:text-brand text-sm transition-colors"
              >
                News Room
              </Link>
            </div>
          </div>

          {/* Copyright section */}
          <div className="mt-8 pt-4 text-center">
            <p className="text-background text-xs">
              &copy; {new Date().getFullYear()} RubyWager. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
