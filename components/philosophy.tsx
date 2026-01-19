"use client"

import { Circle, Mountain, Sun } from "lucide-react"

const philosophyItems = [
  {
    icon: Circle,
    title: "The Bowl",
    subtitle: "Inclusivity",
    description: "ESG & Governance — embracing all stakeholders in a vessel of shared values and sustainable practice.",
    color: "text-gold",
  },
  {
    icon: Mountain,
    title: "The Mountain",
    subtitle: "Foundation",
    description: "Wellness & Trade — grounded in ancient traditions of Puer tea and mindful commerce.",
    color: "text-ink",
  },
  {
    icon: Sun,
    title: "The Sun",
    subtitle: "Wisdom",
    description: "AI & Numerology — illuminating paths forward through data-driven insight and timeless patterns.",
    color: "text-gold",
  },
]

export function Philosophy() {
  return (
    <section id="philosophy" className="py-24 md:py-32 bg-paper">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <p className="text-sm tracking-widest uppercase text-gold mb-4">Our Philosophy</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-ink text-balance">
            The Brand Totem
          </h2>
          <p className="mt-4 text-ink/60 text-lg leading-relaxed">
            Three symbols unite to form our identity — each representing a pillar of balance between tradition and innovation.
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
