import { motion } from "framer-motion";
import { X, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import Beams from "@/components/ui/Beams";

export function DecisionSection() {
    const leftPoints = [
        "Continuar tímido e travado;",
        "Perder oportunidades diariamente;",
        <>Ver outras pessoas crescendo <br className="lg:hidden" /> enquanto você fica pra trás;</>,
        <>Viver com o arrependimento de <br className="lg:hidden" /> "enquanto eu deveria ter falado";</>,
        "Ficar preso na própria cabeça."
    ];

    const rightPoints = [
        "Eliminar os bloqueios que te travam;",
        "Ter técnicas práticas para qualquer situação;",
        "Falar com confiança quando precisar;",
        "Aproveitar oportunidades que aparecem;",
        "Parar de se arrepender de não ter falado."
    ];

    return (
        <section className="bg-black text-white py-[80px] md:py-24 relative overflow-hidden">
            {/* Background Animation - Hidden on mobile */}
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
                <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                <div className="text-center mb-10">
                    <h2 className="text-[20px] md:text-5xl font-black tracking-tighter uppercase leading-tight">
                        Agora você tem <span className="text-[#f9efaf]">2 opções</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch max-w-7xl mx-auto">

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-red-950/30 border border-red-500/20 rounded-[2.5rem] p-6 md:p-12 backdrop-blur-md flex flex-col h-full"
                    >
                        <h2 className="text-[20px] md:text-3xl font-bold mb-6 md:mb-10 tracking-tight uppercase text-red-500 text-center">
                            <strong>CONTINUAR COMO ESTÁ:</strong>
                        </h2>

                        <div className="flex flex-col items-center flex-grow mb-12">
                            <ul className="space-y-6 flex flex-col items-center text-center lg:items-start lg:text-left">
                                {leftPoints.map((point, idx) => (
                                    <li key={idx} className="flex flex-col lg:flex-row items-center lg:items-start gap-3 lg:gap-4">
                                        <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center shrink-0">
                                            <X className="w-4 h-4 text-red-500" strokeWidth={3} />
                                        </div>
                                        <span className="text-lg md:text-xl text-zinc-300 leading-tight">
                                            {point}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="pt-8 border-t border-red-500/10 space-y-4 text-center">
                            <h3 className="text-lg md:text-xl font-medium">
                                <strong>Investimento:</strong> R$ 0,00 hoje
                            </h3>
                            <h3 className="text-lg md:text-xl font-medium">
                                <strong>Custo real:</strong> Incalculável ao longo dos anos
                            </h3>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-emerald-950/30 border border-emerald-500/30 rounded-[2.5rem] p-6 md:p-12 backdrop-blur-md flex flex-col h-full ring-1 ring-emerald-500/20"
                    >
                        <h2 className="text-[20px] md:text-3xl font-bold mb-6 md:mb-10 tracking-tight uppercase text-emerald-400 text-center">
                            <strong>PROTOCOLO ZERO TIMIDEZ:</strong>
                        </h2>

                        <div className="flex flex-col items-center flex-grow mb-12">
                            <ul className="space-y-6 flex flex-col items-center text-center lg:items-start lg:text-left">
                                {rightPoints.map((point, idx) => (
                                    <li key={idx} className="flex flex-col lg:flex-row items-center lg:items-start gap-3 lg:gap-4">
                                        <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0">
                                            <Check className="w-4 h-4 text-emerald-500" strokeWidth={3} />
                                        </div>
                                        <span className="text-lg md:text-xl text-emerald-50/90 leading-tight">
                                            {point}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="pt-8 border-t border-emerald-500/20 space-y-4 text-center">
                            <h3 className="text-lg md:text-xl font-medium">
                                <strong>Investimento:</strong> R$ 97,00
                            </h3>
                            <h3 className="text-lg md:text-xl font-medium">
                                <strong>Retorno:</strong> Todas as oportunidades que você vai <br className="lg:hidden" /> parar de perder
                            </h3>
                        </div>
                    </motion.div>
                </div>

                {/* Main CTA below the boxes */}
                <div className="flex justify-center mt-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="w-full max-w-2xl"
                    >
                        <Button
                            size="lg"
                            className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-black py-6 md:py-8 text-[16px] md:text-xl rounded-2xl md:rounded-xl transition-all hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_30px_rgba(16,185,129,0.2)] border-b-8 md:border-b-4 border-emerald-800 active:border-b-0 uppercase tracking-tight"
                        >
                            ESSE PROTOCOLO É PRA MIM!
                        </Button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
