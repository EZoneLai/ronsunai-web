import Link from "next/link"
import { ArrowLeft, Sparkles, Brain, Globe, Users, Award, ChevronRight, ExternalLink, Zap } from "lucide-react"
import { Footer } from "@/components/footer"
import { NumerologyTool } from "@/components/numerology-tool"

export default function CeyanPage() {
  return (
    <div className="min-h-screen bg-[#F5F5F0] text-[#1A1A1A] font-sans selection:bg-[#C59D5F] selection:text-white">
      
      {/* Navigation Back */}
      <nav className="px-6 py-6 max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-[#C59D5F] transition-colors group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> 返回首頁
        </Link>
        <Link href="/" className="font-serif font-bold text-lg hover:text-[#C59D5F] transition-colors">RonsunAI</Link>
      </nav>

      {/* Hero Section */}
      <section className="px-6 py-16 md:py-24 text-center max-w-6xl mx-auto relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#C59D5F]/5 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#2D6A4F]/5 rounded-full blur-3xl -z-10"></div>
        
        <div className="mb-8 inline-flex items-center gap-2 px-5 py-2.5 bg-[#1A1A1A] text-white rounded-full text-sm font-bold tracking-wide shadow-lg">
          <Brain className="w-5 h-5 text-[#C59D5F]" /> 數理 21 畫・首領大吉
        </div>
        
        <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight">
          智匯賦能
          <br />
          <span className="text-2xl md:text-3xl mt-4 block font-light text-gray-500">
            AI 戰略實踐
          </span>
        </h1>
        
        <div className="text-lg md:text-xl text-gray-700 leading-[1.9] max-w-4xl mx-auto mb-8 space-y-3">
          <p className="font-bold text-[#C59D5F]">
            「智慧，在於如何精準調度；賦能，在於如何讓技術成為資產。」
          </p>
        </div>

        <div className="text-base md:text-lg text-gray-600 leading-[1.9] max-w-3xl mx-auto mb-12 space-y-3">
          <p>
            在 <strong className="text-gray-800">智匯賦能</strong> 模組中，我們不單教授 AI 工具的使用，更專注於將複雜的生成技術，轉化為具備「複利價值」的數位資產。
          </p>
          <p>
            這是一場關於「降維打擊」的演練：用最精簡的 Prompt 指令，驅動最強大的生產力，實現真正意義上的數位資產主權。
          </p>
        </div>

        {/* Value Proposition Pills */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <div className="px-6 py-3 bg-white rounded-full shadow-sm border border-gray-200 text-sm font-medium">
            🧠 降維打擊教學法
          </div>
          <div className="px-6 py-3 bg-white rounded-full shadow-sm border border-gray-200 text-sm font-medium">
            🎯 實戰導向產出
          </div>
          <div className="px-6 py-3 bg-white rounded-full shadow-sm border border-gray-200 text-sm font-medium">
            🏮 命理品牌佈局
          </div>
        </div>
      </section>

      {/* AI Empowerment Methodology */}
      <section className="px-6 py-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">AI 賦能教學方法論</h2>
            <p className="text-gray-600 text-lg">從 0 到 1，用 AI 突破技術門檻</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Methodology 1 */}
            <div className="bg-[#F9F8F4] p-8 rounded-3xl border border-gray-200 hover:border-[#C59D5F] transition-all">
              <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-6 shadow-sm">
                <Zap className="w-7 h-7 text-[#C59D5F]" />
              </div>
              <h3 className="text-xl font-bold mb-2">降維打擊</h3>
              <p className="text-sm text-[#C59D5F] font-bold mb-4 uppercase tracking-wide">Simplify the Complex</p>
              <p className="text-gray-700 text-base leading-[1.8]">
                將複雜的代碼與底層邏輯，轉化為直覺式的 <strong>Prompt 指令</strong> 與視覺化工作流。
                不需要寫程式，就能產出專業級的數位產品。
              </p>
            </div>

            {/* Methodology 2 */}
            <div className="bg-[#F9F8F4] p-8 rounded-3xl border border-gray-200 hover:border-[#C59D5F] transition-all">
              <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-6 shadow-sm">
                <Award className="w-7 h-7 text-[#2D6A4F]" />
              </div>
              <h3 className="text-xl font-bold mb-2">實戰導向</h3>
              <p className="text-sm text-[#2D6A4F] font-bold mb-4 uppercase tracking-wide">Action Over Theory</p>
              <p className="text-gray-700 text-base leading-[1.8]">
                教學內容不談理論，只談<strong>「如何用 AI 解決這個痛點」</strong>。
                每一堂課結束，你都能帶走一個可運作的成果。
              </p>
            </div>

            {/* Methodology 3 */}
            <div className="bg-[#F9F8F4] p-8 rounded-3xl border border-gray-200 hover:border-[#C59D5F] transition-all">
              <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-6 shadow-sm">
                <Brain className="w-7 h-7 text-[#C59D5F]" />
              </div>
              <h3 className="text-xl font-bold mb-2">數位主權觀念</h3>
              <p className="text-sm text-[#C59D5F] font-bold mb-4 uppercase tracking-wide">Digital Sovereignty</p>
              <p className="text-gray-700 text-base leading-[1.8]">
                雖然依賴平台保護，但植入<strong>「數位資產意識」</strong>，
                引導學員理解網域、代碼產權與資料備份的重要性。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement - 善循環 */}
      <section className="px-6 py-24 bg-[#1A1A1A] text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#C59D5F] rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#2D6A4F] rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8">
            建立最棒的善循環
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10">
              <div className="w-14 h-14 bg-[#C59D5F] rounded-xl flex items-center justify-center mb-6">
                <Brain className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">AI 為人類賦能</h3>
              <p className="text-gray-300 leading-[1.8]">
                運用 AI 技術解放人類的創造力，讓你專注於知識的深度與傳遞的溫度，
                技術交給 AI 處理。
              </p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10">
              <div className="w-14 h-14 bg-[#2D6A4F] rounded-xl flex items-center justify-center mb-6">
                <Users className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">人為 AI 填充可能</h3>
              <p className="text-gray-300 leading-[1.8]">
                人類的創意、倫理與情感是 AI 無法取代的養分。
                透過你的使用，讓 AI 變得更智慧、更貼近需求。
              </p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10">
              <div className="w-14 h-14 bg-gradient-to-r from-[#C59D5F] to-[#2D6A4F] rounded-xl flex items-center justify-center mb-6">
                <Globe className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">提升世界維度</h3>
              <p className="text-gray-300 leading-[1.8]">
                當每個人都能借助 AI 突破自己的極限，
                整個世界的認知層次將會不斷躍升。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Numerology Tool Section */}
      <section className="px-6 py-24 bg-gradient-to-br from-[#F9F8F4] via-[#F5F5F0] to-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#C59D5F]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#2D6A4F]/5 rounded-full blur-3xl"></div>
        
        <div className="relative z-10">
          <NumerologyTool />
        </div>
      </section>

      {/* AI Vibe Coding Tool Showcase */}
      <section className="px-6 py-24 bg-gradient-to-br from-[#F5F5F0] via-white to-[#F9F8F4] relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#C59D5F]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#2D6A4F]/5 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-[#1A1A1A] text-white rounded-full text-xs font-bold mb-6 tracking-wide shadow-lg">
              <Sparkles className="w-4 h-4 text-[#C59D5F]" /> AI Vibe Coding 實證工具
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Web Strategy Prompt Architect
              <br />
              <span className="text-xl md:text-2xl mt-3 block font-light text-gray-500">
                提示詞工程師的最佳幫手
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-700 leading-[1.8] max-w-3xl mx-auto">
              運用 <strong>v0.dev</strong> 技術打造的專業提示詞架構工具。
              <br className="hidden md:block" />
              協助你用 AI 快速建立高品質的網站策略與內容架構。
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            {/* Left: Tool Description */}
            <div className="space-y-6">
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-[#E2E8F0] rounded-full flex items-center justify-center">
                    <Zap className="w-6 h-6 text-[#C59D5F]" />
                  </div>
                  <h3 className="text-xl font-bold">核心功能</h3>
                </div>
                <p className="text-gray-700 leading-[1.8] mb-4">
                  這個工具能夠幫助你結構化地思考網站策略，從品牌定位、受眾分析、
                  到內容架構，一步步引導你產生最適合的 AI 提示詞。
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-[#F5F5F0] text-sm rounded-full text-gray-600">策略思考</span>
                  <span className="px-3 py-1 bg-[#F5F5F0] text-sm rounded-full text-gray-600">提示詞優化</span>
                  <span className="px-3 py-1 bg-[#F5F5F0] text-sm rounded-full text-gray-600">快速原型</span>
                </div>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-[#E2E8F0] rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-[#2D6A4F]" />
                  </div>
                  <h3 className="text-xl font-bold">使用場景</h3>
                </div>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-4 h-4 text-[#C59D5F] mt-1 flex-shrink-0" />
                    <span>為客戶快速建立網站提案架構</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-4 h-4 text-[#C59D5F] mt-1 flex-shrink-0" />
                    <span>優化 AI 對話的精準度與產出品質</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-4 h-4 text-[#C59D5F] mt-1 flex-shrink-0" />
                    <span>學習結構化思考與策略規劃方法</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right: Tool Preview (iframe) */}
            <div className="relative">
              <div className="bg-white p-4 rounded-3xl shadow-xl border border-gray-200">
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-gray-100">
                  <iframe
                    src="https://v0-web-strategy-prompt-architect.vercel.app/"
                    className="w-full h-full"
                    title="Web Strategy Prompt Architect"
                    loading="lazy"
                  />
                  {/* Overlay for mobile hint */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 text-white text-sm text-center">
                    互動預覽 • 點擊下方按鈕開啟完整工具
                  </div>
                </div>
              </div>
              {/* Decorative frame accent */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#C59D5F]/20 rounded-full blur-2xl -z-10"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#2D6A4F]/20 rounded-full blur-2xl -z-10"></div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <a
              href="https://v0-web-strategy-prompt-architect.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#1A1A1A] text-white px-8 py-4 rounded-full font-bold hover:bg-[#C59D5F] transition-all shadow-lg hover:shadow-xl group"
            >
              開啟完整工具體驗
              <ExternalLink className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
            <p className="text-sm text-gray-500 mt-4">
              想了解更多 AI Vibe Coding 應用？<Link href="/contact" className="text-[#C59D5F] hover:underline font-bold">立即聯繫我們</Link>
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-24 max-w-5xl mx-auto">
        <div className="bg-[#1A1A1A] text-white rounded-[3rem] p-12 md:p-16 text-center relative overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#C59D5F] rounded-full blur-[120px] opacity-20"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#2D6A4F] rounded-full blur-[120px] opacity-20"></div>
          
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-bold mb-6">
              <Sparkles className="w-4 h-4 text-[#C59D5F]" />
              開始你的 AI 賦能之旅
            </div>
            
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">
              準備好用 AI 創造更大價值了嗎？
            </h2>
            
            <p className="text-gray-300 mb-10 max-w-2xl mx-auto text-lg leading-[1.8]">
              無論你是想探索 AI 課程開發，或是需要專業的數位策略諮詢，
              我們都能為你提供最適合的解決方案。
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#C59D5F] text-white px-8 py-4 rounded-full font-bold hover:bg-[#2D6A4F] transition-all shadow-lg hover:shadow-xl group"
              >
                立即諮詢
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                href="/ecosystem"
                className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-full font-bold hover:bg-white/20 transition-all"
              >
                了解生態系統
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
