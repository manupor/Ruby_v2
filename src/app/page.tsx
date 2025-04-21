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

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [offsetY, setOffsetY] = useState(0)

  const heros = [
    {
      text1: 'Weekly Rebate, Daily Payouts',
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
    const handleScroll = () => setOffsetY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heros.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [heros.length])

  return (
    <div className="relative h-[600px] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-300 ease-out"
        style={{
          backgroundImage: `url(${heros[currentSlide].img_src})`,
          transform: `translateY(${offsetY * 0.3}px)`,
        }}
      />
      <div className="relative z-10 flex h-full items-center px-6 lg:px-16 text-white bg-black/40 backdrop-blur-sm">
        <div>
          <h1 className="text-2xl lg:text-4xl font-bold tracking-tight uppercase mb-2">
            {heros[currentSlide].text1}
          </h1>
          <p className="text-5xl lg:text-6xl font-black tracking-tight mb-2">
            {heros[currentSlide].text2}
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold uppercase mb-6">
            {heros[currentSlide].text3}
          </h2>
          <Button variant="brand" size="massive" className="blink-strong">
            JOIN NOW
          </Button>
        </div>
      </div>
      <button
        onClick={() =>
          setCurrentSlide((prev) => (prev - 1 + heros.length) % heros.length)
        }
        className="absolute top-1/2 left-4 -translate-y-1/2 transform rounded-full bg-black/40 p-2 text-white hover:bg-black/60 transition"
      >
        &lt;
      </button>
      <button
        onClick={() => setCurrentSlide((prev) => (prev + 1) % heros.length)}
        className="absolute top-1/2 right-4 -translate-y-1/2 transform rounded-full bg-black/40 p-2 text-white hover:bg-black/60 transition"
      >
        &gt;
      </button>
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 transform space-x-2 z-10">
        {heros.map((_, index) => (
          <button
            key={index}
            className={`h-3 w-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <>
      <Hero />

      {/* PROMOTIONS */}
      <div className="container mx-auto px-4 pb-8 lg:px-8">
        <section className="my-20">
          <div className="mb-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <h1 className="text-3xl font-bold">Promotions</h1>
            <Link
              href="/promotions"
              className="text-xs underline hover:no-underline"
            >
              <span>See all promotions</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {promotions.map((card) => {
              const Icon = card.icon
              return (
                <Link
                  key={card.title}
                  href="/promotions"
                  className="transition duration-300 hover:opacity-80"
                >
                  <Card className="flex flex-col bg-[#1A1A1A] h-full hover:scale-[1.02] transition-all duration-300 ease-in-out">
                    <CardContent className="flex flex-col justify-between p-5 h-full">
                      <div className="flex items-center gap-4 mb-4">
                        <Icon size={40} className="text-[#FF003D]" />
                        <CardTitle className="text-xl font-bold uppercase text-white">
                          {card.title}
                        </CardTitle>
                      </div>
                      <div className="flex flex-col text-white">
                        <p className="text-brand text-3xl sm:text-4xl font-black uppercase">
                          {card.content1}
                        </p>
                        <p className="text-lg font-semibold uppercase">
                          {card.content2}
                        </p>
                        <p className="text-md text-brand-dark font-bold uppercase">
                          {card.footer}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              )
            })}
          </div>
        </section>
      </div>

      {/* VISUAL BANNER */}
      <div className="py-14 bg-black">
        <div className="flex flex-col items-center gap-6 animate-fade-in">
          <img
            src="/home/ruby 1.png"
            alt="ruby1"
            className="w-[800px] sm:w-[1200px] max-w-full h-auto object-contain mx-auto"
          />
          <Image
            src="/home/slots-logo.png"
            alt="Slots Logo"
            width={160}
            height={26}
          />
        </div>
      </div>

      {/* LEAGUES */}
      <Leagues />

      {/* BETTING OPTIONS */}
      <div className="container mx-auto px-4 pb-8 lg:px-8">
        <section className="my-20">
          <div className="mb-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <h1 className="text-3xl font-bold">Sports betting options</h1>
            <Link href="/odds" className="text-xs underline hover:no-underline">
              <span>See all options</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {options.map((card) => (
              <Card
                key={card.title}
                className="relative flex flex-col overflow-hidden hover:scale-[1.02] transition-all duration-300 ease-in-out h-full"
              >
                <figure className="absolute inset-0 z-0">
                  <Image
                    src={card.image_src}
                    alt={card.image_alt}
                    className="h-full w-full object-cover"
                    width={400}
                    height={400}
                  />
                </figure>
                <CardContent className="relative z-10 flex flex-col justify-end bg-gradient-to-t from-black/70 via-black/50 to-transparent p-6">
                  <CardTitle className="text-white mb-3 text-2xl font-extrabold">
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
              </Card>
            ))}
          </div>
        </section>
      </div>

      {/* BANKING */}
      <Banking />
    </>
  )
}
