import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";


const categorias = [
    { id: 0, nome: "Todos", quantidade: 100 },
    { id: 1, nome: "Cedência", quantidade: 20 },
    { id: 2, nome: "Informação", quantidade: 30 },
    { id: 3, nome: "Proibição", quantidade: 25 },
    { id: 4, nome: "Obrigação", quantidade: 15 },
    { id: 5, nome: "Perigo", quantidade: 10 },
    { id: 6, nome: "Prescrição Específica", quantidade: 5 }
];

export default function Sinais() {
  return (
    <div id="sinais" className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b dark:bg-black  w-full">
        <div className="flex flex-col">
            <h1 className="text-4xl font-bold text-center mb-8 text-blue-500">Sinais de Trânsito</h1>
            <p className="text-center  text-sm md:text-lg text-gray-600 dark:text-gray-300 mb-12">Explore os diferentes tipos de sinais de trânsito e suas categorias.</p>
        </div>
        
        <div className="w-full max-w-5xl mx-auto px-4">
  <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 gap-6">

    {categorias.map((cat, index) => {
      return (
        <Link
          href=""
          key={index}
          className="group flex items-center justify-between 
          p-5 rounded-2xl 
          bg-white dark:bg-zinc-900 
          border border-zinc-200 dark:border-zinc-800
          shadow-sm hover:shadow-xl
          transition-all duration-300
          hover:-translate-y-1"
        >
          {/* Texto */}
          <div>
            <h4 className="text-sm md:text-lg  font-semibold text-zinc-800 dark:text-white group-hover:text-blue-600 transition">
              {cat.nome}
            </h4>

            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              ({cat.quantidade}) sinais disponíveis
            </p>
          </div>

          {/* Icon */}
          <FaArrowRight
            className="text-zinc-400 group-hover:text-blue-600 
            group-hover:translate-x-1 transition-all duration-300"
          />
        </Link>
      );
    })}

  </div>
</div>
    </div>
  );
}