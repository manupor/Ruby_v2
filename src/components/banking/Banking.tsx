'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'

export default function Banking() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const slideIntervalRef = useRef<NodeJS.Timeout | null>(null)

  const bankingLogos = [
    { src: '/banking/t.png', alt: 'T', width: 78, height: 68 },
    { src: '/banking/venmo.png', alt: 'Venmo', width: 128, height: 24 },
    { src: '/banking/cash-app.png', alt: 'Cash App', width: 164, height: 39 },
    { src: '/banking/zelle.png', alt: 'Zelle', width: 102, height: 42 },
    { src: '/banking/bitcoin.png', alt: 'Bitcoin', width: 163, height: 34 },
    { src: '/banking/litecoin.png', alt: 'Litecoin', width: 139, height: 39 },
    { src: '/banking/tether.png', alt: 'Tether', width: 153, height: 42 },
  ]

  const totalSlides = Math.ceil(bankingLogos.length / 3)

  // Check screen size and start/stop autoplay
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768
      setIsMobile(mobile)

      // Clear any existing interval
      if (slideIntervalRef.current) {
        clearInterval(slideIntervalRef.current)
        slideIntervalRef.current = null
      }

      // Set up auto-sliding for mobile
      if (mobile) {
        slideIntervalRef.current = setInterval(() => {
          setCurrentSlide((prev) => (prev + 1) % totalSlides)
        }, 3000) // Change slide every 3 seconds
      }
    }

    // Initial check
    checkMobile()

    // Add event listener
    window.addEventListener('resize', checkMobile)

    // Cleanup
    return () => {
      window.removeEventListener('resize', checkMobile)
      if (slideIntervalRef.current) {
        clearInterval(slideIntervalRef.current)
      }
    }
  }, [totalSlides])

  return (
    <section>
      <div className="bg-brand-dark text-[#F5F5F5]">
        <div className="container mx-auto px-4 py-8 lg:px-8">
          {/* Desktop View - Show all logos */}
          <ul className="hidden flex-wrap items-center justify-center gap-10 md:flex">
            {bankingLogos.map((logo, index) => (
              <li key={index}>
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.width}
                  height={logo.height}
                />
              </li>
            ))}
          </ul>

          {/* Mobile View - Auto-sliding Carousel */}
          <div className="relative md:hidden">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                  <div key={slideIndex} className="w-full flex-shrink-0">
                    <ul className="flex items-center justify-around">
                      {bankingLogos
                        .slice(slideIndex * 3, slideIndex * 3 + 3)
                        .map((logo, logoIndex) => (
                          <li key={logoIndex} className="flex justify-center">
                            <Image
                              src={logo.src}
                              alt={logo.alt}
                              width={Math.floor(logo.width * 0.8)}
                              height={Math.floor(logo.height * 0.8)}
                            />
                          </li>
                        ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
