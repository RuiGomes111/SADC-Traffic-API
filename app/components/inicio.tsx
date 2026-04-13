import { BsLightningCharge } from "react-icons/bs";
import { IoBookOutline, IoGameControllerOutline } from "react-icons/io5";
import { FaCode } from "react-icons/fa6";


import Link from "next/link";

export default function Inicio() {
  return (
    
    <div className=" flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black w-full min-h-screen overflow-hidden pt-20 ">
      
      <div className="relative z-10 flex flex-col items-center text-center px-6">
        
        <span className="text-sm font-medium flex items-center gap-2 bg-zinc-200/80 dark:bg-zinc-800 text-gray-800 dark:text-zinc-200 rounded-full px-4 py-1.5 mb-8 backdrop-blur-sm border border-zinc-300 dark:border-zinc-700 shadow-sm">
          <BsLightningCharge className="text-yellow-500 animate-pulse" /> API Oficial SADC Traffic v1.0
        </span>

        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-zinc-900 dark:text-zinc-100 mb-6 tracking-tight max-w-4xl">
          Sinais de Trânsito <span className="text-blue-600 dark:text-blue-500">SADC</span>
        </h1>

        
        <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 mb-10 max-w-2xl leading-relaxed">
          API completa com todos os sinais de trânsito da SADC. Explore o
          catálogo, integre nos seus projetos e teste os seus conhecimentos.
        </p>
        
        
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4">
          <Link 
            href="#sinais" 
            className="flex items-center justify-center bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-100 border border-zinc-200 dark:border-zinc-800 px-8 py-3.5 rounded-2xl font-bold transition-all hover:bg-zinc-50 dark:hover:bg-zinc-800 shadow-sm hover:shadow-md hover:-translate-y-0.5"
          >
            <IoBookOutline className="mr-2 text-xl" />
            Explorar Sinais
          </Link>

          <Link 
            href="#quiz" 
            className="flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-2xl font-bold transition-all shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 hover:-translate-y-0.5"
          >
            <IoGameControllerOutline className="mr-2 text-xl" />
            Quiz Interativo
          </Link>

          <Link 
            href="/api" 
            className="flex items-center justify-center bg-zinc-100 dark:bg-zinc-800/50 text-zinc-800 dark:text-zinc-200 border border-transparent hover:border-zinc-300 dark:hover:border-zinc-700 px-8 py-3.5 rounded-2xl font-bold transition-all hover:-translate-y-0.5"
          >
            <FaCode className="mr-2 text-xl" />
            Ver API
          </Link>
        </div>
      </div>
    </div>
  );
}
