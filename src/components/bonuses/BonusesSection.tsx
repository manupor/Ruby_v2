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
      <div className="panel my-10 md:my-20">
        <div className="mb-6 text-center md:mb-10">
          <h1 className="text-3xl font-bold tracking-wide text-white uppercase md:text-4xl">
            CLAIM YOUR BONUSES
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
              '/bonus/125.png',
              '/bonus/200.png',
              '/bonus/20.png',
            ]

            const backgroundImage = backgroundImages[index] || '/bonus-card.png'

            return (
              <div
                key={index}
                className="h-[280px] group rounded-xl border border-[#660418] bg-cover bg-center p-2 text-white shadow-md transition-all duration-300 hover:border-[#ff073a] hover:shadow-xl md:rounded-2xl md:p-6"
                style={{
                  backgroundImage: `url('${backgroundImage}')`,
                }}
              >
                <div className="h-full flex justify-center items-end space-y-1 text-center md:space-y-4">
                  {/* <Icon
                    size={24}
                    className="stroke-white transition-transform duration-300 group-hover:scale-110 md:size-9"
                  />
                  <div>
                    <p className="text-lg font-extrabold text-white md:text-4xl">
                      {ticket.text1}
                    </p>
                    <p className="text-xs font-bold uppercase md:text-xl">
                      {ticket.text2}
                    </p>
                    <p className="text-xs font-bold uppercase md:text-xl">
                      {ticket.text3}
                    </p>
                  </div> */}
                  <a
                    href="#"
                    onClick={handleMoreInfoClick}
                    className="mt-1 inline-block rounded-full bg-black px-3 py-1 text-[10px] font-semibold text-white uppercase transition hover:bg-gray-900 md:mt-2 md:px-5 md:py-2 md:text-sm"
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
