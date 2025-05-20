'use client'

import { Button } from '../ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../ui/dialog'
import { Input } from '../ui/input'
import { Label } from '../ui/label'

interface LoginModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function LoginModal({ isOpen, onClose }: LoginModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="border border-neutral-800 bg-black sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-bold text-white">
            Login to Ruby Wager
          </DialogTitle>
        </DialogHeader>

        <form
          id="login"
          action="https://wager.rubywager.com/redirectlogin.php"
          method="post"
          className="mt-6 space-y-6"
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
            <Button className="w-full rounded-md bg-[#FF003D] py-3 text-lg font-bold text-white uppercase transition hover:bg-[#e60036]">
              Login
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
