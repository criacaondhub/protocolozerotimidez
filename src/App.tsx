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

function App() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-[#ffdd80]/30 selection:text-[#ffdd80]">
      <Hero />
      <Situations />
      <CostSection />
      <Transformation />
      <Modules />
      <Pricing />
      <DecisionSection />
      <Expert />
      <FAQ />
      <Footer />
    </main>
  )
}

export default App
