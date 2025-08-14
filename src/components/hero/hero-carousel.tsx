'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useAuth } from '@/context/AuthContext'

const slides = [
  {
    id: 1,
    title: 'KICKOFF IS HERE',
    subtitle: '200%',
    subtitlePrefix: 'SIGN UP',
    subtitleSuffix: 'BONUS',
    description: 'SAME DAY PAYOUTS - FASTEST IN THE INDUSTRY',
    badge: 'FASTEST PAYOUTS GUARANTEED',
    image: '/nfl-player-ruby.png',
    cta: 'JOIN NOW!',
  },
  {
    id: 2,
    title: 'PLAY.WIN.GET PAID',
    subtitle: '',
    subtitlePrefix: '',
    subtitleSuffix: '',
    description: 'Ruby Wager Casino - The Fastest Payout in the Game.',
    badge: 'CASINO GAMES',
    image: '/slide-2.jpg',
    cta: 'JOIN NOW!',
  },
]

const blinkingStyles = `
  @keyframes subtleBlink {
    0%, 70% { opacity: 1; }
    85%, 100% { opacity: 0.7; }
  }
  @keyframes smokeGlow {
    0% { 
      box-shadow: 0 0 20px rgba(220, 38, 38, 0.3), 0 0 40px rgba(220, 38, 38, 0.2), inset 0 0 20px rgba(0, 0, 0, 0.1);
      background: linear-gradient(45deg, #dc2626, #991b1b, #7f1d1d, #dc2626);
      background-size: 400% 400%;
      background-position: 0% 50%;
    }
    25% {
      background-position: 100% 50%;
      box-shadow: 0 0 30px rgba(220, 38, 38, 0.4), 0 0 60px rgba(220, 38, 38, 0.3), inset 0 0 30px rgba(0, 0, 0, 0.2);
    }
    50% { 
      box-shadow: 0 0 25px rgba(220, 38, 38, 0.5), 0 0 50px rgba(220, 38, 38, 0.3), inset 0 0 25px rgba(0, 0, 0, 0.15);
      background-position: 0% 50%;
    }
    75% {
      background-position: 100% 50%;
      box-shadow: 0 0 35px rgba(220, 38, 38, 0.4), 0 0 70px rgba(220, 38, 38, 0.2), inset 0 0 35px rgba(0, 0, 0, 0.1);
    }
    100% { 
      box-shadow: 0 0 20px rgba(220, 38, 38, 0.3), 0 0 40px rgba(220, 38, 38, 0.2), inset 0 0 20px rgba(0, 0, 0, 0.1);
      background: linear-gradient(45deg, #dc2626, #991b1b, #7f1d1d, #dc2626);
      background-size: 400% 400%;
      background-position: 0% 50%;
    }
  }
  @keyframes neonGlow {
    0%, 100% {
      text-shadow: 0 0 3px rgba(255, 255, 255, 0.4), 0 0 6px rgba(255, 255, 255, 0.3), 0 0 9px rgba(255, 255, 255, 0.2);
    }
    50% {
      text-shadow: 0 0 5px rgba(255, 255, 255, 0.6), 0 0 10px rgba(255, 255, 255, 0.4), 0 0 15px rgba(255, 255, 255, 0.3);
    }
  }
  @keyframes redLightPulse1 {
    0%, 100% { 
      opacity: 0.2; 
      transform: scale(1) translate(-50%, -50%);
      box-shadow: 0 0 30px rgba(220, 38, 38, 0.3);
    }
    50% { 
      opacity: 0.4; 
      transform: scale(1.2) translate(-50%, -50%);
      box-shadow: 0 0 60px rgba(220, 38, 38, 0.5);
    }
  }
  @keyframes redLightPulse2 {
    0%, 100% { 
      opacity: 0.15; 
      transform: scale(1.1) translate(-50%, -50%);
      box-shadow: 0 0 40px rgba(239, 68, 68, 0.3);
    }
    60% { 
      opacity: 0.35; 
      transform: scale(1.4) translate(-50%, -50%);
      box-shadow: 0 0 80px rgba(239, 68, 68, 0.4);
    }
  }
  @keyframes redLightPulse3 {
    0%, 100% { 
      opacity: 0.1; 
      transform: scale(0.8) translate(-50%, -50%);
      box-shadow: 0 0 25px rgba(185, 28, 28, 0.4);
    }
    40% { 
      opacity: 0.3; 
      transform: scale(1.3) translate(-50%, -50%);
      box-shadow: 0 0 70px rgba(185, 28, 28, 0.6);
    }
  }
  .blink-button {
    animation: subtleBlink 3s infinite, smokeGlow 4s infinite;
    position: relative;
    overflow: hidden;
  }
  .blink-button::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(45deg, rgba(220, 38, 38, 0.3), rgba(0, 0, 0, 0.3), rgba(220, 38, 38, 0.3));
    border-radius: inherit;
    z-index: -1;
    filter: blur(8px);
    opacity: 0.7;
  }
  .neon-text {
    animation: neonGlow 2s ease-in-out infinite;
  }
  .red-light-1 {
    animation: redLightPulse1 4s infinite ease-in-out;
  }
  .red-light-2 {
    animation: redLightPulse2 5s infinite ease-in-out 1s;
  }
  .red-light-3 {
    animation: redLightPulse3 6s infinite ease-in-out 2s;
  }
`

export function HeroCarousel() {
  const { openRegister } = useAuth()
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 9000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length)
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)

  const handleJoinNowClick = (e: React.MouseEvent) => {
    e.preventDefault()
    openRegister()
  }

  return (
    <section className="relative flex h-[300px] items-center justify-center overflow-hidden bg-black sm:h-[400px] lg:h-[500px]">
      {slides.map((slide, index) => (
        <div
          key={`${slide.id}-${index}`}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div
            className={`absolute inset-0 ${
              index === 0
                ? 'bg-black' // Changed from gradient to solid black background
                : 'bg-black' // Changed from slate gradient to solid black background
            }`}
          ></div>

          <div className="absolute inset-0 flex items-center justify-center opacity-10 sm:opacity-5">
            <Image
              src="/images/ruby-logo-hero.svg"
              alt="Ruby Logo Background"
              width={200}
              height={200}
              className="h-32 w-32 sm:h-48 sm:w-48 lg:h-64 lg:w-64"
            />
          </div>

          {index === 0 && (
            <div className="absolute top-0 right-0 hidden h-full w-full sm:block">
              <Image
                src="/nfl-background-hero.jpg"
                alt="NFL Player Background"
                fill
                className="object-cover object-center opacity-30 sm:object-right sm:opacity-100"
                priority={index === 0}
              />
            </div>
          )}

          {index === 1 && (
            <div className="hidden sm:block">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover object-center opacity-30 sm:translate-x-[60px] sm:translate-y-[20px] sm:object-contain sm:object-right sm:opacity-100"
                priority={index === 1}
              />
            </div>
          )}
        </div>
      ))}

      <style>{blinkingStyles}</style>

      <div className="relative z-10 mx-auto flex min-h-full w-full max-w-7xl items-center px-4 py-6 sm:px-8 sm:py-12 lg:px-12">
        <div className="w-full max-w-xl text-center sm:w-auto sm:text-left lg:max-w-2xl">
          <h1 className="mb-2 pt-2 text-3xl leading-tight font-bold text-white sm:mb-2 sm:pt-6 sm:text-3xl lg:text-4xl xl:text-5xl">
            {slides[currentSlide].title}
          </h1>

          <div className="mb-4 sm:mb-8">
            <div className="mb-3 sm:mb-6">
              {currentSlide === 0 ? (
                <div
                  className="mx-auto w-fit rounded-lg border border-white/60 bg-white/10 px-4 py-2 shadow-lg sm:mx-0"
                  style={{
                    boxShadow:
                      '0 0 15px rgba(255, 255, 255, 0.4), inset 0 0 10px rgba(255, 255, 255, 0.1)',
                  }}
                >
                  <div className="flex items-center justify-center gap-3 sm:justify-start sm:gap-4">
                    <span className="neon-text text-6xl leading-none font-black text-white sm:text-6xl lg:text-7xl xl:text-8xl">
                      {slides[currentSlide].subtitle}
                    </span>
                    <div className="flex flex-col">
                      {slides[currentSlide].subtitlePrefix && (
                        <span className="text-xl leading-tight font-bold text-white sm:text-2xl lg:text-3xl xl:text-4xl">
                          {slides[currentSlide].subtitlePrefix}
                        </span>
                      )}
                      <span className="text-xl leading-tight font-bold text-white sm:text-2xl lg:text-3xl xl:text-4xl">
                        {slides[currentSlide].subtitleSuffix}
                      </span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-center gap-3 sm:justify-start sm:gap-4">
                  <span className="neon-text text-6xl leading-none font-black text-white sm:text-6xl lg:text-7xl xl:text-8xl">
                    {slides[currentSlide].subtitle}
                  </span>
                  <div className="flex flex-col">
                    {slides[currentSlide].subtitlePrefix && (
                      <span className="text-xl leading-tight font-bold text-white sm:text-2xl lg:text-3xl xl:text-4xl">
                        {slides[currentSlide].subtitlePrefix}
                      </span>
                    )}
                    <span className="text-xl leading-tight font-bold text-white sm:text-2xl lg:text-3xl xl:text-4xl">
                      {slides[currentSlide].subtitleSuffix}
                    </span>
                  </div>
                </div>
              )}
            </div>
            <p className="text-lg font-semibold tracking-wide text-white uppercase sm:text-lg lg:text-xl xl:text-2xl">
              {slides[currentSlide].description}
            </p>
          </div>

          <div className="mb-4 sm:mb-8">
            <Button
              size="lg"
              onClick={handleJoinNowClick}
              className="blink-button rounded-lg bg-yellow-500 px-6 py-3 text-base font-bold text-white shadow-lg transition-all duration-300 hover:bg-yellow-400 hover:shadow-xl sm:px-12 sm:py-6 sm:text-xl lg:px-16 lg:py-8 lg:text-2xl xl:text-3xl"
            >
              {slides[currentSlide].cta}
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-2 z-20 -translate-y-1/2 rounded-full bg-black/50 p-1.5 text-white transition-colors hover:bg-black/70 sm:left-4 sm:p-2"
      >
        <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-2 z-20 -translate-y-1/2 rounded-full bg-black/50 p-1.5 text-white transition-colors hover:bg-black/70 sm:right-4 sm:p-2"
      >
        <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-3 left-1/2 z-20 flex -translate-x-1/2 space-x-2 sm:bottom-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2.5 w-2.5 rounded-full transition-colors sm:h-3 sm:w-3 ${
              index === currentSlide ? 'bg-red-600' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  )
}
