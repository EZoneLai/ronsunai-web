import Link from "next/link"
import { Shield, FileText, RefreshCw, AlertCircle } from "lucide-react"

const legalCards = [
  {
    title: "隱私權政策",
    desc: "保護您的個人資料與隱私權，詳情請參閱本政策。",
    href: "/privacy",
    icon: <Shield className="w-10 h-10 text-[#C59D5F] mb-4" />
  },
  {
    title: "服務條款",
    desc: "規範本網站及服務的使用方式與權利義務。",
    href: "/terms",
    icon: <FileText className="w-10 h-10 text-[#C59D5F] mb-4" />
  },
  {
    title: "退款政策",
    desc: "說明消費者於本平台申請退款的相關規則。",
    href: "/refund",
    icon: <RefreshCw className="w-10 h-10 text-[#C59D5F] mb-4" />
  },
  {
    title: "免責聲明",
    desc: "本網站資訊僅供參考，詳情請見免責聲明。",
    href: "/disclaimer",
    icon: <AlertCircle className="w-10 h-10 text-[#C59D5F] mb-4" />
  }
]

export default function Legal() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <nav className="px-0 py-2 max-w-7xl mx-auto flex justify-start items-center mb-8">
        <Link href="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-[#C59D5F] transition-colors group">
          <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none"><path d="M19 12H5M12 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          返回首頁
        </Link>
      </nav>
      <h1 className="text-3xl font-serif font-bold mb-12 text-[#C59D5F] text-center">法律條款</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {legalCards.map(card => (
          <div key={card.title} className="bg-white rounded-2xl shadow p-8 flex flex-col items-center text-center border border-[#EAEAE5]">
            {card.icon}
            <h2 className="text-xl font-semibold mb-2 text-[#1A1A1A]">{card.title}</h2>
            <p className="text-base text-[#1A1A1A]/70 mb-6">{card.desc}</p>
            <Link href={card.href} className="px-6 py-2 rounded-full bg-[#C59D5F] text-white font-medium shadow hover:bg-[#B89B5A] transition-colors">查看詳情</Link>
          </div>
        ))}
      </div>
    </main>
  )
}
