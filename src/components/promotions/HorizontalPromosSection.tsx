'use client'

import { useAuth } from '@/context/AuthContext'
import { Volleyball, Wallet, Bitcoin } from 'lucide-react'
import React from 'react'

interface PromoCardProps {
  icon: React.ElementType
  title: string
  subtitle: string
  description: string
  backgroundImage: string
  onClaimClick: (e: React.MouseEvent) => void
}

const PromoCard = ({
  icon: Icon,
  title,
  subtitle,
  description,
  backgroundImage,
  onClaimClick,
}: PromoCardProps) => {
  return (
    <div className="flex-1 transition-all duration-500 ease-out opacity-90 translate-y-0">
      <div className="relative flex h-[220px] sm:h-[240px] md:h-[220px] flex-1 flex-col overflow-hidden rounded-xl bg-[#1A1A1A] transition-all duration-300 ease-in-out hover:scale-[1.02] border border-gray-700/50">
        
        {/* Background Image - Cover with proper positioning */}
        <div 
          className="absolute inset-0 bg-cover"
          style={{
            backgroundImage: `url('${backgroundImage}')`,
            backgroundColor: '#1A1A1A',
            backgroundPosition: 'calc(50% + 5px) center',
          }}
        />
        
        {/* CTA Button positioned at absolute bottom left */}
        <div className="absolute bottom-2 left-3 md:bottom-3 md:left-4 z-10">
          <button 
            onClick={onClaimClick}
            className="bg-[#FF003D] hover:bg-[#E00034] text-white font-semibold py-1.5 px-4 md:py-2.5 md:px-6 rounded-full text-xs md:text-sm uppercase transition-colors shadow-lg"
          >
            MORE INFO
          </button>
        </div>
      </div>
    </div>
  )
}

const HorizontalPromosSection = () => {
  const { openRegister } = useAuth()

  const handleClaimNowClick = (e: React.MouseEvent) => {
    e.preventDefault()
    openRegister()
  }

  const promos = [
    {
      icon: Wallet,
      title: 'REFERRAL BONUS',
      subtitle: '25%',
      description: 'Earn 25% freeplay on your friend\'s total deposits. Maximum bonus up to $5,000 per referral.',
      backgroundImage: '/bonus/Ruby-promoArtboard-1.png',
    },
    {
      icon: Volleyball,
      title: 'NFL INSURANCE',
      subtitle: '10%',
      description: 'Get 10% back as freeplay every Monday on your NFL losses. Risk-free betting on your favorite teams.',
      backgroundImage: '/bonus/Ruby-promoArtboard-2.png',
    },
    {
      icon: Wallet,
      title: 'WELCOME BONUS',
      subtitle: '200%',
      description: 'Get up to 200% bonus on your first deposit. Start your Ruby Wager journey with extra funds.',
      backgroundImage: '/bonus/Ruby-promoArtboard-3.png',
    },
    {
      icon: Volleyball,
      title: 'RELOAD BONUS',
      subtitle: '50%',
      description: 'Weekly reload bonus up to 50%. Keep the action going with bonus funds every week.',
      backgroundImage: '/bonus/Ruby-promoArtboard-4.png',
    },
    {
      icon: Wallet,
      title: 'VIP REWARDS',
      subtitle: 'EXCLUSIVE',
      description: 'Exclusive VIP rewards and personalized bonuses. Experience premium treatment at Ruby Wager.',
      backgroundImage: '/bonus/Ruby-promoArtboard-5.png',
    },
    {
      icon: Bitcoin,
      title: 'CRYPTO BONUS',
      subtitle: 'BTC',
      description: 'Deposit with Bitcoin and get exclusive crypto bonuses. Fast, secure, and rewarding.',
      backgroundImage: '/bonus/bitcoin.jpg',
    },
  ]

  return (
    <div className="container mx-auto px-4 pb-10 md:pb-20 lg:px-8">
      <div className="mt-8 md:mt-16">
        {/* Grid: 2 rows of 3 cards in desktop, stacked in mobile */}
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 px-2">
            {promos.map((promo, index) => (
              <PromoCard
                key={index}
                icon={promo.icon}
                title={promo.title}
                subtitle={promo.subtitle}
                description={promo.description}
                backgroundImage={promo.backgroundImage}
                onClaimClick={handleClaimNowClick}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Bonus Terms & Rollover Requirements */}
      {/* <div className="mx-auto mt-4 mb-10 max-w-4xl rounded-lg border border-[#333] p-6">
        <h2 className="mb-4 text-xl font-bold text-[#c19652]">
          Bonus Terms & Rollover Requirements
        </h2>
        <div className="space-y-4 text-sm text-gray-300">
          <p>
            At Ruby Wager, all bonuses come with a rollover requirement that
            must be met before any withdrawals can be made. The rollover is
            calculated using the formula:
          </p>
          <p className="text-center font-semibold text-white">
            (Deposit + Freeplay) × Rollover Multiplier
          </p>
          <p>
            For example, a $1,000 deposit with a 200% freeplay bonus ($2,000)
            results in a total of $3,000 — with a 15x rollover, the player must
            place $45,000 in qualifying wagers to complete the requirement.
          </p>
          <p>
            Only straight wagers placed pre-game or at halftime count toward
            fulfilling the rollover. Live plays, parlays, teasers, horse racing,
            and casino games do not apply. Additionally, wagers made on the same
            event will not count toward rollover progression.
          </p>
          <p>
            When calculating rollover, only the lesser value of the wager is
            applied:
          </p>
          <ul className="list-disc space-y-1 pl-6">
            <li>A bet of $1,900 to win $1,000 counts as $1,000</li>
            <li>A bet of $1,000 to win $1,900 also counts as $1,000</li>
          </ul>
          <p>
            Wagers placed using the Freeplay bonus itself do not count toward
            the rollover requirement.
          </p>
          <p>
            These rules are in place to ensure a fair, transparent, and
            rewarding experience for all Ruby Wager players. Please review your
            bonus terms carefully before placing bets.
          </p>
        </div>
      </div> */}

      <div className="bg-black px-4 py-16 text-white">
        {/* Title and description */}
        <div className="mx-auto mb-8 text-center">
          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            BONUS TERMS & ROLLOVER REQUIREMENTS
          </h1>
          <p className="mx-auto max-w-4xl text-lg leading-relaxed text-gray-300">
            At RubyWager, all bonuses come with a rollover requirement that must
            be met before any withdrawals can be processed. Here's how it works:
          </p>
        </div>

        {/* Four card layout - matching racebook exact layout */}
        <div className="mx-auto mb-16 grid max-w-6xl grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Card 1 */}
          <div className="text-center min-h-[280px] sm:min-h-0">
            <div className="mb-4 flex justify-center">
              <div
                dangerouslySetInnerHTML={{
                  __html: `<svg xmlns="http://www.w3.org/2000/svg" fill="#C8102E" viewBox="0 0 24 24" width="48" height="48">
                  <circle cx="12" cy="12" r="10" stroke="none"/>
                  <circle cx="12" cy="12" r="6" fill="white"/>
                  <circle cx="12" cy="12" r="2" fill="#C8102E"/>
                </svg>`,
                }}
              />
            </div>
            <h3 className="mb-3 text-xl font-bold">
              How Rollover is Calculated
            </h3>
            <div className="text-gray-400">
              <p className="mb-2">(Deposit + Freeplay) × Rollover Multiplier</p>

              <p className="font-semibold text-white">Example:</p>
              <ul className="pl-4 text-left">
                <li>• Deposit: $1,000</li>
                <li>• Freeplay Bonus: $2,000 (200%)</li>
                <li>• Total: $3,000</li>
                <li>• Rollover: 15x</li>
                <li>
                  • Requirement: $3,000 × 15 = $45,000 in qualifying wagers
                </li>
              </ul>
            </div>
          </div>

          {/* Card 2 */}
          <div className="text-center min-h-[280px] sm:min-h-0">
            <div className="mb-4 flex justify-center">
              <div
                dangerouslySetInnerHTML={{
                  __html: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#C8102E" stroke-width="2" viewBox="0 0 24 24" width="48" height="48">
                  <path d="M4 6h16M4 12h10M4 18h8"/>
                  <polyline points="14 12 16 14 20 10" stroke="#C8102E" stroke-width="2" fill="none"/>
                </svg>`,
                }}
              />
            </div>
            <h3 className="mb-3 text-xl font-bold">
              What Counts Toward Rollover
            </h3>
            <div className="text-gray-400">
              <ul className="pl-4 text-left">
                <li>• Straight wagers only</li>
                <li>• Pre-game bets</li>
                <li>• Wagers must be on different events</li>
              </ul>
            </div>
          </div>

          {/* Card 3 */}
          <div className="text-center min-h-[280px] sm:min-h-0">
            <div className="mb-4 flex justify-center">
              <div
                dangerouslySetInnerHTML={{
                  __html: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#C8102E" stroke-width="2" viewBox="0 0 24 24" width="48" height="48">
                  <line x1="18" y1="6" x2="6" y2="18"/>
                  <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>`,
                }}
              />
            </div>
            <h3 className="mb-3 text-xl font-bold">What Does NOT Count</h3>
            <div className="text-gray-400">
              <ul className="pl-4 text-left">
                <li>• Live bets</li>
                <li>• Parlays</li>
                <li>• Teasers</li>
                <li>• Prop bets</li>
                <li>• Futures</li>
                <li>• Horse racing or casino wagers</li>
                <li>• Wagers on the same event</li>
                <li>• Bets made using Freeplay</li>
              </ul>
            </div>
          </div>

          {/* Card 4 */}
          <div className="text-center min-h-[280px] sm:min-h-0">
            <div className="mb-4 flex justify-center">
              <div
                dangerouslySetInnerHTML={{
                  __html: `<svg xmlns="http://www.w3.org/2000/svg" fill="#C8102E" viewBox="0 0 24 24" width="48" height="48">
                  <rect x="2" y="8" width="20" height="14" rx="2"/>
                  <path d="M12 8V2M9 2c0 2 3 4 3 4s3-2 3-4" fill="none" stroke="white" stroke-width="2"/>
                </svg>`,
                }}
              />
            </div>
            <h3 className="mb-3 text-xl font-bold">Freeplay Rules</h3>
            <div className="text-gray-400">
              <ul className="pl-4 text-left">
                <li>• Freeplays are only valid on:</li>
                <li className="pl-4">- Straight wagers</li>
                <li className="pl-4">- 2-team parlays</li>
                <li>
                  • Freeplay winnings are withdrawable once rollover is
                  completed
                </li>
                <li>
                  • Wagers placed with Freeplay do not contribute to rollover
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Important section */}
        <div className="mx-auto mb-16 max-w-4xl">
          <h2 className="mb-6 text-center text-2xl font-bold">Important</h2>
          <div className="mx-auto max-w-3xl text-center text-gray-300">
            <p className="mb-4">
              When calculating rollover, only the lower amount of the wager is
              applied:
            </p>
            <ul className="mb-4 pl-4">
              <li>• $1,900 to win $1,000 → $1,000 counts</li>
              <li>• $1,000 to win $1,900 → $1,000 counts</li>
            </ul>
            <p>
              These terms are in place to ensure a fair, transparent, and
              rewarding experience for all RubyWager players. Review your bonus
              terms before betting and as always, your VIP host is here if you
              need anything.
            </p>
          </div>
        </div>

        {/* Call to action - exact match to racebook */}
        <div className="text-center">
          <h2 className="mb-4 text-3xl font-bold">Ready to Start Betting?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-300">
            Join Ruby Wager today and take advantage of our exciting bonuses.
          </p>
          <button 
            onClick={handleClaimNowClick}
            className="rounded-full bg-[#FF003D] px-10 py-4 text-xl font-bold text-white transition-colors hover:bg-[#E00034]"
          >
            JOIN NOW
          </button>
        </div>
      </div>
    </div>
  )
}

export default HorizontalPromosSection
