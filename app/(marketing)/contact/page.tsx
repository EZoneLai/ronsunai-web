import Link from "next/link"
import { ArrowLeft, MapPin, Phone, Mail, MessageSquare, Clock } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#F9F8F4] text-[#1A1A1A] font-sans selection:bg-[#C59D5F] selection:text-white">
      
      {/* Navigation Back */}
      <nav className="px-6 py-6 max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-[#C59D5F] transition-colors group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> 返回首頁
        </Link>
        <span className="font-serif font-bold text-lg">RonsunAI</span>
      </nav>

      {/* Hero Section */}
      <section className="px-6 py-12 md:py-20 text-center max-w-4xl mx-auto">
        <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#E2E8F0] text-gray-600 text-sm font-bold tracking-wide">
          <MessageSquare className="w-4 h-4 text-[#C59D5F]" /> Let's Talk
        </div>
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 leading-tight">
          連結智慧，共創善韻 <br/>
          <span className="text-2xl md:text-3xl mt-4 block font-light text-gray-500">Connect with RonsunAI</span>
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto mb-10">
          無論是尋求 ESG 企業診斷、預約 Wismath 諮詢，還是品鑑一壺好茶。<br/>
          我們都在這裡，期待與您開啟一場有深度的對話。
        </p>
      </section>

      {/* Contact Cards Section */}
      <section className="px-6 pb-24 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Card 1: Address */}
          <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 hover:border-[#C59D5F] hover:shadow-lg transition group text-center">
            <div className="w-16 h-16 mx-auto bg-[#F9F8F4] rounded-full flex items-center justify-center mb-6 group-hover:bg-[#1A1A1A] transition-colors">
              <MapPin className="w-8 h-8 text-[#C59D5F] group-hover:text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">Visit Us</h3>
            <p className="text-gray-500 text-sm mb-4">歡迎預約來訪品茶與諮詢</p>
            <div className="text-gray-800 font-medium leading-relaxed">
              台北市士林區大南路115號2樓之6
              <span className="block text-sm text-gray-500 mt-2">
                2F-6, No. 115, Danan Rd., <br/> Shilin Dist., Taipei City
              </span>
            </div>
          </div>

          {/* Card 2: Phone */}
          <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 hover:border-[#C59D5F] hover:shadow-lg transition group text-center">
            <div className="w-16 h-16 mx-auto bg-[#F9F8F4] rounded-full flex items-center justify-center mb-6 group-hover:bg-[#1A1A1A] transition-colors">
              <Phone className="w-8 h-8 text-[#C59D5F] group-hover:text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">Call Us</h3>
            <p className="text-gray-500 text-sm mb-4">週一至週五 10:00 - 18:00</p>
            <div className="text-gray-800 font-medium text-lg">
              <a href="tel:+886921978006" className="hover:text-[#C59D5F] transition-colors">
                +886 921-978-006
              </a>
              <div className="text-sm text-gray-500 mt-2 font-serif">
                賴宥均 (Eugene Lai)
              </div>
            </div>
          </div>

          {/* Card 3: Email */}
          <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 hover:border-[#C59D5F] hover:shadow-lg transition group text-center">
            <div className="w-16 h-16 mx-auto bg-[#F9F8F4] rounded-full flex items-center justify-center mb-6 group-hover:bg-[#1A1A1A] transition-colors">
              <Mail className="w-8 h-8 text-[#C59D5F] group-hover:text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">Email Us</h3>
            <p className="text-gray-500 text-sm mb-4">專案合作與業務洽詢</p>
            <div className="text-gray-800 font-medium text-lg">
              <a href="mailto:contact@ronsunai.com" className="hover:text-[#C59D5F] transition-colors">
                contact@ronsunai.com
              </a>
              <div className="text-sm text-gray-500 mt-2">
                我們會於 24 小時內回覆
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Google Map Embed (Optional Visual) */}
      <section className="w-full h-[400px] bg-gray-200 grayscale opacity-80 hover:grayscale-0 transition-all duration-700">
         {/* Google Maps 地圖：台北市士林區大南路115號2樓之6 */}
         <iframe 
           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.5!2d121.5218!3d25.0950!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDA1JzQyLjAiTiAxMjHCsDMxJzE4LjUiRQ!5e0!3m2!1szh-TW!2stw!4v1737360000000!5m2!1szh-TW!2stw" 
           width="100%" 
           height="100%" 
           style={{ border: 0 }} 
           allowFullScreen={true} 
           loading="lazy"
           title="RonsunAI Office Location"
         ></iframe>
      </section>

      {/* Footer Simple */}
      <footer className="bg-[#1A1A1A] text-gray-500 py-8 text-center text-sm">
        <p>© 2026 Ronsun Technology Co., Ltd. All Rights Reserved.</p>
      </footer>

    </div>
  )
}