export function Footer() {
    return (
        <footer className="bg-black text-zinc-400 py-12 border-t border-zinc-900">
            <div className="container mx-auto px-6 text-center">
                <p className="text-sm md:text-base tracking-widest uppercase">
                    DESENVOLVIDO POR: <br className="md:hidden" />
                    <a
                        href="https://novadimensaohub.com.br"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold text-[#F9EFAF] hover:text-white transition-colors duration-300"
                    >
                        NOVA DIMENSÃO
                    </a>
                </p>
                <div className="mt-12 max-w-4xl mx-auto space-y-6 text-[10px] md:text-xs leading-relaxed opacity-60">
                    <p>
                        ESTE SITE NÃO É do FACEBOOK: Este site não faz parte do site do Facebook ou do Facebook Inc. Além disso, este site NÃO é endossado pelo Facebook de nenhuma maneira. FACEBOOK é comercial independente da FACEBOOK, Inc.
                    </p>
                    <p>
                        A El Professor da Oratória Ltda. é uma empresa com o objetivo de ajudar pessoas a se comunicarem melhor e aumentar o seu nível de oratória através de cursos e mentorias digitais. Os depoimentos mostrados vão variar com base no seu esforço, no conhecimento que você adquirir e nas forças do mercado que estão além do controle de qualquer pessoa.
                    </p>
                    <p className="font-bold">
                        Nós NÃO compartilharemos seus dados com ninguém.
                    </p>
                    <p className="pt-4 border-t border-zinc-900/50">
                        &copy; {new Date().getFullYear()} Protocolo Zero Timidez. Todos os direitos reservados.
                    </p>
                </div>
            </div>
        </footer>
    );
}
