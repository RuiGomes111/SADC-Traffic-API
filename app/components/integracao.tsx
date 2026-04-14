"use client";

export default function ExemplosIntegracaoGrid() {
  return (
    <div className="bg-gradient-to-b from-white to-zinc-100 dark:from-zinc-900 dark:to-zinc-950 px-6 py-16 w-full">
      <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6 text-center">
        Exemplos de Integração
      </h2>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* JAVASCRIPT */}
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-5">
          <h2 className="text-lg font-bold text-zinc-900 dark:text-white mb-3">
            JavaScript
          </h2>

          <pre className="bg-zinc-950 text-green-400 text-xs p-4 rounded-xl overflow-x-auto">
            {`fetch("/api/sinais")
  .then(res => res.json())
  .then(data => console.log(data));`}
          </pre>
        </div>

        {/* TYPESCRIPT / REACT */}
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-5">
          <h2 className="text-lg font-bold text-zinc-900 dark:text-white mb-3">
            React / TypeScript
          </h2>

          <pre className="bg-zinc-950 text-blue-300 text-xs p-4 rounded-xl overflow-x-auto">
            {`type Sinal = {
  id: string;
  name: string;
  description: string;
  category: string;
  img: string;
  shape: string;
  color: string[];
};

async function getSinais() {
  const res = await fetch("/api/sinais");
  return res.json();
}`}
          </pre>
        </div>

        {/* PYTHON */}
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-5">
          <h2 className="text-lg font-bold text-zinc-900 dark:text-white mb-3">
            Python
          </h2>

          <pre className="bg-zinc-950 text-yellow-300 text-xs p-4 rounded-xl overflow-x-auto">
            {`import requests

res = requests.get("http://localhost:3000/api/sinais")
data = res.json()

print(data)`}
          </pre>
        </div>

        {/* MODELO DE DADOS */}
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-5">
          <h2 className="text-lg font-bold text-zinc-900 dark:text-white mb-3">
            Modelo de Dados
          </h2>

          <pre className="bg-zinc-950 text-zinc-300 text-xs p-4 rounded-xl overflow-x-auto">
            {`type Sinal = {
  id: string;
  name: string;
  description: string;
  category: "Perigo" | "Obrigação" | "Proibição" | "Informação" | "Zona";
  img: string;
  shape: "Triângulo" | "Circular" | "Quadrado" | "Retangular";
  color: string[];
};`}
          </pre>
        </div>
      </div>
    </div>
  );
}
