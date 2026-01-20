"use client"

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden bg-[#F5F5F0]">
      {/* 背景紋理 */}
      <div className="absolute inset-0 opacity-40 pointer-events-none mix-blend-multiply paper-texture"></div>
      
      <div className="relative z-10 max-w-screen-xl mx-auto w-full px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        
        {/* 左側：直書文字 */}
        <div className="md:col-span-4 order-2 md:order-1 flex justify-center md:justify-start">
          <div className="flex gap-8 md:gap-12 h-[60vh] md:h-[50vh] items-start select-none">
            {/* 副標 */}
            <h2 className="writing-vertical-rl text-lg md:text-xl text-[#1A1A1A]/60 tracking-[0.5em] font-light leading-loose border-l border-[#1A1A1A]/10 pl-6 h-full flex items-center">
              <span>構建生生不息的商業善循環</span>
            </h2>
            
            {/* 主標 - 使用 CIS 金色強調 */}
            <h1 className="writing-vertical-rl text-4xl md:text-6xl text-[#1A1A1A] font-serif tracking-[0.2em] leading-relaxed font-medium h-full flex items-start">
              <span className="text-[#C59D5F] drop-shadow-sm font-semibold">以古智定心</span>
              <span className="mt-8">用科技賦能</span>
            </h1>
          </div>
        </div>

        {/* 右側：水墨意象 */}
        <div className="md:col-span-8 order-1 md:order-2 flex items-center justify-center relative">
          {/* 模擬水墨圓 (Ensō) */}
          <div className="relative w-[300px] h-[300px] md:w-[500px] md:h-[500px] flex items-center justify-center">
            {/* 外暈染 */}
            <div className="absolute inset-0 bg-[#1A1A1A] rounded-full opacity-[0.03] scale-110 filter-ink-spread animate-pulse duration-[4000ms]"></div>
            {/* 主墨跡 */}
            <div className="absolute inset-4 border-[2px] md:border-[4px] border-[#1A1A1A]/80 rounded-full filter-brush-stroke opacity-80 rotate-12"></div>
            {/* 金色線條 */}
            <div className="absolute inset-8 border-[1px] border-[#C59D5F]/60 rounded-full filter-brush-stroke rotate-[-20deg]"></div>
            
            {/* 核心內容 */}
            <div className="text-center relative z-10 p-8 backdrop-blur-sm bg-[#F5F5F0]/30 rounded-full">
              <p className="font-serif text-lg md:text-2xl text-[#1A1A1A] mb-2">Ronsun<span className="text-[#C59D5F]">.</span></p>
              <p className="text-xs uppercase tracking-[0.3em] text-[#1A1A1A]/50">AI & Wellness</p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-[#1A1A1A]/30 flex flex-col items-center gap-4">
        <div className="w-px h-16 bg-gradient-to-b from-[#1A1A1A]/0 via-[#1A1A1A]/20 to-[#1A1A1A]/0"></div>
        <span className="text-[10px] tracking-[0.3em] uppercase rotate-90 origin-center translate-y-2">Scroll</span>
      </div>
    </section>
  )
}
