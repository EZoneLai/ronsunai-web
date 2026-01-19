"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Abstract Rising Sun over Mountain - CSS Art */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {/* Mountain Curve */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[200%] md:w-[150%] lg:w-full">
          <svg 
            viewBox="0 0 1440 400" 
            className="w-full h-auto opacity-[0.08]"
            preserveAspectRatio="xMidYMax slice"
          >
            <path
              d="M0,400 Q360,100 720,200 T1440,100 L1440,400 Z"
              fill="#1A1A1A"
            />
          </svg>
        </div>
        
        {/* Rising Sun */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="relative">
            {/* Sun Glow */}
            <div className="absolute inset-0 w-48 h-48 md:w-64 md:h-64 rounded-full bg-gold/10 blur-3xl" />
            {/* Sun Circle */}
            <div className="w-32 h-32 md:w-48 md:h-48 rounded-full bg-gradient-to-b from-gold/30 to-gold/5 border border-gold/20" />
            {/* Sun Rays */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 md:w-56 md:h-56">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="absolute top-1/2 left-1/2 w-px h-8 md:h-12 bg-gradient-to-t from-gold/40 to-transparent origin-bottom"
                  style={{
                    transform: `translate(-50%, -100%) rotate(${i * 45}deg) translateY(-24px)`,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium text-ink leading-tight text-balance">
          以古老智慧定心，{" "}
          <span className="block mt-2">用未來科技賦能。</span>
        </h1>
        
        <p className="mt-6 md:mt-8 text-lg md:text-xl text-ink/70 max-w-2xl mx-auto leading-relaxed text-pretty">
          從 AI 決策、身心健康貿易到 ESG 永續治理，容晟致力於構建一個生生不息的商業善循環。
        </p>

        <div className="mt-8 md:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button 
            size="lg"
            className="rounded-full bg-ink text-paper hover:bg-ink/90 px-8 py-6 text-base font-medium group"
          >
            探索我們的生態系
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button 
            variant="outline"
            size="lg"
            className="rounded-full border-ink/20 text-ink hover:bg-ink/5 px-8 py-6 text-base font-medium bg-transparent"
          >
            了解更多
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-ink/40">
        <span className="text-xs tracking-widest uppercase">向下滾動</span>
        <div className="w-px h-8 bg-gradient-to-b from-ink/40 to-transparent" />
      </div>
    </section>
  )
}
