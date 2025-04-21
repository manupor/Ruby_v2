'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Leagues from '@/components/leagues/Leagues'
import Banking from '@/components/banking/Banking'
import { PercentCircle, Gift, Wallet, HandCoins } from 'lucide-react'
import { useEffect, useState } from 'react'

const promoTickets = [
  {
    icon: PercentCircle,
    text1: '125%',
    text2: 'Reload Bonus',
    text3: 'Free Play',
    bgImage: '/bonuses/reload-bg-enhanced.jpg',
  },
  {
    icon: Gift,
    text1: '200%',
    text2: 'Signup Bonus',
    text3: 'Free Play',
    bgImage: '/bonuses/signup-bg-enhanced.jpg',
  },
  {
    icon: Wallet,
    text1: '20%',
    text2: 'Cash Bonus',
    text3: 'Bonus',
    bgImage: '/bonuses/cash-bg-enhanced.jpg',
  },
  {
    icon: HandCoins,
    text1: '$25',
    text2: 'No Deposit',
    text3: 'Free Play',
    bgImage: '/bonuses/nodpo-bg-enhanced.jpg',
  },
]

const BonusesSection = () => {
  return (
    <div className="container mx-auto px-4 pb-20 lg:px-8">
      <div className="panel my-20">
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold text-yellow-500 uppercase tracking-wide">
            Claim Your Bonuses
          </h1>
          <p className="text-yellow-500 mt-2 text-lg font-medium">
            Don’t miss out on these exclusive offers
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {promoTickets.map((ticket, index) => {
            const Icon = ticket.icon
            return (
              <div
                key={index}
                className="relative bg-black border border-yellow-700 text-yellow-500 rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:border-yellow-400 transition-all duration-300 group overflow-hidden"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-10 group-hover:opacity-20 transition-opacity duration-300"
                  style={{ backgroundImage: `url(${ticket.bgImage})` }}
                />
                <div className="relative z-10 flex flex-col items-center text-center space-y-4">
                  <Icon size={48} className="stroke-yellow-500 group-hover:scale-105 transition-transform duration-300" strokeWidth={1.5} />
                  <div>
                    <p className="text-4xl font-extrabold">
                      {ticket.text1}
                    </p>
                    <p className="text-xl font-semibold uppercase tracking-wide">
                      {ticket.text2}
                    </p>
                    <p className="text-sm text-yellow-300">
                      {ticket.text3}
                    </p>
                  </div>
                  <Link
                    href="/promotions"
                    className="mt-4 inline-block rounded-full border border-yellow-500 px-5 py-2 text-sm font-semibold uppercase text-yellow-500 hover:bg-yellow-500 hover:text-black transition"
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
  )
}

export default BonusesSection;
