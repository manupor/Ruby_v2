'use client'

import { Button } from '@/components/ui/button'
import { useState, useEffect } from 'react'

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const images = ['/hero/01.png', '/hero/02.png', '/hero/03.png']

  const heros = [
    {
      text1: 'Weekly rebatess, Daily Payouts',
      text2: '200% SIGN UP BONUS!',
      text3: 'FASTEST IN THE BUSINESS',
      img_src: '/hero/01.png',
    },
    {
      text1: 'BET ON ALL',
      text2: 'MAJOR TRACKS',
      text3: '6 % HORSE REBATE!',
      img_src: '/hero/01.png',
    },
    {
      text1: 'CASINO BRINGS',
      text2: 'VEGAS ACTION TO YOU',
      text3: 'FREE SPINS + MONTHLY INSURANCE!',
      img_src: '/hero/01.png',
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [images.length])

  return (
    <div className="bg-primary">
      <div className="relative h-[400px] w-full overflow-hidden">
        {images.map((image, index) => (
          <div
            key={image}
            className={`absolute h-full w-full transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="lg:-x-8 container mx-auto px-4 py-20 text-white">
              <div className="mb-4">
                <h1 className="text-2xl font-bold tracking-tight uppercase">
                  {heros[index].text1}
                </h1>
                <p className="text-6xl font-black tracking-tight">
                  {heros[index].text2}
                </p>
                <h2 className="text-4xl font-bold uppercase">
                  {heros[index].text3}
                </h2>
              </div>
              <Button variant="brand" size="massive" className="blink-strong">
                JOIN NOW
              </Button>
            </div>
          </div>
        ))}

        <button
          onClick={() =>
            setCurrentSlide(
              (prev) => (prev - 1 + images.length) % images.length
            )
          }
          className="absolute top-1/2 left-4 -translate-y-1/2 transform rounded-full bg-black/30 p-2 text-white hover:bg-black/50"
        >
          &lt;
        </button>
        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % images.length)}
          className="absolute top-1/2 right-4 -translate-y-1/2 transform rounded-full bg-black/30 p-2 text-white hover:bg-black/50"
        >
          &gt;
        </button>

        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 transform space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              className={`h-3 w-3 rounded-full ${
                index === currentSlide ? 'bg-white' : 'bg-white/50'
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
