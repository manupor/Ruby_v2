'use client'

import Banking from '@/components/banking/Banking'
import BlogSection from '@/components/blog/BlogSection'
import BonusesSection from '@/components/bonuses/BonusesSection'
import CasinoBanner from '@/components/casino-banner/CasinoBanner'
import FeaturesSection from '@/components/features-section/FeaturesSection'
import GamesGridSection from '@/components/grid-cards/GamesGridSection'
import HeroHome from '@/components/hero/HeroHome'
import Leagues from '@/components/leagues/Leagues'
import PromotionsSection from '@/components/promotions/PromotionsSection'
import ReviewsSection from '@/components/reviews/ReviewsSection'
import SportsOptions from '@/components/sports-options/SportsOptions'
import { Gift, HandCoins, PercentCircle, Wallet } from 'lucide-react'

const promotions = [
  {
    title: 'New customers',
    icon: PercentCircle,
    content1: 'Bet $50 get up to $100',
    content2: 'Intantly un bonus bets',
    footer: 'Ruby keeps you in the game',
  },
  {
    title: 'Ruby rewards',
    icon: Gift,
    content1: 'Claim your 10% Insurance',
    content2: 'During NFL season get 10% losses back weekly!',
    footer: '',
  },
  {
    title: 'NCAA and NFL Football',
    icon: HandCoins,
    content1: '20% Parlay payout BOOST!',
    content2: 'Bet any 6 teamer and recieve an extra 20% if it cashes!',
    footer: '',
  },
]

const options = [
  {
    title: 'Basketball Betting',
    image_src: '/promotions/01.png',
    image_alt: 'Basketball Betting at RubyWager',
  },
  {
    title: 'Casino Betting',
    image_src: '/promotions/02.png',
    image_alt: 'Casino Betting at RubyWager',
  },
  {
    title: 'Pro Football Betting',
    image_src: '/promotions/03.png',
    image_alt: 'Pro Football Betting at RubyWager',
  },
  {
    title: 'Soccer Betting',
    image_src: '/promotions/04.png',
    image_alt: 'Soccer Betting at RubyWager',
  },
  {
    title: 'UFC Betting',
    image_src: '/promotions/05.png',
    image_alt: 'UFC Betting at RubyWager',
  },
  {
    title: 'Rugby Betting',
    image_src: '/promotions/06.png',
    image_alt: 'Rugby Betting',
  },
]

const promoTickets = [
  {
    icon: PercentCircle,
    text1: '125%',
    text2: 'Reload Bonus',
    text3: 'Free Play',
  },
  { icon: Gift, text1: '200%', text2: 'Signup Bonus', text3: 'Free Play' },
  { icon: Wallet, text1: '20%', text2: 'Cash Bonus', text3: 'Bonus' },
]

const features = [
  {
    title: 'VIP Rewards',
    subtitle: 'Level up with exclusive perks',
    icon: (
      <svg viewBox="0 0 1080 1080" className="h-12 w-12">
        {/* SVG PATH */}
      </svg>
    ),
  },
  {
    title: 'Crypto Friendly',
    subtitle: 'Fast, Secure and effective',
    icon: (
      <svg viewBox="0 0 1080 1080" className="h-12 w-12">
        {/* SVG PATH */}
      </svg>
    ),
  },
  {
    title: 'Personal VIP Service',
    subtitle: 'Tailored care from our team',
    icon: (
      <svg viewBox="0 0 1080 1080" className="h-12 w-12">
        {/* SVG PATH */}
      </svg>
    ),
  },
  {
    title: 'Fast Payouts',
    subtitle: 'Paid securely within minutes',
    icon: (
      <svg viewBox="0 0 1080 1080" className="h-12 w-12">
        {/* SVG PATH */}
      </svg>
    ),
  },
]

const additionalFeatures = [
  {
    title: 'Live Betting Action',
    subtitle: 'Real-time odds, instant thrills',
    icon: (
      <svg viewBox="0 0 1080 1080" className="h-12 w-12">
        {/* SVG PATH */}
      </svg>
    ),
  },
  {
    title: 'Crypto Friendly',
    subtitle: 'Bet and withdraw with crypto',
    icon: (
      <svg viewBox="0 0 1080 1080" className="h-12 w-12">
        {/* SVG PATH */}
      </svg>
    ),
  },
  {
    title: 'Weekly Jackpots',
    subtitle: 'Huge prizes, every single week',
    icon: (
      <svg viewBox="0 0 1080 1080" className="h-12 w-12">
        {/* SVG PATH */}
      </svg>
    ),
  },
  {
    title: 'Trusted Worldwide',
    subtitle: 'Thousands of players, global reach',
    icon: (
      <svg viewBox="0 0 800 800" className="h-12 w-12">
        {/* SVG PATH */}
      </svg>
    ),
  },
]

export default function Home() {
  return (
    <>
      <HeroHome />

      {/* 👾 Games section moved here */}
      <GamesGridSection />

      <FeaturesSection features={features} />

      {/* 🎁 Bonuses section */}
      <BonusesSection promoTickets={promoTickets} />

      {/* 🎯 Promotions section with background image */}
      <PromotionsSection promotions={promotions} />

      <div className="my-4 sm:my-0">
        <FeaturesSection features={additionalFeatures} />
      </div>

      <CasinoBanner />

      <Leagues />

      <SportsOptions options={options} />

      <ReviewsSection />

      {/* 📝 Blog section */}
      <BlogSection />

      <Banking />
    </>
  )
}
