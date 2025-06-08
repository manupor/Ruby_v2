'use client'

import { useAuth } from '@/context/AuthContext'
import { useEffect, useState } from 'react'

const HeroHome = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const { openRegister } = useAuth()

  const heros = [
    {
      
      mobile_img_src: '/hero/mobile/01.png.jpg',
    },
  ]

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640)
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heros.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [heros.length])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const handleJoinNowClick = (e: React.MouseEvent) => {
    e.preventDefault()
    openRegister()
  }

  return (
    <div className="relative w-full">
      {/* Clickable banner wrapper */}
      <div className="relative w-full cursor-pointer" onClick={handleJoinNowClick}>
        {/* Hero Banner Image */}
        <img
          src={heros[currentSlide].mobile_img_src}
          alt="Hero banner"
          className="h-auto w-full"
        />

        {/* Text + Conditional Button */}
        <div className="absolute inset-0 flex items-center justify-end">
          <div className="px-8 text-right">
            <h1 className="mb-1 text-[16px] font-medium tracking-wide text-white uppercase">
              {heros[currentSlide].text1}
            </h1>
            <p className="mb-1 text-[26px] leading-tight font-bold tracking-wide text-white">
              {heros[currentSlide].text2}
            </p>
            <h2 className="mb-4 text-[16px] font-medium tracking-wide text-white uppercase">
              {heros[currentSlide].text3}
            </h2>

            {/* Button shown only on desktop */}
            {!isMobile && (
              <button
                onClick={handleJoinNowClick}
                className="rounded bg-yellow-400 px-5 py-2 text-sm font-bold text-black hover:bg-yellow-500"
              >
                JOIN NOW
              </button>
            )}
          </div>
        </div>

        {/* Dots Navigation */}
        <div className="absolute bottom-1 left-1/2 flex -translate-x-1/2 transform space-x-2">
          {heros.map((_, index) => (
            <button
              key={index}
              className={`h-2 w-2 rounded-full ${
                index === currentSlide ? 'bg-white' : 'bg-white/50'
              }`}
              onClick={(e) => {
                e.stopPropagation() // prevent triggering join now
                goToSlide(index)
              }}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default HeroHome
