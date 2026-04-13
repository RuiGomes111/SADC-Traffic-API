import Link from "next/link";
import { FaGamepad, FaExternalLinkAlt } from "react-icons/fa";

export default function ApiUseCase() {
  return (
    <div className="mt-12 dark:bg-black ">

      {/* Card principal */}
      <div className="dark:bg-black bg-gradient-to-r from-zinc-900 to-zinc-800 text-white rounded-2xl p-6 md:p-8 shadow-lg border border-zinc-700">

        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <FaGamepad className="text-2xl text-blue-400" />

          <h2 className="text-xl md:text-2xl font-bold">
            Este jogo também utiliza esta API
          </h2>
        </div>

        {/* Descrição */}
        <p className="text-zinc-300 text-sm md:text-base mb-6 max-w-2xl">
          O projeto <span className="text-white font-semibold">Sinal SADC Game</span> consome a mesma API de sinais de trânsito,
          garantindo dados centralizados, consistentes e sempre atualizados.
        </p>

        {/* Destaques */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">

          <div className="bg-zinc-800/60 p-4 rounded-xl border border-zinc-700">
            <h4 className="font-semibold text-white mb-1">🔗 API única</h4>
            <p className="text-sm text-zinc-400">
              Mesmo backend para documentação e jogo
            </p>
          </div>

          <div className="bg-zinc-800/60 p-4 rounded-xl border border-zinc-700">
            <h4 className="font-semibold text-white mb-1">⚡ Tempo real</h4>
            <p className="text-sm text-zinc-400">
              Dados atualizados automaticamente
            </p>
          </div>

          <div id="quiz" className="bg-zinc-800/60 p-4 rounded-xl border border-zinc-700">
            <h4 className="font-semibold text-white mb-1">🎮 Gamificação</h4>
            <p className="text-sm text-zinc-400">
              Aprender sinais jogando
            </p>
          </div>

        </div>

        {/* Link */}
        <Link
          href="https://sinal-sadc.vercel.app/"
          target="_blank"
          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 transition px-5 py-2 rounded-lg text-sm font-medium"
        >
          Abrir o jogo
          <FaExternalLinkAlt className="text-xs" />
        </Link>

      </div>
    </div>
  );
}