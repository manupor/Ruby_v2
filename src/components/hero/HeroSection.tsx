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
  hideTextOnMobile?: boolean
  className?: string
}

const HeroSection = ({
  title,
  subtitle,
  description,
  buttonText,
  buttonLink,
  desktopImage,
  mobileImage,
  hideTextOnMobile = false,
  className,
}: HeroSectionProps) => {
  const [isMobile, setIsMobile] = useState(false)
  const { openRegister } = useAuth()

  useEffect(() => {
    // Set initial mobile state
    const checkMobile = () => {
      const width = window.innerWidth
      setIsMobile(width < 1024) // lg breakpoint is 1024px
    }

    // Run once on mount
    checkMobile()

    // Add event listeners
    window.addEventListener('resize', checkMobile)

    return () => {
      window.removeEventListener('resize', checkMobile)
    }
  }, [])

  const handleButtonClick = (e: React.MouseEvent) => {
    e.preventDefault()
    openRegister()
  }

  return (
    <div className={`relative w-full ${className}`}>
      {/* Preload both images with high priority */}
      <link
        rel="preload"
        as="image"
        href={desktopImage}
        media="(min-width: 1024px)"
      />
      <link
        rel="preload"
        as="image"
        href={mobileImage}
        media="(max-width: 1023px)"
      />

      {/* Subtle red light effect */}
      <div className="absolute right-0 top-1/2 z-10 h-[200%] w-1/4 -translate-y-1/2 transform bg-gradient-to-l from-red-500/20 to-transparent opacity-70 mix-blend-overlay">
        <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-transparent via-red-500/30 to-transparent" style={{
          animationDuration: '8s',
          animationTimingFunction: 'ease-in-out',
          animationIterationCount: 'infinite',
          transform: 'translateX(100%)',
          animationName: 'sweep',
          animationDelay: '2s',
          width: '100%',
          height: '100%'
        }} />
      </div>

      <style jsx global>{`
        @keyframes sweep {
          0% { transform: translateX(100%); opacity: 0.5; }
          10% { opacity: 0.8; }
          20% { transform: translateX(-100%); opacity: 0.5; }
          100% { transform: translateX(-100%); opacity: 0; }
        }
        @keyframes zoomOut {
          from {
            transform: scale(1.2);
          }
          to {
            transform: scale(1);
          }
        }
        .animate-zoom-out {
          animation: zoomOut 8s ease-out forwards;
          width: 100%;
          height: 100%;
        }
      `}</style>

      {/* Desktop hero section */}
      <div className="relative hidden w-full lg:block">
        <div className="relative w-full overflow-hidden">
          <div className="scale-110">
            <img
              src={desktopImage}
              alt="Hero banner"
              className="h-auto w-full object-cover"
              loading="eager"
              fetchPriority="high"
              decoding="sync"
            />
          </div>
          {/* Content container positioned absolutely over the image */}
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto w-full px-4 sm:px-6 lg:px-8">
              <div className="space-y-6">
                <div className="text-white">
                  <h1 className="text-2xl font-black tracking-tight [text-shadow:0_0_8px_rgba(255,255,255,0.7)] text-left md:text-3xl lg:text-4xl xl:text-5xl">
                    {title}
                  </h1>
                  <p className="mb-2 text-3xl font-black tracking-tight [text-shadow:0_0_10px_rgba(255,255,255,0.8)] md:text-4xl lg:text-5xl">
                    {subtitle}
                  </p>
                  <h2 className="text-[20px] font-bold uppercase [text-shadow:0_0_6px_rgba(255,255,255,0.6)] md:text-xl">
                    {description}
                  </h2>
                </div>
                {buttonText && (
                  <div>
                    <button
                      className="blink-strong cursor-pointer rounded bg-red-600 px-6 py-3 text-lg font-bold text-white hover:bg-red-700"
                      onClick={handleButtonClick}
                    >
                      {buttonText}
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile hero section */}
      <div className="relative w-full lg:hidden">
        <div className="relative w-full">
          <div className="scale-110">
            <img
              src={mobileImage}
              alt="Hero banner"
              className="h-auto w-full"
              loading="eager"
              fetchPriority="high"
              decoding="sync"
            />
          </div>
          <div className="absolute bottom-4 left-0 right-0 flex justify-center px-4">
            <button
              className="blink-strong w-full max-w-xs rounded-full bg-red-600 px-6 py-3 font-bold text-white hover:bg-red-700"
              onClick={handleButtonClick}
            >
              PLACE YOUR BETS NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
