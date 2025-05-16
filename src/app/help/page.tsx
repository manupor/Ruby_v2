import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Help | RubyWager',
  description: 'Customer support and responsible gambling resources.',
}

export default function HelpPage() {
  return (
    <>
      {/* Desktop hero section - with adjusted sizing */}
      <div className="relative hidden h-[400px] w-full overflow-hidden lg:block">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `url('/help.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Content container positioned absolutely over the image */}
          <div className="absolute top-0 left-0 flex h-full w-full items-center">
            <div className="container mx-auto w-full px-4 sm:px-6 lg:px-16">
              <div className="mx-auto max-w-xl text-white sm:mx-0 md:text-left">
                <h1 className="mb-2 text-[30px]/10 font-extrabold tracking-tight uppercase md:text-[36px] lg:text-6xl">
                  From Signup to Cashout, <br /> We've Got You
                </h1>
                <button className="blink-strong mt-6 rounded bg-red-600 px-6 py-3 text-lg font-bold text-white hover:bg-red-700">
                  Contact Support
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile hero section - unchanged */}
      <div className="relative w-full lg:hidden">
        <div className="relative w-full">
          <img
            src="/help-mobile.jpg"
            alt="Help and support banner"
            className="h-auto w-full"
          />

          {/* Content positioned at bottom left */}
          <div className="absolute -bottom-6 flex w-full items-center justify-center">
            <button className="blink-strong rounded bg-red-600 px-4 py-2 font-bold text-white hover:bg-red-700">
              Contact Support
            </button>
          </div>
        </div>
      </div>

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
