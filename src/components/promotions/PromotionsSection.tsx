'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { Card, CardContent, CardTitle } from '../ui/card'

const PromotionsSection = ({ promotions }: any) => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // When the section is 50% visible, trigger the animation
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the element is visible
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
    <div className="relative my-20" ref={sectionRef}>
      {/* Background image with increased height and gradient overlay */}
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(to top, #0a0a0a 0%, transparent 15%, transparent 85%, #0a0a0a 100%), url('/banner-ruby.png')`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          height: '120%',
        }}
      />

      <div className="container mx-auto px-4 py-12 lg:px-8 lg:py-16">
        <div className="panel">
          <div className="mb-10 flex items-center justify-between">
            <h1 className="text-3xl font-bold text-white">Promotions</h1>
            <Link
              href="/promotions"
              className="text-xs text-white underline hover:no-underline"
            >
              <span>See all promotions</span>
            </Link>
          </div>

          <div className="flex flex-col gap-6 lg:flex-row">
            {promotions.map((card: any, index: number) => {
              const Icon = card.icon
              return (
                <Link
                  key={card.title}
                  href="/promotions"
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
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PromotionsSection
