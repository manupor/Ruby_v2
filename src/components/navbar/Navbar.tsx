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
    { href: '/sportsbook', label: 'Sportsbook', icon: <Football color="#AAA" /> },
    { href: '/racebook', label: 'Racebook', icon: <Horse color="#AAA" /> },
    { href: '/casino', label: 'Casino', icon: <Spade color="#AAA" /> },
    { href: '/promotions', label: 'Promotions', icon: <Tag color="#AAA" /> },
    { href: '/banking', label: 'Banking', icon: <Bank color="#AAA" /> },
    { href: '/rules', label: 'Rules', icon: <Article color="#AAA" /> },
    { href: '/help', label: 'Help', icon: <Info color="#AAA" /> },
  ]

  return (
    <>
      <div className="sticky top-0 z-50 bg-background shadow-md">
        <header className="w-full">
          <div className="w-full max-w-7xl mx-auto flex items-center justify-between px-4 py-4 lg:px-8">
            {/* Logo grande */}
            <Link href="/" className="flex items-center">
              <Image
                src="/Ruby-Wager-Logo.png"
                alt="RubyWager Logo"
                width={230}
                height={65}
                className="object-contain hidden lg:block"
                priority
              />
              <Image
                src="/Ruby-Wager-Logo.png"
                alt="RubyWager Logo"
                width={140}
                height={40}
                className="object-contain block lg:hidden"
                priority
              />
            </Link>

            {/* NAVIGATION + BUTTONS (desktop) */}
            <div className="hidden lg:flex items-center justify-between flex-1 ml-8">
              <NavigationMenu className="w-full">
                <NavigationMenuList className="w-full justify-between">
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

              <div className="flex items-center gap-3 ml-6">
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

            {/* MOBILE RIGHT SIDE */}
            <div className="flex lg:hidden items-center gap-2">
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
                    <div className="mt-auto flex gap-2 pb-6">
                      <Button variant="brandDark" className="w-[50%]">Join Now</Button>
                      <Button variant="outline" className="w-[50%]">Login</Button>
                    </div>
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
