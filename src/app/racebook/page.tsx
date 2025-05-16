import HeroSection from '@/components/hero/HeroSection'
import RacebookFeatures from '@/components/racebook/RacebookFeatures'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ruby Wager Racebook | RubyWager',
  description:
    'Experience the ultimate horse racing betting platform with Ruby Wager Racebook. Bet on tracks worldwide with competitive odds and fast payouts.',
}

export default function RacebookPage() {
  return (
    <>
      <HeroSection
        title="BET THE TRACK WITH RUBYWAGER"
        subtitle="Fast. Fierce. Unstoppable."
        description="From local derbies to international classics, saddle up and ride the odds."
        buttonText="PLACE YOUR BETS NOW"
        buttonLink="/join"
        desktopImage="/racebook.png"
        mobileImage="/racebook-mobile.png"
        buttonVariant="default"
      />

      <RacebookFeatures />
    </>
  )
}
