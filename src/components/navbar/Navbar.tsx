'use client'

import * as React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  List,
  X,
  Football,
  Horse,
  Spade,
  Tag,
  Bank,
  Article,
  Question,
} from '@phosphor-icons/react'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetTitle,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet'

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)

  const navItems = [
    {
      href: '/sportsbook',
      label: 'Sportsbook',
      icon: <Football size={32} color="#c19652" />,
    },
    {
      href: '/racebook',
      label: 'Racebook',
      icon: <Horse size={32} color="#c19652" />,
    },
    {
      href: '/casino',
      label: 'Casino',
      icon: <Spade size={32} color="#c19652" />,
    },
    {
      href: '/promotions',
      label: 'Promotions',
      icon: <Tag size={32} color="#c19652" />,
    },
    {
      href: '/banking',
      label: 'Banking',
      icon: <Bank size={32} color="#c19652" />,
    },
    {
      href: '/help',
      label: 'Help',
      icon: <Question size={32} color="#c19652" />,
    },
  ]

  return (
    <header className="sticky top-0 z-50">
      {/* Top section - color only applied locally */}
      <div className="flex items-center justify-between border-b border-neutral-800 bg-[#1A1A1A] px-4 py-4 shadow-md sm:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/logo-ruby.png"
            alt="RubyWager Logo"
            width={220}
            height={80}
            priority
            className="w-[130px] sm:w-[220px] xl:w-[280px]"
          />
          <Image
            src="/You play, we pay.svg"
            alt="RubyWager Logo"
            width={220}
            height={80}
            priority
            className="hidden w-[130px] sm:w-[220px] xl:w-[280px] sm:block"
          />
        </Link>

        <div className="flex items-center gap-2 sm:gap-4">
          {/* Auth buttons - Visible on all devices */}
          <Link href="/login">
            <Button
              variant="outline"
              className="border-white px-3 py-2 xl:py-6 text-[8px] font-bold text-white uppercase hover:bg-white hover:text-black sm:px-6 sm:text-2xl xl:text-3xl"
            >
              Login
            </Button>
          </Link>
          <Link href="/join">
            <Button className="bg-[#FF003D] px-3 py-2 xl:py-6 text-[8px] font-bold text-white uppercase transition hover:bg-[#e60036] sm:px-6 sm:text-2xl xl:text-3xl">
              Join Now
            </Button>
          </Link>

          {/* Mobile menu trigger */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="ml-2 text-white lg:hidden"
              >
                <List size={28} />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72 sm:w-96">
              <div className="mb-6 flex items-center justify-between">
                <SheetTitle>Menu</SheetTitle>
              </div>
              <nav className="flex flex-col gap-5">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-3 text-xl font-medium text-white hover:text-[#c19652]"
                  >
                    {React.cloneElement(item.icon, { size: 28 })}
                    {item.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* Bottom nav */}
      <nav className="hidden items-center justify-center gap-12 bg-[#2C2C2C] py-4 lg:flex">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="flex flex-col items-center text-xl font-semibold text-white uppercase transition hover:text-[#c19652]"
          >
            {item.icon}
            <span className="mt-1">{item.label}</span>
          </Link>
        ))}
      </nav>
    </header>
  )
}
