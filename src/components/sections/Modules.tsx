import { motion } from "framer-motion";
import EmblaCarousel from "../ui/carousel/EmblaCarousel";





export function Modules() {
    return (
        <section className="bg-white text-black py-[80px] md:py-24 relative overflow-hidden">
            {/* Semi-ellipse Transition Top - Hidden on mobile */}
            <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-30 hidden md:block">
                <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[120%] -left-[10%] h-[80px] fill-black">
                    <path d="M0,0 h1200 v50 Q600,120 0,50 Z"></path>
                </svg>
            </div>

            <div className="container mx-auto px-4 sm:px-6 relative z-10 md:pt-16">
                <header className="mb-10 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-[2.75rem] font-bold leading-tight mb-6 max-w-3xl mx-auto"
                    >
                        Veja tudo que você vai aprender <br />
                        neste <span className="text-[#c9a24b]">treinamento exclusivo!</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg md:text-xl text-zinc-600 font-medium"
                    >
                        Mastiguei para você o passo a passo mais poderoso já criado para <span className="text-[#c9a24b] font-bold underline decoration-2 underline-offset-4">eliminar 100% da sua timidez</span>.
                    </motion.p>
                </header>

                <div className="max-w-7xl mx-auto">
                    {/* Desktop Layout: Side by side, no carousel */}
                    <div className="hidden lg:flex flex-row justify-center gap-5 px-4">
                        {Array.from({ length: 6 }).map((_, idx) => (
                            <div key={idx} className="shrink-0">
                                <img
                                    src={`assets/modulo-0${idx + 1}.webp`}
                                    alt={`Módulo ${idx + 1}`}
                                    className="h-[500px] w-auto object-contain"
                                    loading="lazy"
                                    decoding="async"
                                />
                            </div>
                        ))}
                    </div>

                    {/* Mobile/Tablet Layout: Carousel with Disclaimer */}
                    <div className="lg:hidden">
                        <div className="text-center mb-6 px-4">
                            <p className="text-zinc-500 text-sm font-medium">
                                Passe para o lado e confira o conteúdo que te fará perder a timidez de uma vez por todas.
                            </p>
                        </div>
                        <div className="px-4 md:px-16">
                            <EmblaCarousel
                                slides={Array.from({ length: 6 }).map((_, idx) => (
                                    <div key={idx} className="w-full flex items-center justify-center">
                                        <picture>
                                            <source media="(max-width: 768px)" srcSet={`assets/modulo-0${idx + 1}-mobile.webp`} />
                                            <img
                                                src={`assets/modulo-0${idx + 1}.webp`}
                                                alt={`Módulo ${idx + 1}`}
                                                className="h-[500px] w-auto object-contain"
                                                loading="lazy"
                                                fetchPriority="low"
                                                decoding="async"
                                            />
                                        </picture>
                                    </div>
                                ))}
                                options={{ align: 'center', loop: true, duration: 20 }}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Semi-ellipse Transition Bottom - Hidden on mobile */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-30 translate-y-[1px] hidden md:block">
                <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[120%] -left-[10%] h-[80px] fill-black rotate-180">
                    <path d="M0,0 h1200 v50 Q600,120 0,50 Z"></path>
                </svg>
            </div>
        </section>
    );
}


