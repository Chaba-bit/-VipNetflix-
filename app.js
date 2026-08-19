const A = document.getElementById("app");

/* =========================================================
   VIPNETFLIX
   APP.JS - VERSÃO ATUALIZADA
   ========================================================= */

/* =========================
   DADOS DOS FILMES E SÉRIES
   ========================= */

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
    desc: "Quando o sistema falha, justiça se torna escolha.",
    seasons: 1
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
    backdrop: "images/stranger-things-bg.jpg",
    desc: "Um desaparecimento coloca uma pequena cidade no centro de um mistério sobrenatural.",
    seasons: 4
  },

  {
    id: 3,
    title: "Lupin",
    type: "Série",
    genre: "Policial",
    year: 2021,
    rating: "7.5",
    age: "14",
    image: "images/lupin.jpg",
    backdrop: "images/lupin-bg.jpg",
    desc: "Um ladrão elegante prepara golpes impossíveis.",
    seasons: 3
  },

  {
    id: 4,
    title: "La Casa de Papel",
    type: "Série",
    genre: "Crime",
    year: 2017,
    rating: "8.3",
    age: "16",
    image: "images/la-casa-de-papel.jpg",
    backdrop: "images/la-casa-de-papel-bg.jpg",
    desc: "Um grupo executa um plano ousado enquanto tenta escapar das autoridades.",
    seasons: 5
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
    backdrop: "images/the-witcher-bg.jpg",
    desc: "Um caçador de monstros percorre um mundo perigoso.",
    seasons: 3
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
    backdrop: "images/wednesday-bg.jpg",
    desc: "Uma estudante excêntrica investiga mistérios dentro de uma escola cheia de segredos.",
    seasons: 1
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
    backdrop: "images/one-piece-bg.jpg",
    desc: "Uma tripulação parte em busca de um grande tesouro.",
    seasons: 1
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
    backdrop: "images/guardiao-da-noite-bg.jpg",
    desc: "Uma noite muda tudo quando uma ameaça desconhecida aparece.",
    seasons: 0
  },

  {
    id: 9,
    title: "Entre Dois Mundos",
    type: "Filme",
    genre: "Drama",
    year: 2026,
    rating: "8.1",
    age: "14",
    image: "images/entre-dois-mundos.jpg",
    backdrop: "images/entre-dois-mundos-bg.jpg",
    desc: "Duas realidades encontram-se e mudam o destino de várias pessoas.",
    seasons: 0
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
    backdrop: "images/legado-escondido-bg.jpg",
    desc: "Um segredo antigo é descoberto e começa uma nova aventura.",
    seasons: 0
  }

];


/* =========================
   ESTADO DA APLICAÇÃO
   ========================= */

let list = JSON.parse(
  localStorage.getItem("vip_list") || "[]"
);

let currentUser = JSON.parse(
  localStorage.getItem("vip_user") || "null"
);

let users = JSON.parse(
  localStorage.getItem("vip_users") || "[]"
);

let selectedPlan = null;

let watchProgress = JSON.parse(
  localStorage.getItem("vip_progress") || "{}"
);


/* =========================
   FUNÇÕES DE STORAGE
   ========================= */

function saveList() {
  localStorage.setItem(
    "vip_list",
    JSON.stringify(list)
  );
}

function saveUsers() {
  localStorage.setItem(
    "vip_users",
    JSON.stringify(users)
  );
}

function saveProgress() {
  localStorage.setItem(
    "vip_progress",
    JSON.stringify(watchProgress)
  );
}

function saveCurrentUser() {
  if (currentUser) {
    localStorage.setItem(
      "vip_user",
      JSON.stringify(currentUser)
    );
  } else {
    localStorage.removeItem("vip_user");
  }
}


/* =========================
   IMAGENS
   ========================= */

function imageUrl(m) {

  if (m && m.image) {
    return m.image;
  }

  return "images/default.jpg";
}


/* =========================
   POSTER
   ========================= */

function poster(m, large = false) {

  return `
    <div
      class="poster ${large ? "poster-large" : ""}"
      style="
        background-image:
        linear-gradient(
          to top,
          rgba(0,0,0,.85),
          rgba(0,0,0,.05)
        ),
        url('${imageUrl(m)}');
      "
    >

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


/* =========================
   CARD
   ========================= */

function card(m, progress = false) {

  const percentage =
    watchProgress[m.id] || 0;

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
            <i style="width:${percentage}%"></i>
          </div>
        `
        : ""
      }

      <div class="card-info">

        <h3>${m.title}</h3>

        <div class="muted">
          ⭐ ${m.rating} · ${m.year}
        </div>

        <div class="muted">
          ${m.type}
        </div>

      </div>

    </article>
  `;
}


/* =========================
   HEADER
   ========================= */

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


/* =========================
   MENU SUPERIOR
   ========================= */

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
        items.map(x => {

          let action = "explore()";

          if (x === "Início") {
            action = "home()";
          }

          if (x === "Explorar") {
            action = "explore()";
          }

          if (x === "Filmes") {
            action = "movies()";
          }

          if (x === "Séries") {
            action = "series()";
          }

          if (x === "Novidades") {
            action = "newReleases()";
          }

          if (x === "Minha Lista") {
            action = "favorites()";
          }

          return `
            <button
              class="${active === x ? "active" : ""}"
              onclick="${action}"
            >
              ${x}
            </button>
          `;

        }).join("")
      }

    </div>
  `;
}


/* =========================
   MENU INFERIOR
   ========================= */

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
        class="${active === "downloads" ? "active" : ""}"
        onclick="downloads()"
      >
        <b>⇩</b>
        <span>Downloads</span>
      </button>

      <button
        class="${active === "fav" ? "active" : ""}"
        onclick="favorites()"
      >
        <b>＋</b>
        <span>Minha Lista</span>
      </button>

      <button
        class="${active === "profile" ? "active" : ""}"
        onclick="profile()"
      >
        <b>☰</b>
        <span>Mais</span>
      </button>

    </nav>
  `;
}


/* =========================
   SHELL
   ========================= */

function shell(
  content,
  active = "home",
  navigation = "Início"
) {

  A.innerHTML =
    header() +
    nav(navigation) +
    content +
    bottom(active);
}


/* =========================
   HOME
   ========================= */

function home() {

  shell(`

    <section
      class="hero"
      style="
        background-image:
        linear-gradient(
          90deg,
          rgba(0,0,0,.92),
          rgba(0,0,0,.45),
          rgba(0,0,0,.15)
        ),
        url('images/impacto-bg.jpg');
      "
    >

      <div class="hero-content">

        <div class="eyebrow">
          N  SÉRIE
        </div>

        <h1>
          IMPACTO
        </h1>

        <p>
          Quando o sistema falha,
          justiça se torna escolha.
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

        ${
          data
            .slice(1, 6)
            .map(x => card(x, true))
            .join("")
        }

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

        ${
          data
            .slice(1, 7)
            .map(card)
            .join("")
        }

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

        ${
          data
            .slice(7)
            .map(card)
            .join("")
        }

      </div>

    </section>

  `, "home", "Início");
}


/* =========================
   EXPLORAR
   ========================= */

function explore() {

  shell(`

    <section class="section">

      <h1>
        Explorar
      </h1>

      <input
        id="q"
        class="search"
        placeholder="Procurar filmes e séries..."
        oninput="search(this.value)"
      >

      <h2>
        Categorias
      </h2>

      <div class="chips">

        ${
          [
            "🎬 Ação",
            "🎭 Drama",
            "😂 Comédia",
            "💀 Suspense",
            "♥ Romance",
            "👻 Terror",
            "📷 Documentários",
            "🙂 Animação"
          ]
          .map(x => `
            <button
              class="chip"
              onclick="filterGenre('${x.replace(/^.\s/, "")}')"
            >
              ${x}
            </button>
          `)
          .join("")
        }

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
          ]
          .map((x, i) => `
            <button
              class="chip ${i === 0 ? "active" : ""}"
              onclick="filterGenre('${x}')"
            >
              ${x}
            </button>
          `)
          .join("")
        }

      </div>


      <h2 style="margin-top:28px">
        Conteúdos
      </h2>

      <div
        id="results"
        class="grid"
      >
        ${
          data
            .map(card)
            .join("")
        }
      </div>

    </section>

  `, "explore", "Explorar");
}


/* =========================
   PESQUISA
   ========================= */

function search(q) {

  const results =
    document.getElementById("results");

  if (!results) return;

  const query =
    q.toLowerCase().trim();

  const found =
    data.filter(m =>
      (
        m.title +
        " " +
        m.genre +
        " " +
        m.type
      )
      .toLowerCase()
      .includes(query)
    );

  results.innerHTML =
    found.length
    ? found.map(card).join("")
    : `
      <p class="muted">
        Nenhum conteúdo encontrado.
      </p>
    `;
}


/* =========================
   FILTRO
   ========================= */

function filterGenre(genre) {

  const results =
    document.getElementById("results");

  if (!results) return;

  if (genre === "Todos") {

    results.innerHTML =
      data.map(card).join("");

    return;
  }

  const found =
    data.filter(m =>
      m.genre
        .toLowerCase()
        .includes(
          genre.toLowerCase()
        )
    );

  results.innerHTML =
    found.length
    ? found.map(card).join("")
    : `
      <p class="muted">
        Nenhum conteúdo nesta categoria.
      </p>
    `;
}


/* =========================
   FILMES
   ========================= */

function movies() {

  const films =
    data.filter(m =>
      m.type === "Filme"
    );

  shell(`

    <section class="section">

      <h1>
        Filmes
      </h1>

      <div class="grid">

        ${
          films
            .map(card)
            .join("")
        }

      </div>

    </section>

  `, "explore", "Filmes");
}


/* =========================
   SÉRIES
   ========================= */

function series() {

  const seriesList =
    data.filter(m =>
      m.type === "Série"
    );

  shell(`

    <section class="section">

      <h1>
        Séries
      </h1>

      <div class="grid">

        ${
          seriesList
            .map(card)
            .join("")
        }

      </div>

    </section>

  `, "explore", "Séries");
}


/* =========================
   NOVIDADES
   ========================= */

function newReleases() {

  const newest =
    data
      .filter(m => m.year >= 2026)
      .sort(
        (a, b) =>
          b.year - a.year
      );

  shell(`

    <section class="section">

      <h1>
        Novidades
      </h1>

      <div class="grid">

        ${
          newest
            .map(card)
            .join("")
        }

      </div>

    </section>

  `, "explore", "Novidades");
}


/* =========================
   DETALHES
   ========================= */

function detail(id) {

  const m =
    data.find(x => x.id === id);

  if (!m) return;

  const inList =
    list.includes(id);

  A.innerHTML = `

    ${header()}

    <main>

      <section
        class="detail-hero"
        style="
          background-image:
          linear-gradient(
            90deg,
            rgba(0,0,0,.95),
            rgba(0,0,0,.65),
            rgba(0,0,0,.25)
          ),
          url('${m.backdrop || m.image}');
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
            · 🔞 ${m.age}
            · ${m.genre}
          </div>

          <button
            class="btn red"
            onclick="watch(${m.id})"
          >
            ▶ Assistir
          </button>

          <button
            class="btn dark"
            onclick="toggleList(${m.id})"
          >
            ${
              inList
              ? "♥ Na Minha Lista"
              : "＋ Minha Lista"
            }
          </button>

          <p class="detail-desc">
            ${m.desc}
          </p>

        </div>

      </section>


      <section class="section">

        ${
          m.type === "Série"
          ? `

            <h2>
              Elenco
            </h2>

            <div class="cast">

              ${
                [
                  "Personagem 1",
                  "Personagem 2",
                  "Personagem 3",
                  "Personagem 4",
                  "Personagem 5"
                ]
                .map((name, i) => `

                  <div class="person">

                    <div class="person-img">
                      ${["🎭","👤","🧔","👩","🧢"][i]}
                    </div>

                    <b>
                      ${name}
                    </b>

                  </div>

                `)
                .join("")
              }

            </div>


            <h2 style="margin-top:30px">
              Temporadas
            </h2>

            <div class="seasons">

              ${
                Array.from(
                  {length: m.seasons || 1},
                  (_, i) => `
                    <button
                      class="season ${i === 0 ? "active" : ""}"
                      onclick="showSeason(${m.id},${i+1})"
                    >
                      Temporada ${i+1}
                    </button>
                  `
                ).join("")
              }

            </div>

            <div id="episodes">

              ${episodes(m, 1)}

            </div>

          `
          : `

            <h2>
              Sobre o filme
            </h2>

            <p class="detail-desc">
              ${m.desc}
            </p>

            <h2 style="margin-top:30px">
              Informações
            </h2>

            <div class="box">

              <p>
                ⭐ Avaliação:
                <b>${m.rating}</b>
              </p>

              <p>
                Ano:
                <b>${m.year}</b>
              </p>

              <p>
                Género:
                <b>${m.genre}</b>
              </p>

              <p>
                Classificação:
                <b>${m.age}+</b>
              </p>

            </div>

          `
        }

      </section>

    </main>

    ${bottom("home")}

  `;
}


/* =========================
   EPISÓDIOS
   ========================= */

function episodes(m, season) {

  return [

    "O Desaparecimento",
    "A Estranha",
    "A Casa na Floresta",
    "O Segredo",
    "A Escolha",
    "A Revelação",
    "A Última Noite",
    "O Mundo Virou de Cabeça para Baixo"

  ]
  .map((title, i) => `

    <div
      class="episode"
      onclick="watch(${m.id})"
    >

      <div
        class="ep-thumb"
        style="
          background-image:
          url('${m.image}');
        "
      >
        ▶
      </div>

      <div>

        <h3>
          ${i + 1}. ${title}
        </h3>

        <div class="muted">
          Episódio · ${46 + i} min
        </div>

        <p class="muted">
          Uma nova parte da história começa.
        </p>

      </div>

    </div>

  `)
  .join("");
}


function showSeason(id, season) {

  const m =
    data.find(x => x.id === id);

  const box =
    document.getElementById("episodes");

  if (!box || !m) return;

  box.innerHTML =
    episodes(m, season);
}


/* =========================
   MINHA LISTA
   ========================= */

function toggleList(id) {

  if (list.includes(id)) {

    list =
      list.filter(x => x !== id);

  } else {

    list.push(id);

  }

  saveList();

  detail(id);
}


function favorites() {

  const items =
    data.filter(m =>
      list.includes(m.id)
    );

  shell(`

    <section class="section">

      <h1>
        Minha Lista
      </h1>

      ${
        items.length

        ? `
          <div class="grid">
            ${items.map(card).join("")}
          </div>
        `

        : `
          <div class="box center">

            <div style="font-size:50px">
              ♡
            </div>

            <h2>
              A tua lista está vazia
            </h2>

            <p class="muted">
              Adiciona filmes e séries
              para encontrá-los aqui.
            </p>

            <button
              class="btn red"
              onclick="explore()"
            >
              Explorar conteúdos
            </button>

          </div>
        `
      }

    </section>

  `, "fav", "Minha Lista");
}


/* =========================
   DOWNLOADS
   ========================= */

function downloads() {

  shell(`

    <section class="section">

      <h1>
        Downloads
      </h1>

      <div class="box center">

        <div style="font-size:50px">
          ⇩
        </div>

        <h2>
          Nenhum download
        </h2>

        <p class="muted">
          Os conteúdos disponíveis
          offline aparecerão aqui.
        </p>

      </div>

    </section>

  `, "downloads", "");
}


/* =========================
   PLAYER
   ========================= */

function watch(id) {

  const m =
    data.find(x => x.id === id);

  if (!m) return;

  watchProgress[id] =
    watchProgress[id] || 10;

  saveProgress();

  A.innerHTML = `

    <main class="player">

      <div
        class="video"
        style="
          background-image:
          linear-gradient(
            rgba(0,0,0,.35),
            rgba(0,0,0,.8)
          ),
          url('${m.backdrop || m.image}');
        "
      >

        <button
          class="icon"
          style="
            position:absolute;
            left:16px;
            top:15px;
            z-index:2;
          "
          onclick="detail(${id})"
        >
          ←
        </button>

        <div class="video-center">
          ▶
        </div>

        <div class="controls">

          <div class="timeline">

            <i
              style="
                width:${watchProgress[id]}%
              "
            ></i>

          </div>

          <div class="control-line">

            <span>
              ▶　↶10　↷10　🔊
            </span>

            <span>
              24:32 / 47:20　⚙　⛶
            </span>

          </div>

        </div>

      </div>


      <div class="player-info">

        <h1>
          ${m.title}
        </h1>

        <p class="muted">
          ${m.year} · ${m.genre}
        </p>

        <h2>
          ${
            m.type === "Série"
            ? "T1:E8 — O Mundo Virou de Cabeça para Baixo"
            : "O Guardião da Noite"
          }
        </h2>

        <p class="detail-desc">
          ${m.desc}
        </p>

      </div>

    </main>

  `;
}


/* =========================
   LOGIN
   ========================= */

function login() {

  A.innerHTML = `

    <div class="auth-page">

      <div class="auth-box">

        <div class="logo">
          <span>Vip</span>Netflix
        </div>

        <h1>
          Entrar
        </h1>

        <p class="muted">
          Entre na tua conta VipNetflix.
        </p>

        <input
          id="loginEmail"
          class="search"
          type="email"
          placeholder="Email"
        >

        <input
          id="loginPassword"
          class="search"
          type="password"
          placeholder="Palavra-passe"
        >

        <button
          class="btn red full"
          onclick="doLogin()"
        >
          Entrar
        </button>

        <p id="loginError"></p>

        <p class="muted">
          Ainda não tens conta?
        </p>

        <button
          class="btn dark full"
          onclick="register()"
        >
          Criar conta
        </button>

        <button
          class="btn dark full"
          onclick="home()"
        >
          Voltar
        </button>

      </div>

    </div>

  `;
}


/* =========================
   FAZER LOGIN
   ========================= */

function doLogin() {

  const email =
    document
      .getElementById("loginEmail")
      .value
      .trim()
      .toLowerCase();

  const password =
    document
      .getElementById("loginPassword")
      .value;

  const error =
    document.getElementById("loginError");

  const user =
    users.find(
      u =>
        u.email === email &&
        u.password === password
    );

  if (!user) {

    error.innerHTML = `
      <span style="color:#ff5555">
        Email ou palavra-passe incorreta.
      </span>
    `;

    return;
  }

  currentUser = user;

  saveCurrentUser();

  home();
}


/* =========================
   CADASTRO
   ========================= */

function register() {

  A.innerHTML = `

    <div class="auth-page">

      <div class="auth-box">

        <div class="logo">
          <span>Vip</span>Netflix
        </div>

        <h1>
          Criar conta
        </h1>

        <p class="muted">
          Cria a tua conta VipNetflix.
        </p>

        <input
          id="registerName"
          class="search"
          placeholder="Nome"
        >

        <input
          id="registerEmail"
          class="search"
          type="email"
          placeholder="Email"
        >

        <input
          id="registerPassword"
          class="search"
          type="password"
          placeholder="Palavra-passe"
        >

        <input
          id="registerConfirm"
          class="search"
          type="password"
          placeholder="Confirmar palavra-passe"
        >

        <button
          class="btn red full"
          onclick="doRegister()"
        >
          Criar conta
        </button>

        <p id="registerError"></p>

        <button
          class="btn dark full"
          onclick="login()"
        >
          Já tenho uma conta
        </button>

      </div>

    </div>

  `;
}


/* =========================
   FAZER CADASTRO
   ========================= */

function doRegister() {

  const name =
    document
      .getElementById("registerName")
      .value
      .trim();

  const email =
    document
      .getElementById("registerEmail")
      .value
      .trim()
      .toLowerCase();

  const password =
    document
      .getElementById("registerPassword")
      .value;

  const confirm =
    document
      .getElementById("registerConfirm")
      .value;

  const error =
    document.getElementById(
      "registerError"
    );

  if (!name || !email || !password) {

    error.innerHTML = `
      <span style="color:#ff5555">
        Preenche todos os campos.
      </span>
    `;

    return;
  }

  if (password.length < 6) {

    error.innerHTML = `
      <span style="color:#ff5555">
        A palavra-passe deve ter pelo menos 6 caracteres.
      </span>
    `;

    return;
  }

  if (password !== confirm) {

    error.innerHTML = `
      <span style="color:#ff5555">
        As palavras-passe não coincidem.
      </span>
    `;

    return;
  }

  if (
    users.some(
      u => u.email === email
    )
  ) {

    error.innerHTML = `
      <span style="color:#ff5555">
        Este email já está registado.
      </span>
    `;

    return;
  }

  const user = {
    id: Date.now(),
    name,
    email,
    password,
    plan: null
  };

  users.push(user);

  saveUsers();

  currentUser = user;

  saveCurrentUser();

  plans();

}


/* =========================
   PERFIL
   ========================= */

function profile() {

  if (!currentUser) {

    A.innerHTML = `

      ${header()}

      <section class="profile">

        <h1>
          A tua conta
        </h1>

        <div class="box center">

          <div
            class="avatar"
            style="
              width:70px;
              height:70px;
              font-size:32px;
            "
          >
            👤
          </div>

          <h2>
            Bem-vindo à VipNetflix
          </h2>

          <p class="muted">
            Entra ou cria uma conta para continuar.
          </p>

          <button
            class="btn red"
            onclick="login()"
          >
            Entrar
          </button>

          <button
            class="btn dark"
            onclick="register()"
          >
            Criar conta
          </button>

        </div>

      </section>

      ${bottom("profile")}

    `;

    return;
  }


  A.innerHTML = `

    ${header()}

    <section class="profile">

      <h1>
        Perfil
      </h1>

      <div class="box">

        <div
          class="avatar"
          style="
            width:70px;
            height:70px;
            font-size:32px;
          "
        >
          👤
        </div>

        <h2>
          ${currentUser.name}
        </h2>

        <p class="muted">
          ${currentUser.email}
        </p>

        <p>
          Plano:
          <b>
            ${
              currentUser.plan
              ? currentUser.plan
              : "Nenhum"
            }
          </b>
        </p>

        <button
          class="btn red"
          onclick="plans()"
        >
          Ver planos
        </button>

      </div>


      <div class="box">

        <h3>
          Configurações
        </h3>

        <p>
          Qualidade de vídeo　›
        </p>

        <p>
          Idioma　Português　›
        </p>

        <p>
          Notificações　›
        </p>

      </div>


      <button
        class="btn dark"
        onclick="logout()"
      >
        Terminar sessão
      </button>

    </section>

    ${bottom("profile")}

  `;
}


/* =========================
   LOGOUT
   ========================= */

function logout() {

  currentUser = null;

  saveCurrentUser();

  home();
}


/* =========================
   PLANOS
   ========================= */

function plans() {

  A.innerHTML = `

    ${header()}

    <section class="plans">

      <h1>
        Planos VipNetflix
      </h1>

      <p class="muted">
        Escolhe o plano que combina contigo.
      </p>


      <div class="plan">

        <h2>
          Básico
        </h2>

        <p>
          HD · 1 tela
        </p>

        <div class="price">
          99 MT/mês
        </div>

        <button
          class="btn red"
          onclick="selectPlan('Básico',99)"
        >
          Assinar
        </button>

      </div>


      <div class="plan featured">

        <h2>
          Premium
        </h2>

        <p>
          4K · 4 telas · melhor qualidade
        </p>

        <div class="price">
          299 MT/mês
        </div>

        <button
          class="btn red"
          onclick="selectPlan('Premium',299)"
        >
          Assinar
        </button>

      </div>


      <div class="plan">

        <h2>
          Família
        </h2>

        <p>
          4K · 6 telas · experiência completa
        </p>

        <div class="price">
          499 MT/mês
        </div>

        <button
          class="btn red"
          onclick="selectPlan('Família',499)"
        >
          Assinar
        </button>

      </div>

    </section>

    ${bottom("")}

  `;
}


/* =========================
   SELECIONAR PLANO
   ========================= */

function selectPlan(name, price) {

  selectedPlan = {
    name,
    price
  };

  if (!currentUser) {

    register();

    return;
  }

  payment();
}


/* =========================
   PAGAMENTO
   ========================= */

function payment() {

  if (!selectedPlan) {

    plans();

    return;
  }

  A.innerHTML = `

    ${header()}

    <section class="payment">

      <h1>
        Pagamento
      </h1>

      <div class="box">

        <h2>
          ${selectedPlan.name}
        </h2>

        <p>
          Valor:
          <strong>
            ${selectedPlan.price} MT/mês
          </strong>
        </p>

      </div>


      <div class="box">

        <h3>
          Método de pagamento
        </h3>

        <button
          class="payment-method"
          onclick="paymentMethod('M-Pesa')"
        >
          📱 M-Pesa
        </button>

        <button
          class="payment-method"
          onclick="paymentMethod('e-Mola')"
        >
          📱 e-Mola
        </button>

        <button
          class="payment-method"
          onclick="paymentMethod('Cartão')"
        >
          💳 Cartão bancário
        </button>

      </div>


      <div id="paymentForm"></div>

    </section>

  `;
}


/* =========================
   MÉTODO DE PAGAMENTO
   ========================= */

function paymentMethod(method) {

  const form =
    document.getElementById(
      "paymentForm"
    );

  if (!form) return;


  if (
    method === "M-Pesa" ||
    method === "e-Mola"
  ) {

    form.innerHTML = `

      <div class="box">

        <h3>
          Pagamento por ${method}
        </h3>

        <input
          id="paymentPhone"
          class="search"
          type="tel"
          placeholder="Número de telefone"
        >

        <button
          class="btn red full"
          onclick="confirmPayment('${method}')"
        >
          Continuar
        </button>

      </div>

    `;

    return;
  }


  form.innerHTML = `

    <div class="box">

      <h3>
        Pagamento com cartão
      </h3>

      <input
        id="cardNumber"
        class="search"
        placeholder="Número do cartão"
        inputmode="numeric"
      >

      <input
        id="cardName"
        class="search"
        placeholder="Nome no cartão"
      >

      <div
        style="
          display:flex;
          gap:10px;
        "
      >

        <input
          id="cardExpiry"
          class="search"
          placeholder="MM/AA"
        >

        <input
          id="cardCVV"
          class="search"
          placeholder="CVV"
        >

      </div>

      <button
        class="btn red full"
        onclick="confirmPayment('Cartão')"
      >
        Pagar
      </button>

    </div>

  `;
}


/* =========================
   CONFIRMAR PAGAMENTO
   ========================= */

function confirmPayment(method) {

  if (!currentUser) {

    login();

    return;
  }


  if (
    method === "M-Pesa" ||
    method === "e-Mola"
  ) {

    const phone =
      document
        .getElementById("paymentPhone")
        ?.value
        .trim();

    if (!phone) {

      alert(
        "Digite o número de telefone."
      );

      return;
    }

  } else {

    const number =
      document
        .getElementById("cardNumber")
        ?.value
        .trim();

    const name =
      document
        .getElementById("cardName")
        ?.value
        .trim();

    if (!number || !name) {

      alert(
        "Preencha os dados do cartão."
      );

      return;
    }
  }


  /*
    IMPORTANTE:

    Esta função é apenas uma demonstração
    da interface de pagamento.

    Para receber dinheiro de verdade,
    precisaremos conectar uma API/gateway
    de pagamento seguro.
  */


  currentUser.plan =
    selectedPlan.name;

  users =
    users.map(u =>
      u.id === currentUser.id
      ? currentUser
      : u
    );

  saveUsers();
  saveCurrentUser();


  A.innerHTML = `

    <div class="auth-page">

      <div class="auth-box center">

        <div
          style="
            font-size:70px;
          "
        >
          ✓
        </div>

        <h1>
          Pagamento iniciado
        </h1>

        <p class="muted">
          Plano:
          ${selectedPlan.name}
        </p>

        <p class="muted">
          Método:
          ${method}
        </p>

        <p class="muted">
          O pagamento precisa ser
          confirmado pelo sistema
          de pagamento.
        </p>

        <button
          class="btn red full"
          onclick="home()"
        >
          Ir para o início
        </button>

      </div>

    </div>

  `;
}


/* =========================
   INICIALIZAÇÃO
   ========================= */

home();
