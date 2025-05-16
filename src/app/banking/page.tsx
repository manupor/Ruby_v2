import React from 'react'
import { Metadata } from 'next'
import HeroSection from '@/components/hero/HeroSection'

export const metadata: Metadata = {
  title: 'Banking & Payments | RubyWager',
  description:
    'Learn about deposit and withdrawal options, payment methods, and transaction policies at Ruby Wager',
}

export default function BankingPage() {
  return (
    <>
      <HeroSection
        title="Bank on Your Terms"
        subtitle="Crypto, cards, or cashouts"
        description="Fund your play and get paid fast. No limits, no delays, no hassle."
        buttonText="GET STARTED"
        buttonLink="/join"
        desktopImage="/banking.png"
        mobileImage="/banking-mobile.png"
        buttonVariant="brand"
      />

      {/* Main content */}
      <div className="container mx-auto max-w-4xl px-4 py-20">
        <h1 className="mb-10 text-3xl font-bold">
          Banking & Payments at Ruby Wager
        </h1>
        <section className="mb-16">
          <p>
            At Ruby Wager, we&apos;ve made deposits and withdrawals fast,
            flexible, and secure. Here&apos;s everything you need to know about
            the payment methods we support and how we process transactions.
          </p>
        </section>
        <section className="mb-10">
          <h3 className="mb-6 text-xl font-semibold">
            Accepted Payment Methods
          </h3>
          <div className="rounded-lg border border-[#ff5f5f5] p-6">
            <ul className="mb-6 list-disc space-y-2 pl-6">
              <li>Zelle</li>
              <li>Venmo</li>
              <li>PayPal</li>
              <li>CashApp</li>
              <li>Cryptocurrency (BTC, USDT, USDC - ERC20, LTC)</li>
            </ul>
            <p>
              <strong>Note:</strong> Deposit instructions are provided directly
              by your agent. Always confirm your payment details before sending
              funds.
            </p>
          </div>
        </section>
        <section className="mb-10">
          <h3 className="mb-6 text-xl font-semibold">Deposit Policy</h3>
          <div className="rounded-lg border border-[#ff5f5f5] p-6">
            <p>
              There is no hard cap on deposits - whether you&apos;re getting
              started or looking to go big, we&apos;ve got you covered. Contact
              your agent for any custom limits or high-roller arrangements.
            </p>
          </div>
        </section>
        <section className="mb-10">
          <h3 className="mb-6 text-xl font-semibold">
            Payouts & Withdrawal Policy
          </h3>
          <div className="rounded-lg border border-[#ff5f5f5] p-6">
            <p className="mb-4">
              Withdrawals are processed Monday to Friday. To qualify for
              same-day payout, requests must be submitted before 2 PM EST.
            </p>
            <p className="mb-4">
              Players can withdraw up to $10,000 per day. For larger
              withdrawals, please contact us directly to coordinate a custom
              arrangement.
            </p>
            <p className="mb-4">
              We offer 2 free payouts per week. After that, all payout methods
              except crypto (which remains free) are subject to a $50 processing
              fee per transaction.
            </p>
            <p>
              <strong>Note:</strong> All withdrawals are subject to verification
              and compliance review. We prioritize fast and fair processing for
              every player.
            </p>
          </div>
        </section>
        <section className="mb-10">
          <h3 className="mb-6 text-xl font-semibold">Important Reminders</h3>
          <div className="rounded-lg border border-[#ff5f5f5] p-6">
            <ul className="mb-6 list-disc space-y-2 pl-6">
              <li>
                Always include the correct memo or notes when sending payments
                (your agent will guide you).
              </li>
              <li>
                For crypto deposits, make sure to use the correct blockchain
                (e.g., ERC20 for USDT/USDC).
              </li>
              <li>
                A screenshot or proof of payment may be required to confirm your
                transaction.
              </li>
            </ul>
          </div>
        </section>
      </div>
    </>
  )
}
