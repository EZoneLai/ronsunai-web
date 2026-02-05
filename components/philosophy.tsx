import { Brain, GitBranch } from "lucide-react"

export function Philosophy() {
  return (
    <section id="philosophy" className="py-32 bg-[#F5F5F0] relative overflow-hidden">
      {/* 裝飾性金色光暈 */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-[#C59D5F]/10 to-transparent rounded-full opacity-50 blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>

      {/* Section 1：主標+次標+圖形（智慧與科技） */}
      <div className="max-w-screen-md mx-auto px-6 md:px-12 mb-20 flex flex-col items-center gap-8">
        <Brain className="w-20 h-20 text-[#C59D5F] mb-4" strokeWidth={2} />
        <h1 className="text-2xl md:text-3xl font-serif font-semibold text-[#1A1A1A] mb-2 text-center whitespace-nowrap">
          用智慧與科技，讓關鍵決策更穩定
        </h1>
        <h2 className="text-lg md:text-xl font-light text-[#1A1A1A]/80 mb-2 text-center">
          RonsunAI 結合 AI、系統設計與東方智慧，<br />
          為個人與企業提供可持續的決策支持
        </h2>
        <p className="text-base md:text-lg text-[#C59D5F] font-serif font-semibold text-center tracking-widest mb-2">
          Empowered by Technology · Centered by Ancient Wisdom
        </p>
        <p className="text-base md:text-lg text-[#C59D5F] font-serif font-semibold text-center tracking-widest mb-2">
          以科技賦能 · 以古智定心
        </p>
      </div>

      {/* Section 2：理念說明+圖形（選擇與結構） */}
      <div className="max-w-screen-md mx-auto px-6 md:px-12 mb-20 flex flex-col items-center gap-8">
        <GitBranch className="w-24 h-24 text-[#C59D5F] mb-4" strokeWidth={2} />
        <p className="text-base md:text-lg text-[#1A1A1A]/80 text-center mb-2">
          在人生與事業的關鍵轉折，我們相信：<br />
          結構化的參考，能讓選擇更有底氣；<br />
          決策不再只是直覺，而是融合智慧與系統的深度判斷；<br />
          面對資訊洪流，找到真正適合自己的判斷框架，<br />
          是每一位領導者與創業者的底層能力。
        </p>
        <p className="text-base md:text-lg text-[#1A1A1A]/60 text-center mb-2">
          In pivotal moments of life and business, we believe:<br />
          Structured references empower confident choices.<br />
          Decisions are not just intuition, but deep judgment integrating wisdom and systems.<br />
          Amidst information overload, finding a truly suitable framework<br />
          is the foundation for every leader and entrepreneur.
        </p>
      </div>

      {/* Section 3：容晟山哲學區域（中英文） - 容晟左右，山下方同寬承接 */}
      <div className="max-w-screen-xl mx-auto px-6 md:px-12 flex flex-col gap-10 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-8">
          {/* 容：左側（碗公，與山同寬） */}
          <div className="bg-[#F5F5F0] rounded-2xl shadow p-10 flex flex-col items-center">
            <svg width="96" height="64" viewBox="0 0 96 64" className="mb-6">
              <path d="M8 32 Q48 60 88 32 Q48 64 8 32 Z" fill="#C59D5F" stroke="#C59D5F" strokeWidth="2" />
              <ellipse cx="48" cy="32" rx="40" ry="16" fill="none" stroke="#C59D5F" strokeWidth="2" />
            </svg>
            <h3 className="text-2xl md:text-3xl font-serif font-semibold text-[#C59D5F] mb-2">容</h3>
            <p className="text-base md:text-lg text-[#1A1A1A]/80 text-center mb-1">
              包容萬物，承載責任。<br />
              是企業與個人穩健成長的基石。
            </p>
            <p className="text-base md:text-lg text-[#1A1A1A]/60 text-center">
              Embracing all, holding responsibility.<br />
              The foundation for sustainable growth.
            </p>
          </div>
          {/* 晟：右側（太陽，與容同寬） */}
          <div className="bg-[#F5F5F0] rounded-2xl shadow p-10 flex flex-col items-center">
            <svg width="96" height="64" viewBox="0 0 90 90" className="mb-6">
              <circle cx="45" cy="45" r="28" fill="#C59D5F" />
              {Array.from({length:12}).map((_,i)=>{
                const angle = (i*30)*Math.PI/180;
                const x1 = 45 + Math.cos(angle)*32;
                const y1 = 45 + Math.sin(angle)*32;
                const x2 = 45 + Math.cos(angle)*40;
                const y2 = 45 + Math.sin(angle)*40;
                return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#C59D5F" strokeWidth="2" />;
              })}
            </svg>
            <h3 className="text-2xl md:text-3xl font-serif font-semibold text-[#C59D5F] mb-2">晟</h3>
            <p className="text-base md:text-lg text-[#1A1A1A]/80 text-center mb-1">
              智慧啟明，照亮方向。<br />
              是決策與創新的持續動能。
            </p>
            <p className="text-base md:text-lg text-[#1A1A1A]/60 text-center">
              Illuminating the path with wisdom.<br />
              The driving force for decision and innovation.
            </p>
          </div>
        </div>
        {/* 山：下方橫跨，寬度等於容＋晟總寬 */}
        <div className="flex justify-center items-center">
          <div className="bg-[#F5F5F0] rounded-2xl shadow p-10 flex flex-col items-center w-full max-w-4xl">
            <svg width="384" height="96" viewBox="0 0 384 96" className="mb-6">
              <path d="M0 96 L96 48 L192 80 L288 32 L384 96" stroke="#C59D5F" strokeWidth="6" fill="none" />
            </svg>
            <h4 className="text-xl md:text-2xl font-serif font-semibold text-[#C59D5F] mb-2">山</h4>
            <p className="text-base md:text-lg text-[#1A1A1A]/80 text-center mb-1">
              穩定根基，承載全局。<br />
              是人生與商業系統的底層結構。
            </p>
            <p className="text-base md:text-lg text-[#1A1A1A]/60 text-center">
              Steadfast foundation, supporting the whole.<br />
              The underlying structure of life and business.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}