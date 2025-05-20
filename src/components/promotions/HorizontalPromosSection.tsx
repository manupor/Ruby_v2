'use client'

import { useAuth } from '@/context/AuthContext'
import { Volleyball, Wallet } from 'lucide-react'
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
    <article className="overflow-hidden rounded-lg border border-gray-800 bg-[#1A1A1A] transition-transform duration-300 hover:-translate-y-2">
      {/* Featured Image - Using aspect ratio container like blog cards */}
      <a href="#" onClick={onClaimClick} className="relative block">
        <div
          className="relative w-full overflow-hidden"
          style={{ paddingBottom: '56.25%' }} // 16:9 aspect ratio
        >
          <img
            src={backgroundImage}
            alt={title}
            className="absolute top-0 left-0 h-full w-full object-cover transition-transform duration-500 hover:scale-105"
          />
          {/* Dark overlay for better text visibility */}
          <div className="absolute inset-0 bg-black/40"></div>

          {/* Icon overlay */}
          <div className="absolute top-4 left-4">
            <Icon size={40} className="animate-pulse text-[#c19652]" />
          </div>
        </div>
      </a>

      {/* Content */}
      <div className="p-6">
        <a href="#" onClick={onClaimClick}>
          <h3 className="mb-3 text-xl font-bold text-white transition-colors hover:text-red-500">
            {title}
          </h3>
        </a>
        <p className="mb-2 text-sm font-semibold text-[#c19652]">{subtitle}</p>
        <p className="mb-4 text-sm text-gray-400">{description}</p>

        {/* CTA Button */}
        <div className="flex justify-center">
          <button
            onClick={onClaimClick}
            className="rounded-md bg-red-600 px-6 py-3 font-medium text-white transition-colors hover:bg-red-700"
          >
            CLAIM NOW
          </button>
        </div>
      </div>
    </article>
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
      title: 'Earn More With Ruby Wager!',
      subtitle: '25% Referral Bonus – Up to $5,000',
      description: "Get 25% freeplay on your friend's total deposits!",
      backgroundImage: '/cajita_01.png',
    },
    {
      icon: Volleyball,
      title: 'NFL Weekly Insurance – 10% Freeplay',
      subtitle: 'Get 10% back as freeplay every Monday on your NFL losses.',
      description: '',
      backgroundImage: '/cajita_02.png',
    },
  ]

  return (
    <div className="container mx-auto px-4 pb-10 md:pb-20 lg:px-8">
      <div className="mt-8 md:mt-16">
        {/* Grid: 1 column on mobile, 2 columns on larger screens */}
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
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

      {/* Bonus Terms & Rollover Requirements */}
      <div className="mx-auto mt-4 mb-10 max-w-4xl rounded-lg border border-[#333] p-6">
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
      </div>
    </div>
  )
}

export default HorizontalPromosSection
