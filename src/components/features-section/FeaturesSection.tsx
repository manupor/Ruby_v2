'use client'

import { ReactNode, useEffect, useState, useRef } from 'react'

interface Feature {
  icon: ReactNode
  title: string
  subtitle: string
}

interface FeaturesSectionProps {
  features: Feature[]
}

const FeaturesSection: React.FC<FeaturesSectionProps> = ({ features }) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [translateX, setTranslateX] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)

  // Auto-advance carousel on mobile (pause when user is interacting)
  useEffect(() => {
    if (isDragging) return

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % features.length)
    }, 4000)

    return () => clearInterval(timer)
  }, [features.length, isDragging])

  // Touch event handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true)
    setStartX(e.touches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return

    const currentX = e.touches[0].clientX
    const diffX = currentX - startX
    setTranslateX(diffX)
  }

  const handleTouchEnd = () => {
    if (!isDragging) return

    const threshold = 50 // Minimum swipe distance

    if (Math.abs(translateX) > threshold) {
      if (translateX > 0) {
        // Swiped right - go to previous slide
        setCurrentSlide(
          (prev) => (prev - 1 + features.length) % features.length
        )
      } else {
        // Swiped left - go to next slide
        setCurrentSlide((prev) => (prev + 1) % features.length)
      }
    }

    setIsDragging(false)
    setTranslateX(0)
  }

  // Mouse event handlers for desktop testing
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    setStartX(e.clientX)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return

    const currentX = e.clientX
    const diffX = currentX - startX
    setTranslateX(diffX)
  }

  const handleMouseUp = () => {
    if (!isDragging) return

    const threshold = 50

    if (Math.abs(translateX) > threshold) {
      if (translateX > 0) {
        setCurrentSlide(
          (prev) => (prev - 1 + features.length) % features.length
        )
      } else {
        setCurrentSlide((prev) => (prev + 1) % features.length)
      }
    }

    setIsDragging(false)
    setTranslateX(0)
  }

  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false)
      setTranslateX(0)
    }
  }

  return (
    <div className="bg-[#1B1B1B] sm:py-4">
      {/* Desktop Layout - Static 4 columns */}
      <div className="hidden md:block">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-4">
                <div className="flex-shrink-0">{feature.icon}</div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-sm leading-tight font-bold text-white">
                    {feature.title}
                  </h3>
                  <p className="mt-1 text-xs leading-tight text-gray-300">
                    {feature.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Layout - Carousel with Touch Support */}
      <div className="md:hidden">
        <div className="relative overflow-hidden">
          <div
            ref={carouselRef}
            className="flex transition-transform duration-300 ease-out"
            style={{
              transform: `translateX(calc(-${currentSlide * 100}% + ${isDragging ? translateX + 'px' : '0px'}))`,
              transition: isDragging ? 'none' : 'transform 0.3s ease-out',
            }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
          >
            {features.map((feature, index) => (
              <div key={index} className="w-full flex-shrink-0 px-4">
                <div className="flex items-center justify-center space-x-4 py-4">
                  <div className="flex-shrink-0">{feature.icon}</div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-sm leading-tight font-bold text-white">
                      {feature.title}
                    </h3>
                    <p className="mt-1 text-xs leading-tight text-gray-300">
                      {feature.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeaturesSection
