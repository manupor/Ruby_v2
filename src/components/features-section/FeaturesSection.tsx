'use client'

import { ReactNode, useEffect, useState } from 'react'

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

  // Auto-advance carousel on mobile
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % features.length)
    }, 4000)

    return () => clearInterval(timer)
  }, [features.length])

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

      {/* Mobile Layout - Carousel */}
      <div className="md:hidden">
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
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
