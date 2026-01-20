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

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
      isScrolled ? 'bg-[#F5F5F0]/30 py-4 border-b border-[#1A1A1A]/5 backdrop-blur-sm' : 'bg-transparent py-8'
    }`}>
      <div className="mx-auto max-w-screen-xl px-6 md:px-12 flex items-center justify-between">
        <Link href="/" className="group flex items-center gap-4">
          {/* Logo - 方形簡潔設計 */}
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 transition-all duration-500">
            {/* 外框 - hover 時變金色 */}
            <rect 
              x="10" 
              y="10" 
              width="80" 
              height="80" 
              fill="none" 
              stroke="#1A1A1A" 
              strokeWidth="2"
              className="group-hover:stroke-[#C59D5F] transition-colors duration-500" 
            />
            
            {/* 中心 R 字母 - hover 時變金色 */}
            <text 
              x="50" 
              y="65" 
              fontFamily="serif" 
              fontSize="48" 
              fontWeight="bold" 
              fill="#1A1A1A"
              textAnchor="middle"
              className="group-hover:fill-[#C59D5F] transition-colors duration-500" 
            >
              R
            </text>
          </svg>
          <h2 className="font-serif text-3xl text-[#1A1A1A] group-hover:text-[#C59D5F] transition-colors duration-500">Ronsun<span className="text-[#C59D5F]">.</span></h2>
        </Link>
        
        <div className="hidden md:flex items-center gap-12">
          {[
            { name: "哲學", href: "/#philosophy" },
            { name: "服務", href: "/#services" },
            { name: "創辦人", href: "/#founder" },
            { name: "聯絡", href: "/contact" }
          ].map((item) => (
            <Link 
              key={item.name} 
              href={item.href} 
              className="text-sm font-medium text-[#1A1A1A]/60 hover:text-[#1A1A1A] tracking-[0.2em] transition-colors relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-0 after:h-px after:bg-[#C59D5F] after:transition-all hover:after:w-full"
            >
              {item.name}
            </Link>
          ))}
        </div>
        
        <button className="md:hidden text-[#1A1A1A]">
          <Menu strokeWidth={1} />
        </button>
      </div>
    </nav>
  )
}
