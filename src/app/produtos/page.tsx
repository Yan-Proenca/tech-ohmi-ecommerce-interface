"use client"

import { useMemo, useState } from "react"
import CardProduto from "@/components/CardProduto"
import produtosData from "../../../produtos.json"

// ─────────────────────────────────────────────────────────────────────────
// Tipagem do produto
// OBS: assumi que o campo de categoria no produtos.json se chama "categoria".
// Se o nome real for diferente (ex: "category"), ajuste aqui e nos usos abaixo.
// ─────────────────────────────────────────────────────────────────────────
interface Produto {
  id: string | number
  title: string
  description: string
  price: number
  imageSrc: string
  destaque?: boolean
  categoria: string
}

const produtos = produtosData as Produto[]

type Ordenacao = "relevantes" | "menor-preco" | "maior-preco" | "destaques"

export default function ProdutosPage() {
  const [busca, setBusca] = useState("")
  const [categoriaAtiva, setCategoriaAtiva] = useState<string>("Todos")
  const [ordenacao, setOrdenacao] = useState<Ordenacao>("relevantes")

  // Extrai dinamicamente as categorias únicas existentes no JSON
  const categorias = useMemo(() => {
    const unicas = Array.from(new Set(produtos.map((p) => p.categoria)))
    return ["Todos", ...unicas]
  }, [])

  // Pipeline de busca + filtro + ordenação, recalculado apenas quando algo muda
  const produtosFiltrados = useMemo(() => {
    let resultado = [...produtos]

    // 1) Filtro por categoria
    if (categoriaAtiva !== "Todos") {
      resultado = resultado.filter((p) => p.categoria === categoriaAtiva)
    }

    // 2) Filtro por texto (título + descrição, case-insensitive)
    const termo = busca.trim().toLowerCase()
    if (termo) {
      resultado = resultado.filter(
        (p) =>
          p.title.toLowerCase().includes(termo) ||
          p.description.toLowerCase().includes(termo)
      )
    }

    // 3) Ordenação
    switch (ordenacao) {
      case "menor-preco":
        resultado.sort((a, b) => a.price - b.price)
        break
      case "maior-preco":
        resultado.sort((a, b) => b.price - a.price)
        break
      case "destaques":
        // Mostra apenas os itens marcados como destaque
        resultado = resultado.filter((p) => p.destaque)
        break
      case "relevantes":
      default:
        // Mantém a ordem original do JSON, priorizando itens em destaque
        // (Array.prototype.sort é estável, então a ordem relativa dentro
        // de cada grupo — destaque/não destaque — é preservada)
        resultado.sort((a, b) => (b.destaque ? 1 : 0) - (a.destaque ? 1 : 0))
        break
    }

    return resultado
  }, [busca, categoriaAtiva, ordenacao])

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

          {/* Contador dinâmico de itens (reflete os filtros aplicados) */}
          <div className="mt-4 md:mt-0 inline-flex items-center bg-zinc-100 text-zinc-600 px-4 py-2 rounded-full text-xs font-semibold">
            {produtosFiltrados.length}{" "}
            {produtosFiltrados.length === 1 ? "produto encontrado" : "produtos encontrados"}
          </div>
        </div>
      </div>

      {/* Barra de Pesquisa */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <div className="relative">
          <svg
            className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
          <input
            type="text"
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
            placeholder="Buscar por nome ou descrição do produto..."
            className="w-full bg-white border border-zinc-200 rounded-xl pl-11 pr-4 py-3 text-sm text-zinc-700 placeholder:text-zinc-400 outline-none focus:ring-2 focus:ring-indigo-500 transition-all shadow-sm"
          />
        </div>
      </div>

      {/* Barra de Ferramentas / Filtros */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-zinc-200 pb-6">
          {/* Filtros por categoria (mapeados dinamicamente a partir do JSON) */}
          <div className="flex flex-wrap gap-2 overflow-x-auto pb-2 sm:pb-0 scrollbar-none">
            {categorias.map((categoria) => {
              const ativo = categoriaAtiva === categoria
              return (
                <button
                  key={categoria}
                  onClick={() => setCategoriaAtiva(categoria)}
                  className={`px-4 py-2 text-xs font-medium rounded-lg transition-all whitespace-nowrap ${
                    ativo
                      ? "bg-zinc-900 text-white shadow-sm"
                      : "bg-white border border-zinc-200 hover:border-zinc-300 text-zinc-600"
                  }`}
                >
                  {categoria}
                </button>
              )
            })}
          </div>

          {/* Ordenação */}
          <div className="flex items-center space-x-2 self-end sm:self-center">
            <label htmlFor="sort" className="text-xs font-medium text-zinc-500 whitespace-nowrap">Ordenar por:</label>
            <select
              id="sort"
              value={ordenacao}
              onChange={(e) => setOrdenacao(e.target.value as Ordenacao)}
              className="text-xs bg-white border border-zinc-200 rounded-lg px-3 py-2 text-zinc-700 font-medium outline-none focus:ring-2 focus:ring-indigo-500 transition-all cursor-pointer"
            >
              <option value="relevantes">Mais Relevantes</option>
              <option value="menor-preco">Menor Preço</option>
              <option value="maior-preco">Maior Preço</option>
              <option value="destaques">Destaques</option>
            </select>
          </div>
        </div>
      </div>

      {/* Grid de Produtos Principal */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        {produtosFiltrados.length === 0 ? (
          // Estado vazio: feedback amigável quando nenhum produto corresponde aos filtros
          <div className="flex flex-col items-center justify-center text-center py-20 bg-white rounded-2xl border border-zinc-200 shadow-sm">
            <div className="p-4 bg-zinc-100 rounded-full text-zinc-400 mb-4">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
            </div>
            <h3 className="font-bold text-zinc-900 text-lg">Nenhum produto encontrado</h3>
            <p className="text-zinc-500 text-sm mt-1 max-w-sm">
              Tente ajustar sua busca ou remover alguns filtros para ver mais resultados.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 md:gap-8">
            {produtosFiltrados.map((produto) => (
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
        )}
      </main>
    </div>
  )
}