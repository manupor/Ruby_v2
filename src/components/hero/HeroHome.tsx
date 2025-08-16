'use client'

import { Button } from '@/components/ui/button'
import { useAuth } from '@/context/AuthContext'
import { useEffect, useState } from 'react'

const HeroHome = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const { openRegister } = useAuth()

  const heros = [
    {
      text1: 'Weekly Rebate, Daily Payouts',
      text2: '200% SIGN UP BONUS!',
      text3: 'SAME DAY PAYOUTS, TRUE VIP EXPERIENCE',
      img_src: '/hero/01.jpg',
      mobile_img_src: '/BACGKROUND HERO-MAIN.jpg',
    },
    {
      text1: 'Win More, Get Paid Faster',
      text2: '150% SPORTS BONUS',
      text3: 'FAST PAYMENTS, 24/7 SUPPORT',
      img_src: '/hero/02.png',
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
    if (!isMobile) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % heros.length)
      }, 5000)
      return () => clearInterval(interval)
    }
  }, [heros.length, isMobile])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const handleJoinNowClick = (e: React.MouseEvent) => {
    e.preventDefault()
    openRegister()
  }

  return (
    <div className="relative w-full">
      {isMobile ? (
        <div className="relative w-full">
          {currentSlide === 0 ? (
            <div className="relative w-full">
              <img
                src={heros[0].mobile_img_src}
                alt="Hero banner"
                className="h-auto w-full"
              />
              <div className="absolute inset-0 flex flex-col justify-end pb-8 px-4 text-center">
                <h1 className="text-2xl font-black uppercase text-white text-shadow-md mb-2">
                  {heros[0].text1}
                </h1>
                <p className="text-4xl font-black text-white text-shadow-md mb-4">
                  {heros[0].text2}
                </p>
                <h2 className="text-xl font-black uppercase text-yellow-300 text-shadow-md mb-6">
                  {heros[0].text3}
                </h2>
                <Button
                  variant="brand"
                  size="lg"
                  className="w-full max-w-xs mx-auto text-xl font-black py-6 px-8 rounded-full shadow-xl transform transition-all duration-300 hover:scale-105 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 border-2 border-yellow-400"
                  onClick={handleJoinNowClick}
                >
                  <span className="drop-shadow-md">JOIN NOW!</span>
                </Button>
              </div>
            </div>
          ) : (
            <div className="relative w-full">
              <img
                src={heros[1].mobile_img_src}
                alt="Hero banner"
                className="h-auto w-full"
              />
              <div className="absolute inset-0 flex flex-col justify-end pb-8 px-4 text-center">
                <h1 className="text-2xl font-black uppercase text-white text-shadow-md mb-2">
                  {heros[1].text1}
                </h1>
                <p className="text-4xl font-black text-white text-shadow-md mb-4">
                  {heros[1].text2}
                </p>
                <h2 className="text-xl font-black uppercase text-yellow-300 text-shadow-md mb-6">
                  {heros[1].text3}
                </h2>
                <Button
                  variant="brand"
                  size="lg"
                  className="w-full max-w-xs mx-auto text-xl font-black py-6 px-8 rounded-full shadow-xl transform transition-all duration-300 hover:scale-105 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 border-2 border-yellow-400"
                  onClick={handleJoinNowClick}
                >
                  <span className="drop-shadow-md">JOIN NOW!</span>
                </Button>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="relative w-full">
          <div className="relative h-[400px] w-full overflow-hidden sm:h-auto sm:py-0">
            <img
              src={heros[currentSlide].img_src}
              alt="Hero banner"
              className="h-full w-full object-cover sm:h-auto sm:object-contain"
            />
            <div className="absolute top-0 left-0 flex h-full w-full items-center">
              <div className="container mx-auto w-full px-4 sm:px-6 lg:px-16">
                <div className="mx-auto text-white sm:mx-0 md:text-left">
                  <h1 className="mb-2 text-[18px] font-bold tracking-tight uppercase text-shadow-lg/30 md:text-[20px] lg:text-2xl">
                    {heros[currentSlide].text1}
                  </h1>
                  <p className="mb-2 text-[30px]/10 font-black text-shadow-lg/30 tracking-tight md:text-[36px] lg:text-6xl">
                    {heros[currentSlide].text2}
                  </p>
                  <h2 className="mb-6 text-[20px] font-bold uppercase text-shadow-lg/30 md:text-2xl lg:text-4xl">
                    {heros[currentSlide].text3}
                  </h2>
                  <Button
                    variant="brand"
                    size="lg"
                    className="text-lg font-bold py-6 px-10 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 border-2 border-yellow-400"
                    onClick={handleJoinNowClick}
                  >
                    <span className="drop-shadow-md">JOIN NOW</span>
                  </Button>
                </div>
              </div>
            </div>
            <button
              onClick={() =>
                setCurrentSlide((prev) => (prev - 1 + heros.length) % heros.length)
              }
              className="absolute top-1/2 left-4 -translate-y-1/2 transform rounded-full bg-black/30 p-2 text-white hover:bg-black/50"
              aria-label="Previous slide"
            >
              &lt;
            </button>
            <button
              onClick={() => setCurrentSlide((prev) => (prev + 1) % heros.length)}
              className="absolute top-1/2 right-4 -translate-y-1/2 transform rounded-full bg-black/30 p-2 text-white hover:bg-black/50"
              aria-label="Next slide"
            >
              &gt;
            </button>
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
