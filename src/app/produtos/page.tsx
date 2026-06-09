import CardProduto from "@/components/CardProduto"
import produtos from "../../../produtos.json"

export default function ProdutosPage() {
  return (
    <div className="w-full min-h-screen bg-zinc-50 text-zinc-800 antialiased">
      {/* Hero / Cabeçalho do Catálogo */}
      <div className="bg-white border-b border-zinc-200 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left md:flex md:items-center md:justify-between">
          <div className="max-w-2xl">
            <span className="text-xs font-bold tracking-widest uppercase text-indigo-600">Catálogo Completo</span>
            <h1 className="text-3xl md:text-4xl font-black text-zinc-900 tracking-tight mt-1">
              Todos os Produtos
            </h1>
            <p className="text-zinc-500 mt-2 text-base md:text-lg">
              Explore nossa linha completa de automação residencial e transforme sua casa em um espaço inteligente.
            </p>
          </div>
          
          {/* Contador rápido de itens (UX: dá feedback imediato ao usuário) */}
          <div className="mt-4 md:mt-0 inline-flex items-center bg-zinc-100 text-zinc-600 px-4 py-2 rounded-full text-xs font-semibold">
            {produtos.length} produtos encontrados
          </div>
        </div>
      </div>

      {/* Barra de Ferramentas / Filtros Rápidos (UI/UX) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-zinc-200 pb-6">
          {/* Filtros rápidos por tags (Estilizados, prontos para receber lógica) */}
          <div className="flex flex-wrap gap-2 overflow-x-auto pb-2 sm:pb-0 scrollbar-none">
            <button className="px-4 py-2 bg-zinc-900 text-white text-xs font-medium rounded-lg shadow-sm transition-all whitespace-nowrap">
              Todos
            </button>
            <button className="px-4 py-2 bg-white border border-zinc-200 hover:border-zinc-300 text-zinc-600 text-xs font-medium rounded-lg transition-all whitespace-nowrap">
              Iluminação
            </button>
            <button className="px-4 py-2 bg-white border border-zinc-200 hover:border-zinc-300 text-zinc-600 text-xs font-medium rounded-lg transition-all whitespace-nowrap">
              Segurança
            </button>
            <button className="px-4 py-2 bg-white border border-zinc-200 hover:border-zinc-300 text-zinc-600 text-xs font-medium rounded-lg transition-all whitespace-nowrap">
              Áudio e Vídeo
            </button>
          </div>

          {/* Ordenação */}
          <div className="flex items-center space-x-2 self-end sm:self-center">
            <label htmlFor="sort" className="text-xs font-medium text-zinc-500 whitespace-nowrap">Ordenar por:</label>
            <select 
              id="sort" 
              className="text-xs bg-white border border-zinc-200 rounded-lg px-3 py-2 text-zinc-700 font-medium outline-none focus:ring-2 focus:ring-indigo-500 transition-all cursor-pointer"
            >
              <option>Mais Relevantes</option>
              <option>Menor Preço</option>
              <option>Maior Preço</option>
              <option>Destaques</option>
            </select>
          </div>
        </div>
      </div>

      {/* Grid de Produtos Principal */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 md:gap-8">
          {produtos.map((produto) => (
            <div 
              key={produto.id} 
              className={`relative rounded-2xl transition-all duration-300 ${
                produto.destaque 
                  ? "ring-2 ring-indigo-500/20 shadow-md hover:shadow-xl bg-white" 
                  : "hover:shadow-lg bg-white"
              }`}
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
      </main>
    </div>
  )
}