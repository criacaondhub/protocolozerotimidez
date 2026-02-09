import { motion, useMotionValue, useMotionTemplate } from "framer-motion";
import { Briefcase, Presentation, Users, Video, Mic } from "lucide-react";
import ColorBends from "@/components/ui/ColorBends";
import { Button } from "@/components/ui/button";

const situations = [
    {
        title: "Em uma apresentação:",
        icon: <Presentation className="w-7 h-7" />,
        items: [
            { icon: "icone-check.png", text: "Você se preparou por semanas." },
            { icon: "icone-freeze-face.png", text: <>Mas quando sobe no palco, as mãos suam, a boca seca e você só consegue pensar: <i>"Todos estão me julgando"</i></> },
        ]
    },
    {
        title: "Fazendo networking:",
        icon: <Users className="w-7 h-7" />,
        items: [
            { icon: "icone-fear-face.png", text: <>Você vê aquela pessoa importante que poderia abrir portas, mas sua mente fica repetindo: <i>"E se eu falar besteira?"</i>, <i>"E se ela me ignorar?"</i></> },
        ]
    },
    {
        title: "NA REUNIÃO DO TRABALHO:",
        icon: <Briefcase className="w-7 h-7" />,
        items: [
            { icon: "icone-check.png", text: "Você sabe a resposta." },
            { icon: "icone-check.png", text: "Tem a ideia perfeita." },
            { icon: "icone-shaking-face.png", text: "Mas quando chega sua vez de falar, a voz trava, o coração acelera e você deixa passar." },
        ]
    },
    {
        title: "Gravando vídeos:",
        icon: <Video className="w-7 h-7" />,
        items: [
            { icon: "icone-check.png", text: "Você aperta o REC." },
            { icon: "icone-stop.png", text: "Tenta falar. Para. Apaga." },
            { icon: "icone-tedio-face.png", text: "Tenta de novo. Para de novo." },
            { icon: "icone-weary-face.png", text: <>E desiste porque pensa: <br className="hidden lg:block" /> <i>"Não sou bom nisso mesmo"</i></> },
        ]
    },
    {
        title: "No áudio do WhatsApp:",
        icon: <Mic className="w-7 h-7" />,
        items: [
            { icon: "icone-fala.png", text: "Você grava, escuta, deleta." },
            { icon: "icone-repeat.png", text: <>Grava de novo, escuta de novo, <br className="hidden lg:block" /> deleta de novo.</> },
            { icon: "icone-calado.png", text: "Até que desista e mande só o texto." },
        ]
    }
];

export function Situations() {
    return (
        <section className="bg-black py-32 relative z-20">
            {/* Animated Background - Hidden on mobile */}
            <div className="absolute inset-0 z-0 opacity-25 hidden lg:block">
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

            {/* Circular Text Divider */}
            <div className="absolute top-0 left-0 w-full flex justify-center z-[100] px-4 mt-0 lg:-translate-y-1/2">
                <div className="relative w-32 h-32 md:w-48 md:h-48 flex items-center justify-center">
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0"
                    >
                        <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
                            <defs>
                                <path
                                    id="textCircle"
                                    d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
                                />
                            </defs>
                            <text className="text-[8px] uppercase font-bold tracking-[0.35em] fill-[#ffdd80]">
                                <textPath href="#textCircle" startOffset="0">
                                    ZERO TIMIDEZ - ZERO TIMIDEZ -
                                </textPath>
                            </text>
                        </svg>
                    </motion.div>

                    {/* Static Center Icon */}
                    <div className="bg-black p-4 rounded-full relative z-10">
                        <img
                            src="assets/icone-zt.png"
                            alt="ZT"
                            className="h-8 md:h-[40px] w-auto"
                        />
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                <h2 className="text-[26px] md:text-[2.5rem] font-bold text-center text-white mb-12 md:mb-20 leading-tight">
                    Você reconhece alguma dessas situações?
                </h2>

                {/* Content Grid */}
                <div className="flex flex-wrap justify-center gap-8">
                    {/* First Row (2 boxes) */}
                    <div className="w-full lg:w-[calc(66.66%+2rem)] flex flex-wrap justify-center gap-8">
                        {situations.slice(0, 2).map((sit, idx) => (
                            <div key={idx} className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(50%-1rem)]">
                                <SituationCard {...sit} />
                            </div>
                        ))}
                    </div>

                    {/* Second Row (3 boxes) */}
                    <div className="w-full flex flex-wrap justify-center gap-8">
                        {situations.slice(2).map((sit, idx) => (
                            <div key={idx} className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1.34rem)]">
                                <SituationCard {...sit} />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Final Call to Action Section */}
                <div className="mt-24 flex flex-col items-center text-center space-y-10 max-w-4xl mx-auto">
                    <h2 className="text-[1.5rem] md:text-[1.8rem] font-bold text-white leading-relaxed">
                        Se você se identificou com pelo menos uma dessas situações, esse protocolo é para você!
                    </h2>

                    <div className="w-full max-w-sm md:max-w-md">
                        <Button
                            size="lg"
                            className="bg-emerald-600 hover:bg-emerald-500 text-white font-black py-6 text-[16px] rounded-xl transition-all hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_30px_rgba(16,185,129,0.2)] border-b-4 border-emerald-800 active:border-b-0 uppercase tracking-tight w-full shadow-emerald-900/20"
                            onClick={() => document.getElementById('preco')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            QUERO SUPERAR MINHA TIMIDEZ
                        </Button>
                    </div>
                </div>
            </div>

            <style>{`
        .glass-card {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(10px);
          position: relative;
          z-index: 1;
          overflow: hidden;
        }
        .glass-card::before {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: inherit;
          padding: 1.5px;
          background: linear-gradient(180deg, #f9efaf, #000000 70%);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
          z-index: -1;
        }
      `}</style>
        </section>
    );
}

interface SituationItem {
    icon: string;
    text: React.ReactNode;
}

interface SituationCardProps {
    title: string;
    icon: React.ReactNode;
    items: SituationItem[];
}

function SituationCard({ title, icon, items }: SituationCardProps) {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <div
            onMouseMove={handleMouseMove}
            className="glass-card rounded-[2.5rem] flex flex-col group h-full overflow-hidden border border-[#ffdd80]/20"
        >
            {/* Header Section */}
            <div className="bg-[#f9efaf] px-4 py-4 md:px-6 md:py-5 flex items-center justify-center gap-3 text-black text-center relative z-10">
                <div className="shrink-0 scale-75 md:scale-90">
                    {icon}
                </div>
                <h3 className="text-[16px] md:text-[1.3rem] font-black leading-tight first-letter:uppercase uppercase tracking-tight text-center">
                    {title}
                </h3>
            </div>

            {/* Content Area */}
            <div className="p-6 md:p-10 flex flex-col flex-grow relative">
                {/* Spotlight effect overlay */}
                <motion.div
                    className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
                    style={{
                        background: useMotionTemplate`
                radial-gradient(
                  450px circle at ${mouseX}px ${mouseY}px,
                  rgba(255, 221, 128, 0.12),
                  transparent 80%
                )
              `,
                    }}
                />

                <div className="flex flex-col gap-6 relative z-10 items-center lg:items-start text-center lg:text-left">
                    {items.map((item, idx) => (
                        <div key={idx} className="flex flex-col lg:flex-row items-center lg:items-start gap-3 lg:gap-4 py-1">
                            <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center">
                                <img src={`assets/${item.icon}`} alt="" className="w-full h-full object-contain" />
                            </div>
                            <div className="text-[16px] leading-[1.5] text-white/90 font-medium text-center lg:text-left">
                                {item.text}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
