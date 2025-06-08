'use client'

import { useAuth } from '@/context/AuthContext'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import {
  Bank,
  Football,
  Horse,
  List,
  Question,
  Spade,
  Tag,
} from '@phosphor-icons/react'
import Image from 'next/image'
import Link from 'next/link'
import * as React from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)
  const { openLogin, openRegister } = useAuth()

  const navItems = [
    { href: '/sportsbook', label: 'Sportsbook', icon: <Football size={32} color="#c19652" /> },
    { href: '/racebook', label: 'Racebook', icon: <Horse size={32} color="#c19652" /> },
    { href: '/casino', label: 'Casino', icon: <Spade size={32} color="#c19652" /> },
    { href: '/promotions', label: 'Promotions', icon: <Tag size={32} color="#c19652" /> },
    { href: '/banking', label: 'Banking', icon: <Bank size={32} color="#c19652" /> },
    { href: '/help', label: 'Help', icon: <Question size={32} color="#c19652" /> },
  ]

  const footerLinks = [
    { href: '/help', label: 'HELP' },
    { href: '/about', label: 'ABOUT US' },
    { href: '/privacy-policy', label: 'PRIVACY POLICY' },
    { href: '/rules', label: 'RULES & REGULATIONS' },
    { href: '/terms-conditions', label: 'TERMS & CONDITIONS' },
  ]

  return (
    <header className="sticky top-0 z-50">
      <div className="flex items-center justify-between border-b border-neutral-800 bg-black px-4 py-4 shadow-md sm:px-6">
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
            src="/you_play_we_pay.svg"
            alt="RubyWager Logo"
            width={220}
            height={80}
            priority
            className="hidden w-[130px] sm:block sm:w-[220px] xl:w-[280px]"
          />
        </Link>

        <div className="flex items-center gap-2 sm:gap-4">
          <Button
            onClick={(e) => {
              e.preventDefault()
              openLogin()
            }}
            variant="outline"
            className="border-white px-3 py-2 text-[12px] font-bold text-white uppercase hover:bg-white hover:text-black sm:px-6 sm:text-2xl xl:py-6 xl:text-3xl"
          >
            Login
          </Button>
          <Button
            onClick={(e) => {
              e.preventDefault()
              openRegister()
            }}
            className="bg-[#FF003D] px-3 py-2 text-[12px] font-bold text-white uppercase transition hover:bg-[#e60036] sm:px-6 sm:text-2xl xl:py-6 xl:text-3xl"
          >
            Join Now
          </Button>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button className="ml-2 bg-[#FF003D] p-2 lg:hidden">
                <List size={36} color="#FFFFFF" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-full max-w-[100vw] overflow-y-auto border-none bg-black p-0"
            >
              {/* Top section with logo and buttons */}
              <div className="flex items-center justify-between px-4 pt-4">
                <Link href="/" onClick={() => setIsOpen(false)}>
                  <Image
                    src="/logo-ruby.png"
                    alt="RubyWager Logo"
                    width={150}
                    height={40}
                    className="w-[120px] sm:w-[150px]"
                    priority
                  />
                </Link>
                <div className="flex items-center gap-2">
                  <Button
                    onClick={(e) => {
                      e.preventDefault()
                      setIsOpen(false)
                      openLogin()
                    }}
                    variant="outline"
                    className="border-white px-3 py-2 text-[12px] font-bold text-white uppercase hover:bg-white hover:text-black sm:px-6 sm:text-2xl xl:py-6 xl:text-3xl"
                  >
                    Login
                  </Button>
                  <Button
                    onClick={(e) => {
                      e.preventDefault()
                      setIsOpen(false)
                      openRegister()
                    }}
                    className="bg-[#FF003D] px-3 py-2 text-[12px] font-bold text-white uppercase transition hover:bg-[#e60036] sm:px-6 sm:text-2xl xl:py-6 xl:text-3xl"
                  >
                    Join Now
                  </Button>
                </div>
              </div>

              {/* Why Join */}
              <Link href="/why-ruby" onClick={() => setIsOpen(false)}>
                <div className="m-4 rounded-xl bg-[#1b1b1b] p-4 text-center">
                  <span className="text-xl font-bold text-white">WHY JOIN?</span>
                </div>
              </Link>

              {/* Grid menu */}
              <div className="grid grid-cols-2 gap-4 p-4">
                {navItems.map((item, index) => (
                  <Link key={index} href={item.href} onClick={() => setIsOpen(false)}>
                    <div className="flex flex-col items-center justify-center rounded-xl bg-[#1b1b1b] p-6 text-center text-white transition-all hover:bg-[#3C3C3C]">
                      <div className="mb-2">{item.icon}</div>
                      <span className="font-semibold uppercase">{item.label}</span>
                    </div>
                  </Link>
                ))}
              </div>

              <div className="px-4">
                <div className="h-px w-full bg-[#333333]"></div>
              </div>

              <div className="p-4">
                {footerLinks.map((link, index) => (
                  <Link key={index} href={link.href} onClick={() => setIsOpen(false)}>
                    <div className="border-b border-[#333333] py-4 text-center">
                      <span className="text-sm font-medium text-white">{link.label}</span>
                    </div>
                  </Link>
                ))}
              </div>

              <div className="flex justify-center gap-8 p-6">
                <Link
                  href="https://www.instagram.com/betwithruby"
                  target="_blank"
                  aria-label="Instagram"
                  className="text-white"
                >
                  {/* Aquí podés mantener el SVG de Instagram o reemplazarlo por un icono externo */}
                  <svg width="24" height="24" fill="white" viewBox="0 0 24 24">
                    <path d="M12 2.2c3.2 0 3.6 0 4.8.1 1.2.1 1.8.3 2.3.5.6.2 1 .5 1.5 1 .5.5.8.9 1 1.5.2.5.4 1.1.5 2.3.1 1.2.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 1.2-.3 1.8-.5 2.3-.2.6-.5 1-.9 1.5-.5.5-.9.8-1.5 1-.5.2-1.1.4-2.3.5-1.2.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-1.2-.1-1.8-.3-2.3-.5-.6-.2-1-.5-1.5-1-.5-.5-.8-.9-1-1.5-.2-.5-.4-1.1-.5-2.3C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.8c.1-1.2.3-1.8.5-2.3.2-.6.5-1 1-1.5.5-.5.9-.8 1.5-1 .5-.2 1.1-.4 2.3-.5C8.4 2.2 8.8 2.2 12 2.2zm0 1.8c-3.1 0-3.5 0-4.7.1-1 .1-1.6.2-2 .4-.5.2-.8.4-1.2.8-.4.4-.6.7-.8 1.2-.2.4-.3 1-.4 2-.1 1.2-.1 1.6-.1 4.7s0 3.5.1 4.7c.1 1 .2 1.6.4 2 .2.5.4.8.8 1.2.4.4.7.6 1.2.8.4.2 1 .3 2 .4 1.2.1 1.6.1 4.7.1s3.5 0 4.7-.1c1-.1 1.6-.2 2-.4.5-.2.8-.4 1.2-.8.4-.4.6-.7.8-1.2.2-.4.3-1 .4-2 .1-1.2.1-1.6.1-4.7s0-3.5-.1-4.7c-.1-1-.2-1.6-.4-2-.2-.5-.4-.8-.8-1.2-.4-.4-.7-.6-1.2-.8-.4-.2-1-.3-2-.4-1.2-.1-1.6-.1-4.7-.1zM12 6.3A5.7 5.7 0 1 0 17.7 12 5.7 5.7 0 0 0 12 6.3zm0 9.4A3.7 3.7 0 1 1 15.7 12 3.7 3.7 0 0 1 12 15.7zm5.9-9.9a1.3 1.3 0 1 1-1.3-1.3 1.3 1.3 0 0 1 1.3 1.3z" />
                  </svg>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* Desktop nav */}
      <nav className="hidden items-center justify-center gap-12 bg-[#1b1b1b] py-4 lg:flex">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="flex flex-col items-center text-xl font-semibold text-white uppercase transition hover:text-[#c19652]"
          >
            {React.cloneElement(item.icon, { color: '#c19652' })}
            <span className="mt-1">{item.label}</span>
          </Link>
        ))}
      </nav>
    </header>
  )
}
