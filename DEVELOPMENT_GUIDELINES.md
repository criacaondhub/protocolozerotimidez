# Regras de Desenvolvimento - [NOME DO PROJETO]

Este documento define os padrões técnicos e de infraestrutura para este projeto. Siga estas diretrizes em cada interação.

---

## 🛠 1. Tecnologias Core
*   **Frontend**: React + Vite + TypeScript.
*   **Estilização**: Tailwind CSS (utilizar apenas classes utilitárias, evitar CSS externo).
*   **Animações**: Framer Motion (para transições dinâmicas e efeitos de scroll).
*   **Icons**: Lucide React ou SVGs diretos em componentes.

---

## 📁 2. Estrutura de Pastas e Caminhos
*   `/src/components/sections`: Componentes de seções inteiras da página (Lp-style).
*   `/src/components/ui`: Componentes atômicos e reutilizáveis (botões, cards, inputs).
*   `/public/assets`: TODAS as imagens, ícones e arquivos estáticos.
*   **Caminhos de Assets**: Sempre use caminhos relativos sem a barra inicial para garantir compatibilidade (ex: `src="assets/foto.png"` em vez de `src="/assets/foto.png"`).

---

## 🚀 3. Deploy e Produção (Docker & VPS)
O projeto é servido via Docker na VPS. Mantenha os seguintes padrões:
*   **Dockerfile**: Deve gerar uma build otimizada e servir via Nginx (ou similar) em ambiente Linux.
*   **build.sh**: Script na raiz que automatiza o `docker build`.
*   **Atualização de Serviço**: Para refletir mudanças na VPS após o `git pull`, use o comando:
    `docker service update --force [NOME_DO_SERVICO]`

---

## 📝 4. Git e Fluxo de Trabalho
*   **Commits**: Frequentes e descritivos em português (ex: `feat: adiciona FAQ`, `fix: alinhamento mobile`).
*   **SEO & Social**: O arquivo `index.html` deve sempre conter meta tags de título, descrição e a imagem de destaque (`og:image`).
*   **Simplicidade**: Mantenha o código limpo, evite bibliotecas pesadas desnecessárias e priorize componentes que rodem bem em produções rápidas.

---

## 🎯 5. Regras de Negócio Padrão
*   **CTAs**: Botões de seções de meio de página geralmente levam à âncora de preço (`#preco`).
*   **Checkout**: O botão dentro do card de preço deve levar ao link de Checkout externo: `[LINK_AQUI]`.
*   **Mobile-First**: A prioridade de validação e refinamento é sempre a experiência mobile.

---
*Instrução para IA: Ao iniciar este projeto, leia a estrutura atual para garantir que os nomes de serviços Docker e IDs de serviço coincidam com as definições acima.*

Vamos construir uma landing page do novo produto digital do expert Giovanni Begossi (conhecido como El Professor da Oratória), esse produto se chama "Protocolo Zero Timidez". Vou deixar abaixo a estrutura da Hero Section para você ter mais ou menos um norte de como vamos seguir. No meio do caminho pode haver alguma variação de posicionamento então não se prenda tanto nessa estrutura modelo.

Vamos usar o MCP do Shadcn para criação dos componentes e elementos em toda a landing page.

A landing page será majoritariamente na cor preta e a fonte que vamos usar na página será a Montserrat.

Hero Section dividida em duas colunas.
Coluna Esquerda:
Logo (Pode adicionar um placeholder, depois te envio)
Tagline: ✅ Mais de 100 mil alunos formados
Título: ELIMINE DE UMA VEZ POR TODAS A TIMIDEZ, O MEDO E O NERVOSISMO QUE TE TRAVAM NA HORA DE FALAR
Subtítulo: Você pode achar que timidez é "só seu jeito de ser". Mas a cada vez que você fica calado, não puxa conversa ou não se posiciona, você perde uma oportunidade que não volta mais.
CTA Button: QUERO ELIMINAR MINHA TIMIDEZ AGORA
Blocos pequenos: 🔒 Compra 100% segura / ✓ Acesso imediato / 🛡️ 7 dias de garantia

Coluna Direita: Imagem do Giovanni Begossi (Vou te enviar)