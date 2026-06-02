"use client"

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/produtos", label: "Catálogo" },
  { href: "/contato", label: "Contato" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full h-16 fixed top-0 left-0 z-50 bg-[#080808]/80 backdrop-blur-md border-b border-white/5">
      <div className="h-full px-4 md:px-16 lg:px-36 flex items-center justify-between">

        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-8 h-8 flex items-center justify-center">
            <Image
              src="/logo/logo.png"
              alt="Logo Sensata"
              width={32}
              height={32}
              className="object-contain"
            />
          </div>
          <span
            className="text-lg font-bold tracking-wide text-[#E5B842]"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Sensata
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative text-sm font-medium text-zinc-400 transition-colors duration-300 hover:text-[#E5B842] group"
            >
              {link.label}
              <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-[#E5B842] transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <button
          className="md:hidden text-zinc-400 hover:text-[#E5B842] transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[#0B0B0B]/95 backdrop-blur-md border-t border-white/5 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm font-medium text-zinc-400 hover:text-[#E5B842] transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
