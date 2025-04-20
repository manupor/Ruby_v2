import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Help | RubyWager',
  description: 'Access responsible gaming help and support',
}

export default function HelpPage() {
  return (
    <>
      {/* HERO SECTION WITH TEXT */}
      <div
        className="relative flex h-[400px] w-full items-center justify-start bg-cover bg-center px-6 lg:px-16"
        style={{ backgroundImage: `url('/help.png')` }}
      >
        <div className="text-white max-w-2xl">
          <h1 className="text-5xl font-extrabold leading-tight">
            From Signup to Cashout, We’ve Got You
          </h1>
        </div>
      </div>

      {/* CUSTOMER SUPPORT SECTION */}
      <div className="container mx-auto max-w-4xl px-4 py-20">
        <h2 className="mb-10 text-3xl font-bold">Customer Support That Puts You First !!</h2>
        <section className="mb-10">
          <div className="rounded-lg border border-[#ff5f5f] p-6 space-y-4 text-base text-white">
            <p>
              At Ruby Wager, customer satisfaction isn’t just important — it’s everything. We pride ourselves on delivering
              fast, friendly, and knowledgeable support that keeps your experience smooth from your first deposit to your
              latest big win.
            </p>
            <p>
              Our dedicated support team is available daily from <strong>9:00 AM to 10:00 PM EST</strong>, ready to assist
              you with anything you need — from account setup to payouts and everything in between.
            </p>
            <p>You can reach us through:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Live Chat (via WhatsApp)</li>
              <li>Email: <a href="mailto:cs@rubywager.com" className="text-brand underline">cs@rubywager.com</a></li>
              <li>Text or iMessage (after account creation)</li>
            </ul>
            <p>
              Once your account is created, we take it a step further — following up with personalized support through
              iMessage or text. This direct line gives you access to exclusive promotions, fast assistance, and VIP-level
              service tailored just for you.
            </p>
            <p>
              At Ruby Wager, you’re never just a number — you’re part of the action.
            </p>
          </div>
        </section>
      </div>
    </>
  )
}
