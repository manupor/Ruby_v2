'use client'

import Banking from '@/components/banking/Banking'
import CasinoBanner from '@/components/casino-banner/CasinoBanner'
import GamesGridSection from '@/components/grid-cards/GamesGridSection'
import Leagues from '@/components/leagues/Leagues'
import PromotionsSection from '@/components/promotions/PromotionsSection'
import BetSmarterSection from '@/components/smarter-cta/BetSmarterSection'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardTitle } from '@/components/ui/card'
import { Gift, HandCoins, PercentCircle, Wallet } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
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
      text2: '100% SIGN UP BONUS!',
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

      <div className="container mx-auto px-4 pb-8 lg:px-8">
        <div className="panel my-20">
          <div className="mb-10 flex items-center justify-between">
            <h1 className="text-3xl font-bold">Sports betting options</h1>
            <Link href="/odds" className="text-xs underline hover:no-underline">
              <span>See all options</span>
            </Link>
          </div>
          <div className="flex flex-wrap justify-center gap-x-9 gap-y-10">
            {options.map((card) => (
              <Card
                key={card.title}
                className="relative flex h-[380px] w-[380px] flex-col overflow-hidden pb-8"
              >
                <CardContent className="relative z-1 flex flex-1 flex-col justify-end">
                  <CardTitle className="text-foreground mb-3 text-2xl font-extrabold">
                    {card.title}
                  </CardTitle>
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-fit font-bold uppercase"
                  >
                    View odds
                  </Button>
                </CardContent>
                <figure className="absolute inset-0 z-0">
                  <Image
                    src={card.image_src}
                    alt={card.image_alt}
                    className="h-full w-full object-cover"
                    width={400}
                    height={400}
                  />
                </figure>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <GamesGridSection />

      {/* 🎁 Bonuses section */}
      <div className="container mx-auto px-4 pb-20 lg:px-8">
        <div className="panel my-20">
          <div className="mb-10 text-center">
            <h1 className="text-4xl font-bold tracking-wide text-white uppercase">
              Claim Your Bonuses
            </h1>
            <p className="mt-2 text-lg font-medium text-[#c19652]">
              Don’t miss out on these exclusive offers
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {promoTickets.map((ticket, index) => {
              const Icon = ticket.icon
              return (
                <div
                  key={index}
                  className="group rounded-2xl border border-[#333] bg-[url('/tarjeta.png')] bg-cover bg-center p-6 text-white shadow-md transition-all duration-300 hover:border-[#c19652] hover:shadow-xl"
                >
                  <div className="flex flex-col items-center space-y-4 text-center">
                    <Icon
                      size={48}
                      className="stroke-[#c19652] transition-transform duration-300 group-hover:scale-110"
                    />
                    <div>
                      <p className="text-4xl font-extrabold text-[#c19652]">
                        {ticket.text1}
                      </p>
                      <p className="text-xl font-bold uppercase">
                        {ticket.text2}
                      </p>
                      <p className="text-sm text-gray-400">{ticket.text3}</p>
                    </div>
                    <Link
                      href="/promotions"
                      className="mt-4 inline-block rounded-full bg-[#c19652] px-5 py-2 text-sm font-semibold text-black uppercase transition hover:bg-[#d7af5b]"
                    >
                      More Info
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      <BetSmarterSection />

      <Banking />
    </>
  )
}
