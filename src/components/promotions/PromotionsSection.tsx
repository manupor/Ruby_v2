'use client'

import { useAuth } from '@/context/AuthContext'
import { useEffect, useRef, useState } from 'react'
import { Card, CardContent, CardTitle } from '../ui/card'

const PromotionsSection = ({ promotions }: any) => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)
  const { openRegister } = useAuth()

  const handlePromotionClick = (e: React.MouseEvent) => {
    e.preventDefault()
    openRegister()
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <>
      {/* Mobile layout */}
      <div className="relative bg-black sm:hidden">
        {/* Title section with solid black background */}
        <div className="hidden w-full sm:flex">
          <h1 className="py-4 text-center text-4xl font-bold text-white">
            Promotions
          </h1>
        </div>

        {/* Background image section */}
        <div className="relative">
          {/* Image container with gradient */}
          <div className="relative h-[220px] w-full overflow-hidden">
            <div
              className="absolute inset-0"
              style={{
                background: `linear-gradient(to bottom, black 0%, transparent 15%, transparent 85%, black 100%), url('/banner-ruby.png') no-repeat center`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            ></div>
          </div>

          {/* Cards */}
          <div className="relative -mt-8 w-full px-1">
            <div className="flex flex-row gap-2">
              {promotions.map((card: any, index: number) => {
                const Icon = card.icon
                return (
                  <a
                    key={card.title}
                    href="#"
                    onClick={handlePromotionClick}
                    className="flex-1"
                  >
                    <Card className="flex h-[140px] flex-col overflow-hidden rounded-xl border border-neutral-800 bg-[#1A1A1A90]">
                      <CardContent className="flex flex-1 flex-col p-2">
                        <div className="mb-2 flex items-center gap-1">
                          <Icon size={12} className="shrink-0 text-[#FF003D]" />
                          <CardTitle className="text-[6px] font-bold text-white uppercase">
                            {card.title}
                          </CardTitle>
                        </div>

                        <div className="flex h-full flex-col text-white">
                          <div className="flex h-full flex-col justify-start">
                            <p className="text-[12px] leading-tight font-black text-[#FF003D] uppercase">
                              {card.content1}
                            </p>
                            <p className="mt-1 text-[6px] font-medium uppercase">
                              {card.content2}
                            </p>
                            {card.footer && (
                              <p className="mt-1 text-[6px] font-medium text-gray-400 uppercase">
                                {card.footer}
                              </p>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </a>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Desktop layout - preserved exactly as original */}
      <div
        className="relative  hidden overflow-hidden sm:flex sm:h-[60vh] sm:flex-col sm:justify-end"
        ref={sectionRef}
      >
        {/* Background image container */}
        <div
          className="absolute inset-0 -z-10 bg-center"
          style={{
            backgroundImage: `linear-gradient(to top, black 0%, transparent 20%, transparent 80%, black 100%), url('/banner-ruby.png')`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
        />

        <div className="container mx-auto px-4 py-16 lg:px-8">
          {/* Heading Section */}
          <div className="mb-10 flex items-center justify-between">
            <h1 className="text-3xl font-bold text-white">Promotions</h1>
            <a
              href="#"
              onClick={handlePromotionClick}
              className="text-xs text-white underline hover:no-underline"
            >
              <span>See all promotions</span>
            </a>
          </div>

          {/* Cards Section */}
          <div className="flex flex-row gap-6">
            {promotions.map((card: any, index: number) => {
              const Icon = card.icon
              return (
                <a
                  key={card.title}
                  href="#"
                  onClick={handlePromotionClick}
                  className={`flex-1 transition-all duration-500 ease-out ${
                    isVisible
                      ? 'translate-y-0 opacity-90'
                      : 'translate-y-10 opacity-0'
                  }`}
                  style={{
                    transitionDelay: `${index * 150}ms`,
                  }}
                >
                  <Card className="flex h-[280px] flex-1 flex-col overflow-hidden rounded-xl bg-[#1A1A1A] transition-all duration-300 ease-in-out hover:scale-[1.02]">
                    <CardContent className="flex flex-1 flex-col justify-between p-6">
                      <div className="mb-4 flex items-center gap-4">
                        <Icon size={40} className="shrink-0 text-[#FF003D]" />
                        <CardTitle className="text-xl font-bold text-white uppercase">
                          {card.title}
                        </CardTitle>
                      </div>

                      <div className="flex h-full flex-col text-pretty text-white">
                        <div className="flex h-full flex-col justify-start">
                          <p className="text-3xl leading-tight font-black break-words text-[#FF003D] uppercase sm:text-4xl">
                            {card.content1}
                          </p>
                          <p className="mt-2 text-lg font-semibold uppercase">
                            {card.content2}
                          </p>
                          {card.footer && (
                            <p className="text-md mt-2 font-bold text-gray-400 uppercase">
                              {card.footer}
                            </p>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default PromotionsSection
