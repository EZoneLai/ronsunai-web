import Link from "next/link"
import { ArrowLeft, RotateCcw, Package, ShoppingBag, Clock } from "lucide-react"
import { Footer } from "@/components/footer"

export default function RefundPage() {
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
          <RotateCcw className="w-10 h-10 text-[#C59D5F]" />
        </div>
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 leading-tight">
          退款政策
          <br/>
          <span className="text-2xl md:text-3xl mt-4 block font-light text-gray-500">Refund Policy</span>
        </h1>
        <p className="text-base text-gray-600 leading-[1.8] max-w-2xl mx-auto mb-6">
          區分虛擬課程與實體商品
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
            <p className="text-base text-gray-700 leading-[1.8] mb-6">
              容晟科技有限公司（以下簡稱「本公司」）重視消費者權益。
              本退款政策依據<strong>台灣《消費者保護法》</strong>及<strong>歐盟消費者保護指令</strong>制定，
              針對「虛擬課程與數位內容」及「實體商品」分別說明退款規範。
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg mt-6">
              <p className="text-blue-900 font-semibold">
                💡 重要提醒：虛擬課程與實體商品適用不同退款規則，請務必詳閱。
              </p>
            </div>
          </div>

          {/* Section 1: 虛擬課程與數位內容 */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-[#C59D5F]/10 rounded-lg">
                <Package className="w-5 h-5 text-[#C59D5F]" />
              </div>
              <h2 className="text-2xl font-serif font-bold">一、虛擬課程與數位內容</h2>
            </div>
            
            <div className="space-y-6 text-base text-gray-700 leading-[1.8] pl-6">
              <div>
                <h3 className="font-bold text-lg text-[#1A1A1A] mb-3">1.1 不適用七天鑑賞期</h3>
                <p>
                  根據《通訊交易解除權合理例外情事適用準則》第 2 條第 5 款規定：
                </p>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-3">
                  <p className="italic">
                    「非以有形媒介提供之數位內容或一經提供即為完成之線上服務，經消費者事先同意始提供者。」
                  </p>
                </div>
                <p className="mt-4">
                  因此，以下數位商品<strong>一經啟動播放、下載或存取</strong>，即視為服務已提供，
                  <strong className="text-red-600">不適用七天無條件退貨</strong>：
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-3">
                  <li>線上課程影片（如 Wismath 術數課程、密吟音頻課程）</li>
                  <li>可下載之電子書、講義、工作簿</li>
                  <li>命理報告（紫微斗數、八字分析等）</li>
                  <li>ESG 顧問服務報告（碳盤查、組織動能分析）</li>
                  <li>任何數位音頻檔案（頌缽療癒、引導冥想）</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-lg text-[#1A1A1A] mb-3">1.2 訂閱制取消規則</h3>
                <p>
                  針對 Wismath 智慧術數平台、E-Zone 數位名片訂閱服務：
                </p>
                <div className="space-y-3 mt-3">
                  <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg">
                    <p className="text-amber-900">
                      <strong>當期費用不退還：</strong>取消訂閱當期已付費用不退還，但服務保留至當期結束日。
                    </p>
                    <p className="text-sm text-amber-700 mt-2">
                      例：1 月 15 日訂閱月費，1 月 20 日取消 → 可繼續使用至 2 月 15 日，但不退還 1 月費用。
                    </p>
                  </div>
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                    <p className="text-blue-900">
                      <strong>自動續約取消：</strong>取消後次月不再扣款，無解約金。
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-bold text-lg text-[#1A1A1A] mb-3">1.3 退費階梯制度</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-green-500 pl-4">
                    <p className="font-semibold text-green-700 mb-2">
                      ✅ 可全額退費情況
                    </p>
                    <p>
                      購買後<strong>未曾開啟課程</strong>（系統記錄觀看進度為 0%）
                      且於<strong> 7 日內</strong>提出退費申請者，可全額退費（扣除匯款手續費 30 元）。
                    </p>
                  </div>

                  <div className="border-l-4 border-red-500 pl-4">
                    <p className="font-semibold text-red-700 mb-2">
                      ❌ 不接受退費情況
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>已觀看任何課程內容（哪怕只有 1 分鐘）</li>
                      <li>已下載電子檔案或講義</li>
                      <li>超過購買 7 日後提出申請</li>
                      <li>參加限時優惠或特價活動購買之商品（除非商品本身有瑕疵）</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-bold text-lg text-[#1A1A1A] mb-3">1.3 退費申請流程</h3>
                <ol className="list-decimal pl-6 space-y-2">
                  <li>於購買 7 日內寄送電子郵件至 <a href="mailto:refund@ronsunai.com" className="text-[#C59D5F] hover:underline">refund@ronsunai.com</a></li>
                  <li>主旨註明「退費申請 - 訂單編號 XXXXXXX」</li>
                  <li>附上購買證明（訂單截圖或發票）</li>
                  <li>本公司將於 <strong>3 個工作天</strong>內審核並回覆</li>
                  <li>核准後，款項將於 <strong>7-14 個工作天</strong>退回原付款帳戶</li>
                </ol>
              </div>

              <div>
                <h3 className="font-bold text-lg text-[#1A1A1A] mb-3">1.4 課程異常處理</h3>
                <p>
                  若因以下<strong>本公司技術問題</strong>導致您無法正常觀看課程，
                  不受上述退費限制，可隨時申請全額退費或免費重新觀看：
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-3">
                  <li>影片無法播放或持續卡頓（排除用戶自身網路問題）</li>
                  <li>課程內容與介紹嚴重不符</li>
                  <li>購買後課程突然下架且未提前通知</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Section 2: 實體商品 */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-[#C59D5F]/10 rounded-lg">
                <ShoppingBag className="w-5 h-5 text-[#C59D5F]" />
              </div>
              <h2 className="text-2xl font-serif font-bold">二、實體商品（茶葉、精油、珠寶）</h2>
            </div>
            
            <div className="space-y-6 text-base text-gray-700 leading-[1.8] pl-6">
              <div>
                <h3 className="font-bold text-lg text-[#1A1A1A] mb-3">2.1 適用七天鑑賞期之商品</h3>
                <p>
                  以下商品符合《消保法》第 19 條，享有<strong>七天猶豫期</strong>（含例假日）：
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-3">
                  <li>珠寶飾品（水晶、檀木手珠）</li>
                  <li>頌缽、磬、銅器等能量工具</li>
                  <li>書籍、實體教材</li>
                </ul>
                <p className="mt-4 font-semibold">
                  退貨條件：商品須保持<strong>完整包裝、未使用、配件齊全</strong>。
                  運費由消費者自行負擔（商品瑕疵除外）。
                </p>
              </div>

              <div>
                <h3 className="font-bold text-lg text-[#1A1A1A] mb-3">2.2 衛生與安全限制（不適用鑑賞期）</h3>
                <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg">
                  <p className="font-semibold text-amber-900 mb-2">
                    ⚠️ 以下商品基於衛生考量，<strong>一經拆封即不接受退換貨</strong>：
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-amber-900">
                    <li>茶葉（包括台灣烏龍茶、普洱茶等，真空包裝破損即視為拆封）</li>
                    <li>精油、香氛產品（含薰衣草精油、檀香等）</li>
                    <li>養生食品、保健品</li>
                    <li>個人化定制商品（如刻字手珠、客製化茶罐）</li>
                  </ul>
                </div>
                <p className="mt-4">
                  法源依據：《通訊交易解除權合理例外情事適用準則》第 2 條第 1 款
                  「易於腐敗、保存期限較短或解約時即將逾期」及第 8 款「個人衛生用品」。
                </p>
              </div>

              <div>
                <h3 className="font-bold text-lg text-[#1A1A1A] mb-3">2.3 瑕疵商品處理</h3>
                <p>
                  若您收到的實體商品有以下瑕疵，請於<strong> 48 小時內</strong>聯繫客服：
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-3">
                  <li>商品破損、裂痕（珠寶、頌缽）</li>
                  <li>茶葉受潮、發霉、異味</li>
                  <li>配送錯誤（收到非訂購之商品）</li>
                  <li>數量短缺</li>
                </ul>
                <p className="mt-4">
                  <strong>證據要求：</strong>請提供「開箱錄影」或清晰照片，
                  本公司將於確認瑕疵後<strong>全權負擔來回運費</strong>並提供：
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-3">
                  <li>免費換貨（同款商品）</li>
                  <li>全額退款（含運費）</li>
                  <li>或提供等值折價券補償</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-lg text-[#1A1A1A] mb-3">2.4 國際運送退貨</h3>
                <p>
                  海外訂單（台灣以外地區）退貨規則：
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-3">
                  <li><strong>非瑕疵退貨：</strong>需自行負擔國際運費及關稅（不予退還）</li>
                  <li><strong>瑕疵商品：</strong>本公司補貼運費上限為商品售價之 30%</li>
                  <li><strong>遺失風險：</strong>建議使用可追蹤之國際快遞（如 DHL、FedEx）</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Section 3: 特殊服務退費 */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-[#C59D5F]/10 rounded-lg">
                <Clock className="w-5 h-5 text-[#C59D5F]" />
              </div>
              <h2 className="text-2xl font-serif font-bold">三、特殊服務退費（命理諮詢、ESG 顧問）</h2>
            </div>
            
            <div className="space-y-6 text-base text-gray-700 leading-[1.8] pl-6">
              <div>
                <h3 className="font-bold text-lg text-[#1A1A1A] mb-3">3.1 命理諮詢服務</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>預約後未進行諮詢：</strong>可於諮詢前 48 小時取消並全額退費</li>
                  <li><strong>諮詢進行中取消：</strong>已使用時數按比例收費（每小時 NT$ 3,000）</li>
                  <li><strong>報告交付後：</strong>不接受退費（報告已產出且涉及個人隱私）</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-lg text-[#1A1A1A] mb-3">3.2 ESG 顧問專案</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>簽約後 7 日內：</strong>可無條件解約並退還全額（扣除已產生之差旅費）</li>
                  <li><strong>專案進行中：</strong>按完成階段比例收費（如已完成盤查但未編制報告，收取 60% 費用）</li>
                  <li><strong>報告交付後：</strong>不接受退費</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Section 4: 退款處理時間 */}
          <div className="mb-12">
            <h2 className="text-2xl font-serif font-bold mb-6">四、退款處理時間表</h2>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold">付款方式</th>
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold">退款處理時間</th>
                  </tr>
                </thead>
                <tbody className="text-base">
                  <tr>
                    <td className="border border-gray-200 px-4 py-3">信用卡</td>
                    <td className="border border-gray-200 px-4 py-3">7-14 個工作天（依發卡銀行而定）</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3">銀行轉帳</td>
                    <td className="border border-gray-200 px-4 py-3">3-5 個工作天</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3">第三方支付（綠界、藍新）</td>
                    <td className="border border-gray-200 px-4 py-3">5-10 個工作天</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3">PayPal（國際）</td>
                    <td className="border border-gray-200 px-4 py-3">3-7 個工作天</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Contact Section */}
          <div className="mt-16 p-8 bg-[#F9F8F4] rounded-2xl border border-gray-100">
            <h3 className="text-xl font-bold mb-4">退款諮詢</h3>
            <p className="text-base text-gray-700 leading-[1.8] mb-4">
              若您對退款流程有任何疑問，請透過以下方式聯繫客服團隊：
            </p>
            <div className="space-y-2 text-base text-gray-700">
              <p><strong>退款專線：</strong><a href="mailto:refund@ronsunai.com" className="text-[#C59D5F] hover:underline">refund@ronsunai.com</a></p>
              <p><strong>客服時間：</strong>週一至週五 10:00-18:00（台灣時間，例假日除外）</p>
              <p><strong>緊急聯繫：</strong>Line 官方帳號 @ronsunai（僅處理緊急瑕疵案件）</p>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  )
}
