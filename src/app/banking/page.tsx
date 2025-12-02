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
          mobileImage="/banking-mobile.jpg"
          mobileObjectPosition="90% center"
          buttonVariant="brand"
          hideTextOnMobile={false}
          mobileCenterButton
          mobileButtonClass="relative z-30"
          className="pt-0 h-auto min-h-[300px] md:min-h-[400px]"
        />
        <RedLightEffect />
      </div>

      {/* Main content */}
      <div className="container mx-auto max-w-4xl px-4 py-6 md:py-12">
        <div className="mb-6 text-center">
          <div className="mb-3 flex justify-center">
            <svg className="h-12 w-12 text-white md:h-16 md:w-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h1 className="mb-3 text-xl font-bold text-white md:mb-4 md:text-3xl">
            Ruby Wager Deposits
          </h1>
        </div>
        <section className="mb-4 md:mb-6">
          <p className="text-white">
            At Ruby Wager, we pride ourselves on making deposits simple, secure, and convenient for all our players.
          </p>
        </section>

        <section className="mb-6">
          <div className="mb-4 flex items-center">
            <svg className="mr-3 h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
            </svg>
            <h3 className="text-xl font-semibold text-white">
              Wallet Payments
            </h3>
          </div>
          <div className="rounded-lg border border-[#ff5f5f5] p-6">
            <p className="mb-4 text-white">We accept several wallet methods for your convenience:</p>
            <ul className="mb-6 list-disc space-y-2 pl-6 text-white">
              <li>PayPal</li>
              <li>Zelle</li>
              <li>Cash App</li>
              <li>Venmo</li>
              <li>Apple Pay</li>
            </ul>
            <p className="mb-2 text-white"><strong>Deposit limits:</strong></p>
            <ul className="mb-6 list-disc space-y-2 pl-6 text-white">
              <li>Minimum: $100</li>
              <li>Maximum: $5,000</li>
            </ul>
            <p className="text-white">
              👉 Just ask your agent for the most up-to-date deposit information before sending funds.
            </p>
          </div>
        </section>

        <section className="mb-6">
          <div className="mb-4 flex items-center">
            <svg className="mr-3 h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="text-xl font-semibold text-white">
              Crypto Deposits
            </h3>
          </div>
          <div className="rounded-lg border border-[#ff5f5f5] p-6">
            <p className="mb-4 text-white">We also accept multiple cryptocurrencies for faster, higher-limit transactions:</p>
            <p className="mb-2 text-white"><strong>Accepted coins:</strong></p>
            <ul className="mb-6 list-disc space-y-2 pl-6 text-white">
              <li>USDT (ERC-20 / TRC-20)</li>
              <li>Ethereum (ETH)</li>
              <li>Litecoin (LTC)</li>
              <li>Bitcoin (BTC)</li>
            </ul>
            <p className="mb-2 text-white"><strong>Crypto limits:</strong></p>
            <ul className="mb-6 list-disc space-y-2 pl-6 text-white">
              <li>Minimum: $10</li>
              <li>Maximum: $250,000</li>
            </ul>
            <p className="text-white">
              <strong>Crypto deposits are the fastest and most flexible way to fund your Ruby Wager account</strong>
            </p>
          </div>
        </section>

        <div className="my-8 border-t border-gray-700"></div>

        <div className="mb-6 text-center">
          <div className="mb-3 flex justify-center">
            <svg className="h-12 w-12 text-white md:h-16 md:w-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <h1 className="mb-3 text-xl font-bold text-white md:mb-4 md:text-3xl">
            Ruby Wager – Updated Withdrawal Policy
          </h1>
        </div>
        <section className="mb-4 md:mb-6">
          <p className="text-white">
            At Ruby Wager, our mission is to deliver fast, flexible, and reliable payouts with options and limits that most sportsbooks in the industry simply cannot match. Our banking system is built for players who expect premium service, transparency, and elite-level support.
          </p>
        </section>

        <section className="mb-6">
          <div className="mb-4 flex items-center">
            <svg className="mr-3 h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3" />
            </svg>
            <h3 className="text-xl font-semibold text-white">
              Weekly Withdrawal Limits
            </h3>
          </div>
          <div className="rounded-lg border border-[#ff5f5f5] p-6">
            <p className="mb-4 text-white"><strong>App-Based Payouts (Zelle, Venmo, Cash App, etc.)</strong></p>
            <ul className="mb-6 list-disc space-y-2 pl-6 text-white">
              <li>Players may withdraw up to <strong>$5,000 per week</strong> using supported digital payment apps.</li>
              <li>These payouts include a standard <strong>3% processing fee</strong>.</li>
              <li>Available Monday through Saturday with multiple requests allowed within the weekly limit.</li>
            </ul>
            <p className="mb-4 text-white"><strong>Cryptocurrency Payouts</strong></p>
            <ul className="mb-6 list-disc space-y-2 pl-6 text-white">
              <li>Players may withdraw up to <strong>$10,000 per week</strong> via cryptocurrency (BTC, ETH, USDT, etc.).</li>
              <li>Crypto payouts are always <strong>100% free</strong> — no processing charges.</li>
              <li>Crypto is the fastest, most seamless method for higher limits and VIP action.</li>
            </ul>
          </div>
        </section>

        <section className="mb-6">
          <div className="mb-4 flex items-center">
            <svg className="mr-3 h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <h3 className="text-xl font-semibold text-white">
              Flexible Withdrawal Structure
            </h3>
          </div>
          <div className="rounded-lg border border-[#ff5f5f5] p-6">
            <ul className="mb-6 list-disc space-y-2 pl-6 text-white">
              <li>Players may break their weekly limit into multiple withdrawal requests, Monday through Saturday.</li>
              <li>Ruby Wager provides <strong>one (1) free payout per week</strong> on any method.</li>
              <li>App payouts beyond the weekly free payout carry the standard 3% fee.</li>
              <li>All crypto payouts remain free, even beyond the first withdrawal.</li>
            </ul>
          </div>
        </section>

        <section className="mb-6">
          <div className="mb-4 flex items-center">
            <svg className="mr-3 h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
            <h3 className="text-xl font-semibold text-white">
              Why Ruby Wager Stands Above the Industry
            </h3>
          </div>
          <div className="rounded-lg border border-[#ff5f5f5] p-6">
            <ul className="mb-6 list-disc space-y-2 pl-6 text-white">
              <li>Higher limits than most offshore sportsbooks.</li>
              <li>Multiple withdrawal channels, including rare digital app options.</li>
              <li>Always-free crypto payouts, encouraging faster and larger player cash-outs.</li>
              <li>VIP-level flexibility, letting players withdraw on their terms.</li>
              <li>Consistent, reliable processing, even during peak seasons.</li>
            </ul>
          </div>
        </section>

        <section className="mb-6">
          <div className="rounded-lg border border-[#ff5f5f5] p-6">
            <p className="text-white">
              <strong>Most sportsbooks restrict players to one small payout per week with strict limitations. Ruby Wager does the opposite — we empower our players.</strong>
            </p>
          </div>
        </section>
      </div>
    </>
  )
}
