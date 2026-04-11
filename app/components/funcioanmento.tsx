export default function Funcionamento() {
  return (
    <div className="flex items-center justify-center bg-gradient-to-b from-white to-zinc-100 dark:from-zinc-900 dark:to-zinc-950 px-6 py-16 w-full">
      
      <div className="max-w-5xl w-full text-center">

        {/* Header */}
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-zinc-900 dark:text-white">
          Como Funciona?
        </h2>

        <p className="text-base md:text-lg text-zinc-600 dark:text-zinc-300 max-w-3xl mx-auto mb-10">
          Nossa API fornece acesso a um catálogo completo de sinais de trânsito utilizados nos países membros da SADC.
          Você pode consultar informações detalhadas como descrição, significado e imagem de cada sinal.
        </p>

        {/* Subtitulo */}
        <h3 className="text-2xl font-semibold mb-8 text-zinc-800 dark:text-zinc-200">
          Três formas de utilizar a sinalização SADC no seu dia a dia
        </h3>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <div className="bg-white dark:bg-zinc-900 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all border border-zinc-200 dark:border-zinc-800 hover:translate-y-0.5">
            <div className="text-blue-600 font-bold text-lg mb-2">01</div>
            <h4 className="text-xl font-semibold mb-2 text-zinc-900 dark:text-white">
              Consulta de Sinais
            </h4>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm">
              Faça requisições para obter informações detalhadas sobre cada sinal de trânsito, incluindo descrição, significado e imagem.
            </p>
          </div>

          <div className="bg-white dark:bg-zinc-900 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all border border-zinc-200 dark:border-zinc-800 hover:translate-y-0.5">
            <div className="text-blue-600 font-bold text-lg mb-2">02</div>
            <h4 className="text-xl font-semibold mb-2 text-zinc-900 dark:text-white">
              Integração em Projetos
            </h4>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm">
              Integre a API em seus projetos web ou mobile para fornecer dados atualizados sobre sinalização rodoviária.
            </p>
          </div>

          <div className="bg-white dark:bg-zinc-900 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all border border-zinc-200 dark:border-zinc-800 hover:translate-y-0.5">
            <div className="text-blue-600 font-bold text-lg mb-2">03</div>
            <h4 className="text-xl font-semibold mb-2 text-zinc-900 dark:text-white">
              Teste seus Conhecimentos
            </h4>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm">
              Crie quizzes interativos usando a API e teste o conhecimento sobre sinais de trânsito da SADC.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}