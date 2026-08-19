constconst A = document.getElementById("app");

/* =========================================================
   VIPNETFLIX — DADOS
   ========================================================= */

const data = [
  {
    id: 1,
    title: "Impacto",
    type: "Série",
    genre: "Ação",
    year: 2026,
    rating: "8.8",
    desc: "Quando o sistema falha, justiça se torna escolha.",
    image: "images/impacto.jpg",
    banner: "images/impacto-banner.jpg"
  },
  {
    id: 2,
    title: "Stranger Things",
    type: "Série",
    genre: "Sci-Fi · Terror · Mistério",
    year: 2016,
    rating: "8.7",
    desc: "Um desaparecimento coloca uma pequena cidade no centro de um mistério sobrenatural.",
    image: "images/stranger-things.jpg"
  },
  {
    id: 3,
    title: "Lupin",
    type: "Série",
    genre: "Policial",
    year: 2021,
    rating: "7.5",
    desc: "Um ladrão elegante prepara golpes impossíveis.",
    image: "images/lupin.jpg"
  },
  {
    id: 4,
    title: "La Casa de Papel",
    type: "Série",
    genre: "Crime",
    year: 2017,
    rating: "8.3",
    desc: "Um grupo executa um plano ousado.",
    image: "images/la-casa-de-papel.jpg"
  },
  {
    id: 5,
    title: "The Witcher",
    type: "Série",
    genre: "Fantasia",
    year: 2019,
    rating: "8.2",
    desc: "Um caçador de monstros percorre um mundo perigoso.",
    image: "images/the-witcher.jpg"
  },
  {
    id: 6,
    title: "Wednesday",
    type: "Série",
    genre: "Terror",
    year: 2022,
    rating: "8.2",
    desc: "Uma estudante excêntrica investiga mistérios.",
    image: "images/wednesday.jpg"
  },
  {
    id: 7,
    title: "One Piece",
    type: "Série",
    genre: "Aventura",
    year: 2023,
    rating: "8.6",
    desc: "Uma tripulação parte em busca de um grande tesouro.",
    image: "images/one-piece.jpg"
  },
  {
    id: 8,
    title: "O Guardião da Noite",
    type: "Filme",
    genre: "Ação",
    year: 2026,
    rating: "8.0",
    desc: "Uma noite muda tudo.",
    image: "images/guardiao-da-noite.jpg"
  },
  {
    id: 9,
    title: "Entre Dois Mundos",
    type: "Filme",
    genre: "Drama",
    year: 2026,
    rating: "8.1",
    desc: "Duas realidades encontram-se.",
    image: "images/entre-dois-mundos.jpg"
  },
  {
    id: 10,
    title: "O Legado Escondido",
    type: "Filme",
    genre: "Aventura",
    year: 2026,
    rating: "8.4",
    desc: "Um segredo antigo é descoberto.",
    image: "images/legado-escondido.jpg"
  }
];


/* =========================================================
   DADOS LOCAIS
   ========================================================= */

let list = JSON.parse(localStorage.getItem("vip_list") || "[]");

let user = JSON.parse(localStorage.getItem("vip_user") || "null");

let selectedPlan =
  localStorage.getItem("vip_plan") || "";


function saveList() {
  localStorage.setItem("vip_list", JSON.stringify(list));
}


/* =========================================================
   IMAGENS
   ========================================================= */

function poster(m) {

  return `
    <div class="poster"
         style="
           background-image:
           linear-gradient(to top,
           rgba(0,0,0,.85),
           rgba(0,0,0,.05)),
           url('${m.image}');
         ">

      <span class="poster-title">
        ${m.title}
      </span>

      ${
        m.id < 8
          ? `<span class="play-circle">▶</span>`
          : `<span class="badge">Novo</span>`
      }

    </div>
  `;
}


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
   HEADER
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
          aria-label="Conta"
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

      ${items.map(x => {

        let action = "explore()";

        if (x === "Início") {
          action = "home()";
        }

        if (x === "Minha Lista") {
          action = "favorites()";
        }

        if (x === "Filmes") {
          action = "filterType('Filme')";
        }

        if (x === "Séries") {
          action = "filterType('Série')";
        }

        if (x === "Novidades") {
          action = "newReleases()";
        }

        return `
          <button
            class="${active === x ? "active" : ""}"
            onclick="${action}"
          >
            ${x}
          </button>
        `;

      }).join("")}

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
        Início
      </button>

      <button
        class="${active === "explore" ? "active" : ""}"
        onclick="explore()"
      >
        <b>▦</b>
        Explorar
      </button>

      <button
        onclick="downloads()"
      >
        <b>⇩</b>
        Downloads
      </button>

      <button
        class="${active === "fav" ? "active" : ""}"
        onclick="favorites()"
      >
        <b>＋</b>
        Minha Lista
      </button>

      <button
        onclick="profile()"
      >
        <b>☰</b>
        Mais
      </button>

    </nav>
  `;
}


/* =========================================================
   ESTRUTURA
   ========================================================= */

function shell(content, active = "home", n = "Início") {

  A.innerHTML =
    header() +
    nav(n) +
    content +
    bottom(active);
}


/* =========================================================
   PÁGINA INICIAL
   ========================================================= */

function home() {

  const impacto = data[0];

  A.innerHTML = `
    ${header()}
    ${nav("Início")}

    <section
      class="hero"
      style="
        background-image:
        linear-gradient(
          to right,
          rgba(0,0,0,.95) 0%,
          rgba(0,0,0,.65) 45%,
          rgba(0,0,0,.15) 100%
        ),
        linear-gradient(
          to top,
          #050505 0%,
          transparent 60%
        ),
        url('${impacto.banner || impacto.image}');
      "
    >

      <div class="hero-content">

        <div class="eyebrow">
          N  S É R I E
        </div>

        <h1>
          IMPACTO
        </h1>

        <p>
          ${impacto.desc}
        </p>

        <button
          class="btn primary"
          onclick="watch(1)"
        >
          ▶ Assistir
        </button>

        <button
          class="btn dark"
          onclick="detail(1)"
        >
          ⓘ Mais informações
        </button>

      </div>

    </section>


    <section class="section">

      <div class="section-head">

        <h2>
          Continuar assistindo
        </h2>

        <button
          class="see"
          onclick="explore()"
        >
          Ver tudo
        </button>

      </div>

      <div class="row">
        ${data.slice(1, 5).map(x => card(x, true)).join("")}
      </div>

    </section>


    <section class="section">

      <div class="section-head">

        <h2>
          Populares na VipNetflix
        </h2>

        <button
          class="see"
          onclick="explore()"
        >
          Ver tudo
        </button>

      </div>

      <div class="row">
        ${data.slice(1, 7).map(card).join("")}
      </div>

    </section>


    <section class="section">

      <div class="section-head">

        <h2>
          Lançamentos
        </h2>

        <button
          class="see"
          onclick="newReleases()"
        >
          Ver tudo
        </button>

      </div>

      <div class="row">
        ${data.slice(7).map(card).join("")}
      </div>

    </section>

    ${bottom("home")}
  `;
}


/* =========================================================
   EXPLORAR
   ========================================================= */

function explore() {

  shell(`
    <section class="section">

      <h1>
        Explorar
      </h1>

      <h2 style="margin-top:24px">
        Categorias
      </h2>

      <div class="chips">

        ${[
          "🎬 Ação",
          "🎭 Drama",
          "😂 Comédia",
          "💀 Suspense",
          "♥ Romance",
          "👻 Terror",
          "📷 Documentários",
          "🙂 Animação"
        ].map(x => `
          <button
            class="chip"
            onclick="categorySearch('${x.replace(/^[^ ]+ /, "")}')"
          >
            ${x}
          </button>
        `).join("")}

      </div>


      <h2 style="margin-top:24px">
        Géneros
      </h2>

      <div class="chips">

        ${
          [
            "Todos",
            "Aventura",
            "Policial",
            "Ficção científica",
            "Fantasia",
            "Histórico",
            "Musical",
            "Guerra",
            "Mistério",
            "Crime",
            "Esporte",
            "Família",
            "Anime"
          ].map((x, i) => `
            <button
              class="chip ${i === 0 ? "active" : ""}"
              onclick="
                ${x === "Todos"
                  ? "showResults(data)"
                  : `categorySearch('${x}')`
                }
              "
            >
              ${x}
            </button>
          `).join("")
        }

      </div>


      <h2 style="margin-top:24px">
        Pesquisar
      </h2>

      <input
        id="q"
        class="search"
        placeholder="Procurar filmes e séries..."
        oninput="search(this.value)"
      >


      <div
        id="results"
        class="grid"
      >
        ${data.slice(1, 7).map(card).join("")}
      </div>

    </section>
  `, "explore", "Explorar");
}


function showResults(items) {

  const results = document.getElementById("results");

  if (!results) return;

  results.innerHTML =
    items.length
      ? items.map(card).join("")
      : `<p class="muted">Nenhum conteúdo encontrado.</p>`;
}


function search(q) {

  const text = q.toLowerCase().trim();

  const results = data.filter(m =>
    (
      m.title +
      " " +
      m.genre +
      " " +
      m.type
    ).toLowerCase().includes(text)
  );

  showResults(results);
}


function categorySearch(category) {

  const results = data.filter(m =>
    m.genre.toLowerCase().includes(category.toLowerCase())
  );

  if (document.getElementById("results")) {
    showResults(results);
  } else {

    shell(`
      <section class="section">

        <h1>
          ${category}
        </h1>

        <div class="grid">
          ${
            results.length
              ? results.map(card).join("")
              : `<p class="muted">Nenhum conteúdo encontrado.</p>`
          }
        </div>

      </section>
    `, "explore", "Explorar");

  }
}


/* =========================================================
   FILMES / SÉRIES
   ========================================================= */

function filterType(type) {

  const results = data.filter(m => m.type === type);

  shell(`
    <section class="section">

      <h1>
        ${type}s
      </h1>

      <div class="grid">
        ${results.map(card).join("")}
      </div>

    </section>
  `, "explore", type === "Filme" ? "Filmes" : "Séries");
}


function newReleases() {

  const results = data.filter(m => m.year >= 2026);

  shell(`
    <section class="section">

      <h1>
        Novidades
      </h1>

      <div class="grid">
        ${results.map(card).join("")}
      </div>

    </section>
  `, "explore", "Novidades");
}


/* =========================================================
   DETALHES
   ========================================================= */

function detail(id) {

  const m = data.find(x => x.id === id);

  if (!m) return;

  const inList = list.includes(id);

  A.innerHTML = `
    ${header()}

    <main>

      <section
        class="detail-hero"
        style="
          background-image:
          linear-gradient(
            to right,
            rgba(0,0,0,.95),
            rgba(0,0,0,.45)
          ),
          url('${m.banner || m.image}');
        "
      >

        <div>

          <div class="eyebrow">
            ${m.type.toUpperCase()}
          </div>

          <h1>
            ${m.title}
          </h1>

          <div class="detail-meta">
            ${m.year}
           
