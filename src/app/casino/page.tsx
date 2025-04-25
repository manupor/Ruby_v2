import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ruby Wager Casino | RubyWager',
  description: 'Add a description here',
}

export default function CasinoPage() {
  return (
    <>
      <div className="relative hidden h-[600px] w-full overflow-hidden lg:block">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `url('/casino.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      </div>
      <div className="container mx-auto max-w-4xl px-4 py-20">
        <h1 className="mb-10 text-3xl font-bold">Ruby Wager Casino</h1>
        <section className="mb-16">
          <p>
            Step into the thrilling world of Ruby Wager Casino, where big wins,
            fast payouts, and top-tier gaming await! Whether you love classic
            table games, high-stakes poker, or spinning the reels on the hottest
            slots, we have something for every player.
          </p>
        </section>
      </div>
    </>
  )
}
