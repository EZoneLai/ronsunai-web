import Link from "next/link"
import { ArrowLeft, Scale, Users, Sprout, Building2, FileCheck, BarChart3, Globe, ShieldCheck, ArrowRight, Leaf, Target, TrendingUp, Briefcase } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Footer } from "@/components/footer"

export default function EsgPage() {
  return (
    <div className="min-h-screen bg-[#F5F5F0] text-[#1A1A1A] font-sans selection:bg-[#C59D5F] selection:text-white">
      
      {/* Navigation Back */}
      <nav className="px-6 py-6 max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-[#C59D5F] transition-colors group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> 返回首頁
        </Link>
        <span className="font-serif font-bold text-lg">RonsunAI</span>
      </nav>

      {/* Hero Section: Professional & Philosophical */}
      <section className="px-6 py-16 md:py-24 text-center max-w-5xl mx-auto relative">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#C59D5F]/5 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-[#2D6A4F]/5 rounded-full blur-3xl -z-10"></div>
        
        <div className="mb-8 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1A1A1A] text-white text-sm font-bold tracking-wide shadow-lg">
          <ShieldCheck className="w-5 h-5 text-[#C59D5F]" /> ISO 標準 × Wismath AI 智慧整合
        </div>
        <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight">
          數據驅動永續，<br className="md:hidden"/>智慧賦能治理 <br/>
          <span className="text-2xl md:text-3xl mt-4 block font-light text-gray-500">ESG Strategy & Carbon Verification</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-700 leading-[1.8] max-w-3xl mx-auto mb-10">
          RonsunAI 結合<strong>「國際碳盤查標準 (ISO 14064)」</strong>與獨家<strong>「Wismath 組織動能分析」</strong>。
          我們協助企業從溫室氣體盤查、減碳路徑規劃，到優化治理結構，實現符合國際規範且具備東方智慧的永續經營。
        </p>
        
        {/* Stats Row */}
        <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto mt-12">
          <div className="text-center">
            <div className="text-3xl font-bold text-[#C59D5F] mb-1">ISO</div>
            <div className="text-sm text-gray-500">國際標準認證</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#C59D5F] mb-1">AI</div>
            <div className="text-sm text-gray-500">智慧分析系統</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#C59D5F] mb-1">ESG</div>
            <div className="text-sm text-gray-500">永續治理顧問</div>
          </div>
        </div>
      </section>

      {/* E.S.G Strategic Pillars (Three Columns) */}
      <section className="px-6 py-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold mb-4">Our ESG Strategic Pillars</h2>
            <p className="text-gray-500">針對 E、S、G 三大面向的專業佈局</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Environmental (E) */}
            <div className="bg-[#F9F8F4] p-8 rounded-3xl border border-transparent hover:border-[#C59D5F] transition group">
              <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-6 shadow-sm">
                <Sprout className="w-7 h-7 text-[#2D6A4F]" />
              </div>
              <h3 className="text-xl font-bold mb-2">Environmental</h3>
              <p className="text-xs font-bold text-[#2D6A4F] mb-4 uppercase tracking-wide">Net Zero Path & Carbon Audit</p>
              <p className="text-base text-gray-700 mb-6 leading-[1.8]">
                專注於氣候變遷風險管理與碳資產佈局。我們提供精準的碳盤查服務，協助企業接軌國際供應鏈要求。
              </p>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2"><Leaf className="w-4 h-4 text-[#C59D5F] mt-1" /> <strong>ISO 14064-1</strong> 溫室氣體盤查</li>
                <li className="flex items-start gap-2"><Leaf className="w-4 h-4 text-[#C59D5F] mt-1" /> <strong>CBAM</strong> 碳邊境稅應對策略</li>
                <li className="flex items-start gap-2"><Leaf className="w-4 h-4 text-[#C59D5F] mt-1" /> 綠色供應鏈與能源轉型規劃</li>
              </ul>
            </div>

            {/* Social (S) - Your Unique Selling Point */}
            <div className="bg-[#F9F8F4] p-8 rounded-3xl border border-transparent hover:border-[#C59D5F] transition group relative overflow-hidden">
              <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-6 shadow-sm relative z-10">
                <Users className="w-7 h-7 text-[#C59D5F]" />
              </div>
              <h3 className="text-xl font-bold mb-2 relative z-10">Social</h3>
              <p className="text-xs font-bold text-[#C59D5F] mb-4 uppercase tracking-wide relative z-10">Human Capital & DE&I</p>
              <p className="text-base text-gray-700 mb-6 leading-[1.8] relative z-10">
                不同於傳統問卷調查，我們運用 <strong>Wismath AI</strong> 進行深度的組織相性分析，優化人才留任率與團隊動能，落實真正的多元共融 (DE&I)。
              </p>
              <ul className="space-y-3 text-sm text-gray-700 relative z-10">
                <li className="flex items-start gap-2"><Target className="w-4 h-4 text-[#1A1A1A] mt-1" /> <strong>Wismath</strong> 團隊效能診斷</li>
                <li className="flex items-start gap-2"><Target className="w-4 h-4 text-[#1A1A1A] mt-1" /> 職場健康與安全 (OHS) 優化</li>
                <li className="flex items-start gap-2"><Target className="w-4 h-4 text-[#1A1A1A] mt-1" /> 人權盡職調查與社會影響力</li>
              </ul>
              {/* Background Element */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#C59D5F]/10 rounded-bl-[4rem]"></div>
            </div>

            {/* Governance (G) */}
            <div className="bg-[#F9F8F4] p-8 rounded-3xl border border-transparent hover:border-[#C59D5F] transition group">
              <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-6 shadow-sm">
                <Scale className="w-7 h-7 text-[#1A1A1A]" />
              </div>
              <h3 className="text-xl font-bold mb-2">Governance</h3>
              <p className="text-xs font-bold text-[#1A1A1A] mb-4 uppercase tracking-wide">Risk & Compliance</p>
              <p className="text-base text-gray-700 mb-6 leading-[1.8]">
                強化董事會職能與風險管理架構。我們協助企業建立透明、當責的治理機制，確保長期穩健經營。
              </p>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2"><ShieldCheck className="w-4 h-4 text-[#C59D5F] mt-1" /> 企業風險管理 (ERM) 架構</li>
                <li className="flex items-start gap-2"><ShieldCheck className="w-4 h-4 text-[#C59D5F] mt-1" /> 資訊安全與隱私保護政策</li>
                <li className="flex items-start gap-2"><ShieldCheck className="w-4 h-4 text-[#C59D5F] mt-1" /> 永續報告書 (GRI/SASB) 編制</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Carbon Verification Deep Dive (New Section) */}
      <section className="px-6 py-32 bg-[#1A1A1A] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block px-3 py-1 border border-[#C59D5F] text-[#C59D5F] rounded-full text-xs font-bold mb-4">Carbon Management</div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
                專業碳盤查與碳足跡服務 <br/>
                <span className="text-[#C59D5F]">ISO 14064-1 Compliance</span>
              </h2>
              <p className="text-gray-300 mb-8 leading-[1.8] text-base">
                面對碳有價時代，企業必須掌握自身的排放數據。我們提供從「邊界設定」到「查證輔導」的一站式服務，協助您精準計算範疇一、二、三 (Scope 1, 2, 3) 的排放量，產出具公信力的盤查報告書。
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                  <Globe className="w-6 h-6 text-[#C59D5F] mb-2" />
                  <h4 className="font-bold text-sm">組織型碳盤查</h4>
                  <p className="text-xs text-gray-500 mt-1">ISO 14064-1</p>
                </div>
                <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                  <FileCheck className="w-6 h-6 text-[#C59D5F] mb-2" />
                  <h4 className="font-bold text-sm">產品碳足跡</h4>
                  <p className="text-xs text-gray-500 mt-1">ISO 14067</p>
                </div>
              </div>
            </div>

            {/* Process Visualization */}
            <div className="space-y-4">
              <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/10 hover:bg-white/10 transition">
                <div className="w-10 h-10 rounded-full bg-[#C59D5F] text-[#1A1A1A] flex items-center justify-center font-bold">01</div>
                <div>
                  <h4 className="font-bold">範疇界定 (Boundary Setting)</h4>
                  <p className="text-sm text-gray-300">營運邊界設定，鑑別排放源 (Scope 1/2/3)。</p>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/10 hover:bg-white/10 transition">
                <div className="w-10 h-10 rounded-full bg-[#C59D5F] text-[#1A1A1A] flex items-center justify-center font-bold">02</div>
                <div>
                  <h4 className="font-bold">數據量化 (Quantification)</h4>
                  <p className="text-sm text-gray-300">活動數據收集，排放係數選用與計算。</p>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/10 hover:bg-white/10 transition">
                <div className="w-10 h-10 rounded-full bg-[#C59D5F] text-[#1A1A1A] flex items-center justify-center font-bold">03</div>
                <div>
                  <h4 className="font-bold">報告編制 (Reporting)</h4>
                  <p className="text-sm text-gray-300">依循 GHG Protocol 或 ISO 規範產出報告書。</p>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/10 hover:bg-white/10 transition">
                <div className="w-10 h-10 rounded-full bg-[#C59D5F] text-[#1A1A1A] flex items-center justify-center font-bold">04</div>
                <div>
                  <h4 className="font-bold">外部查證 (Verification Support)</h4>
                  <p className="text-sm text-gray-300">協助通過第三方 (SGS/BSI 等) 查證取得聲明書。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Impact & Sustainability Fund Section */}
      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6">
          
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-4">
              Social Impact & Sustainability Fund
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              我們相信，企業的價值不在於獲利多少，而是在於能為世界帶來多少正向改變。RonsunAI 透過「永續基金」機制，將每一份商業合作轉化為具體的社會貢獻。
            </p>
          </div>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
            
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-none flex items-center justify-center w-12 h-12 rounded-full bg-slate-900 text-white font-serif text-xl">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">善循環撥款機制</h3>
                  <p className="text-slate-600">
                    RonsunAI 承諾將每年營收之固定比例（1-3%）撥入「Ronsun 永續基金」，專款專用於環境保護、數位落差消除與社會公益專案。
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-none flex items-center justify-center w-12 h-12 rounded-full bg-slate-900 text-white font-serif text-xl">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">碳中和與植樹計畫</h3>
                  <p className="text-slate-600">
                    除了協助企業進行 ISO 碳盤查，我們更直接參與國際認證的造林計畫。每完成一項 ESG 顧問專案，我們將以客戶名義種下原生種樹木，落實真正的「淨零排放」。
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-none flex items-center justify-center w-12 h-12 rounded-full bg-slate-900 text-white font-serif text-xl">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">數位轉型公益支持</h3>
                  <p className="text-slate-600">
                    我們運用 Wismath AI 技術協助非營利組織（NPO）進行組織健檢，並提供免費的數位名片系統，減少傳統紙張浪費，讓公益團體也能擁有高效能治理。
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100">
              <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-widest mb-6">Current Impact Dashboard</h4>
              
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-slate-700 font-medium">累積捐贈金額 (Social Donation)</span>
                    <span className="text-slate-900 font-bold">NT$ 128,000</span>
                  </div>
                  <div className="w-full bg-slate-100 h-2 rounded-full">
                    <div className="bg-slate-900 h-2 rounded-full" style={{width: "75%"}}></div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="bg-slate-50 p-4 rounded-2xl text-center">
                    <p className="text-slate-500 text-xs mb-1">節省紙質名片</p>
                    <p className="text-2xl font-bold text-slate-900">5,000+</p>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-2xl text-center">
                    <p className="text-slate-500 text-xs mb-1">協助減碳量 (kg)</p>
                    <p className="text-2xl font-bold text-slate-900">650</p>
                  </div>
                </div>

                <div className="border-t border-dashed border-slate-200 pt-6 mt-6">
                  <p className="text-xs text-slate-400 leading-relaxed italic">
                    * 註：以上數據包含 RonsunAI 內部提撥與合作夥伴之 ESG 聯名專案貢獻。我們致力於將每一筆預算轉化為可衡量的社會價值。
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Partner Showcase Section */}
      <section className="px-6 py-24 bg-gradient-to-br from-[#F5F5F0] via-white to-[#F9F8F4] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#C59D5F]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#2D6A4F]/5 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-[#1A1A1A] text-white rounded-full text-xs font-bold mb-6 tracking-wide shadow-lg">
              <Briefcase className="w-4 h-4 text-[#C59D5F]" /> 合作夥伴作品展示
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              ESG 策略顧問團隊
              <br />
              <span className="text-xl md:text-2xl mt-3 block font-light text-gray-500">
                專業電子名片展示
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-700 leading-[1.8] max-w-3xl mx-auto">
              此專案展示了我們為合作夥伴打造的數位名片，不僅提升個人品牌形象，<br className="hidden md:block" />也體現了容晟科技在 Web 應用上的實踐能力。
            </p>
          </div>

          {/* Main Content: Grid of Partner Cards */}
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Partner 1: 許耀云 */}
            <div className="relative">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-[#1A1A1A] mb-2">許耀云</h3>
                <p className="text-sm text-gray-600">ESG 策略顧問</p>
              </div>
              <div className="bg-white p-4 rounded-3xl shadow-xl border border-gray-200">
                <div className="relative aspect-[9/16] rounded-2xl overflow-hidden bg-gray-100">
                  <iframe
                    src="https://v0-yao-yun.vercel.app/"
                    className="w-full h-full"
                    title="ESG 策略顧問 許耀云 電子名片展示"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="text-center mt-6">
                <a
                  href="https://v0-yao-yun.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#1A1A1A] text-white px-6 py-3 rounded-full font-bold hover:bg-[#C59D5F] transition-all shadow-lg hover:shadow-xl group text-sm"
                >
                  開啟完整電子名片
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#C59D5F]/20 rounded-full blur-2xl -z-10"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#2D6A4F]/20 rounded-full blur-2xl -z-10"></div>
            </div>

            {/* Partner 2: Raine */}
            <div className="relative">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-[#1A1A1A] mb-2">Raine</h3>
                <p className="text-sm text-gray-600">ESG 策略顧問</p>
              </div>
              <div className="bg-white p-4 rounded-3xl shadow-xl border border-gray-200">
                <div className="relative aspect-[9/16] rounded-2xl overflow-hidden bg-gray-100">
                  <iframe
                    src="https://raine-jane-shen.github.io/Raine-Jane-Shenghp.github.io/"
                    className="w-full h-full"
                    title="ESG 策略顧問 Raine 電子名片展示"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="text-center mt-6">
                <a
                  href="https://raine-jane-shen.github.io/Raine-Jane-Shenghp.github.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#1A1A1A] text-white px-6 py-3 rounded-full font-bold hover:bg-[#C59D5F] transition-all shadow-lg hover:shadow-xl group text-sm"
                >
                  開啟完整電子名片
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#2D6A4F]/20 rounded-full blur-2xl -z-10"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#C59D5F]/20 rounded-full blur-2xl -z-10"></div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <p className="text-sm text-gray-500">
              需要為您的團隊打造專業的數位工具嗎？ <Link href="/contact" className="text-[#C59D5F] hover:underline font-bold">立即聯繫我們</Link>
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="px-6 py-24 bg-gradient-to-b from-[#F9F8F4] to-white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-[3rem] p-12 md:p-16 shadow-xl border border-gray-100 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#C59D5F]/10 rounded-bl-[4rem] -z-0"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#2D6A4F]/10 rounded-tr-[3rem] -z-0"></div>
            
            <div className="relative z-10 text-center">
              <Building2 className="w-14 h-14 text-[#C59D5F] mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Why RonsunAI?</h2>
              <blockquote className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed font-serif italic">
                「企業如人，需要正確的骨架才能長久。」
              </blockquote>
              <p className="text-lg text-gray-700 mb-10 leading-[1.8] max-w-2xl mx-auto">
                我們不僅提供冰冷的數據報告，更結合東方管理哲學，從體質根本調整。
                當碳盤查遇上 Wismath 智慧分析，我們協助您在合規的道路上，同時找到組織成長的動能。
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link href="/contact">
                  <Button 
                    size="lg"
                    className="rounded-full bg-[#1A1A1A] text-white hover:bg-[#C59D5F] px-10 py-6 text-base font-medium group shadow-lg"
                  >
                    預約診斷諮詢
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                {/* 下載服務簡介 - 未來功能 */}
                {/* <button className="text-[#1A1A1A] px-8 py-3 rounded-full font-medium hover:text-[#C59D5F] transition-colors inline-flex items-center gap-2">
                  <FileCheck className="w-4 h-4" /> 下載服務簡介
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}