"use client" 

export default function Contato() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-800 flex items-center justify-center p-6 md:p-12">
      <div className="max-w-6xl w-full bg-white rounded-2xl shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-12">
        
        {/* COLUNA ESQUERDA: Informações e Links */}
        <div className="md:col-span-5 bg-indigo-900 p-8 md:p-12 text-white flex flex-col justify-between relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-indigo-800 rounded-full blur-2xl opacity-50"></div>
          
          <div className="space-y-6 relative z-10">
            <div>
              <span className="text-xs font-bold tracking-widest uppercase text-indigo-300">Fale Conosco</span>
              <h1 className="text-3xl md:text-4xl font-extrabold mt-1 tracking-tight">Vamos conversar?</h1>
            </div>
            <p className="text-indigo-200 text-sm leading-relaxed">
              Tem alguma dúvida, proposta ou quer apenas trocar uma ideia? Nossa equipe está pronta para te atender. Escreva ao lado ou use nossos canais.
            </p>
          </div>

          <div className="space-y-6 my-8 relative z-10">
            <div className="flex items-center space-x-4 group">
              <div className="p-3 bg-indigo-800/60 rounded-xl group-hover:bg-indigo-700/80 transition-colors">
                <svg className="w-5 h-5 text-indigo-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
              </div>
              <div>
                <p className="text-xs text-indigo-300 font-medium">Telefone</p>
                <p className="text-sm font-semibold text-white">+55 (15) 99914-3140</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 group">
              <div className="p-3 bg-indigo-800/60 rounded-xl group-hover:bg-indigo-700/80 transition-colors">
                <svg className="w-5 h-5 text-indigo-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </div>
              <div>
                <p className="text-xs text-indigo-300 font-medium">E-mail</p>
                <p className="text-sm font-semibold text-white">yan@algumacoisa.com.br</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 group">
              <div className="p-3 bg-indigo-800/60 rounded-xl group-hover:bg-indigo-700/80 transition-colors">
                <svg className="w-5 h-5 text-indigo-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
              </div>
              <div>
                <p className="text-xs text-indigo-300 font-medium">Localização</p>
                <p className="text-sm font-semibold text-white">Av. Missão, 414 - Itapeva/SP</p>
              </div>
            </div>
          </div>

          <div className="flex space-x-4 pt-4 border-t border-indigo-800 relative z-10">
            <span className="text-xs text-indigo-300 self-center">Siga-nos:</span>
            <div className="w-8 h-8 rounded-full bg-indigo-800 flex items-center justify-center text-xs font-bold cursor-pointer hover:bg-indigo-600 transition-colors">Ln</div>
            <div className="w-8 h-8 rounded-full bg-indigo-800 flex items-center justify-center text-xs font-bold cursor-pointer hover:bg-indigo-600 transition-colors">Gh</div>
            <div className="w-8 h-8 rounded-full bg-indigo-800 flex items-center justify-center text-xs font-bold cursor-pointer hover:bg-indigo-600 transition-colors">In</div>
          </div>
        </div>

        {/* COLUNA DIREITA: Formulário */}
        <div className="md:col-span-7 p-8 md:p-12 flex flex-col justify-center">
          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col space-y-1.5">
                <label htmlFor="name" className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">Nome Completo</label>
                <input 
                  type="text" 
                  id="name"
                  placeholder="Ex: João Silva" 
                  className="w-full px-4 py-3 border border-zinc-200 rounded-xl bg-zinc-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all text-sm placeholder:text-zinc-400"
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <label htmlFor="email" className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">E-mail Corporativo</label>
                <input 
                  type="email" 
                  id="email"
                  placeholder="joao@empresa.com" 
                  className="w-full px-4 py-3 border border-zinc-200 rounded-xl bg-zinc-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all text-sm placeholder:text-zinc-400"
                />
              </div>
            </div>

            <div className="flex flex-col space-y-1.5">
              <label htmlFor="subject" className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">Assunto</label>
              <input 
                type="text" 
                id="subject"
                placeholder="Qual o motivo do contato?" 
                className="w-full px-4 py-3 border border-zinc-200 rounded-xl bg-zinc-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all text-sm placeholder:text-zinc-400"
              />
            </div>

            <div className="flex flex-col space-y-1.5">
              <label htmlFor="message" className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">Sua Mensagem</label>
              <textarea 
                id="message"
                rows={4}
                placeholder="Conte-nos um pouco mais sobre o seu projeto ou dúvida..." 
                className="w-full px-4 py-3 border border-zinc-200 rounded-xl bg-zinc-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all text-sm placeholder:text-zinc-400 resize-none"
              ></textarea>
            </div>

            <div className="pt-2">
              <button 
                type="submit" 
                className="w-full sm:w-auto px-8 py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-sm rounded-xl shadow-md shadow-indigo-200 hover:shadow-lg transition-all transform active:scale-[0.98] flex items-center justify-center space-x-2"
              >
                <span>Enviar mensagem</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                </svg>
              </button>
            </div>
          </form>
        </div>

      </div>
    </div>
  )
}