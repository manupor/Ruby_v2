'use client'

import SportsHero from '@/components/hero/sports-hero'
import BetSmarterSection from '@/components/smarter-cta/BetSmarterSection'

export default function Home() {
  return (
    <>
      <SportsHero />

      <div className="mb-20">
        <BetSmarterSection />
      </div>
    </>
  )
}
