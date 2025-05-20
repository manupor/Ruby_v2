'use client'

import AuthModal from '@/components/auth/AuthModal'
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
  const [authModalState, setAuthModalState] = React.useState<{
    isOpen: boolean
    activeTab: 'login' | 'register'
  }>({
    isOpen: false,
    activeTab: 'login',
  })

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

  const footerLinks = [
    { href: '/help', label: 'HELP' },
    { href: '/about', label: 'ABOUT US' },
    { href: '/privacy-policy', label: 'PRIVACY POLICY' },
    { href: '/rules', label: 'RULES & REGULATIONS' },
    { href: '/terms-conditions', label: 'TERMS & CONDITIONS' },
  ]

  const handleLoginClick = (e: React.MouseEvent) => {
    e.preventDefault()
    setAuthModalState({
      isOpen: true,
      activeTab: 'login',
    })
  }

  const handleJoinClick = (e: React.MouseEvent) => {
    e.preventDefault()
    setAuthModalState({
      isOpen: true,
      activeTab: 'register',
    })
  }

  const closeAuthModal = () => {
    setAuthModalState((prev) => ({
      ...prev,
      isOpen: false,
    }))
  }

  return (
    <>
      <header className="sticky top-0 z-50">
        {/* Top section - color only applied locally */}
        <div className="flex items-center justify-between border-b border-neutral-800 bg-black px-4 py-4 shadow-md sm:px-6">
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
              src="/you_play_we_pay.svg"
              alt="RubyWager Logo"
              width={220}
              height={80}
              priority
              className="hidden w-[130px] sm:block sm:w-[220px] xl:w-[280px]"
            />
          </Link>

          <div className="flex items-center gap-2 sm:gap-4">
            {/* Auth buttons - Visible on all devices */}
            <Button
              onClick={handleLoginClick}
              variant="outline"
              className="border-white px-3 py-2 text-[12px] font-bold text-white uppercase hover:bg-white hover:text-black sm:px-6 sm:text-2xl xl:py-6 xl:text-3xl"
            >
              Login
            </Button>
            <Button
              onClick={handleJoinClick}
              className="bg-[#FF003D] px-3 py-2 text-[12px] font-bold text-white uppercase transition hover:bg-[#e60036] sm:px-6 sm:text-2xl xl:py-6 xl:text-3xl"
            >
              Join Now
            </Button>

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
              <SheetContent
                side="right"
                className="w-full max-w-[100vw] overflow-y-auto border-none bg-black p-0"
              >
                {/* Header with login buttons */}
                <div className="mr-10 flex items-center justify-end p-4">
                  <div className="flex gap-2">
                    <Button
                      onClick={(e) => {
                        e.preventDefault()
                        setIsOpen(false)
                        setAuthModalState({
                          isOpen: true,
                          activeTab: 'login',
                        })
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
                        setAuthModalState({
                          isOpen: true,
                          activeTab: 'register',
                        })
                      }}
                      className="bg-[#FF003D] px-3 py-2 text-[12px] font-bold text-white uppercase transition hover:bg-[#e60036] sm:px-6 sm:text-2xl xl:py-6 xl:text-3xl"
                    >
                      Join Now
                    </Button>
                  </div>
                </div>

                {/* Why Join? section */}
                <Link
                  href="/why-ruby"
                  className="block w-full"
                  onClick={() => setIsOpen(false)}
                >
                  <div className="m-4 rounded-xl bg-[#1b1b1b] p-4 text-center">
                    <span className="text-xl font-bold text-white">
                      WHY JOIN?
                    </span>
                  </div>
                </Link>

                {/* Main nav grid */}
                <div className="grid grid-cols-2 gap-4 p-4">
                  {navItems.map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                    >
                      <div className="flex flex-col items-center justify-center rounded-xl bg-[#1b1b1b] p-6 text-center text-white transition-all hover:bg-[#3C3C3C]">
                        <div className="mb-2">{item.icon}</div>
                        <span className="font-semibold uppercase">
                          {item.label}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>

                {/* Divider */}
                <div className="px-4">
                  <div className="h-px w-full bg-[#333333]"></div>
                </div>

                {/* Footer links */}
                <div className="p-4">
                  {footerLinks.map((link, index) => (
                    <Link
                      key={index}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                    >
                      <div className="border-b border-[#333333] py-4 text-center">
                        <span className="text-sm font-medium text-white">
                          {link.label}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>

                {/* Social media icons */}
                <div className="flex justify-center gap-8 p-6">
                  <Link
                    href="https://www.instagram.com/betwithruby"
                    target="_blank"
                    aria-label="Instagram"
                    className="text-white"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="white"
                    >
                      <path d="M12 2.16C15.2 2.16 15.58 2.17 16.82 2.22C18.02 2.27 18.71 2.47 19.19 2.64C19.82 2.86 20.27 3.14 20.74 3.61C21.21 4.08 21.49 4.53 21.71 5.16C21.88 5.63 22.08 6.33 22.13 7.53C22.18 8.77 22.19 9.15 22.19 12.35C22.19 15.55 22.18 15.93 22.13 17.17C22.08 18.37 21.88 19.06 21.71 19.54C21.49 20.17 21.21 20.62 20.74 21.09C20.27 21.56 19.82 21.84 19.19 22.06C18.72 22.23 18.02 22.43 16.82 22.48C15.58 22.53 15.2 22.54 12 22.54C8.8 22.54 8.42 22.53 7.18 22.48C5.98 22.43 5.29 22.23 4.81 22.06C4.18 21.84 3.73 21.56 3.26 21.09C2.79 20.62 2.51 20.17 2.29 19.54C2.12 19.07 1.92 18.37 1.87 17.17C1.82 15.93 1.81 15.55 1.81 12.35C1.81 9.15 1.82 8.77 1.87 7.53C1.92 6.33 2.12 5.64 2.29 5.16C2.51 4.53 2.79 4.08 3.26 3.61C3.73 3.14 4.18 2.86 4.81 2.64C5.28 2.47 5.98 2.27 7.18 2.22C8.42 2.17 8.8 2.16 12 2.16ZM12 0C8.74 0 8.33 0.01 7.07 0.06C5.82 0.11 4.95 0.32 4.19 0.6C3.41 0.9 2.74 1.29 2.08 1.95C1.42 2.61 1.03 3.28 0.73 4.06C0.45 4.82 0.24 5.69 0.19 6.94C0.14 8.2 0.13 8.61 0.13 11.87C0.13 15.13 0.14 15.54 0.19 16.8C0.24 18.05 0.45 18.92 0.73 19.68C1.03 20.46 1.42 21.13 2.08 21.79C2.74 22.45 3.41 22.84 4.19 23.14C4.95 23.42 5.82 23.63 7.07 23.68C8.33 23.73 8.74 23.74 12 23.74C15.26 23.74 15.67 23.73 16.93 23.68C18.18 23.63 19.05 23.42 19.81 23.14C20.59 22.84 21.26 22.45 21.92 21.79C22.58 21.13 22.97 20.46 23.27 19.68C23.55 18.92 23.76 18.05 23.81 16.8C23.86 15.54 23.87 15.13 23.87 11.87C23.87 8.61 23.86 8.2 23.81 6.94C23.76 5.69 23.55 4.82 23.27 4.06C22.97 3.28 22.58 2.61 21.92 1.95C21.26 1.29 20.59 0.9 19.81 0.6C19.05 0.32 18.18 0.11 16.93 0.06C15.67 0.01 15.26 0 12 0Z" />
                      <path d="M12 5.84C8.6 5.84 5.84 8.6 5.84 12C5.84 15.4 8.6 18.16 12 18.16C15.4 18.16 18.16 15.4 18.16 12C18.16 8.6 15.4 5.84 12 5.84ZM12 16C9.79 16 8 14.21 8 12C8 9.79 9.79 8 12 8C14.21 8 16 9.79 16 12C16 14.21 14.21 16 12 16Z" />
                      <path d="M19.8 5.59C19.8 6.39 19.15 7.04 18.35 7.04C17.55 7.04 16.9 6.39 16.9 5.59C16.9 4.79 17.55 4.14 18.35 4.14C19.15 4.14 19.8 4.79 19.8 5.59Z" />
                    </svg>
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        {/* Bottom nav - Only visible on desktop */}
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

      {/* Auth Modal */}
      <AuthModal
        isOpen={authModalState.isOpen}
        onClose={closeAuthModal}
        initialTab={authModalState.activeTab}
      />
    </>
  )
}
