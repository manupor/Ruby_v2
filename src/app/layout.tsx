// src/app/layout.tsx

import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import './_client-recovery'
import { roboto } from './fonts'

import Header from '@/components/header/Header'
import Footer from '@/components/footer/Footer'
import FloatingHelpButton from '@/components/floating-button/FloatingHelpButton'
import { AuthProvider } from '@/context/AuthContext'

// Google Fonts
const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

// ✅ Font Thunder: Ruta correcta dentro de /src/app/fonts
const fontThunder = localFont({
  src: './fonts/Thunder-VF.ttf',
  variable: '--font-thunder',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Ruby Wager - Online Sports Betting & Casino',
  description: 'Experience the thrill of online sports betting and casino games at Ruby Wager. Get exclusive bonuses, bet on your favorite sports, and play casino games.',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/logo-ruby.png', type: 'image/png', sizes: '192x192' },
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/Ruby-Wager-Logo-small.png', sizes: '180x180', type: 'image/png' },
      { url: '/logo-ruby.png', sizes: '192x192', type: 'image/png' },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`dark ${geistSans.variable} ${geistMono.variable} ${fontThunder.variable} ${roboto.variable} antialiased`}
      >
        <AuthProvider>
          <Header />
          <main role="main">{children}</main>
          <FloatingHelpButton />
          <Footer />
        </AuthProvider>
      </body>
    </html>
  )
}
