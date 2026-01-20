import { Circle, Mountain, Sun } from "lucide-react"

export function Philosophy() {
  const items = [
    { char: "容", en: "Container", desc: "如茶碗，承載企業責任與繁榮。", icon: Circle },
    { char: "山", en: "Earth", desc: "如高山，連結肉身健康與大地。", icon: Mountain },
    { char: "晟", en: "Light", desc: "如旭日，以智慧科技指引方向。", icon: Sun },
  ]

  return (
    <section id="philosophy" className="py-32 bg-[#F5F5F0] relative overflow-hidden">
      {/* 裝飾性金色光暈 */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-[#C59D5F]/10 to-transparent rounded-full opacity-50 blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>

      <div className="max-w-screen-xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 border-t border-[#1A1A1A]/10 pt-16">
          {items.map((item) => (
            <div key={item.char} className="group cursor-default">
              <div className="flex items-baseline gap-4 mb-6">
                <span className="font-serif text-5xl md:text-6xl text-[#1A1A1A] group-hover:text-[#C59D5F] transition-colors duration-500">{item.char}</span>
                <span className="text-xs font-mono text-[#C59D5F] uppercase tracking-widest">{item.en}</span>
              </div>
              
              <div className="h-px w-12 bg-[#1A1A1A]/20 mb-6 group-hover:w-full transition-all duration-700 ease-out"></div>
              
              <p className="text-[#1A1A1A]/70 leading-loose text-justify font-light text-sm md:text-base pr-8">
                {item.desc}
              </p>
              
              <div className="mt-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-4 group-hover:translate-y-0">
                <item.icon className="w-6 h-6 text-[#C59D5F]/50" strokeWidth={1} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}