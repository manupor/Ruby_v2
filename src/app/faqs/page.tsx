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
      <div className="relative hidden w-full overflow-hidden lg:block">
        <img src="/faqs.png" alt="FAQs banner" className="h-auto w-full" />
      </div>

      {/* Mobile hero section */}
      <div className="relative w-full lg:hidden">
        <img
          src="/faqs-mobile.png"
          alt="FAQs banner"
          className="h-auto w-full"
        />
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
