import { Hero } from "./components/sections/Hero"
import { Situations } from "./components/sections/Situations"
import { CostSection } from "./components/sections/CostSection"
import { Modules } from "./components/sections/Modules"
import { Transformation } from "./components/sections/Transformation"

function App() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-[#ffdd80]/30 selection:text-[#ffdd80]">
      <Hero />
      <Situations />
      <CostSection />
      <Transformation />
      <Modules />
    </main>
  )
}

export default App
