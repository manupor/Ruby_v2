// src/app/layout.tsx

import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

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
  title: 'Rubywager.com',
  description: 'Ruby wager description goes here...',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`dark ${geistSans.variable} ${geistMono.variable} ${fontThunder.variable} antialiased`}
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
