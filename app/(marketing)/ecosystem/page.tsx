import Link from "next/link"
import { ArrowLeft, Orbit, Zap, Leaf, BrainCircuit, RefreshCw, Network, HeartHandshake, ArrowRight } from "lucide-react"
import { Footer } from "@/components/footer"

export default function EcosystemPage() {
  return (
    <div className="min-h-screen bg-[#F5F5F0] text-[#1A1A1A] font-sans selection:bg-[#C59D5F] selection:text-white">
      
      {/* Navigation Back */}
      <nav className="px-6 py-6 max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-[#C59D5F] transition-colors group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> 返回首頁
        </Link>
        <span className="font-serif font-bold text-lg">RonsunAI</span>
      </nav>

      {/* Hero Section */}
      <section className="px-6 py-16 md:py-24 text-center max-w-5xl mx-auto">
        <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#E2E8F0] text-gray-600 text-sm font-bold tracking-wide">
          <Orbit className="w-4 h-4 text-[#C59D5F]" /> The Symbiotic Future
        </div>
        <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight">
          內聖外王，生生不息 <br/>
          <span className="text-2xl md:text-3xl mt-4 block font-light text-gray-500">The Ronsun Ecosystem</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-700 leading-[1.8] max-w-3xl mx-auto mb-10">
          我們不只是三個獨立的事業部，而是一個有機的生命循環。
          <br className="hidden md:block" />
          <strong>Wismath</strong> 指引方向，<strong>Wellness</strong> 穩固根基，<strong>ESG</strong> 構建未來。
          三者互為因果，打造個人與企業的「全息健康」。
        </p>
      </section>

      {/* The Cycle Visualization (視覺化循環) */}
      <section className="px-6 py-24 bg-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto relative z-10">
          
          {/* Central Philosophy */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold">The Cycle of "Frequency" (頻率循環)</h2>
            <p className="text-gray-500 mt-2">如何透過三大支柱提升生命品質</p>
          </div>

          {/* Connected Steps */}
          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connecting Line (Desktop only) */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#C59D5F]/50 to-transparent -translate-y-1/2 z-0"></div>

            {/* Step 1: Input (Wellness) */}
            <div className="bg-[#F9F8F4] p-8 rounded-3xl border border-white shadow-sm relative z-10 text-center group hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center mb-6 shadow-md border border-gray-100">
                <HeartHandshake className="w-8 h-8 text-[#84a98c]" />
              </div>
              <h3 className="text-xl font-bold mb-2">1. 養身 (Nourish)</h3>
              <p className="text-xs font-bold text-gray-400 uppercase mb-4">Input: Energy & Stability</p>
              <p className="text-gray-700 text-base leading-[1.8]">
                透過<strong>憩盞茶 (Citizen Tea)</strong> 與瑜珈鍛鍊，淨化身體載體。
                身體是靈魂的殿堂，穩定的肉身頻率是接收高維智慧的基礎。
              </p>
            </div>

            {/* Step 2: Process (Wisdom) */}
            <div className="bg-[#1A1A1A] p-8 rounded-3xl border border-gray-800 shadow-xl relative z-10 text-center group hover:-translate-y-2 transition-transform duration-300 transform scale-105">
              <div className="w-16 h-16 mx-auto bg-[#C59D5F] rounded-full flex items-center justify-center mb-6 shadow-glow">
                <BrainCircuit className="w-8 h-8 text-[#1A1A1A]" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">2. 修心 (Awaken)</h3>
              <p className="text-xs font-bold text-gray-400 uppercase mb-4">Process: Decision & Clarity</p>
              <p className="text-gray-300 text-base leading-[1.8]">
                運用 <strong>Wismath AI</strong> 與 <strong>密吟 (Mystic Chant)</strong>。
                在健康的身體基礎上，校準決策頻率。以古老術數結合數據運算，做出最符合天道的選擇。
              </p>
            </div>

            {/* Step 3: Output (Governance) */}
            <div className="bg-[#F9F8F4] p-8 rounded-3xl border border-white shadow-sm relative z-10 text-center group hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center mb-6 shadow-md border border-gray-100">
                <RefreshCw className="w-8 h-8 text-[#2D6A4F]" />
              </div>
              <h3 className="text-xl font-bold mb-2">3. 永續 (Sustain)</h3>
              <p className="text-xs font-bold text-gray-400 uppercase mb-4">Output: Impact & Longevity</p>
              <p className="text-gray-700 text-base leading-[1.8]">
                落實於 <strong>ESG 治理</strong> 與 <strong>系統架構</strong>。
                清晰的決策轉化為具體的企業行動。打造對環境友善、對社會負責的組織，形成正向循環。
              </p>
            </div>
          </div>
        </div>
        
        {/* Background Decorative Circles */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-[#C59D5F]/10 rounded-full pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-[#C59D5F]/20 rounded-full pointer-events-none"></div>
      </section>

      {/* The Integration Grid (如何整合) */}
      <section className="px-6 py-24 bg-[#F9F8F4]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            
            <div>
              <h2 className="text-3xl font-serif font-bold mb-6">Synergy in Action <br/><span className="text-gray-500 text-xl font-sans font-normal">生態系如何為您服務？</span></h2>
              <div className="space-y-6">
                
                {/* Scenario 1 */}
                <div className="flex gap-4">
                  <div className="mt-1 bg-white p-2 rounded-lg h-fit"><Zap className="w-5 h-5 text-[#C59D5F]" /></div>
                  <div>
                    <h3 className="font-bold text-lg">For Entrepreneurs (創業者)</h3>
                    <p className="text-base text-gray-700 mt-1 leading-[1.8]">
                      創業感到焦慮時，喝一杯<strong>阿里山烏龍</strong>定心；使用 <strong>Wismath</strong> 分析合夥人相性；最後透過 <strong>ESG 架構</strong>設立公司制度。一站式解決身、心、業的問題。
                    </p>
                  </div>
                </div>

                {/* Scenario 2 */}
                <div className="flex gap-4">
                  <div className="mt-1 bg-white p-2 rounded-lg h-fit"><Network className="w-5 h-5 text-[#C59D5F]" /></div>
                  <div>
                    <h3 className="font-bold text-lg">For Corporations (大型企業)</h3>
                    <p className="text-base text-gray-700 mt-1 leading-[1.8]">
                      導入 <strong>ISO 14064 碳盤查</strong>滿足法規；同時為高管團隊舉辦 <strong>茶香正念工作坊</strong>，並利用 <strong>AI 命理</strong>優化人力資源配置，提升軟實力。
                    </p>
                  </div>
                </div>

                {/* Scenario 3 */}
                <div className="flex gap-4">
                  <div className="mt-1 bg-white p-2 rounded-lg h-fit"><Leaf className="w-5 h-5 text-[#C59D5F]" /></div>
                  <div>
                    <h3 className="font-bold text-lg">For Individuals (個人修行者)</h3>
                    <p className="text-base text-gray-700 mt-1 leading-[1.8]">
                      聆聽 <strong>密吟 (Mystic Chant)</strong> 進行冥想；品味 <strong>老普洱</strong> 感受時間的厚度；在這個生態系中找到屬於自己的生命節奏。
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Visual Box */}
            <div className="bg-[#1A1A1A] rounded-[3rem] p-10 text-white relative overflow-hidden text-center md:text-left">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#C59D5F] to-transparent opacity-20 rounded-bl-full"></div>
              <h3 className="text-2xl font-serif font-bold mb-4 relative z-10">Join the Ecosystem</h3>
              <p className="text-gray-300 mb-8 relative z-10 text-base leading-[1.8]">
                無論您是尋求商業突破，還是心靈平靜，容晟生態系都有您的位置。讓我們一起構建善的循環。
              </p>
              <div className="flex flex-col md:flex-row gap-4 relative z-10">
                 <a href="https://www.wismath.work" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-[#C59D5F] text-[#1A1A1A] rounded-full font-bold text-sm text-center hover:bg-white transition-colors">
                   體驗 Wismath
                 </a>
                 <Link href="/wellness" className="px-6 py-3 bg-transparent border border-white/30 text-white rounded-full font-bold text-sm text-center hover:bg-white hover:text-[#1A1A1A] transition-colors">
                   逛逛好茶
                 </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}