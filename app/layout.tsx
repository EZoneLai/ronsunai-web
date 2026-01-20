import React from "react"
import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display, Noto_Serif_TC } from 'next/font/google'
import './globals.css'
import { GlobalFilters } from '@/components/global-filters'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
})

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair',
})

const notoSerifTC = Noto_Serif_TC({
  subsets: ["latin"],
  weight: ['300', '400', '600'],
  variable: '--font-noto-serif-tc',
})

export const metadata: Metadata = {
  title: 'RonsunAI - Ancient Wisdom for the Soul, Future Tech for the World',
  description: 'From AI-driven decisions to sustainable trade. RonsunAI is your vessel for balance. Wismath AI, Wellness Trade, and ESG Consulting.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#F5F5F0',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-TW">
      <body className={`${inter.variable} ${playfair.variable} ${notoSerifTC.variable} font-sans antialiased bg-[#F5F5F0] selection:bg-[#C59D5F] selection:text-white`}>
        <GlobalFilters />
        {children}
      </body>
    </html>
  )
}
