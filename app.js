/* =====================================================
   VIPNETFLIX - APP.JS
   Versão demo/local
   ===================================================== */

"use strict";

/* =====================================================
   CONFIGURAÇÃO
===================================================== */

const STORAGE_USERS = "vipnetflix_users";
const STORAGE_SESSION = "vipnetflix_session";
const STORAGE_PROFILE = "vipnetflix_profile";
const STORAGE_FAVORITES = "vipnetflix_favorites";
const STORAGE_HISTORY = "vipnetflix_history";

/* =====================================================
   DADOS DOS FILMES
===================================================== */

const movies = [
  {
    id: 1,
    title: "A Última Missão",
    type: "movie",
    year: 2026,
    genre: "Ação",
    categories: ["action", "adventure"],
    description:
      "Um agente precisa completar uma última missão antes que seja tarde demais.",
    image:
      "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=600",
    banner:
      "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1600",
    video: ""
  },
  {
    id: 2,
    title: "Além das Estrelas",
    type: "movie",
    year: 2026,
    genre: "Ficção científica",
    categories: ["scifi"],
    description:
      "Uma equipe parte para uma missão que pode mudar o futuro da humanidade.",
    image:
      "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=600",
    banner:
      "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=1600",
    video: ""
  },
  {
    id: 3,
    title: "Coração de Aço",
    type: "movie",
    year: 2025,
    genre: "Drama",
    categories: ["drama"],
    description:
      "Uma história sobre coragem, família e uma segunda oportunidade.",
    image:
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=600",
    banner:
      "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=1600",
    video: ""
  },
  {
    id: 4,
    title: "Férias em Confusão",
    type: "movie",
    year: 2025,
    genre: "Comédia",
    categories: ["comedy"],
    description:
      "Uma viagem transforma-se numa sequência de situações inesperadas.",
    image:
      "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=600",
    banner:
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?w=1600",
    video: ""
  },
  {
    id: 5,
    title: "Código Secreto",
    type: "movie",
    year: 2026,
    genre: "Ação",
    categories: ["action", "crime"],
    description:
      "Uma investigação revela um código escondido que pode mudar tudo.",
    image:
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600",
    banner:
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?w=1600",
    video: ""
  },
  {
    id: 6,
    title: "Horizonte Perdido",
    type: "movie",
    year: 2025,
    genre: "Aventura",
    categories: ["adventure"],
    description:
      "Uma equipe procura uma cidade perdida em uma região desconhecida.",
    image:
      "https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?w=600",
    banner:
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?w=1600",
    video: ""
  }
];

/* =====================================================
   DADOS DAS SÉRIES
   Conteúdo demonstrativo/autorizado
===================================================== */

const series = [
  {
    id: 101,
    title: "Aventura VIP",
    type: "series",
    year: 2026,
    genre: "Aventura",
    categories: ["adventure"],
    description: "Série demonstrativa do catálogo VIPNETFLIX.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600",
    banner:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1600",
    seasons: [
      {
        number: 1,
        title: "Temporada 1",
        episodes: [
          {
            number: 1,
            title: "O começo",
            description: "Primeiro episódio da série demonstrativa.",
            video: ""
          },
          {
            number: 2,
            title: "O desafio",
            description: "Um novo desafio aparece.",
            video: ""
          },
          {
            number: 3,
            title: "A descoberta",
            description: "Uma descoberta muda o rumo da história.",
            video: ""
          }
        ]
      },
      {
        number: 2,
        title: "Temporada 2",
        episodes: [
          {
            number: 1,
            title: "Novo caminho",
            description: "Uma nova fase começa.",
            video: ""
          },
          {
            number: 2,
            title: "O segredo",
            description: "Um segredo é revelado.",
            video: ""
