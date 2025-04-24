import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const GamesGridSection = () => {
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
    { id: 8, image: '/game-cards/08.png', title: 'BUFFALO POWER 2 HOLD AND WIN' },
  ]

  return (
    <div className="w-full px-4 py-12">
      {/* Header Section */}
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold text-white uppercase md:text-6xl">
          <span className="block">EXPLORE THE WORLD OF</span>
          <span className="block" style={{ color: '#ff003d' }}>
            RUBY WAGER ONLINE GAMING
          </span>
        </h2>
        <p className="mt-4 text-xl text-white uppercase">
          THE BEST PLACE TO BE LIVE ON SPORTS AND PLAY ONLINE CASINO GAMES
        </p>
      </div>

      {/* Games Grid */}
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
        {games.map((game) => (
          <div key={game.id} className="group relative mb-6">
            {/* Game Card with Hover Effect */}
            <div className="relative aspect-square w-full overflow-hidden rounded-3xl transition-transform duration-500 group-hover:scale-110">
              <Image
                src={game.image}
                alt={game.title}
                layout="fill"
                objectFit="cover"
                className="rounded-3xl"
              />
            </div>

            {/* Play Now Button - Positioned half over card, half out */}
            <div className="absolute inset-x-0 bottom-0 z-10 flex translate-y-1/2 transform justify-center">
              <Link href="#">
                <button className="rounded-full bg-[#ff003d] px-8 py-2 text-sm font-bold text-white uppercase shadow-lg transition hover:bg-red-600  cursor-pointer">
                  PLAY NOW
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* SPWRTS Logo at Bottom */}
      <div className="mt-16 flex justify-center">
        <div className="relative h-16 w-96">
          <Image
            src="/home/slots-logo.png"
            alt="SPWRTS Logo"
            width={340}
            height={100}
            objectFit="contain"
          />
        </div>
      </div>
    </div>
  )
}

export default GamesGridSection
