import React from 'react'
import Image from 'next/image'

const CasinoBanner = () => {
  return (
    <div className="relative w-full mt-40 mb-10">
      {/* Main casino image */}
      <div className="relative w-full">
        <Image
          src="/home/slots-banner.png"
          alt="Casino games featuring slot machine, dice, poker cards and chips"
          width={1600}
          height={800}
          className="h-auto w-full"
          priority
        />
      </div>

      {/* SLWTS Logo centered at the bottom */}
      <div className="absolute right-0 bottom-8 left-0 flex justify-center">
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
