import React from "react";
import { motion, useMotionValue, useMotionTemplate } from "framer-motion";
import { Briefcase, Presentation, Users, Video, Mic } from "lucide-react";

const situations = [
    {
        title: "Em uma apresentação:",
        icon: <Presentation className="w-7 h-7" />,
        items: [
            { icon: "icone-check.png", text: "Você se preparou por semanas." },
            { icon: "icone-freeze-face.png", text: <>Mas quando sobe no palco, as mãos suam, a boca seca e você só consegue pensar: <i>"Todo mundo está me julgando"</i></> },
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
        title: "Em uma reunião de trabalho:",
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
            { icon: "icone-weary-face.png", text: <>E desiste porque pensa: <i>"Não sou bom nisso mesmo"</i></> },
        ]
    },
    {
        title: "No áudio do WhatsApp:",
        icon: <Mic className="w-7 h-7" />,
        items: [
            { icon: "icone-fala.png", text: "Você grava, escuta, deleta." },
            { icon: "icone-repeat.png", text: "Grava de novo, escuta de novo, deleta de novo." },
            { icon: "icone-calado.png", text: "Até que desista e mande só o texto." },
        ]
    }
];

export function Situations() {
    return (
        <section className="bg-black py-32 relative">
            {/* Circular Text Divider */}
            <div className="absolute top-0 left-0 w-full flex justify-center -translate-y-1/2 z-[40]">
                <div className="relative w-48 h-48 flex items-center justify-center">
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
                            className="h-[40px] w-auto"
                        />
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <h2 className="text-[2.5rem] font-bold text-center text-white mb-20 leading-tight">
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
          background: linear-gradient(45deg, #ffdd80, #000000 60%);
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
            className="glass-card rounded-[2.5rem] p-8 md:p-12 flex flex-col group h-full"
        >
            {/* Spotlight effect */}
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: useMotionTemplate`
            radial-gradient(
              450px circle at ${mouseX}px ${mouseY}px,
              rgba(255, 221, 128, 0.08),
              transparent 80%
            )
          `,
                }}
            />

            <div className="flex items-center gap-4 mb-10">
                <div className="text-[#ffdd80]">
                    {icon}
                </div>
                <h3 className="text-[1.35rem] font-extrabold text-white leading-tight first-letter:uppercase">
                    {title}
                </h3>
            </div>

            <div className="flex flex-col gap-6">
                {items.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-6 h-6 mt-1 flex items-center justify-center">
                            <img src={`assets/${item.icon}`} alt="" className="w-full h-full object-contain" />
                        </div>
                        <div className="text-[1.125rem] leading-[1.5] text-white/80 font-normal">
                            {item.text}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
