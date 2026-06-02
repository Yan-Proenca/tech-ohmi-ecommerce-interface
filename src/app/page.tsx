import Carrossel from "@/components/Carrossel"
import CardProduto from "@/components/CardProduto"

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-slate-50 pb-12">
      {/* Carrossel de Banner no Topo */}
      <Carrossel />

      {/* Título da Seção */}
      <div className="text-center my-10">
        <h1 className="text-3xl font-extrabold text-slate-800 tracking-tight">
          Produtos em destaque
        </h1>
        <p className="text-slate-500 mt-2">
          Os materiais mais procurados e organizados para sua rotina
        </p>
      </div>

      {/* Grid Responsivo para os Cards:
          1 coluna no celular | 2 colunas no tablet | 3 colunas em telas grandes
      */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">

        {/* Card 1: Caderno */}
        <CardProduto
          id={1}
          title="Caderno Inteligente Pastel"
          description="Caderno com discos e folhas reposicionáveis. Capa dura com acabamento premium em tons pastel."
          price={89.90}
          imageSrc="/produtos/caderno.png"
          destaque={true}
        />

        {/* Card 2: Estojo */}
        <CardProduto
          id={2}
          title="Estojo Holográfico Grande"
          description="Estojo espaçoso com divisórias internas organizadoras e material reflexivo de alta resistência."
          price={34.90}
          imageSrc="/produtos/estojo.png"
          destaque={false}
        />

        {/* Card 3: Canetas */}
        <CardProduto
          id={3}
          title="Kit Canetas Gel - 12 Cores"
          description="Escrita fluida com fluxo contínuo de tinta gel. Contém cores básicas, pastel e tons neon."
          price={45.00}
          imageSrc="/produtos/canetas.png"
          destaque={false}
        />

      </div>
    </div>
  )
}