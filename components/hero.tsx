import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="px-6 py-20 md:py-32 text-center max-w-5xl mx-auto">
      <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight bg-gradient-to-br from-ink via-ink to-gold bg-clip-text">
        以古老智慧定心，<br />用未來科技賦能。
      </h1>
      <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-10">
        從 AI 決策、身心健康貿易到 ESG 永續治理，容晟致力於構建一個生生不息的商業善循環。
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link href="/ecosystem">
          <Button size="lg" className="bg-ink text-paper hover:bg-gold hover:text-ink transition-all duration-300">
            探索我們的生態系
          </Button>
        </Link>
        <Link href="/esg">
          <Button size="lg" variant="outline" className="border-ink text-ink hover:bg-ink hover:text-paper">
            了解更多
          </Button>
        </Link>
      </div>
    </section>
  )
}