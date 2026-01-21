export function About() {
  return (
    <section id="about" className="py-24 bg-[#0B1120]">
      <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* Lado da Imagem */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-blue-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
          <div className="relative bg-slate-900 rounded-2xl overflow-hidden border border-slate-800">
            <img
              src="https://res.cloudinary.com/duglne48p/image/upload/v1768936211/Tiago_Img_hwoz1r.jpg"
              alt="Minha foto"
              className="w-full h-auto duration-700 scale-110 group-hover:scale-100"
            />
          </div>
        </div>

        {/* Lado do Texto */}
        <div>
          <p className="text-blue-500 font-mono text-sm tracking-widest uppercase mb-2">Quem eu sou</p>
          <h2 className="text-4xl font-black text-white uppercase tracking-tighter mb-8">Sobre Mim</h2>

          <div className="space-y-6 text-slate-400 leading-relaxed text-lg">
            <p>
              Sempre tive interesse em entender o que acontece por trás de uma aplicação. 
              Como desenvolvedor focado em <span className="text-blue-500 font-semibold italic">Backend</span>, não vejo 
              apenas linhas de código, mas sim a lógica e a estrutura que sustentam sistemas resilientes e confiáveis.
            </p>
            
            <p>
              Para mim, o desenvolvimento se estende para além do código e alcança o ambiente onde a aplicação vive. 
              Por isso, me aprofundei no ecossistema da <span className="text-blue-500 font-semibold italic">Microsoft Azure</span>, 
              conquistando a certificação <span className="text-blue-500 font-semibold italic">Fundamentals</span>. 
              Ter essa visão de infraestrutura me permite projetar arquiteturas que não apenas rodam, mas escalam com inteligência na nuvem.
            </p>

            <p>
              Sou entusiasta da <span className="text-blue-500 font-semibold italic">Automação</span>. Gosto de criar fluxos inteligentes que eliminam trabalhos repetitivos 
              para entregar alta performance. Minha paixão é desenvolver soluções tecnicamente eficazes, focando 
              sempre em resolver problemas reais através de processos otimizados e resultados sólidos.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}