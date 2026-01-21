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
          </div>
          {/* 裝飾元素 - 使用金光 */}
          <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#C59D5F]/20 rounded-full blur-xl"></div>
        </div>

        {/* 文字區 */}
        <div className="w-full md:w-7/12 md:pl-12">
          {/* 創辦人名字 */}
          <div className="mb-8">
            <h3 className="text-4xl md:text-5xl mb-2" style={{fontFamily: 'Cormorant Garamond, serif', fontWeight: 600, letterSpacing: '0.02em', color: '#1A1A1A'}}>
              Eugene Lai
            </h3>
          </div>
          
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
        </div>
      </div>
    </section>
  )
}