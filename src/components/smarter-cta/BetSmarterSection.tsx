'use client'

import { useAuth } from '@/context/AuthContext'
import { CreditCard, Football, Gift, Lightning } from '@phosphor-icons/react'

const BetSmarterSection = () => {
  const { openRegister } = useAuth()

  const handleJoinNowClick = (e: React.MouseEvent) => {
    e.preventDefault()
    openRegister()
  }

  return (
    <section className="bg-black px-4 py-16 text-white">
      {/* Main heading */}
      <div className="mx-auto mb-8 max-w-4xl text-center">
        <h2 className="mb-6 text-4xl font-bold md:text-5xl">
          BET SMARTER WITH RUBY WAGER
        </h2>
        <p className="text-lg leading-relaxed text-gray-300">
          Discover the ultimate sportsbook platform designed for winners.
          Whether you're into football, basketball, tennis, or niche markets, we
          offer elite-level odds, blazing-fast payouts, and exclusive promotions
          tailored just for you.
        </p>
      </div>

      {/* Four feature columns */}
      <div className="mx-auto mb-16 grid max-w-6xl grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
        {/* Column 1 */}
        <div className="text-center">
          <div className="mb-4 flex justify-center">
            <Football size={48} weight="fill" className="text-[#FF003D]" />
          </div>
          <h3 className="mb-3 text-xl font-bold">Top Sports & Markets</h3>
          <p className="text-gray-400">
            Bet on all major leagues worldwide – NFL, NBA, UFC, and more – with
            live and pre-match options.
          </p>
        </div>

        {/* Column 2 */}
        <div className="text-center">
          <div className="mb-4 flex justify-center">
            <CreditCard size={48} weight="fill" className="text-[#FF003D]" />
          </div>
          <h3 className="mb-3 text-xl font-bold">Fast & Secure Payouts</h3>
          <p className="text-gray-400">
            Enjoy ultra-fast withdrawals through crypto or fiat with world-class
            security.
          </p>
        </div>

        {/* Column 3 */}
        <div className="text-center">
          <div className="mb-4 flex justify-center">
            <Gift size={48} weight="fill" className="text-[#FF003D]" />
          </div>
          <h3 className="mb-3 text-xl font-bold">Exclusive Bonuses</h3>
          <p className="text-gray-400">
            Get rewarded with cashback, boosted odds, free bets, and seasonal
            promotions.
          </p>
        </div>

        {/* Column 4 */}
        <div className="text-center">
          <div className="mb-4 flex justify-center">
            <Lightning size={48} weight="fill" className="text-[#FF003D]" />
          </div>
          <h3 className="mb-3 text-xl font-bold">Real-Time Action</h3>
          <p className="text-gray-400">
            Experience in-play betting with live stats, instant updates, and
            cashout options.
          </p>
        </div>
      </div>

      {/* Call to action */}
      <div className="mb-4 text-center">
        <h3 className="mb-4 text-3xl font-bold">Ready to Get in the Game?</h3>
        <p className="mb-8 text-lg text-gray-300">
          Sign up in under 60 seconds and claim your welcome bonus today.
        </p>
        <button
          className="rounded-full bg-[#FF003D] px-10 py-4 text-xl font-bold text-white transition-colors hover:bg-[#E00034] blink-mobile"
          onClick={handleJoinNowClick}
        >
          JOIN NOW
        </button>
      </div>
    </section>
  )
}

export default BetSmarterSection
