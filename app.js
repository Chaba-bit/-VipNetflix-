const app = document.getElementById("app");

/* =========================================================
   VIPNETFLIX - APLICATIVO
   ========================================================= */

let user = JSON.parse(localStorage.getItem("vip_user") || "null");
let fav = JSON.parse(localStorage.getItem("vip_fav") || "[]");

/* Conteúdos cadastrados pelo painel */
let adminContents = JSON.parse(
  localStorage.getItem("vip_contents") || "[]"
);

/* Conteúdos de demonstração */
const demoMovies = [
  {
    id: 1,
    title: "Impacto",
    genre: "Ação",
    year: 2026,
    rating: 8.8,
    emoji: "🔥",
    desc: "Uma equipe enfrenta uma ameaça que pode mudar o futuro."
  },
  {
    id: 2,
    title: "Além do Espaço",
    genre: "Ficção científica",
    year: 2025,
    rating: 8.4,
    emoji: "🚀",
    desc: "Uma missão espacial revela um segredo inesperado."
  },
  {
    id: 3,
    title: "O Mistério",
    genre: "Terror",
    year: 2025,
    rating: 7.9,
    emoji: "👻",
    desc: "Uma cidade pequena esconde um mistério assustador."
  },
  {
    id: 4,
    title: "Guerreiro",
    genre: "Ação",
    year: 2025,
    rating: 8.0,
    emoji: "⚔️",
    desc: "Um lutador precisa proteger sua família."
  },
  {
    id: 5,
    title: "Universo",
    genre: "Ficção científica",
    year: 2026,
    rating: 8.5,
    emoji: "🌌",
    desc: "Uma descoberta transforma a forma como vemos o universo."
  },
  {
    id: 6,
    title: "O Resgate",
    genre: "Mistério",
    year: 2025,
    rating: 8.2,
    emoji: "🚨",
    desc: "Uma investigação perigosa começa contra o tempo."
  }
];

/* =========================================================
   CONTEÚDOS
   ========================================================= */

function getContents() {
  adminContents = JSON.parse(
    localStorage.getItem("vip_contents") || "[]"
  );

  if (adminContents.length > 0) {
    return adminContents;
  }

  return demoMovies;
}

/* =========================================================
   SALVAR
   ========================================================= */

function save() {
  localStorage.setItem("vip_user", JSON.stringify(user));
  localStorage.setItem("vip_fav", JSON.stringify(fav));
}

/* =========================================================
   CARD
   ========================================================= */
function card(m) {

  return `
    <article class="card">

      <div class="poster">
        ${m.emoji || "🎬"}
      </div>

      <div class="card-info">

        <h3>${m.title || "Sem título"}</h3>

        <p>
          ${m.genre || "Filme"}
          ${m.year ? " • " + m.year : ""}
        </p>

        <p>⭐ ${m.rating || "—"}</p>

        <button
          class="btn red"
          onclick="watch(${m.id})">
          ▶ Assistir
        </button>

      </div>

    </article>
  `;
}
/* =========================================================
   CABEÇALHO
   ========================================================= */

function header() {

  return `
    <header class="header">

      <div class="logo">
        Vip<span>Netflix</span>
      </div>

      <div class="user-area">

        <button onclick="explore()">🔎</button>

        <button onclick="login()">
          👤
        </button>

      </div>

    </header>
  `;
}

/* =========================================================
   INÍCIO
   ========================================================= */

function home() {

  const movies = getContents();

  app.innerHTML = `

    ${header()}

    <main>

      <section class="hero">

        <span class="badge">
          DESTAQUE VIP
        </span>

        <h1>
          A Última Fronteira
        </h1>

        <p>
          Uma equipe precisa atravessar um território
          desconhecido para impedir que uma ameaça
          coloque o futuro da humanidade em risco.
        </p>

        <div class="hero-buttons">

          <button
            class="btn white"
            onclick="watchHero()">
            ▶ Assistir
          </button>

          <button
            class="btn gray"
            onclick="detailsHero()">
            ⓘ Informações
          </button>

        </div>

      </section>

      <section>

        <h2>Em Alta Hoje</h2>

        <div class="grid">

          ${movies.map(card).join("")}

        </div>

      </section>

    </main>

    ${bottom("home")}

  `;
}

/* =========================================================
   NAVEGAÇÃO INFERIOR
   ========================================================= */

function bottom(active) {

  return `

    <nav class="bottom">

      <button onclick="home()">
        🏠
        <span>Início</span>
      </button>

      <button onclick="explore()">
        🔎
        <span>Explorar</span>
      </button>

      <button onclick="downloads()">
        ⬇️
        <span>Downloads</span>
      </button>

      <button onclick="menu()">
        ☰
        <span>Menu</span>
      </button>

    </nav>

  `;
}

/* =========================================================
   EXPLORAR
   ========================================================= */

function explore() {

  const movies = getContents();

  app.innerHTML = `

    ${header()}

    <main>

      <h1>Explorar</h1>

      <input
        id="searchInput"
        class="search"
        placeholder="Pesquisar filmes e séries..."
        oninput="search(this.value)"
      >

      <div id="results" class="grid">

        ${movies.map(card).join("")}

      </div>

    </main>

    ${bottom("explore")}

  `;
}

/* =========================================================
   PESQUISA
   ========================================================= */

function search(value) {

  const results = document.getElementById("results");

  if (!results) return;

  const text = value.toLowerCase();

  const movies = getContents().filter(m =>
    String(m.title || "")
      .toLowerCase()
      .includes(text) ||
    String(m.genre || "")
      .toLowerCase()
      .includes(text)
  );

  results.innerHTML =
    movies.length
      ? movies.map(card).join("")
      : `<p>Nenhum conteúdo encontrado.</p>`;
}

/* =========================================================
   DETALHES
   ========================================================= */

function details(id) {

  const m = getContents().find(x => x.id == id);

  if (!m) return;

  const isFav = fav.includes(id);

  app.innerHTML = `

    ${header()}

    <main class="details">

      <div class="poster big">
        ${m.emoji || "🎬"}
      </div>

      <h1>${m.title}</h1>

      <p>
        ${m.genre || "Conteúdo"}
        ${m.year ? " • " + m.year : ""}
      </p>

      <p>⭐ ${m.rating || "—"}</p>

      <p class="description">
        ${m.desc || "Conteúdo disponível no VipNetflix."}
      </p>

      <button
        class="btn red"
        onclick="watch(${m.id})">
        ▶ Assistir
      </button>

      <button
        class="btn gray"
        onclick="downloadPage(${m.id})">
        ⬇️ Baixar
      </button>

      <button
        class="btn gray"
        onclick="toggleFav(${m.id})">
        ${isFav ? "❤️ Remover da Minha Lista" : "♡ Minha Lista"}
      </button>

    </main>

    ${bottom("")}

  `;
}

/* =========================================================
   PLAYER
   ========================================================= */
function watch(id) {

  const m = getContents().find(x => x.id == id);

  if (!m) {
    alert("Conteúdo não encontrado.");
    return;
  }

  const video = m.videoUrl || m.videoURL || m.video || "";

  app.innerHTML = `
    <div class="player">

      <button class="close" onclick="home()">
        ✕
      </button>

      <h2>${m.title || "Vídeo"}</h2>

      ${
        video
        ? `
          <video
            controls
            autoplay
            playsinline
            class="video">

            <source src="${video}" type="video/mp4">

            Seu navegador não suporta vídeo.

          </video>
        `
        : `
          <div class="video-empty">

            <div style="font-size:50px;">
              🎬
            </div>

            <h2>Vídeo ainda não configurado</h2>

            <p>
              Este conteúdo ainda não possui um link de vídeo.
            </p>

          </div>
        `
      }

    </div>
  `;
}
    </div>
  `;
}

/* =========================================================
   HERO
   ========================================================= */
function watchHero() {
  const movies = getContents();

  if (!movies || movies.length === 0) {
    alert("Nenhum conteúdo disponível.");
    return;
  }

  details(movies[0].id);
}

function detailsHero() {

  const movies = getContents();

  if (movies.length) {
    details(movies[0].id);
  }

}

/* =========================================================
   FAVORITOS
   ========================================================= */

function toggleFav(id) {

  if (fav.includes(id)) {

    fav = fav.filter(x => x != id);

  } else {

    fav.push(id);

  }

  save();

  details(id);
}

/* =========================================================
   DOWNLOADS
   ========================================================= */

function downloads() {

  app.innerHTML = `

    ${header()}

    <main>

      <h1>Downloads</h1>

      <div class="empty">

        <div>⬇️</div>

        <h2>Nenhum download</h2>

        <p>
          Os conteúdos baixados aparecerão aqui.
        </p>

      </div>

    </main>

    ${bottom("downloads")}

  `;

}

function downloadPage(id) {

  const m = getContents().find(x => x.id == id);

  if (!m) return;

  alert(
    "Download preparado para: " +
    m.title +
    "\n\nO download offline será conectado ao sistema de armazenamento na próxima etapa."
  );

}

/* =========================================================
   MENU
   ========================================================= */

function menu() {

  app.innerHTML = `

    ${header()}

    <main>

      <h1>Menu</h1>

      <section class="menu">

        <button onclick="favorites()">
          ❤️ Minha Lista
        </button>

        <button onclick="plans()">
          💳 Planos
        </button>

        <button onclick="login()">
          👤 Conta
        </button>

        <button onclick="home()">
          🏠 Início
        </button>

      </section>

    </main>

    ${bottom("menu")}

  `;

}

/* =========================================================
   MINHA LISTA
   ========================================================= */

function favorites() {

  const movies = getContents()
    .filter(m => fav.includes(m.id));

  app.innerHTML = `

    ${header()}

    <main>

      <h1>Minha Lista</h1>

      <div class="grid">

        ${
          movies.length
          ? movies.map(card).join("")
          : "<p>Sua lista está vazia.</p>"
        }

      </div>

    </main>

    ${bottom("")}

  `;

}

/* =========================================================
   PLANOS
   ========================================================= */

function plans() {

  app.innerHTML = `

    ${header()}

    <main>

      <h1>Planos VipNetflix</h1>

      <div class="plans">

        <div class="plan">

          <h2>Básico</h2>

          <strong>99 MT</strong>

          <p>1 dispositivo</p>

          <button
            class="btn red"
            onclick="pay('Básico',99)">
            Escolher
          </button>

        </div>

        <div class="plan">

          <h2>HD</h2>

          <strong>199 MT</strong>

          <p>2 dispositivos</p>

          <button
            class="btn red"
            onclick="pay('HD',199)">
            Escolher
          </button>

        </div>

        <div class="plan">

          <h2>Premium</h2>

          <strong>299 MT</strong>

          <p>4 dispositivos</p>

          <button
            class="btn red"
            onclick="pay('Premium',299)">
            Escolher
          </button>

        </div>

      </div>

    </main>

    ${bottom("")}

  `;

}

/* =========================================================
   PAGAMENTO
   ========================================================= */

function pay(plan, price) {

  alert(
    "Plano " +
    plan +
    " selecionado.\n\nValor: " +
    price +
    " MT.\n\nO sistema de pagamento será conectado na próxima etapa."
  );

}

/* =========================================================
   LOGIN
   ========================================================= */

function login() {

  app.innerHTML = `

    <main class="auth">

      <div class="logo">
        Vip<span>Netflix</span>
      </div>

      <h1>Entrar</h1>

      <input
        id="email"
        class="input"
        type="email"
        placeholder="Seu e-mail">

      <input
        id="password"
        class="input"
        type="password"
        placeholder="Sua senha">

      <button
        class="btn red"
        onclick="doLogin()">
        Entrar
      </button>

      <button
        class="btn gray"
        onclick="register()">
        Criar conta
      </button>

      <button
        class="link"
        onclick="home()">
        Voltar
      </button>

    </main>

  `;

}

function doLogin() {

  const email =
    document.getElementById("email").value;

  const password =
    document.getElementById("password").value;

  if (!email || !password) {

    alert("Preencha todos os campos.");

    return;
  }

  user = {
    email: email
  };

  save();

  alert("Login realizado com sucesso!");

  home();

}

/* =========================================================
   REGISTRO
   ========================================================= */

function register() {

  app.innerHTML = `

    <main class="auth">

      <div class="logo">
        Vip<span>Netflix</span>
      </div>

      <h1>Criar conta</h1>

      <input
        id="name"
        class="input"
        placeholder="Nome">

      <input
        id="email"
        class="input"
        type="email"
        placeholder="E-mail">

      <input
        id="password"
        class="input"
        type="password"
        placeholder="Senha">

      <button
        class="btn red"
        onclick="doRegister()">
        Criar conta
      </button>

      <button
        class="link"
        onclick="login()">
        Já tenho uma conta
      </button>

    </main>

  `;

}

function doRegister() {

  const name =
    document.getElementById("name").value;

  const email =
    document.getElementById("email").value;

  const password =
    document.getElementById("password").value;

  if (!name || !email || !password) {

    alert("Preencha todos os campos.");

    return;
  }

  user = {
    name: name,
    email: email
  };

  save();

  alert("Conta criada com sucesso!");

  home();

}

/* =========================================================
   INICIAR
   ========================================================= */

home();
