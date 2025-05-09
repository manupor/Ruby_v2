import React from 'react'
import { Metadata } from 'next'
import GamesGridSection from '@/components/grid-cards/GamesGridSection'

export const metadata: Metadata = {
  title: 'Ruby Wager Casino | RubyWager',
  description:
    'Experience the thrill of Ruby Wager Casino with slots, table games, poker and more. Fast payouts and big wins await!',
}

export default function CasinoPage() {
  return (
    <>
      {/* Desktop hero section */}
      <div className="relative hidden h-[600px] w-full overflow-hidden lg:block">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `url('/casino.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Content container positioned absolutely over the image */}
          <div className="absolute top-0 left-0 flex h-full w-full items-center">
            <div className="container mx-auto w-full px-4 sm:px-6 lg:px-16">
              <div className="mx-auto text-white sm:mx-0 md:text-left">
                <h1 className="mb-2 text-[18px] font-bold tracking-tight uppercase text-shadow-lg/30 md:text-[20px] lg:text-2xl">
                  WELCOME TO THE RUBY CASINO
                </h1>
                <p className="mb-2 text-[30px]/10 font-black tracking-tight md:text-[36px] lg:text-6xl">
                  Spin. Win. Repeat.
                </p>
                <h2 className="md:text-1xl mb-6 text-[20px] font-bold uppercase text-shadow-lg/30">
                  Step into a world of elite gaming — slots, tables, and
                  jackpots await.
                </h2>
                <button className="bg-brand blink-strong rounded px-6 py-3 text-lg font-bold text-white">
                  Play Now — Your next big win starts here.
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
            src="/casino-mobile.png"
            alt="Casino banner"
            className="h-auto w-full"
          />
          {/* Dark overlay for better text visibility */}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Content positioned in center with adjusted styling */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="px-8 text-center">
            <h1 className="mb-1 text-[16px] font-medium tracking-wide text-white uppercase">
              WELCOME TO THE RUBY CASINO
            </h1>
            <p className="mb-1 text-[26px] leading-tight font-bold tracking-wide text-white">
              Spin. Win. Repeat.
            </p>
            <h2 className="mb-6 text-[16px] font-medium tracking-wide text-white uppercase">
              Step into a world of elite gaming
            </h2>
            <button className="bg-brand blink-strong rounded px-4 py-2 font-bold text-white">
              PLAY NOW
            </button>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="container mx-auto max-w-4xl px-4 pt-20">
        <h1 className="mb-10 text-3xl font-bold">Ruby Wager Casino</h1>
        <section className="mb-16">
          <p className="mb-4 text-sm sm:text-base">  
            Step into the thrilling world of Ruby Wager Casino, where big wins,
            fast payouts, and top-tier gaming await! Whether you love classic
            table games, high-stakes poker, or spinning the reels on the hottest
            slots, we have something for every player.
          </p>
        </section>
      </div>

      <div className="pb-12">
        <GamesGridSection />
      </div>
    </>
  )
}
