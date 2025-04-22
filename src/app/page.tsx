'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Leagues from '@/components/leagues/Leagues'
import Banking from '@/components/banking/Banking'
import { TicketPercent, ShieldCheck, Trophy } from 'lucide-react'
import Image from 'next/image'

const promotions = [
  {
    title: 'New customers',
    icon: TicketPercent,
    content1: 'Bet $50 get up to $100',
    content2: 'Instantly in bonus bets',
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

const promoTickets = [
  { icon: TicketPercent, text1: '125%', text2: 'Reload Bonus', text3: 'Free Play' },
  { icon: ShieldCheck, text1: '200%', text2: 'Signup Bonus', text3: 'Free Play' },
  { icon: Trophy, text1: '20%', text2: 'Cash Bonus', text3: 'Bonus' },
  { icon: TicketPercent, text1: '$25', text2: 'No Deposit', text3: 'Free Play' },
]

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

export default function Page() {
  return (
    <>
      <Hero />

      {/* Bonuses Section */}
      <div className="bonuses-section container mx-auto px-4 pb-20 lg:px-8">
        <div className="panel my-20 bg-black rounded-3xl shadow-inner p-8 border border-neutral-800">
          <div className="mb-10 text-center">
            <h1 className="text-4xl font-bold text-brand uppercase tracking-wide">
              Claim Your Bonuses
            </h1>
            <p className="text-gray-400 mt-2 text-lg font-medium">
              Unlock the best promos tailored for you
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {promoTickets.map((ticket, index) => {
              const Icon = ticket.icon
              return (
                <Card
                  key={index}
                  className="bg-neutral-900 text-brand border border-neutral-700 rounded-xl p-6 flex flex-col items-center text-center space-y-4 hover:border-brand hover:shadow-lg transition"
                >
                  <CardContent className="flex flex-col items-center text-center space-y-4">
                    <Icon size={48} className="stroke-brand group-hover:scale-110 transition-transform duration-300" />
                    <div>
                      <p className="text-3xl font-extrabold text-brand">{ticket.text1}</p>
                      <p className="text-lg font-bold uppercase text-white">{ticket.text2}</p>
                      <p className="text-sm text-brand-dark">{ticket.text3}</p>
                    </div>
                    <Link
                      href="/promotions"
                      className="mt-4 inline-block rounded-full bg-brand px-5 py-2 text-sm font-semibold uppercase text-black hover:bg-brand-dark transition"
                    >
                      More Info
                    </Link>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </div>

      <Banking />
    </>
  )
}
