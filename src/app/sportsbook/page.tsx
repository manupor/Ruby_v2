'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { PercentCircle, Gift, Wallet, Sparkles } from 'lucide-react'

import Hero from '@/components/hero/Hero'
import Leagues from '@/components/leagues/Leagues'
import Banking from '@/components/banking/Banking'

const promoTickets = [
  {
    icon: <PercentCircle size={48} color="#c19652" />,
    text1: '125%',
    text2: 'Reload Bonus',
    text3: 'Free Play',
    href: '/promotions',
  },
  {
    icon: <Gift size={48} color="#c19652" />,
    text1: '200%',
    text2: 'Signup Bonus',
    text3: 'Free Play',
    href: '/promotions',
  },
  {
    icon: <Wallet size={48} color="#c19652" />,
    text1: '20%',
    text2: 'Cash Bonus',
    text3: 'Bonus',
    href: '/promotions',
  },
  {
    icon: <Sparkles size={48} color="#c19652" />,
    text1: '$25',
    text2: 'No Deposit',
    text3: 'Free Play',
    href: '/promotions',
  },
]

export default function Home() {
  return (
    <>
      <Hero />

      <div className="container mx-auto px-4 pb-8 lg:px-8">
        <div className="panel my-20">
          <h1 className="mb-10 text-3xl font-bold text-white">Claim Your Bonuses</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {promoTickets.map((card, index) => (
              <div
                key={index}
                className="rounded-xl p-6 shadow-md flex flex-col sm:flex-row items-center gap-4 hover:shadow-xl transition duration-300"
                style={{
                  backgroundColor: '#1a1a1a',
                  color: '#c19652',
                  border: '1px solid #c19652',
                }}
              >
                <div className="text-5xl">{card.icon}</div>
                <div>
                  <p className="text-3xl font-extrabold">{card.text1}</p>
                  <p className="text-lg font-bold uppercase">{card.text2}</p>
                  <p className="text-sm text-[#d9b76c]">{card.text3}</p>
                  <Link
                    href={card.href}
                    className="text-sm font-semibold mt-2 inline-block"
                    style={{ color: '#e6c98f' }}
                  >
                    MORE INFO
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-10">
        <div className="flex flex-col items-center">
          <Image
            src="/home/slots-banner.png"
            alt="UEFA"
            width="1920"
            height="634"
          />
          <Image
            src="/home/slots-logo.png"
            alt="UEFA"
            width="523"
            height="87"
          />
        </div>
      </div>

      <Leagues />

      <Banking />
    </>
  )
}
