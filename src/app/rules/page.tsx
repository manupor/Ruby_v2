'use client'

import HeroSection from '@/components/hero/HeroSection'
import SportsRulesContent from '@/components/sports/SportsRulesContent'
import { Metadata } from 'next'

export default function RulesPage() {
  return (
    <>
      <HeroSection
        title=""
        subtitle=""
        description=""
        buttonText=""
        buttonLink="/contact"
        desktopImage="/sports-rules.png"
        mobileImage="/sports-rules-mobile.png"
        buttonVariant="default"
      />

      {/* Main content - keeping the original content */}
      <SportsRulesContent />
    </>
  )
}
