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
        <b>⌂</b>
        <span>Início</span>
      </button>

      <button
        class="${active === "explore" ? "active" : ""}"
        onclick="explore()"
      >
        <b>⌕</b>
        <span>Explorar</span>
      </button>

      <button
        class="${active === "movies" ? "active" : ""}"
        onclick="movies()"
      >
        <b>▣</b>
        <span>Filmes</span>
      </button>

      <button
        class="${active === "series" ? "active" : ""}"
        onclick="series()"
      >
        <b>▶</b>
        <span>Séries</span>
      </button>

      <button
        class="${active === "favorites" ? "active" : ""}"
        onclick="favorites()"
      >
        <b>♡</b>
        <span>Minha Lista</span>
      </button>

    </nav>
  `;

}


/* =========================================================
   LISTA DE CARDS
   ========================================================= */

function cards(items) {

  if (!items.length) {
    return `
      <div class="empty">
        Nenhum conteúdo encontrado.
      </div>
    `;
  }

  return `
    <div class="grid">
      ${items.map(m => card(m)).join("")}
    </div>
  `;

}


/* =========================================================
   HOME
   ========================================================= */

function home() {

  A.innerHTML = `

    ${header()}
    ${nav("Início")}

    <main>

      <section class="hero">

        <div class="hero-content">

          <span class="badge">VIPNETFLIX</span>

          <h1>Impacto</h1>

          <p>
            Quando o sistema falha, justiça se torna escolha.
          </p>

          <div class="hero-buttons">

            <button
              class="btn"
              onclick="detail(1)"
            >
              ▶ Assistir
            </button>

            <button
              class="btn secondary"
              onclick="detail(1)"
            >
              + Minha Lista
            </button>

          </div>

        </div>

      </section>


      <section class="section">

        <h2>Populares</h2>

        ${cards(data.slice(0, 7))}

      </section>


      <section class="section">

        <h2>Filmes</h2>

        ${cards(
          data.filter(m => m.type === "Filme")
        )}

      </section>

    </main>

    ${bottom("home")}

  `;

}


/* =========================================================
   EXPLORAR
   ========================================================= */

function explore() {

  A.innerHTML = `

    ${header()}
    ${nav("Explorar")}

    <main class="page">

      <h1>Explorar</h1>

      <input
        id="search"
        class="search"
        type="search"
        placeholder="Pesquisar filmes e séries..."
        oninput="searchContent(this.value)"
      >

      <div id="results">
        ${cards(data)}
      </div>

    </main>

    ${bottom("explore")}

  `;

}


function searchContent(value) {

  const term = value.toLowerCase().trim();

  const results = data.filter(m =>
    m.title.toLowerCase().includes(term) ||
    m.genre.toLowerCase().includes(term)
  );

  const el = document.getElementById("results");

  if (el) {
    el.innerHTML = cards(results);
  }

}


/* =========================================================
   FILMES
   ========================================================= */

function movies() {

  const items = data.filter(
    m => m.type === "Filme"
  );

  A.innerHTML = `

    ${header()}
    ${nav("Filmes")}

    <main class="page">

      <h1>Filmes</h1>

      ${cards(items)}

    </main>

    ${bottom("movies")}

  `;

}


/* =========================================================
   SÉRIES
   ========================================================= */

function series() {

  const items = data.filter(
    m => m.type === "Série"
  );

  A.innerHTML = `

    ${header()}
    ${nav("Séries")}

    <main class="page">

      <h1>Séries</h1>

      ${cards(items)}

    </main>

    ${bottom("series")}

  `;

}


/* =========================================================
   NOVIDADES
   ========================================================= */

function newReleases() {

  const items = [...data]
    .sort((a, b) => b.year - a.year);

  A.innerHTML = `

    ${header()}
    ${nav("Novidades")}

    <main class="page">

      <h1>Novidades</h1>

      ${cards(items)}

    </main>

    ${bottom("home")}

  `;

}


/* =========================================================
   MINHA LISTA
   ========================================================= */

function favorites() {

  const items = data.filter(
    m => list.includes(m.id)
  );

  A.innerHTML = `

    ${header()}
    ${nav("Minha Lista")}

    <main class="page">

      <h1>Minha Lista</h1>

      ${cards(items)}

    </main>

    ${bottom("favorites")}

  `;

}


/* =========================================================
   DETALHES
   ========================================================= */

function detail(id) {

  const m = data.find(
    item => item.id === id
  );

  if (!m) return;

  const saved = list.includes(m.id);

  A.innerHTML = `

    ${header()}

    <main>

      <section
        class="detail-hero"
        style="
          background-image:
          linear-gradient(
            to bottom,
            rgba(0,0,0,0.15),
            rgba(0,0,0,0.95)
          ),
          url('${m.backdrop}');
          background-size: cover;
          background-position: center;
        "
      >

        <div class="detail-content">

          <span class="badge">
            ${m.type}
          </span>

          <h1>${m.title}</h1>

          <div class="muted">
            ⭐ ${m.rating}
            · ${m.year}
            · ${m.age}
          </div>

          <p>
            ${m.desc}
          </p>

          <div class="hero-buttons">

            <button
              class="btn"
              onclick="play(${m.id})"
            >
              ▶ Assistir
            </button>

            <button
              class="btn secondary"
              onclick="toggleList(${m.id})"
            >
              ${saved ? "✓ Na Minha Lista" : "+ Minha Lista"}
            </button>

          </div>

        </div>

      </section>

    </main>

    ${bottom("home")}

  `;

}


/* =========================================================
   MINHA LISTA — ADICIONAR / REMOVER
   ========================================================= */

function toggleList(id) {

  if (list.includes(id)) {

    list = list.filter(
      item => item !== id
    );

  } else {

    list.push(id);

  }

  saveList();

  detail(id);

}


/* =========================================================
   PERFIL
   ========================================================= */

function profile() {

  A.innerHTML = `

    ${header()}
    ${nav("")}

    <main class="page">

      <h1>Perfil</h1>

      <div class="profile-card">

        <div class="avatar large">
          👤
        </div>

        <h2>Usuário VIP</h2>

        <p class="muted">
          Bem-vindo ao VipNetflix.
        </p>

      </div>

    </main>

    ${bottom("home")}

  `;

}


/* =========================================================
   PLAYER
   ========================================================= */

function play(id) {

  const m = data.find(
    item => item.id === id
  );

  if (!m) return;

  A.innerHTML = `

    ${header()}

    <main class="page">

      <h1>${m.title}</h1>

      <div class="video">

        <div class="video-placeholder">
          ▶
        </div>

      </div>

      <button
        class="btn"
        onclick="detail(${m.id})"
      >
        ← Voltar
      </button>

    </main>

    ${bottom("home")}

  `;

}


/* =========================================================
   INICIAR APLICAÇÃO
   ========================================================= */

home();
