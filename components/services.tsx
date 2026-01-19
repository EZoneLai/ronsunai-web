"use client"

import { Sparkles, Leaf, BarChart3 } from "lucide-react"
import Link from "next/link"

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-sage/20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <p className="text-sm tracking-widest uppercase text-gold mb-4">我們的服務</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-ink text-balance">
            三大核心事業
          </h2>
          <p className="mt-4 text-ink/60 text-lg leading-relaxed">
            整合東方智慧與西方科技的完整解決方案。
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Wismath AI - Large Card (spans 2 columns) */}
          <a href="https://wismath.work" target="_blank" rel="noopener noreferrer" className="md:col-span-2 group relative bg-paper rounded-3xl p-8 md:p-10 border border-sage hover:border-gold/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-gold/5 cursor-pointer overflow-hidden block">
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
              <p className="text-sm text-gold tracking-wide uppercase mb-2">智慧與數位賦能</p>
              <h3 className="font-serif text-2xl md:text-3xl text-ink mb-3">Wismath AI</h3>
              <p className="text-ink/60 leading-relaxed max-w-md">
                結合「Wismath 智慧術數」與頂尖軟體工程技術。我們提供 AI 命理決策系統、療癒音頻「密吟」，以及企業級系統架構設計與專案管理諮詢。我們是您的大腦與靈魂。
              </p>
              <div className="mt-6 flex items-center gap-2 text-gold text-sm font-medium">
                <span>探索平台</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          </a>

          {/* Wellness Trade - Square Card */}
          <Link href="/wellness" className="group relative bg-paper rounded-3xl p-8 border border-sage hover:border-gold/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-gold/5 cursor-pointer overflow-hidden block">
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
              <p className="text-sm text-gold tracking-wide uppercase mb-2">健康與生活貿易</p>
              <h3 className="font-serif text-xl text-ink mb-2">養生貿易</h3>
              <p className="text-ink/60 text-sm leading-relaxed">
                身體是靈魂的殿堂。我們嚴選全球優質的瑜伽輔具、健身器材與基礎營養品，並代理頂級雲南普洱茶。
              </p>
              <div className="mt-4 flex items-center gap-2 text-gold text-sm font-medium">
                <span>立即購買</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          </Link>

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
              <p className="text-sm text-gold tracking-wide uppercase mb-2">永續與管理顧問</p>
              <h3 className="font-serif text-xl text-ink mb-2">ESG 顧問</h3>
              <p className="text-ink/60 text-sm leading-relaxed">
                企業如人，需要正確的骨架才能長久。我們協助企業導入 ESG 標準、優化組織架構，實現真正的永續經營。
              </p>
              <div className="mt-4 flex items-center gap-2 text-gold text-sm font-medium">
                <span>了解更多</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
