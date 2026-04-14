"use client";

import { useState } from "react";
import { sinais } from "../data/sinais";


type CopiadoId = "url" | "json1" | "fields" | "json2" | null;

export default function Documentacao() {
   const [copiado, setCopiado] = useState<CopiadoId>(null);

  const copiar = (texto: string, id: Exclude<CopiadoId, null>) => {
    navigator.clipboard.writeText(texto);
    setCopiado(id);
    setTimeout(() => setCopiado(null), 2000);
  };

  //  resposta  baseada nos dados
  const respostaBase = {
    total: sinais.length,
    sinais: sinais.slice(0, 3),
  };

  const exemploFields = {
    total: sinais.length,
    sinais: sinais.slice(0, 2).map((s) => ({
      name: s.name,
      img: s.img,
    })),
  };

  return (
    <div id="api" className=" bg-gradient-to-b from-white to-zinc-100 dark:from-zinc-900 dark:to-zinc-950 px-6 py-16 w-full">
      <div className="max-w-5xl mx-auto space-y-10">

        {/* HEADER */}
        <div className="text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold text-zinc-900 dark:text-white">
            Documentação
          </h1>

          <p className="text-zinc-600 dark:text-zinc-300 mt-4 max-w-2xl mx-auto">
            Integre dados de sinalização rodoviária da SADC nos seus projectos
            de forma simples e eficiente.
          </p>
        </div>

        {/* BASE URL */}
        <div className="bg-zinc-900 text-white p-4 rounded-xl text-sm font-mono">
          https://sadc-traffic-api.vercel.app/
        </div>

        {/* ENDPOINT PRINCIPAL */}
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 shadow-sm">
          
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-zinc-800 dark:text-white">
              Listar todos os sinais
            </h3>

            <span className="text-xs font-bold px-3 py-1 rounded-full bg-green-100 text-green-600">
              GET
            </span>
          </div>

          {/* URL */}
          <div className="flex gap-3 mb-4">
            <div className="flex-1 bg-zinc-100 dark:bg-zinc-800 rounded-lg px-4 py-2 font-mono text-sm">
              /api/sinais
            </div>

            <button
              onClick={() => copiar("/api/sinais", "url")}
              className="text-xs px-3 py-2 rounded-md border hover:bg-zinc-200 dark:hover:bg-zinc-800"
            >
              {copiado === "url" ? "Copiado!" : "Copiar"}
            </button>
          </div>

          <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">
            Retorna todos os sinais disponíveis na API.
          </p>

          {/* JSON */}
          <div className="relative">
            <pre className="bg-zinc-950 border border-zinc-800 text-zinc-300 text-xs p-4 rounded-xl overflow-x-auto">
              <code>{JSON.stringify(respostaBase, null, 2)}</code>
            </pre>

            <button
              onClick={() =>
                copiar(JSON.stringify(respostaBase, null, 2), "json1")
              }
              className="absolute top-3 right-3 text-xs px-3 py-1 rounded-md bg-zinc-800 text-white"
            >
              {copiado === "json1" ? "Copiado!" : "Copiar JSON"}
            </button>
          </div>
        </div>

        {/* FILTRO FIELDS */}
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 shadow-sm">
          
          <h3 className="text-lg font-semibold text-zinc-800 dark:text-white mb-4">
            Filtrar campos da resposta
          </h3>

          <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">
            Use o parâmetro <code className="bg-zinc-200 dark:bg-zinc-800 px-1 rounded">fields</code> 
            para retornar apenas os campos desejados.
          </p>

          {/* URL */}
          <div className="flex gap-3 mb-4">
            <div className="flex-1 bg-zinc-100 dark:bg-zinc-800 rounded-lg px-4 py-2 font-mono text-sm">
              /api/sinais?fields=name,img
            </div>

            <button
              onClick={() =>
                copiar("/api/sinais?fields=name,img", "fields")
              }
              className="text-xs px-3 py-2 rounded-md border hover:bg-zinc-200 dark:hover:bg-zinc-800"
            >
              {copiado === "fields" ? "Copiado!" : "Copiar"}
            </button>
          </div>

          {/* JSON */}
          <div className="relative">
            <pre className="bg-zinc-950 border border-zinc-800 text-zinc-300 text-xs p-4 rounded-xl overflow-x-auto">
              <code>{JSON.stringify(exemploFields, null, 2)}</code>
            </pre>

            <button
              onClick={() =>
                copiar(JSON.stringify(exemploFields, null, 2), "json2")
              }
              className="absolute top-3 right-3 text-xs px-3 py-1 rounded-md bg-zinc-800 text-white"
            >
              {copiado === "json2" ? "Copiado!" : "Copiar JSON"}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}