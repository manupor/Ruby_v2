import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

import Header from '@/components/header/Header'
import Footer from '@/components/footer/Footer'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

const fontThunder = localFont({
  src: '../../public/fonts/Thunder-VF.ttf',
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
        <Header />
        <main role="main">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
