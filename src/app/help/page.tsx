import React from 'react'
import { Metadata } from 'next'
import HeroSection from '@/components/hero/HeroSection'

export const metadata: Metadata = {
  title: 'Help | RubyWager',
  description: 'Customer support and responsible gambling resources.',
}

export default function HelpPage() {
  return (
    <>
      <HeroSection
        title=""
        subtitle={
          <div>
            From Signup to Cashout, <br /> We've Got You
          </div>
        }
        description=""
        buttonText="Contact Support"
        buttonLink="/contact"
        desktopImage="/help.png"
        mobileImage="/help-mobile.jpg"
        buttonVariant="default"
      />

      {/* Body: customer support content */}
      <div className="container mx-auto max-w-4xl px-4 py-20 text-white">
        <section className="mb-10 space-y-6">
          <h2 className="text-3xl font-bold">
            Customer Support That Puts You First!
          </h2>
          <p>
            At Ruby Wager, customer satisfaction isn't just important — it's
            everything. We pride ourselves on delivering fast, friendly, and
            knowledgeable support that keeps your experience smooth from your
            first deposit to your latest big win.
          </p>
          <p>
            Our dedicated support team is available daily from 9:00 AM to 10:00
            PM EST, ready to assist you with anything you need — from account
            setup to payouts and everything in between.
          </p>
          <p>You can reach us through:</p>
          <ul className="list-disc space-y-1 pl-6">
            <li>Live Chat (via WhatsApp)</li>
            <li>
              Email:{' '}
              <a
                href="mailto:cs@rubywager.com"
                className="text-brand underline"
              >
                cs@rubywager.com
              </a>
            </li>
            <li>Text or iMessage (after account creation)</li>
          </ul>
          <p>
            Once your account is created, we take it a step further — following
            up with personalized support through iMessage or text. This direct
            line gives you access to exclusive promotions, fast assistance, and
            VIP-level service tailored just for you.
          </p>
          <p>
            At Ruby Wager, you're never just a number — you're part of the
            action.
          </p>
        </section>
      </div>
    </>
  )
}
