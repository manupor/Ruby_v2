'use client'

import Banking from '@/components/banking/Banking'
import BlogSection from '@/components/blog/BlogSection'
import BonusesSection from '@/components/bonuses/BonusesSection'
import CasinoBanner from '@/components/casino-banner/CasinoBanner'
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
    title: 'March Basketball Betting',
    image_src: '/promotions/01.png',
    image_alt: 'March Basketball Betting at RubyWager',
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
  // { icon: HandCoins, text1: '$25', text2: 'No Deposit', text3: 'Free Play' },
]

export default function Home() {
  return (
    <>
      <HeroHome />

      {/* 🎁 Bonuses section */}
      <div className="pb-10 md:pb-20 lg:px-8">
        <BonusesSection promoTickets={promoTickets} />
      </div>

      {/* 🎯 Promotions section with background image */}
      <PromotionsSection promotions={promotions} />

      <CasinoBanner />

      <Leagues />

      <SportsOptions options={options} />

      <GamesGridSection />

      <ReviewsSection />

      {/* 📝 Blog section */}
      <BlogSection />

      <Banking />
    </>
  )
}
