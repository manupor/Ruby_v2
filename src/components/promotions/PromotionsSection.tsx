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
      <div className="bg-black px-4 py-4 sm:hidden">
        <div className="flex flex-col gap-4">
          {promotions.map((card: any) => {
            const Icon = card.icon
            return (
              <a
                key={card.title}
                href="#"
                onClick={handlePromotionClick}
                className="w-full"
              >
                <Card className="flex h-[140px] w-full items-center justify-center overflow-hidden rounded-xl border border-neutral-800 bg-[#1A1A1A90] shadow-[0_0_10px_#FF003D]">
                  <CardContent className="flex h-full flex-col items-center justify-center space-y-1 p-4 text-center">
                    <div className="flex items-center justify-center gap-2">
                      <Icon size={16} className="shrink-0 text-[#FF003D]" />
                      <CardTitle className="text-sm font-bold uppercase text-white">
                        {card.title}
                      </CardTitle>
                    </div>
                    <p className="text-lg font-black uppercase leading-tight text-[#FF003D]">
                      {card.content1}
                    </p>
                    <p className="text-base font-medium uppercase text-white">
                      {card.content2}
                    </p>
                    {card.footer && (
                      <p className="text-sm font-medium uppercase text-gray-400">
                        {card.footer}
                      </p>
                    )}
                  </CardContent>
                </Card>
              </a>
            )
          })}
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
