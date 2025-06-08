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
      {/* 1. Hero Section */}
      <HeroHome />

      {/* ✅ Trustpilot-style Banner */}
      <div className="flex items-center justify-center bg-[#1b1b1b] py-4 px-4 sm:px-0">
        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-6 text-center sm:text-left bg-black border border-red-600 rounded-lg px-6 py-4 max-w-4xl w-full shadow-lg">
          <div className="text-white">
            <p className="text-xl font-bold text-[#FF003D]">Excellent</p>
            <p className="text-sm text-white/80">4.9 out of 5 based on 3,217 reviews</p>
          </div>
          <div className="flex justify-center sm:justify-start mt-2 sm:mt-0">
            <img src="/trustpilot-stars.svg" alt="5 stars" className="h-6" />
            <img src="/trustpilot-logo.svg" alt="Trustpilot" className="h-6 ml-2" />
          </div>
        </div>
      </div>

      {/* 2. Features */}
      <FeaturesSection features={features} />

      {/* 3. Games Grid Section */}
      <GamesGridSection />

      {/* 4. Promotions */}
      <PromotionsSection promotions={promotions} />

      {/* 5. Additional Features */}
      <div className="my-4 sm:my-0">
        <FeaturesSection features={additionalFeatures} />
      </div>

      {/* 6. Casino Banner */}
      <CasinoBanner />

      {/* 7. Leagues */}
      <Leagues />

      {/* 8. Sports Options */}
      <SportsOptions options={options} />

      {/* 9. Bonuses */}
      <BonusesSection promoTickets={promoTickets} />

      {/* 10. Reviews */}
      <ReviewsSection />

      {/* 11. Blog */}
      <BlogSection />

      {/* 12. Banking */}
      <Banking />
    </>
  )
}
