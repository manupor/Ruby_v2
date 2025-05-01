'use client'

import Banking from '@/components/banking/Banking'
import BonusesSection from '@/components/bonuses/BonusesSection'
import CasinoBanner from '@/components/casino-banner/CasinoBanner'
import GamesGridSection from '@/components/grid-cards/GamesGridSection'
import Leagues from '@/components/leagues/Leagues'
import PromotionsSection from '@/components/promotions/PromotionsSection'
import SportsOptions from '@/components/sports-options/SportsOptions'
import { Button } from '@/components/ui/button'
import { Gift, HandCoins, PercentCircle, Wallet } from 'lucide-react'
import { useEffect, useState } from 'react'

const promotions = [
  {
    title: 'New customers',
    icon: PercentCircle,
    content1: 'Bet $50 get up to $100',
    content2: 'Intantly un bonus bets',
    footer: 'Ruby keeps you in the game',
  },
  {
    title: 'Ruby rewards',
    icon: Gift,
    content1: 'Claim your 10% insurance',
    content2: 'Refer a friend and get up to',
    footer: '$100 in bonus bets',
  },
  {
    title: 'NCAA and NFL Football',
    icon: HandCoins,
    content1: '20% Boost',
    content2: 'For any 6+ team parlay',
    footer: '',
  },
]

const options = [
  {
    title: 'March Basketball Betting',
    image_src: '/promotions/01.png',
    image_alt: 'March Basketball Betting at RubyWager',
  },
  {
    title: 'Casino Betting',
    image_src: '/promotions/02.png',
    image_alt: 'Casino Betting at RubyWager',
  },
  {
    title: 'Pro Football Betting',
    image_src: '/promotions/03.png',
    image_alt: 'Pro Football Betting at RubyWager',
  },
  {
    title: 'Soccer Betting',
    image_src: '/promotions/04.png',
    image_alt: 'Soccer Betting at RubyWager',
  },
  {
    title: 'UFC Betting',
    image_src: '/promotions/05.png',
    image_alt: 'UFC Betting at RubyWager',
  },
  {
    title: 'Rugby Betting',
    image_src: '/promotions/06.png',
    image_alt: 'Rugby Betting',
  },
]

const promoTickets = [
  {
    icon: PercentCircle,
    text1: '125%',
    text2: 'Reload Bonus',
    text3: 'Free Play',
  },
  { icon: Gift, text1: '200%', text2: 'Signup Bonus', text3: 'Free Play' },
  { icon: Wallet, text1: '20%', text2: 'Cash Bonus', text3: 'Bonus' },
  { icon: HandCoins, text1: '$25', text2: 'No Deposit', text3: 'Free Play' },
]

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [offsetY, setOffsetY] = useState(0)
  const [windowWidth, setWindowWidth] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  const heros = [
    {
      text1: 'Weekly Rebate, Daily Payouts',
      text2: '200% SIGN UP BONUS!',
      text3: 'FASTEST IN THE BUSINESS',
      img_src: '/hero/01.png',
      mobile_img_src: '/hero/mobile/01.png',
    },
    {
      text1: 'BET ON ALL',
      text2: 'MAJOR TRACKS',
      text3: '6% HORSE REBATE!',
      img_src: '/hero/02.png',
      mobile_img_src: '/hero/mobile/02.png',
    },
    {
      text1: 'CASINO BRINGS',
      text2: 'VEGAS ACTION TO YOU',
      text3: 'FREE SPINS + MONTHLY INSURANCE!',
      img_src: '/hero/03.png',
      mobile_img_src: '/hero/mobile/03.png',
    },
  ]

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY)
    window.addEventListener('scroll', handleScroll)

    // Set initial width and mobile state
    const checkMobile = () => {
      const width = window.innerWidth
      setWindowWidth(width)
      setIsMobile(width < 640) // sm breakpoint is 640px
    }

    // Run once on mount
    checkMobile()

    // Add event listeners
    window.addEventListener('resize', checkMobile)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', checkMobile)
    }
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heros.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [heros.length])

  // Navigation handlers
  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heros.length) % heros.length)
  }

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heros.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <div className="relative w-full">
      {/* Image container */}
      <div className="relative h-[400px] w-full overflow-hidden sm:h-auto sm:py-0">
        <img
          src={
            isMobile
              ? heros[currentSlide].mobile_img_src
              : heros[currentSlide].img_src
          }
          alt="Hero banner"
          className="h-full w-full object-cover sm:h-auto sm:object-contain"
          style={{
            transform: `translateY(${offsetY * 0.3}px)`,
          }}
        />

        {/* Dark overlay for better text visibility on mobile */}
        <div className="absolute inset-0 bg-black/30 sm:hidden"></div>

        {/* Content container positioned absolutely over the image */}
        <div className="absolute top-0 left-0 flex h-full w-full items-center">
          <div className="container mx-auto w-full px-4 sm:px-6 lg:px-16">
            <div className="mx-auto text-center text-white sm:mx-0 md:text-left">
              <h1 className="mb-2 text-[18px] font-bold tracking-tight uppercase text-shadow-lg/30 md:text-[20px] lg:text-2xl">
                {heros[currentSlide].text1}
              </h1>
              <p className="mb-2 text-[30px]/10 font-black tracking-tight md:text-[36px] lg:text-6xl">
                {heros[currentSlide].text2}
              </p>
              <h2 className="mb-6 text-[20px] font-bold uppercase text-shadow-lg/30 md:text-2xl lg:text-4xl">
                {heros[currentSlide].text3}
              </h2>
              <Button
                variant="brand"
                size={windowWidth >= 1024 ? 'massive' : 'lg'}
                className="blink-strong"
              >
                JOIN NOW
              </Button>
            </div>
          </div>
        </div>

        {/* Left/Right Navigation Arrows */}
        <button
          onClick={goToPrevSlide}
          className="absolute top-1/2 left-4 -translate-y-1/2 transform rounded-full bg-black/30 p-2 text-white hover:bg-black/50"
          aria-label="Previous slide"
        >
          &lt;
        </button>
        <button
          onClick={goToNextSlide}
          className="absolute top-1/2 right-4 -translate-y-1/2 transform rounded-full bg-black/30 p-2 text-white hover:bg-black/50"
          aria-label="Next slide"
        >
          &gt;
        </button>

        {/* Dot Indicators */}
        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 transform space-x-2">
          {heros.map((_, index) => (
            <button
              key={index}
              className={`h-3 w-3 rounded-full ${
                index === currentSlide ? 'bg-white' : 'bg-white/50'
              }`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <>
      <Hero />

      {/* 🎯 Promotions section with background image */}
      <PromotionsSection promotions={promotions} />

      <CasinoBanner />

      <Leagues />

      <SportsOptions options={options} />

      <GamesGridSection />

      {/* 🎁 Bonuses section */}
      <BonusesSection promoTickets={promoTickets} />

      <Banking />
    </>
  )
}
