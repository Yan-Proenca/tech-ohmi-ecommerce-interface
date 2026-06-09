import Carrossel from "@/components/Carrossel"
import CardProduto from "@/components/CardProduto"
import produtos from "../../produtos.json"

export default function Home() {
  // Mantém estritamente apenas os itens de destaque
  const produtosEmDestaque = produtos.filter((produto) => produto.destaque === true)

  return (
    <div className="w-full min-h-screen bg-zinc-50 text-zinc-800 antialiased">
      {/* Carrossel de Banner no Topo */}
      <div className="w-full bg-zinc-900 overflow-hidden shadow-md">
        <Carrossel /> 
      </div>

      {/* ================= SEÇÃO: BENEFÍCIOS RÁPIDOS (CORRIGIDA) ================= */}
      {/* Removemos o '-mt-8' e o 'relative z-20' para que ele não suba em cima do carrossel */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="bg-white rounded-2xl shadow-md border border-zinc-100 p-6 md:p-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="flex items-start space-x-4">
            <div className="p-3 bg-indigo-50 rounded-xl text-indigo-600 shrink-0">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-zinc-900 text-sm">Pronta Entrega</h3>
              <p className="text-xs text-zinc-500 mt-0.5">Envio imediato para todo o Brasil com rastreio.</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-4 sm:border-x sm:border-zinc-100 sm:px-6">
            <div className="p-3 bg-indigo-50 rounded-xl text-indigo-600 shrink-0">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-zinc-900 text-sm">Garantia Nacional</h3>
              <p className="text-xs text-zinc-500 mt-0.5">Suporte técnico e homologação oficial de 1 ano.</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="p-3 bg-indigo-50 rounded-xl text-indigo-600 shrink-0">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-zinc-900 text-sm">Fácil Instalação</h3>
              <p className="text-xs text-zinc-500 mt-0.5">Dispositivos Plug & Play compatíveis com Alexa e Google.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SEÇÃO: DESTAQUES ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
        <div className="text-center mb-12 md:mb-16">
          <span className="text-xs font-bold tracking-widest uppercase text-indigo-600">Mais Procurados</span>
          <h2 className="text-3xl md:text-4xl font-black text-zinc-900 tracking-tight mt-1 bg-gradient-to-r from-zinc-900 to-zinc-600 bg-clip-text text-transparent">
            Produtos em Destaque
          </h2>
          <p className="text-zinc-500 mt-2 text-base max-w-xl mx-auto">
            Os materiais mais inovadores e desejados para elevar a inteligência e o conforto da sua rotina.
          </p>
        </div>

        {/* Grid de Destaques */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {produtosEmDestaque.map((produto) => (
            <div 
              key={produto.id} 
              className="group relative rounded-2xl bg-white shadow-sm hover:shadow-xl transition-all duration-300 ring-1 ring-zinc-200/50 hover:ring-indigo-500/20"
            >


              <CardProduto
                id={produto.id}
                title={produto.title}
                description={produto.description}
                price={produto.price}
                imageSrc={produto.imageSrc}
                destaque={produto.destaque}
              />
            </div>
          ))}
        </div>
      </section>

      {/* ================= SEÇÃO: CALL TO ACTION ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="bg-gradient-to-br from-indigo-900 to-slate-900 rounded-3xl p-8 md:p-12 text-center md:text-left md:flex md:items-center md:justify-between shadow-xl relative overflow-hidden">
          <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-indigo-500 rounded-full blur-3xl opacity-20"></div>
          
          <div className="relative z-10 max-w-xl space-y-2">
            <h3 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
              Não encontrou o que procurava?
            </h3>
            <p className="text-indigo-200 text-sm md:text-base leading-relaxed">
              Temos um ecossistema completo de soluções de automação esperando pelo seu projeto. Conheça nossa linha completa.
            </p>
          </div>

          <div className="mt-6 md:mt-0 relative z-10 shrink-0">
            <a 
              href="/produtos" 
              className="inline-flex items-center justify-center px-6 py-3.5 bg-white hover:bg-zinc-100 text-indigo-900 font-bold text-sm rounded-xl transition-all shadow-md active:scale-95 space-x-2 w-full sm:w-auto"
            >
              <span>Ver Catálogo Completo</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}