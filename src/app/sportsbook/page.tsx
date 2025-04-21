'use client'

import React from 'react'
import { Metadata } from 'next'
import { Football, Wallet, Lightning, Gift } from '@phosphor-icons/react'

export const metadata: Metadata = {
  title: 'Sportsbook | RubyWager',
  description: 'Experience premium sports betting with top odds, fast payouts, and 24/7 support.',
}

export default function SportsbookPage() {
  return (
    <>
      {/* HERO SECTION */}
      <div className="relative hidden h-[400px] w-full overflow-hidden lg:block">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `url('/rules.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      </div>

      {/* MAIN CONTENT */}
      <div className="container mx-auto max-w-5xl px-4 py-20">
        <h1 className="mb-6 text-4xl font-extrabold text-center uppercase tracking-wide">
          Bet Smarter with Ruby Wager
        </h1>
        <p className="text-center text-lg text-muted-foreground max-w-3xl mx-auto mb-12">
          Discover the ultimate sportsbook platform designed for winners. Whether you're into football, basketball, tennis, or niche markets, we offer elite-level odds, blazing-fast payouts, and exclusive promotions tailored just for you.
        </p>

        {/* FEATURE SECTION */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Feature 1 */}
          <div className="text-center px-6">
            <Football size={42} className="mx-auto mb-4 text-brand" />
            <h3 className="text-xl font-bold mb-2">Top Sports & Markets</h3>
            <p className="text-muted-foreground">
              Bet on all major leagues worldwide – NFL, NBA, UFC, and more – with live and pre-match options.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="text-center px-6">
            <Wallet size={42} className="mx-auto mb-4 text-brand" />
            <h3 className="text-xl font-bold mb-2">Fast & Secure Payouts</h3>
            <p className="text-muted-foreground">
              Enjoy ultra-fast withdrawals through crypto or fiat with world-class security.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="text-center px-6">
            <Gift size={42} className="mx-auto mb-4 text-brand" />
            <h3 className="text-xl font-bold mb-2">Exclusive Bonuses</h3>
            <p className="text-muted-foreground">
              Get rewarded with cashback, boosted odds, free bets, and seasonal promotions.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="text-center px-6">
            <Lightning size={42} className="mx-auto mb-4 text-brand" />
            <h3 className="text-xl font-bold mb-2">Real-Time Action</h3>
            <p className="text-muted-foreground">
              Experience in-play betting with live stats, instant updates, and cashout options.
            </p>
          </div>
        </div>

        {/* CTA SECTION */}
        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get in the Game?</h2>
          <p className="text-lg text-muted-foreground mb-6">
            Sign up in under 60 seconds and claim your welcome bonus today.
          </p>
          <Link href="/join">
            <button className="bg-brand hover:bg-brand-dark text-white font-bold uppercase px-8 py-4 rounded-xl text-lg shadow-lg transition">
              Join Now
            </button>
          </Link>
        </div>
      </div>
    </>
  )
}
