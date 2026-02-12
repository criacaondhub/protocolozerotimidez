import { motion } from "framer-motion";

const testimonials = [
    {
        image: "assets/rafael-barcelos.webp",
        name: "Rafael Barcelos",
        role: "Administração",
        quote: "Eu queria melhorar minha comunicação, melhorar meu networking, perder minha timidez e ganhar mais confiança ao me expressar. Logo no início, percebi transformações de forma quase imediata, pois fiz duas apresentações em público do início ao fim sem gaguejar e até mesmo tremer, recebendo inclusive o convite para me tornar cerimonialista."
    },
    {
        image: "assets/ana-paula.webp",
        name: "Ana Paula Trespach",
        role: "Inspetora Polícia Civil",
        quote: "Eu sempre tive problema de me expressar por conta da timidez! Após o curso comecei a me comunicar melhor, me livrando da vergonha e timidez que eu tinha. O investimento valeu muito a pena porque o El Professor entrega muito a mais do que ele promete."
    },
    {
        image: "assets/rosenai-batista.webp",
        name: "Rosenai Batista",
        role: "Professora",
        quote: "A timidez me desmotivava, e foi ela que me prendeu durante 10 anos travada no lugar onde estava. Eu era muito tímida, e por mim seria uma mulher invisível. Eu literalmente me surpreendi com a didática, com a transformação em minha comunicação, consegui fazer networking e hoje sinto que quando falo, as pessoas param pra me ouvir!"
    },
    {
        image: "assets/eliane-castelani.webp",
        name: "Eliane Castelani",
        role: "Bancária / Empresária",
        quote: "Eu trabalhei como bancária por 11 anos, mas após uma gestação decidi empreender! Quando eu comecei minha empresa, veio aquela sensação de medo de aparecer nas redes sociais! Esse curso tirou a trava que eu estava carregando. Muita coisa vem acontecendo em minha vida, estou conquistando novos contratos, inclusive convidada para fazer palestras!"
    }
];

export function Testimonials() {
    return (
        <section className="bg-black text-white pt-[80px] pb-[40px] md:pt-24 md:pb-12 relative overflow-hidden">
            {/* Subtle background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#F9EFAF]/5 blur-[150px] rounded-full -z-10" />

            <div className="container mx-auto px-4 sm:px-6">
                {/* Section Header */}
                <div className="text-center mb-12 md:mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-[20px] md:text-5xl font-black tracking-tighter uppercase leading-tight"
                    >
                        Veja quem já <span className="text-[#F9EFAF]">eliminou a timidez</span>
                    </motion.h2>
                </div>

                {/* Testimonials Grid - 4 columns on desktop, stack on mobile */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                    {testimonials.map((t, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="flex flex-col items-center bg-white/5 backdrop-blur-xl border border-[#F9EFAF]/30 rounded-2xl px-5 py-8 text-center relative group hover:border-[#F9EFAF]/60 transition-all duration-300"
                        >
                            {/* Avatar + Quote Icon */}
                            <div className="relative mb-6">
                                <img
                                    className="h-16 w-16 rounded-full object-cover ring-2 ring-[#F9EFAF]/30"
                                    src={t.image}
                                    alt={t.name}
                                    loading="lazy"
                                    decoding="async"
                                    width="64"
                                    height="64"
                                />
                                {/* Quote badge */}
                                <svg className="absolute -top-1 -right-2" width="24" height="24" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="11" cy="11" r="11" fill="#F9EFAF" />
                                    <path d="m11.584 13.872 1.752-3.288 1.104-.288a2.7 2.7 0 0 1-.432.576.76.76 0 0 1-.552.24q-.672 0-1.248-.576t-.576-1.464q0-.936.624-1.584.648-.672 1.584-.672.888 0 1.536.672.672.648.672 1.584 0 .384-.168.912-.144.504-.576 1.296l-1.92 3.552zm-5.4 0 1.752-3.288 1.08-.288a2.2 2.2 0 0 1-.408.576.76.76 0 0 1-.552.24q-.696 0-1.272-.576t-.576-1.464q0-.936.624-1.584.648-.672 1.584-.672.888 0 1.536.672.672.648.672 1.584 0 .384-.144.912-.144.504-.576 1.296L7.96 14.832z" fill="#000" />
                                </svg>
                            </div>

                            {/* Testimonial Text */}
                            <p className="text-sm text-zinc-300 leading-relaxed flex-grow mb-6">
                                "{t.quote}"
                            </p>

                            {/* Name & Role */}
                            <div className="mt-auto">
                                <p className="text-base font-bold text-white">{t.name}</p>
                                <p className="text-xs text-[#F9EFAF]/70 font-medium uppercase tracking-wider mt-1">{t.role}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
