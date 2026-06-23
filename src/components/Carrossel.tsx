"use client"

import Image from "next/image"
import React from "react"
import Autoplay from "embla-carousel-autoplay"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const carrosselImagens = [
  { src: "/carrossel/home.png", alt: "Inicio" },
  { src: "/carrossel/products.png", alt: "Produtos" }
]

export default function Carrossel() {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  )

  return (
    /* Correção/Garantia: 'hidden' para mobile/tablet e 'lg:block' ou 'lg:flex' para desktop.
      Certifique-se de que o container tenha largura total disponível.
    */
    <section className="hidden lg:block w-full max-w-full overflow-hidden mb-6">
      <Carousel
        plugins={[plugin.current]}
        className="w-full relative"
        onMouseEnter={() => plugin.current.stop()}
        onMouseLeave={() => plugin.current.reset()}
      >
        <CarouselContent>
          {carrosselImagens.map((imagem, index) => (
            <CarouselItem key={index}>
              {/* Ajustado h-[450px] estrito para garantir renderização correta em telas largas */}
              <div className="relative w-full h-[300px] md:h-[450px] overflow-hidden rounded-2xl shadow-sm">
                <Image
                  src={imagem.src}
                  alt={imagem.alt}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-slate-800 border-slate-200" />
        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-slate-800 border-slate-200" />
      </Carousel>
    </section>
  )
}