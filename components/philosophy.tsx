"use client"

import { Circle, Mountain, Sun } from "lucide-react"

const philosophyItems = [
  {
    icon: Circle,
    title: "容（茶碗）",
    subtitle: "大器包容",
    description: "我們像一只茶碗，透過 ESG 與管理顧問，為企業打造穩固的治理容器，承載責任與長遠的繁榮。",
    color: "text-gold",
  },
  {
    icon: Mountain,
    title: "山（高山）",
    subtitle: "連結大地",
    description: "我們像巍峨高山，透過瑜伽、健身與茶葉貿易，強化人們的肉身健康，將純淨的能量帶入日常生活。",
    color: "text-ink",
  },
  {
    icon: Sun,
    title: "晟（旭日）",
    subtitle: "智慧指引",
    description: "我們像初升旭日，透過 AI 智慧術數、密吟與系統架構設計，以科技之光驅散迷霧，為決策提供清晰的方向。",
    color: "text-gold",
  },
]

export function Philosophy() {
  return (
    <section id="philosophy" className="py-24 md:py-32 bg-paper">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <p className="text-sm tracking-widest uppercase text-gold mb-4">我們的哲學</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-ink text-balance">
            容納萬物，日晟於山
          </h2>
          <p className="mt-4 text-ink/60 text-lg leading-relaxed">
            容晟 (Ronsun) 的精神，源自於一個微縮的宇宙圖騰。
          </p>
        </div>

        {/* Philosophy Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {philosophyItems.map((item, index) => (
            <div
              key={item.title}
              className="group relative bg-sage/30 rounded-3xl p-8 md:p-10 border border-sage hover:border-gold/30 transition-all duration-300 hover:shadow-lg hover:shadow-gold/5"
            >
              {/* Icon */}
              <div className="mb-6">
                <div className="w-14 h-14 rounded-2xl bg-paper flex items-center justify-center border border-sage">
                  <item.icon className={`w-7 h-7 ${item.color}`} strokeWidth={1.5} />
                </div>
              </div>

              {/* Content */}
              <div>
                <p className="text-sm text-gold tracking-wide uppercase mb-2">{item.subtitle}</p>
                <h3 className="font-serif text-2xl text-ink mb-3">{item.title}</h3>
                <p className="text-ink/60 leading-relaxed">{item.description}</p>
              </div>

              {/* Index Number */}
              <div className="absolute top-8 right-8 font-serif text-6xl text-ink/5 font-bold">
                {String(index + 1).padStart(2, '0')}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
