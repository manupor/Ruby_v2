import React from 'react'
import Link from 'next/link'
import { Wallet, Volleyball } from 'lucide-react'

interface PromoCardProps {
  icon: React.ElementType
  title: string
  subtitle: string
  description: string
  backgroundImage: string
}

const PromoCard = ({
  icon: Icon,
  title,
  subtitle,
  description,
  backgroundImage,
}: PromoCardProps) => {
  return (
    <div
      className="group blink-border relative overflow-hidden rounded-2xl border border-[#333] bg-cover bg-center p-6 text-white shadow-lg transition-all duration-300 hover:border-[#c19652] hover:shadow-xl"
      style={{ backgroundImage: `url('${backgroundImage}')` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 flex flex-col items-center space-y-4 text-center">
        <Icon
          size={48}
          className="animate-pulse text-[#c19652] transition-transform duration-300 group-hover:scale-110"
        />
        <div className="space-y-2">
          <h3 className="text-shadow text-xl font-extrabold text-[#c19652] md:text-2xl">
            {title}
          </h3>
          <p className="text-md font-bold text-shadow-sm md:text-lg">
            {subtitle}
          </p>
          <p className="text-sm text-gray-300 text-shadow-sm">{description}</p>
        </div>
        <Link
          href="/promotions"
          className="mt-2 inline-block animate-pulse rounded-full bg-[#c19652] px-5 py-2 text-sm font-semibold text-black uppercase transition hover:bg-[#d7af5b]"
        >
          CLAIM NOW
        </Link>
      </div>
    </div>
  )
}

const HorizontalPromosSection = () => {
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
      subtitle: 'Get 10% back as freeplay every Monday',
      description: 'on your NFL losses.',
      backgroundImage: '/cajita_02.png',
    },
  ]

  return (
    <div className="container mx-auto px-4 pb-10 md:pb-20 lg:px-8">
      <div className="mt-8 md:mt-16">
        {/* Grid: 1 column on mobile, 2 columns on larger screens */}
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          {promos.map((promo, index) => (
            <PromoCard
              key={index}
              icon={promo.icon}
              title={promo.title}
              subtitle={promo.subtitle}
              description={promo.description}
              backgroundImage={promo.backgroundImage}
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
