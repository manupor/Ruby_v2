'use client'

import { Button } from '@/components/ui/button'
import { Gift, HandCoins, PercentCircle, Wallet } from 'lucide-react'
import { useEffect, useState } from 'react'

const HeroHome = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [offsetY, setOffsetY] = useState(0)
  const [windowWidth, setWindowWidth] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  const heros = [
    {
      text1: 'Weekly Rebate, Daily Payouts',
      text2: '200% SIGN UP BONUS!',
      text3: 'SAME DAY PAYOUTS, TRUE VIP EXPERIENCE',
      img_src: '/hero/01.png',
      mobile_img_src: '/hero/mobile/01.png',
    },
    {
      text1: 'BET ON ALL',
      text2: 'MAJOR TRACKS',
      text3: '6% HORSE REBATE!',
      img_src: '/hero/02.png',
      mobile_img_src: '/hero/mobile/02.png',
    },
    {
      text1: 'CASINO BRINGS',
      text2: 'VEGAS ACTION TO YOU',
      text3: 'FREE SPINS + MONTHLY INSURANCE!',
      img_src: '/hero/03.png',
      mobile_img_src: '/hero/mobile/03.png',
    },
  ]

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY)
    window.addEventListener('scroll', handleScroll)

    // Set initial width and mobile state
    const checkMobile = () => {
      const width = window.innerWidth
      setWindowWidth(width)
      setIsMobile(width < 640) // sm breakpoint is 640px
    }

    // Run once on mount
    checkMobile()

    // Add event listeners
    window.addEventListener('resize', checkMobile)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', checkMobile)
    }
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heros.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [heros.length])

  // Navigation handlers
  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heros.length) % heros.length)
  }

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heros.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <div className="relative w-full">
      {/* Mobile-specific layout */}
      {isMobile && (
        <div className="relative w-full">
          {/* Background image */}
          <div className="relative w-full">
            <img
              src={heros[currentSlide].mobile_img_src}
              alt="Hero banner"
              className="h-auto w-full"
            />
            {/* Dark overlay - increased opacity for better text visibility */}
            <div className="absolute inset-0 bg-black/50"></div>
          </div>

          {/* Content positioned in center with adjusted styling */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="px-8 text-center">
              <h1 className="mb-1 text-[16px] font-medium tracking-wide text-white uppercase">
                {heros[currentSlide].text1}
              </h1>
              <p className="mb-1 text-[26px] leading-tight font-bold tracking-wide text-white">
                {heros[currentSlide].text2}
              </p>
              <h2 className="mb-6 text-[16px] font-medium tracking-wide text-white uppercase">
                {heros[currentSlide].text3}
              </h2>
              <Button variant="brand" size="lg" className="blink-strong">
                JOIN NOW
              </Button>
            </div>
          </div>

          {/* Navigation dots at bottom */}
          <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 transform space-x-2">
            {heros.map((_, index) => (
              <button
                key={index}
                className={`h-2 w-2 rounded-full ${
                  index === currentSlide ? 'bg-white' : 'bg-white/50'
                }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      )}

      {/* Desktop-specific layout - unchanged from original */}
      {!isMobile && (
        <div className="relative w-full">
          <div className="relative h-[400px] w-full overflow-hidden sm:h-auto sm:py-0">
            <img
              src={heros[currentSlide].img_src}
              alt="Hero banner"
              className="h-full w-full object-cover sm:h-auto sm:object-contain"
              style={{
                transform: `translateY(${offsetY * 0.3}px)`,
              }}
            />

            {/* Content container positioned absolutely over the image */}
            <div className="absolute top-0 left-0 flex h-full w-full items-center">
              <div className="container mx-auto w-full px-4 sm:px-6 lg:px-16">
                <div className="mx-auto text-white sm:mx-0 md:text-left">
                  <h1 className="mb-2 text-[18px] font-bold tracking-tight uppercase text-shadow-lg/30 md:text-[20px] lg:text-2xl">
                    {heros[currentSlide].text1}
                  </h1>
                  <p className="mb-2 text-[30px]/10 font-black tracking-tight md:text-[36px] lg:text-6xl">
                    {heros[currentSlide].text2}
                  </p>
                  <h2 className="mb-6 text-[20px] font-bold uppercase text-shadow-lg/30 md:text-2xl lg:text-4xl">
                    {heros[currentSlide].text3}
                  </h2>
                  <Button
                    variant="brand"
                    size={windowWidth >= 1024 ? 'massive' : 'lg'}
                    className="blink-strong"
                  >
                    JOIN NOW
                  </Button>
                </div>
              </div>
            </div>

            {/* Left/Right Navigation Arrows */}
            <button
              onClick={goToPrevSlide}
              className="absolute top-1/2 left-4 -translate-y-1/2 transform rounded-full bg-black/30 p-2 text-white hover:bg-black/50"
              aria-label="Previous slide"
            >
              &lt;
            </button>
            <button
              onClick={goToNextSlide}
              className="absolute top-1/2 right-4 -translate-y-1/2 transform rounded-full bg-black/30 p-2 text-white hover:bg-black/50"
              aria-label="Next slide"
            >
              &gt;
            </button>

            {/* Dot Indicators */}
            <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 transform space-x-2">
              {heros.map((_, index) => (
                <button
                  key={index}
                  className={`h-3 w-3 rounded-full ${
                    index === currentSlide ? 'bg-white' : 'bg-white/50'
                  }`}
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default HeroHome
