import { Sinal } from "../types/sinais";

export const sinais: Sinal[] = [
    {
    id: "B1",
    name: "Cedência de passagem",
    description:
      "Indicação de que o condutor deve ceder passagem a todos os veículos que transitem na via de que se aproxima.",
    category: "Cedência de passagem",
    img: "/image/sinais/cedencia/B1.png",
    shape: "Triângulo",
    color: ["Vermelho", "Branco"],
  },
  {
    id: "B2",
    name: "Paragem obrigatória no cruzamento ou entroncamento",
    description:
      "Indicação de que o condutor é obrigado a parar antes de entrar no cruzamento ou entroncamento e ceder passagem a todos os veículos na via em que vai entrar.",
    category: "Cedência de passagem",
    img: "/image/sinais/cedencia/B2.png",
    shape: "Octógono",
    color: ["Vermelho", "Branco"],
  },
  {
    id: "B3",
    name: "Via com prioridade",
    description:
      "Indicação de que os condutores que circulam na via têm prioridade de passagem nos sucessivos cruzamentos e entroncamentos.",
    category: "Cedência de passagem",
    img: "/image/sinais/cedencia/B3.png",
    shape: "Quadrado (rodado 45°)",
    color: ["Amarelo", "Branco"],
  },
  {
    id: "B4",
    name: "Fim de via com prioridade",
    description:
      "Indicação de que a via deixa de ter prioridade a partir do local onde o sinal está colocado.",
    category: "Cedência de passagem",
    img: "/image/sinais/cedencia/B4.png",
    shape: "Quadrado (rodado 45°)",
    color: ["Amarelo", "Branco"],
  },
  {
    id: "B5",
    name: "Cedência de passagem nos estreitamentos da faixa de rodagem",
    description:
      "Indicação da obrigação de ceder passagem aos veículos que circulam em sentido contrário em vias estreitas.",
    category: "Cedência de passagem",
    img: "/image/sinais/cedencia/B5.png",
    shape: "Circular",
    color: ["Vermelho", "Branco"],
  },

  {
    id: "B6",
    name: "Prioridade nos estreitamentos da faixa de rodagem",
    description:
      "Indicação de que o condutor tem prioridade de passagem sobre os veículos em sentido contrário em vias estreitas.",
    category: "Cedência de passagem",
    img: "/image/sinais/cedencia/B6.png",
    shape: "Circular",
    color: ["Azul", "Branco"],
  },
  {
    id: "B7",
    name: "Aproximação de rotunda",
    description:
      "Indicação da proximidade de uma rotunda onde o trânsito se processa em sentido giratório.",
    category: "Cedência de passagem",
    img: "/image/sinais/cedencia/B7.png",
    shape: "Quadrado",
    color: ["Azul", "Branco"],
  },
  {
    id: "B8",
    name: "Cruzamento com via sem prioridade",
    description:
      "Indicação de cruzamento onde os condutores devem ceder passagem.",
    category: "Cedência de passagem",
    img: "/image/sinais/cedencia/B8.png",
    shape: "Quadrado",
    color: ["Amarelo", "Branco"],
  },

]