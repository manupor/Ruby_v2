import React from 'react'

const SportsHero = () => {
  const handleJoinNow = (e: React.MouseEvent) => {
    e.preventDefault();
    // Add your join now logic here
  };

  return (
    <div className="relative flex h-48 items-start pt-3 justify-center overflow-hidden bg-black sm:h-64 lg:h-96">
      {/* Desktop Background */}
      <div
        className="hidden lg:block absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/sportsbook1.png')",
          opacity: 1,
        }}
      ></div>
      
      {/* Mobile Background */}
      <div
        className="lg:hidden absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/sportsbook mobile.jpg')",
          opacity: 1,
        }}
      ></div>
      
      <div className="relative z-10 container mx-auto flex h-full items-start px-4 sm:px-6 lg:items-center lg:px-12">
        <div className="w-full mt-1 sm:mt-0">
          <h1 className="text-2xl leading-snug font-bold text-white sm:text-4xl lg:text-6xl xl:text-7xl">
            Bet on Every Game{' '}
            <span className="text-white neon-text block sm:inline">
              ANYWHERE
            </span>
          </h1>
          <button 
            onClick={handleJoinNow}
            className="mt-3 bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-md transition-colors duration-200 text-base sm:py-3 sm:px-8 sm:mt-6 sm:text-lg"
          >
            JOIN NOW
          </button>
        </div>
      </div>
      <style jsx>{`
        .neon-text {
          text-shadow: 
            0 0 1px #fff,
            0 0 2px #fff,
            0 0 3px rgba(255, 255, 255, 0.5);
          animation: neon 2.5s ease-in-out infinite alternate;
        }
        @keyframes neon {
          from {
            text-shadow: 
              0 0 1px #fff,
              0 0 2px #fff,
              0 0 3px rgba(255, 255, 255, 0.5);
          }
          to {
            text-shadow: 
              0 0 2px #fff,
              0 0 4px #fff,
              0 0 6px rgba(255, 255, 255, 0.4);
          }
        }
      `}</style>
    </div>
  )
}

export default SportsHero
