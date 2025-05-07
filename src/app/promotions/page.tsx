import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Promotions & Bonuses | RubyWager',
  description:
    'Discover exclusive promotions, deposit bonuses, and special offers to maximize your bankroll at Ruby Wager',
}

export default function PromotionsPage() {
  return (
    <>
      {/* Desktop hero section */}
      <div className="relative hidden h-[600px] w-full overflow-hidden lg:block">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `url('/promotions.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Content container positioned absolutely over the image */}
          {/* <div className="absolute top-0 left-0 flex h-full w-full items-center">
            <div className="container mx-auto w-full px-4 sm:px-6 lg:px-16">
              <div className="mx-auto text-white sm:mx-0 md:text-left">
                <h1 className="mb-2 text-[18px] font-bold tracking-tight uppercase text-shadow-lg/30 md:text-[20px] lg:text-2xl">
                  EXCLUSIVE OFFERS
                </h1>
                <p className="mb-2 text-[30px]/10 font-black tracking-tight md:text-[36px] lg:text-6xl">
                  Boost Your Bankroll.
                </p>
                <h2 className="mb-6 text-[20px] font-bold uppercase text-shadow-lg/30 md:text-2xl lg:text-4xl">
                  Deposit bonuses, reload offers, and more.
                </h2>
                <button className="blink-strong rounded bg-red-600 px-6 py-3 text-lg font-bold text-white hover:bg-red-700">
                  Claim Your Bonus
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
            src="/promotions-mobile.png"
            alt="Promotions and bonuses banner"
            className="h-auto w-full"
          />
          {/* Dark overlay for better text visibility */}
          {/* <div className="absolute inset-0 bg-black/50"></div> */}
        </div>

        {/* Content positioned in center with adjusted styling */}
        {/* <div className="absolute inset-0 flex items-center justify-center">
          <div className="px-8 text-center">
            <h1 className="mb-1 text-[16px] font-medium tracking-wide text-white uppercase">
              EXCLUSIVE OFFERS
            </h1>
            <p className="mb-1 text-[26px] leading-tight font-bold tracking-wide text-white">
              Boost Your Bankroll.
            </p>
            <h2 className="mb-6 text-[16px] font-medium tracking-wide text-white uppercase">
              Bonuses & promotions
            </h2>
            <button className="blink-strong rounded bg-red-600 px-4 py-2 font-bold text-white hover:bg-red-700">
              CLAIM NOW
            </button>
          </div>
        </div> */}
      </div>

      {/* Main content */}
      <div className="container mx-auto max-w-4xl px-4 py-20">
        <h1 className="mb-10 text-3xl font-bold">Promotions & Bonuses</h1>
        <section className="mb-16">
          <p>
            At Ruby Wager, we believe that bonuses are a fantastic way to
            maximize your bankroll and increase your chances of winning. We
            offer several exciting bonuses designed to give you more value for
            your deposits. Whether you're a new player or a returning customer,
            there's something for everyone to take advantage of!
          </p>
        </section>
      </div>
    </>
  )
}
