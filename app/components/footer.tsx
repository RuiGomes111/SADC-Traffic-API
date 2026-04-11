import Link from "next/link";
import { FaGithub, FaGamepad } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-zinc-200 dark:border-zinc-800  dark:bg-black">

      <div className="max-w-6xl mx-auto px-6 py-10">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <div>
            <h2 className="text-lg font-bold text-zinc-900 dark:text-white">
              SADC Traffic API
            </h2>

            <p className="text-sm text-zinc-500 mt-2">
              API de sinalização rodoviária da SADC para projetos web, mobile e jogos educativos.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-sm font-semibold text-zinc-800 dark:text-zinc-200 mb-3">
              Links úteis
            </h3>

            <ul className="space-y-2 text-sm text-zinc-500">
              <li>
                <Link href="/documentacao" className="hover:text-blue-600 transition">
                  Documentação da API
                </Link>
              </li>

              <li>
                <Link href="https://sinal-sadc.vercel.app/" target="_blank" className="hover:text-blue-600 transition">
                  Jogo educativo
                </Link>
              </li>

              <li>
                <Link href="/api/sinais" target="blanck" className="hover:text-blue-600 transition">
                  Endpoint principal
                </Link>
              </li>
            </ul>
          </div>

          {/* Social / Tech */}
          <div>
            <h3 className="text-sm font-semibold text-zinc-800 dark:text-zinc-200 mb-3">
              Projeto
            </h3>

            <div className="flex flex-col gap-3 text-sm text-zinc-500">

              <a
                href="https://github.com"
                target="_blank"
                className="flex items-center gap-2 hover:text-zinc-900 dark:hover:text-white transition"
              >
                <FaGithub />
                GitHub
              </a>

              <a
                href="https://sinal-sadc.vercel.app/"
                target="_blank"
                className="flex items-center gap-2 hover:text-zinc-900 dark:hover:text-white transition"
              >
                <FaGamepad />
                Jogo SADC
              </a>

              

            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-10 pt-6 border-t border-zinc-200 dark:border-zinc-800 flex flex-col md:flex-row justify-between items-center text-xs text-zinc-500">

          <p>
            © {new Date().getFullYear()}, Rui Gomes. Todos os direitos reservados.
          </p>        

        </div>

      </div>
    </footer>
  );
}