import { motion } from "framer-motion";
import { PlayCircle } from "lucide-react";

const modulesData = [
    {
        number: "0",
        title: "INTRODUÇÃO",
        lessons: [
            "Aula 1: Boas-vindas e apresentação",
            "Aula 2: Quero te conhecer",
            "Aula 3: Não esquece de entrar no grupo"
        ],
        description: "Aqui você destrói as crenças limitantes que te impedem de falar."
    },
    {
        number: "1",
        title: "MENTALIDADE",
        lessons: [
            "Aula 1: A tríade da oratória",
            "Aula 2: Os 3 bloqueios que travam a sua comunicação",
            "Aula 3: O bloqueio do agradador",
            "Aula 4: O bloqueio do perfeccionista",
            "Aula 5: O bloqueio do comparador"
        ]
    },
    {
        number: "2",
        title: "NUNCA NEGUE PALCO",
        lessons: [
            "Aula 1: Cérebro primitivo x racional",
            "Aula 2: A regra de ouro para perder a timidez"
        ]
    },
    {
        number: "3",
        title: "AMBIÊNCIA",
        lessons: [
            "Aula 1: O que GTA nos ensina sobre oratória",
            "Aula 2: Tenha um grupo de apoio",
            "Aula 3: Seja o mais burro da mesa",
            "Aula 4: Foque no seu círculo de influência",
            "Aula 5: Tire o atraso de desenvolvimento pessoal"
        ]
    },
    {
        number: "4",
        title: "OS 3 Ps DA ORATÓRIA CONFIANTE",
        lessons: [
            "Aula 1: Como se tornar o Batman da comunicação",
            "Aula 2: Preparação",
            "Aula 3: Paixão",
            "Aula 4: Personalidade"
        ]
    },
    {
        number: "5",
        title: "9 TÉCNICAS PARA LIDAR COM NERVOSISMO",
        description: "Técnicas práticas e imediatas para quando o nervosismo bater:",
        lessons: [
            "Aula 1: Saiba seus pontos fortes",
            "Aula 2: Ajuste sua postura",
            "Aula 3: Técnica do anjo da guarda",
            "Aula 4: Técnica de passar a bola",
            "Aula 5: Não chame a atenção negativamente",
            "Aula 6: Diálogo interno positivo",
            "Aula 7: Trate de igual para igual",
            "Aula 8: Banalize a tarefa de falar em público",
            "Aula 9: Regra dos três segundos"
        ]
    },
    {
        number: "6",
        title: "ROTINA PRÉ-APRESENTAÇÃO",
        lessons: [
            "Aula 1: Técnica da caneta",
            "Aula 2: Técnica das caretas",
            "Aula 3: Visualização positiva",
            "Aula 4: Respiração diafragmática quadrada",
            "Aula 5: Escolha a música certa",
            "Aula 6: Retirada estratégica",
            "Aula 7: Reconhecimento avançado do terreno",
            "Bônus: Técnica do saco de batata"
        ]
    },
    {
        number: "7",
        title: "ENCERRAMENTO",
        lessons: [
            "Aula 1: Parabéns",
            "Aula 2: Presente e próximos passos"
        ]
    }
];

// Organização em colunas manuais para ordem visual 0>1>2 e sem buracos (Masonry manual)
const col1 = [modulesData[0], modulesData[3], modulesData[6]];
const col2 = [modulesData[1], modulesData[4], modulesData[7]];
const col3 = [modulesData[2], modulesData[5]];

export function Modules() {
    return (
        <section className="bg-white text-black py-24 relative overflow-hidden">
            {/* Semi-ellipse Transition Top */}
            <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-30">
                <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[120%] -left-[10%] h-[80px] fill-black">
                    <path d="M0,0 h1200 v50 Q600,120 0,50 Z"></path>
                </svg>
            </div>

            <div className="container mx-auto px-4 sm:px-6 relative z-10 pt-10 md:pt-16">
                <header className="mb-24 text-center">
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

                {/* Manual Column Distribution for perfect fit and logic order */}
                <div className="flex flex-col lg:flex-row gap-8 items-start max-w-7xl mx-auto">
                    {/* Column 1: Modules 0, 3, 6 */}
                    <div className="flex-1 flex flex-col gap-8 w-full">
                        {col1.map((module, idx) => (
                            <ModuleCard key={idx} module={module} delay={idx * 0.1} />
                        ))}
                    </div>

                    {/* Column 2: Modules 1, 4, 7 */}
                    <div className="flex-1 flex flex-col gap-8 w-full">
                        {col2.map((module, idx) => (
                            <ModuleCard key={idx} module={module} delay={0.1 + idx * 0.1} />
                        ))}
                    </div>

                    {/* Column 3: Modules 2, 5 */}
                    <div className="flex-1 flex flex-col gap-8 w-full">
                        {col3.map((module, idx) => (
                            <ModuleCard key={idx} module={module} delay={0.2 + idx * 0.1} />
                        ))}
                    </div>
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

function ModuleCard({ module, delay }: { module: any, delay: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay }}
            className="bg-white border border-zinc-100 shadow-xl shadow-zinc-200/40 rounded-[2rem] p-6 md:p-8 flex flex-col hover:border-[#c9a24b]/40 transition-all hover:shadow-2xl hover:shadow-[#c9a24b]/5 group"
        >
            <div className="flex flex-col items-center lg:items-start gap-3 mb-6 text-center lg:text-left">
                <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-[#c9a24b] uppercase tracking-[0.2em] mb-1">Módulo {module.number}</span>
                    <h3 className="text-xl font-bold tracking-tight uppercase leading-tight group-hover:text-[#c9a24b] transition-colors">
                        {module.title}
                    </h3>
                </div>
            </div>

            {module.description && (
                <p className="text-sm font-bold text-[#c9a24b] mb-6 leading-relaxed italic bg-[#f9efaf]/20 p-4 rounded-2xl lg:border-l-4 border-[#c9a24b]">
                    {module.description}
                </p>
            )}

            <ul className="space-y-4 flex flex-col items-center lg:items-start text-center lg:text-left">
                {module.lessons.map((lesson: string, lIdx: number) => (
                    <li key={lIdx} className="flex flex-col lg:flex-row items-center lg:items-start gap-2 lg:gap-3 group/item">
                        <PlayCircle className="w-4 h-4 text-[#c9a24b] shrink-0 opacity-40 group-hover/item:opacity-100 transition-opacity" />
                        <span className="text-[0.95rem] text-zinc-700 leading-[1.4] font-medium">
                            {lesson}
                        </span>
                    </li>
                ))}
            </ul>
        </motion.div>
    );
}
