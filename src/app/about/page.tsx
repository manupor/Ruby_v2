import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us | RubyWager',
  description:
    'Learn about RubyWager, a premium sports betting platform designed by experienced gamblers',
}

export default function AboutPage() {
  return (
    <>
      {/* Desktop hero section */}
      <div className="relative hidden h-[600px] w-full overflow-hidden lg:block">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `url('/about.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Content container positioned absolutely over the image */}
          {/* <div className="absolute top-0 left-0 flex h-full w-full items-center">
            <div className="container mx-auto w-full px-4 sm:px-6 lg:px-16">
              <div className="mx-auto text-white sm:mx-0 md:text-left">
                <h1 className="mb-2 text-[18px] font-bold tracking-tight uppercase text-shadow-lg/30 md:text-[20px] lg:text-2xl">
                  MEET THE TEAM BEHIND RUBY WAGER
                </h1>
                <p className="mb-2 text-[30px]/10 font-black tracking-tight md:text-[36px] lg:text-6xl">
                  Built by Bettors, for Bettors.
                </p>
                <h2 className="mb-6 text-[20px] font-bold uppercase text-shadow-lg/30 md:text-1xl">
                  Experience, expertise, and excellence in every bet.
                </h2>
                <button className="blink-strong rounded bg-red-600 px-6 py-3 text-lg font-bold text-white hover:bg-red-700">
                  Join Our Community
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
            src="/about-mobile.png"
            alt="About RubyWager banner"
            className="h-auto w-full"
          />
          {/* Dark overlay for better text visibility */}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Content positioned in center with adjusted styling */}
        {/* <div className="absolute inset-0 flex items-center justify-center">
          <div className="px-8 text-center">
            <h1 className="mb-1 text-[16px] font-medium tracking-wide text-white uppercase">
              MEET THE RUBY TEAM
            </h1>
            <p className="mb-1 text-[26px] leading-tight font-bold tracking-wide text-white">
              Built by Bettors, for Bettors.
            </p>
            <h2 className="mb-6 text-[16px] font-medium tracking-wide text-white uppercase">
              Experience and excellence
            </h2>
            <button className="blink-strong rounded bg-red-600 px-4 py-2 font-bold text-white hover:bg-red-700">
              JOIN NOW
            </button>
          </div>
        </div> */}
      </div>

      {/* Main content - keeping the original content */}
      <div className="container mx-auto max-w-4xl px-4 py-20">
        <h1 className="mb-10 text-3xl font-bold">About Us</h1>

        <section className="mb-16">
          <p className="mb-6">
            At Ruby Wager, we're more than just a sportsbook—we're a trusted,
            high-performance betting platform designed by experienced gamblers,
            for serious players. We understand what bettors need because we are
            bettors ourselves. That's why we've built a sportsbook that offers
            faster payouts, sharper odds, and a VIP-level experience unmatched
            in the industry.
          </p>
        </section>

        <section className="mb-10">
          <h3 className="mb-6 text-xl font-semibold">Who We Are</h3>
          <div className="rounded-lg border border-[#ff5f5f5] p-6">
            <p className="mb-4">
              Ruby Wager was created by a team of professional and experienced
              gamblers who know what it takes to run a top-tier sportsbook. We
              cater to high-level players who demand quick cashouts, fair lines,
              and exceptional service.
            </p>
            <p>
              We are a legally licensed offshore sportsbook based in Costa Rica,
              operating in a jurisdiction where online sports betting is fully
              permitted. We play by the rules—but we also know the game.
            </p>
          </div>
        </section>

        <section className="mb-10">
          <h3 className="mb-6 text-xl font-semibold">Why Bet With Us?</h3>
          <div className="rounded-lg border border-[#ff5f5f5] p-6">
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Same-day payouts Monday through Friday for requests made before
                2 PM EST
              </li>
              <li>Big deposit and reload bonuses to maximize your bankroll</li>
              <li>A VIP experience with higher limits and exclusive perks</li>
              <li>Live betting & sharp odds on all major sports</li>
              <li>
                Secure and reliable platform with a fast, user-friendly
                interface
              </li>
            </ul>
          </div>
        </section>

        <section className="mb-10">
          <h3 className="mb-6 text-xl font-semibold">
            Personalized Customer Service
          </h3>
          <div className="rounded-lg border border-[#ff5f5f5] p-6">
            <p className="mb-4">
              We believe in hands-on, personalized service, which is why we
              offer:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Live chat & email support (8 AM - 9 PM EST, 7 days a week)
              </li>
              <li>
                VIP text messaging via WhatsApp & iMessage for a direct and
                exclusive experience
              </li>
              <li>
                Ultra-professional after-hours support—if you message us late,
                we'll reach out first thing the next morning
              </li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <p className="mb-4">
            At Ruby Wager, we put our players first. Whether you're here for the
            action, the service, or the fastest payouts in the game, we know
            what you want—because we want it too.
          </p>
          <p className="font-semibold">
            Join Ruby Wager today and experience sports betting the way it
            should be!
          </p>
        </section>
      </div>
    </>
  )
}
