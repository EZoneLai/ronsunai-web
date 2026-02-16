"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [lawOpen, setLawOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
      isScrolled ? 'bg-[#F5F5F0]/30 py-4 border-b border-[#1A1A1A]/5 backdrop-blur-sm' : 'bg-transparent py-8'
    }`}>
      <div className="mx-auto max-w-screen-xl px-6 md:px-12 flex items-center justify-between">
        <Link href="/" className="group flex items-center gap-4">
          {/* Logo - 方形簡潔設計 */}
          <div className="w-8 h-8 bg-[#1A1A1A] group-hover:bg-[#C59D5F] transition-colors duration-500 rounded-sm text-[#F5F5F0] flex items-center justify-center font-serif font-bold shadow-sm">
            R
          </div>
          <h2 className="font-serif text-3xl text-[#1A1A1A] group-hover:text-[#C59D5F] transition-colors duration-500">Ronsun<span className="text-[#C59D5F]">.</span></h2>
        </Link>
        
        <div className="hidden md:flex items-center gap-12">
          {/* 主選單 */}
          {[
            { name: "wismth", href: "https://www.wismath.work", external: true },
            { name: "策研", href: "/ceyan" },
            { name: "大健康", href: "/wellness" },
            { name: "ESG顧問", href: "/esg" }
          ].map((item) => (
            item.external ? (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-[#1A1A1A]/60 hover:text-[#1A1A1A] tracking-[0.2em] transition-colors relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-0 after:h-px after:bg-[#C59D5F] after:transition-all hover:after:w-full"
              >
                {item.name}
              </a>
            ) : (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-[#1A1A1A]/60 hover:text-[#1A1A1A] tracking-[0.2em] transition-colors relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-0 after:h-px after:bg-[#C59D5F] after:transition-all hover:after:w-full"
              >
                {item.name}
              </Link>
            )
          ))}

          <Link href="/legal" className="text-sm font-medium text-[#1A1A1A]/60 hover:text-[#1A1A1A] tracking-[0.2em] transition-colors relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-0 after:h-px after:bg-[#C59D5F] after:transition-all hover:after:w-full">法律</Link>

          {/* 聯絡我們按鈕 */}
          <Link href="/contact" className="text-sm font-medium text-[#1A1A1A]/60 hover:text-[#1A1A1A] tracking-[0.2em] transition-colors relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-0 after:h-px after:bg-[#C59D5F] after:transition-all hover:after:w-full">聯絡我們</Link>
        </div>
        
        <button className="md:hidden text-[#1A1A1A]" onClick={() => setMobileOpen(!mobileOpen)}>
          <Menu strokeWidth={1} />
        </button>
        {/* 手機版選單 */}
        {mobileOpen && (
          <div className="fixed top-0 right-0 h-full z-40 bg-[#F5F5F0]/95 backdrop-blur flex flex-col items-center pt-24 gap-8 text-lg" style={{ width: '62vw', minWidth: '280px', maxWidth: '480px' }}>
            <a href="https://www.wismath.work" className="text-[#1A1A1A] font-medium" target="_blank" rel="noopener noreferrer" onClick={() => setMobileOpen(false)}>wismth</a>
            <Link href="/ceyan" className="text-[#1A1A1A] font-medium" onClick={() => setMobileOpen(false)}>策研</Link>
            <Link href="/wellness" className="text-[#1A1A1A] font-medium" onClick={() => setMobileOpen(false)}>大健康</Link>
            <Link href="/esg" className="text-[#1A1A1A] font-medium" onClick={() => setMobileOpen(false)}>ESG顧問</Link>
            <Link href="/legal" className="text-[#1A1A1A] font-medium" onClick={() => setMobileOpen(false)}>法律</Link>
            <Link href="/contact" className="text-[#1A1A1A] font-medium" onClick={() => setMobileOpen(false)}>聯絡我們</Link>
            <button className="absolute top-6 right-6 text-2xl text-[#1A1A1A]" onClick={() => setMobileOpen(false)}>&times;</button>
          </div>
        )}
      </div>
    </nav>
  )
}
