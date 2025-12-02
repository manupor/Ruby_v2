import CasinoLobby from '@/components/casino/CasinoLobby'
import HeroSection from '@/components/hero/HeroSection'
import TopWinners from '@/components/casino/TopWinners'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ruby Wager Casino | RubyWager',
  description:
    'Experience the thrill of Ruby Wager Casino with slots, table games, poker and more. Fast payouts and big wins await!',
}

export default function CasinoPage() {
  return (
    <>
      <HeroSection
        title="Play & Win Big"
        subtitle="LIVE DEALERS !"
        description=""
        buttonText="PLAY NOW"
        buttonLink="/join"
        desktopImage="/casino.jpg"
        mobileImage="/casino.jpg"
        buttonVariant="brand"
        hideTextOnMobile={true}
        mobileObjectPosition="80% center"
        mobileButtonClass="relative z-30"
        mobileCenterButton
      />

      {/* Casino Lobby */}
      <CasinoLobby />

      {/* Top 5 Winners */}
      <TopWinners />
    </>
  )
}
