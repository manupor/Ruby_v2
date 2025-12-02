// Optimized font loading using next/font
// Roboto is preloaded automatically with proper crossorigin and as="font" attributes
import { Roboto } from 'next/font/google'

export const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
  variable: '--font-roboto',
})
