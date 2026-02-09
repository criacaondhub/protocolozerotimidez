import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

export function FAQ() {
    const faqs = [
        {
            question: "Isso funciona para quem é MUITO tímido?",
            answer: "Sim. O protocolo foi criado exatamente para quem é muito tímido ou ainda sofre com algum bloqueio e quer destravar 100% da comunicação. Giovanni era extremamente tímido, sofria bullying e não tinha amigos. Se funcionou para ele, funciona para você."
        },
        {
            question: "Quanto tempo leva para ver o resultado?",
            answer: " Muitos alunos percebem diferença já nos primeiros dias. Mas a transformação real acontece quando você aplica o protocolo completo de modo contínuo, colhendo resultados pelo resto da vida."
        },
        {
            question: "Mas e se eu não quiser falar em público?",
            answer: "O protocolo funciona para qualquer situação: reuniões pequenas, conversas 1 a 1, vídeos, áudios... você não precisa virar palestrante, más precisa parar de travar."
        },
        {
            question: "E se eu não tiver tempo para fazer o curso?",
            answer: "As aulas são curtas e diretas (10-15 minutos em média). Você consegue assistir no trajeto para o trabalho, no horário de almoço, ou até mesmo antes de dormir."
        },
        {
            question: "Isso é só teoria ou tem prática?",
            answer: "É 80% prática. Cada módulo tem exercícios e técnicas para você aplicar imediatamente. Não é um curso para \"refletir sobre timidez\". É um curso para ELIMINAR timidez."
        },
        {
            question: "Funciona para quem já tem mais de 40 anos?",
            answer: "Sim. Timidez não tem idade. Giovanni já treinou pessoas de 5 a 85 anos. O protocolo funciona porque é baseado em neurociência e comportamento, não em \"ser jovem e descolado\"."
        },
        {
            question: "E se eu não gostar?",
            answer: "Você tem 7 dias de garantia incondicional a partir da data da compra. Se você achar que não é pra você, é só solicitar reembolso. Sem perguntas, sem burocracia."
        },
        {
            question: "Como receberei o acesso?",
            answer: "O acesso será enviado imediatamente após a sua compra em seu e-mail e também no seu WhatsApp! Caso não tenha recebido, verifique o seu spam. Se necessário, entre em contato com nosso suporte."
        },
        {
            question: "Qual o contato do suporte?",
            answer: "Entre em contato através do número (xx) xxxxx-xxxx."
        },
        {
            question: "Por quanto tempo terei acesso?",
            answer: "Você terá acesso por 1 ano para assistir quantas vezes quiser!"
        }
    ];

    return (
        <section id="faq" className="bg-black text-white pt-24 pb-0 relative overflow-hidden">
            {/* FAQ Header - Outside restricted container to avoid clipping */}
            <div className="text-center mb-10 px-4 sm:px-6">
                <h2 className="text-[32px] sm:text-4xl md:text-5xl lg:text-[4.5rem] font-black tracking-tighter uppercase leading-tight text-[#f9efaf] break-words">
                    PERGUNTAS <br className="lg:hidden" /> FREQUENTES
                </h2>
            </div>

            <div className="container mx-auto px-4 sm:px-6 max-w-4xl relative z-10">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <Accordion type="single" collapsible className="w-full space-y-4">
                        {faqs.map((faq, index) => (
                            <AccordionItem
                                key={index}
                                value={`item-${index}`}
                                className="border border-zinc-800 bg-zinc-900/30 rounded-2xl px-6 transition-all data-[state=open]:border-[#f9efaf]/30 data-[state=open]:bg-zinc-900/50"
                            >
                                <AccordionTrigger className="hover:no-underline py-6 text-[16px] md:text-xl font-bold tracking-tight text-center lg:text-left justify-center lg:justify-between">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-zinc-400 text-[16px] leading-relaxed pb-6 text-center lg:text-left">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </motion.div>
            </div>

        </section>
    );
}
