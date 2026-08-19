const A = document.getElementById("app");

/* =========================================================
   VIPNETFLIX
   APP.JS
   Versão simples com suporte a imagens locais
   ========================================================= */


/* =========================================================
   FILMES E SÉRIES
   ========================================================= */

const data = [

  {
    id: 1,
    title: "Impacto",
    type: "Série",
    genre: "Ação",
    year: 2026,
    rating: "8.8",
    age: "16",
    image: "images/impacto.jpg",
    backdrop: "images/impacto-bg.jpg",
    desc: "Quando o sistema falha, justiça se torna escolha."
  },

  {
    id: 2,
    title: "Stranger Things",
    type: "Série",
    genre: "Ficção científica · Terror · Mistério",
    year: 2016,
    rating: "8.7",
    age: "16",
    image: "images/stranger-things.jpg",
    backdrop: "images/stranger-things.jpg",
    desc: "Um desaparecimento coloca uma pequena cidade no centro de um mistério sobrenatural."
  },

  {
    id: 3,
    title: "Lupin",
    type: "Série",
    genre: "Policial",
    year: 2021,
    rating: "7.5",
    age: "16",
    image: "images/lupin.jpg",
    backdrop: "images/lupin.jpg",
    desc: "Um ladrão elegante prepara golpes impossíveis."
  },

  {
    id: 4,
    title: "La Casa de Papel",
    type: "Série",
    genre: "Crime",
    year: 2017,
    rating: "8.3",
    age: "16",
    image: "images/762016.jpeg",
    backdrop: "images/762016.jpeg",
    desc: "Um grupo executa um plano ousado que pode mudar suas vidas."
  },

  {
    id: 5,
    title: "The Witcher",
    type: "Série",
    genre: "Fantasia",
    year: 2019,
    rating: "8.2",
    age: "16",
    image: "images/the-witcher.jpg",
    backdrop: "images/the-witcher.jpg",
    desc: "Um caçador de monstros percorre um mundo perigoso."
  },

  {
    id: 6,
    title: "Wednesday",
    type: "Série",
    genre: "Terror · Mistério",
    year: 2022,
    rating: "8.2",
    age: "16",
    image: "images/wednesday.jpg",
    backdrop: "images/wednesday.jpg",
    desc: "Uma estudante excêntrica investiga mistérios em uma nova escola."
  },

  {
    id: 7,
    title: "One Piece",
    type: "Série",
    genre: "Aventura",
    year: 2023,
    rating: "8.6",
    age: "12",
    image: "images/one-piece.jpg",
    backdrop: "images/one-piece.jpg",
    desc: "Uma tripulação parte em busca de um grande tesouro."
  },

  {
    id: 8,
    title: "O Guardião da Noite",
    type: "Filme",
    genre: "Ação",
    year: 2026,
    rating: "8.0",
    age: "16",
    image: "images/guardiao-da-noite.jpg",
    backdrop: "images/guardiao-da-noite.jpg",
    desc: "Uma noite muda tudo quando uma ameaça aparece."
  },

  {
    id: 9,
    title: "Entre Dois Mundos",
    type: "Filme",
    genre: "Drama",
    year: 2026,
    rating: "8.1",
    age: "12",
    image: "images/entre-dois-mundos.jpg",
    backdrop: "images/entre-dois-mundos.jpg",
    desc: "Duas realidades diferentes acabam se encontrando."
  },

  {
    id: 10,
    title: "O Legado Escondido",
    type: "Filme",
    genre: "Aventura",
    year: 2026,
    rating: "8.4",
    age: "12",
    image: "images/legado-escondido.jpg",
    backdrop: "images/legado-escondido.jpg",
    desc: "Um segredo antigo é descoberto e coloca todos em perigo."
  }

];


/* =========================================================
   MINHA LISTA
   ========================================================= */

let list = JSON.parse(
  localStorage.getItem("vip_list") || "[]"
);

function saveList() {
  localStorage.setItem(
    "vip_list",
    JSON.stringify(list)
  );
}


/* =========================================================
   IMAGEM
   ========================================================= */

function imageHTML(m) {

  return `
    <img
      src="${m.image}"
      alt="${m.title}"
      class="poster-image"
      loading="lazy"
      onerror="this.style.display='none'; this.parentElement.classList.add('no-image')"
    >
  `;

}


/* =========================================================
   POSTER
   ========================================================= */

function poster(m) {

  return `
    <div
      class="poster"
      style="
        background-image:
        linear-gradient(
          to bottom,
          rgba(0,0,0,0.05),
          rgba(0,0,0,0.85)
        ),
        url('${m.image}');
        background-size: cover;
        background-position: center;
      "
    >

      ${imageHTML(m)}

      <div class="poster-overlay">

        <span class="poster-title">
          ${m.title}
        </span>

        <span class="poster-meta">
          ${m.type}
        </span>

      </div>

    </div>
  `;

}


/* =========================================================
   CARD
   ========================================================= */

function card(m, progress = false) {

  return `
    <article
      class="card"
      onclick="detail(${m.id})"
    >

      ${poster(m)}

      ${
        progress
        ? `
          <div class="progress">
            <i></i>
          </div>
        `
        : ""
      }

      <div class="card-info">

        <h3>${m.title}</h3>

        <div class="muted">
          ⭐ ${m.rating} · ${m.year}
        </div>

      </div>

    </article>
  `;

}


/* =========================================================
   CABEÇALHO
   ========================================================= */

function header() {

  return `
    <header class="top">

      <div
        class="logo"
        onclick="home()"
        style="cursor:pointer"
      >
        <span>Vip</span>Netflix
      </div>

      <div class="top-actions">

        <button
          class="icon"
          onclick="explore()"
          aria-label="Pesquisar"
        >
          ⌕
        </button>

        <button
          class="icon"
          onclick="profile()"
          aria-label="Perfil"
        >
          ◉
        </button>

        <div
          class="avatar"
          onclick="profile()"
        >
          👤
        </div>

      </div>

    </header>
  `;

}


/* =========================================================
   MENU SUPERIOR
   ========================================================= */

function nav(active) {

  const items = [
    "Início",
    "Explorar",
    "Filmes",
    "Séries",
    "Novidades",
    "Minha Lista"
  ];

  return `
    <div class="nav">

      ${
        items.map(item => {

          let action = "home()";

          if (item === "Explorar") {
            action = "explore()";
          }

          if (item === "Filmes") {
            action = "movies()";
          }

          if (item === "Séries") {
            action = "series()";
          }

          if (item === "Novidades") {
            action = "newReleases()";
          }

          if (item === "Minha Lista") {
            action = "favorites()";
          }

          return `
            <button
              class="${active === item ? "active" : ""}"
              onclick="${action}"
            >
              ${item}
            </button>
          `;

        }).join("")
      }

    </div>
  `;

}


/* =========================================================
   MENU INFERIOR
   ========================================================= */

function bottom(active) {

  return `
    <nav class="bottom">

      <button
        class="${active === "home" ? "active" : ""}"
        onclick="home()"
      >
        <b>
