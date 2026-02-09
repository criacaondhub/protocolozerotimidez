import { Button } from "@/components/ui/button";
import ColorBends from "@/components/ui/ColorBends";

export function Transformation() {
    return (
        <section className="bg-black text-white py-[80px] md:py-24 relative overflow-hidden min-h-screen flex items-center">
            {/* Animated Background - Hidden on mobile */}
            <div className="absolute inset-0 z-0 opacity-60 hidden lg:block">
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

            <div className="container mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
                {/* Mobile/Desktop Content Wrapper */}
                <div className="flex flex-col space-y-10 items-center lg:items-start text-center lg:text-left">
                    <h2 className="text-3xl md:text-[2.5rem] font-bold leading-tight max-w-2xl">
                        Mas tem uma boa notícia: <br className="hidden md:block" />
                        <span style={{ color: '#F9EFAF' }}>Timidez não é algo permanente, eu sou a prova viva disso!</span>
                    </h2>

                    {/* Image - Placed between title and text on mobile */}
                    <div className="flex lg:hidden justify-center items-center w-full">
                        <img
                            src="assets/giovanni-antes.png"
                            alt="Giovanni Antes"
                            className="w-auto h-[350px] object-contain drop-shadow-[0_0_50px_rgba(249,239,175,0.1)]"
                        />
                    </div>

                    <div className="space-y-6 text-lg text-white/70 leading-relaxed max-w-xl mx-auto lg:mx-0">
                        <p>
                            Você não nasceu tímido, você <strong>aprendeu</strong> a ser tímido. E o mesmo cérebro que criou essas travas, é o cérebro que pode ser treinado para eliminá-las.
                        </p>
                        <p>
                            Eu era o nerd que não conseguia olhar nos olhos de ninguém. Hoje, eu ensino gigantes. O que mudou? Eu entendi que falar bem não é dom, é um <strong>protocolo</strong>.
                        </p>
                    </div>

                    <div className="pt-4 w-full flex justify-center lg:justify-start">
                        <Button
                            size="lg"
                            className="bg-emerald-600 hover:bg-emerald-500 text-white font-black py-6 px-8 text-[16px] md:text-xl rounded-xl transition-all active:scale-[0.98] shadow-[0_0_30px_rgba(16,185,129,0.2)] border-b-4 border-emerald-800 active:border-b-0 uppercase tracking-tight shadow-emerald-900/20 w-full md:w-auto"
                            onClick={() => document.getElementById('preco')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            QUERO ESSA TRANSFORMAÇÃO
                        </Button>
                    </div>
                </div>

                {/* Right Column - Giovanni Antes Image - DESKTOP ONLY */}
                <div className="hidden lg:flex justify-center lg:justify-end items-center h-full">
                    <img
                        src="assets/giovanni-antes.png"
                        alt="Giovanni Antes"
                        className="w-auto h-[713px] object-contain drop-shadow-[0_0_50px_rgba(249,239,175,0.1)]"
                    />
                </div>
            </div>
        </section>
    );
}
