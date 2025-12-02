'use client';

import React from 'react'
import HeroSection from '@/components/hero/HeroSection'

// Move the effect to a client component
function RedLightEffect() {
  return (
    <>
      <div className="absolute right-0 top-0 hidden h-full w-[100px] overflow-hidden lg:block">
        <div className="h-full w-full bg-gradient-to-l from-red-500/10 to-transparent">
          <div 
            className="h-full w-[300px] bg-gradient-to-r from-transparent via-red-500/5 to-transparent"
            style={{
              animation: 'sweep 15s ease-in-out infinite',
            }}
          />
        </div>
      </div>
      <style jsx global>{`
        @keyframes sweep {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(-66.67%); }
        }
      `}</style>
    </>
  );
}

export default function BankingPage() {
  const handleJoinNow = () => {
    // Add your logic here
  }

  return (
    <>
      <div className="relative">
        <HeroSection
          title="SAME DAY PAYOUTS"
          subtitle="Fast & Secure Payments"
          description=""
          buttonText="JOIN NOW"
          buttonLink="/join"
          desktopImage="/banking.jpg"
          mobileImage="/banking-mobile.png"
          buttonVariant="brand"
          hideTextOnMobile={false}
          className="pt-0 h-auto min-h-[300px] md:min-h-[400px]"
        />
        <RedLightEffect />
      </div>

      {/* Main content */}
      <div className="container mx-auto max-w-5xl px-4 py-20">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold text-white">
            Ruby Wager Banking Update
          </h1>
          <h2 className="text-2xl font-semibold text-[#c19652]">
            Payout Policy
          </h2>
        </div>

        <section className="mb-12">
          <p className="text-lg leading-relaxed text-gray-300">
            At Ruby Wager, we pride ourselves on delivering fast, secure, and 
            reliable payouts to all our players. Please review our updated banking 
            terms below:
          </p>
        </section>

        {/* Crypto Payouts Section */}
        <section className="mb-10">
          <h3 className="mb-6 flex items-center text-2xl font-bold text-white">
            <span className="mr-3 text-3xl">💰</span>
            Crypto Payouts
          </h3>
          <div className="rounded-xl border border-red-500/30 bg-gradient-to-br from-gray-900/50 to-gray-800/30 p-8 shadow-lg backdrop-blur-sm">
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="mr-3 mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">
                  ✓
                </span>
                <div>
                  <h4 className="mb-1 font-semibold text-white">Weekly Limit:</h4>
                  <p className="text-gray-300">
                    Players may receive up to <strong className="text-[#c19652]">$20,000 USD per week</strong> via crypto payouts.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <span className="mr-3 mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">
                  ✓
                </span>
                <div>
                  <h4 className="mb-1 font-semibold text-white">Transaction Structure:</h4>
                  <p className="text-gray-300">
                    This limit may be fulfilled in one or several transactions per week.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <span className="mr-3 mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">
                  ✓
                </span>
                <div>
                  <h4 className="mb-2 font-semibold text-white">Schedule:</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center">
                      <span className="mr-2 text-red-400">•</span>
                      Processed <strong>Monday through Saturday</strong>.
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-red-400">•</span>
                      Requests submitted <strong>before 2:00 PM Eastern Time (ET)</strong> are eligible for same-day processing.
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-red-400">•</span>
                      Requests made <strong>after 2:00 PM ET</strong> will be processed the next business day.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start">
                <span className="mr-3 mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-500 text-xs font-bold text-white">
                  $
                </span>
                <div>
                  <h4 className="mb-1 font-semibold text-white">Fees:</h4>
                  <p className="text-green-400 font-semibold">
                    Crypto payouts are FREE of charge.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Wallet Payouts Section */}
        <section className="mb-10">
          <h3 className="mb-6 flex items-center text-2xl font-bold text-white">
            <span className="mr-3 text-3xl">💳</span>
            Wallet Payouts
          </h3>
          <div className="rounded-xl border border-red-500/30 bg-gradient-to-br from-gray-900/50 to-gray-800/30 p-8 shadow-lg backdrop-blur-sm">
            <div className="mb-6 flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-gradient-to-r from-purple-500 to-purple-600 px-4 py-2 text-sm font-semibold text-white shadow-md">
                Zelle
              </span>
              <span className="rounded-full bg-gradient-to-r from-blue-500 to-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-md">
                Venmo
              </span>
              <span className="rounded-full bg-gradient-to-r from-green-500 to-green-600 px-4 py-2 text-sm font-semibold text-white shadow-md">
                Cashapp
              </span>
              <span className="rounded-full bg-gradient-to-r from-blue-600 to-blue-700 px-4 py-2 text-sm font-semibold text-white shadow-md">
                Paypal
              </span>
              <span className="rounded-full bg-gradient-to-r from-gray-700 to-gray-800 px-4 py-2 text-sm font-semibold text-white shadow-md">
                Applepay
              </span>
            </div>

            <div className="space-y-4">
              <div className="flex items-start">
                <span className="mr-3 mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">
                  ✓
                </span>
                <div>
                  <h4 className="mb-1 font-semibold text-white">Frequency:</h4>
                  <p className="text-gray-300">
                    <strong>One wallet payout per week</strong>.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <span className="mr-3 mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">
                  ✓
                </span>
                <div>
                  <h4 className="mb-1 font-semibold text-white">Maximum Limit:</h4>
                  <p className="text-gray-300">
                    Up to <strong className="text-[#c19652]">$5,000 USD</strong>.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <span className="mr-3 mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">
                  ✓
                </span>
                <div>
                  <h4 className="mb-1 font-semibold text-white">Schedule:</h4>
                  <p className="text-gray-300">
                    Same-day processing if requested before 2:00 PM ET (otherwise processed next business day).
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <span className="mr-3 mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-yellow-500 text-xs font-bold text-white">
                  %
                </span>
                <div>
                  <h4 className="mb-1 font-semibold text-white">Fees:</h4>
                  <p className="text-yellow-400 font-semibold">
                    A 3% processing fee applies to wallet payouts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Free Payout Section */}
        <section className="mb-10">
          <div className="rounded-xl border border-green-500/50 bg-gradient-to-br from-green-900/20 to-green-800/10 p-8 shadow-lg backdrop-blur-sm">
            <h3 className="mb-4 flex items-center text-xl font-bold text-white">
              <span className="mr-3 text-2xl">🎁</span>
              Free Payout Entitlement
            </h3>
            <p className="text-lg text-gray-300">
              Every player is entitled to <strong className="text-green-400">one free payout per month</strong>, 
              regardless of method.
            </p>
          </div>
        </section>

        {/* Commitment Section */}
        <section className="mt-16">
          <div className="rounded-xl border border-[#c19652]/50 bg-gradient-to-br from-[#c19652]/10 to-red-900/10 p-10 text-center shadow-xl backdrop-blur-sm">
            <h3 className="mb-4 flex items-center justify-center text-2xl font-bold text-white">
              <span className="mr-3 text-3xl">💎</span>
              Our Commitment
            </h3>
            <p className="text-lg leading-relaxed text-gray-300">
              Ruby Wager continues to lead the industry with <strong className="text-[#c19652]">secure same-day crypto payouts</strong>, 
              transparent limits, and VIP-level service designed to make your gaming experience smooth and rewarding.
            </p>
          </div>
        </section>
      </div>
    </>
  )
}
