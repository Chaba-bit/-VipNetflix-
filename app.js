/* =========================================================
   VIPNETFLIX - APP
   Conteúdo de exemplo. Substitua somente por conteúdo
   e imagens que você tenha autorização para disponibilizar.
   ========================================================= */

const CHECKOUT_URL = ""; 
// Exemplo: coloque aqui a URL do seu checkout oficial.
// Não coloque chaves secretas ou dados de cartão no JavaScript.

const catalog = [
  {
    id: "s-1",
    title: "1923",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-2",
    title: "1992",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-3",
    title: "30 Moedas de Judas",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-4",
    title: "56 Dias",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-5",
    title: "A Agência",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-6",
    title: "A Batalha de Todos os Dias",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-7",
    title: "Abbott Elementary",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-8",
    title: "Absentia",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-9",
    title: "Acima de Qualquer Suspeita",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-10",
    title: "Acusado",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-11",
    title: "Adamas",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-12",
    title: "Adeus, Terra",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-13",
    title: "Adolescência",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-14",
    title: "Agatha Harkness",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-15",
    title: "Agente Butterfly",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-16",
    title: "Agente Kim Reativado",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-17",
    title: "Ainda Estamos Acordados",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-18",
    title: "Ahsoka - Star Wars",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-19",
    title: "A Leste do Portão",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-20",
    title: "Alex Rider",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-21",
    title: "Algo Horrível Vai Acontecer",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-22",
    title: "Alice in Borderland",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-23",
    title: "Alien Earth",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-24",
    title: "Alita / Alerta: Unidade de Pessoas Desaparecidas",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-25",
    title: "All Her Fault",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-26",
    title: "Allegiance",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-27",
    title: "Almost Paradise",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-28",
    title: "Alvo Primário",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-29",
    title: "Amanhã",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-30",
    title: "American Rust",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-31",
    title: "Amigo da Vizinhança: Homem-Aranha",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-32",
    title: "Amor da Minha Vida",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-33",
    title: "Amor e Morte",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-34",
    title: "Amores Mortais",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-35",
    title: "Amor Rural",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-36",
    title: "Anderson Spider Silva: Campeão de MMA",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-37",
    title: "Anne with an E",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-38",
    title: "Anthracite",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-39",
    title: "Apartamento 6/9",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-40",
    title: "APB",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-41",
    title: "Apaixonados na Cidade",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-42",
    title: "Arcane Legends",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-43",
    title: "Arcanjo Renegado",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-44",
    title: "Arjen: Caminho da Perdição",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-45",
    title: "Aruanas",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-46",
    title: "Asaf",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-47",
    title: "As Aventuras Inventadas de Dick Turpin",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-48",
    title: "As Bruxas Mayfair",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-49",
    title: "As Crónicas de Spiderwick",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-50",
    title: "As Mães dos Pinguins",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-51",
    title: "Asterix e Obelix: Luta dos Chefes",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-52",
    title: "Assassino Zen",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-53",
    title: "Assassinato na Casa Branca",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-54",
    title: "Assassinato no Fim do Mundo",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-55",
    title: "Até o Céu",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-56",
    title: "Até o Último Samurai",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-57",
    title: "Até Que Se Prove O Contrário",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-58",
    title: "Atomic",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-59",
    title: "Atypical",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-60",
    title: "Avatar: O Último Mestre do Ar",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-61",
    title: "Baby Bandito",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-62",
    title: "Bad Blood (Sangue Ruim)",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-63",
    title: "Bad Monkey",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-64",
    title: "Bagdad Central",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-65",
    title: "Ballard: Crimes Sem Resposta",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-66",
    title: "Banco Central Sob Ataque",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-67",
    title: "Bandi",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-68",
    title: "Bandidagem",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-69",
    title: "Banksters",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-70",
    title: "Barganha",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-71",
    title: "Barry",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-72",
    title: "Bastidores de uma Conspiração",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-73",
    title: "Beauty in Black",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-74",
    title: "Beauty: Lindos de Morrer",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-75",
    title: "Bebê Rena",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-76",
    title: "Bel-Air",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-77",
    title: "Bem-Vindos à Austrália",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-78",
    title: "Berlim (La Casa de Papel)",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-79",
    title: "Berlim e a Dama com Arminho",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-80",
    title: "Betaal",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-81",
    title: "Big Bet - A Próxima Aposta",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-82",
    title: "Black Bird",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-83",
    title: "Black Doves",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-84",
    title: "Black Knight",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-85",
    title: "Black Máfia",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-86",
    title: "Blackout",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-87",
    title: "Black Rabbit",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-88",
    title: "Black Snow",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-89",
    title: "Blue Lights",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-90",
    title: "Bodkin",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-91",
    title: "Bom Dia, Verônica",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-92",
    title: "Bookie",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-93",
    title: "BÖRÜ - Esquadrão Lobo",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-94",
    title: "Bosch: O Legado",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-95",
    title: "Breath: Pelas Sombras",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-96",
    title: "Briarpatch",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-97",
    title: "Bridgerton",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-98",
    title: "Briganti: Na Rota do Ouro",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-99",
    title: "Bulletproof",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-100",
    title: "Cães de Caça",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-101",
    title: "Caminhando Sobre o Gelo Fino",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-102",
    title: "Capoeiras",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-103",
    title: "Cara X Cara",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-104",
    title: "Cardinal",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-105",
    title: "Casa de Davi",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-106",
    title: "Cashero",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-107",
    title: "Castlevania: Noturno",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-108",
    title: "Caçador de Demônios: Bondsman",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-109",
    title: "Caçadores de Demônios",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-110",
    title: "Celebrity",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-111",
    title: "Cela 211",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-112",
    title: "Cenas de Um Crime",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-113",
    title: "Chad Powers",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-114",
    title: "Chefes de Guerra",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-115",
    title: "Chosen (Os Escolhidos)",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-116",
    title: "CIA",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-117",
    title: "Cilada",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-118",
    title: "Cinco Dias no Hospital Memorial",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-119",
    title: "Cirurgias e Artimanhas",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-120",
    title: "Cisne Vermelho",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-121",
    title: "Citadel",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-122",
    title: "Citadel: Diana",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-123",
    title: "Citadel: Honey Bunny",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-124",
    title: "Clark",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-125",
    title: "Classe dos Heróis Fracos",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-126",
    title: "Clickbait",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-127",
    title: "Cobra Kai",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-128",
    title: "Colapso",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-129",
    title: "Com a Permissão do Tribunal",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-130",
    title: "Com Carinho, Kitty",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-131",
    title: "Comissária de Bordo",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-132",
    title: "Como Água Para Chocolate",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-133",
    title: "Como Vender Drogas Online (Rápido)",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-134",
    title: "Conexão",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-135",
    title: "Conexões (Liaison)",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-136",
    title: "Constelação",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-137",
    title: "Continuum",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-138",
    title: "Copenhagen Cowboy",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-139",
    title: "Coragem, Irmão!",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-140",
    title: "Corpos",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-141",
    title: "Corpo em Chamas",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-142",
    title: "Cortina de Fumaça",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-143",
    title: "Cowboys Bebop",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-144",
    title: "Coyote: Herói e Fera",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-145",
    title: "Crimes em Déli",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-146",
    title: "Criminosos (Culprits)",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-147",
    title: "Crise em Seis Cenas",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-148",
    title: "Crooks (Criminosos)",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-149",
    title: "Crossing Lines",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-150",
    title: "Curs - A Lenda do Lago",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-151",
    title: "Custe o que Custar",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-152",
    title: "Cypher - Ataque Contra Inteligência",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-153",
    title: "Dark Hole",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-154",
    title: "Dark Winds",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-155",
    title: "Daybreak",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-156",
    title: "Dele e Dela",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-157",
    title: "Deixa Ela Entrar",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-158",
    title: "Demolidor: Renascido",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-159",
    title: "Deputy",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-160",
    title: "Depois da Cabana",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-161",
    title: "Depois da Festa",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-162",
    title: "Desaparecido para Sempre",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-163",
    title: "Desejos S.A.",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-164",
    title: "Desejo Fatal",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-165",
    title: "Desejo Sombrio",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-166",
    title: "Desgraça ao Seu Dispor",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-167",
    title: "Desobedientes",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-168",
    title: "Desordem Pública",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-169",
    title: "Despercebida",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-170",
    title: "Detetive Alex Cross",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-171",
    title: "Detetive das Sombras",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-172",
    title: "Detetive Forst",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-173",
    title: "Deuses Americanos",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-174",
    title: "Deus Me Adicionou",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-175",
    title: "Devil",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-176",
    title: "Devil May Cry",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-177",
    title: "Dexter: New Blood",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-178",
    title: "De Volta às Raízes",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-179",
    title: "Diablero",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-180",
    title: "Dia Zero",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-181",
    title: "Diário de Horrores",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-182",
    title: "Diário de Um Robô Assassino",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-183",
    title: "Difamação",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-184",
    title: "Dilema",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-185",
    title: "Dinastia",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-186",
    title: "Dinheiro Fácil",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-187",
    title: "Distrito do Além",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-188",
    title: "Django",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-189",
    title: "DNA do Crime",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-190",
    title: "Doctor Advogado",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-191",
    title: "Dollar",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-192",
    title: "DOM",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-193",
    title: "Domínio",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-194",
    title: "DPT. Q",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-195",
    title: "DP-Dog Day",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-196",
    title: "Dr. Morte",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-197",
    title: "Duster",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-198",
    title: "Echo",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-199",
    title: "Elite",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-200",
    title: "Elsbeth",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-201",
    title: "Emily em Paris",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-202",
    title: "Emergência Berlim",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-203",
    title: "Emergência Radioativa",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-204",
    title: "Em Movimento (Moving)",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-205",
    title: "Em Nome do Céu",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-206",
    title: "Enfermeira",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-207",
    title: "Encontrados (Found)",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-208",
    title: "Eric",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-209",
    title: "Escândalo / A Reserva",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-210",
    title: "Espião/Mestre",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-211",
    title: "Eu Vou Te Encontrar",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-212",
    title: "Explosivos",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-213",
    title: "Express - Sequestros",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-214",
    title: "Exterminador do Futuro: Zero",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-215",
    title: "Fada do Levantamento de Peso",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-216",
    title: "Falando a Real",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-217",
    title: "Fallen: Luz e Sombra",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-218",
    title: "Fallout",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-219",
    title: "Família da Meia-Noite",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-220",
    title: "Família em Primeiro Lugar",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-221",
    title: "Far Trade: Jogo Sujo",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-222",
    title: "Fauda",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-223",
    title: "Ferry: A Série",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-224",
    title: "Festa de Caça (The Hunting Party)",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-225",
    title: "Fight Night: The Million Dollar Heist",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-226",
    title: "Firebite",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-227",
    title: "Fire Country",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-228",
    title: "Flex x Cop",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-229",
    title: "Flor do Deserto",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-230",
    title: "Força Policial Indiana",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-231",
    title: "From (Origem)",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-232",
    title: "Fubar",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-233",
    title: "Fundação",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-234",
    title: "Fúria de Paris",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-235",
    title: "Gannibal",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-236",
    title: "Gangues da Galícia",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-237",
    title: "Gangues de Londres",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-238",
    title: "Garcia!",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-239",
    title: "Garota de Fora: O Recomeço",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-240",
    title: "Garotas do Ônibus: Jornalistas de Campanha",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-241",
    title: "Garotas em Chamas",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-242",
    title: "Garotos Detetives Mortos",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-243",
    title: "Gatilho (Trigger)",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-244",
    title: "Gen V (The Boys)",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-245",
    title: "Get Millie Black",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-246",
    title: "Goblin",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-247",
    title: "God Father of Harlem",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-248",
    title: "Golden Kamuy (A Série)",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-249",
    title: "Gotham Knights",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-250",
    title: "Gray",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-251",
    title: "Griselda - A Viúva Negra do Tráfico",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-252",
    title: "Grotesquerie",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-253",
    title: "Grupo de Estudos",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-254",
    title: "Guerra: Fúria e Vingança",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-255",
    title: "Halo",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-256",
    title: "Happy Face: Um Serial Killer",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-257",
    title: "Harlan Coben: Lázaro",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-258",
    title: "Heels",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-259",
    title: "Hierarchy",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-260",
    title: "Histórico Criminal",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-261",
    title: "Homem em Chamas",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-262",
    title: "Homens da Lei: Bass Reeves",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-263",
    title: "Horário Nobre: A Amante do Jornalista",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-264",
    title: "Hotel Cocaína",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-265",
    title: "Hotel Costeira",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-266",
    title: "House of Guinness",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-267",
    title: "House of Ninjas",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-268",
    title: "House of the Dragon",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-269",
    title: "House of the Owl (Um Homem Chamado Coruja)",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-270",
    title: "Impuros",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-271",
    title: "Indomável",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-272",
    title: "Industry",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-273",
    title: "Instável",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-274",
    title: "Interligados",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-275",
    title: "Intimidade",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-276",
    title: "Ironheart (Coração de Ferro)",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-277",
    title: "Irmãos Sun",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-278",
    title: "Irreverent",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-279",
    title: "Irracional",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-280",
    title: "Island",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-281",
    title: "It: Bem-Vindos à Derry",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-282",
    title: "It's A Match / Kakegurui Bet",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-283",
    title: "Invasão a Paris (Paris Has Fallen)",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-284",
    title: "Íntima Traição",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-285",
    title: "Joe Pickett",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-286",
    title: "Jovem Sherlock",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-287",
    title: "Jovens Recrutas",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-288",
    title: "Juiz do Diabo",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-289",
    title: "Justified: Cidade Primitiva",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-290",
    title: "Killer Paradox",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-291",
    title: "King & Conquer",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-292",
    title: "Knuckles",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-293",
    title: "Kübra",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-294",
    title: "La Brea",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-295",
    title: "Landman",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-296",
    title: "Lenda do Tesouro Perdido",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-297",
    title: "Ligações Perigosas",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-298",
    title: "Like a Dragon: Yakuza",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-299",
    title: "Loki",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-300",
    title: "Los Gringo Hunters",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-301",
    title: "Loucos Um Pelo Outro",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-302",
    title: "Lucifer",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-303",
    title: "Ludik",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-304",
    title: "Lupin",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-305",
    title: "Made in Korea",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-306",
    title: "Maxton Hall: Um Mundo Entre Nós",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-307",
    title: "Magnatas do Crime",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-308",
    title: "Mal de Família",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-309",
    title: "Maldito Dia de Sorte",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-310",
    title: "Maldito Sonho de Contos de Fada",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-311",
    title: "Marcada",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-312",
    title: "Marshals: Uma História Yellowstone",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-313",
    title: "Marselha em Perigo",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-314",
    title: "Marvel Coração de Ferro",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-315",
    title: "Marvel Defensores",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-316",
    title: "Marvel Invasão Secreta",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-317",
    title: "Marvel Jessica Jones",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-318",
    title: "Marvel O Justiceiro",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-319",
    title: "Marvel Punho de Ferro",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-320",
    title: "Marvel Runaways",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-321",
    title: "Marvel Zumbis",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-322",
    title: "Má Influência",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-323",
    title: "Mão de Ferro",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-324",
    title: "Máquina do Destino",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-325",
    title: "Medusa",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-326",
    title: "Memória de Um Assassino",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-327",
    title: "Mestres do Ar",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-328",
    title: "Mestres do Universo: A Revolução",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-329",
    title: "Metamorfo: Sombras de Nova York",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-330",
    title: "Meus Amigos e Vizinhos",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-331",
    title: "M.I.A",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-332",
    title: "Mil Golpes",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-333",
    title: "Mirzapur",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-334",
    title: "Mistério no Mar",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-335",
    title: "Monarch: Rei dos Monstros",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-336",
    title: "Montecristo",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-337",
    title: "Morrendo por Sexo",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-338",
    title: "Monsieur Spade",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-339",
    title: "Motorheads",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-340",
    title: "Mr. Inbetween",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-341",
    title: "Mr. Sunshine",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-342",
    title: "Muito Engraçado",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-343",
    title: "Nacho",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-344",
    title: "Na Lama",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-345",
    title: "Naquela Noite",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-346",
    title: "Não Diga Nada",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-347",
    title: "Não Nos Calaremos",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-348",
    title: "Não Volte Para Casa",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-349",
    title: "Narcos: México",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-350",
    title: "NCIS: Origem",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-351",
    title: "NCIS: Tony & Ziva",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-352",
    title: "Newtopia",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-353",
    title: "Némesis",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-354",
    title: "Néro: O Assassino",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-355",
    title: "Nightsleeper",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-356",
    title: "Nine Bodies in a Mexican Morgue",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-357",
    title: "Nine Puzzles",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-358",
    title: "Ninja Kamui",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-359",
    title: "Nosso Destino",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-360",
    title: "Notas da Última Fita",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-361",
    title: "O Agente Divino",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-362",
    title: "O Agente Noturno",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-363",
    title: "O Amor Pode Ser Traduzido?",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-364",
    title: "O Amor Volta Para Casa",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-365",
    title: "Oasis",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-366",
    title: "O Casal Perfeito",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-367",
    title: "O Cavaleiro dos Sete Reinos",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-368",
    title: "O Conde de Monte Cristo",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-369",
    title: "O Conto da Aia (The Handmaid's Tale)",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-370",
    title: "O Degelo",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-371",
    title: "O Diabo em Ohio",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-372",
    title: "O Dia do Chacal",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-373",
    title: "O Dono de Kingstown",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-374",
    title: "O Eternauta",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-375",
    title: "O Gerente da Noite",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-376",
    title: "O Gênio dos Desejos",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-377",
    title: "O Grifo",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-378",
    title: "O Imperador de Ocean Park",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-379",
    title: "O Jardineiro",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-380",
    title: "O Jogo da Morte",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-381",
    title: "O Jogo Que Mudou a História",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-382",
    title: "O Manipulado",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-383",
    title: "O Monstro de Florença",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-384",
    title: "O Monstro em Mim",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-385",
    title: "O Pier",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-386",
    title: "O Poder e a Lei",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-387",
    title: "O Polígamo",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-388",
    title: "O Preço da Confissão",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-389",
    title: "O Problema dos 3 Corpos",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-390",
    title: "O Rastreador",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-391",
    title: "O Recruta",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-392",
    title: "O Refúgio Atômico",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-393",
    title: "O Regime",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-394",
    title: "O Rei de Porcelana",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-395",
    title: "O Ringue",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-396",
    title: "O Roubo (Steal)",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-397",
    title: "O Simpatizante",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-398",
    title: "O Turista",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-399",
    title: "O Urso",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-400",
    title: "O Verão Que Mudou A Minha Vida",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-401",
    title: "O Véu",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-402",
    title: "Olhos de Wakanda",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-403",
    title: "Olympo",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-404",
    title: "One Day",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-405",
    title: "One Piece",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-406",
    title: "Onde Tudo Acontece",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-407",
    title: "Operação Lioness",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-408",
    title: "Operação Maré Negra",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-409",
    title: "Operação Pacífico",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-410",
    title: "Operação Tyrant",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-411",
    title: "Orphan Black: Echoes",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-412",
    title: "Os Abandonados",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-413",
    title: "Os Assassinatos de Arê",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-414",
    title: "Os Assassinatos de Mandala",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-415",
    title: "Os Casos de Harry Hole",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-416",
    title: "Os Donos do Jogo",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-417",
    title: "Os Lucros do Amor",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-418",
    title: "Os Outros",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-419",
    title: "Os Segredos de Chinatown",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-420",
    title: "Os Segredos de Manscheid",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-421",
    title: "Os Sopranos",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-422",
    title: "Ourika: Cidade em Chamas",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-423",
    title: "Outer Banks",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-424",
    title: "OXEN",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-425",
    title: "Pacificador",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-426",
    title: "Papel de Rainha",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-427",
    title: "Paradise",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-428",
    title: "Parasyte: The Grey",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-429",
    title: "Parceiras no Crime",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-430",
    title: "Patinando no Amor",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-431",
    title: "Payback",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-432",
    title: "Pearson",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-433",
    title: "Pecados Inconfessáveis",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-434",
    title: "Pedaço de Mim",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-435",
    title: "Pinguim",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-436",
    title: "Perfil Falso",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-437",
    title: "Percy Jackson e Os Olimpianos",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-438",
    title: "Plano de Ressurreição",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-439",
    title: "Plantão Policial",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-440",
    title: "Poker Face",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-441",
    title: "Polaris: Conspiração Política",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-442",
    title: "Power Book III: Raising Kanan",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-443",
    title: "Power Book IV: Force",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-444",
    title: "Power Book II: Ghost",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-445",
    title: "Pretendente Surpresa",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-446",
    title: "Profecia do Inferno",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-447",
    title: "Projeto Lazarus",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-448",
    title: "Pssica",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-449",
    title: "Pulso",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-450",
    title: "Pure",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-451",
    title: "Quando Ninguém Vê",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-452",
    title: "Quando o Telefone Toca",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-453",
    title: "Que Cilada! (Incastrati)",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-454",
    title: "Que Falta Você Me Faz",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-455",
    title: "Querido Hongrang",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-456",
    title: "Rabbit Hole",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-457",
    title: "Rabo de Peixe (Mar Branco)",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-458",
    title: "Rainha Charlotte",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-459",
    title: "Rainha das Lágrimas",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-460",
    title: "Rainha dos Golpes",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-461",
    title: "Rainha Vermelha",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-462",
    title: "Rainha Woo",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-463",
    title: "Rancho Dutton",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-464",
    title: "Reacher",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-465",
    title: "Red Alert",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-466",
    title: "Red Eye",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-467",
    title: "Refém (Hostage)",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-468",
    title: "Respira",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-469",
    title: "Resident Alien",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-470",
    title: "Ripley",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-471",
    title: "Romulus",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-472",
    title: "Round 6",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-473",
    title: "Round 6: O Desafio",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-474",
    title: "Sakamoto Days",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-475",
    title: "Sandokan",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-476",
    title: "Sara: A Mulher nas Sombras",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-477",
    title: "Scarpetta: Médica Legista",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-478",
    title: "Se As Flores Falassem",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-479",
    title: "Se Desejos Matassem",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-480",
    title: "Segredos de Ch",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-481",
    title: "Seguro Para Divorciados",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-482",
    title: "Sem Misericórdia (Punição)",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-483",
    title: "Sem Piedade (Mercy of None)",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-484",
    title: "Sem Salvação",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-485",
    title: "Sequestro no Ar",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-486",
    title: "Silo",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-487",
    title: "Sintonia",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-488",
    title: "Sob a Escuridão do Sol",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-489",
    title: "Solo Leveling",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-490",
    title: "Spartacus: House of Ashur",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-491",
    title: "Spider-Man: Um Novo Dia",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-492",
    title: "Spider-Noir",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-493",
    title: "Splinter Cell: Deathwatch",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-494",
    title: "Stranger Things: Histórias de 85",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-495",
    title: "Subterrâneo",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-496",
    title: "Suits L.A.",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-497",
    title: "Sutura: A Vida Por Um Fio",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-498",
    title: "Terra do Ouro",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-499",
    title: "Terra dos Pecados",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-500",
    title: "The Copenhagen Test",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-501",
    title: "Unfamiliar",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-502",
    title: "Vapor Humano",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-503",
    title: "Viral Hit",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  },
  {
    id: "s-504",
    title: "Wonderman",
    category: "Série",
    type: "series",
    description: "Conteúdo autorizado — adicione aqui a descrição da série.",
    image: "",
    seasons: []
  }
];

/* ================= CAPAS =================
   Busca capas de séries em uma fonte pública.
   Se uma capa não for encontrada, o cartão continua
   funcionando com o nome da série.
   ================= */
async function carregarCapas() {
  const tarefas = catalog.map(async item => {
    try {
      const resposta = await fetch(
        `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(item.title)}`
      );

      if (!resposta.ok) return;

      const resultados = await resposta.json();
      if (!Array.isArray(resultados) || !resultados.length) return;

      // Preferimos uma correspondência exata; caso contrário,
      // usamos o primeiro resultado retornado.
      const exato = resultados.find(r =>
        r.show?.name?.toLowerCase() === item.title.toLowerCase()
      );
      const show = (exato || resultados[0])?.show;

      if (show?.image?.original || show?.image?.medium) {
        item.image = show.image.original || show.image.medium;
      }
    } catch (erro) {
      console.log("Não foi possível carregar a capa:", item.title);
    }
  });

  await Promise.all(tarefas);
  renderSeries(getFilteredSeries());
}

function getFilteredSeries() {
  const query = searchInput.value.trim().toLowerCase();
  if (!query) return catalog;

  return catalog.filter(item =>
    `${item.title} ${item.category} ${item.description || ""}`
      .toLowerCase()
      .includes(query)
  );
}

const plans = [
  {
    id: "mensal",
    name: "Plano Mensal",
    price: "Preço a definir",
    description: "Acesso durante o período definido por você.",
    features: ["Catálogo autorizado", "Séries e episódios", "Acesso em dispositivos compatíveis"]
  },
  {
    id: "trimestral",
    name: "Plano Trimestral",
    price: "Preço a definir",
    description: "Acesso por três meses.",
    features: ["Catálogo autorizado", "Séries e episódios", "Acesso em dispositivos compatíveis"]
  },
  {
    id: "anual",
    name: "Plano Anual",
    price: "Preço a definir",
    description: "Acesso por doze meses.",
    features: ["Catálogo autorizado", "Séries e episódios", "Acesso em dispositivos compatíveis"]
  }
];

const seriesGrid = document.getElementById("seriesGrid");
const plansGrid = document.getElementById("plansGrid");
const seriesCount = document.getElementById("seriesCount");
const searchInput = document.getElementById("searchInput");

const detailsModal = document.getElementById("detailsModal");
const detailsContent = document.getElementById("detailsContent");
const closeModal = document.getElementById("closeModal");

const checkoutModal = document.getElementById("checkoutModal");
const closeCheckout = document.getElementById("closeCheckout");
const checkoutTitle = document.getElementById("checkoutTitle");
const checkoutDescription = document.getElementById("checkoutDescription");
const checkoutButton = document.getElementById("checkoutButton");

function safeText(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function renderSeries(list = catalog) {
  seriesGrid.innerHTML = "";
  seriesCount.textContent = `${list.length} série(s)`;

  list.forEach(item => {
    const card = document.createElement("article");
    card.className = "card";

    const poster = item.image
      ? `<img src="${safeText(item.image)}" alt="${safeText(item.title)}" loading="lazy">`
      : `<div class="poster-text">${safeText(item.title)}</div>`;

    card.innerHTML = `
      <div class="poster">${poster}</div>
      <div class="card-info">
        <h3>${safeText(item.title)}</h3>
        <div class="meta">${safeText(item.category)} • VIP</div>
      </div>
    `;

    card.addEventListener("click", () => openSeries(item));
    seriesGrid.appendChild(card);
  });
}

function openSeries(item) {
  const seasonsHtml = (item.seasons || []).map(season => `
    <div class="season">
      <h3>Temporada ${season.number}</h3>
      ${(season.episodes || []).map(ep => `
        <div class="episode">
          <div>
            <strong>E${String(ep.number).padStart(2, "0")} — ${safeText(ep.title)}</strong>
            <div class="muted">${safeText(ep.duration || "")}</div>
          </div>
          <button
            data-video="${safeText(ep.videoUrl || "")}"
            data-title="${safeText(ep.title)}"
            class="watch-episode">
            Assistir
          </button>
        </div>
      `).join("")}
    </div>
  `).join("");

  detailsContent.innerHTML = `
    <div class="detail-head">
      ${
        item.image
          ? `<img class="detail-cover" src="${safeText(item.image)}" alt="${safeText(item.title)}">`
          : `<div class="poster detail-cover poster-text">${safeText(item.title)}</div>`
      }
      <div>
        <h2>${safeText(item.title)}</h2>
        <p class="muted">${safeText(item.category)}</p>
        <p>${safeText(item.description || "Sem descrição.")}</p>
      </div>
    </div>

    ${seasonsHtml || `<p class="muted">Nenhuma temporada foi cadastrada ainda.</p>`}
  `;

  detailsModal.classList.add("open");
  detailsModal.setAttribute("aria-hidden", "false");

  document.querySelectorAll(".watch-episode").forEach(button => {
    button.addEventListener("click", () => {
      const url = button.dataset.video;
      const title = button.dataset.title;

      if (!url) {
        alert(`O vídeo de "${title}" ainda não foi configurado.`);
        return;
      }

      // Apenas reproduz conteúdo autorizado fornecido por você.
      window.open(url, "_blank", "noopener");
    });
  });
}

function renderPlans() {
  plansGrid.innerHTML = "";

  plans.forEach(plan => {
    const card = document.createElement("div");
    card.className = "plan";

    card.innerHTML = `
      <h3>${safeText(plan.name)}</h3>
      <div class="price">${safeText(plan.price)}</div>
      <p class="muted">${safeText(plan.description)}</p>
      <ul>
        ${plan.features.map(feature => `<li>${safeText(feature)}</li>`).join("")}
      </ul>
      <button class="button full buy-plan" data-plan="${safeText(plan.id)}">
        Comprar
      </button>
    `;

    plansGrid.appendChild(card);
  });

  document.querySelectorAll(".buy-plan").forEach(button => {
    button.addEventListener("click", () => {
      const plan = plans.find(p => p.id === button.dataset.plan);
      openCheckout(plan);
    });
  });
}

function openCheckout(plan) {
  checkoutTitle.textContent = `Checkout — ${plan.name}`;
  checkoutDescription.textContent = plan.description;

  if (!CHECKOUT_URL) {
    checkoutButton.removeAttribute("href");
    checkoutButton.textContent = "Configurar checkout";
    checkoutButton.onclick = event => {
      event.preventDefault();
      alert("Adicione a URL do seu checkout oficial na constante CHECKOUT_URL do app.js.");
    };
  } else {
    checkoutButton.href = CHECKOUT_URL;
    checkoutButton.textContent = "Continuar para pagamento";
    checkoutButton.onclick = null;
  }

  checkoutModal.classList.add("open");
  checkoutModal.setAttribute("aria-hidden", "false");
}

function closeDetails() {
  detailsModal.classList.remove("open");
  detailsModal.setAttribute("aria-hidden", "true");
}

function closeCheckoutModal() {
  checkoutModal.classList.remove("open");
  checkoutModal.setAttribute("aria-hidden", "true");
}

closeModal.addEventListener("click", closeDetails);
closeCheckout.addEventListener("click", closeCheckoutModal);

detailsModal.addEventListener("click", event => {
  if (event.target === detailsModal) closeDetails();
});

checkoutModal.addEventListener("click", event => {
  if (event.target === checkoutModal) closeCheckoutModal();
});

searchInput.addEventListener("input", () => {
  renderSeries(getFilteredSeries());
});

renderSeries();
renderPlans();
carregarCapas();
