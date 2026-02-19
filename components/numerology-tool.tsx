"use client"

import { useState, useRef, useEffect } from "react"
import { Sparkles, TrendingUp, Shield, Search, Globe, ExternalLink, BookOpen } from "lucide-react"
import { pinyin } from "pinyin-pro"
import { 
  analyzeBrandName, 
  CORPORATE_OFFSETS,
  type CorporateType,
  NUMEROLOGY_DATABASE,
  KANGXI_STROKES,
  ENGLISH_LETTER_STROKES,
  calculateReducedNumber
} from "@/lib/numerology"

export function NumerologyTool() {
  const [brandName, setBrandName] = useState("")
  const [corporateType, setCorporateType] = useState<CorporateType | "">("")
  const [result, setResult] = useState<ReturnType<typeof analyzeBrandName> | null>(null)
  const resultRef = useRef<HTMLDivElement>(null)

  const handleAnalyze = () => {
    if (!brandName.trim()) return
    
    const analysis = analyzeBrandName(
      brandName,
      corporateType || undefined
    )
    setResult(analysis)
  }

  // 當結果更新時，自動滾動到結果區域
  useEffect(() => {
    if (result && resultRef.current) {
      resultRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [result])

  const getStatusColor = (status: string) => {
    if (status.includes("大吉")) return "text-[#2D6A4F] bg-[#2D6A4F]/10"
    if (status === "吉" || status.includes("吉帶")) return "text-[#C59D5F] bg-[#C59D5F]/10"
    if (status.includes("凶")) return "text-red-600 bg-red-50"
    return "text-gray-600 bg-gray-100"
  }

  return (
    <div className="max-w-7xl mx-auto">
      {/* Tool Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-5 py-2 bg-[#1A1A1A] text-white rounded-full text-xs font-bold mb-6 tracking-wide shadow-lg">
          <Sparkles className="w-4 h-4 text-[#C59D5F]" /> 命理數字診斷工具
        </div>
        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
          品牌命名 × 數位主權
          <br />
          <span className="text-xl md:text-2xl mt-3 block font-light text-gray-500">
            81 靈動數 + DNS 戰略佈局
          </span>
        </h2>
        <div className="text-lg text-gray-700 leading-[1.9] max-w-3xl mx-auto space-y-2">
          <p>
            結合<strong className="text-[#C59D5F]">命理學</strong>與<strong className="text-[#2D6A4F]">數位資產管理</strong>
          </p>
          <p>
            為你的品牌找到最吉祥的名字
          </p>
          <p>
            與最安全的網域策略
          </p>
        </div>
      </div>

      {/* DNS Education - Always Visible */}
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {/* Why DNS Matters - Card 1 */}
        <div className="bg-white rounded-3xl shadow-lg border border-gray-200 p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-[#C59D5F]/10 rounded-xl flex items-center justify-center">
              <Shield className="w-5 h-5 text-[#C59D5F]" />
            </div>
            <h3 className="text-base font-bold">避免數位綁架</h3>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed">
            將網域委託給代理商，就像把房子登記在仲介名下。更換廠商時可能需支付高額贖金。
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-3xl shadow-lg border border-gray-200 p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-red-50 rounded-xl flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-red-600" />
            </div>
            <h3 className="text-base font-bold">停止繳智商稅</h3>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed">
            國內代理商續約年費 1500+，官網 Cloudflare 僅 300-400 元。十年省下萬元以上。
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-3xl shadow-lg border border-gray-200 p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-[#2D6A4F]/10 rounded-xl flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-[#2D6A4F]" />
            </div>
            <h3 className="text-base font-bold">建立信任橋樑</h3>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed">
            缺乏 SSL 憑證的網站會被標示「不安全」，客戶就像看到斷橋不敢進入。
          </p>
        </div>
      </div>

      {/* Input Section */}
      <div className="bg-white rounded-3xl shadow-xl border border-gray-200 p-8 md:p-12 mb-8">
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Brand Name Input */}
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-3">
              品牌名稱
            </label>
            <input
              type="text"
              value={brandName}
              onChange={(e) => setBrandName(e.target.value)}
              placeholder="例如：容晟、ronsun"
              className="w-full px-5 py-4 border-2 border-gray-200 rounded-2xl focus:border-[#C59D5F] focus:outline-none transition-colors text-lg"
            />
          </div>

          {/* Corporate Type Select */}
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-3">
              法人主體類型 <span className="text-gray-400 font-normal">(選填)</span>
            </label>
            <select
              value={corporateType}
              onChange={(e) => setCorporateType(e.target.value as CorporateType | "")}
              className="w-full px-5 py-4 border-2 border-gray-200 rounded-2xl focus:border-[#C59D5F] focus:outline-none transition-colors text-lg bg-white"
            >
              <option value="">不選擇 / 個人品牌</option>
              {Object.entries(CORPORATE_OFFSETS).map(([type, offset]) => (
                <option key={type} value={type}>
                  {type} (+{offset} 劃)
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Analyze Button */}
        <button
          onClick={handleAnalyze}
          disabled={!brandName.trim()}
          className="w-full bg-gradient-to-r from-[#C59D5F] to-[#2D6A4F] text-white px-8 py-5 rounded-2xl font-bold text-lg hover:shadow-2xl transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 group"
        >
          <Search className="w-6 h-6 group-hover:scale-110 transition-transform" />
          開始診斷命理數字
        </button>
      </div>

      {/* Result Section */}
      {result && (
        <div className="space-y-6" ref={resultRef}>
          {/* Summary Card */}
          <div className={`bg-gradient-to-br ${
            result.isAuspicious 
              ? 'from-[#2D6A4F]/10 via-white to-[#C59D5F]/10' 
              : 'from-gray-50 via-white to-gray-50'
          } rounded-3xl shadow-xl border-2 ${
            result.isAuspicious ? 'border-[#2D6A4F]/30' : 'border-gray-200'
          } p-8 md:p-12 relative overflow-hidden`}>
            
            {/* Decorative Background */}
            {result.isAuspicious && (
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#C59D5F]/10 rounded-full blur-3xl"></div>
            )}
            
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
                <div>
                  <h3 className="text-3xl md:text-4xl font-serif font-bold mb-2">
                    {result.brandName}
                    {result.corporateType && (
                      <span className="text-xl text-gray-500 ml-3">{result.corporateType}</span>
                    )}
                  </h3>
                  <p className="text-gray-600">
                    總格 <span className="font-bold text-2xl text-[#C59D5F] mx-2">{result.totalStrokes}</span> 劃
                    {result.corporateType && (
                      <span className="text-sm">
                        ({result.baseStrokes} + {result.corporateOffset})
                      </span>
                    )}
                  </p>
                  {/* 筆畫拆解詳細資訊 */}
                  <div className="mt-3 flex flex-wrap gap-2">
                    {result.brandName.split('').filter(char => char !== ' ').map((char, index) => {
                      const strokes = ENGLISH_LETTER_STROKES[char] || KANGXI_STROKES[char] || 10
                      return (
                        <span 
                          key={index}
                          className="inline-flex items-center gap-1 px-3 py-1 bg-[#F9F8F4] rounded-full text-xs"
                        >
                          <span className="font-bold text-gray-800">{char}</span>
                          <span className="text-gray-500">{strokes}劃</span>
                        </span>
                      )
                    })}
                    {result.corporateType && (
                      <span className="inline-flex items-center gap-1 px-3 py-1 bg-[#C59D5F]/10 rounded-full text-xs">
                        <span className="font-bold text-[#C59D5F]">{result.corporateType}</span>
                        <span className="text-gray-500">+{result.corporateOffset}劃</span>
                      </span>
                    )}
                  </div>
                </div>

                {result.isAuspicious && (
                  <div className="flex items-center gap-2 px-6 py-3 bg-[#2D6A4F] text-white rounded-full font-bold shadow-lg">
                    <Sparkles className="w-5 h-5" />
                    推薦使用
                  </div>
                )}
              </div>

              {/* Numerology Info Grid */}
              <div className="grid md:grid-cols-3 gap-6">
                {/* 靈動數 */}
                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-gray-200">
                  <div className="text-sm text-gray-500 mb-2 font-bold uppercase tracking-wide">靈動數</div>
                  <div className="text-5xl font-bold text-[#C59D5F] mb-2">{result.numerologyNumber}</div>
                  <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${getStatusColor(result.numerologyInfo.status)}`}>
                    {result.numerologyInfo.status}
                  </div>
                </div>

                {/* 五行 */}
                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-gray-200">
                  <div className="text-sm text-gray-500 mb-2 font-bold uppercase tracking-wide">五行屬性</div>
                  <div className="text-5xl font-bold text-[#2D6A4F] mb-2">{result.fiveElement}</div>
                  <div className="text-xs text-gray-600">
                    {result.isEnglish ? (
                      <>
                        併數計算：{result.totalStrokes} → {calculateReducedNumber(result.totalStrokes)}
                      </>
                    ) : (
                      '根據總格個位數判定'
                    )}
                  </div>
                </div>

                {/* 卦象 */}
                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-gray-200">
                  <div className="text-sm text-gray-500 mb-2 font-bold uppercase tracking-wide">卦象名稱</div>
                  <div className="text-2xl font-bold text-gray-800 mb-2">{result.numerologyInfo.title}</div>
                  <div className="text-sm text-gray-600 leading-relaxed">
                    {result.numerologyInfo.desc}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* English Name & Domain Suggestions */}
          <div className="mt-8 bg-gradient-to-r from-[#2D6A4F]/5 to-[#C59D5F]/5 rounded-2xl p-8 border border-[#C59D5F]/20">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Globe className="w-6 h-6 text-[#2D6A4F]" />
              {result.isEnglish ? '網域建議' : '建議英文名稱與網域'}
            </h3>
            
            <div className={`grid ${result.isEnglish ? 'md:grid-cols-1' : 'md:grid-cols-2'} gap-6`}>
              {/* Pinyin Section - 僅中文顯示 */}
              {!result.isEnglish && (
              <div>
                <div className="text-sm text-gray-500 mb-2 font-bold uppercase tracking-wide">拼音建議</div>
                <div className="space-y-2">
                  <div className="bg-white p-4 rounded-xl border border-gray-200">
                    <div className="text-xs text-gray-500 mb-1">漢語拼音</div>
                    <div className="text-lg font-bold text-gray-800">
                      {pinyin(result.brandName, { toneType: 'none' })}
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-xl border border-gray-200">
                    <div className="text-xs text-gray-500 mb-1">英文域名建議（可直接用於購買 DNS）</div>
                    <div className="text-lg font-bold text-[#C59D5F]">
                      {pinyin(result.brandName, { toneType: 'none' }).replace(/\s/g, '')}
                    </div>
                  </div>
                </div>
              </div>
              )}

              {/* Domain Extensions */}
              <div>
                <div className="text-sm text-gray-500 mb-2 font-bold uppercase tracking-wide">推薦網域後綴</div>
                <div className="space-y-3">
                  <div className="p-4 bg-white rounded-xl border-2 border-[#C59D5F]">
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="font-bold text-xl">.com</span>
                      <span className="text-xs text-gray-500">商業標準配置</span>
                    </div>
                    <div className="text-xs space-y-1">
                      <p className="text-green-700">✓ 全球認可度最高，專業形象</p>
                      <p className="text-green-700">✓ 容易記憶，客戶信任度高</p>
                      <p className="text-red-600">✗ 好名稱搶手，可能已被註冊</p>
                    </div>
                  </div>

                  <div className="p-4 bg-white rounded-xl border border-gray-200">
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="font-bold text-xl">.tw</span>
                      <span className="text-xs text-gray-500">台灣在地品牌</span>
                    </div>
                    <div className="text-xs space-y-1">
                      <p className="text-green-700">✓ 強調台灣本土，在地認同感</p>
                      <p className="text-green-700">✓ 可用性較高，容易註冊成功</p>
                      <p className="text-red-600">✗ 國際市場辨識度較低</p>
                    </div>
                  </div>

                  <div className="p-4 bg-white rounded-xl border border-gray-200">
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="font-bold text-xl">.app</span>
                      <span className="text-xs text-gray-500">現代科技感</span>
                    </div>
                    <div className="text-xs space-y-1">
                      <p className="text-green-700">✓ 科技品牌專屬，創新形象</p>
                      <p className="text-green-700">✓ 強制 HTTPS，安全性高</p>
                      <p className="text-red-600">✗ 認知度較低，需要用戶教育</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Cloudflare CTA */}
            <div className="mt-6 p-5 bg-gradient-to-r from-blue-300/40 to-blue-400/40 rounded-xl shadow-lg">
              <div className="flex items-start gap-3">
                <Shield className="w-6 h-6 flex-shrink-0 mt-0.5 text-blue-700" />
                <div>
                  <h4 className="font-bold mb-2 text-gray-800">💡 專業建議：立即使用 Cloudflare 管理你的網域</h4>
                  <p className="text-sm text-gray-700 leading-relaxed mb-3">
                    開啟 WAF 防護 + 隱藏原始 IP，有效防止 DDoS 攻擊。年費僅 300-400 元，十年省下 12000+ 元。
                  </p>
                  <a 
                    href="https://www.cloudflare.com/zh-tw/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg font-bold text-sm hover:bg-blue-700 transition-all shadow-md"
                  >
                    前往 Cloudflare 註冊
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Porkbun CTA */}
            <div className="mt-4 p-5 bg-gradient-to-r from-orange-300/40 to-orange-400/40 rounded-xl shadow-lg">
              <div className="flex items-start gap-3">
                <Globe className="w-6 h-6 flex-shrink-0 mt-0.5 text-orange-700" />
                <div>
                  <h4 className="font-bold mb-2 text-gray-800">🐷 第二選擇：Porkbun 域名註冊商</h4>
                  <p className="text-sm text-gray-700 leading-relaxed mb-3">
                    價格實惠的域名註冊服務，提供免費 WHOIS 隱私保護和 SSL 憑證，適合追求性價比的使用者。
                  </p>
                  <a 
                    href="https://porkbun.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-orange-600 text-white px-4 py-2 rounded-lg font-bold text-sm hover:bg-orange-700 transition-all shadow-md"
                  >
                    前往 Porkbun 註冊
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Additional DNS Strategy */}
          <div className="bg-white rounded-3xl shadow-lg border border-gray-200 p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-[#2D6A4F]/10 rounded-xl flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-[#2D6A4F]" />
              </div>
              <h3 className="text-xl font-bold">完整數位主權檢查清單</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 p-4 bg-[#F9F8F4] rounded-xl">
                <div className="w-6 h-6 bg-[#2D6A4F] text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">✓</div>
                <div>
                  <h4 className="font-bold text-sm mb-1">網域所有權在自己名下</h4>
                  <p className="text-xs text-gray-600">Whois 查詢應顯示你的資料</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-[#F9F8F4] rounded-xl">
                <div className="w-6 h-6 bg-[#2D6A4F] text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">✓</div>
                <div>
                  <h4 className="font-bold text-sm mb-1">DNS 託管使用 Cloudflare</h4>
                  <p className="text-xs text-gray-600">免費 SSL + CDN 加速</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-[#F9F8F4] rounded-xl">
                <div className="w-6 h-6 bg-[#2D6A4F] text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">✓</div>
                <div>
                  <h4 className="font-bold text-sm mb-1">啟用 WAF 防火牆規則</h4>
                  <p className="text-xs text-gray-600">阻擋惡意流量與攻擊</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-[#F9F8F4] rounded-xl">
                <div className="w-6 h-6 bg-[#2D6A4F] text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">✓</div>
                <div>
                  <h4 className="font-bold text-sm mb-1">隱藏原始伺服器 IP</h4>
                  <p className="text-xs text-gray-600">防止直接 DDoS 攻擊</p>
                </div>
              </div>
            </div>
          </div>

          {/* All Numbers Reference */}
          <details className="bg-white rounded-3xl shadow-lg border border-gray-200 p-8 group">
            <summary className="font-bold text-lg cursor-pointer flex items-center justify-between group-open:mb-6">
              <span>📖 查看完整 1-81 靈動數對照表</span>
              <span className="text-[#C59D5F] text-sm">點擊展開</span>
            </summary>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {Object.entries(NUMEROLOGY_DATABASE).map(([num, data]) => {
                const isCurrentNumber = parseInt(num) === result.numerologyNumber
                return (
                  <div 
                    key={num} 
                    className={`p-3 rounded-xl border transition-all ${
                      isCurrentNumber 
                        ? 'bg-[#C59D5F] text-white border-[#C59D5F] shadow-lg scale-105' 
                        : 'bg-gray-50 border-gray-200 hover:border-[#C59D5F]'
                    }`}
                  >
                    <div className={`font-bold mb-1 ${isCurrentNumber ? 'text-white' : 'text-[#C59D5F]'}`}>
                      {num}
                    </div>
                    <div className={`text-xs mb-1 ${isCurrentNumber ? 'text-white' : 'text-gray-800'}`}>
                      {data.title}
                    </div>
                    <div className={`text-[10px] ${
                      isCurrentNumber 
                        ? 'text-white/80' 
                        : data.status.includes("大吉") 
                          ? 'text-[#2D6A4F] font-bold'
                          : data.status.includes("凶")
                            ? 'text-red-600'
                            : 'text-gray-500'
                    }`}>
                      {data.status}
                    </div>
                  </div>
                )
              })}
            </div>
          </details>
        </div>
      )}
    </div>
  )
}
