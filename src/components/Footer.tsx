import Link from "next/link";
const legalLinks = [
  { href: "/privacidade", label: "Privacidade" },
  { href: "/termos", label: "Termos de Uso" },
  { href: "/trocas", label: "Trocas & Devoluções" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#080808] border-t border-white/5 px-4 md:px-16 lg:px-36 pt-10 pb-8">
      <div className="flex flex-col md:flex-row justify-between gap-8 pb-8 border-b border-white/5">

        <div className="flex flex-col gap-3 max-w-xs">
          <span
            className="text-base font-bold text-[#E5B842] tracking-wide"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Sensata
          </span>
          <p className="text-xs text-zinc-500 leading-relaxed">
            Curadoria de livros de filosofia, cultura e crítica para quem pensa com profundidade.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <p className="text-xs font-semibold uppercase tracking-widest text-zinc-600">Legal</p>
          <ul className="flex flex-col gap-2">
            {legalLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-xs text-zinc-500 hover:text-[#E5B842] transition-colors duration-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-3">
          <p className="text-xs font-semibold uppercase tracking-widest text-zinc-600">Redes</p>
        </div>
      </div>

      <div className="pt-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-zinc-600">
        <p>&copy; {currentYear} Tech Ohmi. Todos os direitos reservados.</p>
        <p className="text-zinc-700">Feito com carinho para você.</p>
      </div>
    </footer>
  );
}
