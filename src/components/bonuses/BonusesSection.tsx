import Link from 'next/link'

const BonusesSection = ({ promoTickets }: any) => {
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
        <div className="grid grid-cols-2 gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-4">
          {promoTickets.map((ticket: any, index: number) => {
            const Icon = ticket.icon
            return (
              <div
                key={index}
                className="group rounded-2xl border border-[#660418] bg-[url('/bonus-card.png')] bg-cover bg-center p-4 text-white shadow-md transition-all duration-300 hover:border-[#ff073a] hover:shadow-xl md:p-6"
              >
                <div className="flex flex-col items-center space-y-2 text-center md:space-y-4">
                  <Icon
                    size={36}
                    className="stroke-white transition-transform duration-300 group-hover:scale-110"
                  />
                  <div>
                    <p className="text-2xl font-extrabold text-white md:text-4xl">
                      {ticket.text1}
                    </p>
                    <p className="text-sm font-bold uppercase md:text-xl">
                      {ticket.text2}
                    </p>
                    <p className="text-sm font-bold uppercase md:text-xl">
                      {ticket.text3}
                    </p>
                  </div>
                  <Link
                    href="/promotions"
                    className="mt-1 inline-block rounded-full bg-black px-4 py-1 text-xs font-semibold text-white uppercase transition hover:bg-gray-900 md:mt-2 md:px-5 md:py-2 md:text-sm"
                  >
                    MORE INFO
                  </Link>
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
