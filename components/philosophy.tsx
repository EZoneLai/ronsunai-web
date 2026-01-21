import { Circle, Mountain, Sun } from "lucide-react"

export function Philosophy() {
  const items = [
    { 
      char: "容", 
      en: "The Container", 
      desc: "如茶碗，承載企業責任與繁榮。",
      descEn: "Like a vessel, we embrace our duty to hold and nurture prosperity for all.",
      icon: Circle 
    },
    { 
      char: "山", 
      en: "The Earth", 
      desc: "如高山，連結肉身健康與大地。",
      descEn: "Like a mountain, we ground technology in the reality of physical health and stability.",
      icon: Mountain 
    },
    { 
      char: "晟", 
      en: "The Light", 
      desc: "如旭日，以智慧科技指引方向。",
      descEn: "Like the rising sun, we illuminate the path forward with the light of AI wisdom.",
      icon: Sun 
    },
  ]

  return (
    <section id="philosophy" className="py-32 bg-[#F5F5F0] relative overflow-hidden">
      {/* 裝飾性金色光暈 */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-[#C59D5F]/10 to-transparent rounded-full opacity-50 blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>

      <div className="max-w-screen-xl mx-auto px-6 md:px-12">
        
        {/* Header Section: 標題 + Logo + 總標語 */}
        <div className="text-center mb-20 space-y-4 flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl font-serif font-light tracking-wide text-[#1A1A1A] mb-2">
            容晟之道
          </h2>
          {/* 品牌 logo，標題下方，帶淡金色光暈 */}
          <div className="flex justify-center items-center mb-4">
            <img
              src="/rslogo.png"
              alt="RS Logo"
              className="w-32 md:w-48 h-auto object-contain drop-shadow-lg rounded"
              style={{background: 'transparent'}}
            />
          </div>
          <div className="w-16 h-0.5 bg-[#C59D5F] mx-auto"></div>
          <p className="text-xl md:text-2xl font-light text-[#1A1A1A]/70 mt-6">
            以「容」為基，承載大地責任
          </p>
          <p className="text-xl md:text-2xl font-light text-[#1A1A1A]/70">
            以「晟」為引，智啟未來光明
          </p>
          <p className="text-xs md:text-sm font-sans tracking-widest text-[#1A1A1A]/50 uppercase mt-3">
            Rooted in Responsibility, Guided by Wisdom.
          </p>
        </div>

        {/* 3-Column Grid: 核心哲學 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {items.map((item) => (
            <div 
              key={item.char} 
              className="flex flex-col items-center text-center p-8 md:p-10 border-t-4 border-[#1A1A1A]/10 hover:border-[#C59D5F] transition-all duration-500 bg-white/60 backdrop-blur-sm shadow-sm hover:shadow-md group"
            >
              {/* Icon */}
              <div className="w-16 h-16 mb-6 text-[#C59D5F] group-hover:scale-110 transition-transform duration-500">
                <item.icon className="w-full h-full" strokeWidth={1.5} />
              </div>
              
              {/* 中文標題 */}
              <h3 className="text-4xl md:text-5xl font-serif mb-2 text-[#1A1A1A] group-hover:text-[#C59D5F] transition-colors duration-500">
                {item.char}
              </h3>
              
              {/* 英文副標題 */}
              <span className="text-xs font-bold tracking-widest text-[#1A1A1A]/40 uppercase mb-6">
                {item.en}
              </span>
              
              {/* 中文描述 */}
              <p className="text-[#1A1A1A]/85 font-light mb-3 leading-relaxed">
                {item.desc}
              </p>
              
              {/* 英文描述 */}
              <p className="text-sm text-[#1A1A1A]/60 leading-relaxed">
                {item.descEn}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}