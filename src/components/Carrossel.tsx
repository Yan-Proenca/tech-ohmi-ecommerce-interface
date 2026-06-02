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

// Caminhos absolutos apontando para public/carrossel/
const carrosselImagens = [
  { src: "/carrossel/inicio.png", alt: "Imagem 1" },
  { src: "/carrossel/produtos.png", alt: "Imagem 2" }
]

export default function Carrossel() {
  // 1. Instanciação estável do plugin de Autoplay
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  )

  return (
    <section className="w-full flex justify-center">
        {/* 2. Associação do plugin e eventos de controle por hover */}
        <Carousel
          plugins={[plugin.current]} 
          className="w-full relative"
          onMouseEnter={() => plugin.current.stop()}
          onMouseLeave={() => plugin.current.reset()}
        >
            <CarouselContent>
                {carrosselImagens.map((imagem, index) => (
                    <CarouselItem key={index}>
                        <div className="relative w-full h-[300px] md:h-[550px] overflow-hidden">
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
            <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-slate-800 border-slate-200"/>
            <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-slate-800 border-slate-200"/>
        </Carousel>
    </section>
  )
}