'use client'

import { useAuth } from '@/context/AuthContext'
import Image from 'next/image'

const GamesGridSection = () => {
  const { openRegister } = useAuth()

  const handlePlayNowClick = (e: React.MouseEvent) => {
    e.preventDefault()
    openRegister()
  }

  const games = [
    { id: 1, image: '/game-cards/01.png', title: 'CHILLI FIESTA' },
    { id: 2, image: '/game-cards/02.png', title: 'PHO SHO' },
    { id: 3, image: '/game-cards/03.png', title: 'CHARMS & TREASURES' },
    { id: 4, image: '/game-cards/04.png', title: 'FIRE & STEEL' },
    { id: 5, image: '/game-cards/05.png', title: 'DWARVEN GEMS MEGAWAYS' },
    {
      id: 6,
      image: '/game-cards/06.png',
      title: 'LEGEND OF CLEOPATRA MEGAWAYS',
    },
    {
      id: 7,
      image: '/game-cards/07.png',
      title: 'DWARVEN GEMS MEGAWAYS',
    },
    {
      id: 8,
      image: '/game-cards/08.png',
      title: 'BUFFALO POWER 2 HOLD AND WIN',
    },
    {
      id: 9,
      image: '/game-cards/baccarat-no-commission.jpg',
      title: 'BUFFALO POWER 2 HOLD AND WIN',
    },
    {
      id: 10,
      image: '/game-cards/baccarat-supreme.jpg',
      title: 'BUFFALO POWER 2 HOLD AND WIN',
    },
    {
      id: 11,
      image: '/game-cards/bonus-track.jpg',
      title: 'BUFFALO POWER 2 HOLD AND WIN',
    },
    {
      id: 12,
      image: '/game-cards/bubbles-bonanza.jpg',
      title: 'BUFFALO POWER 2 HOLD AND WIN',
    },
    {
      id: 13,
      image: '/game-cards/cash-galaxy.jpg',
      title: 'BUFFALO POWER 2 HOLD AND WIN',
    },
    {
      id: 14,
      image: '/game-cards/flexing-dragons.jpg',
      title: 'BUFFALO POWER 2 HOLD AND WIN',
    },
    {
      id: 15,
      image: '/game-cards/forgotten-pharaoh.jpg',
      title: 'BUFFALO POWER 2 HOLD AND WIN',
    },
    {
      id: 16,
      image: '/game-cards/genies-secret.jpg',
      title: 'BUFFALO POWER 2 HOLD AND WIN',
    },
    {
      id: 17,
      image: '/game-cards/grand-heist-feature-buy.jpg',
      title: 'BUFFALO POWER 2 HOLD AND WIN',
    },
    {
      id: 18,
      image: '/game-cards/grand-heist.jpg',
      title: 'BUFFALO POWER 2 HOLD AND WIN',
    },
    {
      id: 19,
      image: '/game-cards/queens-of-glory.jpg',
      title: 'BUFFALO POWER 2 HOLD AND WIN',
    },
    {
      id: 19,
      image: '/game-cards/raiden-medal-burst.jpg',
      title: 'BUFFALO POWER 2 HOLD AND WIN',
    },
  ]

  return (
    <div className="w-full px-2 py-8 md:px-4">
      {/* Header Section */}
      <div className="mb-6 text-center md:mb-10">
        <h2 className="text-2xl font-bold text-white uppercase md:text-3xl lg:text-6xl">
          <span className="block">EXPLORE THE WORLD OF</span>
          <span className="block text-[#ff003d]">RUBY WAGER ONLINE GAMING</span>
        </h2>
        <p className="mt-2 text-[8px] text-white uppercase md:mt-4 md:text-xl">
          THE BEST PLACE TO BE LIVE ON SPORTS AND PLAY ONLINE CASINO GAMES
        </p>
      </div>

      {/* Games Grid - Now 4 columns on mobile */}
      <div className="mx-auto grid max-w-7xl grid-cols-4 gap-2 md:gap-6 lg:gap-8">
        {games.map((game) => (
          <div key={game.id} className="group relative mb-4 md:mb-6">
            {/* Game Card with Hover Effect */}
            <div className="relative aspect-square w-full overflow-hidden rounded-xl transition-transform duration-500 group-hover:scale-110 md:rounded-3xl">
              <Image
                src={game.image}
                alt={game.title}
                layout="fill"
                objectFit="cover"
                className="rounded-xl md:rounded-3xl object-bottom"
              />
            </div>

            {/* Play Now Button - Positioned half over card, half out */}
            <div className="absolute inset-x-0 -bottom-2 z-10 flex translate-y-1/2 transform justify-center md:-bottom-3">
              <button
                className="cursor-pointer rounded-full bg-[#ff003d] px-3 py-1 text-[8px] font-bold text-white uppercase shadow-lg transition hover:bg-red-600 md:px-8 md:py-2 md:text-sm"
                onClick={handlePlayNowClick}
              >
                PLAY NOW
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Extra "Play All Games" CTA */}
      <div className="mt-10 text-center">
        <button
          className="rounded-full bg-[#ff003d] px-6 py-3 text-lg font-bold text-white uppercase shadow-lg transition hover:bg-red-600"
          onClick={handlePlayNowClick}
        >
          PLAY ALL GAMES
        </button>
      </div>
    </div>
  )
}

export default GamesGridSection
