import { Button } from "@/components/ui/button";
import Masonry from "@/components/ui/Masonry";
import ColorBends from "@/components/ui/ColorBends";

const masonryItems = [
    // Recalibrando para uma altura compacta de ~610px
    // Coluna 1: 300 + 278 = 578 + 16 (gap) = 594
    { id: 1, img: "assets/antigo-1.jpeg", height: 300 },
    { id: 2, img: "assets/antigo-2.jpeg", height: 278, bgPosition: "top" },

    // Coluna 2: 280 + 298 = 578 + 16 (gap) = 594
    { id: 4, img: "assets/antigo-4.jpg", height: 280 },
    { id: 5, img: "assets/antigo-5.jpg", height: 298 },

    // Coluna 3: 350 + 228 = 578 + 16 (gap) = 594
    { id: 10, img: "assets/antigo-10.jpg", height: 350 },
    { id: 9, img: "assets/antigo-9.jpg", height: 228, bgPosition: "top" },

    // Distribuindo os itens restantes
    { id: 3, img: "assets/antigo-3.jpeg", height: 220 },
    { id: 7, img: "assets/antigo-7.jpeg", height: 220, bgPosition: "top" },
];

export function Transformation() {
    return (
        <section className="bg-black text-white py-24 relative overflow-hidden min-h-screen flex items-center">
            {/* Animated Background */}
            <div className="absolute inset-0 z-0 opacity-60">
                <ColorBends
                    colors={["#f9efaf"]}
                    rotation={89}
                    speed={0.2}
                    scale={1.7}
                    frequency={1.6}
                    warpStrength={0.85}
                    mouseInfluence={0}
                    parallax={0}
                    noise={0}
                    transparent
                    autoRotate={0}
                />
            </div>

            <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
                {/* Left Column - Content */}
                <div className="flex flex-col space-y-10">
                    <h2 className="text-[2.5rem] font-bold leading-tight">
                        Mas tem uma boa notícia: <br />
                        <span style={{ color: '#F9EFAF' }}>Timidez não é algo permanente, eu sou a prova viva disso!</span>
                    </h2>

                    <div className="space-y-6 text-lg text-white/70 leading-relaxed max-w-xl">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                        <p>
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        <p>
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                        </p>
                    </div>

                    <div className="pt-4">
                        <Button
                            size="lg"
                            className="bg-emerald-600 hover:bg-emerald-500 text-white font-black py-8 px-10 text-xl rounded-xl transition-all hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_30px_rgba(16,185,129,0.2)] border-b-4 border-emerald-800 active:border-b-0 uppercase tracking-tight shadow-emerald-900/20"
                            onClick={() => document.getElementById('preco')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            TAMBÉM QUERO VIVER ESSA TRANSFORMAÇÃO
                        </Button>
                    </div>
                </div>

                {/* Right Column - Masonry */}
                <div className="relative min-h-[610px] w-full self-stretch">
                    <Masonry
                        items={masonryItems}
                        gridGap={16}
                        forceColumns={3}
                        animateFrom="bottom"
                        stagger={0.08}
                        duration={0.8}
                    />
                </div>
            </div>
        </section>
    );
}
