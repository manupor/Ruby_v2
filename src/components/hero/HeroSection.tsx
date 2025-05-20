'use client'

import { useAuth } from '@/context/AuthContext'
import { useEffect, useState } from 'react'

interface HeroSectionProps {
  title: string
  subtitle: any
  description: string
  buttonText: string
  buttonLink?: string
  desktopImage: string
  mobileImage: string
  buttonVariant?: 'default' | 'brand' | 'outline'
}

const HeroSection = ({
  title,
  subtitle,
  description,
  buttonText,
  buttonLink,
  desktopImage,
  mobileImage,
}: HeroSectionProps) => {
  const [offsetY, setOffsetY] = useState(0)
  const [windowWidth, setWindowWidth] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const { openRegister } = useAuth()

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY)
    window.addEventListener('scroll', handleScroll)

    // Set initial width and mobile state
    const checkMobile = () => {
      const width = window.innerWidth
      setWindowWidth(width)
      setIsMobile(width < 1024) // lg breakpoint is 1024px
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

  const handleButtonClick = (e: React.MouseEvent) => {
    e.preventDefault()
    openRegister()
  }

  return (
    <div className="relative w-full">
      {/* Desktop hero section */}
      <div className="relative hidden w-full lg:block">
        <div className="relative h-[400px] w-full overflow-hidden sm:h-auto sm:py-0">
          <img
            src={desktopImage}
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
                  {title}
                </h1>
                <p className="mb-2 text-[30px]/10 font-black tracking-tight text-shadow-lg/30 md:text-[36px] lg:text-6xl">
                  {subtitle}
                </p>
                <h2 className="md:text-1xl mb-6 text-[20px] font-bold uppercase text-shadow-lg/30">
                  {description}
                </h2>
                {buttonText && (
                  <button
                    className="blink-strong rounded bg-red-600 px-6 py-3 text-lg font-bold text-white hover:bg-red-700 cursor-pointer"
                    onClick={handleButtonClick}
                  >
                    {buttonText}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile hero section */}
      <div className="relative w-full lg:hidden">
        <div className="relative w-full">
          <img src={mobileImage} alt="Hero banner" className="h-auto w-full" />
          {/* Dark overlay for better text visibility */}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Content positioned in center with adjusted styling */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="px-8 text-center">
            <h1 className="mb-1 text-[14px] font-medium tracking-wide text-white uppercase">
              {title}
            </h1>
            <p className="mb-1 text-[20px] leading-tight font-bold tracking-wide text-white">
              {subtitle}
            </p>
            <h2 className="mb-6 text-[14px] font-medium tracking-wide text-white uppercase">
              {description}
            </h2>
            {buttonText && (
              <button
                className="blink-strong rounded bg-red-600 px-4 py-2 font-bold text-white hover:bg-red-700"
                onClick={handleButtonClick}
              >
                {buttonText}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
