import { Sinal } from "../types/sinais";

export const sinais: Sinal[] = [

  {
    id: "A2",
    name: "Lomba ou depressão",
    description: "Indica a existência de uma lomba ou depressão na via.",
    category: "Perigo",
    img: "/images/sinais/A2.png",
    shape: "Triângulo",
    color: ["Vermelho", "Branco"]
  },
  {
    id: "A3a",
    name: "Curva perigosa à direita",
    description: "Indica aproximação de uma curva perigosa para a direita.",
    category: "Perigo",
    img: "/images/sinais/A3a.png",
    shape: "Triângulo",
    color: ["Vermelho", "Branco"]
  },
  {
    id: "A3b",
    name: "Curva perigosa à esquerda",
    description: "Indica aproximação de uma curva perigosa para a esquerda.",
    category: "Perigo",
    img: "/images/sinais/A3b.png",
    shape: "Triângulo",
    color: ["Vermelho", "Branco"]
  },
  {
    id: "A4",
    name: "Curvas sucessivas",
    description: "Indica a existência de curvas sucessivas na via.",
    category: "Perigo",
    img: "/images/sinais/A4.png",
    shape: "Triângulo",
    color: ["Vermelho", "Branco"]
  },
  {
    id: "A5",
    name: "Descida acentuada",
    description: "Indica uma descida com inclinação acentuada.",
    category: "Perigo",
    img: "/images/sinais/A5.png",
    shape: "Triângulo",
    color: ["Vermelho", "Branco"]
  },
  {
    id: "A6",
    name: "Subida acentuada",
    description: "Indica uma subida com inclinação acentuada.",
    category: "Perigo",
    img: "/images/sinais/A6.png",
    shape: "Triângulo",
    color: ["Vermelho", "Branco"]
  },
  {
    id: "A7",
    name: "Estreitamento da via",
    description: "Indica que a faixa de rodagem se torna mais estreita.",
    category: "Perigo",
    img: "/images/sinais/A7.png",
    shape: "Triângulo",
    color: ["Vermelho", "Branco"]
  },
  {
    id: "A8",
    name: "Via com dois sentidos",
    description: "Indica o início de uma via com trânsito nos dois sentidos.",
    category: "Perigo",
    img: "/images/sinais/A8.png",
    shape: "Triângulo",
    color: ["Vermelho", "Branco"]
  },
  {
    id: "A9",
    name: "Semáforos à frente",
    description: "Indica a aproximação de sinalização luminosa (semáforos).",
    category: "Perigo",
    img: "/images/sinais/A9.png",
    shape: "Triângulo",
    color: ["Vermelho", "Branco"]
  },
  {
    id: "A10",
    name: "Passagem para peões",
    description: "Indica a proximidade de uma passagem para peões.",
    category: "Perigo",
    img: "/images/sinais/A10.png",
    shape: "Triângulo",
    color: ["Vermelho", "Branco"]
  },
  {
    id: "A11",
    name: "Crianças",
    description: "Indica zona frequentada por crianças (escolas, parques).",
    category: "Perigo",
    img: "/images/sinais/A11.png",
    shape: "Triângulo",
    color: ["Vermelho", "Branco"]
  },
  {
    id: "A12",
    name: "Ciclistas",
    description: "Indica a possível presença de ciclistas na via.",
    category: "Perigo",
    img: "/images/sinais/A12.png",
    shape: "Triângulo",
    color: ["Vermelho", "Branco"]
  },
  {
    id: "A13",
    name: "Animais domésticos",
    description: "Indica a possibilidade de animais domésticos na via.",
    category: "Perigo",
    img: "/images/sinais/A13.png",
    shape: "Triângulo",
    color: ["Vermelho", "Branco"]
  },
  {
    id: "A14",
    name: "Animais selvagens",
    description: "Indica a possível presença de animais selvagens na via.",
    category: "Perigo",
    img: "/images/sinais/A14.png",
    shape: "Triângulo",
    color: ["Vermelho", "Branco"]
  },
  {
    id: "A15",
    name: "Passagem de nível com barreiras",
    description: "Indica passagem de nível ferroviária com barreiras.",
    category: "Perigo",
    img: "/images/sinais/A15.png",
    shape: "Triângulo",
    color: ["Vermelho", "Branco"]
  },
  {
    id: "A16",
    name: "Passagem de nível sem barreiras",
    description: "Indica passagem de nível ferroviária sem barreiras.",
    category: "Perigo",
    img: "/images/sinais/A16.png",
    shape: "Triângulo",
    color: ["Vermelho", "Branco"]
  },
  {
    id: "A17",
    name: "Aviões a baixa altitude",
    description: "Indica proximidade de aeroporto com tráfego aéreo baixo.",
    category: "Perigo",
    img: "/images/sinais/A17.png",
    shape: "Triângulo",
    color: ["Vermelho", "Branco"]
  },
  {
    id: "A18",
    name: "Queda de pedras",
    description: "Indica risco de queda de pedras na via.",
    category: "Perigo",
    img: "/images/sinais/A18.png",
    shape: "Triângulo",
    color: ["Vermelho", "Branco"]
  },
  {
    id: "A19",
    name: "Vento lateral",
    description: "Indica a presença de vento forte lateral.",
    category: "Perigo",
    img: "/images/sinais/A19.png",
    shape: "Triângulo",
    color: ["Vermelho", "Branco"]
  },
  {
    id: "A20",
    name: "Outros perigos",
    description: "Indica perigo não especificado no local.",
    category: "Perigo",
    img: "/images/sinais/A20.png",
    shape: "Triângulo",
    color: ["Vermelho", "Branco"]
  },
  {
    id: "B1",
    name: "Cedência de passagem",
    description:
      "Indicação de que o condutor deve ceder passagem a todos os veículos que transitem na via de que se aproxima.",
    category: "Cedência de passagem",
    img: "/images/sinais/B1.png",
    shape: "Triângulo",
    color: ["Vermelho", "Branco"]
  },
  {
    id: "B2",
    name: "Paragem obrigatória no cruzamento ou entroncamento",
    description:
      "Indicação de que o condutor é obrigado a parar antes de entrar no cruzamento ou entroncamento e ceder passagem a todos os veículos na via em que vai entrar.",
    category: "Cedência de passagem",
    img: "/images/sinais/B2.png",
    shape: "Octógono",
    color: ["Vermelho", "Branco"]
  },
  {
    id: "B3",
    name: "Via com prioridade",
    description:
      "Indicação de que os condutores que circulam na via têm prioridade de passagem nos sucessivos cruzamentos e entroncamentos.",
    category: "Cedência de passagem",
    img: "/images/sinais/B3.png",
    shape: "Quadrado (rodado 45°)",
    color: ["Amarelo", "Branco"]
  },
  {
    id: "B4",
    name: "Fim de via com prioridade",
    description:
      "Indicação de que a via deixa de ter prioridade a partir do local onde o sinal está colocado.",
    category: "Cedência de passagem",
    img: "/images/sinais/B4.png",
    shape: "Quadrado (rodado 45°)",
    color: ["Amarelo", "Branco"]
  },
  {
    id: "B5",
    name: "Cedência de passagem nos estreitamentos da faixa de rodagem",
    description:
      "Indicação da obrigação de ceder passagem aos veículos que circulam em sentido contrário em vias estreitas.",
    category: "Cedência de passagem",
    img: "/images/sinais/B5.png",
    shape: "Circular",
    color: ["Vermelho", "Branco"]
  },
  
  {
    id: "B6",
    name: "Prioridade nos estreitamentos da faixa de rodagem",
    description:
      "Indicação de que o condutor tem prioridade de passagem sobre os veículos em sentido contrário em vias estreitas.",
    category: "Cedência de passagem",
    img: "/images/sinais/B6.png",
    shape: "Circular",
    color: ["Azul", "Branco"]
  },
  {
    id: "B7",
    name: "Aproximação de rotunda",
    description:
      "Indicação da proximidade de uma rotunda onde o trânsito se processa em sentido giratório.",
    category: "Cedência de passagem",
    img: "/images/sinais/B7.png",
    shape: "Quadrado",
    color: ["Azul", "Branco"]
  },
  {
    id: "B8",
    name: "Cruzamento com via sem prioridade",
    description:
      "Indicação de cruzamento onde os condutores devem ceder passagem.",
    category: "Cedência de passagem",
    img: "/images/sinais/B8.png",
    shape: "Quadrado",
    color: ["Amarelo", "Branco"]
  },
  {
    id: "C1",
    name: "Sentido obrigatório em frente",
    description: "Indica que o condutor deve seguir obrigatoriamente em frente.",
    category: "Obrigação",
    img: "/images/sinais/C1.png",
    shape: "Circular",
    color: ["Azul", "Branco"]
  },
  {
    id: "C2",
    name: "Sentido obrigatório à direita",
    description: "Indica que o condutor deve seguir obrigatoriamente à direita.",
    category: "Obrigação",
    img: "/images/sinais/C2.png",
    shape: "Circular",
    color: ["Azul", "Branco"]
  },
  {
    id: "C3",
    name: "Sentido obrigatório à esquerda",
    description: "Indica que o condutor deve seguir obrigatoriamente à esquerda.",
    category: "Obrigação",
    img: "/images/sinais/C3.png",
    shape: "Circular",
    color: ["Azul", "Branco"]
  },
  {
    id: "C4",
    name: "Sentido obrigatório em frente ou à direita",
    description: "Indica que o condutor pode seguir em frente ou virar à direita.",
    category: "Obrigação",
    img: "/images/sinais/C4.png",
    shape: "Circular",
    color: ["Azul", "Branco"]
  },
  {
    id: "C5",
    name: "Sentido obrigatório em frente ou à esquerda",
    description: "Indica que o condutor pode seguir em frente ou virar à esquerda.",
    category: "Obrigação",
    img: "/images/sinais/C5.png",
    shape: "Circular",
    color: ["Azul", "Branco"]
  },
  {
    id: "C6",
    name: "Passagem obrigatória à direita",
    description: "Indica que a passagem deve ser feita pela direita do obstáculo.",
    category: "Obrigação",
    img: "/images/sinais/C6.png",
    shape: "Circular",
    color: ["Azul", "Branco"]
  },
  {
    id: "C7",
    name: "Passagem obrigatória à esquerda",
    description: "Indica que a passagem deve ser feita pela esquerda do obstáculo.",
    category: "Obrigação",
    img: "/images/sinais/C7.png",
    shape: "Circular",
    color: ["Azul", "Branco"]
  },
  {
    id: "C8",
    name: "Passagem obrigatória de rotunda",
    description: "Indica que o condutor deve circular obrigatoriamente na rotunda.",
    category: "Obrigação",
    img: "/images/sinais/C8.png",
    shape: "Circular",
    color: ["Azul", "Branco"]
  },
  {
    id: "C9",
    name: "Via obrigatória para velocípedes",
    description: "Indica via reservada obrigatoriamente a bicicletas.",
    category: "Obrigação",
    img: "/images/sinais/C9.png",
    shape: "Circular",
    color: ["Azul", "Branco"]
  },
  {
    id: "C10",
    name: "Via obrigatória para peões",
    description: "Indica via obrigatória apenas para peões.",
    category: "Obrigação",
    img: "/images/sinais/C10.png",
    shape: "Circular",
    color: ["Azul", "Branco"]
  },
  {
    id: "C11",
    name: "Via obrigatória para veículos de tração animal",
    description: "Indica via reservada a veículos de tração animal.",
    category: "Obrigação",
    img: "/images/sinais/C11.png",
    shape: "Circular",
    color: ["Azul", "Branco"]
  },
  {
    id: "C12",
    name: "Velocidade mínima obrigatória",
    description: "Indica a velocidade mínima a ser respeitada.",
    category: "Obrigação",
    img: "/images/sinais/C12.png",
    shape: "Circular",
    color: ["Azul", "Branco"]
  },

  {
    id: "H1a",
    name: "Estacionamento autorizado",
    description: "Indica o local onde o estacionamento é permitido.",
    category: "Informação",
    img: "/images/sinais/H1a.png",
    shape: "Quadrado",
    color: ["Azul", "Branco"]
  },
  {
    id: "H1b",
    name: "Estacionamento autorizado em estrutura coberta",
    description:
      "Indica local coberto onde o estacionamento é permitido.",
    category: "Informação",
    img: "/images/sinais/H1b.png",
    shape: "Quadrado",
    color: ["Azul", "Branco"]
  },
  {
    id: "H2",
    name: "Hospital",
    description:
      "Indica a existência de um hospital e recomenda cautela na condução.",
    category: "Apoio ao utente",
    img: "/images/sinais/H2.png",
    shape: "Quadrado",
    color: ["Azul", "Branco"]
  },
  {
    id: "H3",
    name: "Trânsito de sentido único",
    description:
      "Indica que a via possui circulação num único sentido.",
    category: "Informação",
    img: "/images/sinais/H3.png",
    shape: "Quadrado",
    color: ["Azul", "Branco"]
  },
  {
    id: "H4",
    name: "Via sem saída",
    description:
      "Indica que a via não tem saída para veículos.",
    category: "Informação",
    img: "/images/sinais/H4.png",
    shape: "Quadrado",
    color: ["Azul", "Branco"]
  },
  {
    id: "H6",
    name: "Velocidade recomendada",
    description:
      "Indica a velocidade aconselhada para circulação segura.",
    category: "Informação",
    img: "/images/sinais/H6.png",
    shape: "Quadrado",
    color: ["Azul", "Branco"]
  },
  {
    id: "H7",
    name: "Passagem para peões",
    description:
      "Indica a localização de uma passagem para peões.",
    category: "Informação",
    img: "/images/sinais/H7.png",
    shape: "Quadrado",
    color: ["Azul", "Branco"]
  },
  {
    id: "H7a",
    name: "Passagem para velocípedes",
    description:
      "Indica a localização de uma passagem para bicicletas.",
    category: "Informação",
    img: "/images/sinais/H7a.png",
    shape: "Quadrado",
    color: ["Azul", "Branco"]
  },
  {
    id: "H8a",
    name: "Passagem desnivelada para peões (rampa)",
    description:
      "Indica passagem inferior ou superior destinada a peões com rampa.",
    category: "Informação",
    img: "/images/sinais/H8a.png",
    shape: "Quadrado",
    color: ["Azul", "Branco"]
  },
  {
    id: "H8b",
    name: "Passagem desnivelada para peões (escada)",
    description:
      "Indica passagem desnivelada para peões com escadas.",
    category: "Informação",
    img: "/images/sinais/H8b.png",
    shape: "Quadrado",
    color: ["Azul", "Branco"]
  },
  {
    id: "H13a",
    name: "Posto de abastecimento de combustível",
    description:
      "Indica a existência de um posto de combustível a uma determinada distância.",
    category: "Serviços",
    img: "/images/sinais/H13a.png",
    shape: "Quadrado",
    color: ["Azul", "Branco"]
  },
  {
    id: "H14a",
    name: "Parque de campismo",
    description:
      "Indica a existência de local para campismo.",
    category: "Turismo",
    img: "/images/sinais/H14a.png",
    shape: "Quadrado",
    color: ["Azul", "Branco"]
  },
  {
    id: "H14b",
    name: "Parque de caravanismo",
    description:
      "Indica local destinado a caravanas.",
    category: "Turismo",
    img: "/images/sinais/H14b.png",
    shape: "Quadrado",
    color: ["Azul", "Branco"]
  },
  {
    id: "H16a",
    name: "Pousada",
    description:
      "Indica a existência de uma pousada.",
    category: "Turismo",
    img: "/images/sinais/H16a.png",
    shape: "Quadrado",
    color: ["Azul", "Branco"]
  },
  {
    id: "H16b",
    name: "Alojamento local",
    description:
      "Indica alojamento disponível na área.",
    category: "Turismo",
    img: "/images/sinais/H16b.png",
    shape: "Quadrado",
    color: ["Azul", "Branco"]
  },
  {
    id: "H18",
    name: "Restaurante",
    description:
      "Indica a existência de um restaurante.",
    category: "Serviços",
    img: "/images/sinais/H18.png",
    shape: "Quadrado",
    color: ["Azul", "Branco"]
  },
  {
    id: "H19",
    name: "Café ou bar",
    description:
      "Indica a existência de café ou bar.",
    category: "Serviços",
    img: "/images/sinais/H19.png",
    shape: "Quadrado",
    color: ["Azul", "Branco"]
  },
  {
    id: "H21",
    name: "Aeroporto",
    description:
      "Indica a existência de um aeroporto ou aeródromo.",
    category: "Transporte",
    img: "/images/sinais/H21.png",
    shape: "Quadrado",
    color: ["Azul", "Branco"]
  },
  {
    id: "A1",
    name: "Pavimento irregular",
    description: "Indica que a via apresenta irregularidades na superfície.",
    category: "Perigo",
    img: "/images/sinais/A1.png",
    shape: "Triângulo",
    color: ["Vermelho", "Branco"]
  },

  // F - SINAIS DE ORIENTAÇÃO
  {
    id: "F1a",
    name: "Número de vias e limites de velocidade por faixa",
    description:
      "Indica várias faixas de rodagem com limites de velocidade diferentes para cada via.",
    category: "Orientação",
    img: "/images/sinais/F1a.png",
    shape: "Retangular",
    color: ["Branco", "Preto", "Azul"]
  },
  {
    id: "F1b",
    name: "Redução de via com cedência de passagem",
    description:
      "Indica estreitamento de faixa com obrigação de cedência de passagem.",
    category: "Orientação",
    img: "/images/sinais/F1b.png",
    shape: "Retangular",
    color: ["Branco", "Preto", "Vermelho"]
  },
  {
    id: "F1c",
    name: "Gestão de tráfego por faixas",
    description:
      "Indica organização de trânsito com regras diferentes por faixa.",
    category: "Orientação",
    img: "/images/sinais/F1c.png",
    shape: "Retangular",
    color: ["Branco", "Preto"]
  },
  {
    id: "F2",
    name: "Sentidos de circulação em vias separadas",
    description:
      "Indica separação de fluxos de trânsito em sentidos opostos.",
    category: "Orientação",
    img: "/images/sinais/F2.png",
    shape: "Retangular",
    color: ["Branco", "Preto", "Azul"]
  },

  // =========================
  // G - ZONAS E PROIBIÇÕES
  // =========================

  {
    id: "G1",
    name: "Zona de estacionamento",
    description:
      "Indica área onde o estacionamento é permitido.",
    category: "Zona",
    img: "/images/sinais/G1.png",
    shape: "Quadrado",
    color: ["Azul", "Branco"]
  },
  {
    id: "G2a",
    name: "Zona de estacionamento proibido",
    description:
      "Indica zona onde é proibido estacionar.",
    category: "Zona",
    img: "/images/sinais/G2a.png",
    shape: "Circular",
    color: ["Vermelho", "Azul"]
  },
  {
    id: "G2b",
    name: "Zona de estacionamento proibido com horário",
    description:
      "Indica proibição de estacionamento em determinados horários.",
    category: "Zona",
    img: "/images/sinais/G2b.png",
    shape: "Circular",
    color: ["Vermelho", "Azul"]
  },
  {
    id: "G3",
    name: "Zona de estacionamento proibido a todos os veículos",
    description:
      "Indica proibição total de estacionamento e paragem.",
    category: "Zona",
    img: "/images/sinais/G3.png",
    shape: "Circular",
    color: ["Vermelho", "Azul"]
  },
  {
    id: "G4",
    name: "Zona de velocidade limitada",
    description:
      "Indica entrada em zona com limite de velocidade (ex: 40 km/h).",
    category: "Zona",
    img: "/images/sinais/G4.png",
    shape: "Circular",
    color: ["Vermelho", "Branco"]
  },
  {
    id: "G4a",
    name: "Zona de velocidade reduzida",
    description:
      "Indica limite de velocidade reduzido (ex: 30 km/h).",
    category: "Zona",
    img: "/images/sinais/G4a.png",
    shape: "Circular",
    color: ["Vermelho", "Branco"]
  },
  {
    id: "G5a",
    name: "Zona de proibição geral de circulação",
    description:
      "Indica zona onde a circulação é proibida.",
    category: "Zona",
    img: "/images/sinais/G5a.png",
    shape: "Circular",
    color: ["Vermelho", "Branco"]
  },
  {
    id: "G5b",
    name: "Zona proibida a veículos pesados",
    description:
      "Indica restrição de circulação para veículos pesados.",
    category: "Zona",
    img: "/images/sinais/G5b.png",
    shape: "Circular",
    color: ["Vermelho", "Branco"]
  },
  {
    id: "G5c",
    name: "Zona de acesso condicionado",
    description:
      "Indica zona com acesso restrito a certos veículos.",
    category: "Zona",
    img: "/images/sinais/G5c.png",
    shape: "Circular",
    color: ["Vermelho", "Branco"]
  },

  // FIM DE ZONAS
  {
    id: "G6",
    name: "Fim de zona de estacionamento",
    description:
      "Indica término da zona de estacionamento regulamentado.",
    category: "Zona",
    img: "/images/sinais/G6.png",
    shape: "Quadrado",
    color: ["Branco", "Cinza"]
  },
  {
    id: "G7a",
    name: "Fim de zona de estacionamento proibido",
    description:
      "Indica fim da restrição de estacionamento.",
    category: "Zona",
    img: "/images/sinais/G7a.png",
    shape: "Quadrado",
    color: ["Branco", "Cinza"]
  },
  {
    id: "G7b",
    name: "Fim de zona de estacionamento proibido por horário",
    description:
      "Indica fim da restrição de estacionamento por horário.",
    category: "Zona",
    img: "/images/sinais/G7b.png",
    shape: "Quadrado",
    color: ["Branco", "Cinza"]
  },
  {
    id: "G8",
    name: "Fim de zona de velocidade limitada",
    description:
      "Indica fim da zona de velocidade reduzida.",
    category: "Zona",
    img: "/images/sinais/G8.png",
    shape: "Quadrado",
    color: ["Branco", "Cinza"]
  },
  {
    id: "G9",
    name: "Fim de zona de proibição geral",
    description:
      "Indica fim de zona de circulação proibida.",
    category: "Zona",
    img: "/images/sinais/G9.png",
    shape: "Quadrado",
    color: ["Branco", "Cinza"]
  },
  {
    id: "G10",
    name: "Fim de zona de velocidade controlada",
    description:
      "Indica fim da limitação de velocidade.",
    category: "Zona",
    img: "/images/sinais/G10.png",
    shape: "Quadrado",
    color: ["Branco", "Cinza"]
  },
  {
    id: "G11",
    name: "Fim de zona especial",
    description:
      "Indica fim de uma zona com regras especiais de circulação.",
    category: "Zona",
    img: "/images/sinais/G11.png",
    shape: "Quadrado",
    color: ["Branco", "Cinza"]
  },
      
 // PROIBIÇÕES
  {
    id: "C1",
    name: "Sentido proibido",
    description: "Indica proibição de transitar no sentido para o qual o sinal está orientado.",
    category: "Proibição",
    img: "/images/sinais/C1.png",
    shape: "Circular",
    color: ["Branco", "Vermelho"]
  },
  {
    id: "C2",
    name: "Trânsito proibido",
    description: "Indica proibição de transitar em ambos os sentidos.",
    category: "Proibição",
    img: "/images/sinais/C2.png",
    shape: "Circular",
    color: ["Branco", "Vermelho"]
  },
  {
    id: "C3a",
    name: "Trânsito proibido a automóveis e motociclos com carro lateral",
    description: "Proíbe a circulação de automóveis e motociclos com sidecar.",
    category: "Proibição",
    img: "/images/sinais/C3a.png",
    shape: "Circular",
    color: ["Branco", "Vermelho"]
  },
  {
    id: "C3b",
    name: "Trânsito proibido a automóveis pesados",
    description: "Proíbe a circulação de automóveis pesados.",
    category: "Proibição",
    img: "/images/sinais/C3b.png",
    shape: "Circular",
    color: ["Branco", "Vermelho"]
  },
  {
    id: "C3c",
    name: "Trânsito proibido a automóveis de mercadorias",
    description: "Proíbe a circulação de automóveis de mercadorias.",
    category: "Proibição",
    img: "/images/sinais/C3c.png",
    shape: "Circular",
    color: ["Branco", "Vermelho"]
  },
  {
    id: "C3d",
    name: "Trânsito proibido a automóveis de mercadorias de peso total superior a ... t",
    description: "Proíbe veículos de mercadorias com peso total superior ao valor indicado.",
    category: "Proibição",
    img: "/images/sinais/C3d.png",
    shape: "Circular",
    color: ["Branco", "Vermelho"]
  },
  {
    id: "C3e",
    name: "Trânsito proibido a motociclos simples",
    description: "Proíbe a circulação de motociclos simples.",
    category: "Proibição",
    img: "/images/sinais/C3e.png",
    shape: "Circular",
    color: ["Branco", "Vermelho"]
  },
  {
    id: "C3f",
    name: "Trânsito proibido a ciclomotores",
    description: "Proíbe a circulação de ciclomotores.",
    category: "Proibição",
    img: "/images/sinais/C3f.png",
    shape: "Circular",
    color: ["Branco", "Vermelho"]
  },
  {
    id: "C3g",
    name: "Trânsito proibido a velocípedes",
    description: "Proíbe a circulação de bicicletas (velocípedes).",
    category: "Proibição",
    img: "/images/sinais/C3g.png",
    shape: "Circular",
    color: ["Branco", "Vermelho"]
  },
  {
    id: "C3h",
    name: "Trânsito proibido a veículos agrícolas",
    description: "Proíbe a circulação de veículos agrícolas.",
    category: "Proibição",
    img: "/images/sinais/C3h.png",
    shape: "Circular",
    color: ["Branco", "Vermelho"]
  },
  {
    id: "C3l",
    name: "Trânsito proibido a peões",
    description: "Proíbe a circulação de peões.",
    category: "Proibição",
    img: "/images/sinais/C3l.png",
    shape: "Circular",
    color: ["Branco", "Vermelho"]
  },
  {
    id: "C3n",
    name: "Trânsito proibido a veículos com reboque",
    description: "Proíbe a circulação de veículos com reboque.",
    category: "Proibição",
    img: "/images/sinais/C3n.png",
    shape: "Circular",
    color: ["Branco", "Vermelho"]
  },
  {
    id: "C5",
    name: "Trânsito proibido a veículos de peso por eixo superior a ... t",
    description: "Proíbe veículos cujo peso por eixo exceda o valor indicado.",
    category: "Proibição",
    img: "/images/sinais/C5.png",
    shape: "Circular",
    color: ["Branco", "Vermelho"]
  },
  {
    id: "C6",
    name: "Trânsito proibido a veículos de peso total superior a ... t",
    description: "Proíbe veículos com peso total superior ao indicado.",
    category: "Proibição",
    img: "/images/sinais/C6.png",
    shape: "Circular",
    color: ["Branco", "Vermelho"]
  },
  {
    id: "C7",
    name: "Trânsito proibido a veículos de comprimento superior a ... m",
    description: "Proíbe veículos ou comboios de veículos com comprimento superior ao indicado.",
    category: "Proibição",
    img: "/images/sinais/C7.png",
    shape: "Circular",
    color: ["Branco", "Vermelho"]
  },
  {
    id: "C8",
    name: "Trânsito proibido a veículos de largura superior a ... m",
    description: "Proíbe veículos com largura superior ao indicado.",
    category: "Proibição",
    img: "/images/sinais/C8.png",
    shape: "Circular",
    color: ["Branco", "Vermelho"]
  },
  {
    id: "C9",
    name: "Trânsito proibido a veículos de altura superior a ... m",
    description: "Proíbe veículos com altura superior ao indicado.",
    category: "Proibição",
    img: "/images/sinais/C9.png",
    shape: "Circular",
    color: ["Branco", "Vermelho"]
  },
  {
    id: "C13",
    name: "Proibição de exceder a velocidade máxima de ... km/h",
    description: "Indica a velocidade máxima permitida (o número aparece no centro do sinal).",
    category: "Proibição",
    img: "/images/sinais/C13.png",
    shape: "Circular",
    color: ["Branco", "Vermelho"]
  },
  {
    id: "C14a",
    name: "Proibição de ultrapassar",
    description: "Proíbe a ultrapassagem de outros veículos.",
    category: "Proibição",
    img: "/images/sinais/C14a.png",
    shape: "Circular",
    color: ["Branco", "Vermelho"]
  },
  {
    id: "C15",
    name: "Estacionamento proibido",
    description: "Proíbe o estacionamento no local onde o sinal está colocado.",
    category: "Proibição",
    img: "/images/sinais/C15.png",
    shape: "Circular",
    color: ["Branco", "Vermelho"]
  },
  {
    id: "C16",
    name: "Paragem e estacionamento proibidos",
    description: "Proíbe tanto a paragem como o estacionamento.",
    category: "Proibição",
    img: "/images/sinais/C16.png",
    shape: "Circular",
    color: ["Branco", "Vermelho"]
  },
  {
    id: "C17",
    name: "Proibição de sinais sonoros",
    description: "Proíbe o uso de buzina ou sinais sonoros.",
    category: "Proibição",
    img: "/images/sinais/C17.png",
    shape: "Circular",
    color: ["Branco", "Vermelho"]
  },
  {
    id: "C20a",
    name: "Fim de todas as proibições",
    description: "Indica o fim de todas as proibições impostas anteriormente por sinalização.",
    category: "Proibição",
    img: "/images/sinais/C20a.png",
    shape: "Circular",
    color: ["Branco", "Cinza"]
  }
];
