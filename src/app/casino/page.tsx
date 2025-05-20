import GamesGridSection from '@/components/grid-cards/GamesGridSection'
import HeroSection from '@/components/hero/HeroSection'
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
        title="WELCOME TO THE RUBY CASINO"
        subtitle="Spin. Win. Repeat."
        description="Step into a world of elite gaming — slots, tables, and jackpots await."
        buttonText="PLAY NOW"
        buttonLink="/join"
        desktopImage="/casino.png"
        mobileImage="/hero/mobile/03.png"
        buttonVariant="brand"
        hideTextOnMobile={true}
      />

      {/* Main content */}
      <div className="container mx-auto max-w-4xl px-4 pt-20">
        <h1 className="mb-10 text-3xl font-bold">Ruby Wager Casino</h1>
        <section className="mb-16">
          <p className="mb-4 text-sm sm:text-base">
            Step into the thrilling world of Ruby Wager Casino, where big wins,
            fast payouts, and top-tier gaming await! Whether you love classic
            table games, high-stakes poker, or spinning the reels on the hottest
            slots, we have something for every player.
          </p>
        </section>
      </div>

      <div className="pb-12">
        <GamesGridSection />
      </div>
    </>
  )
}
