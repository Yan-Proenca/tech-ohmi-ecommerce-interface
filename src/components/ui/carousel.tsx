"use client"

import Image from "next/image"


import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const carroselImages = [
  {src:"carrosel/1.png", alt:"Banner horizontal da loja virtual Sensata nas cores preto e amarelo dourado. À esquerda, destaca-se o nome 'SENSATA' e o subtítulo 'LIVROS DE FILOSOFIA, CULTURA E CRÍTICA'. À direita, há uma ilustração estilizada de uma estante com livros, a estátua de O Pensador e um botão amarelo onde se lê 'VISITE NOSSA LOJA ONLINE'."},
  {src:"carrosel/2.png", alt:"Banner horizontal da loja virtual Sensata nas cores preto e amarelo dourado. À esquerda, destaca-se o nome 'SENSATA' e o subtítulo 'LIVROS DE FILOSOFIA, CULTURA E CRÍTICA'. À direita, há uma ilustração estilizada de uma estante com livros, a estátua de O Pensador e um botão amarelo onde se lê 'VISITE NOSSA LOJA ONLINE'."},
  {src:"carrosel/3.png", alt:"Banner horizontal da loja virtual Sensata nas cores preto e amarelo dourado. À esquerda, destaca-se o nome 'SENSATA' e o subtítulo 'LIVROS DE FILOSOFIA, CULTURA E CRÍTICA'. À direita, há uma ilustração estilizada de uma estante com livros, a estátua de O Pensador e um botão amarelo onde se lê 'VISITE NOSSA LOJA ONLINE'."}]

export function BannerCarousel() {
  return (
    <Carousel className="w-full max-w-[12rem] sm:max-w-xs">
      <CarouselContent>
        {carroselImages.map((image, index) => ( 
          <CarouselItem key={index} className="relative w-full">
            <div className="relative h-64 w-full">
              <Image
              src={image.src}
              alt={image.alt} 
              fill className="object-cover" />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
