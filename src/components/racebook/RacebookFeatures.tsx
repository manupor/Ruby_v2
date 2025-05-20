'use client'

import { useAuth } from '@/context/AuthContext'
import Image from 'next/image'

const RacebookFeatures = () => {
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
          RUBY WAGER RACEBOOK
        </h2>
        <p className="text-lg leading-relaxed text-gray-300">
          At Ruby Wager, we bring you the ultimate horse racing betting
          experience, covering tracks from around the world with competitive
          odds, fast payouts, and exciting wagering options. Whether you're a
          casual bettor or a seasoned handicapper, our racebook gives you access
          to the best races, from Triple Crown events to daily races at top
          tracks.
        </p>
      </div>

      {/* Four feature columns */}
      <div className="mx-auto mb-16 grid max-w-6xl grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
        {/* Column 1 */}
        <div className="text-center">
          <div className="mb-4 flex justify-center">
            <Image
              src="/racebook/racebook-01.svg"
              alt="Daily Global Action"
              width={48}
              height={48}
              className="text-[#FF003D]"
            />
          </div>
          <h3 className="mb-3 text-xl font-bold">Daily Global Action</h3>
          <p className="text-gray-400">
            Wager on premier horse and greyhound races from top tracks around
            the world. From sunrise to sunset, the action never stops.
          </p>
        </div>

        {/* Column 2 */}
        <div className="text-center">
          <div className="mb-4 flex justify-center">
            <Image
              src="/racebook/racebook-02.svg"
              alt="Live Odds & Instant Updates"
              width={48}
              height={48}
              className="text-[#FF003D]"
            />
          </div>
          <h3 className="mb-3 text-xl font-bold">
            Live Odds & Instant Updates
          </h3>
          <p className="text-gray-400">
            Stay ahead with real-time odds and race info direct from the track.
            No delays, no guesswork—just sharp, live data.
          </p>
        </div>

        {/* Column 3 */}
        <div className="text-center">
          <div className="mb-4 flex justify-center">
            <Image
              src="/racebook/racebook-03.svg"
              alt="Diverse Betting Options"
              width={48}
              height={48}
              className="text-[#FF003D]"
            />
          </div>
          <h3 className="mb-3 text-xl font-bold">Diverse Betting Options</h3>
          <p className="text-gray-400">
            Go beyond win/place/show with exactas, trifectas, daily doubles, and
            more. Whether you're a casual fan or a sharp, we've got your angle.
          </p>
        </div>

        {/* Column 4 */}
        <div className="text-center">
          <div className="mb-4 flex justify-center">
            <Image
              src="/racebook/racebook-04.svg"
              alt="Earn 6% Track Rebates"
              width={48}
              height={48}
              className="text-[#FF003D]"
            />
          </div>
          <h3 className="mb-3 text-xl font-bold">Earn 6% Track Rebates</h3>
          <p className="text-gray-400">
            Get rewarded every time you play with up to 6% cash back on
            qualified track bets—automatically credited, no strings attached.
          </p>
        </div>
      </div>

      {/* Call to action */}
      <div className="mb-4 text-center">
        <h3 className="mb-4 text-3xl font-bold">Ready to Bet the Tracks?</h3>
        <p className="mb-8 text-lg text-gray-300">
          Join Ruby Wager today and experience premium horse racing action.
        </p>
        <button
          className="rounded-full bg-[#FF003D] px-10 py-4 text-xl font-bold text-white transition-colors hover:bg-[#E00034]"
          onClick={handleJoinNowClick}
        >
          JOIN NOW
        </button>
      </div>
    </section>
  )
}

export default RacebookFeatures
