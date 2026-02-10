import { motion } from "framer-motion";
import { ShieldCheck, Calendar, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import Beams from "@/components/ui/Beams";

export function Pricing() {
    return (
        <section id="preco" className="bg-black text-white py-[80px] md:py-24 relative overflow-hidden min-h-screen flex items-center">
            {/* New Animated Background: Beams - Hidden on mobile */}
            <div className="absolute inset-0 z-0 opacity-50 hidden lg:block">
                <Beams
                    beamWidth={4.6}
                    beamHeight={25}
                    beamNumber={24}
                    lightColor="#f9efaf"
                    speed={4}
                    noiseIntensity={0.65}
                    scale={0.32}
                    rotation={30}
                />
                {/* Gradient Masks to soften edges */}
                <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                <div className="max-w-2xl mx-auto">
                    {/* Offer Label */}
                    <div className="flex justify-center mb-10">
                        <span className="bg-[#f9efaf]/10 text-[#f9efaf] border border-[#f9efaf]/20 px-6 py-2 rounded-full text-[13px] font-bold uppercase tracking-tighter lg:tracking-widest">
                            Oferta Especial por Tempo Limitado
                        </span>
                    </div>

                    {/* Main Pricing Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-zinc-900/60 border border-zinc-800 rounded-[2.5rem] p-6 md:p-14 text-center backdrop-blur-md shadow-2xl relative"
                    >
                        <h2 className="text-[20px] md:text-[1.8rem] font-bold mb-8 uppercase tracking-tight leading-tight">
                            Faça sua inscrição com <br className="lg:hidden" />
                            <span className="text-[#f9efaf]">R$ 200,00 de desconto</span>
                        </h2>

                        {/* Old Price */}
                        <div className="mb-6">
                            <span className="text-zinc-500 text-2xl font-bold line-through decoration-red-600 decoration-[3px]">
                                DE R$ 297,00
                            </span>
                        </div>

                        {/* Installment Price Section */}
                        <div className="mb-2">
                            <span className="text-zinc-300 text-xl font-medium">Por apenas 12x de</span>
                        </div>

                        <div className="flex items-end justify-center gap-1 mb-6">
                            <span className="text-3xl md:text-6xl font-bold text-[#f9efaf] pb-3 md:pb-5">R$</span>
                            <span className="text-[7rem] md:text-[13rem] font-bold text-[#f9efaf] leading-[0.85] tracking-tighter">10</span>
                            <span className="text-3xl md:text-6xl font-bold text-[#f9efaf] pb-3 md:pb-5">,18</span>
                        </div>

                        {/* Cash Price */}
                        <div className="mb-10">
                            <span className="text-zinc-400 text-[16px] italic font-medium">ou à vista por apenas R$ 97,00</span>
                        </div>

                        {/* CTA Button */}
                        <div className="space-y-8">
                            <Button
                                size="lg"
                                className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-black py-8 md:py-10 text-[16px] md:text-2xl rounded-2xl transition-all hover:scale-[1.02] active:scale-[0.98] shadow-[0_20px_40px_rgba(16,185,129,0.2)] border-b-8 border-emerald-800 active:border-b-0 uppercase tracking-tighter"
                            >
                                QUERO ACABAR COM <br className="lg:hidden" /> A TIMIDEZ AGORA
                            </Button>

                            {/* Payment Icons */}
                            <div className="flex flex-col items-center pt-4">
                                <picture>
                                    <source media="(max-width: 768px)" srcSet="assets/logos-credito-mobile.webp" />
                                    <img
                                        src="assets/logos-credito.webp"
                                        alt="Formas de Pagamento"
                                        className="h-8 md:h-12 w-auto object-contain"
                                        loading="lazy"
                                        decoding="async"
                                    />
                                </picture>
                            </div>
                        </div>
                    </motion.div>

                    {/* Guarantees - Single line on tablet/desktop */}
                    <div className="mt-16 flex items-center justify-center flex-wrap md:flex-nowrap gap-x-8 lg:gap-x-12 gap-y-6">
                        <div className="flex items-center gap-3 text-sm font-bold tracking-wide uppercase whitespace-nowrap">
                            <ShieldCheck className="w-6 h-6 text-[#f9efaf]" />
                            <span>Pagamento 100% seguro</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm font-bold tracking-wide uppercase whitespace-nowrap">
                            <Calendar className="w-6 h-6 text-[#f9efaf]" />
                            <span>7 dias de garantia</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm font-bold tracking-wide uppercase whitespace-nowrap">
                            <Zap className="w-6 h-6 text-[#f9efaf]" />
                            <span>Acesso imediato</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
