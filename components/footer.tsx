const footerLinks = {
  services: [
    { name: "Wismath AI", href: "https://www.wismath.work", external: true },
    { name: "養生貿易", href: "/wellness" },
    { name: "ESG 顧問", href: "/esg" },
  ],
  company: [
    { name: "關於創辦人", href: "/#founder" },
    { name: "品牌哲學", href: "/#philosophy" },
    { name: "聯絡我們", href: "/contact" },
  ],
  legal: [
    { name: "隱私權政策", href: "#" },
    { name: "服務條款", href: "#" },
    { name: "退款政策", href: "#" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-[#F5F5F0] pt-24 pb-12 px-6">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12 border-b border-[#F5F5F0]/10 pb-12">
        {/* Brand Column */}
        <div>
          <h2 className="font-serif text-3xl mb-6">Ronsun<span className="text-[#C59D5F]">.</span></h2>
          <p className="text-[#F5F5F0]/40 text-sm max-w-xs leading-relaxed">
            以古智定心，用科技賦能。<br />
            致力於構建生生不息的商業善循環。
          </p>
        </div>

        {/* Links Grid */}
        <div className="flex gap-16">
          {/* Services Column */}
          <div className="flex flex-col gap-4">
            <h4 className="text-[#C59D5F] text-xs uppercase tracking-widest mb-2">服務</h4>
            {footerLinks.services.map((link) => (
              <a 
                key={link.name}
                href={link.href} 
                className="text-[#F5F5F0]/60 hover:text-white transition-colors text-sm"
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noopener noreferrer' : undefined}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Company Column */}
          <div className="flex flex-col gap-4">
            <h4 className="text-[#C59D5F] text-xs uppercase tracking-widest mb-2">公司</h4>
            {footerLinks.company.map((link) => (
              <a 
                key={link.name}
                href={link.href} 
                className="text-[#F5F5F0]/60 hover:text-white transition-colors text-sm"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Legal Column */}
          <div className="flex flex-col gap-4">
            <h4 className="text-[#C59D5F] text-xs uppercase tracking-widest mb-2">法律</h4>
            {footerLinks.legal.map((link) => (
              <a 
                key={link.name}
                href={link.href} 
                className="text-[#F5F5F0]/60 hover:text-white transition-colors text-sm"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-screen-xl mx-auto pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[#F5F5F0]/20 text-xs">
        <p>© 2026 容晟科技有限公司 (Ronsun Technology Co., Ltd.) 版權所有</p>
        <p>Taipei, Taiwan</p>
      </div>
    </footer>
  )
}
