import Link from "next/link"
import { ArrowLeft, Shield, Lock, Database, Globe } from "lucide-react"
import { Footer } from "@/components/footer"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#F5F5F0] text-[#1A1A1A] font-sans selection:bg-[#C59D5F] selection:text-white">
      
      {/* Navigation Back */}
      <nav className="px-6 py-6 max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-[#C59D5F] transition-colors group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> 返回首頁
        </Link>
        <span className="font-serif font-bold text-lg">RonsunAI</span>
      </nav>

      {/* Hero Section */}
      <section className="px-6 py-16 md:py-24 text-center max-w-4xl mx-auto">
        <div className="mb-6 inline-block p-4 rounded-full bg-[#E2E8F0]/30 backdrop-blur-sm">
          <Shield className="w-10 h-10 text-[#C59D5F]" />
        </div>
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 leading-tight">
          隱私權政策
          <br/>
          <span className="text-2xl md:text-3xl mt-4 block font-light text-gray-500">Privacy Policy</span>
        </h1>
        <p className="text-base text-gray-600 leading-[1.8] max-w-2xl mx-auto mb-6">
          含命理個資與 GDPR 規範
        </p>
        <div className="text-sm text-gray-400">
          最後更新日期：2026 年 1 月 21 日
        </div>
      </section>

      {/* Content Section */}
      <section className="px-6 py-12 max-w-4xl mx-auto">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
          
          {/* Introduction */}
          <div className="mb-12">
            <h2 className="text-2xl font-serif font-bold mb-6">導言</h2>
            <p className="text-base text-gray-700 leading-[1.8] mb-6">
              容晟科技有限公司（以下簡稱「本公司」或「容晟」）極度重視您的隱私。
              本政策同時遵循以下<strong>國際最高合規標準</strong>：
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <a href="https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=I0050021" target="_blank" rel="noopener noreferrer" className="bg-[#F9F8F4] p-4 rounded-xl border border-gray-200 hover:border-[#C59D5F] transition-colors">
                <p className="font-bold text-[#1A1A1A] mb-1">台灣《個人資料保護法》</p>
                <p className="text-xs text-gray-500">Personal Data Protection Act (PDPA)</p>
              </a>
              <a href="https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32016R0679" target="_blank" rel="noopener noreferrer" className="bg-[#F9F8F4] p-4 rounded-xl border border-gray-200 hover:border-[#C59D5F] transition-colors">
                <p className="font-bold text-[#1A1A1A] mb-1">歐盟《一般資料保護規則》</p>
                <p className="text-xs text-gray-500">General Data Protection Regulation (GDPR)</p>
              </a>
            </div>
          </div>

          {/* Section 1: 資料收集與目的 */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-[#C59D5F]/10 rounded-lg">
                <Lock className="w-5 h-5 text-[#C59D5F]" />
              </div>
              <h2 className="text-2xl font-serif font-bold">一、資料收集與目的</h2>
            </div>
            
            <div className="space-y-4 text-base text-gray-700 leading-[1.8] pl-6">
              <p>
                本公司蒐集以下個人資料，<strong>僅用於提供服務</strong>，不作其他用途：
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>姓名：</strong>用於帳戶識別與命理分析</li>
                <li><strong>生辰八字：</strong>精確至時分，用於 AI 命理運算</li>
                <li><strong>電子郵件：</strong>用於流日建議推送、帳務通知</li>
                <li><strong>聯絡電話：</strong>僅用於緊急聯繫或物流配送</li>
                <li><strong>付款資訊：</strong>經加密處理，僅用於交易核對</li>
              </ul>
              
              <p className="mt-6">
                <strong>使用範圍：</strong>
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>AI 命理運算與分析報告產出</li>
                <li>流日建議與年度流年分析</li>
                <li>講師媒合服務（wismth 平台）</li>
                <li>帳務處理與發票開立</li>
                <li>內部系統優化與使用者體驗改善</li>
              </ul>
            </div>
          </div>

          {/* Section 2: 智慧術數特殊保護 */}
          <div className="mb-12">
            <h2 className="text-2xl font-serif font-bold mb-6">二、智慧術數特殊保護機制</h2>
            
            <div className="space-y-6 text-base text-gray-700 leading-[1.8] pl-6">
              <div>
                <h3 className="font-bold text-lg text-[#1A1A1A] mb-3">2.1 講師端遮蔽功能</h3>
                <p>
                  在 wismth 講師媒合服務中，系統提供<strong>敏感資料保護機制</strong>：
                </p>
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg mt-3">
                  <p className="text-blue-900">
                    當您選擇「隱藏出生時分」時，講師端<strong>完全無法讀取</strong>您的精確時辰資料。
                    系統僅提供講師進行分析所需的<strong>最小化資訊</strong>，確保您的隱私安全。
                  </p>
                </div>
              </div>

              <div>
                <h3 className="font-bold text-lg text-[#1A1A1A] mb-3">2.2 強連結協議</h3>
                <p>
                  若您與其他用戶（如伴侶、家人）建立「強連結」關係，可選擇：
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-3">
                  <li><strong>主動授權共享：</strong>同意對方檢視您的命理標籤（如合婚分析、親子相性）</li>
                  <li><strong>隨時撤銷：</strong>您可隨時在「隱私設定」中解除授權，系統將立即停止資料共享</li>
                  <li><strong>自發行為：</strong>此為用戶自主決定，本公司不強制或預設開啟</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Section 3: 用戶權利 */}
          <div className="mb-12">
            <h2 className="text-2xl font-serif font-bold mb-6">三、用戶權利（GDPR 保障）</h2>
            
            <div className="space-y-4 text-base text-gray-700 leading-[1.8] pl-6">
              <p>
                依據 GDPR 與台灣《個資法》，您擁有以下權利：
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>存取權：</strong>隨時要求查閱本公司保存之您的個人資料</li>
                <li><strong>更正權：</strong>若資料有誤（如出生時辰錯誤），可要求更正並重新計算報告</li>
                <li><strong>刪除權（被遺忘權）：</strong>要求完全移除您的命理檔案與個人資料</li>
                <li><strong>限制處理權：</strong>暫停特定資料之使用（如停止行銷郵件）</li>
                <li><strong>資料可攜權：</strong>要求以結構化格式（如 JSON）匯出您的資料</li>
              </ul>
              <p className="mt-4">
                行使權利請聯繫：
                <a href="mailto:privacy@ronsunai.com" className="text-[#C59D5F] hover:underline ml-2">
                  privacy@ronsunai.com
                </a>
                （將於 30 個工作天內處理）
              </p>
            </div>
          </div>

          {/* Section 4: 安全防護 */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-[#C59D5F]/10 rounded-lg">
                <Database className="w-5 h-5 text-[#C59D5F]" />
              </div>
              <h2 className="text-2xl font-serif font-bold">四、安全防護措施</h2>
            </div>
            
            <div className="space-y-4 text-base text-gray-700 leading-[1.8] pl-6">
              <p>
                本公司採用<strong>軍規級加密技術</strong>保護您的資料：
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>AES-256 加密：</strong>所有敏感資料（生辰、命盤）皆經加密儲存</li>
                <li><strong>SSL/TLS 傳輸：</strong>網路傳輸過程全程加密</li>
                <li><strong>權限分級管理：</strong>僅必要人員可存取特定資料</li>
                <li><strong>定期資安稽核：</strong>每季進行弱點掃描與滲透測試</li>
                <li><strong>雲端備份：</strong>資料異地備份，確保不因單點故障遺失</li>
              </ul>
              
              <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg mt-6">
                <p className="text-green-900 font-semibold">
                  除必要雲端運算外，本公司<strong>絕不向第三方出售</strong>您的個人資料。
                </p>
              </div>
            </div>
          </div>

          {/* Section 5: 資料保存期限 */}
          <div className="mb-12">
            <h2 className="text-2xl font-serif font-bold mb-6">五、資料保存期限</h2>
            
            <div className="space-y-4 text-base text-gray-700 leading-[1.8] pl-6">
              <p>
                本公司依據法律與業務需要，訂定以下保存期限：
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>命理檔案：</strong>自最後一次服務起保留 <strong>3 年</strong>，以便年度流年分析與歷史追蹤</li>
                <li><strong>交易記錄：</strong>依《稅捐稽徵法》保留 <strong>5 年</strong></li>
                <li><strong>行銷同意：</strong>直至您取消訂閱為止</li>
              </ul>
              
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg mt-4">
                <p className="text-amber-900">
                  <strong>自動刪除機制：</strong>超過保存期限之資料將自動加入待刪除清單，
                  於次月 1 日永久清除（財務記錄除外）。
                </p>
              </div>
            </div>
          </div>

          {/* Section 6: Cookie 使用 */}
          <div className="mb-12">
            <h2 className="text-2xl font-serif font-bold mb-6">六、Cookie 與追蹤技術</h2>
            
            <div className="space-y-4 text-base text-gray-700 leading-[1.8] pl-6">
              <p>
                本網站使用 Cookie 改善使用體驗，您可隨時在瀏覽器設定中停用：
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>必要 Cookie：</strong>維持登入狀態、購物車功能（無法停用）</li>
                <li><strong>分析 Cookie：</strong>Google Analytics 用於流量分析（可停用）</li>
                <li><strong>行銷 Cookie：</strong>個人化廣告（可停用）</li>
              </ul>
            </div>
          </div>

          {/* Section 7: 政策變更 */}
          <div className="mb-12">
            <h2 className="text-2xl font-serif font-bold mb-6">七、政策變更通知</h2>
            
            <div className="space-y-4 text-base text-gray-700 leading-[1.8] pl-6">
              <p>
                本政策若有重大變更，將：
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>於本頁面公告 <strong>30 天</strong></li>
                <li>發送電子郵件通知已註冊用戶</li>
                <li>重大調整需重新徵求您的同意</li>
              </ul>
              <p className="mt-4">
                <strong>最後更新日期：</strong>2024 年 1 月 15 日
              </p>
            </div>
          </div>

          {/* Contact Section */}
          <div className="mt-16 p-8 bg-[#F9F8F4] rounded-2xl border border-gray-100">
            <h3 className="text-xl font-bold mb-4">聯絡我們</h3>
            <p className="text-base text-gray-700 leading-[1.8] mb-4">
              若您對本隱私權政策有任何疑問，或欲行使個人資料相關權利，請透過以下方式聯繫：
            </p>
            <div className="space-y-2 text-base text-gray-700">
              <p><strong>公司名稱：</strong>容晟科技有限公司（Ronsun Technology Co., Ltd.）</p>
              <p><strong>電子郵件：</strong><a href="mailto:privacy@ronsunai.com" className="text-[#C59D5F] hover:underline">privacy@ronsunai.com</a></p>
              <p><strong>地址：</strong>台灣台北市</p>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  )
}
