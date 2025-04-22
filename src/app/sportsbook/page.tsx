'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

import Hero from '@/components/hero/Hero'
import Leagues from '@/components/leagues/Leagues'
import Banking from '@/components/banking/Banking'

const promotions = [
  {
    title: 'New customers',
    content1: 'Bet $50 get up to $100',
    content2: 'Instantly in bonus bets',
    footer: 'Ruby keeps you in the game',
  },
  {
    title: 'Ruby rewards',
    content1: 'Claim your 10% insurance',
    content2: 'Refer a friend and get up to',
    footer: '$100 in bonus bets',
  },
  {
    title: 'NCAA and NFL Football',
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
  return (
    <>
      <Hero />
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
            {promotions.map((card) => (
              <Link
                key={card.title}
                href="/promotions"
                className="flex-1 hover:opacity-80"
              >
                <Card
                  className="flex h-[200px] flex-1 flex-col"
                  style={{
                    backgroundColor: '#000000',
                    color: '#c19652',
                    border: '1px solid #c19652',
                  }}
                >
                  <CardContent className="flex-1">
                    <CardTitle
                      className="text-xl font-bold uppercase"
                      style={{ color: '#c19652' }}
                    >
                      {card.title}
                    </CardTitle>
                    <p
                      className="mb-1 text-4xl leading-none font-black uppercase"
                      style={{ color: '#c19652' }}
                    >
                      {card.content1}
                    </p>
                    <p
                      className="mb-1 text-xl leading-none font-semibold uppercase"
                      style={{ color: '#d9b76c' }}
                    >
                      {card.content2}
                    </p>
                    <p
                      className="text-md leading-none font-bold uppercase"
                      style={{ color: '#e6c98f' }}
                    >
                      {card.footer}
                    </p>
                  </CardContent>
                </Card>
              </Link>
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
      <Banking />
    </>
  )
}
