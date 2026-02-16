import Link from "next/link"
import { ArrowLeft, FileText, Copyright, AlertTriangle, Scale } from "lucide-react"
import { Footer } from "@/components/footer"

export default function TermsPage() {
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
          <FileText className="w-10 h-10 text-[#C59D5F]" />
        </div>
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 leading-tight">
          服務條款
          <br/>
          <span className="text-2xl md:text-3xl mt-4 block font-light text-gray-500">Terms of Service</span>
        </h1>
        <p className="text-base text-gray-600 leading-[1.8] max-w-2xl mx-auto mb-6">
          含版權保護與 ESG 顧問責任
        </p>
        <div className="text-sm text-gray-400">
          最後更新日期：2024 年 1 月 15 日
        </div>
      </section>

      {/* Content Section */}
      <section className="px-6 py-12 max-w-4xl mx-auto">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
          
          {/* Introduction */}
          <div className="mb-12">
            <h2 className="text-2xl font-serif font-bold mb-6">導言</h2>
            <p className="text-base text-gray-700 leading-[1.8] mb-6">
              本條款為<strong>「容晟科技有限公司」</strong>之總體規範，適用於旗下所有品牌與服務：
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-[#F9F8F4] p-4 rounded-xl text-center">
                <p className="font-bold text-[#C59D5F]">智慧術數</p>
                <p className="text-xs text-gray-500 mt-1">wismth</p>
              </div>
              <div className="bg-[#F9F8F4] p-4 rounded-xl text-center">
                <p className="font-bold text-[#C59D5F]">RSUN.ME</p>
                <p className="text-xs text-gray-500 mt-1">容晟雲端活碼</p>
              </div>
              <div className="bg-[#F9F8F4] p-4 rounded-xl text-center">
                <p className="font-bold text-[#C59D5F]">容晟嚴選</p>
                <p className="text-xs text-gray-500 mt-1">Ronsun Select</p>
              </div>
            </div>
          </div>

          {/* Section 0: 會員帳號規範 */}
          <div className="mb-12">
            <h2 className="text-2xl font-serif font-bold mb-6">一、會員帳號規範（Ronsun ID）</h2>
            
            <div className="space-y-4 text-base text-gray-700 leading-[1.8] pl-6">
              <p>
                您於本公司任一平台註冊之帳號（<strong>Ronsun ID</strong>），均受本條款規範。
                透過單一帳號，您可存取 wismth、RSUN.ME 及容晟嚴選等所有服務。
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>真實資訊：</strong>您同意提供真實、準確且完整的註冊資訊</li>
                <li><strong>密碼安全：</strong>您有責任妥善保管帳號密碼，不得與他人共享</li>
                <li><strong>帳號責任：</strong>您的帳號下所有活動均由您本人負責</li>
                <li><strong>異常處理：</strong>若發現帳號遭盜用或異常登入，請立即通知本公司</li>
              </ul>
            </div>
          </div>

          {/* Section 1: 智慧財產權與版權保護 */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-[#C59D5F]/10 rounded-lg">
                <Copyright className="w-5 h-5 text-[#C59D5F]" />
              </div>
              <h2 className="text-2xl font-serif font-bold">二、智慧財產權與版權保護</h2>
            </div>
            
            <div className="space-y-6 text-base text-gray-700 leading-[1.8] pl-6">
              <div>
                <h3 className="font-bold text-lg text-[#1A1A1A] mb-3">2.1 版權歸屬</h3>
                <p>
                  本公司所有數位內容，其著作權均屬<strong>容晟科技有限公司</strong>所有：
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-3">
                  <li>線上課程影片（Wismath 術數教學、聲頻療癒課程）</li>
                  <li>術數教學講義、工作簿、參考資料</li>
                  <li>音頻檔案（頌缽療癒、引導冥想等）</li>
                  <li>ESG 顧問報告模型、碳盤查工具</li>
                  <li>RSUN.ME 雲端活碼版型與設計</li>
                  <li>網站設計、圖片、Logo、視覺元素</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-lg text-[#1A1A1A] mb-3">2.2 使用限制</h3>
                <p>
                  用戶購買後，<strong>僅限個人非商業使用</strong>。嚴禁以下行為：
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-3">
                  <li><strong>錄影、側錄、螢幕擷取</strong>課程內容</li>
                  <li><strong>轉售、散佈</strong>或公開傳播數位檔案</li>
                  <li>將內容用於<strong>商業培訓</strong>或營利目的（需另行洽談企業授權）</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-lg text-[#1A1A1A] mb-3">2.3 違約賠償</h3>
                <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg">
                  <p className="font-semibold text-amber-900 mb-2">
                    ⚠️ 違反者需承擔<strong>課程售價 100 倍</strong>之懲罰性違約金
                  </p>
                  <p className="text-amber-900">
                    本公司將依《著作權法》追究刑事責任，並請求民事賠償（含律師費用、商譽損失）。
                    侵權帳號將永久停權。
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: 合作夥伴與進出口免責 */}
          <div className="mb-12">
            <h2 className="text-2xl font-serif font-bold mb-6">三、合作夥伴與進出口免責</h2>
            
            <div className="space-y-6 text-base text-gray-700 leading-[1.8] pl-6">
              <div>
                <h3 className="font-bold text-lg text-[#1A1A1A] mb-3">3.1 進出口代理服務</h3>
                <p>
                  本公司提供之報關、物流代辦服務，僅為<strong>代理角色</strong>。
                  以下情況本公司不負賠償責任：
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-3">
                  <li><strong>海關查驗延誤：</strong>因海關抽驗、文件補件導致之時間延誤</li>
                  <li><strong>不可抗力：</strong>天災、戰爭、罷工、港口壅塞等非本公司可控因素</li>
                  <li><strong>政策變動：</strong>進口國法規突然變更導致之額外關稅或禁運</li>
                  <li><strong>貨物瑕疵：</strong>本公司僅負責運輸協調，商品品質由供應商負責</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-lg text-[#1A1A1A] mb-3">3.2 RSUN.ME 經銷商規範</h3>
                <p>
                  RSUN.ME 容晟雲端活碼（Ronsun LiveLink™）經銷商須遵守以下規範：
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-3">
                  <li><strong>禁止誇大宣傳：</strong>不得誇大系統功能或承諾不切實際之獲利保證</li>
                  <li><strong>價格規範：</strong>應遵守本公司建議售價，不得惡意削價競爭</li>
                  <li><strong>品牌一致性：</strong>所有行銷素材需經本公司審核，不得擅自修改品牌形象</li>
                  <li><strong>違約處理：</strong>違反上述規定者，本公司保留終止授權並求償之權利</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Section 4: 服務變更 */}
          <div className="mb-12">
            <h2 className="text-2xl font-serif font-bold mb-6">四、服務變更與終止</h2>
            
            <div className="space-y-4 text-base text-gray-700 leading-[1.8] pl-6">
              <p>
                本公司保留隨時修改或終止以下項目之權利：
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>服務功能（如 Wismath 新增或移除特定命盤分析功能）</li>
                <li>產品品項（如容晟嚴選之茶葉、精油品項調整）</li>
                <li>價格與優惠方案（將提前 7 日公告於官網）</li>
                <li>系統維護與升級（將提前通知並選擇離峰時段）</li>
              </ul>
              <p className="mt-4">
                若因本公司因素導致服務中斷超過 <strong>48 小時</strong>，
                將依比例退還該期間之費用或延長使用期限。
              </p>
            </div>
          </div>

          {/* Section 5: ESG 顧問服務責任 */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-[#C59D5F]/10 rounded-lg">
                <Scale className="w-5 h-5 text-[#C59D5F]" />
              </div>
              <h2 className="text-2xl font-serif font-bold">五、ESG 顧問服務責任與限制</h2>
            </div>
            
            <div className="space-y-6 text-base text-gray-700 leading-[1.8] pl-6">
              <div>
                <h3 className="font-bold text-lg text-[#1A1A1A] mb-3">5.1 服務範圍</h3>
                <p>
                  本公司提供之 ESG 顧問服務包含：
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-3">
                  <li>ISO 14064-1 溫室氣體盤查輔導</li>
                  <li>碳足跡計算與減碳路徑規劃</li>
                  <li>Wismath 組織動能分析（非傳統人力資源顧問）</li>
                  <li>ESG 報告書編制（GRI、SASB 框架）</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-lg text-[#1A1A1A] mb-3">5.2 專業盡職義務</h3>
                <p>
                  本公司承諾：
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-3">
                  <li>所有顧問皆具備相關專業背景與實務經驗</li>
                  <li>依據最新國際標準（ISO、GHG Protocol）提供服務</li>
                  <li>保護客戶商業機密，簽署保密協議（NDA）</li>
                  <li>提供客觀、中立之分析與建議</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-lg text-[#1A1A1A] mb-3">5.3 責任限制</h3>
                <p>
                  用戶理解並同意：
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-3">
                  <li>
                    <strong>查證責任：</strong>
                    本公司提供之碳盤查報告僅為<strong>內部管理工具</strong>，
                    若需通過第三方查證機構（如 SGS、BSI）認證，需另行申請查證服務。
                  </li>
                  <li>
                    <strong>政策風險：</strong>
                    因政府法規變動（如碳費調整、CBAM 實施細則）導致之成本增加，本公司不負賠償責任。
                  </li>
                  <li>
                    <strong>決策自主：</strong>
                    客戶依據本公司建議所做出之任何商業決策（如投資綠能、調整供應鏈），
                    其成效與風險由客戶自行承擔。
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Section 6: 付款與發票 */}
          <div className="mb-12">
            <h2 className="text-2xl font-serif font-bold mb-6">六、付款與發票</h2>
            
            <div className="space-y-4 text-base text-gray-700 leading-[1.8] pl-6">
              <ul className="list-disc pl-6 space-y-2">
                <li>本公司接受信用卡、銀行轉帳、第三方支付（如綠界、藍新）</li>
                <li>發票將於付款完成後 7 個工作天內開立（電子發票或紙本發票）</li>
                <li>若需統一編號或三聯式發票，請於購買時備註，事後恕不補開</li>
                <li>海外客戶若需 PayPal 或國際匯款，請聯繫客服處理</li>
              </ul>
            </div>
          </div>

          {/* Section 7: 法律管轄與爭議解決 */}
          <div className="mb-12">
            <h2 className="text-2xl font-serif font-bold mb-6">七、法律管轄與爭議解決</h2>
            
            <div className="space-y-4 text-base text-gray-700 leading-[1.8] pl-6">
              <ul className="list-disc pl-6 space-y-2">
                <li>本服務條款之解釋與適用，以<strong>中華民國法律</strong>為準據法</li>
                <li>雙方若有爭議，同意以<strong>台灣台北地方法院</strong>為第一審管轄法院</li>
                <li>海外用戶若有爭議，可先透過線上調解或仲裁解決</li>
              </ul>
            </div>
          </div>

          {/* Section 8: 條款變更 */}
          <div className="mb-12">
            <h2 className="text-2xl font-serif font-bold mb-6">八、條款變更通知</h2>
            
            <div className="space-y-4 text-base text-gray-700 leading-[1.8] pl-6">
              <p>
                本公司保留隨時修訂本服務條款之權利。重大變更將於網站公告，
                並以電子郵件通知已註冊會員。繼續使用本服務即視為您同意修訂後之條款。
              </p>
              <p className="mt-4">
                <strong>最後更新日期：</strong>2024 年 1 月 15 日
              </p>
            </div>
          </div>

          {/* Contact Section */}
          <div className="mt-16 p-8 bg-[#F9F8F4] rounded-2xl border border-gray-100">
            <h3 className="text-xl font-bold mb-4">聯絡我們</h3>
            <p className="text-base text-gray-700 leading-[1.8] mb-4">
              若您對本服務條款有任何疑問，請透過以下方式聯繫：
            </p>
            <div className="space-y-2 text-base text-gray-700">
              <p><strong>公司名稱：</strong>容晟科技有限公司（Ronsun Technology Co., Ltd.）</p>
              <p><strong>電子郵件：</strong><a href="mailto:legal@ronsunai.com" className="text-[#C59D5F] hover:underline">legal@ronsunai.com</a></p>
              <p><strong>地址：</strong>台灣台北市</p>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  )
}
