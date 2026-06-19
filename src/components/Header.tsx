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
      {/* Container de Alinhamento Centralizado com preenchimento lateral responsivo unificado */}
      <div className="max-w-7xl mx-auto h-16 px-4 sm:px-6 lg:px-8 flex items-center justify-between">

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

        {/* Menu de Navegação Desktop */}
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

        {/* Botão de Menu Sanduíche */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-slate-600 hover:text-blue-600 transition-colors focus:outline-none"
          aria-label={isOpen ? "Fechar Menu" : "Abrir Menu"}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

      </div>

      {/* Menu de Navegação Mobile CORRIGIDO: mudou para flex-col, space-y-3 e z-50 absoluto */}
      {isOpen && (
        <nav className="md:hidden absolute top-16 left-0 w-full bg-white border-b border-slate-200 shadow-xl px-6 py-4 flex flex-col space-y-3 z-50">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="text-base font-medium text-slate-600 hover:text-blue-600 transition-colors py-2 border-b border-slate-50"
          >
            Home
          </Link>
          <Link
            href="/produtos"
            onClick={() => setIsOpen(false)}
            className="text-base font-medium text-slate-600 hover:text-blue-600 transition-colors py-2 border-b border-slate-50"
          >
            Produtos
          </Link>
          <Link
            href="/contato"
            onClick={() => setIsOpen(false)}
            className="text-base font-medium text-slate-600 hover:text-blue-600 transition-colors py-2"
          >
            Contato
          </Link>
        </nav>
      )}
    </header>
  )
}