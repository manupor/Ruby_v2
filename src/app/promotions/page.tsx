import BonusesSection from '@/components/bonuses/BonusesSection'
import HeroSection from '@/components/hero/HeroSection'
import HorizontalPromosSection from '@/components/promotions/HorizontalPromosSection'
import { Gift, HandCoins, PercentCircle, Wallet } from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Promotions & Bonuses | RubyWager',
  description:
    'Discover exclusive promotions, deposit bonuses, and special offers to maximize your bankroll at Ruby Wager',
}

const promoTickets = [
  {
    icon: PercentCircle,
    text1: '125%',
    text2: 'Reload Bonus',
    text3: 'Free Play',
  },
  { icon: Gift, text1: '200%', text2: 'Signup Bonus', text3: 'Free Play' },
  { icon: Wallet, text1: '20%', text2: 'Cash Bonus', text3: 'Bonus' },
  { icon: HandCoins, text1: '$25', text2: 'No Deposit', text3: 'Free Play' },
]

export default function PromotionsPage() {
  return (
    <>
      <HeroSection
        title="Unlock the Action"
        subtitle={<div>Exclusive bonuses,<br /> boosted odds</div>}
        description="and VIP rewards—only at Ruby Wager. Play smart. Win big."
        buttonText="CLAIM BONUS"
        buttonLink="/join"
        desktopImage="/promotions.png"
        mobileImage="/promotions-mobile.png"
        buttonVariant="brand"
      />

      {/* Main content */}
      <div className="container mx-auto max-w-4xl px-4 pt-20">
        <h1 className="mb-10 text-3xl font-bold">Promotions & Bonuses</h1>
        <section className="mb-16">
          <p>
            At Ruby Wager, we believe that bonuses are a fantastic way to
            maximize your bankroll and increase your chances of winning. We
            offer several exciting bonuses designed to give you more value for
            your deposits. Whether you're a new player or a returning customer,
            there's something for everyone to take advantage of!
          </p>
        </section>
      </div>

      {/* 🎁 Bonuses section */}
      <BonusesSection promoTickets={promoTickets} />

      {/* 🔥 Horizontal Promos section */}
      <HorizontalPromosSection />
    </>
  )
}
