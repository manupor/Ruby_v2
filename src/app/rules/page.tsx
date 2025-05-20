'use client'

import HeroSection from '@/components/hero/HeroSection'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Rules | RubyWager',
  description: 'Official rules and guidelines for RubyWager platform',
}

export default function RulesPage() {
  return (
    <>
      <HeroSection
        title=""
        subtitle=""
        description=""
        buttonText=""
        buttonLink="/contact"
        desktopImage="/sports-rules.png"
        mobileImage="/sports-rules-mobile.png"
        buttonVariant="default"
      />

      <div className="container mx-auto max-w-4xl px-4 py-20">
        <h1 className="mb-10 text-3xl font-bold">Rules</h1>

        {/* SPORTS WAGERING RULES SECTION */}
        <h2 className="text-brand mb-6 text-2xl font-bold">
          Ruby Wager – Sports Wagering Rules & General House Rules
        </h2>

        <section className="mb-10 space-y-10">
          {/* 1. Wager Finality */}
          <div className="flex gap-4">
            <div dangerouslySetInnerHTML={{ __html: `
              <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='currentColor'>
                <path d='M12 2C6.49 2 2 6.48 2 12s4.49 10 10 10 10-4.48 10-10S17.51 2 12 2zm-1 15l-5-5 1.41-1.41L11 14.17l7.59-7.59L20 8l-9 9z' />
              </svg>` }} />
            <div>
              <h3 className="text-xl font-semibold mb-2">1. Wager Finality</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>All wagers are final once submitted and confirmed through the official Ruby Wager platform.</li>
                <li>Double-check your plays before submitting. No edits or cancellations allowed after confirmation.</li>
                <li>We are not responsible for user errors or misinterpretation of lines.</li>
              </ul>
            </div>
          </div>

          {/* 2. Online Wagers Only */}
          <div className="flex gap-4">
            <div dangerouslySetInnerHTML={{ __html: `
              <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='currentColor'>
                <path d='M20 4H4v16h16V4zM6 6h12v12H6V6z' />
              </svg>` }} />
            <div>
              <h3 className="text-xl font-semibold mb-2">2. Online Wagers Only</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Only wagers placed and confirmed via the platform will be honored.</li>
                <li>Screenshots or verbal agreements are not valid.</li>
                <li>Ensure your wager is logged and confirmed before the event begins.</li>
              </ul>
            </div>
          </div>

          {/* 3. Wager Limits */}
          <div className="flex gap-4">
            <div dangerouslySetInnerHTML={{ __html: `
              <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='currentColor'>
                <path d='M12 2l-5.5 9h11zM2 20h20v2H2z' />
              </svg>` }} />
            <div>
              <h3 className="text-xl font-semibold mb-2">3. Wager Limits</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>We may set or modify wager limits at any time.</li>
                <li>Larger bets may be subject to review or adjusted odds.</li>
              </ul>
            </div>
          </div>

          {/* 4. Grading & Payouts */}
          <div className="flex gap-4">
            <div dangerouslySetInnerHTML={{ __html: `
              <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='currentColor'>
                <path d='M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 
                5.42 4.42 3 7.5 3c1.74 0 3.41 1.01 4.5 
                2.09C13.09 4.01 14.76 3 16.5 
                3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 
                11.54L12 21.35z'/>
              </svg>` }} />
            <div>
              <h3 className="text-xl font-semibold mb-2">4. Grading & Payouts</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>All bets are graded based on official results.</li>
                <li>Payouts are processed promptly after results are final.</li>
                <li>We do not recognize post-event stat changes or overturned results.</li>
              </ul>
            </div>
          </div>

          {/* 5. Game Cancellations & Postponements */}
          <div className="flex gap-4">
            <div dangerouslySetInnerHTML={{ __html: `
              <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='currentColor'>
                <path d='M19 3h-1V1h-2v2H8V1H6v2H5c-1.1 0-2 
                .9-2 2v15c0 1.1.9 2 2 2h14c1.1 
                0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 
                17H5V9h14v11zm0-13H5V5h14v2z' />
              </svg>` }} />
            <div>
              <h3 className="text-xl font-semibold mb-2">5. Game Cancellations & Postponements</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Games must be played on the scheduled date.</li>
                <li>If not completed within 24 hours, wagers will be voided unless noted.</li>
              </ul>
            </div>
          </div>
        </section>

        <p className="mt-10">
          By placing a wager, you acknowledge that you have read and agreed to all rules above. Ruby Wager reserves the right to update these rules at any time to ensure fairness and compliance with industry standards.
        </p>
      </div>
    </>
  )
}
