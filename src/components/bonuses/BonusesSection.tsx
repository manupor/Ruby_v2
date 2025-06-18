'use client'

import { useAuth } from '@/context/AuthContext'
import Image from 'next/image'

const BonusesSection = ({ promoTickets }: any) => {
  const { openRegister } = useAuth()

  const handleMoreInfoClick = (e: React.MouseEvent) => {
    e.preventDefault()
    openRegister()
  }

  return (
    <div className="container mx-auto px-4">
      <div className="panel my-10">
        <div className="mb-6 text-center md:mb-10">
          <h1 className="text-3xl font-bold tracking-wide text-white uppercase md:text-4xl">
            RUBY KEEPS YOU IN THE GAME
          </h1>
          <p className="mt-2 text-sm font-medium text-[#c19652] md:text-lg">
            Don't miss out on these exclusive offers
          </p>
        </div>

        {/* Grid: 2x2 on mobile, 2x2 on tablet, 4x1 on desktop */}
        <div className="grid grid-cols-1 gap-3 md:grid-cols-3 md:gap-6">
          {promoTickets.map((ticket: any, index: number) => {
            const Icon = ticket.icon

            // Define background images for each card
            const backgroundImages = [
              '/bonus/20.png',
              '/bonus/125.png',
              '/bonus/200.png',
            ]

            const backgroundImage = backgroundImages[index] || '/bonus-card.png'

            return (
              <div
                key={index}
                className="group relative aspect-[16/9] overflow-hidden rounded-2xl p-6 text-white shadow-md transition-all duration-300 hover:border-[#ff073a] hover:shadow-xl"
              >
                <Image
                  src={backgroundImage}
                  alt={"Bonus background"}
                  fill
                  className="absolute inset-0 z-0 h-full w-full rounded-2xl object-cover object-center"
                />
                <div className="relative z-10 flex h-full items-end justify-start text-center">
                  <a
                    href="#"
                    onClick={handleMoreInfoClick}
                    className="mt-1 inline-block rounded-full bg-[#ff073a] px-3 py-1 text-[10px] font-semibold text-white uppercase transition hover:bg-gray-900 md:mt-2 md:px-5 md:py-2 md:text-sm"
                  >
                    MORE INFO
                  </a>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default BonusesSection
