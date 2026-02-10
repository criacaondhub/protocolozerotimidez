import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Zap, Lock, Check } from "lucide-react";

export function Hero() {
    const brandColor = "#F9EFAF";

    const trustBadges = [
        { icon: Lock, text: "Compra segura" },
        { icon: Zap, text: "Acesso imediato" },
        { icon: ShieldCheck, text: "7 dias de garantia" },
    ];

    return (
        <section className="relative min-h-screen flex flex-col lg:flex-row lg:items-center pt-0 lg:pt-0 pb-8 lg:pb-12 overflow-hidden bg-black text-white">
            {/* Background Gradient Effect - Hidden on mobile */}
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[#F9EFAF]/5 blur-[120px] rounded-full -z-10 hidden lg:block" />
            <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-white/5 blur-[100px] rounded-full -z-10 hidden lg:block" />

            {/* MOBILE LAYOUT */}
            <div className="lg:hidden flex flex-col w-full">
                {/* Mobile Banner Image */}
                <div className="relative w-full">
                    <img
                        src="assets/banner-hero-mobile.webp"
                        alt="Giovanni Begossi"
                        className="w-full h-auto object-cover"
                        fetchPriority="high"
                        decoding="async"
                        onError={(e) => {
                            e.currentTarget.style.display = 'none';
                        }}
                    />
                    {/* Gradient overlay at bottom of image */}
                    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
                </div>

                {/* Content overlapping the gradient */}
                <div className="flex flex-col items-center px-4 -mt-16 relative z-20">
                    {/* Logo */}
                    <div className="w-44 mb-6">
                        <img
                            src="assets/logo-zerotimidez-mobile.webp"
                            alt="Logo Protocolo Zero Timidez"
                            className="w-full h-auto"
                            fetchPriority="high"
                            decoding="async"
                            onError={(e) => {
                                e.currentTarget.style.display = 'none';
                            }}
                        />
                    </div>

                    {/* Badge */}
                    <div
                        className="flex items-center justify-center gap-2 bg-zinc-900/50 border px-4 py-2 rounded-full text-xs font-bold shadow-lg uppercase tracking-wider mb-6"
                        style={{ color: brandColor, borderColor: `${brandColor}33` }}
                    >
                        <Check className="w-4 h-4" />
                        <span>Mais de 70 mil alunos formados</span>
                    </div>

                    {/* Title */}
                    <h1 className="text-[20px] font-black leading-[1.15] tracking-tighter text-white text-center mb-5 max-w-[24ch] mx-auto">
                        ELIMINE DE UMA VEZ POR TODAS A{" "}
                        <span style={{ color: brandColor }} className="text-glow">
                            TIMIDEZ, O MEDO E O NERVOSISMO
                        </span>{" "}
                        QUE TE TRAVAM NA HORA DE FALAR
                    </h1>

                    {/* Subtitle */}
                    <p className="text-base leading-relaxed opacity-90 text-white text-center mb-6 max-w-[32ch] mx-auto">
                        Você pode achar que timidez é "só seu jeito de ser". Mas a cada vez que você fica calado, não puxa conversa ou não se posiciona, você perde uma oportunidade que não volta&nbsp;mais.
                    </p>

                    {/* CTA Button */}
                    <Button
                        size="lg"
                        className="bg-emerald-600 hover:bg-emerald-500 text-white font-black py-7 px-6 text-base rounded-xl transition-all active:scale-[0.98] shadow-[0_0_30px_rgba(16,185,129,0.2)] border-b-4 border-emerald-800 active:border-b-0 uppercase tracking-tight w-full shadow-emerald-900/20 mb-5"
                        onClick={() => document.getElementById('preco')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                        QUERO ELIMINAR MINHA TIMIDEZ
                    </Button>

                    {/* Trust Badges Carousel */}
                    <div className="w-full overflow-hidden relative z-50 py-2 mb-12">
                        <motion.div
                            className="flex gap-6"
                            animate={{ x: ["0%", "-50%"] }}
                            transition={{
                                x: {
                                    repeat: Infinity,
                                    repeatType: "loop",
                                    duration: 10,
                                    ease: "linear",
                                },
                            }}
                        >
                            {[...trustBadges, ...trustBadges].map((badge, idx) => (
                                <div
                                    key={idx}
                                    className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-white/70 whitespace-nowrap"
                                >
                                    <badge.icon className="w-4 h-4" style={{ color: brandColor }} />
                                    <span>{badge.text}</span>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* DESKTOP LAYOUT */}
            <div className="container mx-auto px-4 sm:px-6 h-full grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10 hidden lg:grid">
                {/* Left Column - ANIMATED */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col space-y-8"
                >
                    {/* Logo */}
                    <div className="w-56">
                        <img
                            src="assets/logo-zerotimidez.webp"
                            alt="Logo Protocolo Zero Timidez"
                            className="w-full h-auto"
                            fetchPriority="high"
                            decoding="async"
                            onError={(e) => {
                                e.currentTarget.style.display = 'none';
                            }}
                        />
                    </div>

                    <div className="space-y-6">
                        <div
                            className="flex items-center gap-2 bg-zinc-900/50 border px-4 py-2 rounded-full text-sm font-bold shadow-lg w-fit uppercase tracking-wider"
                            style={{ color: brandColor, borderColor: `${brandColor}33` }}
                        >
                            <Check className="w-4 h-4" />
                            <span>Mais de 70 mil alunos formados</span>
                        </div>

                        <h1 className="text-5xl lg:text-[3.5em] font-black leading-[1.1] tracking-tighter text-white">
                            ELIMINE DE UMA VEZ POR TODAS A{" "}
                            <span style={{ color: brandColor }} className="text-glow">
                                TIMIDEZ, O MEDO E O NERVOSISMO
                            </span>{" "}
                            QUE TE TRAVAM NA HORA DE FALAR
                        </h1>

                        <p className="text-xl leading-relaxed opacity-90 text-white subtitle-width">
                            Você pode achar que timidez é "só seu jeito de ser". Mas a cada vez que você fica calado, não puxa conversa ou não se posiciona, você perde uma oportunidade que não volta mais.
                        </p>
                    </div>

                    <div className="flex flex-col space-y-4 max-w-xl">
                        <Button
                            size="lg"
                            className="bg-emerald-600 hover:bg-emerald-500 text-white font-black py-8 text-xl rounded-xl transition-all hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_30px_rgba(16,185,129,0.2)] border-b-4 border-emerald-800 active:border-b-0 uppercase tracking-tight w-full shadow-emerald-900/20"
                            onClick={() => document.getElementById('preco')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            QUERO ELIMINAR MINHA TIMIDEZ AGORA
                        </Button>

                        {/* Trust Badges Box */}
                        <div
                            className="grid grid-cols-3 gap-3 p-3 rounded-2xl border bg-zinc-900/30 backdrop-blur-sm"
                            style={{ borderColor: `${brandColor}20` }}
                        >
                            <div className="flex items-center justify-center gap-1.5 text-[9px] uppercase tracking-widest font-bold text-white/70">
                                <Lock className="w-3.5 h-3.5" style={{ color: brandColor }} />
                                <span>Compra segura</span>
                            </div>
                            <div className="flex items-center justify-center gap-1.5 text-[9px] uppercase tracking-widest font-bold text-white/70 border-x border-zinc-800/50">
                                <Zap className="w-3.5 h-3.5" style={{ color: brandColor }} />
                                <span>Acesso imediato</span>
                            </div>
                            <div className="flex items-center justify-center gap-1.5 text-[9px] uppercase tracking-widest font-bold text-white/70">
                                <ShieldCheck className="w-3.5 h-3.5" style={{ color: brandColor }} />
                                <span>7 dias garantia</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Right Side Image - DESKTOP ONLY */}
            <div className="absolute top-0 right-0 h-full w-full lg:w-[50%] pointer-events-none hidden lg:flex items-start justify-end overflow-hidden">
                <img
                    src="assets/banner-hero.webp"
                    alt="Giovanni Begossi"
                    className="h-full w-auto object-contain object-top select-none"
                    fetchPriority="high"
                    decoding="async"
                    onError={(e) => {
                        e.currentTarget.style.display = 'none';
                    }}
                />
                {/* Soft decorative glow behind person */}
                <div
                    className="absolute top-1/2 right-0 w-full h-[80%] blur-[120px] -z-10 rounded-full opacity-10"
                    style={{ backgroundColor: brandColor }}
                />
            </div>

            <style>{`
                .text-glow {
                    text-shadow: 0 0 20px rgba(249, 239, 175, 0.3);
                }
                @media (min-width: 1024px) {
                    h1 {
                        max-width: 26ch;
                    }
                    .subtitle-width {
                        max-width: 55ch;
                    }
                }
            `}</style>
        </section>
    );
}
