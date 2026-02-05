import { motion } from "framer-motion";

export function Expert() {
    return (
        <section id="expert" className="bg-white text-zinc-900 py-24 relative overflow-hidden">
            {/* Semi-ellipse Transition Top */}
            <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-10 -translate-y-[1px]">
                <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[120%] -left-[10%] h-[80px] fill-black">
                    <path d="M0,0 h1200 v50 Q600,120 0,50 Z"></path>
                </svg>
            </div>

            <div className="container mx-auto px-6 relative z-10 pt-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-7xl mx-auto">

                    {/* Content Left */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <h2 className="text-2xl md:text-3xl font-bold leading-tight tracking-tight uppercase">
                            De nerd antissocial a bicampeão brasileiro de oratória: <br />
                            <span className="text-[#C9A24B]">Conheça o seu mentor</span>
                        </h2>

                        <div className="relative inline-block w-full">
                            <div className="bg-[#C9A24B] text-white p-6 md:p-8 rounded-2xl md:rounded-3xl shadow-xl shadow-[#C9A24B]/20 -rotate-1">
                                <h3 className="text-2xl md:text-4xl leading-tight">
                                    Giovanni Begossi,<br />
                                    <strong>o El Professor da Oratória</strong>
                                </h3>
                            </div>
                        </div>

                        <div className="space-y-6 text-lg md:text-xl text-zinc-700 leading-relaxed font-medium">
                            <p>
                                Bicampeão brasileiro de oratória, palestrante internacional, advogado e TEDx Speaker e autor do best-seller Como Falar Bem e Ficar Rico - Top #1 na Amazon em “Falar em Público”.
                            </p>

                            <p>
                                Com mais de 15 anos de experiência, Giovanni já treinou desde empresários e atletas olímpicos até políticos, desembargadores, grandes empresas e também para corporações de elite, como a SWAT de São Paulo (GATE) e o Exército Brasileiro (EsAO).
                            </p>

                            <p>
                                Hoje, lidera o maior perfil de comunicação e oratória da América Latina, com mais de <span className="text-[#C9A24B] font-bold">4 milhões de seguidores</span>.
                            </p>

                            <p className="italic border-l-4 border-[#C9A24B] pl-6 py-2">
                                Seu propósito é transformar a vida de cada vez mais pessoas por meio da comunicação.
                            </p>
                        </div>
                    </motion.div>

                    {/* Image Right */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="absolute -inset-4 bg-[#C9A24B]/10 rounded-full blur-3xl" />
                        <img
                            src="assets/giovanni.png"
                            alt="Giovanni Begossi"
                            className="relative z-10 w-full max-w-xl mx-auto drop-shadow-2xl"
                        />
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
