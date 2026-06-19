# 🏠 Casa Inteligente — Catálogo de Automação Residencial

Catálogo digital de produtos de automação residencial (iluminação, segurança, áudio e vídeo), construído com **Next.js (App Router)**. O projeto exibe os itens em destaque na página inicial e oferece um catálogo completo com busca, filtros por categoria e ordenação por preço.

---

## 📌 Sobre o Projeto

Este é um front-end de e-commerce/catálogo focado em dispositivos de automação residencial — like lâmpadas inteligentes, câmeras de segurança e assistentes de voz. A aplicação foi pensada para apresentar produtos como lâmpadas inteligentes, câmeras de segurança e assistentes de voz de forma visualmente atraente, com uma página inicial destacando os itens mais procurados e uma página de catálogo completo com ferramentas de busca e filtragem para facilitar a descoberta de produtos pelo usuário.

---

## 🛠️ Tecnologias Utilizadas

- **[Next.js 14+](https://nextjs.org/)** — Framework React com App Router, renderização híbrida (Server/Client Components) e otimização de imagens.
- **[React](https://react.dev/)** — Biblioteca para construção de interfaces, com hooks (`useState`, `useMemo`) para gerenciamento de estado local.
- **[TypeScript](https://www.typescriptlang.org/)** — Tipagem estática para maior segurança e manutenibilidade do código.
- **[Tailwind CSS](https://tailwindcss.com/)** — Estilização utilitária responsiva (paleta `zinc` / `indigo`, cantos arredondados, sombras suaves).
- **[Shadcn UI](https://ui.shadcn.com/)** — Componentes acessíveis e estilizados: `Card`, `Button`, `Badge`.

---

## ✨ Funcionalidades Implementadas

- **Página Inicial (`/`)**
  - Carrossel de banners no topo.
  - Seção de benefícios rápidos (pronta entrega, garantia, fácil instalação).
  - Listagem dos produtos marcados como `destaque: true`.
  - Call-to-action direcionando para o catálogo completo.

- **Catálogo Completo (`/produtos`)**
  - Listagem de todos os produtos cadastrados em `produtos.json`.
  - **Busca textual em tempo real**: filtra por `title` e `description`, sem distinção entre maiúsculas/minúsculas.
  - **Filtro por categoria**: botões gerados dinamicamente a partir das categorias presentes no JSON (ex.: Segurança, Áudio e Vídeo, Iluminação), com opção "Todos" selecionada por padrão. Os filtros de texto e categoria se combinam.
  - **Ordenação**: por relevância (destaques primeiro), menor preço, maior preço, ou apenas itens em destaque.
  - **Contador dinâmico**: exibe a quantidade de produtos encontrados após aplicação dos filtros.
  - **Estado vazio**: mensagem amigável quando nenhum produto corresponde aos filtros aplicados.

---

## 🚀 Como Executar o Projeto

### Pré-requisitos
- [Node.js](https://nodejs.org/) (versão 18 ou superior recomendada)
- npm, yarn ou pnpm

### Passo a passo

```bash
# 1. Clone o repositório
git clone <url-do-repositorio>

# 2. Acesse a pasta do projeto
cd nome-do-projeto

# 3. Instale as dependências
npm install

# 4. Rode o servidor de desenvolvimento
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador para visualizar a aplicação.

### Build de produção

```bash
npm run build
npm run start
```

---

## 📁 Estrutura de Arquivos

```
.
├── app/
│   ├── layout.tsx              # Layout raiz (fontes, Header, Footer)
│   ├── page.tsx                # Página inicial (Home) com produtos em destaque
│   └── produtos/
│       └── page.tsx            # Catálogo completo (busca, filtros, ordenação)
│
├── components/
│   ├── Header.tsx               # Cabeçalho do site
│   ├── Footer.tsx                # Rodapé do site
│   ├── Carrossel.tsx             # Carrossel de banners da Home
│   ├── CardProduto.tsx           # Card de exibição de produto (Shadcn UI)
│   └── ui/                       # Componentes Shadcn (Card, Button, Badge...)
│
├── lib/
│   └── utils.ts                  # Utilitário `cn` para composição de classes
│
├── produtos.json                 # Base de dados estática dos produtos
├── globals.css                   # Estilos globais e variáveis Tailwind
└── README.md
```

---

## 📝 Observações

- O campo de categoria utilizado nos filtros (`categoria`) deve existir em cada item de `produtos.json`. Caso o nome do campo na sua base de dados seja diferente, ajuste a interface `Produto` e as referências em `app/produtos/page.tsx`.
