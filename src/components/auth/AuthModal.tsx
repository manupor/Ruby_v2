'use client'

import { Button } from '../ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../ui/dialog'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import { useState } from 'react'

interface AuthModalProps {
  isOpen: boolean
  onClose: () => void
  initialTab?: 'login' | 'register'
}

export default function AuthModal({
  isOpen,
  onClose,
  initialTab = 'login',
}: AuthModalProps) {
  const [activeTab, setActiveTab] = useState<string>(initialTab)

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-h-[90vh] overflow-y-auto border border-neutral-800 bg-black sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-bold text-white">
            {activeTab === 'login' ? 'Login to Ruby Wager' : 'Join Ruby Wager'}
          </DialogTitle>
        </DialogHeader>

        <div className="mt-6 mb-8 w-full">
          <div className="mx-auto flex rounded-full bg-[#222222] p-1">
            <button
              onClick={() => setActiveTab('login')}
              className={`w-1/2 rounded-full px-6 py-2 text-center text-sm font-medium transition-all duration-200 ${
                activeTab === 'login'
                  ? 'bg-[#FF003D] text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Login
            </button>
            <button
              onClick={() => setActiveTab('register')}
              className={`w-1/2 rounded-full px-6 py-2 text-center text-sm font-medium transition-all duration-200 ${
                activeTab === 'register'
                  ? 'bg-[#FF003D] text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Join Now
            </button>
          </div>

          {/* Login Form */}
          {activeTab === 'login' && (
            <div className="mt-8 space-y-6">
              <form
                id="login"
                action="https://wager.rubywager.com/redirectlogin.php"
                method="post"
                className="space-y-6"
              >
                <div className="space-y-2">
                  <Label
                    htmlFor="username"
                    className="text-sm font-medium text-white"
                  >
                    Username
                  </Label>
                  <Input
                    id="username"
                    name="username"
                    type="text"
                    required
                    className="w-full rounded-md border border-neutral-700 bg-[#1b1b1b] px-4 py-3 text-white placeholder-gray-500 focus:border-[#c19652] focus:ring-1 focus:ring-[#c19652] focus:outline-none"
                    placeholder="Enter your username"
                  />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="password"
                    className="text-sm font-medium text-white"
                  >
                    Password
                  </Label>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    required
                    className="w-full rounded-md border border-neutral-700 bg-[#1b1b1b] px-4 py-3 text-white placeholder-gray-500 focus:border-[#c19652] focus:ring-1 focus:ring-[#c19652] focus:outline-none"
                    placeholder="Enter your password"
                  />
                </div>

                <input
                  type="hidden"
                  name="multiaccount"
                  id="multiaccount"
                  value="1"
                />

                <div className="space-y-4">
                  <Button
                    type="submit"
                    className="w-full rounded-md bg-[#FF003D] py-3 text-lg font-bold text-white uppercase transition hover:bg-[#e60036]"
                  >
                    Login
                  </Button>
                </div>
              </form>
            </div>
          )}

          {/* Register Form */}
          {activeTab === 'register' && (
            <div className="mt-8 space-y-3">
              <form
                id="create-account"
                action="https://wager.rubywager.com/createAccount.php"
                method="post"
                className="space-y-3"
              >
                <div className="space-y-2">
                  <Label
                    htmlFor="firstname"
                    className="text-sm font-medium text-white"
                  >
                    Name
                  </Label>
                  <Input
                    id="firstname"
                    name="firstname"
                    type="text"
                    maxLength={30}
                    required
                    className="w-full rounded-md border border-neutral-700 bg-[#1b1b1b] px-4 py-3 text-white placeholder-gray-500 focus:border-[#c19652] focus:ring-1 focus:ring-[#c19652] focus:outline-none"
                    placeholder="First Name"
                  />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="lastname"
                    className="text-sm font-medium text-white"
                  >
                    Last Name
                  </Label>
                  <Input
                    id="lastname"
                    name="lastname"
                    type="text"
                    maxLength={30}
                    required
                    className="w-full rounded-md border border-neutral-700 bg-[#1b1b1b] px-4 py-3 text-white placeholder-gray-500 focus:border-[#c19652] focus:ring-1 focus:ring-[#c19652] focus:outline-none"
                    placeholder="Last Name"
                  />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="email"
                    className="text-sm font-medium text-white"
                  >
                    Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full rounded-md border border-neutral-700 bg-[#1b1b1b] px-4 py-3 text-white placeholder-gray-500 focus:border-[#c19652] focus:ring-1 focus:ring-[#c19652] focus:outline-none"
                    placeholder="Email"
                  />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="email2"
                    className="text-sm font-medium text-white"
                  >
                    Confirm Email
                  </Label>
                  <Input
                    id="email2"
                    name="email2"
                    type="email"
                    required
                    className="w-full rounded-md border border-neutral-700 bg-[#1b1b1b] px-4 py-3 text-white placeholder-gray-500 focus:border-[#c19652] focus:ring-1 focus:ring-[#c19652] focus:outline-none"
                    placeholder="Confirm Email"
                  />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="password-reg"
                    className="text-sm font-medium text-white"
                  >
                    Password
                  </Label>
                  <Input
                    id="password-reg"
                    name="password"
                    type="password"
                    maxLength={10}
                    required
                    className="w-full rounded-md border border-neutral-700 bg-[#1b1b1b] px-4 py-3 text-white placeholder-gray-500 focus:border-[#c19652] focus:ring-1 focus:ring-[#c19652] focus:outline-none"
                    placeholder="Password (10 characters max)"
                  />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="password2"
                    className="text-sm font-medium text-white"
                  >
                    Confirm Password
                  </Label>
                  <Input
                    id="password2"
                    name="password2"
                    type="password"
                    maxLength={10}
                    required
                    className="w-full rounded-md border border-neutral-700 bg-[#1b1b1b] px-4 py-3 text-white placeholder-gray-500 focus:border-[#c19652] focus:ring-1 focus:ring-[#c19652] focus:outline-none"
                    placeholder="Repeat Password"
                  />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="phone"
                    className="text-sm font-medium text-white"
                  >
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    className="w-full rounded-md border border-neutral-700 bg-[#1b1b1b] px-4 py-3 text-white placeholder-gray-500 focus:border-[#c19652] focus:ring-1 focus:ring-[#c19652] focus:outline-none"
                    placeholder="Phone Number"
                  />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="promo"
                    className="text-sm font-medium text-white"
                  >
                    Promo Code (Optional)
                  </Label>
                  <Input
                    id="promo"
                    name="promo"
                    type="text"
                    className="w-full rounded-md border border-neutral-700 bg-[#1b1b1b] px-4 py-3 text-white placeholder-gray-500 focus:border-[#c19652] focus:ring-1 focus:ring-[#c19652] focus:outline-none"
                    placeholder="Promo Code"
                  />
                </div>

                <div className="mt-2 text-xs text-gray-400">
                  <p className="leading-tight">
                    NOTE: Robotic or automatic wagering platforms, wise play and
                    past post wagers or any other violation or misuse of our
                    promotions is not allowed. Any account that has been
                    determined to have violated these terms may risk account
                    closure. Multiple accounts created through individuals
                    and/or syndicates or with matching IP addresses will also be
                    flagged.
                  </p>
                  <p className="mt-1 leading-tight">
                    By entering your number, you agree to receive mobile
                    messages. Message frequency varies, Message (Reply STOP to
                    unsubscribe).
                  </p>
                </div>

                <div className="pt-2">
                  <Button
                    type="submit"
                    className="w-full rounded-md bg-[#FF003D] py-3 text-lg font-bold text-white uppercase transition hover:bg-[#e60036]"
                  >
                    Register
                  </Button>
                </div>
              </form>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
