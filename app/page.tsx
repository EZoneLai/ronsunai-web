import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Philosophy } from "@/components/philosophy"
import { Services } from "@/components/services"
import { Founder } from "@/components/founder"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-paper">
      <Navbar />
      <Hero />
      <Philosophy />
      <Services />
      <Founder />
      <Footer />
    </main>
  )
}
