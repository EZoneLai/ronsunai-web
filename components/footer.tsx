"use client"

import Image from "next/image"

const footerLinks = {
  services: [
    { name: "Wismath AI", href: "#" },
    { name: "Wellness Trade", href: "#" },
    { name: "ESG Consulting", href: "#" },
  ],
  company: [
    { name: "About Us", href: "#" },
    { name: "Our Philosophy", href: "#philosophy" },
    { name: "Contact", href: "#" },
  ],
  legal: [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Refund Policy", href: "#" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-6">
              <div className="relative flex items-center justify-center w-10 h-10">
                <Image 
                  src="/ronsun_logo.png" 
                  alt="RonsunAI Logo" 
                  width={40} 
                  height={40}
                  className="object-contain"
                />
              </div>
              <span className="font-serif text-xl font-semibold text-paper tracking-tight">
                RonsunAI
              </span>
            </a>
            <p className="text-paper/60 max-w-sm leading-relaxed">
              Bridging ancient wisdom with future technology. We create harmonious solutions for a balanced world.
            </p>
            <div className="mt-6 flex items-center gap-4">
              {/* Social Links - keeping minimal */}
              <a 
                href="#" 
                className="w-10 h-10 rounded-full border border-paper/20 flex items-center justify-center hover:border-gold hover:text-gold transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full border border-paper/20 flex items-center justify-center hover:border-gold hover:text-gold transition-colors"
                aria-label="Twitter"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-sm font-medium text-paper tracking-wide uppercase mb-4">
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-paper/60 hover:text-gold transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-sm font-medium text-paper tracking-wide uppercase mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-paper/60 hover:text-gold transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h4 className="text-sm font-medium text-paper tracking-wide uppercase mb-4">
              Legal
            </h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-paper/60 hover:text-gold transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-paper/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-paper/40 text-sm">
              © 2026 Ronsun Technology Co., Ltd. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-paper/40 hover:text-gold transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-paper/40 hover:text-gold transition-colors text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-paper/40 hover:text-gold transition-colors text-sm">
                Refund Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
