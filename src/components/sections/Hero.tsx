import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Zap, Lock, Check } from "lucide-react";

export function Hero() {
    const brandColor = "#F9EFAF";

    return (
        <section className="relative min-h-screen flex items-center pt-20 lg:pt-0 pb-12 overflow-hidden bg-black text-white">
            {/* Background Gradient Effect */}
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[#F9EFAF]/5 blur-[120px] rounded-full -z-10" />
            <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-white/5 blur-[100px] rounded-full -z-10" />

            <div className="container mx-auto px-6 h-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                {/* Left Column */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col space-y-8"
                >
                    {/* Logo */}
                    <div className="w-56">
                        <img
                            src="assets/logo-zerotimidez.png"
                            alt="Logo Protocolo Zero Timidez"
                            className="w-full h-auto"
                            onError={(e) => {
                                e.currentTarget.style.display = 'none';
                            }}
                        />
                    </div>

                    <div className="space-y-6">
                        <div
                            className="flex items-center gap-2 bg-zinc-900/50 border px-4 py-2 rounded-full text-xs md:text-sm font-bold shadow-lg w-fit uppercase tracking-wider"
                            style={{ color: brandColor, borderColor: `${brandColor}33` }}
                        >
                            <Check className="w-4 h-4" />
                            <span>Mais de 100 mil alunos formados</span>
                        </div>

                        <h1
                            className="text-4xl md:text-5xl lg:text-[3.5em] font-black leading-[1.1] tracking-tighter text-white"
                        >
                            ELIMINE DE UMA VEZ POR TODAS A <span style={{ color: brandColor }} className="text-glow">TIMIDEZ, O MEDO E O NERVOSISMO</span> QUE TE TRAVAM NA HORA DE FALAR
                        </h1>

                        <p className="text-lg md:text-xl leading-relaxed opacity-90 text-white subtitle-width">
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
                            className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-3 rounded-2xl border bg-zinc-900/30 backdrop-blur-sm"
                            style={{ borderColor: `${brandColor}20` }}
                        >
                            <div className="flex items-center justify-center gap-1.5 text-[9px] uppercase tracking-widest font-bold text-white/70">
                                <Lock className="w-3.5 h-3.5" style={{ color: brandColor }} />
                                <span>Compra segura</span>
                            </div>
                            <div className="flex items-center justify-center gap-1.5 text-[9px] uppercase tracking-widest font-bold text-white/70 border-y sm:border-y-0 sm:border-x border-zinc-800/50 py-2 sm:py-0">
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

            {/* Right Side Image - Absolute positioned to fill height, larger and top aligned */}
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.2, delay: 0.2 }}
                className="absolute top-0 right-0 h-[110%] w-full lg:w-[50%] pointer-events-none hidden lg:flex items-start justify-end overflow-hidden"
            >
                <img
                    src="assets/banner-hero.png"
                    alt="Giovanni Begossi"
                    className="h-full w-auto object-contain object-top select-none scale-110 translate-y-[-5%] transition-transform duration-700 hover:scale-115"
                    onError={(e) => {
                        e.currentTarget.style.display = 'none';
                    }}
                />
                {/* Soft decorative glow behind person */}
                <div
                    className="absolute top-1/2 right-0 w-full h-[80%] blur-[120px] -z-10 rounded-full opacity-10"
                    style={{ backgroundColor: brandColor }}
                />
            </motion.div>

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
