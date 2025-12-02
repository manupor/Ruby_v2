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
  desktopScaleClass?: string
  desktopTitleClass?: string
  desktopSubtitleClass?: string
  desktopDescriptionClass?: string
  desktopContentSpacingClass?: string
  desktopButtonClass?: string
  desktopTitleLines?: string[]
  mobileObjectPosition?: string
  mobileTextAlign?: 'left' | 'center' | 'right'
  mobileTextMarginBottom?: string
  mobileCenterButton?: boolean
  mobileButtonMarginBottom?: string
  mobileButtonClass?: string
  mobileHeight?: string
  mobileTitleLines?: string[]
  mobileStrongTextShadow?: boolean
  mobileTextOverlay?: boolean
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
  desktopScaleClass = 'scale-110',
  desktopTitleClass = 'text-2xl font-black tracking-tight [text-shadow:0_0_8px_rgba(255,255,255,0.7)] text-left md:text-3xl lg:text-4xl xl:text-5xl',
  desktopSubtitleClass = 'mb-2 text-3xl font-black tracking-tight [text-shadow:0_0_10px_rgba(255,255,255,0.8)] md:text-4xl lg:text-5xl',
  desktopDescriptionClass = 'text-[20px] font-bold uppercase [text-shadow:0_0_6px_rgba(255,255,255,0.6)] md:text-xl',
  desktopContentSpacingClass = 'space-y-6',
  desktopButtonClass = 'blink-strong cursor-pointer rounded bg-red-600 px-6 py-3 text-lg font-bold text-white hover:bg-red-700',
  desktopTitleLines,
  mobileObjectPosition = 'center',
  mobileTextAlign = 'left',
  mobileTextMarginBottom = 'mb-24',
  mobileCenterButton = false,
  mobileButtonMarginBottom = 'mb-3',
  mobileButtonClass = '',
  mobileHeight = '30vh',
  mobileTitleLines,
  mobileStrongTextShadow = false,
  mobileTextOverlay = true,
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
          <div className={desktopScaleClass}>
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
              <div className={desktopContentSpacingClass}>
                <div className="text-white">
                  <h1 className={desktopTitleClass}>
                    {desktopTitleLines && desktopTitleLines.length > 0 ? (
                      desktopTitleLines.map((line, idx) => (
                        <span key={idx} className="block leading-tight">{line}</span>
                      ))
                    ) : (
                      title
                    )}
                  </h1>
                  <p className={desktopSubtitleClass}>
                    {subtitle}
                  </p>
                  <h2 className={desktopDescriptionClass}>
                    {description}
                  </h2>
                </div>
                {buttonText && (
                  <div>
                    <button
                      className={desktopButtonClass}
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
        <div className="relative w-full overflow-hidden" style={{ height: mobileHeight }}>
          <div className="absolute inset-0">
            <img
              src={mobileImage}
              alt="Hero banner"
              className="h-full w-full object-cover"
              style={{ objectPosition: mobileObjectPosition }}
              loading="eager"
              fetchPriority="high"
              decoding="sync"
            />
            {mobileTextOverlay && (
              <div className="absolute inset-x-0 bottom-0 z-10 h-1/2 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
            )}
          </div>
          <div className="absolute inset-0 flex flex-col justify-end">
            <div className="container mx-auto px-4">
              <div className={`relative z-20 ${mobileTextAlign === 'center' ? 'text-center' : mobileTextAlign === 'right' ? 'text-right' : 'text-left'} ${mobileTextMarginBottom}`}>
                <h1 className={`text-lg font-bold text-white ${mobileStrongTextShadow ? '[text-shadow:0_0_16px_rgba(0,0,0,1),0_0_10px_#000,0_0_4px_#000]' : '[text-shadow:0_0_10px_rgba(0,0,0,0.9),0_0_5px_#000]'} sm:text-xl`}>
                  {mobileTitleLines && mobileTitleLines.length > 0 ? (
                    mobileTitleLines.map((line, idx) => (
                      <span key={idx} className="block leading-snug">{line}</span>
                    ))
                  ) : (
                    title
                  )}
                </h1>
                <p className={`text-base font-bold text-white ${mobileStrongTextShadow ? '[text-shadow:0_0_16px_rgba(0,0,0,1),0_0_10px_#000,0_0_4px_#000]' : '[text-shadow:0_0_10px_rgba(0,0,0,0.9),0_0_5px_#000]'} sm:text-lg`}>
                  {subtitle}
                </p>
                {description && (
                  <h2 className={`text-xs font-bold uppercase text-white ${mobileStrongTextShadow ? '[text-shadow:0_0_14px_rgba(0,0,0,1),0_0_8px_#000,0_0_3px_#000]' : '[text-shadow:0_0_8px_rgba(0,0,0,0.9),0_0_3px_#000]'} sm:text-sm`}>
                    {description}
                  </h2>
                )}
              </div>
              <div className={`w-full ${mobileButtonMarginBottom} ${mobileCenterButton ? 'flex justify-center' : ''}`}>
                <button
                  className={`w-full max-w-xs block rounded bg-red-600 px-4 py-2 text-sm font-bold text-white hover:bg-red-700 shadow-md transition-colors ${mobileCenterButton ? 'mx-auto' : ''} ${mobileButtonClass}`}
                  onClick={handleButtonClick}
                >
                  {buttonText}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
