import Carrossel from "@/components/Carrossel"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, BookOpen, Sparkles, Quote } from "lucide-react"

const destaques = [
  {
    categoria: "Filosofia",
    titulo: "A Origem da Tragédia",
    autor: "Friedrich Nietzsche",
    descricao: "Uma investigação sobre o espírito dionisíaco e apolíneo na cultura grega — e o que isso nos diz sobre a modernidade.",
    preco: "R$ 49,90",
    tag: "Mais Vendido",
  },
  {
    categoria: "Crítica Cultural",
    titulo: "Dialética do Esclarecimento",
    autor: "Adorno & Horkheimer",
    descricao: "O manifesto da Escola de Frankfurt que desnudou a lógica oculta da razão iluminista e da indústria cultural.",
    preco: "R$ 62,00",
    tag: "Curadoria",
  },
  {
    categoria: "Existencialismo",
    titulo: "O Ser e o Nada",
    autor: "Jean-Paul Sartre",
    descricao: "A obra monumental que fundou o existencialismo como programa filosófico: liberdade radical e responsabilidade absoluta.",
    preco: "R$ 74,50",
    tag: "Clássico",
  },
]

const tagColors: Record<string, string> = {
  "Mais Vendido": "bg-[#E5B842]/15 text-[#E5B842] border-[#E5B842]/30",
  "Curadoria": "bg-white/5 text-zinc-300 border-white/10",
  "Clássico": "bg-white/5 text-zinc-300 border-white/10",
}

export default function Home() {
  return (
    <div className="flex flex-col">

      <section className="relative w-full overflow-hidden">
        <Carrossel />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 pointer-events-none px-4">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#E5B842] mb-4">
            Curadoria Editorial
          </p>
          <h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight max-w-3xl mb-6"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Obras que mudam
            <br />
            <span className="text-[#E5B842]">a forma de pensar.</span>
          </h1>
          <p className="text-sm md:text-base text-zinc-300 max-w-md leading-relaxed mb-8">
            Filosofia, cultura e crítica para quem não se satisfaz com respostas fáceis.
          </p>
          <div className="pointer-events-auto flex flex-col sm:flex-row gap-3">
            <Button
              asChild
              className="bg-[#E5B842] hover:bg-[#B8912A] text-black font-semibold px-6 py-5 rounded-none text-sm tracking-wide transition-colors duration-300"
            >
              <Link href="/produtos">
                Ver Catálogo
                <ArrowRight size={15} className="ml-2" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-white/20 text-white hover:bg-white/5 hover:border-white/40 px-6 py-5 rounded-none text-sm tracking-wide bg-transparent transition-all duration-300"
            >
              <Link href="/contato">Fale Conosco</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="w-full px-4 md:px-16 lg:px-36 py-20 border-b border-white/5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5">
          {[
            { Icon: BookOpen, valor: "500+", label: "Títulos disponíveis" },
            { Icon: Sparkles, valor: "12", label: "Coleções temáticas" },
            { Icon: Quote, valor: "100%", label: "Curadoria especializada" },
          ].map(({ Icon, valor, label }) => (
            <div key={label} className="bg-[#080808] px-8 py-10 flex flex-col items-center gap-2 text-center">
              <Icon size={20} className="text-[#E5B842] mb-1" />
              <span
                className="text-3xl font-bold text-white"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                {valor}
              </span>
              <span className="text-xs text-zinc-500 tracking-wide uppercase">{label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="w-full px-4 md:px-16 lg:px-36 py-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#E5B842] mb-3">
              Seleção do Mês
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold text-white leading-tight"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Filosofia em Destaque
            </h2>
          </div>
          <Link
            href="/produtos"
            className="flex items-center gap-2 text-sm text-zinc-500 hover:text-[#E5B842] transition-colors group shrink-0"
          >
            Ver todos os títulos
            <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {destaques.map((livro) => (
            <article
              key={livro.titulo}
              className="group flex flex-col bg-[#0E0E0E] border border-white/5 hover:border-[#E5B842]/30 transition-all duration-300 cursor-pointer"
            >
              <div className="aspect-[3/4] bg-zinc-900 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <BookOpen size={40} className="text-zinc-700" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E0E] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="flex flex-col flex-1 p-6 gap-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-zinc-500">
                    {livro.categoria}
                  </span>
                  <span
                    className={`text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 border ${tagColors[livro.tag]}`}
                  >
                    {livro.tag}
                  </span>
                </div>

                <div>
                  <h3
                    className="text-base font-bold text-white leading-snug group-hover:text-[#E5B842] transition-colors duration-300"
                    style={{ fontFamily: "var(--font-space-grotesk)" }}
                  >
                    {livro.titulo}
                  </h3>
                  <p className="text-xs text-zinc-500 mt-0.5">{livro.autor}</p>
                </div>

                <p className="text-xs text-zinc-400 leading-relaxed flex-1">{livro.descricao}</p>

                <div className="flex items-center justify-between pt-2 border-t border-white/5 mt-auto">
                  <span className="text-sm font-semibold text-[#E5B842]">{livro.preco}</span>
                  <Button
                    asChild
                    size="sm"
                    className="bg-transparent border border-white/10 hover:border-[#E5B842] hover:bg-[#E5B842]/10 text-zinc-300 hover:text-[#E5B842] text-xs rounded-none px-4 transition-all duration-300"
                  >
                    <Link href="/produtos">Comprar</Link>
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="w-full px-4 md:px-16 lg:px-36 py-24 border-t border-white/5 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 100%, rgba(229,184,66,0.06) 0%, transparent 70%)",
          }}
        />
        <div className="relative z-10 flex flex-col items-center text-center gap-6 max-w-xl mx-auto">
          <span className="text-[10px] font-semibold uppercase tracking-[0.4em] text-[#E5B842]">
            Para quem pensa fundo
          </span>
          <h2
            className="text-3xl md:text-5xl font-bold text-white leading-tight"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            A biblioteca que você merecia ter.
          </h2>
          <p className="text-sm text-zinc-400 leading-relaxed">
            Cada título escolhido a dedo. Cada coleção pensada para aprofundar o olhar — sobre o mundo, sobre si mesmo.
          </p>
          <Button
            asChild
            className="bg-[#E5B842] hover:bg-[#B8912A] text-black font-semibold px-8 py-5 rounded-none text-sm tracking-wide transition-colors duration-300 mt-2"
          >
            <Link href="/produtos">
              Explorar o Catálogo
              <ArrowRight size={15} className="ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
