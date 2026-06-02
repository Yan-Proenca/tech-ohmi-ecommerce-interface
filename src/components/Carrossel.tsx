"use client"

import Image from "next/image"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const carrosselImagens = [
  { src: "/carrossel/1.png", alt: "banner1" },
  { src: "/carrossel/2.png", alt: "banner2" },
]

export default function Carrossel() {
  return (
    <section className="w-full">
      <Carousel className="w-full relative">
        <CarouselContent>
          {carrosselImagens.map((imagem, index) => (
            <CarouselItem key={index}>
              <div className="relative w-full h-[380px] md:h-[520px] lg:h-[600px] overflow-hidden">
                <Image
                  src={imagem.src}
                  alt={imagem.alt}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/70 via-transparent to-transparent" />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-[#E5B842] text-white hover:text-black border-white/10 hover:border-[#E5B842] transition-all duration-300" />
        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-[#E5B842] text-white hover:text-black border-white/10 hover:border-[#E5B842] transition-all duration-300" />
      </Carousel>
    </section>
  )
}
