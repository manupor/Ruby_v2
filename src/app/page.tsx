'use client'

import Image from 'next/image'
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
import { HeroCarousel } from '@/components/hero/hero-carousel'

// import BankingPage from './banking/page'

const promotions = [
  {
    title: 'New customers',
    icon: PercentCircle,
    content1: 'Bet $50 get up to $100',
    content2: 'INSTANTLY ON BONUS BETS',
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
    content2: 'Bet any 6 teamer and receive an extra 20% if it cashes!',
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
    icon: <PercentCircle className="h-12 w-12 text-red-600" />,
  },
  {
    title: 'Crypto Friendly',
    subtitle: 'Fast, Secure and effective',
    icon: <Wallet className="h-12 w-12 text-red-600" />,
  },
  {
    title: 'Personal VIP Service',
    subtitle: 'Tailored care from our team',
    icon: <HandCoins className="h-12 w-12 text-red-600" />,
  },
  {
    title: 'Fast Payouts',
    subtitle: 'Paid securely within minutes',
    icon: <Gift className="h-12 w-12 text-red-600" />,
  },
]

const additionalFeatures = [
  {
    title: 'Live Betting Action',
    subtitle: 'Real-time odds, instant thrills',
    icon: <Gift className="h-12 w-12 text-red-600" />,
  },
  {
    title: 'Crypto Friendly',
    subtitle: 'Bet and withdraw with crypto',
    icon: <Wallet className="h-12 w-12 text-red-600" />,
  },
  {
    title: 'Weekly Jackpots',
    subtitle: 'Huge prizes, every single week',
    icon: <HandCoins className="h-12 w-12 text-red-600" />,
  },
  {
    title: 'Trusted Worldwide',
    subtitle: 'Thousands of players, global reach',
    icon: <PercentCircle className="h-12 w-12 text-red-600" />,
  },
]

export default function Home() {
  return (
    <>
      <HeroCarousel />
      <FeaturesSection features={features} />
      <Leagues />
      <PromotionsSection promotions={promotions} />
      <BonusesSection promoTickets={promoTickets} />
      <SportsOptions options={options} />
      <GamesGridSection />
      <div className="my-4 sm:my-0">
        <FeaturesSection features={additionalFeatures} />
      </div>
      <CasinoBanner />
      <ReviewsSection />
      <BlogSection />
      {/* Banking section removed from Home */}
    </>
  )
}
