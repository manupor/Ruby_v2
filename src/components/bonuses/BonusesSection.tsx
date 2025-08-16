'use client'

import { useAuth } from '@/context/AuthContext'

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
              <div className="relative group">
                <div
                  key={index}
                  className="relative aspect-[16/9] overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-white/20"
                >
                  {/* Subtle neon border with hover effect */}
                  <div 
                    className="absolute inset-0 rounded-2xl transition-all duration-300 group-hover:border-4 group-hover:border-white/80"
                    style={{
                      border: '2px solid rgba(255, 255, 255, 0.8)',
                      boxShadow: '0 0 15px 5px rgba(255, 255, 255, 0.5)',
                      filter: 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.5))',
                      pointerEvents: 'none',
                      zIndex: 1
                    }}
                  ></div>
                  
                  <img
                    src={backgroundImage}
                    alt=""
                    className="absolute inset-0 z-0 h-full w-full rounded-2xl object-cover object-center transition-transform duration-300 group-hover:scale-105"
                  />
                  
                  <div className="relative z-10 flex h-full flex-col">
                    <div className="flex-1"></div>
                    <div className="relative z-20">
                      <a
                        href="#"
                        onClick={handleMoreInfoClick}
                        className="absolute -bottom-4 left-4 w-[125px] rounded-full bg-gradient-to-r from-red-500 to-[#ff073a] px-3 py-2 text-center text-[11px] font-bold uppercase tracking-wide text-white shadow transition-all duration-200 hover:scale-[1.03] hover:from-red-600 hover:to-red-500 hover:shadow-md hover:shadow-red-500/30 active:scale-95 md:py-2.5 md:text-sm"
                      >
                        <span className="drop-shadow-sm">MORE INFO</span>
                      </a>
                    </div>
                  </div>
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
