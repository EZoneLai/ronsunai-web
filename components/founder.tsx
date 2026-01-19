"use client"

import { Quote } from "lucide-react"

export function Founder() {
  return (
    <section id="founder" className="py-24 md:py-32 bg-paper">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Photo */}
          <div className="relative order-1 lg:order-1">
            <div className="relative aspect-[4/5] max-w-md mx-auto lg:mx-0">
              {/* Decorative Frame */}
              <div className="absolute -inset-4 rounded-3xl border border-gold/20" />
              <div className="absolute -inset-8 rounded-3xl border border-sage/50" />
              
              {/* Image Container */}
              <div className="relative w-full h-full rounded-2xl bg-sage/30 overflow-hidden">
                {/* Placeholder silhouette */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg 
                    viewBox="0 0 200 250" 
                    className="w-3/4 h-3/4 opacity-20"
                  >
                    <ellipse cx="100" cy="70" rx="45" ry="55" fill="#1A1A1A" />
                    <ellipse cx="100" cy="200" rx="70" ry="80" fill="#1A1A1A" />
                  </svg>
                </div>
                
                {/* Subtle texture overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-paper/20 to-transparent" />
              </div>

              {/* Accent Element */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-2xl bg-gold/10 border border-gold/20" />
            </div>
          </div>

          {/* Quote */}
          <div className="order-2 lg:order-2">
            <div className="relative">
              {/* Quote Icon */}
              <Quote className="w-12 h-12 text-gold/30 mb-6" strokeWidth={1} />
              
              {/* Quote Text */}
              <blockquote className="font-serif text-2xl md:text-3xl lg:text-4xl text-ink leading-relaxed text-pretty">
                科技讓我們走得更快，而智慧讓我們走得更遠。
              </blockquote>
              
              <p className="mt-6 text-ink/70 text-lg leading-relaxed">
                我是一名工程師，也是一位茶人；我研究大數據，也鑽研古老易經。這看似矛盾，實則一體。容晟科技的存在，是為了在混亂的時代中，提供一套完整的「生命解決方案」。無論是透過程式碼、一杯茶，還是一份 ESG 報告，我們都在協助您提升頻率，回到身心與事業的完美平衡。
              </p>

              {/* Attribution */}
              <div className="mt-8 pt-8 border-t border-sage">
                <p className="font-serif text-xl text-ink">賴宥均 Eugene Lai</p>
                <p className="text-ink/60 mt-1">創辦人暨執行長</p>
              </div>

              {/* Decorative Line */}
              <div className="absolute -left-8 top-0 bottom-0 w-px bg-gradient-to-b from-gold/40 via-gold/20 to-transparent hidden lg:block" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
