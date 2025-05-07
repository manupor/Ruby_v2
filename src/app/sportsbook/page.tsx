'use client'

import HeroHome from '@/components/hero/HeroHome'
import BetSmarterSection from '@/components/smarter-cta/BetSmarterSection'

export default function Home() {
  return (
    <>
      <HeroHome />

      <div className="mb-20">
        <BetSmarterSection />
      </div>
    </>
  )
}
