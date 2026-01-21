"use client"

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#F5F5F0] pt-32 md:pt-0">
      {/* 背景紋理 */}
      <div className="absolute inset-0 opacity-40 pointer-events-none mix-blend-multiply paper-texture"></div>
      
      <div className="relative z-10 max-w-screen-xl mx-auto w-full px-6 md:px-12 py-12 md:py-0">
        {/* 手機版與平板：垂直堆疊，保持直書 */}
        <div className="flex flex-col lg:hidden gap-8 items-center">
          {/* 水墨圓 - 手機/平板版 - 調整位置到中央 */}
          <div className="flex items-center justify-center relative -mt-[2vh] md:mt-[18vh]">
            <div className="relative w-[240px] h-[240px] md:w-[320px] md:h-[320px] flex items-center justify-center">
              <div className="absolute inset-0 bg-[#1A1A1A] rounded-full opacity-[0.03] scale-110 filter-ink-spread animate-pulse duration-[4000ms]"></div>
              <div className="absolute inset-3 border-[2px] border-[#1A1A1A]/80 rounded-full filter-brush-stroke opacity-80 rotate-12"></div>
              <div className="absolute inset-6 border-[1px] border-[#C59D5F]/60 rounded-full filter-brush-stroke rotate-[-20deg]"></div>
              
              <div className="text-center relative z-10 p-6 backdrop-blur-sm bg-[#F5F5F0]/30 rounded-full">
                <p className="font-serif text-lg md:text-xl text-[#1A1A1A] mb-1">Ronsun<span className="text-[#C59D5F]">.</span></p>
                <p className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] text-[#1A1A1A]/50">AI & Wellness</p>
              </div>
            </div>
          </div>
          
          {/* 文字 - 手機/平板版直書 - 增加高度 */}
          <div className="flex justify-center gap-6 md:gap-10 min-h-[40vh] md:min-h-[45vh] items-start select-none">
            {/* 副標 - 拿掉「商業」 */}
            <h2 className="writing-vertical-rl text-sm md:text-base text-[#1A1A1A]/60 tracking-[0.5em] font-light leading-loose border-l border-[#1A1A1A]/10 pl-4 md:pl-6 flex items-center">
              <span>構建生生不息的善循環</span>
            </h2>
            
            {/* 主標 - 確保兩句分行且有足夠空間 */}
            <h1 className="writing-vertical-rl text-3xl md:text-4xl font-serif tracking-[0.2em] leading-relaxed font-medium flex items-start">
              <span className="text-[#1A1A1A] flex flex-col">
                <span className="text-[#C59D5F] drop-shadow-sm font-semibold block mb-6 md:mb-8">以古智定心</span>
                <span className="block">用科技賦能</span>
              </span>
            </h1>
          </div>
        </div>

        {/* 桌面版：網格佈局 */}
        <div className="hidden lg:grid grid-cols-12 gap-12 items-center mt-[10vh]">
          {/* 左側：直書文字 - 增加高度 */}
          <div className="col-span-4 flex justify-start">
            <div className="flex gap-12 min-h-[50vh] items-start select-none">
              {/* 副標 - 拿掉「商業」 */}
              <h2 className="writing-vertical-rl text-lg text-[#1A1A1A]/60 tracking-[0.5em] font-light leading-loose border-l border-[#1A1A1A]/10 pl-6 flex items-center">
                <span>構建生生不息的善循環</span>
              </h2>
              
              {/* 主標 - 確保兩句分行且有足夠空間 */}
              <h1 className="writing-vertical-rl text-5xl font-serif tracking-[0.2em] leading-relaxed font-medium flex items-start">
                <span className="text-[#1A1A1A] flex flex-col">
                  <span className="text-[#C59D5F] drop-shadow-sm font-semibold block mb-8">以古智定心</span>
                  <span className="block">用科技賦能</span>
                </span>
              </h1>
            </div>
          </div>

          {/* 右側：水墨意象 */}
          <div className="col-span-8 flex items-center justify-center relative">
            <div className="relative w-[420px] h-[420px] flex items-center justify-center">
              <div className="absolute inset-0 bg-[#1A1A1A] rounded-full opacity-[0.03] scale-110 filter-ink-spread animate-pulse duration-[4000ms]"></div>
              <div className="absolute inset-4 border-[3px] border-[#1A1A1A]/80 rounded-full filter-brush-stroke opacity-80 rotate-12"></div>
              <div className="absolute inset-8 border-[1px] border-[#C59D5F]/60 rounded-full filter-brush-stroke rotate-[-20deg]"></div>
              
              <div className="text-center relative z-10 p-8 backdrop-blur-sm bg-[#F5F5F0]/30 rounded-full">
                <p className="font-serif text-2xl text-[#1A1A1A] mb-2">Ronsun<span className="text-[#C59D5F]">.</span></p>
                <p className="text-xs uppercase tracking-[0.3em] text-[#1A1A1A]/50">AI & Wellness</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll 指示器 - 僅桌面版 */}
      <div className="hidden lg:flex absolute bottom-12 left-1/2 -translate-x-1/2 text-[#1A1A1A]/30 flex-col items-center gap-4">
        <div className="w-px h-16 bg-gradient-to-b from-[#1A1A1A]/0 via-[#1A1A1A]/20 to-[#1A1A1A]/0"></div>
        <span className="text-[10px] tracking-[0.3em] uppercase rotate-90 origin-center translate-y-2">Scroll</span>
      </div>
    </section>
  )
}
