import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Rules | RubyWager',
  description: 'Official rules and guidelines for RubyWager platform',
}

export default function RulesPage() {
  return (
    <>
      {/* Desktop hero section */}
      <div className="relative hidden h-[600px] w-full overflow-hidden lg:block">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `url('/sports-rules.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Content container positioned absolutely over the image */}
          {/* <div className="absolute top-0 left-0 flex h-full w-full items-center">
            <div className="container mx-auto w-full px-4 sm:px-6 lg:px-16">
              <div className="mx-auto text-white sm:mx-0 md:text-left">
                <h1 className="mb-2 text-[18px] font-bold tracking-tight uppercase text-shadow-lg md:text-[20px] lg:text-2xl">
                  RUBY WAGER PLATFORM RULES
                </h1>
                <p className="mb-2 text-[30px]/10 font-black tracking-tight md:text-[36px] lg:text-6xl text-shadow-lg">
                  Fair Play. Clear Terms.
                </p>
                <h2 className="mb-6 text-[20px] font-bold uppercase text-shadow-lg md:text-1xl">
                  Guidelines for a safe and enjoyable betting experience.
                </h2>
                <button className="blink-strong rounded bg-red-600 px-6 py-3 text-lg font-bold text-white hover:bg-red-700">
                  Start Betting Responsibly
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
            src="/sports-rules-mobile.png"
            alt="Rules banner"
            className="h-auto w-full"
          />
          {/* Dark overlay for better text visibility */}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Content positioned in center with adjusted styling */}
        {/* <div className="absolute inset-0 flex items-center justify-center">
          <div className="px-8 text-center">
            <h1 className="mb-1 text-[16px] font-medium tracking-wide text-white uppercase">
              PLATFORM RULES
            </h1>
            <p className="mb-1 text-[26px] leading-tight font-bold tracking-wide text-white">
              Fair Play. Clear Terms.
            </p>
            <h2 className="mb-6 text-[16px] font-medium tracking-wide text-white uppercase">
              Safe betting guidelines
            </h2>
            <button className="blink-strong rounded bg-red-600 px-4 py-2 font-bold text-white hover:bg-red-700">
              BET RESPONSIBLY
            </button>
          </div>
        </div> */}
      </div>

      {/* Main content - keeping the original content */}
      <div className="container mx-auto max-w-4xl px-4 py-20">
        <h1 className="mb-10 text-3xl font-bold">Rules</h1>
        <section className="mb-16">
          <p>
            At Ruby Wager, we are committed to providing a safe, secure, and
            responsible gaming environment for all of our players. While sports
            betting is an exciting form of entertainment, we recognize the
            importance of playing responsibly and maintaining control over your
            gambling activities.
          </p>
        </section>
        <h2 className="text-brand mb-6 text-2xl font-bold">
          Responsible Gambling Guidelines
        </h2>
        <section className="mb-10">
          <h3 className="mb-6 text-xl font-semibold">
            Responsible Gambling Guidelines
          </h3>
          <div className="rounded-lg border border-[#ff5f5f5] p-6">
            <p className="mb-4">
              We encourage all players to follow these responsible gaming
              practices:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Set a Budget – Never bet more than you can afford to lose.
              </li>
              <li>
                Manage Your Time – Keep track of how much time you spend
                gambling.
              </li>
              <li>
                Avoid Chasing Losses – Losing is part of the game; don't try to
                recover losses with bigger bets.
              </li>
              <li>
                Keep It Fun – Gambling should be a form of entertainment, not a
                financial solution.
              </li>
              <li>
                Know When to Take a Break – If betting stops being fun, consider
                stepping away for a while.
              </li>
            </ul>
          </div>
        </section>

        <section className="mb-10">
          <h3 className="mb-6 text-xl font-semibold">
            Self-Exclusion & Account Limits
          </h3>
          <div className="rounded-lg border border-[#ff5f5f5] p-6">
            <p className="mb-4">
              If you feel that gambling is becoming a problem, we offer the
              following options:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Temporary Account Suspension – Take a break from betting for a
                set period.
              </li>
              <li>
                Self-Exclusion – Restrict your access to your account for an
                extended time.
              </li>
              <li>
                Deposit Limits – Set a maximum deposit limit to help control
                spending.
              </li>
            </ul>
            <p>
              To request any of these options, contact our Customer Support Team
              via live chat, email, WhatsApp, or iMessage.
            </p>
          </div>
        </section>

        <section className="mb-10">
          <h3 className="mb-6 text-xl font-semibold">
            Recognizing Problem Gambling
          </h3>
          <div className="rounded-lg border border-[#ff5f5f5] p-6">
            <p className="mb-4">
              If you or someone you know is struggling with gambling addiction,
              look out for these warning signs:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>Betting more than intended or beyond financial means.</li>
              <li>
                Feeling stressed, anxious, or guilty about gambling losses.
              </li>
              <li>Hiding gambling activity from family or friends.</li>
              <li>
                Borrowing money to gamble or struggling financially due to
                betting.
              </li>
            </ul>
          </div>
        </section>

        <section className="mb-10">
          <h3 className="mb-6 text-xl font-semibold">Need Help?</h3>
          <div className="rounded-lg border border-[#ff5f5f5] p-6">
            <p className="mb-4">
              If you believe you have a gambling problem, we encourage you to
              seek professional assistance. The following organizations offer
              confidential support and resources:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Gamblers Anonymous (GA) –{' '}
                <a
                  className="text-brand-dark underline-offset-4 hover:underline"
                  href="http://www.gamblersanonymous.org"
                  target="_blank"
                >
                  www.gamblersanonymous.org
                </a>
              </li>
              <li>
                National Council on Problem Gambling (NCPG) –{' '}
                <a
                  className="text-brand-dark underline-offset-4 hover:underline"
                  href="http://www.ncpgambling.org"
                  target="_blank"
                >
                  www.ncpgambling.org
                </a>
              </li>
              <li>
                BeGambleAware –{' '}
                <a
                  className="text-brand-dark underline-offset-4 hover:underline"
                  href="http://www.begambleaware.org"
                  target="_blank"
                >
                  www.begambleaware.org
                </a>
              </li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <p>
            At Ruby Wager, we take responsible gaming seriously. If you ever
            need assistance or guidance, our support team is here to help. Play
            smart, stay in control, and enjoy the game!
          </p>
        </section>

        <h2 className="text-brand mb-6 text-2xl font-bold">
          Sports Betting Rules
        </h2>

        <section className="mb-10">
          <h3 className="mb-6 text-xl font-semibold">Sports Betting Rules</h3>
          <div className="rounded-lg border border-[#ff5f5f5] p-6">
            <p className="mb-4">
              At Ruby Wager, we strive to provide a fair and transparent betting
              environment for all players. Below are the key sports betting
              rules you need to know to ensure a smooth and enjoyable
              experience. These rules apply to all bets placed at Ruby Wager,
              and by placing a bet, you agree to adhere to these terms.
            </p>
          </div>
        </section>
      </div>
    </>
  )
}
