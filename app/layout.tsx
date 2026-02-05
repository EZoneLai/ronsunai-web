import React from "react"
import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display, Noto_Serif_TC, Cormorant_Garamond } from 'next/font/google'
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

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ['300', '400', '600', '700'],
  variable: '--font-cormorant',
})

const notoSerifTC = Noto_Serif_TC({
  subsets: ["latin"],
  weight: ['300', '400', '600'],
  variable: '--font-noto-serif-tc',
})

export const metadata: Metadata = {
  title: 'RonsunAI - Ancient Wisdom for the Soul, Future Tech for the World',
  description: 'From AI-driven decisions to sustainable trade. RonsunAI is your vessel for balance. wismth AI, 大健康貿易, and ESG Consulting.',
  generator: 'v0.app',
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
      <body className={`${inter.variable} ${playfair.variable} ${cormorant.variable} ${notoSerifTC.variable} font-sans antialiased bg-[#F5F5F0] selection:bg-[#C59D5F] selection:text-white`}>
        <GlobalFilters />
        {children}
      </body>
    </html>
  )
}
