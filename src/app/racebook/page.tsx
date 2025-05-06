import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ruby Wager Racebook | RubyWager',
  description:
    'Experience the ultimate horse racing betting platform with Ruby Wager Racebook. Bet on tracks worldwide with competitive odds and fast payouts.',
}

export default function RacebookPage() {
  return (
    <>
      {/* Desktop hero section */}
      <div className="relative hidden h-[600px] w-full overflow-hidden lg:block">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `url('/racebook.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Content container positioned absolutely over the image */}
          <div className="absolute top-0 left-0 flex h-full w-full items-center">
            <div className="container mx-auto w-full px-4 sm:px-6 lg:px-16">
              <div className="mx-auto text-white sm:mx-0 md:text-left">
                <h1 className="mb-2 text-[18px] font-bold tracking-tight uppercase text-shadow-lg/30 md:text-[20px] lg:text-2xl">
                  BET THE TRACK WITH RUBYWAGER
                </h1>
                <p className="mb-2 text-[30px]/10 font-black tracking-tight md:text-[36px] lg:text-6xl">
                  Fast. Fierce. Unstoppable.
                </p>
                <h2 className="md:text-1xl mb-6 text-[20px] font-bold uppercase text-shadow-lg/30">
                  From local derbies to international classics <br /> saddle up
                  and ride the odds.
                </h2>
                <button className="blink-strong rounded bg-red-600 px-6 py-3 text-lg font-bold text-white hover:bg-red-700">
                  Place Your Bets Now — The race is on.
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile hero section */}
      <div className="relative w-full lg:hidden">
        <div className="relative w-full">
          <img
            src="/racebook-mobile.png"
            alt="Racebook banner"
            className="h-auto w-full"
          />
          {/* Dark overlay for better text visibility */}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Content positioned in center with adjusted styling */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="px-8 text-center">
            <h1 className="mb-1 text-[16px] font-medium tracking-wide text-white uppercase">
              BET THE TRACK WITH RUBYWAGER
            </h1>
            <p className="mb-1 text-[26px] leading-tight font-bold tracking-wide text-white">
              Fast. Fierce. Unstoppable.
            </p>
            <h2 className="mb-6 text-[16px] font-medium tracking-wide text-white uppercase">
              Saddle up and ride the odds
            </h2>
            <button className="blink-strong rounded bg-red-600 px-4 py-2 font-bold text-white hover:bg-red-700">
              PLACE YOUR BETS
            </button>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="container mx-auto max-w-4xl px-4 py-20">
        <h1 className="mb-10 text-3xl font-bold">Ruby Wager Racebook</h1>

        <section className="mb-16">
          <p>
            At Ruby Wager, we bring you the ultimate horse racing betting
            experience, covering tracks from around the world with competitive
            odds, fast payouts, and exciting wagering options. Whether you're a
            casual bettor or a seasoned handicapper, our racebook gives you
            access to the best races, from Triple Crown events to daily races at
            top tracks.
          </p>
        </section>
      </div>
    </>
  )
}
