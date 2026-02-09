import { Button } from "@/components/ui/button";
import ColorBends from "@/components/ui/ColorBends";

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

                {/* Right Column - Giovanni Antes Image */}
                <div className="flex justify-center lg:justify-end items-center h-full">
                    <img
                        src="assets/giovanni-antes.png"
                        alt="Giovanni Antes"
                        className="w-auto object-contain drop-shadow-[0_0_50px_rgba(249,239,175,0.1)]"
                        style={{ height: '713px' }}
                    />
                </div>
            </div>
        </section>
    );
}
