'use client'

import * as React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetTitle,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet'
import {
  List,
  X,
  Football,
  Horse,
  Spade,
  Tag,
  Bank,
  Article,
  Info,
  Question,
} from '@phosphor-icons/react'

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)

  const navItems = [
    { href: '/sportsbook', label: 'Sportsbook', icon: <Football color={'#AAA'} /> },
    { href: '/racebook', label: 'Racebook', icon: <Horse color={'#AAA'} /> },
    { href: '/casino', label: 'Casino', icon: <Spade color={'#AAA'} /> },
    { href: '/promotions', label: 'Promotions', icon: <Tag color={'#AAA'} /> },
    { href: '/banking', label: 'Banking', icon: <Bank color={'#AAA'} /> },
    { href: '/rules', label: 'Rules', icon: <Article color={'#AAA'} /> },
    { href: '/help', label: 'Help', icon: <Info color={'#AAA'} /> },
  ]

  return (
    <>
      <div className="sticky top-0 z-50 bg-background shadow-md">
        <header className="w-full">
          {/* TOP BAR DESKTOP */}
          <div className="hidden lg:flex justify-between items-center w-full max-w-7xl mx-auto px-4 py-4">
            {/* Logo grande solo en desktop */}
            <Link href="/" className="flex items-center">
              <Image
                src="/Ruby-Wager-Logo.png"
                alt="RubyWager Logo"
                width={260}
                height={70}
                className="object-contain hidden lg:block"
                priority
              />
            </Link>

            {/* Desktop buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <Link href="/join">
                <Button
                  variant="brandDark"
                  className="font-black px-6 py-3 text-base tracking-wider uppercase"
                >
                  Join Now
                </Button>
              </Link>
              <Link href="/login">
                <Button
                  variant="default"
                  className="font-black px-6 py-3 text-base tracking-wider uppercase"
                >
                  Login
                </Button>
              </Link>
            </div>
          </div>

          {/* NAV MENU DESKTOP */}
          <div className="max-w-7xl mx-auto hidden lg:block px-4 pb-4">
            <NavigationMenu className="block w-full">
              <NavigationMenuList className="justify-between">
                {navItems.map((item) => (
                  <NavigationMenuItem key={item.href}>
                    <Link href={item.href} legacyBehavior passHref>
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        <span className="mr-2">{item.icon}</span>
                        <span>{item.label}</span>
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* MOBILE NAVIGATION */}
          <div className="flex items-center justify-between max-w-7xl mx-auto px-4 pb-4 lg:hidden">
            {/* Logo pequeño solo en mobile */}
            <Link href="/" className="flex items-center">
              <Image
                src="/Ruby-Wager-Logo.png"
                alt="RubyWager Logo"
                width={160}
                height={44}
                className="block lg:hidden"
                priority
              />
            </Link>

            <div className="flex items-center gap-2">
              <Link href="/login">
                <Button
                  variant="outline"
                  size="sm"
                  className="text-[10px] font-bold uppercase px-3 py-1"
                >
                  Login
                </Button>
              </Link>
              <Link href="/join">
                <Button
                  variant="brandDark"
                  size="sm"
                  className="text-[10px] font-bold uppercase px-3 py-1"
                >
                  Join Now
                </Button>
              </Link>

              {/* Mobile menu button */}
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button variant="outline" size="icon" className="h-[36px] w-[36px]">
                    <List color="white" className="h-5 w-5" />
                    <span className="sr-only">Toggle menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[280px] sm:w-[350px]">
                  <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                  <div className="flex h-full flex-col p-5">
                    <div className="flex justify-end">
                      <Button variant="outline" size="icon" onClick={() => setIsOpen(false)}>
                        <X size={24} />
                        <span className="sr-only">Close menu</span>
                      </Button>
                    </div>

                    <nav className="mt-8 flex flex-col gap-4">
                      {navItems.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="bg-background hover:bg-accent flex items-center rounded-md px-2 py-2 text-lg font-medium transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          <span className="mr-2">{item.icon}</span>
                          <span>{item.label}</span>
                        </Link>
                      ))}
                    </nav>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </header>
      </div>

      {/* FLOATING HELP BUTTON */}
      <Link
        href="/help"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-brand px-4 py-3 text-white shadow-lg hover:bg-brand-dark transition"
      >
        <Question size={20} weight="bold" />
        Help
      </Link>
    </>
  )
}
