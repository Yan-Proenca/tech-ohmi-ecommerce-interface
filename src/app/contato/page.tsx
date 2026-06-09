"use client"

import React from "react"
import dynamic from "next/dynamic"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin, Send, ArrowRight } from "lucide-react"

// Importação Dinâmica de MapaContato com SSR desabilitado (ssr: false)
const MapaContato = dynamic(() => import("@/components/MapaContato"), {
  ssr: false,
  loading: () => (
    <div className="h-[300px] w-full bg-blue-50/50 border border-blue-100 flex items-center justify-center text-blue-500 font-medium animate-pulse rounded-xl">
      <div className="flex items-center space-x-2">
        <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
        <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
        <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"></div>
        <span className="text-sm pl-1 text-blue-700/80">Carregando mapa tecnológico...</span>
      </div>
    </div>
  ),
})

export default function Contato() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    alert("Mensagem enviada com sucesso! Entraremos em contato em breve.")
  }

  return (
    <div className="w-full min-h-screen bg-slate-50/60 text-slate-800 antialiased relative overflow-hidden py-16 px-4 sm:px-6 lg:px-8">
      {/* Detalhes de luz de fundo para a estética Tech */}
      <div className="absolute top-0 right-0 -z-10 w-[400px] h-[400px] bg-blue-400/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 left-0 -z-10 w-[300px] h-[300px] bg-indigo-400/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Cabeçalho Principal */}
        <div className="text-center mb-14 space-y-3">
          <span className="text-xs font-bold tracking-widest uppercase px-3 py-1 bg-blue-50 text-blue-600 rounded-full border border-blue-200/60 inline-block">
            Contato e Suporte
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-blue-950 tracking-tight bg-gradient-to-r from-blue-950 to-blue-700 bg-clip-text text-transparent">
            Fale Conosco
          </h1>
          <p className="text-slate-500 max-w-2xl mx-auto text-base md:text-lg">
            Tem alguma dúvida, sugestão ou quer iniciar um projeto de automação? Nossa equipe especializada está pronta para responder você.
          </p>
        </div>

        {/* Grid Principal */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">

          {/* Coluna Esquerda: Informações e Mapa */}
          <div className="space-y-6 flex flex-col justify-between">

            {/* Canais de Atendimento */}
            <Card className="border-slate-200/80 shadow-md bg-white/80 backdrop-blur-md rounded-2xl flex-1">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl md:text-2xl font-bold text-blue-950 flex items-center gap-2">
                  Canais de Atendimento
                </CardTitle>
                <CardDescription className="text-slate-500 text-sm">
                  Entre em contato diretamente através dos nossos telefones, e-mail institucional ou redes oficiais.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">

                {/* Lista de Contatos */}
                <div className="space-y-4">

                  {/* E-mail */}
                  <div className="flex items-center space-x-4 p-3 rounded-xl border border-transparent hover:border-blue-100 hover:bg-blue-50/40 transition-all group duration-300">
                    <div className="p-3 bg-blue-50 text-blue-600 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-blue-600/80 uppercase tracking-wider">E-mail</p>
                      <p className="text-blue-950 font-semibold text-sm">contato@papelariarabisco.com.br</p>
                    </div>
                  </div>

                  {/* Telefones */}
                  <div className="flex items-center space-x-4 p-3 rounded-xl border border-transparent hover:border-blue-100 hover:bg-blue-50/40 transition-all group duration-300">
                    <div className="p-3 bg-blue-50 text-blue-600 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-blue-600/80 uppercase tracking-wider">Telefones</p>
                      <p className="text-blue-950 font-semibold text-sm">(11) 4002-8922 / (11) 99999-8888</p>
                    </div>
                  </div>

                  {/* Endereço Físico */}
                  <div className="flex items-center space-x-4 p-3 rounded-xl border border-transparent hover:border-blue-100 hover:bg-blue-50/40 transition-all group duration-300">
                    <div className="p-3 bg-blue-50 text-blue-600 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-blue-600/80 uppercase tracking-wider">Endereço</p>
                      <p className="text-blue-950 font-semibold text-sm">Av. Paulista, 1000 - Bela Vista, São Paulo - SP</p>
                    </div>
                  </div>

                </div>

                <div className="h-[1px] bg-gradient-to-r from-slate-100 via-slate-200 to-slate-100" />

                {/* Bloco de Redes Sociais */}
                <div className="pt-1">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Conecte-se Conosco</p>
                  <div className="flex space-x-3">

                    {/* Instagram */}
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-slate-50 border border-slate-200/60 rounded-xl hover:bg-blue-600 hover:text-white hover:border-blue-600 text-slate-600 transition-all duration-300 hover:scale-110 shadow-sm"
                    >
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                      </svg>
                    </a>

                    {/* Facebook */}
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-slate-50 border border-slate-200/60 rounded-xl hover:bg-blue-600 hover:text-white hover:border-blue-600 text-slate-600 transition-all duration-300 hover:scale-110 shadow-sm"
                    >
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                      </svg>
                    </a>

                    {/* Youtube */}
                    <a
                      href="https://youtube.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-slate-50 border border-slate-200/60 rounded-xl hover:bg-blue-600 hover:text-white hover:border-blue-600 text-slate-600 transition-all duration-300 hover:scale-110 shadow-sm"
                    >
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                        <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                      </svg>
                    </a>

                  </div>
                </div>

              </CardContent>
            </Card>

            {/* Bloco do Mapa com Leaflet Integrado */}
            <Card className="overflow-hidden h-[280px] border border-slate-200/80 shadow-md relative z-10 rounded-2xl group">
              <CardContent className="p-0 h-full w-full relative transition-all duration-300 group-hover:shadow-inner">
                <MapaContato />
              </CardContent>
            </Card>

          </div>

          {/* Coluna Direita: Formulário de Envio */}
          <div className="h-full">
            <Card className="border-slate-200/80 shadow-md bg-white rounded-2xl h-full flex flex-col justify-between">
              <div>
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl md:text-2xl font-bold text-blue-950">
                    Envie uma Mensagem
                  </CardTitle>
                  <CardDescription className="text-slate-500 text-sm">
                    Preencha o formulário abaixo e retornaremos o contato em até 24 horas úteis.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">

                    {/* Campo Nome */}
                    <div className="space-y-1.5">
                      <Label htmlFor="nome" className="text-xs font-bold uppercase tracking-wider text-slate-500">Nome Completo</Label>
                      <Input 
                        id="nome" 
                        placeholder="Digite seu nome completo" 
                        className="rounded-xl border-slate-200 focus-visible:ring-blue-600 focus-visible:border-blue-600 bg-slate-50/50 py-5 transition-all" 
                        required 
                      />
                    </div>

                    {/* Campo E-mail */}
                    <div className="space-y-1.5">
                      <Label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-slate-500">E-mail Corporativo</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="seuemail@exemplo.com.br" 
                        className="rounded-xl border-slate-200 focus-visible:ring-blue-600 focus-visible:border-blue-600 bg-slate-50/50 py-5 transition-all" 
                        required 
                      />
                    </div>

                    {/* Campo Assunto */}
                    <div className="space-y-1.5">
                      <Label htmlFor="assunto" className="text-xs font-bold uppercase tracking-wider text-slate-500">Assunto</Label>
                      <Input 
                        id="assunto" 
                        placeholder="Ex: Suporte técnico, orçamentos, parcerias" 
                        className="rounded-xl border-slate-200 focus-visible:ring-blue-600 focus-visible:border-blue-600 bg-slate-50/50 py-5 transition-all" 
                        required 
                      />
                    </div>

                    {/* Campo Mensagem */}
                    <div className="space-y-1.5">
                      <Label htmlFor="mensagem" className="text-xs font-bold uppercase tracking-wider text-slate-500">Mensagem</Label>
                      <Textarea
                        id="mensagem"
                        placeholder="Descreva detalhadamente sua solicitação comercial ou dúvida..."
                        className="min-h-[140px] resize-none rounded-xl border-slate-200 focus-visible:ring-blue-600 focus-visible:border-blue-600 bg-slate-50/50 p-4 transition-all"
                        required
                      />
                    </div>

                    {/* Botão de Envio Customizado com Ícone */}
                    <div className="pt-2">
                      <Button 
                        type="submit" 
                        className="w-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold py-5 rounded-xl shadow-md shadow-blue-100 hover:shadow-lg transition-all group flex items-center justify-center space-x-2"
                      >
                        <span>Enviar Mensagem</span>
                        <Send className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5 duration-300" />
                      </Button>
                    </div>

                  </form>
                </CardContent>
              </div>
            </Card>
          </div>

        </div>
      </div>
    </div>
  )
}