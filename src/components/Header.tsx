"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"

export default function Header() {
  // Estado para controlar a abertura e fechamento do menu suspenso no celular
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="relative w-full bg-white border-b border-slate-200 z-50">
      {/* Container de Alinhamento Centralizado com preenchimento lateral responsivo */}
      <div className="max-w-7xl mx-auto h-16 px-4 sm:px-6 lg:px-36 flex items-center justify-between">

        {/* Bloco de Logotipo e Título */}
        <div className="flex items-center gap-3">
          <Image
            src="/logo/logo.png"
            alt="Logo da empresa"
            width={50}
            height={50}
            className="h-8 w-auto object-contain"
          />
          <h1 className="text-lg font-bold text-blue-600">
            TechOhmi
          </h1>
        </div>

        {/* Menu de Navegação Desktop (Escondido no celular, visível a partir de telas 'md') */}
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">
            Home
          </Link>
          <Link href="/produtos" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">
            Produtos
          </Link>
          <Link href="/contato" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">
            Contato
          </Link>
        </nav>

        {/* Botão de Menu Sanduíche (Visível apenas em telas menores que 'md') */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-slate-600 hover:text-blue-600 transition-colors focus:outline-none"
          aria-label={isOpen ? "Fechar Menu" : "Abrir Menu"}
        >
          {/* Altera o ícone dinamicamente com base no estado 'isOpen' */}
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

      </div>

      {/* Menu de Navegação Mobile (Exibido de forma suspensa quando isOpen for verdadeiro) */}
      {isOpen && (
        <nav className="md:hidden absolute top-16 left-0 w-full bg-white border-b border-slate-200 shadow-lg px-6 py-4 flex flex-row space-x-4 z-40">
          <Link
            href="/"
            onClick={() => setIsOpen(false)} // Fecha o menu ao clicar no link
            className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
          >
            Home
          </Link>
          <Link
            href="/produtos"
            onClick={() => setIsOpen(false)}
            className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
          >
            Produtos
          </Link>
          <Link
            href="/contato"
            onClick={() => setIsOpen(false)}
            className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
          >
            Contato
          </Link>
        </nav>
      )}
    </header>
  )
}