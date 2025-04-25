import React from 'react'
import Image from 'next/image'

const CasinoBanner = () => {
  return (
    <div className="relative mt-40 mb-10 w-full">
      {/* Main casino image with zoom effect on mobile */}
      <div className="relative w-full overflow-hidden">
        <div className="origin-center scale-[1.5] sm:scale-100 sm:transform-none">
          <Image
            src="/home/slots-banner.png"
            alt="Casino games featuring slot machine, dice, poker cards and chips"
            width={1600}
            height={800}
            className="h-auto w-full"
            priority
          />
        </div>
      </div>

      {/* SLWTS Logo centered at the bottom */}
      <div className="absolute right-0 bottom-0 sm:bottom-8 left-0 flex justify-center">
        <Image
          src="/home/slots-logo.png"
          alt="SLWTS Logo"
          width={300}
          height={120}
          className="h-auto w-1/4"
        />
      </div>
    </div>
  )
}

export default CasinoBanner
