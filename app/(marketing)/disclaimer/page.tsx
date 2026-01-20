import Link from "next/link"
import { ArrowLeft, AlertTriangle, Heart, Sparkles, Scale, Users } from "lucide-react"
import { Footer } from "@/components/footer"

export default function DisclaimerPage() {
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
          <AlertTriangle className="w-10 h-10 text-[#C59D5F]" />
        </div>
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 leading-tight">
          免責聲明
          <br/>
          <span className="text-2xl md:text-3xl mt-4 block font-light text-gray-500">Disclaimer</span>
        </h1>
        <p className="text-base text-gray-600 leading-[1.8] max-w-2xl mx-auto mb-6">
          核心防護：術數與健康建議免責
        </p>
        <div className="text-sm text-gray-400">
          最後更新日期：2026 年 1 月 21 日
        </div>
      </section>

      {/* Important Notice */}
      <section className="px-6 pb-12 max-w-4xl mx-auto">
        <div className="bg-amber-50 border-2 border-amber-400 rounded-2xl p-8">
          <div className="flex items-start gap-4">
            <AlertTriangle className="w-8 h-8 text-amber-600 flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-xl font-bold text-amber-900 mb-3">重要聲明</h2>
              <p className="text-base text-amber-900 leading-[1.8]">
                本公司所提供之智慧術數、命理分析、頌缽療癒、音頻共振、能量產品等服務，
                皆屬於<strong>經驗分享與心靈啟發</strong>，並非醫療診斷、法律諮詢或專業投資建議。
                請務必詳閱本免責聲明，使用服務即表示您已充分理解並同意以下內容。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="px-6 py-12 max-w-4xl mx-auto">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
          
          {/* Section 1: 身心靈服務性質 */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-[#C59D5F]/10 rounded-lg">
                <Sparkles className="w-5 h-5 text-[#C59D5F]" />
              </div>
              <h2 className="text-2xl font-serif font-bold">一、身心靈服務性質聲明</h2>
            </div>
            
            <div className="space-y-6 text-base text-gray-700 leading-[1.8] pl-6">
              <div>
                <h3 className="font-bold text-lg text-[#1A1A1A] mb-3">1.1 智慧術數與命理分析</h3>
                <p>
                  本公司提供的 Wismath 智慧術數服務（包括紫微斗數、八字命理、奇門遁甲等）
                  是基於<strong>傳統中國哲學</strong>與<strong>數據運算</strong>的結合工具，旨在提供：
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-3">
                  <li>個人性格特質分析</li>
                  <li>職涯發展方向參考</li>
                  <li>人際關係相性評估</li>
                  <li>流年運勢趨勢預測</li>
                </ul>
                
                <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg mt-6">
                  <p className="font-semibold text-red-900 mb-2">
                    ⚠️ 非科學驗證工具
                  </p>
                  <p className="text-red-900">
                    命理分析屬於<strong>傳統文化範疇</strong>，並非基於科學實證之診斷工具。
                    其結果僅供<strong>參考</strong>，不應作為人生重大決策（如醫療、訴訟、投資）之唯一依據。
                  </p>
                </div>
              </div>

              <div>
                <h3 className="font-bold text-lg text-[#1A1A1A] mb-3">1.2 頌缽療癒與音頻共振</h3>
                <p>
                  頌缽、引導冥想、密吟音頻等服務，是基於<strong>聲頻振動理論</strong>與<strong>正念練習</strong>，
                  目的在於：
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-3">
                  <li>促進身心放鬆</li>
                  <li>輔助冥想練習</li>
                  <li>提升專注力</li>
                  <li>情緒調節與壓力紓解</li>
                </ul>
                
                <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg mt-6">
                  <p className="font-semibold text-red-900 mb-2">
                    ⚠️ 非醫療行為
                  </p>
                  <p className="text-red-900">
                    頌缽療癒<strong>不能取代正規醫療</strong>。若您有身體或心理疾病（如憂鬱症、焦慮症、心血管疾病），
                    請務必尋求<strong>專業醫療機構</strong>診斷與治療。本公司提供之服務僅為<strong>輔助性質</strong>。
                  </p>
                </div>
              </div>

              <div>
                <h3 className="font-bold text-lg text-[#1A1A1A] mb-3">1.3 能量產品與精油</h3>
                <p>
                  水晶、檀木手珠、精油、香氛產品等，是基於<strong>能量學說</strong>與<strong>芳香療法</strong>之概念商品。
                  我們重視產品品質與天然來源，但無法保證：
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-3">
                  <li>特定的心理或生理療效</li>
                  <li>對所有使用者產生相同效果</li>
                  <li>能夠治療或預防任何疾病</li>
                </ul>
                <p className="mt-4">
                  <strong>過敏警示：</strong>部分精油可能引發過敏反應，孕婦、幼兒、寵物應避免直接接觸。
                  使用前請先進行<strong>皮膚敏感測試</strong>（稀釋後塗於手腕內側，觀察 24 小時）。
                </p>
              </div>
            </div>
          </div>

          {/* Section 2: 決策自主與責任歸屬 */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-[#C59D5F]/10 rounded-lg">
                <Scale className="w-5 h-5 text-[#C59D5F]" />
              </div>
              <h2 className="text-2xl font-serif font-bold">二、決策自主與責任歸屬</h2>
            </div>
            
            <div className="space-y-6 text-base text-gray-700 leading-[1.8] pl-6">
              <div>
                <h3 className="font-bold text-lg text-[#1A1A1A] mb-3">2.1 個人決策責任</h3>
                <p>
                  用戶依據本公司提供之建議、分析或產品所做出的任何決定，
                  <strong>責任完全由用戶自行承擔</strong>。本公司概不負責因此產生之任何後果，包括但不限於：
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-3">
                  <li><strong>投資決策：</strong>因命理分析決定買賣股票、房地產、虛擬貨幣等財務行為</li>
                  <li><strong>情感決策：</strong>因八字合婚分析決定結婚、離婚、分手等人生重大選擇</li>
                  <li><strong>健康決策：</strong>因頌缽療癒而延誤就醫、拒絕正規治療</li>
                  <li><strong>職涯決策：</strong>因流年分析辭職、轉職、創業等</li>
                </ul>
                
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg mt-6">
                  <p className="font-semibold text-blue-900 mb-2">
                    💡 建議做法
                  </p>
                  <p className="text-blue-900">
                    命理分析可作為<strong>思考方向</strong>與<strong>自我覺察工具</strong>，
                    但重大決策仍應結合<strong>理性分析</strong>、<strong>專業諮詢</strong>（律師、會計師、醫師）
                    及<strong>個人實際狀況</strong>綜合判斷。
                  </p>
                </div>
              </div>

              <div>
                <h3 className="font-bold text-lg text-[#1A1A1A] mb-3">2.2 非專業建議聲明</h3>
                <p className="font-semibold text-red-700">
                  本公司明確聲明，我們<strong>不提供</strong>以下專業服務：
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-3">
                  <li>
                    <strong>醫療診斷與治療：</strong>
                    任何身心不適應就醫，不應以命理或能量產品取代藥物或手術。
                  </li>
                  <li>
                    <strong>法律諮詢：</strong>
                    涉及訴訟、合約、智財權等問題，請諮詢執業律師。
                  </li>
                  <li>
                    <strong>投資理財建議：</strong>
                    金融投資應諮詢合格理財顧問（CFP）或金融機構。
                  </li>
                  <li>
                    <strong>心理治療：</strong>
                    若有心理疾病（憂鬱、躁鬱、PTSD），請尋求臨床心理師或精神科醫師協助。
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Section 3: 效果差異與個人體驗 */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-[#C59D5F]/10 rounded-lg">
                <Heart className="w-5 h-5 text-[#C59D5F]" />
              </div>
              <h2 className="text-2xl font-serif font-bold">三、效果差異與個人體驗</h2>
            </div>
            
            <div className="space-y-6 text-base text-gray-700 leading-[1.8] pl-6">
              <div>
                <h3 className="font-bold text-lg text-[#1A1A1A] mb-3">3.1 個體差異性</h3>
                <p>
                  每個人的體質、能量狀態、心理狀態皆不相同，因此對以下服務或產品的感受會有顯著差異：
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-3">
                  <li><strong>頌缽音頻：</strong>有人感到深度放鬆，有人可能無明顯感受</li>
                  <li><strong>水晶能量：</strong>效果屬主觀體驗，無法量化或保證</li>
                  <li><strong>精油芳療：</strong>嗅覺敏感度因人而異，孕婦或特殊體質者需謹慎使用</li>
                  <li><strong>茶品風味：</strong>味覺偏好主觀，無法保證符合所有人口味</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-lg text-[#1A1A1A] mb-3">3.2 無效果保證條款</h3>
                <p>
                  本公司<strong>不保證</strong>以下結果：
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-3">
                  <li>使用能量產品後，運勢、健康、財富必定改善</li>
                  <li>聆聽密吟音頻後，一定能達到特定冥想境界</li>
                  <li>命理分析的預測百分之百準確</li>
                  <li>頌缽療癒能治癒特定疾病或症狀</li>
                </ul>
                <p className="mt-4">
                  若您對產品或服務效果有疑慮，建議先參考其他用戶評價、試聽免費內容或參加體驗課程後再決定購買。
                </p>
              </div>
            </div>
          </div>

          {/* Section 4: 講師媒合風險 */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-[#C59D5F]/10 rounded-lg">
                <Users className="w-5 h-5 text-[#C59D5F]" />
              </div>
              <h2 className="text-2xl font-serif font-bold">四、講師媒合平台風險聲明</h2>
            </div>
            
            <div className="space-y-6 text-base text-gray-700 leading-[1.8] pl-6">
              <div>
                <h3 className="font-bold text-lg text-[#1A1A1A] mb-3">4.1 講師與學員自主交易</h3>
                <p>
                  Wismath 智慧術數平台提供<strong>講師與學員媒合服務</strong>，但雙方若私下進行交易（如課後收費諮詢、購買個人產品），
                  該交易行為<strong>完全獨立於平台</strong>，本公司：
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-3">
                  <li><strong>不涉入金流：</strong>私下交易之付款、退款爭議由雙方自行協商</li>
                  <li><strong>不負連帶責任：</strong>講師之專業資格、服務品質由講師自行負責</li>
                  <li><strong>不保證效果：</strong>平台外之諮詢結果不在本公司服務範圍</li>
                </ul>
                
                <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg mt-6">
                  <p className="font-semibold text-red-900 mb-2">
                    ⚠️ 私下交易風險
                  </p>
                  <p className="text-red-900">
                    若講師與學員私下成交後發生糾紛（如講師失聯、服務品質爭議、退費問題），
                    請<strong>優先自行協商</strong>或尋求消費者保護機構協助。本公司僅提供媒合功能，不介入私下契約關係。
                  </p>
                </div>
              </div>

              <div>
                <h3 className="font-bold text-lg text-[#1A1A1A] mb-3">4.2 平台內交易保障</h3>
                <p>
                  若您透過 Wismath 平台<strong>正式購買課程或諮詢服務</strong>（金流經本公司處理），則適用：
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-3">
                  <li><strong>退款機制：</strong>依本網站《退款政策》規範</li>
                  <li><strong>爭議處理：</strong>可透過平台客服協調</li>
                  <li><strong>講師審核：</strong>平台講師經基本資格審核，但仍建議學員自行評估專業度</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Section 5: ESG 顧問服務限制 */}
          <div className="mb-12">
            <h2 className="text-2xl font-serif font-bold mb-6">五、ESG 顧問服務專業限制</h2>
            
            <div className="space-y-4 text-base text-gray-700 leading-[1.8] pl-6">
              <p>
                本公司提供之 ESG 顧問服務（包含碳盤查、永續報告書編制、Wismath 組織動能分析）
                是基於專業知識與經驗，但受限於以下因素：
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>政策變動風險：</strong>
                  碳費、CBAM（碳邊境調整機制）等法規仍在調整中，本公司無法保證建議永久有效。
                </li>
                <li>
                  <strong>查證機構獨立性：</strong>
                  碳盤查報告需經第三方查證（如 SGS、BSI），本公司無法控制查證結果。
                </li>
                <li>
                  <strong>市場競爭力：</strong>
                  採用永續策略不保證企業獲利或市場地位提升。
                </li>
                <li>
                  <strong>資料準確性：</strong>
                  分析結果取決於客戶提供之數據，若數據有誤，分析亦將失真。
                </li>
              </ul>
            </div>
          </div>

          {/* Section 6: 第三方連結與廣告 */}
          <div className="mb-12">
            <h2 className="text-2xl font-serif font-bold mb-6">六、第三方連結與廣告免責</h2>
            
            <div className="space-y-4 text-base text-gray-700 leading-[1.8] pl-6">
              <p>
                本網站可能包含連結至第三方網站（如 Wismath.work、合作商城等）。
                這些外部網站之內容、隱私政策、服務品質，<strong>不在本公司控制範圍</strong>。
              </p>
              <p>
                使用第三方服務時，請自行評估風險。本公司對因第三方網站產生之任何損失概不負責。
              </p>
            </div>
          </div>

          {/* Section 7: 免責範圍總結 */}
          <div className="mb-12">
            <h2 className="text-2xl font-serif font-bold mb-6">七、免責範圍總結</h2>
            
            <div className="space-y-4 text-base text-gray-700 leading-[1.8] pl-6">
              <p className="font-semibold">
                本公司對以下情況<strong>不承擔任何責任</strong>：
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>因誤信命理建議導致之財務損失、情感糾紛、健康問題</li>
                <li>因使用能量產品（水晶、精油）導致之過敏、不適或意外</li>
                <li>因延誤就醫而使用頌缽療癒導致之病情惡化</li>
                <li>因網路中斷、系統故障無法觀看課程（將補償觀看期限）</li>
                <li>因個人電腦或行動裝置問題無法播放音頻（非本公司技術問題）</li>
                <li>因茶葉、食品儲存不當（如受潮、過期）導致之品質問題</li>
              </ul>
            </div>
          </div>

          {/* Acceptance Statement */}
          <div className="mt-16 p-8 bg-[#1A1A1A] text-white rounded-2xl">
            <h3 className="text-xl font-bold mb-4 text-[#C59D5F]">同意聲明</h3>
            <p className="text-base leading-[1.8]">
              當您使用本公司任何服務、購買產品或課程時，即表示您已<strong>完整閱讀並理解</strong>本免責聲明，
              並<strong>自願承擔</strong>所有使用風險。若您不同意本聲明任何內容，請勿使用本公司服務。
            </p>
          </div>

          {/* Contact Section */}
          <div className="mt-16 p-8 bg-[#F9F8F4] rounded-2xl border border-gray-100">
            <h3 className="text-xl font-bold mb-4">如有疑問</h3>
            <p className="text-base text-gray-700 leading-[1.8] mb-4">
              若您對本免責聲明有任何疑問，請隨時與我們聯繫：
            </p>
            <div className="space-y-2 text-base text-gray-700">
              <p><strong>電子郵件：</strong><a href="mailto:legal@ronsunai.com" className="text-[#C59D5F] hover:underline">legal@ronsunai.com</a></p>
              <p><strong>客服時間：</strong>週一至週五 10:00-18:00（台灣時間）</p>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  )
}
