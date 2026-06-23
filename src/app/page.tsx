"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import CardProduto from "@/components/CardProduto"
import Carrossel from "@/components/Carrossel"
import produtosData from "../../produtos.json" // Ajuste o caminho relativo se necessário

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

export default function HomePage() {
  const [busca, setBusca] = useState("")

  // Filtra dinamicamente os produtos que estão em destaque E que correspondem à busca
  const produtosDestaqueFiltrados = useMemo(() => {
    // 1) Filtra apenas os produtos marcados como destaque
    let resultado = produtos.filter((p) => p.destaque)

    // 2) Aplica o filtro de texto da barra de pesquisa (Título + Descrição)
    const termo = busca.trim().toLowerCase()
    if (termo) {
      resultado = resultado.filter(
        (p) =>
          p.title.toLowerCase().includes(termo) ||
          p.description.toLowerCase().includes(termo)
      )
    }

    return resultado
  }, [busca])

  return (
    <div className="w-full min-h-screen bg-zinc-50 text-zinc-800 antialiased">
      
      {/* 1. Header / Cabeçalho */}
      <header className="bg-white border-b border-zinc-200 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left md:flex md:items-center md:justify-between">
          <div className="max-w-2xl">
            <span className="text-xs font-bold tracking-widest uppercase text-indigo-600">Automação Residencial</span>
            <h1 className="text-3xl md:text-4xl font-black text-zinc-900 tracking-tight mt-1">
              Sua Casa Inteligente
            </h1>
            <p className="text-zinc-500 mt-2 text-base md:text-lg">
              Explore o futuro do conforto e da segurança com as nossas soluções tecnológicas em destaque.
            </p>
          </div>
        </div>
      </header>

      {/* 2. Carrossel (Visível apenas em telas grandes conforme o componente original) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <Carrossel />
      </div>

      {/* 3. Barra de Pesquisa */}
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
            placeholder="Buscar nos produtos em destaque..."
            className="w-full bg-white border border-zinc-200 rounded-xl pl-11 pr-4 py-3 text-sm text-zinc-700 placeholder:text-zinc-400 outline-none focus:ring-2 focus:ring-indigo-500 transition-all shadow-sm"
          />
        </div>
      </div>

      {/* Seção de Conteúdo Principal */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Título da seção de Destaques */}
        <div className="mb-8">
          <h2 className="text-xl md:text-2xl font-bold text-zinc-900 tracking-tight">
            Produtos em Destaque
          </h2>
          <p className="text-sm text-zinc-500">Nossas melhores seleções para o seu ecossistema inteligente.</p>
        </div>

        {/* 4. Grid de Produtos em Destaque ou Estado Vazio */}
        {produtosDestaqueFiltrados.length === 0 ? (
          <div className="flex flex-col items-center justify-center text-center py-16 bg-white rounded-2xl border border-zinc-200 shadow-sm">
            <div className="p-4 bg-zinc-100 rounded-full text-zinc-400 mb-4">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
            </div>
            <h3 className="font-bold text-zinc-900 text-lg">Nenhum destaque encontrado</h3>
            <p className="text-zinc-500 text-sm mt-1 max-w-sm">
              Tente redefinir o termo digitado ou confira nosso catálogo completo.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {produtosDestaqueFiltrados.map((produto) => (
              <div
                key={produto.id}
                className="relative rounded-2xl bg-white ring-2 ring-indigo-500/20 shadow-md hover:shadow-xl transition-all duration-300"
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

        {/* 5. Bloco de Catálogo direcionando para /produtos */}
        <div className="mt-16 bg-gradient-to-r from-zinc-900 to-indigo-950 rounded-3xl p-8 md:p-12 shadow-lg text-white flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-xl text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-black tracking-tight">
              Não encontrou o que procurava?
            </h3>
            <p className="text-zinc-300 mt-2 text-sm md:text-base">
              Explore nossa linha completa de automação residencial. Temos um catálogo inteiro segmentado por categorias para transformar todos os cômodos da sua casa.
            </p>
          </div>
          <div className="w-full md:w-auto flex justify-center">
            <Link
              href="/produtos"
              className="inline-flex items-center justify-center bg-white text-zinc-900 hover:bg-indigo-50 font-bold text-sm px-8 py-4 rounded-xl shadow-md transition-all active:scale-95 whitespace-nowrap"
            >
              Ver Catálogo Completo
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>

      </main>
    </div>
  )
}