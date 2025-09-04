'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  Bank,
  Football,
  Horse,
  Question,
  Spade,
  Tag,
  HouseSimple,
} from '@phosphor-icons/react'
import type { ComponentProps } from 'react'

type IconComponent = (props: ComponentProps<'svg'>) => JSX.Element

const MobileNav = () => {
  const pathname = usePathname()

  const navItems: { href: string; label: string; icon: IconComponent }[] = [
    { href: '/', label: 'Home', icon: HouseSimple },
    { href: '/sportsbook', label: 'Sports', icon: Football },
    { href: '/racebook', label: 'Races', icon: Horse },
    { href: '/casino', label: 'Casino', icon: Spade },
    { href: '/promotions', label: 'Promo', icon: Tag },
    { href: '/banking', label: 'Bank', icon: Bank },
    { href: '/help', label: 'Help', icon: Question },
  ]

  return (
    <nav
      aria-label="Mobile navigation"
      className="fixed bottom-0 left-0 right-0 z-40 flex justify-around border-t border-neutral-800 bg-black/95 py-1 sm:hidden"
    >
      {navItems.map((item) => {
        const Icon = item.icon
        const isActive = pathname === item.href
        return (
          <Link
            key={item.href}
            href={item.href}
            className="flex flex-col items-center text-[10px] font-medium text-white/80 hover:text-white"
          >
            <Icon
              size={24}
              color={isActive ? '#c19652' : '#ffffff'}
              weight={isActive ? 'fill' : 'regular'}
            />
            <span className="mt-0.5">{item.label}</span>
          </Link>
        )
      })}
    </nav>
  )
}

export default MobileNav
