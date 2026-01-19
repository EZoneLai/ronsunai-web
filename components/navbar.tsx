"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-paper/80 backdrop-blur-md border-b border-sage/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="relative flex items-center justify-center w-10 h-10">
              <Image 
                src="/ronsun_logo.png" 
                alt="RonsunAI Logo" 
                width={40} 
                height={40}
                className="object-contain"
              />
            </div>
            <span className="font-serif text-xl font-semibold text-ink tracking-tight">
              RonsunAI
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#philosophy" className="text-sm text-ink/70 hover:text-ink transition-colors">
              Philosophy
            </a>
            <a href="#services" className="text-sm text-ink/70 hover:text-ink transition-colors">
              Services
            </a>
            <a href="#founder" className="text-sm text-ink/70 hover:text-ink transition-colors">
              About
            </a>
            <Button className="rounded-full bg-ink text-paper hover:bg-ink/90 px-6">
              Contact
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden p-2 text-ink"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-sage/50">
            <div className="flex flex-col gap-4">
              <a 
                href="#philosophy" 
                className="text-sm text-ink/70 hover:text-ink transition-colors px-2 py-2"
                onClick={() => setIsOpen(false)}
              >
                Philosophy
              </a>
              <a 
                href="#services" 
                className="text-sm text-ink/70 hover:text-ink transition-colors px-2 py-2"
                onClick={() => setIsOpen(false)}
              >
                Services
              </a>
              <a 
                href="#founder" 
                className="text-sm text-ink/70 hover:text-ink transition-colors px-2 py-2"
                onClick={() => setIsOpen(false)}
              >
                About
              </a>
              <Button className="rounded-full bg-ink text-paper hover:bg-ink/90 w-full mt-2">
                Contact
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
