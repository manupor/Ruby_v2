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
  Question
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
      icon: <Football size={20} color="#c19652" />,
    },
    {
      href: '/racebook',
      label: 'Racebook',
      icon: <Horse size={20} color="#c19652" />,
    },
    {
      href: '/casino',
      label: 'Casino',
      icon: <Spade size={20} color="#c19652" />,
    },
    {
      href: '/promotions',
      label: 'Promotions',
      icon: <Tag size={20} color="#c19652" />,
    },
    {
      href: '/banking',
      label: 'Banking',
      icon: <Bank size={20} color="#c19652" />,
    },
    {
      href: '/about',
      label: 'About',
      icon: <Article size={20} color="#c19652" />,
    },
    {
      href: '/help',
      label: 'Help',
      icon: <Question size={20} color="#c19652" />,
    },
  ]

  return (
    <header className="bg-black text-white sticky top-0 z-50 shadow-md border-b border-zinc-800">
      {/* Top bar: logo + actions */}
      <div className="flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/logo-ruby.png"
            alt="RubyWager Logo"
            width={120}
            height={40}
            priority
          />
        </Link>

        {/* Desktop buttons */}
        <div className="hidden lg:flex items-center gap-4">
          <Link href="/join">
            <Button className="uppercase font-bold text-sm px-6 py-2">Join Now</Button>
          </Link>
          <Link href="/login">
            <Button variant="outline" className="uppercase font-bold text-sm px-6 py-2 border-white text-white hover:text-black hover:bg-white">
              Login
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="lg:hidden">
              <List size={24} />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-72 sm:w-96">
            <div className="flex items-center justify-between mb-4">
              <SheetTitle>Menu</SheetTitle>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
              >
                <X size={24} />
              </Button>
            </div>
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 text-lg font-medium hover:text-[#c19652] transition-colors duration-200"
                >
                  {item.icon}
                  {item.label}
                </Link>
              ))}
              <div className="mt-6 flex flex-col gap-2">
                <Link href="/join">
                  <Button className="w-full uppercase font-bold text-sm">Join Now</Button>
                </Link>
                <Link href="/login">
                  <Button variant="outline" className="w-full uppercase font-bold text-sm border-white text-white hover:text-black hover:bg-white">
                    Login
                  </Button>
                </Link>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>

      {/* Bottom navigation menu (tabs with icons) */}
      <nav className="hidden lg:flex items-center justify-center gap-10 py-3 bg-zinc-900 border-t border-zinc-800">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="flex items-center gap-2 text-sm font-semibold uppercase hover:text-[#c19652] transition-colors duration-200"
          >
            {item.icon}
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  )
}
