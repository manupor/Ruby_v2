'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Leagues from '@/components/leagues/Leagues'
import Banking from '@/components/banking/Banking'
import { PercentCircle, Gift, Wallet, HandCoins } from 'lucide-react'
import { useEffect, useState } from 'react'

// --- Data ---
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
  { title: 'March Basketball Betting', image_src: '/promotions/01.png', image_alt: 'March Basketball Betting at RubyWager' },
  { title: 'Casino Betting', image_src: '/promotions/02.png', image_alt: 'Casino Betting at RubyWager' },
  { title: 'Pro Football Betting', image_src: '/promotions/03.png', image_alt: 'Pro Football Betting at RubyWager' },
  { title: 'Soccer Betting', image_src: '/promotions/04.png', image_alt: 'Soccer Betting at RubyWager' },
  { title: 'UFC Betting', image_src: '/promotions/05.png', image_alt: 'UFC Betting at RubyWager' },
]

const promoTickets = [
  { icon: PercentCircle, text1: '125%', text2: 'Reload Bonus', text3: 'Free Play' },
  { icon: Gift, text1: '200%', text2: 'Signup Bonus', text3: 'Free Play' },
  { icon: Wallet, text1: '20%', text2: 'Cash Bonus', text3: 'Bonus' },
  { icon: HandCoins, text1: '$25', text2: 'No Deposit', text3: 'Free Play' },
]

// --- Hero ---
const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [offsetY, setOffsetY] = useState(0)

  const heros = [
    { text1: 'Weekly Rebate, Daily Payouts', text2: '100% SIGN UP BONUS!', text3: 'FASTEST IN THE BUSINESS', img_src: '/hero/01.png' },
    { text1: 'BET ON ALL', text2: 'MAJOR TRACKS', text3: '6% HORSE REBATE!', img_src: '/hero/02.png' },
    { text1: 'CASINO BRINGS', text2: 'VEGAS ACTION TO YOU', text3: 'FREE SPINS + MONTHLY INSURANCE!', img_src: '/hero/03.png' },
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
    <div className="relative h-[600px] overflow-hidden z-0">
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-300 ease-out"
        style={{
          backgroundImage: `url(${heros[currentSlide].img_src})`,
          transform: `translateY(${offsetY * 0.3}px)`,
        }}
      />
      <div className="relative z-10 flex h-full items-center px-6 lg:px-16 text-white">
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
    </div>
  )
}

// --- Home Page ---
export default function Home() {
  return (
    <>
      <Hero />

      {/* 🔥 Banner Deportivo Fondo */}
<div className="relative h-[500px] overflow-hidden">
  <div
    className="absolute inset-0 bg-cover bg-center opacity-60 transition-opacity duration-700 ease-in-out hover:opacity-80"
    style={{
      backgroundImage: `url('/banners/Banner Nuevo Ruby.png')`,
    }}
  />
  <div className="relative z-10 flex h-full items-center justify-center px-4">
    <h2 className="text-4xl md:text-5xl font-extrabold text-white text-center">
      Welcome to RubyWager – Bet Like a Pro
    </h2>
  </div>
</div>

      {/* 🎰 Logo + Slots */}
      <div className="relative z-10 bg-black py-16 flex flex-col items-center justify-center gap-8">
        <img
          src="/home/ruby 1.png"
          alt="ruby1"
          className="w-full max-w-[1800px] h-auto object-contain mx-auto scale-[1.1] sm:scale-[1.2] transition-transform duration-500"
        />
        <Image
          src="/home/slots-logo.png"
          alt="Slots Logo"
          width={180}
          height={32}
          className="relative z-20 -mt-10 sm:-mt-14"
        />
      </div>

      {/* 🔥 Promotions */}
      <div className="container mx-auto px-4 pb-8 lg:px-8">
        <div className="panel my-20">
          <div className="mb-10 flex items-center justify-between">
            <h1 className="text-3xl font-bold text-white">Promotions</h1>
            <Link href="/promotions" className="text-xs underline hover:no-underline">
              <span>See all promotions</span>
            </Link>
          </div>
          <div className="flex flex-col gap-4 lg:flex-row">
            {promotions.map((card) => {
              const Icon = card.icon
              return (
                <Link key={card.title} href="/promotions" className="flex-1 hover:opacity-80 transition duration-300">
                  <Card className="flex h-[250px] flex-1 flex-col bg-[#1A1A1A] hover:scale-[1.02] transition-all duration-300 ease-in-out overflow-hidden">
                    <CardContent className="flex flex-1 flex-col justify-between p-4">
                      <div className="flex items-center gap-4 mb-2">
                        <Icon size={40} className="text-[#FF003D] shrink-0" />
                        <CardTitle className="text-xl font-bold uppercase text-white">
                          {card.title}
                        </CardTitle>
                      </div>
                      <div className="flex flex-col justify-between text-white text-pretty">
                        <p className="text-brand text-3xl sm:text-4xl leading-tight font-black uppercase break-words">
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
        </div>
      </div>

      <Leagues />

      {/* 📊 Sports Betting Options */}
      <div className="container mx-auto px-4 pb-8 lg:px-8">
        <div className="panel my-20">
          <div className="mb-10 flex items-center justify-between">
            <h1 className="text-3xl font-bold text-white">Sports betting options</h1>
            <Link href="/odds" className="text-xs underline hover:no-underline">
              <span>See all options</span>
            </Link>
          </div>
          <div className="flex flex-wrap justify-center gap-x-9 gap-y-10">
            {options.map((card) => (
              <Card key={card.title} className="relative flex h-[380px] w-[380px] flex-col overflow-hidden pb-8 hover:scale-[1.02] transition-all duration-300 ease-in-out">
                <CardContent className="relative z-1 flex flex-1 flex-col justify-end">
                  <CardTitle className="text-foreground mb-3 text-2xl font-extrabold">
                    {card.title}
                  </CardTitle>
                  <Button variant="outline" size="lg" className="w-fit font-bold uppercase">
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

      {/* 🎁 Bonuses */}
      <div className="container mx-auto px-4 pb-20 lg:px-8">
        <div className="panel my-20">
          <div className="mb-10 text-center">
            <h1 className="text-4xl font-bold text-white uppercase tracking-wide">
              Claim Your Bonuses
            </h1>
            <p className="text-[#c19652] mt-2 text-lg font-medium">
              Don’t miss out on these exclusive offers
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {promoTickets.map((ticket, index) => {
              const Icon = ticket.icon
              return (
                <div
                  key={index}
                  className="bg-[#1f1f1f] border border-[#333] text-white rounded-2xl p-6 shadow-md hover:shadow-xl hover:border-[#c19652] transition-all duration-300 group"
                >
                  <div className="flex flex-col items-center text-center space-y-4">
                    <Icon size={48} className="stroke-[#c19652] group-hover:scale-110 transition-transform duration-300" />
                    <div>
                      <p className="text-4xl font-extrabold text-[#c19652]">
                        {ticket.text1}
                      </p>
                      <p className="text-xl font-bold uppercase">{ticket.text2}</p>
                      <p className="text-sm text-gray-400">{ticket.text3}</p>
                    </div>
                    <Link
                      href="/promotions"
                      className="mt-4 inline-block rounded-full bg-[#c19652] px-5 py-2 text-sm font-semibold uppercase text-black hover:bg-[#d7af5b] transition"
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

      <Banking />
    </>
  )
}
