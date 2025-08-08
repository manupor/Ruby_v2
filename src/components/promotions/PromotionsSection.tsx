'use client'

import { useAuth } from '@/context/AuthContext'
import { useEffect, useRef, useState } from 'react'
import { Card, CardContent, CardTitle } from '../ui/card'

type Promotion = {
  title: string
  content1: string
  content2: string
  footer?: string
  icon: React.ComponentType<{ size: number; className?: string }>
}

interface PromotionsSectionProps {
  promotions: Promotion[]
}

const PromotionsSection = ({ promotions }: PromotionsSectionProps) => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)
  const { openRegister } = useAuth()

  const handlePromotionClick = (e: React.MouseEvent) => {
    e.preventDefault()
    openRegister()
  }

  useEffect(() => {
    const currentSection = sectionRef.current
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.2 }
    )

    if (currentSection) {
      observer.observe(currentSection)
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection)
      }
    }
  }, [])

  return (
    <>
      {/* Mobile layout */}
      <div className="bg-black sm:hidden">
        <h1 className="py-4 text-center text-2xl font-bold text-white">Promotions</h1>

        <div className="flex gap-4 overflow-x-auto px-4 pb-6 snap-x snap-mandatory">
          {promotions.map((card) => {
            const Icon = card.icon
            return (
              <a
                key={card.title}
                href="#"
                onClick={handlePromotionClick}
                className="min-w-[160px] flex-shrink-0 snap-start transition-transform hover:scale-105"
              >
                <Card className="flex h-[160px] flex-col overflow-hidden rounded-xl border border-neutral-700 bg-gradient-to-b from-neutral-800 to-neutral-900 p-3 shadow-md">
                  <CardContent className="flex flex-1 flex-col">
                    <div className="mb-2 flex items-center gap-2">
                      <Icon size={16} className="shrink-0 text-[#FF003D]" />
                      <CardTitle className="text-xs font-bold uppercase text-white">
                        {card.title}
                      </CardTitle>
                    </div>

                    <div className="flex h-full flex-col text-white">
                      <div className="flex h-full flex-col justify-start">
                        <p className="text-sm font-black uppercase text-[#FF003D]">
                          {card.content1}
                        </p>
                        <p className="mt-1 text-[10px] font-medium uppercase">
                          {card.content2}
                        </p>
                        {card.footer && (
                          <p className="mt-1 text-[10px] font-medium uppercase text-gray-400">
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
            {promotions.map((card, index: number) => {
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
