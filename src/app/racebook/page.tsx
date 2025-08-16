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
        title="Your Track to Winning!"
        subtitle="6% HORSE REBATE!"
        description=""
        buttonText="PLACE YOUR BETS NOW"
        buttonLink="/join"
        desktopImage="/racebook_hero.jpg"
        mobileImage="/racebook_hero.jpg"
        buttonVariant="default"
        hideTextOnMobile={false}
      />

      <RacebookFeatures />
    </>
  )
}
