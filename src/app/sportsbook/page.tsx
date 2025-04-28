'use client'

import Hero from '@/components/hero/Hero'
import BetSmarterSection from '@/components/smarter-cta/BetSmarterSection'

export default function Home() {
  return (
    <>
      <Hero />

      <div className="my-20">
        <BetSmarterSection />
      </div>
    </>
  )
}
