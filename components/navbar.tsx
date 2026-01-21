"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = [
    { name: "哲學", href: "/#philosophy" },
    { name: "服務", href: "/#services" },
    { name: "創辦人", href: "/#founder" },
    { name: "聯絡", href: "/contact" }
  ]

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

        {/* 桌面選單 */}
        <div className="hidden md:flex items-center gap-12">
          {navLinks.map((item) => (
            <Link 
              key={item.name} 
              href={item.href} 
              className="text-sm font-medium text-[#1A1A1A]/60 hover:text-[#1A1A1A] tracking-[0.2em] transition-colors relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-0 after:h-px after:bg-[#C59D5F] after:transition-all hover:after:w-full"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* 手機 menu 按鈕 */}
        <button className="md:hidden text-[#1A1A1A]" onClick={() => setMenuOpen(true)} aria-label="Open menu">
          <Menu strokeWidth={1} />
        </button>
      </div>

      {/* 手機側邊選單 */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex">
          <div className="bg-[#F5F5F0] w-4/5 max-w-xs h-full shadow-xl p-8 flex flex-col gap-8 animate-slide-in-left">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-[#1A1A1A] rounded-sm text-[#F5F5F0] flex items-center justify-center font-serif font-bold shadow-sm">R</div>
              <span className="font-serif text-2xl text-[#1A1A1A]">Ronsun<span className="text-[#C59D5F]">.</span></span>
            </div>
            {navLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-lg font-medium text-[#1A1A1A] py-2 px-2 rounded hover:bg-[#C59D5F]/10 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
          {/* 點 backdrop 關閉 */}
          <div className="flex-1" onClick={() => setMenuOpen(false)} />
        </div>
      )}
    </nav>
  )
}
