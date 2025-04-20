'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { Card, CardContent, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Leagues from '@/components/leagues/Leagues'
import Banking from '@/components/banking/Banking'
import { TicketPercent, ShieldCheck, Trophy } from 'lucide-react'

const promotions = [
  {
    title: 'New customers',
    icon: TicketPercent,
    content1: 'Bet $50 get up to $100',
    content2: 'Intantly un bonus bets',
    footer: 'Ruby keeps you in the game',
  },
  {
    title: 'Ruby rewards',
    icon: ShieldCheck,
    content1: 'Claim your 10% insurance',
    content2: 'Refer a friend and get up to',
    footer: '$100 in bonus bets',
  },
  {
    title: 'NCAA and NFL Football',
    icon: Trophy,
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
]

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const heros = [
    {
      text1: 'Weekly rebates, Daily Payouts',
      text2: '100% SIGN UP BONUS!',
      text3: 'FASTEST IN THE BUSINESS',
      img_src: '/hero/01.png',
    },
    {
      text1: 'BET ON ALL',
      text2: 'MAJOR TRACKS',
      text3: '6% HORSE REBATE!',
      img_src: '/hero/02.png',
    },
    {
      text1: 'CASINO BRINGS',
      text2: 'VEGAS ACTION TO YOU',
      text3: 'FREE SPINS + MONTHLY INSURANCE!',
      img_src: '/hero/03.png',
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heros.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [heros.length])

  return (
    <>
      {/* HERO SECTION */}
      <div className="bg-primary">
        <div className="relative h-[400px] w-full overflow-hidden">
          {heros.map((slide, index) => (
            <div
              key={slide.img_src}
              className={`absolute h-full w-full transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
              style={{
                backgroundImage: `url(${slide.img_src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="container mx-auto h-full flex items-center px-4 sm:px-8 lg:px-16">
                <div className="text-white space-y-2 max-w-[90%] sm:max-w-[60%] min-h-[200px] flex flex-col justify-center">
                  <h1 className="text-lg sm:text-xl lg:text-2xl font-bold uppercase">
                    {slide.text1}
                  </h1>
                  <p className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase">
                    {slide.text2}
                  </p>
                  <h2 className="text-xl sm:text-3xl lg:text-4xl font-bold uppercase">
                    {slide.text3}
                  </h2>
                  <Button
                    variant="brand"
                    size="lg"
                    className="mt-4 px-6 py-3 text-sm sm:text-lg font-bold uppercase blink-strong"
                  >
                    Join Now
                  </Button>
                </div>
              </div>
            </div>
          ))}

          {/* Controls */}
          <button
            onClick={() =>
              setCurrentSlide(
                (prev) => (prev - 1 + heros.length) % heros.length
              )
            }
            className="absolute top-1/2 left-4 -translate-y-1/2 transform rounded-full bg-black/30 p-2 text-white hover:bg-black/50"
          >
            &lt;
          </button>
          <button
            onClick={() =>
              setCurrentSlide((prev) => (prev + 1) % heros.length)
            }
            className="absolute top-1/2 right-4 -translate-y-1/2 transform rounded-full bg-black/30 p-2 text-white hover:bg-black/50"
          >
            &gt;
          </button>

          {/* Dots */}
          <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 transform space-x-2">
            {heros.map((_, index) => (
              <button
                key={index}
                className={`h-3 w-3 rounded-full ${
                  index === currentSlide ? 'bg-white' : 'bg-white/50'
                }`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* PROMOTIONS SECTION */}
      <div className="container mx-auto px-4 pb-8 lg:px-8">
        <div className="panel my-20">
          <div className="mb-10 flex items-center justify-between">
            <h1 className="text-3xl font-bold">Promotions</h1>
            <Link
              href="/promotions"
              className="text-xs underline hover:no-underline"
            >
              <span>See all promotions</span>
            </Link>
          </div>
          <div className="flex flex-col gap-4 lg:flex-row">
            {promotions.map((card) => {
              const Icon = card.icon
              return (
                <Link
                  key={card.title}
                  href="/promotions"
                  className="flex-1 hover:opacity-80 transition duration-300"
                >
                  <Card className="flex h-[200px] flex-1 flex-col bg-[#1A1A1A] hover:scale-[1.02] transition-all duration-300 ease-in-out">
                    <CardContent className="flex-1">
                      <div className="flex items-center gap-4 mb-2">
                        <Icon size={40} className="text-[#FF003D]" />
                        <CardTitle className="text-xl font-bold uppercase">
                          {card.title}
                        </CardTitle>
                      </div>
                      <p className="text-brand mb-1 text-4xl leading-none font-black uppercase">
                        {card.content1}
                      </p>
                      <p className="mb-1 text-xl leading-none font-semibold uppercase">
                        {card.content2}
                      </p>
                      <p className="text-md text-brand-dark leading-none font-bold uppercase">
                        {card.footer}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              )
            })}
          </div>
        </div>
      </div>

      {/* GIF SECTION */}
      <div className="py-10">
        <div className="flex flex-col items-center animate-fade-in">
          <img
            src="/home/ruby 1.png"
            alt="ruby1"
            className="w-[320px] sm:w-[500px] h-auto object-contain"
          />
          <Image
            src="/home/slots-logo.png"
            alt="Slots Logo"
            width={180}
            height={30}
          />
        </div>
      </div>

      <Leagues />

      {/* SPORTS BETTING OPTIONS */}
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
                className="relative flex h-[380px] w-[380px] flex-col overflow-hidden pb-8 hover:scale-[1.02] transition-all duration-300 ease-in-out"
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

      <Banking />
    </>
  )
}
