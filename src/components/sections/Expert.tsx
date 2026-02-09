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

            <div className="container mx-auto px-4 sm:px-6 relative z-10 pt-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-7xl mx-auto">

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8 flex flex-col items-center lg:items-start text-center lg:text-left"
                    >
                        <h2 className="text-[28px] md:text-3xl font-bold leading-tight tracking-tight uppercase max-w-xl">
                            De nerd antissocial a bicampeão brasileiro de oratória: <br className="hidden md:block" />
                            <span className="text-[#C9A24B]">Conheça o seu mentor</span>
                        </h2>

                        <div className="relative inline-block w-full max-w-sm lg:max-w-none">
                            <div className="bg-[#C9A24B] text-white p-5 md:p-8 rounded-2xl md:rounded-3xl shadow-xl shadow-[#C9A24B]/20">
                                <h3 className="text-xl md:text-4xl leading-tight">
                                    Giovanni Begossi, o <br />
                                    <strong>"El Professor da Oratória"</strong>
                                </h3>
                            </div>
                        </div>

                        <div className="space-y-6 text-lg md:text-xl text-zinc-700 leading-relaxed font-medium mx-auto lg:mx-0">
                            <p>
                                Mais conhecido como <strong>El Professor da Oratória</strong>, Giovanni Begossi é <strong>bicampeão brasileiro de oratória</strong>, advogado, palestrante internacional, TEDx Speaker e autor do best seller <strong>COMO FALAR BEM E FICAR RICO</strong>, o livro de oratória mais vendido da Amazon.
                            </p>

                            <p>
                                Com mais de <strong>15 anos de experiência</strong> e criador do maior perfil de oratória da América Latina com mais de <strong>4.5 milhões de seguidores</strong> nas redes sociais, Giovanni treina a comunicação persuasiva de políticos, atletas campeões olímpicos, bilionários e grandes personalidades como Natalia Beauty, Sheila Mello e Cela, além de instituições renomadas como Falconi, Biogen, Johnson & Johnson e até mesmo da <strong>SWAT de São Paulo (GATE), do BOPE e do Exército Brasileiro (EsAO)</strong>.
                            </p>

                            <p className="italic lg:border-l-4 border-[#C9A24B] lg:pl-6 py-2">
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
                            className="relative z-10 w-full max-w-2xl mx-auto drop-shadow-2xl"
                        />
                    </motion.div>

                </div>
            </div>

            {/* Semi-ellipse Transition Bottom */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10 translate-y-[1px]">
                <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[120%] -left-[10%] h-[80px] fill-black rotate-180">
                    <path d="M0,0 h1200 v50 Q600,120 0,50 Z"></path>
                </svg>
            </div>
        </section>
    );
}
