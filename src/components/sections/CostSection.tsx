import { motion } from "framer-motion";
import { TrendingDown, HeartOff } from "lucide-react";

const careerPoints = [
    <>A promoção que foi para o colega que <br /> <span className="font-semibold">"sabe se vender"</span>;</>,
    <>A ideia que você não apresentou e <br /> <span className="font-semibold">outro levou o crédito</span>;</>,
    <>Oportunidades que passaram porque <br /> <span className="font-semibold">não se posicionou</span>;</>,
    <>O projeto que você <span className="font-semibold">não conseguiu defender</span>;</>,
    <>A reunião em que você ficou <span className="font-semibold">invisível</span>;</>,
    <>O arrependimento de ver outras pessoas <br /> <span className="font-semibold">brilhando</span> enquanto você fica na sombra.</>
];

const relationshipsPoints = [
    <>Conexões que você não fez por medo <br /> <span className="font-semibold">medo de puxar conversa</span>;</>,
    <>Ser <span className="font-semibold">excluído de grupos</span> e deixar de ser <br /> convidado para eventos;</>,
    <>Amizades que não aconteceram porque <br /> você <span className="font-semibold">não sabia o que dizer</span>;</>,
    <>Momentos que você evitou por medo <br /> de <span className="font-semibold">ser julgado</span>;</>,
    <>A frustração de voltar para casa pensando <br /> <span className="font-semibold">"eu deveria ter falado"</span>;</>,
    <>A <span className="font-semibold">ansiedade</span> que vem antes de qualquer compromisso social.</>
];

export function CostSection() {
    return (
        <section className="bg-white text-black py-24 relative overflow-hidden min-h-screen flex flex-col justify-center">
            {/* Semi-ellipse Transition Top */}
            <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-30">
                <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[120%] -left-[10%] h-[80px] fill-black">
                    <path d="M0,0 h1200 v50 Q600,120 0,50 Z"></path>
                </svg>
            </div>

            <div className="container mx-auto px-4 sm:px-6 relative z-20">
                <header className="text-center mb-16 mt-12">
                    <h2 className="text-3xl md:text-[2.5rem] font-bold text-black mb-6 leading-tight max-w-4xl mx-auto">
                        A timidez custa (muito) caro: <br />
                        <span style={{ color: '#c9a24b' }}>Custa seu dinheiro e sua felicidade.</span>
                    </h2>
                    <p className="text-xl md:text-[1.8rem] font-medium text-black/80 max-w-3xl mx-auto">
                        E não é só na vida profissional, na pessoal também!
                    </p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-7xl mx-auto">
                    {/* Career Box */}
                    <motion.div
                        whileHover={{ y: -10 }}
                        className="bg-white rounded-[2rem] px-6 py-8 md:pl-10 md:pr-5 md:py-10 border border-zinc-200 shadow-[0_10px_40px_rgba(0,0,0,0.03)] flex flex-col h-full"
                    >
                        <div className="flex items-center gap-4 mb-8">
                            <div className="p-3 bg-zinc-50 rounded-2xl">
                                <TrendingDown className="w-8 h-8" style={{ color: '#c9a24b' }} />
                            </div>
                            <h3 className="text-2xl font-black tracking-tighter uppercase italic">NA CARREIRA</h3>
                        </div>

                        <ul className="space-y-6">
                            {careerPoints.map((point, idx) => (
                                <li key={idx} className="flex items-start text-lg md:text-[1.25rem] text-zinc-700 leading-snug">
                                    <span className="text-zinc-400 font-bold mr-3 shrink-0">•</span>
                                    <span>{point}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Relationships Box */}
                    <motion.div
                        whileHover={{ y: -10 }}
                        className="bg-white rounded-[2rem] px-6 py-8 md:pl-10 md:pr-5 md:py-10 border border-zinc-200 shadow-[0_10px_40px_rgba(0,0,0,0.03)] flex flex-col h-full"
                    >
                        <div className="flex items-center gap-4 mb-8">
                            <div className="p-3 bg-zinc-50 rounded-2xl">
                                <HeartOff className="w-8 h-8" style={{ color: '#c9a24b' }} />
                            </div>
                            <h3 className="text-2xl font-black tracking-tighter uppercase italic">NOS RELACIONAMENTOS</h3>
                        </div>

                        <ul className="space-y-6">
                            {relationshipsPoints.map((point, idx) => (
                                <li key={idx} className="flex items-start text-lg md:text-[1.25rem] text-zinc-700 leading-snug">
                                    <span className="text-zinc-400 font-bold mr-3 shrink-0">•</span>
                                    <span>{point}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </div>

            {/* Semi-ellipse Transition Bottom */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-30 translate-y-[1px]">
                <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[120%] -left-[10%] h-[80px] fill-black rotate-180">
                    <path d="M0,0 h1200 v50 Q600,120 0,50 Z"></path>
                </svg>
            </div>
        </section>
    );
}
