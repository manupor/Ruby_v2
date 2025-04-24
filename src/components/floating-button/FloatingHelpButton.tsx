'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { HelpCircle } from 'lucide-react'

const FloatingHelpButton = () => {
  const [isVisible, setIsVisible] = useState(false)

  // Show the button after scrolling down a bit
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    // Show button after a delay even if no scroll
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 3000)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      clearTimeout(timer)
    }
  }, [])

  return (
    <div
      className={`fixed right-6 bottom-6 z-50 transition-all duration-300 ease-in-out ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}
    >
      <Link href="/help">
        <button
          className="flex items-center justify-center gap-1 rounded-full bg-[#FF003D] px-4 py-2 text-white shadow-lg transition-colors duration-200 hover:bg-[#e0002d] cursor-pointer"
          aria-label="Help"
        >
          <HelpCircle size={18} />
          <span className="text-sm font-medium">Help</span>
        </button>
      </Link>
    </div>
  )
}

export default FloatingHelpButton
