import Carrossel from "@/components/Carrossel"
import CardProduto from "@/components/CardProduto"

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-slate-50 pb-12">
      {/* Carrossel de Banner no Topo */}
      <Carrossel /> 

      {/* Título da Seção */}
      <div className="text-center my-10">
        <h1 className="text-3xl font-extrabold text-slate-800 tracking-tight">
          Produtos em destaque
        </h1>
        <p className="text-slate-500 mt-2">
          Os materiais mais procurados e organizados para sua rotina
        </p>
      </div>

      {/* Grid Responsivo para os Cards:
          1 coluna no celular | 2 colunas no tablet | 3 colunas em telas grandes
      */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">

        {/* Card 1: Camera Inteligente */}
        <CardProduto
          id={1}
          title="Câmera Inteligente"
          description="Câmera com tecnologia de última geração. Ideal para capturar momentos especiais com qualidade impecável."
          price={99.90}
          imageSrc="/produtos/camera.png"
          destaque={true}
        />

        <CardProduto
          id={2}
          title="Roteador Inteligente"
          description="Roteador com tecnologia de última geração. Ideal para conectar todos os seus dispositivos com velocidade e confiabilidade."
          price={34.90}
          imageSrc="/produtos/roteador.png"
          destaque={false}
        />

        <CardProduto
          id={3}
          title="Maçaneta Inteligente"
          description="Maçaneta com tecnologia de última geração. Ideal para segurança e praticidade em portas modernas."
          price={99.90}
          imageSrc="/produtos/macaneta.png"
          destaque={false}
        />

      <CardProduto
          id={4}
          title="SmartTV 4K"
          description="Televisão com resolução 4K e tecnologia de última geração. Ideal para uma experiência de entretenimento imersiva."
          price={499.90}
          imageSrc="/produtos/smarttv.png"
          destaque={false}
        />

      <CardProduto
          id={5}
          title="Termostato Inteligente"
          description="Termostato com tecnologia de última geração. Ideal para controle de temperatura e eficiência energética."
          price={199.90}
          imageSrc="/produtos/termostato.png"
          destaque={false}
        />

       <CardProduto
          id={6}
          title="Aspirador Robô"
          description="Aspirador robô com tecnologia de última geração. Ideal para limpeza automática e conveniência em sua casa."
          price={149.90}
          imageSrc="/produtos/aspirador.png"
          destaque={false}
        />

        </div>
  
    </div>
  )
}