import Link from "next/link"
import { ArrowLeft, Coffee, Droplets, FlaskConical, Leaf, Wine, Mountain, Clock, Star, Sparkles, Gift, ExternalLink } from "lucide-react"
import { Footer } from "@/components/footer"

export default function WellnessPage() {
  return (
    <div className="min-h-screen bg-[#F5F5F0] text-[#1A1A1A] font-sans selection:bg-[#C59D5F] selection:text-white">
      
      {/* Navigation Back */}
      <nav className="px-6 py-6 max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-[#C59D5F] transition-colors group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> 返回首頁
        </Link>
        <span className="font-serif font-bold text-lg">RonsunAI</span>
      </nav>

      {/* Hero Section: Brand Philosophy */}
      <section className="px-6 py-16 md:py-24 text-center max-w-5xl mx-auto">
        <div className="mb-8 inline-block p-4 rounded-full bg-[#E2E8F0]/30 backdrop-blur-sm">
          <Leaf className="w-10 h-10 text-[#C59D5F]" />
        </div>
        <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight">
          台灣風土，歲月陳韻 <br/>
          <span className="text-2xl md:text-3xl mt-4 block font-light text-gray-500">Taiwan's Terroir & Vintage Puer</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-700 leading-[1.8] max-w-3xl mx-auto mb-10">
          我們深信，<strong>台灣擁有世界上最好的烏龍茶與紅茶工藝</strong>，這是島嶼的驕傲。
          同時，我們遍尋雲南深山，只為您帶回<strong> 20 年以上的真正精品普洱</strong>。
          <br className="hidden md:block" />
          從高山的清香到時間的陳韻，這是 RonsunAI 獻給您的味覺旅程。
        </p>
      </section>

      {/* 1. Taiwan Tea Section (台灣好茶) */}
      <section className="px-6 py-24 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <div className="p-3 bg-[#E2E8F0] rounded-full">
              <Mountain className="w-6 h-6 text-[#1A1A1A]" />
            </div>
            <div>
              <h2 className="text-3xl font-serif font-bold">Island's Gift: Taiwan Tea</h2>
              <p className="text-gray-500">台灣風土系列：世界頂級的香氣工藝</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Item 1 */}
            <div className="group border-b border-gray-100 pb-8 hover:bg-gray-50 p-6 rounded-2xl transition-colors">
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="text-xl font-bold text-[#1A1A1A]">阿里山烏龍 (Alishan Oolong)</h3>
                <span className="text-[#C59D5F] font-bold">NT$ 550 <span className="text-xs text-gray-400">/ 150g</span></span>
              </div>
              <p className="text-sm text-gray-600 mb-3 italic">"High Mountain Qi, Creamy Texture"</p>
              <p className="text-gray-700 text-base leading-[1.8]">
                來自海拔 1000 公尺以上的雲霧帶。茶湯金黃透亮，帶有獨特的山頭氣與蘭花香。
                入口甘醇滑順，是台灣高山茶的經典代表，展現了這座島嶼得天獨厚的風土。
              </p>
            </div>

            {/* Item 2 */}
            <div className="group border-b border-gray-100 pb-8 hover:bg-gray-50 p-6 rounded-2xl transition-colors">
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="text-xl font-bold text-[#1A1A1A]">日月潭著蜒紅玉 (Ruby Black)</h3>
                <span className="text-[#C59D5F] font-bold">NT$ 1,650 <span className="text-xs text-gray-400">/ 75g</span></span>
              </div>
              <p className="text-sm text-gray-600 mb-3 italic">"Cinnamon, Mint, Natural Honey"</p>
              <p className="text-gray-700 text-base leading-[1.8]">
                台灣特有品種台茶 18 號。經小綠葉蟬吸食（著蜒）後，轉化出天然的蜜香、肉桂香與淡淡薄荷感。
                這款茶證明了台灣紅茶足以驚艷世界，口感層次豐富，久泡不澀。
              </p>
            </div>

            {/* Item 3 */}
            <div className="group border-b border-gray-100 pb-8 hover:bg-gray-50 p-6 rounded-2xl transition-colors">
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="text-xl font-bold text-[#1A1A1A]">蜜香貴妃茶 (Honey Concubine)</h3>
                <span className="text-[#C59D5F] font-bold">NT$ 1,500 <span className="text-xs text-gray-400">/ 150g</span></span>
              </div>
              <p className="text-sm text-gray-600 mb-3 italic">"Rich Honey Aroma, Fruity Notes"</p>
              <p className="text-gray-700 text-base leading-[1.8]">
                結合了東方美人的蜜香與凍頂烏龍的甘醇。重發酵工藝帶出熟果香氣，
                茶湯呈現琥珀色，口感溫潤如玉，是台灣製茶工藝的極致展現。
              </p>
            </div>

            {/* Item 4 */}
            <div className="group border-b border-gray-100 pb-8 hover:bg-gray-50 p-6 rounded-2xl transition-colors">
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="text-xl font-bold text-[#1A1A1A]">龍眼木功夫焙茶 (Roasted Oolong)</h3>
                <span className="text-[#C59D5F] font-bold">NT$ 550 <span className="text-xs text-gray-400">/ 75g</span></span>
              </div>
              <p className="text-sm text-gray-600 mb-3 italic">"Charcoal Roast, Deep Sweetness"</p>
              <p className="text-gray-700 text-base leading-[1.8]">
                遵循古法，使用龍眼木炭慢火烘焙。去除了茶葉的生青氣，
                轉化為沉穩的焙火香與特殊的焦糖甜韻，暖胃且耐泡。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Vintage Puer Section (雲南陳普) */}
      <section className="px-6 py-24 bg-[#1A1A1A] text-gray-300">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <div className="p-3 bg-[#C59D5F] rounded-full">
              <Clock className="w-6 h-6 text-[#1A1A1A]" />
            </div>
            <div>
              <h2 className="text-3xl font-serif font-bold text-white">Time's Treasure: Vintage Puer</h2>
              <p className="text-gray-400">歲月陳韻系列：20 年以上的精品老茶</p>
            </div>
          </div>

          <div className="grid md:grid-cols-1 gap-6">
            {/* Vintage List */}
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-gray-700 text-xs uppercase tracking-wider text-gray-500">
                    <th className="py-4 pl-4">Year & Name (年份/茶名)</th>
                    <th className="py-4">Type (工藝)</th>
                    <th className="py-4">Description (風味筆記)</th>
                    <th className="py-4 text-right pr-4">Price</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-800">
                  
                  {/* Item 1 */}
                  <tr className="group hover:bg-white/5 transition-colors">
                    <td className="py-6 pl-4 font-serif text-lg text-white">1980 班禪景茶 (Panchen)</td>
                    <td className="py-6 text-[#C59D5F]">生沱 (Raw)</td>
                    <td className="py-6 text-base max-w-md leading-[1.8] text-gray-200">
                      稀世珍品。歷經 40 多年轉化，茶氣強勁而內斂，帶有獨特的藥香與參香。
                      這是喝一泡少一泡的歷史液體，展現了時間最完美的陳化工藝。
                    </td>
                    <td className="py-6 text-right pr-4 font-bold text-white">NT$ 4,000 <span className="text-xs font-normal text-gray-500">/ 250g</span></td>
                  </tr>

                  {/* Item 2 */}
                  <tr className="group hover:bg-white/5 transition-colors">
                    <td className="py-6 pl-4 font-serif text-lg text-white">2005 永德大樹沱 (Yongde)</td>
                    <td className="py-6 text-[#C59D5F]">生沱 (Raw)</td>
                    <td className="py-6 text-base max-w-md leading-[1.8] text-gray-200">
                      選用永德茶區大樹茶菁。20 年陳期使其褪去苦澀，轉出梅子韻與木質香。
                      茶湯橙紅透亮，入口生津，是感受中期老生茶的最佳入門款。
                    </td>
                    <td className="py-6 text-right pr-4 font-bold text-white">NT$ 1,500 <span className="text-xs font-normal text-gray-500">/ 100g</span></td>
                  </tr>

                  {/* Item 3 */}
                  <tr className="group hover:bg-white/5 transition-colors">
                    <td className="py-6 pl-4 font-serif text-lg text-white">2000 雲南江城圓茶 (Jiangcheng)</td>
                    <td className="py-6 text-[#C59D5F]">生餅 (Raw)</td>
                    <td className="py-6 text-base max-w-md leading-[1.8] text-gray-200">
                      經典江城春尖料。乾倉存放，香氣純正高揚，水路細膩。
                      展現了易武茶區特有的柔美與豐富膠質，回甘持久。
                    </td>
                    <td className="py-6 text-right pr-4 font-bold text-white">NT$ 6,500 <span className="text-xs font-normal text-gray-500">/ 357g</span></td>
                  </tr>

                  {/* Item 4 */}
                  <tr className="group hover:bg-white/5 transition-colors">
                    <td className="py-6 pl-4 font-serif text-lg text-white">2000/2002 7581 熟磚 (7581 Brick)</td>
                    <td className="py-6 text-[#C59D5F]">熟磚 (Ripe)</td>
                    <td className="py-6 text-base max-w-md leading-[1.8] text-gray-200">
                      崑明茶廠經典配方。棗香濃郁，口感滑糯醇厚，毫無堆味。
                      經過 20 多年轉化，茶性溫和溫潤，最適合暖胃養生。
                    </td>
                    <td className="py-6 text-right pr-4 font-bold text-white">NT$ 2,000 <span className="text-xs font-normal text-gray-500">/ 250g</span></td>
                  </tr>
                   {/* Item 5 */}
                   <tr className="group hover:bg-white/5 transition-colors">
                    <td className="py-6 pl-4 font-serif text-lg text-white">1997 景谷磚 (Jinggu Brick)</td>
                    <td className="py-6 text-[#C59D5F]">熟磚 (Ripe)</td>
                    <td className="py-6 text-base max-w-md leading-[1.8] text-gray-200">
                       近 30 年老熟茶。陳香顯著，湯色如紅酒般深邃通透。
                       入口即化，帶有老木頭的沈穩香氣，是行家收藏級的日常口糧。
                    </td>
                    <td className="py-6 text-right pr-4 font-bold text-white">NT$ 3,500 <span className="text-xs font-normal text-gray-500">/ 250g</span></td>
                  </tr>

                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Services Section (體驗課程) */}
      <section className="px-6 py-24 bg-[#F9F8F4]">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-serif font-bold mb-12">Immersive Tea Experiences <br/><span className="text-lg text-gray-500 font-sans font-normal">從味覺到靈魂的探索</span></h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {/* Service 1 */}
            <div className="bg-white p-8 rounded-3xl border border-gray-100 hover:border-[#C59D5F] hover:shadow-lg transition group">
              <div className="w-12 h-12 bg-[#F9F8F4] rounded-xl flex items-center justify-center mb-6">
                <Coffee className="w-6 h-6 text-[#1A1A1A]" />
              </div>
              <h3 className="text-xl font-bold mb-1">茶味品評</h3>
              <p className="text-xs text-gray-400 mb-3 uppercase tracking-wide">Sensory Awakening</p>
              <div className="text-2xl font-serif text-[#C59D5F] font-bold mb-4">NT$ 680</div>
              <p className="text-base text-gray-700 leading-[1.8]">
                系統化引導，打開味蕾頻率。學習拆解茶湯層次，建立個人的品味數據庫。
              </p>
            </div>

            {/* Service 2 */}
            <div className="bg-white p-8 rounded-3xl border border-gray-100 hover:border-[#C59D5F] hover:shadow-lg transition group">
              <div className="w-12 h-12 bg-[#F9F8F4] rounded-xl flex items-center justify-center mb-6">
                <Wine className="w-6 h-6 text-[#1A1A1A]" />
              </div>
              <h3 className="text-xl font-bold mb-1">茶香調酒體驗</h3>
              <p className="text-xs text-gray-400 mb-3 uppercase tracking-wide">Tea Mixology</p>
              <div className="text-2xl font-serif text-[#C59D5F] font-bold mb-4">NT$ 780</div>
              <p className="text-base text-gray-700 leading-[1.8]">
                「從味覺到調酒，由茶開啟」。包含兩杯特調茶酒，在微醺中探索東方茶韻與西方基酒的邊界。
              </p>
            </div>

            {/* Service 3 */}
            <div className="bg-white p-8 rounded-3xl border border-gray-100 hover:border-[#C59D5F] hover:shadow-lg transition group">
              <div className="w-12 h-12 bg-[#F9F8F4] rounded-xl flex items-center justify-center mb-6">
                <FlaskConical className="w-6 h-6 text-[#1A1A1A]" />
              </div>
              <h3 className="text-xl font-bold mb-1">茶參數測試</h3>
              <p className="text-xs text-gray-400 mb-3 uppercase tracking-wide">Precision Brewing</p>
              <div className="text-2xl font-serif text-[#C59D5F] font-bold mb-4">NT$ 1,660</div>
              <p className="text-base text-gray-700 leading-[1.8]">
                協助測試並規劃最佳沖泡參數。透過實驗與數據，找出每一款茶葉釋放能量的黃金比例。
              </p>
            </div>

             {/* Service 4 */}
             <div className="bg-white p-8 rounded-3xl border border-gray-100 hover:border-[#C59D5F] hover:shadow-lg transition group">
              <div className="w-12 h-12 bg-[#F9F8F4] rounded-xl flex items-center justify-center mb-6">
                <Droplets className="w-6 h-6 text-[#1A1A1A]" />
              </div>
              <h3 className="text-xl font-bold mb-1">私人識茶</h3>
              <p className="text-xs text-gray-400 mb-3 uppercase tracking-wide">Private Session</p>
              <div className="text-2xl font-serif text-[#C59D5F] font-bold mb-4">NT$ 663</div>
              <p className="text-base text-gray-700 leading-[1.8]">
                針對店內現有茶款的深度對話。這不是上課，而是一場關於味覺的諮詢，找到您的命定之茶。
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Gift Sets (Tea Bags) - Link to Contact */}
      <section className="px-6 py-24 max-w-5xl mx-auto">
        <div className="bg-[#1A1A1A] text-white rounded-[3rem] p-12 text-center relative overflow-hidden">
          {/* Decorative background circle */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#C59D5F] rounded-full blur-[100px] opacity-20 -translate-y-1/2 translate-x-1/2"></div>
          
          <h2 className="text-3xl font-serif font-bold mb-6 relative z-10">Chromatic Tea Series (色韻茶包)</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto relative z-10 text-lg leading-[1.8]">
            四色，四韻。將台灣山林的精華濃縮於此。<br/>
            熟香包種 (綠) • 阿里山烏龍 (銀) • 蜜香貴妃 (白) • 紅玉紅茶 (紅)
          </p>
          <div className="text-4xl font-bold text-[#C59D5F] mb-10 relative z-10">NT$ 200 <span className="text-base text-gray-400 font-normal">/ 4入一組</span></div>
          
          <Link href="/contact">
            <button className="bg-white text-[#1A1A1A] px-10 py-4 rounded-full font-bold hover:bg-[#C59D5F] hover:text-white transition-all shadow-lg hover:shadow-xl relative z-10">
              預約品鑑 / 聯繫我們
            </button>
          </Link>
        </div>
      </section>

      {/* Signature Mini Cakes (Best Sellers) - UPDATED WITH EXTERNAL LINKS */}
      <section className="px-6 py-24 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1 border border-[#C59D5F] text-[#C59D5F] rounded-full text-xs font-bold mb-6 tracking-wide">
               <Star className="w-3 h-3 fill-current" /> BEST SELLERS
            </div>
            <h2 className="text-3xl font-serif font-bold mb-4">Signature Ancient Tree Mini Cakes <br/> <span className="text-2xl text-gray-500 font-sans font-normal">龍年限定古樹小茶餅</span></h2>
            <p className="text-gray-600 max-w-2xl mx-auto leading-[1.8]">
              來自雲南 1900 公尺高山，一餅一泡，鎖住新鮮。無論是 150 年古樹生茶的清甜，還是近百年熟茶的醇厚，都是現代生活的優雅儀式。
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 text-left">
            {/* Raw Cake Card (龍年古樹生茶) */}
            <div className="bg-[#F9F8F4] p-8 rounded-3xl group border border-transparent hover:border-[#C59D5F] transition-all relative overflow-hidden hover:shadow-xl flex flex-col md:flex-row gap-8 items-center md:items-start">
               {/* Image Placeholder / Visual */}
               <div className="w-full md:w-1/3 flex-shrink-0 relative">
                 <div className="absolute top-0 left-0 bg-[#C59D5F] text-white text-xs font-bold px-3 py-1 rounded-br-lg shadow-sm z-10">Sale</div>
                 <div className="aspect-square bg-white rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                   <div className="text-center">
                     <span className="font-serif text-5xl font-bold text-[#1A1A1A] opacity-20">生</span>
                     <Leaf className="w-8 h-8 text-[#556B2F] mx-auto -mt-4" />
                   </div>
                 </div>
               </div>
               
               {/* Content */}
               <div className="flex-1 w-full">
                 <h3 className="text-xl font-bold mb-1">龍年古樹普洱生茶小餅</h3>
                 <p className="text-xs text-[#556B2F] font-bold mb-3 uppercase tracking-wide">150-Year Ancient Tree • Raw Puer</p>
                 
                 <div className="flex items-baseline gap-2 mb-4">
                   <span className="text-3xl font-serif font-bold text-[#C59D5F]">NT$ 500</span>
                   <span className="text-sm text-gray-400 line-through">NT$ 600</span>
                   <span className="text-xs text-gray-500 bg-gray-200 px-2 py-1 rounded-full ml-2">10入 / 包</span>
                 </div>

                 <p className="text-gray-700 text-base mb-4 leading-[1.8]">
                   採自海拔 1,900 公尺古茶區。梅子香氣開場，轉為水蜜桃甜韻。喉韻清爽，耐泡 15-20 水。
                 </p>
                 
                 <ul className="space-y-1 mb-6 text-xs text-gray-500">
                   <li className="flex items-center gap-1"><Sparkles className="w-3 h-3 text-[#C59D5F]"/> 6-7g 獨立包裝，一餅一泡</li>
                   <li className="flex items-center gap-1"><Sparkles className="w-3 h-3 text-[#C59D5F]"/> 150年大葉種古樹精華</li>
                   <li className="flex items-center gap-1"><Gift className="w-3 h-3 text-[#C59D5F]"/> 限量 50 組</li>
                 </ul>

                 <a 
                   href="https://www.nonishops.com/products/%E9%BE%8D%E5%B9%B4%E5%8F%A4%E6%A8%B9%E6%99%AE%E6%B4%B1%E8%8C%B6%E5%B0%8F%E9%A4%85-10%E5%85%A5-" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="block w-full text-center bg-white border border-[#1A1A1A] text-[#1A1A1A] py-3 rounded-xl font-bold hover:bg-[#1A1A1A] hover:text-white transition-colors text-sm flex items-center justify-center gap-2"
                 >
                   前往商城購買 <ExternalLink className="w-4 h-4" />
                 </a>
               </div>
            </div>

            {/* Ripe Cake Card (龍年古樹熟茶) */}
            <div className="bg-[#F9F8F4] p-8 rounded-3xl group border border-transparent hover:border-[#C59D5F] transition-all relative overflow-hidden hover:shadow-xl flex flex-col md:flex-row gap-8 items-center md:items-start">
               {/* Image Placeholder / Visual */}
               <div className="w-full md:w-1/3 flex-shrink-0 relative">
                 <div className="absolute top-0 left-0 bg-[#C59D5F] text-white text-xs font-bold px-3 py-1 rounded-br-lg shadow-sm z-10">Sale</div>
                 <div className="aspect-square bg-white rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                   <div className="text-center">
                     <span className="font-serif text-5xl font-bold text-[#5c4033] opacity-20">熟</span>
                     <Coffee className="w-8 h-8 text-[#5c4033] mx-auto -mt-4" />
                   </div>
                 </div>
               </div>
               
               {/* Content */}
               <div className="flex-1 w-full">
                 <h3 className="text-xl font-bold mb-1">龍年古樹普洱熟茶小餅</h3>
                 <p className="text-xs text-[#5c4033] font-bold mb-3 uppercase tracking-wide">60-80 Year Tree • Ripe Puer</p>
                 
                 <div className="flex items-baseline gap-2 mb-4">
                   <span className="text-3xl font-serif font-bold text-[#C59D5F]">NT$ 300</span>
                   <span className="text-sm text-gray-400 line-through">NT$ 400</span>
                   <span className="text-xs text-gray-500 bg-gray-200 px-2 py-1 rounded-full ml-2">14入 / 包</span>
                 </div>

                 <p className="text-gray-700 text-base mb-4 leading-[1.8]">
                   近百年古樹製作。木質陳香醇厚，口感滑順如絲。溫潤暖胃，可連續沖泡 10 次以上。
                 </p>
                 
                 <ul className="space-y-1 mb-6 text-xs text-gray-500">
                   <li className="flex items-center gap-1"><Sparkles className="w-3 h-3 text-[#C59D5F]"/> 6-7g 完美茶量，泡茶零負擔</li>
                   <li className="flex items-center gap-1"><Sparkles className="w-3 h-3 text-[#C59D5F]"/> 傳統發酵工藝，無堆味</li>
                   <li className="flex items-center gap-1"><Gift className="w-3 h-3 text-[#C59D5F]"/> 限量 50 組</li>
                 </ul>

                 <a 
                   href="https://www.nonishops.com/products/%E9%BE%8D%E5%B9%B4%E5%8F%A4%E6%A8%B9%E6%99%AE%E6%B4%B1%E8%8C%B6%E7%86%9F%E8%8C%B6%E5%B0%8F%E9%A4%85-14%E5%85%A5-" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="block w-full text-center bg-white border border-[#1A1A1A] text-[#1A1A1A] py-3 rounded-xl font-bold hover:bg-[#1A1A1A] hover:text-white transition-colors text-sm flex items-center justify-center gap-2"
                 >
                   前往商城購買 <ExternalLink className="w-4 h-4" />
                 </a>
               </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}