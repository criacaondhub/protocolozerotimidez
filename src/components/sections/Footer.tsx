export function Footer() {
    return (
        <footer className="bg-black text-zinc-500 py-12 border-t border-zinc-900">
            <div className="container mx-auto px-6 text-center">
                <p className="text-sm md:text-base tracking-widest uppercase">
                    DESENVOLVIDO POR:{" "}
                    <a
                        href="https://novadimensaohub.com.br"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold text-[#F9EFAF] hover:text-white transition-colors duration-300"
                    >
                        NOVA DIMENSÃO HUB
                    </a>
                </p>
                <p className="mt-4 text-[10px] opacity-40">
                    &copy; {new Date().getFullYear()} Protocolo Zero Timidez. Todos os direitos reservados.
                </p>
            </div>
        </footer>
    );
}
