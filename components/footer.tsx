const footerLinks = {
  services: [
    { name: "wismth AI", href: "https://www.wismath.work/", external: true },
    { name: "智匯賦能", href: "/ceyan" },
    { name: "大健康貿易", href: "/wellness" },
    { name: "ESG 顧問", href: "/esg" },
  ],
  ecosystem: [
    { name: "生態系統概覽", href: "/ecosystem" },
    { name: "曜寬.居 YaoKun Space", href: "https://yaokun.lovable.app/", external: true },
    { name: "AI 網站策略架構師", href: "https://v0-web-strategy-prompt-architect.vercel.app/", external: true },
  ],
  company: [
    { name: "關於創辦人", href: "/#founder" },
    { name: "品牌哲學", href: "/#philosophy" },
    { name: "聯絡我們", href: "/contact" },
  ],
  legal: [
    { name: "隱私權政策", href: "/privacy" },    // 含命理個資與 GDPR 規範
    { name: "服務條款", href: "/terms" },        // 含版權保護與 ESG 顧問責任
    { name: "退款政策", href: "/refund" },       // 區分虛擬課程與實體商品
    { name: "免責聲明", href: "/disclaimer" },   // 核心防護：術數與健康建議免責
  ],
}

import Image from "next/image"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-[#F5F5F0] pt-24 pb-12 px-6">
      <div className="max-w-screen-xl mx-auto">
        {/* Logo 區域 - 獨立一行 */}
        <div className="mb-20 pb-16 md:mb-24 md:pb-20 border-b border-[#F5F5F0]/10">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start md:justify-between">
            {/* 左側內容（桌面版左側，手機版上方） */}
            <div className="flex flex-col gap-6 order-1 md:order-1">
              {/* R 方塊 + RONSUN 文字 */}
              <Link href="/" className="flex items-center gap-4 group w-fit">
                <div className="w-12 h-12 bg-[#F5F5F0] group-hover:bg-[#C59D5F] transition-colors duration-500 rounded-sm text-[#1A1A1A] flex items-center justify-center font-serif font-bold text-2xl shadow-sm">
                  R
                </div>
                <h2 className="font-serif text-3xl group-hover:text-[#C59D5F] transition-colors duration-500">Ronsun<span className="text-[#C59D5F]">.</span></h2>
              </Link>
              
              {/* 標語（採用 Hero 主標樣式） */}
              {/* 主標：金色、襯線、字重高 */}
              <p className="text-[#C59D5F] text-2xl md:text-3xl font-serif font-bold drop-shadow-sm mb-1">
                以古智定心
              </p>
              {/* 副標：金色、襯線、字重較輕 */}
              <p className="text-[#C59D5F] text-xl md:text-2xl font-serif font-medium drop-shadow-sm mb-1">
                用科技賦能
              </p>
              {/* 第三行：白色、襯線、較小字體 */}
              <p className="text-white text-base md:text-lg font-serif font-normal drop-shadow-sm mb-0" style={{letterSpacing: '0.05em'}}>
                致力於構建生生不息的善循環。
              </p>
            </div>
            
            {/* 圖片 Logo（桌面版右側，手機版下方） */}
            <div className="relative h-20 w-48 shrink-0 order-2 md:order-2">
              <Image 
                src="/rsgwlogo.png" 
                alt="RSGW Logo" 
                width={200} 
                height={100}
                className="object-contain object-left md:object-right"
                priority
              />
            </div>
          </div>
        </div>

        {/* Links Grid - 獨立一行 */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-12 border-b border-[#F5F5F0]/10">
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

          {/* Ecosystem Column */}
          <div className="flex flex-col gap-4">
            <h4 className="text-[#C59D5F] text-xs uppercase tracking-widest mb-2">延伸作品</h4>
            {footerLinks.ecosystem.map((link) => (
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
