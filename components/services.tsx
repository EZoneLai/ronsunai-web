import { Sparkles, Leaf, BarChart3, ArrowRight } from "lucide-react"

export function Services() {
  return (
    <section id="services" className="py-32 bg-[#EAEAE5] relative">
      <div className="max-w-screen-xl mx-auto px-6 md:px-12">
        
        {/* 標題區 */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20">
          <div>
            <span className="text-xs font-bold text-[#C59D5F] tracking-[0.2em] uppercase mb-4 block">Our Expertise</span>
            <h2 className="font-serif text-4xl text-[#1A1A1A]">核心事業</h2>
          </div>
          <p className="text-[#1A1A1A]/60 max-w-md text-sm md:text-base leading-relaxed mt-6 md:mt-0">
            整合東方智慧與西方科技，我們提供跨越虛實的完整解決方案。
          </p>
        </div>

        {/* 服務列表 */}
        <div className="grid grid-cols-1 gap-px bg-[#1A1A1A]/10 border border-[#1A1A1A]/10">
          {/* Wismath AI */}
          <a href="https://www.wismath.work" target="_blank" rel="noopener noreferrer" className="block bg-[#F5F5F0] p-10 md:p-16 hover:bg-[#F9F9F7] transition-colors group relative overflow-hidden cursor-pointer">
            <div className="absolute top-0 right-0 p-12 opacity-0 group-hover:opacity-5 transition-opacity duration-700 transform translate-x-1/4 -translate-y-1/4">
              <Sparkles size={300} strokeWidth={0.5} />
            </div>
            
            <div className="relative z-10 flex flex-col md:flex-row gap-8 md:gap-16 items-start">
              <div className="w-12 h-12 flex items-center justify-center border border-[#1A1A1A]/10 rounded-full shrink-0 text-[#C59D5F]">
                <Sparkles size={20} strokeWidth={1.5} />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-serif text-[#1A1A1A] mb-4 group-hover:text-[#C59D5F] transition-colors">Wismath AI 智慧賦能</h3>
                <p className="text-[#1A1A1A]/85 leading-relaxed mb-8 max-w-2xl font-light">
                  結合古老易經邏輯與現代 AI 演算法。我們開發命理決策系統、療癒音頻「密吟」，並為企業提供高併發系統架構設計。這不只是軟體，是數位時代的智慧導航。
                </p>
                <span className="inline-flex items-center text-xs tracking-widest uppercase border-b border-[#1A1A1A] pb-1 group-hover:text-[#C59D5F] group-hover:border-[#C59D5F] transition-colors">
                  Explore Project <ArrowRight className="ml-2 w-3 h-3" />
                </span>
              </div>
            </div>
          </a>

          {/* 雙欄佈局 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#1A1A1A]/10">
            {/* Wellness */}
            <a href="/wellness" className="block bg-[#F5F5F0] p-10 md:p-12 hover:bg-[#F9F9F7] transition-colors group cursor-pointer">
              <Leaf className="w-8 h-8 text-[#1A1A1A]/40 mb-8" strokeWidth={1} />
              <h3 className="text-xl font-serif text-[#1A1A1A] mb-4 group-hover:text-[#C59D5F] transition-colors">養生貿易</h3>
              <p className="text-[#1A1A1A]/85 text-sm leading-relaxed mb-8 min-h-[4rem]">
                身體是靈魂的殿堂。嚴選瑜伽輔具、健身器材，以及來自雲南深山的頂級普洱茶，讓自然能量流動於日常。
              </p>
              <span className="text-sm text-[#1A1A1A] font-medium group-hover:text-[#C59D5F] transition-colors">選購商品 →</span>
            </a>

            {/* ESG */}
            <a href="/esg" className="block bg-[#F5F5F0] p-10 md:p-12 hover:bg-[#F9F9F7] transition-colors group cursor-pointer">
              <BarChart3 className="w-8 h-8 text-[#1A1A1A]/40 mb-8" strokeWidth={1} />
              <h3 className="text-xl font-serif text-[#1A1A1A] mb-4 group-hover:text-[#C59D5F] transition-colors">ESG 管理顧問</h3>
              <p className="text-[#1A1A1A]/60 text-sm leading-relaxed mb-8 min-h-[4rem]">
                企業如人，需正其骨。協助企業導入國際 ESG 標準，優化組織架構，打造具備韌性與永續力的商業體質。
              </p>
              <span className="text-sm text-[#1A1A1A] font-medium group-hover:text-[#C59D5F] transition-colors">諾詢服務 →</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}