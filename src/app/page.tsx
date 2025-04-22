'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Hero from '@/components/hero/Hero'
import Leagues from '@/components/leagues/Leagues'
import Banking from '@/components/banking/Banking'

const options = [
  {
    title: 'March Basketball Betting',
    image_src: '/promotions/01.png',
    image_alt: 'March Basketball',
  },
  {
    title: 'Champions League Action',
    image_src: '/promotions/02.png',
    image_alt: 'Champions League',
  },
  {
    title: 'NFL Draft Specials',
    image_src: '/promotions/03.png',
    image_alt: 'NFL Draft',
  },
]

export default function Home() {
  return (
    <>
      <Hero />
      <div className="py-10">
        <div className="flex flex-col items-center">
          <Image
            src="/home/slots-banner.png"
            alt="Slots Banner"
            width={1920}
            height={634}
          />
          <Image
            src="/home/slots-logo.png"
            alt="Slots Logo"
            width={523}
            height={87}
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
                <CardContent className="relative z-10 flex flex-1 flex-col justify-end">
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
