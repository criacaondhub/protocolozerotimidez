import { Hero } from "./components/sections/Hero"
import { Situations } from "./components/sections/Situations"
import { CostSection } from "./components/sections/CostSection"
import { Modules } from "./components/sections/Modules"
import { Pricing } from "./components/sections/Pricing"
import { DecisionSection } from "./components/sections/DecisionSection"
import { Expert } from "./components/sections/Expert"
import { FAQ } from "./components/sections/FAQ"
import { Footer } from "./components/sections/Footer"
import { Transformation } from "./components/sections/Transformation"
import CurvedLoop from "./components/ui/CurvedLoop"

function App() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-[#ffdd80]/30 selection:text-[#ffdd80]">
      <Hero />
      <Situations />
      <CostSection />
      <Transformation />
      <Modules />
      <Pricing />
      <div className="w-full text-[#F9EFAF]/80 bg-black py-2">
        <CurvedLoop
          marqueeText="Zero Timidez ✦ Zero Timidez ✦ Zero Timidez ✦ Zero Timidez ✦ Zero Timidez ✦ "
          speed={0.4}
          curveAmount={0}
          interactive
          className="text-4xl md:text-6xl font-black uppercase tracking-tighter"
        />
      </div>
      <DecisionSection />
      <Expert />
      <FAQ />
      <Footer />
    </main>
  )
}

export default App
