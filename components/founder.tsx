import { Quote } from "lucide-react"
import Image from "next/image"

export function Founder() {
  return (
    <section id="founder" className="py-32 bg-[#F5F5F0] relative overflow-hidden">
      {/* 裝飾性背景字 */}
      <span className="absolute -left-20 top-20 text-[20vw] leading-none font-serif text-[#1A1A1A]/[0.02] pointer-events-none select-none">
        FOUNDER
      </span>

      <div className="max-w-screen-xl mx-auto px-6 md:px-12 flex flex-col md:flex-row gap-16 items-center">
        
        {/* 照片區 */}
        <div className="w-full md:w-5/12 relative">
          <div className="aspect-[3/4] bg-[#EAEAE5] relative overflow-hidden rounded-sm filter-brush-stroke">
            <Image
              src="/eugene_photo.jpg"
              alt="Eugene Lai - Founder"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[#1A1A1A]/10 mix-blend-multiply"></div>
            <div className="absolute inset-4 border border-[#1A1A1A]/20"></div>
            {/* 底部文字區 - 優化辨識度 */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#1A1A1A]/80 via-[#1A1A1A]/50 to-transparent pt-16 pb-8 px-8">
              <p className="text-3xl font-semibold text-white drop-shadow-lg tracking-wide" style={{textShadow: '0 2px 4px rgba(0,0,0,0.5)', fontFamily: 'var(--font-cormorant)'}}>Eugene Lai</p>
              <p className="font-sans text-xs uppercase tracking-widest text-white/90 mt-1 drop-shadow-md" style={{textShadow: '0 1px 2px rgba(0,0,0,0.5)'}}>Founder & CEO</p>
            </div>
          </div>
          {/* 裝飾元素 - 使用金光 */}
          <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#C59D5F]/20 rounded-full blur-xl"></div>
        </div>

        {/* 文字區 */}
        <div className="w-full md:w-7/12 md:pl-12">
          <Quote className="w-10 h-10 text-[#C59D5F] mb-8 opacity-50" strokeWidth={1} />
          
          <h2 className="font-serif text-3xl md:text-4xl text-[#1A1A1A] leading-normal mb-8">
            科技讓我們走得更快，<br />
            <span className="italic text-[#1A1A1A]/60">智慧讓我們走得更遠。</span>
          </h2>

          <div className="space-y-6 text-[#1A1A1A]/85 font-light leading-loose text-justify">
            <p>
              我是一名工程師，也是一位茶人；我研究大數據，也鑽研古老易經。這看似矛盾，實則一體。在快速變遷的數位時代，我們往往迷失了方向。
            </p>
            <p>
              容晟科技 (Ronsun) 的存在，是為了在混亂中建立秩序。無論是透過程式碼優化系統效率，還是一杯茶安頓身心，我們提供的都是一套完整的「生命解決方案」。
            </p>
          </div>

          <div className="mt-12">
            {/* Eugene Lai 簽名風格 */}
            <svg 
              viewBox="0 0 200 60" 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-12 w-auto opacity-40"
            >
              {/* E */}
              <path 
                d="M 10 15 Q 15 10, 25 15 Q 30 20, 25 30 Q 20 35, 15 32" 
                fill="none" 
                stroke="#1A1A1A" 
                strokeWidth="1.5" 
                strokeLinecap="round"
              />
              {/* L */}
              <path 
                d="M 35 12 Q 40 25, 38 35 L 42 38" 
                fill="none" 
                stroke="#1A1A1A" 
                strokeWidth="1.5" 
                strokeLinecap="round"
              />
              {/* ai - 連筆 */}
              <path 
                d="M 50 20 Q 55 15, 60 20 Q 62 25, 58 30 Q 65 28, 70 32" 
                fill="none" 
                stroke="#1A1A1A" 
                strokeWidth="1.5" 
                strokeLinecap="round"
              />
              {/* 裝飾線 */}
              <path 
                d="M 75 25 Q 100 20, 125 28 Q 150 35, 170 30" 
                fill="none" 
                stroke="#C59D5F" 
                strokeWidth="0.8" 
                strokeLinecap="round"
                opacity="0.5"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}