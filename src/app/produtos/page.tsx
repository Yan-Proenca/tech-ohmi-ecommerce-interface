import CardProduto from "@/components/CardProduto"
import produtos from "../../../produtos.json"

export default function ProdutosPage() {
  return (
    <div className="w-full min-h-screen bg-slate-50 py-12">
      {/* Cabeçalho do Catálogo */}
      <div className="text-center mb-10">
        <h1 className="text-3xl font-extrabold text-slate-800 tracking-tight">
          Todos os Produtos
        </h1>
        <p className="text-slate-500 mt-2">
          Explore nossa linha completa de automação residencial
        </p>
      </div>

      {/* Grid com a listagem completa (sem filtros) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        {produtos.map((produto) => (
          <CardProduto
            key={produto.id}
            id={produto.id}
            title={produto.title}
            description={produto.description}
            price={produto.price}
            imageSrc={produto.imageSrc}
            destaque={produto.destaque}
          />
        ))}
      </div>
    </div>
  )
}