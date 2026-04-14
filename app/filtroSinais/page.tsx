import {sinais }from"../data/sinais";

export default function FiltroSinais() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-gradient-to-b from-white to-zinc-100 dark:from-zinc-900 dark:to-zinc-950 px-6 py-16 w-full mt-10">
        <h2 className="font-bold text-2xl mb-6">Lista de Sinais por Categoria</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 w-full max-w-5xl">

            {sinais.map((sinal, index) => {
              
                return (
                    <div key={index} className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-4 flex flex-col items-center gap-3">
                        
                        <img src={sinal.img} alt={sinal.name} className="w-16 h-16 object-contain" />
                        <h3 className="text-sm font-bold text-zinc-900 dark:text-white">{sinal.category}</h3>
                        <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">{sinal.name}</h3>
                        <p className="text-xs text-zinc-500 dark:text-zinc-400 text-center">{sinal.description}</p>
                    </div>
                );
            })}
                

        </div>
      
    </div>
    );}