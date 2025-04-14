import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sportsbook | RubyWager',
  description: 'Add a description here',
}

export default function SportsbookPage() {
  return (
    <>
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
      <div className="container mx-auto max-w-4xl px-4 py-20">
        <h1 className="mb-10 text-3xl font-bold">Sportsbook</h1>

        <section className="mb-16">
          <p>
            At Ruby Wager, we bring you the ultimate sports betting experience
            with fast payouts, high limits, and unbeatable customer service.
            Whether you’re a seasoned bettor or just getting started, our wide
            range of sports, competitive odds, and personalized bonuses ensure
            that you have everything you need for an exciting and rewarding
            betting journey.
          </p>
        </section>
      </div>
    </>
  )
}
