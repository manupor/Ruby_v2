import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Why Ruby Wager | RubyWager',
  description:
    'Discover what sets Ruby Wager apart from other sportsbooks - faster payouts, better bonuses, and VIP treatment',
}

export default function WhyRubyPage() {
  return (
    <>
      <div className="relative h-[400px] w-full overflow-hidden">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `url('/rules.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      </div>
      <div className="container mx-auto max-w-4xl px-4 py-20">
        <h1 className="mb-10 text-3xl font-bold">Why Ruby Wager?</h1>

        <section className="mb-16">
          <p>
            At Ruby Wager, we're not just another sportsbook—we're the premier
            destination for serious bettors who demand fast payouts, elite
            rewards, and a VIP experience like no other. Here's what sets us
            apart:
          </p>
        </section>

        <section className="mb-10">
          <h3 className="mb-6 text-xl font-semibold">
            Faster Payouts Than the Competition
          </h3>
          <div className="rounded-lg border border-[#ff5f5f5] p-6">
            <p className="mb-4">
              We know that when you win, you want your money fast. That's why we
              offer:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Same-day payouts Monday through Friday for withdrawal requests
                made before 2 PM Eastern Time.
              </li>
              <li>No hidden fees on crypto withdrawals.</li>
              <li>
                A smooth, hassle-free cash-out process that gets your winnings
                to you quicker than most offshore books.
              </li>
            </ul>
          </div>
        </section>

        <section className="mb-10">
          <h3 className="mb-6 text-xl font-semibold">
            The Best Bonuses in the Industry
          </h3>
          <div className="rounded-lg border border-[#ff5f5f5] p-6">
            <p className="mb-4">
              Our generous bonus structure ensures you get the most out of your
              bets. Whether you're a new player or a long-time VIP, we offer:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>Big deposit bonuses to maximize your bankroll.</li>
              <li>Reload bonuses to keep the action going.</li>
              <li>Exclusive promos and free bets for loyal players.</li>
            </ul>
          </div>
        </section>

        <section className="mb-10">
          <h3 className="mb-6 text-xl font-semibold">
            VIP Treatment Like No Other
          </h3>
          <div className="rounded-lg border border-[#ff5f5f5] p-6">
            <p className="mb-4">
              At Ruby Wager, every player is treated like a high roller. Our VIP
              program offers:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>Higher betting limits for serious players.</li>
              <li>Personalized customer service—no waiting in long queues.</li>
              <li>
                Special VIP-only promotions and bonuses that you won't find
                anywhere else.
              </li>
            </ul>
          </div>
        </section>

        <section className="mb-10">
          <h3 className="mb-6 text-xl font-semibold">
            Safe, Secure, and Fully Legal
          </h3>
          <div className="rounded-lg border border-[#ff5f5f5] p-6">
            <ul className="list-disc space-y-2 pl-6">
              <li>
                We are licensed and legally based in Costa Rica, where online
                sports betting is fully permitted.
              </li>
              <li>
                Advanced encryption protects your funds and personal data.
              </li>
              <li>
                Fair and transparent betting with no shady tactics—just
                straight-up action.
              </li>
            </ul>
          </div>
        </section>

        <section className="mb-10">
          <h3 className="mb-6 text-xl font-semibold">
            Customer Service That Actually Cares
          </h3>
          <div className="rounded-lg border border-[#ff5f5f5] p-6">
            <ul className="list-disc space-y-2 pl-6">
              <li>Live support available daily from 8 AM to 9 PM EST.</li>
              <li>
                Friendly, knowledgeable reps who actually understand sports
                betting.
              </li>
              <li>
                Quick responses to payout requests, bet disputes, and account
                questions.
              </li>
            </ul>
          </div>
        </section>
      </div>
    </>
  )
}
