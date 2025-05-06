import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'FAQs | RubyWager',
  description: 'Frequently asked questions about RubyWager platform',
}

export default function FAQsPage() {
  return (
    <>
      {/* Desktop hero section */}
      <div className="relative hidden h-[600px] w-full overflow-hidden lg:block">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `url('/faqs.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Content container positioned absolutely over the image */}
          {/* <div className="absolute top-0 left-0 flex h-full w-full items-center">
            <div className="container mx-auto w-full px-4 sm:px-6 lg:px-16">
              <div className="mx-auto text-white sm:mx-0 md:text-left">
                <h1 className="mb-2 text-[18px] font-bold tracking-tight uppercase text-shadow-lg md:text-[20px] lg:text-2xl">
                  GOT QUESTIONS? WE'VE GOT ANSWERS
                </h1>
                <p className="mb-2 text-[30px]/10 font-black tracking-tight md:text-[36px] lg:text-6xl text-shadow-lg">
                  Frequently Asked Questions.
                </p>
                <h2 className="mb-6 text-[20px] font-bold uppercase text-shadow-lg md:text-1xl">
                  Everything you need to know about Ruby Wager.
                </h2>
                <button className="blink-strong rounded bg-red-600 px-6 py-3 text-lg font-bold text-white hover:bg-red-700">
                  Contact Support
                </button>
              </div>
            </div>
          </div> */}
        </div>
      </div>

      {/* Mobile hero section */}
      <div className="relative w-full lg:hidden">
        <div className="relative w-full">
          <img
            src="/faqs-mobile.png"
            alt="FAQs banner"
            className="h-auto w-full"
          />
          {/* Dark overlay for better text visibility */}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Content positioned in center with adjusted styling */}
        {/* <div className="absolute inset-0 flex items-center justify-center">
          <div className="px-8 text-center">
            <h1 className="mb-1 text-[16px] font-medium tracking-wide text-white uppercase">
              GOT QUESTIONS?
            </h1>
            <p className="mb-1 text-[26px] leading-tight font-bold tracking-wide text-white">
              Frequently Asked Questions.
            </p>
            <h2 className="mb-6 text-[16px] font-medium tracking-wide text-white uppercase">
              We've got the answers
            </h2>
            <button className="blink-strong rounded bg-red-600 px-4 py-2 font-bold text-white hover:bg-red-700">
              CONTACT US
            </button>
          </div>
        </div> */}
      </div>

      {/* Main content - keeping the original content */}
      <div className="container mx-auto max-w-4xl px-4 py-20">
        <h1 className="mb-10 text-3xl font-bold">FAQs</h1>

        <section className="mb-10">
          <h2 className="text-brand mb-6 text-2xl font-bold">
            General Questions
          </h2>

          <div className="mb-8">
            <h3 className="mb-4 text-xl font-semibold">Is Ruby Wager legal?</h3>
            <div className="rounded-lg border border-[#ff5f5f5] p-6">
              <p>
                Yes! Ruby Wager is fully licensed and legally operates out of
                Costa Rica, where online sports betting is permitted. It is your
                responsibility to check the gambling laws in your own
                jurisdiction before playing.
              </p>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="mb-4 text-xl font-semibold">
              Who can bet at Ruby Wager?
            </h3>
            <div className="rounded-lg border border-[#ff5f5f5] p-6">
              <p>
                Anyone 18 years or older (or the legal gambling age in their
                jurisdiction) can place bets with Ruby Wager, provided online
                betting is allowed in their location. We do not accept players
                from restricted regions where online gambling is prohibited.
              </p>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="mb-4 text-xl font-semibold">
              What sports and events can I bet on?
            </h3>
            <div className="rounded-lg border border-[#ff5f5f5] p-6">
              <p className="mb-4">
                Ruby Wager offers a wide range of sports and betting options,
                including:
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Major leagues: NFL, NBA, MLB, NHL, UFC, and more</li>
                <li>
                  International sports: Soccer, tennis, rugby, cricket, and more
                </li>
                <li>
                  Live betting: Wager on games in real-time with dynamic odds
                </li>
                <li>
                  Esports & entertainment: Bet on gaming tournaments and special
                  events
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
