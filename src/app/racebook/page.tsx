import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ruby Wager Racebook | RubyWager',
  description: 'Add a description here',
}

export default function RacebookPage() {
  return (
    <main className="container mx-auto max-w-4xl px-4 py-20">
      <h1 className="mb-10 text-3xl font-bold">Ruby Wager Racebook</h1>

      <section className="mb-16">
        <p>
          At Ruby Wager, we bring you the ultimate horse racing betting
          experience, covering tracks from around the world with competitive
          odds, fast payouts, and exciting wagering options. Whether you’re a
          casual bettor or a seasoned handicapper, our racebook gives you access
          to the best races, from Triple Crown events to daily races at top
          tracks.
        </p>
      </section>
    </main>
  )
}
