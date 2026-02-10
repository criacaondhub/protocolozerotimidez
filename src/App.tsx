import { Suspense, lazy } from "react"
import { Hero } from "./components/sections/Hero"

// Lazy loading components below the fold
const Situations = lazy(() => import("./components/sections/Situations").then(m => ({ default: m.Situations })))
const CostSection = lazy(() => import("./components/sections/CostSection").then(m => ({ default: m.CostSection })))
const Modules = lazy(() => import("./components/sections/Modules").then(m => ({ default: m.Modules })))
const Pricing = lazy(() => import("./components/sections/Pricing").then(m => ({ default: m.Pricing })))
const DecisionSection = lazy(() => import("./components/sections/DecisionSection").then(m => ({ default: m.DecisionSection })))
const Expert = lazy(() => import("./components/sections/Expert").then(m => ({ default: m.Expert })))
const FAQ = lazy(() => import("./components/sections/FAQ").then(m => ({ default: m.FAQ })))
const Footer = lazy(() => import("./components/sections/Footer").then(m => ({ default: m.Footer })))
const Transformation = lazy(() => import("./components/sections/Transformation").then(m => ({ default: m.Transformation })))
const CurvedLoop = lazy(() => import("./components/ui/CurvedLoop"))

function App() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-[#ffdd80]/30 selection:text-[#ffdd80]">
      <Hero />
      <Suspense fallback={<div className="h-20 bg-black" />}>
        <Situations />
        <CostSection />
        <Transformation />
        <Modules />
        <Pricing />
        <div className="w-full text-[#F9EFAF] bg-black py-4 md:py-2 flex items-center h-[80px] md:h-auto">
          <CurvedLoop
            marqueeText="Zero Timidez ✦ Zero Timidez ✦ Zero Timidez ✦ Zero Timidez ✦ Zero Timidez ✦ "
            speed={0.4}
            curveAmount={0}
            interactive
            className="text-[80px] md:text-6xl font-black uppercase tracking-tighter"
          />
        </div>
        <DecisionSection />
        <Expert />
        <FAQ />
        <Footer />
      </Suspense>
    </main>
  )
}

export default App
