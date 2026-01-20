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
      isScrolled ? 'bg-[#F5F5F0]/90 py-4 border-b border-[#1A1A1A]/5 backdrop-blur-sm' : 'bg-transparent py-8'
    }`}>
      <div className="mx-auto max-w-screen-xl px-6 md:px-12 flex items-center justify-between">
        <Link href="/" className="group">
          {/* Logo - 簽名式設計，預設墨黑 (#1A1A1A) -> Hover 變 CIS金 (#C59D5F) */}
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Signature_sample.svg/1200px-Signature_sample.svg.png" 
            alt="Ronsun Logo" 
            className="h-8 opacity-30 invert-[.2] group-hover:opacity-50 transition-all duration-500 group-hover:brightness-[1.5] group-hover:hue-rotate-15" 
          />
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
