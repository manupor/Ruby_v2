'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export default function SportsBettingOptions({ options }: any) {
  return (
    <div className="container mx-auto px-2 sm:pb-8 sm:px-4 lg:px-8">
      <div className="panel my-10 sm:my-20">
        {/* Centered heading on mobile, with larger text */}
        <div className="mb-6 sm:mb-10">
          <h1 className="mb-6 text-center text-3xl font-bold sm:mb-0 sm:text-left">
            Sports betting options
          </h1>
          <div className="-mt-8 hidden text-right sm:block">
            <Link href="/odds" className="text-xs underline hover:no-underline">
              <span>See all options</span>
            </Link>
          </div>
        </div>

        {/* Grid with 3 columns on mobile, flex wrap on larger screens */}
        <div className="grid grid-cols-3 gap-4 sm:gap-1 sm:flex sm:grid-cols-none sm:flex-wrap sm:justify-center sm:gap-x-9 sm:gap-y-10">
          {options.map((card: any) => (
            <Card
              key={card.title}
              className="relative flex h-[180px] flex-col overflow-hidden sm:h-[380px] sm:w-[380px] border-none sm:border text-shadow-sm"
            >
              <CardContent className="relative z-10 flex flex-1 flex-col justify-end p-2 sm:p-4 sm:pb-8">
                <CardTitle className="text-foreground mb-1 text-xs font-extrabold text-white sm:mb-3 sm:text-2xl">
                  {card.title}
                </CardTitle>
                <Button
                  variant="outline"
                  className="h-auto w-fit border-white bg-transparent px-2 py-1 text-[8px] font-bold text-white uppercase hover:bg-white/10 sm:px-4 sm:py-2 sm:text-base"
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
                  priority
                />
              </figure>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
