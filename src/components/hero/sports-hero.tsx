import React from 'react'

const SportsHero = () => {
  return (
    <div className="relative flex h-64 items-center justify-center overflow-hidden bg-gradient-to-r from-red-900/20 to-black sm:h-80 lg:h-96">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-80"
        style={{
          backgroundImage:
            "url('/RUBY-SPORTSBOOK.png')",
        }}
      ></div>
      <div className="relative z-10 container mx-auto flex h-full items-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl text-left lg:max-w-2xl">
          <h1 className="mb-2 text-3xl leading-tight font-bold text-white text-shadow-2xs sm:mb-2 sm:text-3xl lg:text-4xl xl:text-5xl">
            Weekly Rebate, Daily Payouts
          </h1>

          <div className="mb-4 sm:mb-8">
            <div className="mb-3 inline-block rounded-lg border-2 border-white bg-black/60 px-4 py-3 sm:mb-6 sm:rounded-xl sm:px-6 sm:py-4">
              <div className="flex items-center justify-center gap-3 sm:justify-start sm:gap-4">
                <span className="neon-text text-4xl leading-none font-black text-white sm:text-5xl lg:text-6xl xl:text-7xl text-shadow-2xs">
                  200%
                </span>
                <div className="flex flex-col">
                  <span className="text-lg leading-tight font-bold text-white sm:text-xl lg:text-2xl xl:text-3xl text-shadow-2xs">
                    SIGN UP
                  </span>
                  <span className="text-lg leading-tight font-bold text-white sm:text-xl lg:text-2xl xl:text-3xl text-shadow-2xs">
                    BONUS!
                  </span>
                </div>
              </div>
            </div>
            <p className="text-lg font-semibold tracking-wide text-white uppercase sm:text-lg lg:text-xl xl:text-2xl text-shadow-2xs">
              SAME DAY PAYOUTS, TRUE VIP EXPERIENCE
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SportsHero
