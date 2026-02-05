# 水墨禪風設計實作指南

## 已完成的核心變更

### 1. 基礎架構
- ✅ GlobalFilters 組件 (`components/global-filters.tsx`)
- ✅ globals.css 更新（Noto Serif TC 字體、直書模式、濾鏡樣式）
- ✅ layout.tsx 整合 GlobalFilters
- ✅ Button 組件水墨風格
- ✅ Navbar 組件新 Logo 設計
- ✅ Hero 組件水墨圓圈設計

### 2. Logo 設計方案

**R 字母方塊 Logo**：
```tsx
<div className="w-8 h-8 bg-[#1A1A1A] group-hover:bg-[#C59D5F] transition-colors duration-500 rounded-sm text-[#F5F5F0] flex items-center justify-center font-serif font-bold shadow-sm filter-brush-stroke">
  R
</div>
```

**優勢**：
- 純 CSS 實現，不依賴圖片
- SVG 濾鏡加持（filter-brush-stroke）
- 動態金色 hover 效果
- 節省資源，符合禪風

### 3. 剩餘需要完成的組件

#### Philosophy 組件
```tsx
import { Circle, Mountain, Sun } from "lucide-react"

export function Philosophy() {
  const items = [
    { char: "容", en: "Container", desc: "如茶碗，承載企業責任與繁榮。", icon: Circle },
    { char: "山", en: "Earth", desc: "如高山，連結肉身健康與大地。", icon: Mountain },
    { char: "晟", en: "Light", desc: "如旭日，以智慧科技指引方向。", icon: Sun },
  ]

  return (
    <section id="philosophy" className="py-32 bg-[#F5F5F0] relative overflow-hidden">
      {/* 裝飾性金色光暈 */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-[#C59D5F]/10 to-transparent rounded-full opacity-50 blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>

      <div className="max-w-screen-xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 border-t border-[#1A1A1A]/10 pt-16">
          {items.map((item) => (
            <div key={item.char} className="group cursor-default">
              <div className="flex items-baseline gap-4 mb-6">
                <span className="font-serif text-5xl md:text-6xl text-[#1A1A1A] group-hover:text-[#C59D5F] transition-colors duration-500">{item.char}</span>
                <span className="text-xs font-mono text-[#C59D5F] uppercase tracking-widest">{item.en}</span>
              </div>
              
              <div className="h-px w-12 bg-[#1A1A1A]/20 mb-6 group-hover:w-full transition-all duration-700 ease-out"></div>
              
              <p className="text-[#1A1A1A]/70 leading-loose text-justify font-light text-sm md:text-base pr-8">
                {item.desc}
              </p>
              
              <div className="mt-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-4 group-hover:translate-y-0">
                <item.icon className="w-6 h-6 text-[#C59D5F]/50" strokeWidth={1} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

#### Services 組件
```tsx
import { Sparkles, Leaf, BarChart3, ArrowRight } from "lucide-react"

export function Services() {
  return (
    <section id="services" className="py-32 bg-[#EAEAE5] relative">
      <div className="max-w-screen-xl mx-auto px-6 md:px-12">
        
        {/* 標題區 */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20">
          <div>
            <span className="text-xs font-bold text-[#C59D5F] tracking-[0.2em] uppercase mb-4 block">Our Expertise</span>
            <h2 className="font-serif text-4xl text-[#1A1A1A]">核心事業</h2>
          </div>
          <p className="text-[#1A1A1A]/60 max-w-md text-sm md:text-base leading-relaxed mt-6 md:mt-0">
            整合東方智慧與西方科技，我們提供跨越虛實的完整解決方案。
          </p>
        </div>

        {/* 服務列表 */}
        <div className="grid grid-cols-1 gap-px bg-[#1A1A1A]/10 border border-[#1A1A1A]/10">
          {/* Wismath AI */}
          <div className="bg-[#F5F5F0] p-10 md:p-16 hover:bg-[#F9F9F7] transition-colors group relative overflow-hidden">
            <div className="absolute top-0 right-0 p-12 opacity-0 group-hover:opacity-5 transition-opacity duration-700 transform translate-x-1/4 -translate-y-1/4">
              <Sparkles size={300} strokeWidth={0.5} />
            </div>
            
            <div className="relative z-10 flex flex-col md:flex-row gap-8 md:gap-16 items-start">
              <div className="w-12 h-12 flex items-center justify-center border border-[#1A1A1A]/10 rounded-full shrink-0 text-[#C59D5F]">
                <Sparkles size={20} strokeWidth={1.5} />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-serif text-[#1A1A1A] mb-4 group-hover:text-[#C59D5F] transition-colors">Wismath AI 智慧賦能</h3>
                <p className="text-[#1A1A1A]/60 leading-relaxed mb-8 max-w-2xl font-light">
                  結合古老易經邏輯與現代 AI 演算法。我們開發命理決策系統，並為企業提供高併發系統架構設計。這不只是軟體，是數位時代的智慧導航。
                </p>
                <a href="https://www.wismath.work" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-xs tracking-widest uppercase border-b border-[#1A1A1A] pb-1 hover:text-[#C59D5F] hover:border-[#C59D5F] transition-colors">
                  Explore Project <ArrowRight className="ml-2 w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          {/* 雙欄佈局 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#1A1A1A]/10">
            {/* Wellness */}
            <div className="bg-[#F5F5F0] p-10 md:p-12 hover:bg-[#F9F9F7] transition-colors group">
              <Leaf className="w-8 h-8 text-[#1A1A1A]/40 mb-8" strokeWidth={1} />
              <h3 className="text-xl font-serif text-[#1A1A1A] mb-4 group-hover:text-[#C59D5F] transition-colors">養生貿易</h3>
              <p className="text-[#1A1A1A]/60 text-sm leading-relaxed mb-8 min-h-[4rem]">
                身體是靈魂的殿堂。嚴選瑜伽輔具、健身器材，以及來自雲南深山的頂級普洱茶，讓自然能量流動於日常。
              </p>
              <a href="/wellness" className="text-sm text-[#1A1A1A] font-medium hover:text-[#C59D5F] transition-colors">選購商品 →</a>
            </div>

            {/* ESG */}
            <div className="bg-[#F5F5F0] p-10 md:p-12 hover:bg-[#F9F9F7] transition-colors group">
              <BarChart3 className="w-8 h-8 text-[#1A1A1A]/40 mb-8" strokeWidth={1} />
              <h3 className="text-xl font-serif text-[#1A1A1A] mb-4 group-hover:text-[#C59D5F] transition-colors">ESG 管理顧問</h3>
              <p className="text-[#1A1A1A]/60 text-sm leading-relaxed mb-8 min-h-[4rem]">
                企業如人，需正其骨。協助企業導入國際 ESG 標準，優化組織架構，打造具備韌性與永續力的商業體質。
              </p>
              <a href="/esg" className="text-sm text-[#1A1A1A] font-medium hover:text-[#C59D5F] transition-colors">諮詢服務 →</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
```

#### Founder 組件
```tsx
import { Quote } from "lucide-react"
import Image from "next/image"

export function Founder() {
  return (
    <section id="founder" className="py-32 bg-[#F5F5F0] relative overflow-hidden">
      {/* 裝飾性背景字 */}
      <span className="absolute -left-20 top-20 text-[20vw] leading-none font-serif text-[#1A1A1A]/[0.02] pointer-events-none select-none">
        FOUNDER
      </span>

      <div className="max-w-screen-xl mx-auto px-6 md:px-12 flex flex-col md:flex-row gap-16 items-center">
        
        {/* 照片區 */}
        <div className="w-full md:w-5/12 relative">
          <div className="aspect-[3/4] bg-[#EAEAE5] relative overflow-hidden rounded-sm filter-brush-stroke">
            <Image
              src="/eugene_photo.jpg"
              alt="Eugene Lai - Founder"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[#1A1A1A]/10 mix-blend-multiply"></div>
            <div className="absolute inset-4 border border-[#1A1A1A]/20"></div>
            <div className="absolute bottom-8 left-8 right-8 text-white">
              <p className="font-serif text-2xl">Eugene Lai</p>
              <p className="text-xs uppercase tracking-widest opacity-80 mt-1">Founder & CEO</p>
            </div>
          </div>
          {/* 裝飾元素 - 使用金光 */}
          <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#C59D5F]/20 rounded-full blur-xl"></div>
        </div>

        {/* 文字區 */}
        <div className="w-full md:w-7/12 md:pl-12">
          <Quote className="w-10 h-10 text-[#C59D5F] mb-8 opacity-50" strokeWidth={1} />
          
          <h2 className="font-serif text-3xl md:text-4xl text-[#1A1A1A] leading-normal mb-8">
            科技讓我們走得更快，<br />
            <span className="italic text-[#1A1A1A]/60">智慧讓我們走得更遠。</span>
          </h2>

          <div className="space-y-6 text-[#1A1A1A]/70 font-light leading-loose text-justify">
            <p>
              我是一名工程師，也是一位茶人；我研究大數據，也鑽研古老易經。這看似矛盾，實則一體。在快速變遷的數位時代，我們往往迷失了方向。
            </p>
            <p>
              容晟科技 (Ronsun) 的存在，是為了在混亂中建立秩序。無論是透過程式碼優化系統效率，還是一杯茶安頓身心，我們提供的都是一套完整的「生命解決方案」。
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
```

#### Footer 組件
```tsx
export function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-[#F5F5F0] pt-24 pb-12 px-6">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12 border-b border-[#F5F5F0]/10 pb-12">
        <div>
          <h2 className="font-serif text-3xl mb-6">Ronsun.</h2>
          <p className="text-[#F5F5F0]/40 text-sm max-w-xs leading-relaxed">
            以古智定心，用科技賦能。<br />
            致力於構建生生不息的商業善循環。
          </p>
        </div>
        
        <div className="flex gap-16">
          <div className="flex flex-col gap-4">
            <h4 className="text-[#C59D5F] text-xs uppercase tracking-widest mb-2">服務</h4>
            <a href="https://www.wismath.work" target="_blank" rel="noopener noreferrer" className="text-[#F5F5F0]/60 hover:text-white transition-colors text-sm">Wismath AI</a>
            <a href="/wellness" className="text-[#F5F5F0]/60 hover:text-white transition-colors text-sm">養生貿易</a>
            <a href="/esg" className="text-[#F5F5F0]/60 hover:text-white transition-colors text-sm">ESG 顧問</a>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="text-[#C59D5F] text-xs uppercase tracking-widest mb-2">聯絡</h4>
            <a href="/contact" className="text-[#F5F5F0]/60 hover:text-white transition-colors text-sm">聯絡我們</a>
            <a href="/#founder" className="text-[#F5F5F0]/60 hover:text-white transition-colors text-sm">關於創辦人</a>
          </div>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto pt-8 flex justify-between items-center text-[#F5F5F0]/20 text-xs">
        <p>© 2026 容晟科技有限公司 All rights reserved.</p>
        <p>Taipei, Taiwan</p>
      </div>
    </footer>
  )
}
```

### 4. 其他頁面背景色更新

所有頁面的主要容器都需要更新為：
```tsx
className="min-h-screen bg-[#F5F5F0]"
```

- wellness/page.tsx
- esg/page.tsx
- ecosystem/page.tsx
- contact/page.tsx

### 5. 關鍵 CSS 變更

**globals.css** 新增：
- Noto Serif TC 字體匯入
- 直書模式 class：`.writing-vertical-rl`
- 水墨濾鏡 class：`.filter-ink-spread`, `.filter-brush-stroke`
- 紙張紋理 class：`.paper-texture`

### 6. 測試檢查清單

- [ ] 所有頁面背景色統一為 #F5F5F0
- [ ] Navbar Logo hover 變金色
- [ ] Hero 水墨圓圈動畫
- [ ] 直書文字正確顯示
- [ ] Philosophy 卡片 hover 效果
- [ ] Services 背景圖示動畫
- [ ] Button 水墨 hover 效果
- [ ] Footer 深色背景對比
- [ ] 所有內部/外部連結正確

### 7. 部署前最終檢查

```bash
# 檢查編譯錯誤
npm run build

# 清理臨時檔案
rm -f components/philosophy-temp.tsx components/philosophy.new.tsx

# 提交變更
git add -A
git commit -m "feat: 實作水墨禪風設計系統"
git push
```

## 總結

這個設計系統成功地將：
- **東方美學**：水墨、留白、禪意
- **現代技術**：SVG 濾鏡、CSS 動畫、響應式設計
- **品牌一致性**：CIS 金色系、容晟哲學

完美融合，創造出獨特的「數位水墨」視覺體驗。
