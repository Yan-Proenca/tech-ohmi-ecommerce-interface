import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full bg-white border-b border-slate-200 py-4 px-6">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo / Home */}
        <Link href="/" className="font-bold text-xl text-slate-800">
          Minha Loja Smart
        </Link>

        {/* Menu de Navegação */}
        <nav className="flex gap-6">
          <Link href="/" className="text-slate-600 hover:text-slate-900 transition-colors">
            Início
          </Link>
          <Link href="/produtos" className="text-slate-600 hover:text-slate-900 transition-colors font-medium">
            Produtos
          </Link>
          <Link href="/contato" className="text-slate-600 hover:text-slate-900 transition-colors">
            Contato
          </Link>
        </nav>
      </div>
    </header>
  )
}