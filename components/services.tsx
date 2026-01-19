"use client"

import { Sparkles, Leaf, BarChart3 } from "lucide-react"

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-sage/20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <p className="text-sm tracking-widest uppercase text-gold mb-4">Our Services</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-ink text-balance">
            The Ecosystem
          </h2>
          <p className="mt-4 text-ink/60 text-lg leading-relaxed">
            A harmonious suite of offerings — bridging wisdom and technology.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Wismath AI - Large Card (spans 2 columns) */}
          <div className="md:col-span-2 group relative bg-paper rounded-3xl p-8 md:p-10 border border-sage hover:border-gold/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-gold/5 cursor-pointer overflow-hidden">
            {/* Abstract Data Stream Visual */}
            <div className="absolute top-0 right-0 w-64 h-64 opacity-10 pointer-events-none">
              <svg viewBox="0 0 200 200" className="w-full h-full">
                <defs>
                  <linearGradient id="dataGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#C59D5F" />
                    <stop offset="100%" stopColor="#1A1A1A" />
                  </linearGradient>
                </defs>
                {[...Array(6)].map((_, i) => (
                  <path
                    key={i}
                    d={`M${20 + i * 30},200 Q${50 + i * 30},${100 - i * 10} ${80 + i * 30},${50 + i * 15} T${140 + i * 30},0`}
                    fill="none"
                    stroke="url(#dataGradient)"
                    strokeWidth="2"
                    opacity={0.5 + i * 0.1}
                  />
                ))}
              </svg>
            </div>

            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-gold/10 flex items-center justify-center border border-gold/20 mb-6">
                <Sparkles className="w-7 h-7 text-gold" strokeWidth={1.5} />
              </div>
              <p className="text-sm text-gold tracking-wide uppercase mb-2">AI Platform</p>
              <h3 className="font-serif text-2xl md:text-3xl text-ink mb-3">Wismath AI</h3>
              <p className="text-ink/60 leading-relaxed max-w-md">
                Personal Decision Navigator — harnessing the power of numerology and machine learning to illuminate your path forward with clarity and confidence.
              </p>
              <div className="mt-6 flex items-center gap-2 text-gold text-sm font-medium">
                <span>Explore Platform</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          </div>

          {/* Wellness Trade - Square Card */}
          <div className="group relative bg-paper rounded-3xl p-8 border border-sage hover:border-gold/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-gold/5 cursor-pointer overflow-hidden">
            {/* Organic Shape Visual */}
            <div className="absolute bottom-0 right-0 w-32 h-32 opacity-10 pointer-events-none">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <path
                  d="M50,10 C70,10 90,30 90,50 C90,70 70,90 50,90 C30,90 10,70 10,50 C10,30 30,10 50,10"
                  fill="none"
                  stroke="#C59D5F"
                  strokeWidth="1"
                />
                <path
                  d="M50,25 C60,25 75,35 75,50 C75,65 60,75 50,75 C40,75 25,65 25,50 C25,35 40,25 50,25"
                  fill="none"
                  stroke="#C59D5F"
                  strokeWidth="1"
                />
                <circle cx="50" cy="50" r="10" fill="#C59D5F" opacity="0.3" />
              </svg>
            </div>

            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-sage/50 flex items-center justify-center border border-sage mb-5">
                <Leaf className="w-6 h-6 text-ink" strokeWidth={1.5} />
              </div>
              <p className="text-sm text-gold tracking-wide uppercase mb-2">Commerce</p>
              <h3 className="font-serif text-xl text-ink mb-2">Wellness Trade</h3>
              <p className="text-ink/60 text-sm leading-relaxed">
                Puer Tea & Yoga Gear — curated wellness products rooted in ancient traditions.
              </p>
              <div className="mt-4 flex items-center gap-2 text-gold text-sm font-medium">
                <span>Shop Now</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          </div>

          {/* ESG Consulting - Square Card */}
          <div className="group relative bg-paper rounded-3xl p-8 border border-sage hover:border-gold/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-gold/5 cursor-pointer overflow-hidden">
            {/* Minimalist Chart Visual */}
            <div className="absolute bottom-4 right-4 w-24 h-24 opacity-10 pointer-events-none">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <line x1="10" y1="90" x2="90" y2="90" stroke="#1A1A1A" strokeWidth="1" />
                <line x1="10" y1="10" x2="10" y2="90" stroke="#1A1A1A" strokeWidth="1" />
                <polyline
                  points="10,70 30,50 50,60 70,30 90,20"
                  fill="none"
                  stroke="#C59D5F"
                  strokeWidth="2"
                />
                <circle cx="30" cy="50" r="3" fill="#C59D5F" />
                <circle cx="50" cy="60" r="3" fill="#C59D5F" />
                <circle cx="70" cy="30" r="3" fill="#C59D5F" />
                <circle cx="90" cy="20" r="3" fill="#C59D5F" />
              </svg>
            </div>

            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-sage/50 flex items-center justify-center border border-sage mb-5">
                <BarChart3 className="w-6 h-6 text-ink" strokeWidth={1.5} />
              </div>
              <p className="text-sm text-gold tracking-wide uppercase mb-2">Advisory</p>
              <h3 className="font-serif text-xl text-ink mb-2">ESG Consulting</h3>
              <p className="text-ink/60 text-sm leading-relaxed">
                Sustainable Strategy — guiding businesses toward environmental and social governance excellence.
              </p>
              <div className="mt-4 flex items-center gap-2 text-gold text-sm font-medium">
                <span>Learn More</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
