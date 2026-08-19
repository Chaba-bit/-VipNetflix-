const A = document.getElementById("app");

/* =========================================================
   01 - FILMES E SÉRIES
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
    genre: "Ficção científica",
    year: 2016,
    rating: "8.7",
    age: "16",
    image: "images/stranger-things.jpg",
    backdrop: "images/stranger-things-bg.jpg",
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
    backdrop: "images/lupin-bg.jpg",
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
    image: "images/casa-de-papel.jpg",
    backdrop: "images/casa-de-papel-bg.jpg",
    desc: "Um grupo executa um plano ousado."
  },

  {
    id: 5,
    title: "The Witcher",
    type: "Série",
    genre: "Fantasia",
    year: 2019,
    rating: "8.2",
    age: "16",
    image: "images/witcher.jpg",
    backdrop: "images/witcher-bg.jpg",
    desc: "Um caçador de monstros percorre um mundo perigoso."
  },

  {
    id: 6,
    title: "Wednesday",
    type: "Série",
    genre: "Terror",
    year: 2022,
    rating: "8.2",
    age: "16",
    image: "images/wednesday.jpg",
    backdrop: "images/wednesday-bg.jpg",
    desc: "Uma estudante excêntrica investiga mistérios."
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
    image: "images/guardiao.jpg",
    backdrop: "images/guardiao-bg.jpg",
    desc: "Uma noite muda tudo."
  },

  {
    id: 9,
    title: "Entre Dois Mundos",
    type: "Filme",
    genre: "Drama",
    year: 2026,
    rating: "8.1",
    age: "12",
    image: "images/dois-mundos.jpg",
    backdrop: "images/dois-mundos-bg.jpg",
    desc: "Duas realidades encontram-se."
  },

  {
    id: 10,
    title: "O Legado Escondido",
    type: "Filme",
    genre: "Aventura",
    year: 2026,
    rating: "8.4",
    age: "12",
    image: "images/legado.jpg",
    backdrop: "images/legado-bg.jpg",
    desc: "Um segredo antigo é descoberto."
  }
];


/* =========================================================
   02 - MINHA LISTA
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
   03 - CABEÇALHO
   ========================================================= */

function header() {

  return `
    <header class="top">

      <div class="logo">
        <span>Vip</span>Netflix
      </div>

      <div class="top-actions">

        <button
          class="icon"
          onclick="explore()">
          🔍
        </button>

        <button
          class="icon"
          onclick="profile()">
          👤
        </button>

      </div>

    </header>
  `;
}


/* =========================================================
   04 - MENU SUPERIOR
   ========================================================= */

function nav(active) {

  const menus = [
    "Início",
    "Explorar",
    "Filmes",
    "Séries",
    "Novidades",
    "Minha Lista"
  ];

  return `
    <div class="nav">

      ${menus.map(menu => {

        let action = "explore()";

        if (menu === "Início") {
          action = "home()";
        }

        if (menu === "Minha Lista") {
          action = "favorites()";
        }

        return `
          <button
            class="${active === menu ? "active" : ""}"
            onclick="${action}">
            ${menu}
          </button>
        `;

      }).join("")}

    </div>
  `;
}


/* =========================================================
   05 - MENU INFERIOR
   ========================================================= */

function bottom(active) {

  return `
    <nav class="bottom">

      <button
        class="${active === "home" ? "active" : ""}"
        onclick="home()">
        <b>⌂</b>
        <span>Início</span>
      </button>

      <button
        class="${active === "explore" ? "active" : ""}"
        onclick="explore()">
        <b>▦</b>
        <span>Explorar</span>
      </button>

      <button onclick="downloads()">
        <b>⇩</b>
        <span>Downloads</span>
      </button>

      <button
        class="${active === "fav" ? "active" : ""}"
        onclick="favorites()">
        <b>＋</b>
        <span>Minha Lista</span>
      </button>

      <button onclick="profile()">
        <b>☰</b>
        <span>Mais</span>
      </button>

    </nav>
  `;
}


/* =========================================================
   06 - POSTER
   ========================================================= */

function poster(movie) {

  return `
    <div
      class="poster"
      style="
        background-image:
        url('${movie.image}');
      "
    >

      <div class="poster-overlay"></div>

      <span class="poster-title">
        ${movie.title}
      </span>

      <span class="play-circle">
        ▶
      </span>

    </div>
  `;
}


/* =========================================================
   07 - CARD
   ========================================================= */

function card(movie, progress = false) {

  return `
    <article
      class="card"
      onclick="detail(${movie.id})">

      ${poster(movie)}

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

        <h3>
          ${movie.title}
        </h3>

        <div class="muted">
          ⭐ ${movie.rating}
          ·
          ${movie.year}
        </div>

      </div>

    </article>
  `;
}


/* =========================================================
   08 - ESTRUTURA DA PÁGINA
   ========================================================= */

function shell(content, active = "home", menu = "Início") {

  A.innerHTML =
    header() +
    nav(menu) +
    content +
    bottom(active);
}


/* =========================================================
   09 - PÁGINA INICIAL
   ========================================================= */

function home() {

  const destaque = data[0];

  shell(`

    <section
      class="hero"
      style="
        background-image:
        linear-gradient(
          to right,
          rgba(0,0,0,.95),
          rgba(0,0,0,.35)
        ),
        url('${destaque.backdrop}');
      "
    >

      <div class="hero-content">

        <div class="eyebrow">
          SÉRIE ORIGINAL
        </div>

        <h1>
          ${destaque.title}
        </h1>

        <p>
          ${destaque.desc}
        </p>

        <button
          class="btn primary"
          onclick="watch(${destaque.id})">
          ▶ Assistir
        </button>

        <button
          class="btn dark"
          onclick="detail(${destaque.id})">
          ⓘ Mais informações
        </button>

      </div>

    </section>


    <section class="section">

      <div class="section-head">

        <h2>
          Continuar assistindo
        </h2>

        <button class="see">
          Ver tudo
        </button>

      </div>

      <div class="row">

        ${data.slice(1, 5).map(
          movie => card(movie, true)
        ).join("")}

      </div>

    </section>


    <section class="section">

      <div class="section-head">

        <h2>
          Populares na VipNetflix
        </h2>

        <button class="see">
          Ver tudo
        </button>

      </div>

      <div class="row">

        ${data.slice(0, 7).map(
          movie => card(movie)
        ).join("")}

      </div>

    </section>


    <section class="section">

      <div class="section-head">

        <h2>
          Lançamentos
        </h2>

        <button class="see">
          Ver tudo
        </button>

      </div>

      <div class="row">

        ${data.slice(7).map(
          movie => card(movie)
        ).join("")}

      </div>

    </section>

  `, "home", "Início");
}


/* =========================================================
   10 - EXPLORAR
   ========================================================= */

function explore() {

  shell(`

    <section class="section">

      <h1>
        Explorar
      </h1>

      <div class="chips">

        ${[
          "Todos",
          "Ação",
          "Aventura",
          "Drama",
          "Comédia",
          "Terror",
          "Crime",
          "Fantasia"
        ].map(category => `
          
          <button
            class="chip"
            onclick="filterGenre('${category}')">
            ${category}
          </button>

        `).join("")}

      </div>


      <h2>
        Pesquisar
      </h2>

      <input
        id="q"
        class="search"
        type="search"
        placeholder="Procurar filmes e séries..."
        oninput="search(this.value)"
      >


      <div
        id="results"
        class="grid">

        ${data.map(
          movie => card(movie)
        ).join("")}

      </div>

    </section>

  `, "explore", "Explorar");
}


/* =========================================================
   11 - PESQUISA
   ========================================================= */

function search(value) {

  const results =
    document.getElementById("results");

  if (!results) return;

  const q =
    value.toLowerCase().trim();

  const found = data.filter(movie => {

    return (
      movie.title.toLowerCase().includes(q) ||
      movie.genre.toLowerCase().includes(q)
    );

  });

  results.innerHTML =
    found.length
      ? found.map(movie => card(movie)).join("")
      : `
        <p class="muted">
          Nenhum conteúdo encontrado.
        </p>
      `;
}


/* =========================================================
   12 - FILTRAR POR GÉNERO
   ========================================================= */

function filterGenre(genre) {

  if (genre === "Todos") {
    explore();
    return;
  }

  const found =
    data.filter(movie =>
      movie.genre
        .toLowerCase()
        .includes(genre.toLowerCase())
    );

  shell(`

    <section class="section">

      <h1>
        ${genre}
      </h1>

      <div class="grid">

        ${
          found.length
            ? found.map(movie => card(movie)).join("")
            : `
              <p class="muted">
                Nenhum conteúdo nesta categoria.
              </p>
            `
        }

      </div>

    </section>

  `, "explore", "Explorar");
}


/* =========================================================
   13 - DETALHES
   ========================================================= */

function detail(id) {

  const movie =
    data.find(item => item.id === id);

  if (!movie) return;

  const inList =
    list.includes(movie.id);

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
            rgba(0,0,0,.35)
          ),
          url('${movie.backdrop}');
        "
      >

        <div>

          <div class="eyebrow">
            ${movie.type.toUpperCase()}
          </div>

          <h1>
            ${movie.title}
          </h1>

          <div class="detail-meta">

            ${movie.year}
            ·
            ⭐ ${movie.rating}
            ·
            ${movie.age}+
            ·
            ${movie.genre}

          </div>

          <p class="detail-desc">
            ${movie.desc}
          </p>

          <button
            class="btn red"
            onclick="watch(${movie.id})">
            ▶ Assistir
          </button>

          <button
            class="btn dark"
            onclick="toggleList(${movie.id})">

            ${
              inList
                ? "♥ Na Minha Lista"
                : "＋ Minha Lista"
            }

          </button>

        </div>

      </section>


      <section class="section">

        <h2>
          Informações
        </h2>

        <p class="muted">
          ${movie.type}
          ·
          ${movie.genre}
          ·
          ${movie.year}
          ·
          Classificação ${movie.age}+
        </p>

      </section>

    </main>

    ${bottom("home")}

  `;
}


/* =========================================================
   14 - MINHA LISTA
   ========================================================= */

function toggleList(id) {

  if (list.includes(id)) {

    list =
      list.filter(item => item !== id);

  } else {

    list.push(id);

  }

  saveList();

  detail(id);
}


function favorites() {

  const movies =
    data.filter(movie =>
      list.includes(movie.id)
    );

  shell(`

    <section class="section">

      <h1>
        Minha Lista
      </h1>

      ${
        movies.length
          ? `
            <div class="grid">
              ${movies.map(movie => card(movie)).join("")}
            </div>
          `
          : `
            <div class="box center">

              <h2>
                A tua lista está vazia
              </h2>

              <p class="muted">
                Adiciona filmes e séries
                para encontrá-los aqui.
              </p>

            </div>
          `
      }

    </section>

  `, "fav", "Minha Lista");
}


/* =========================================================
   15 - DOWNLOADS
   ========================================================= */

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

  `);
}


/* =========================================================
   16 - PERFIL
   ========================================================= */

function profile() {

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
          Utilizador VipNetflix
        </h2>

        <p class="muted">
          Conta de demonstração
        </p>

        <button
          class="btn red"
          onclick="plans()">
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

    </section>

    ${bottom("")}

  `;
}


/* =========================================================
   17 - PLANOS
   ========================================================= */

function plans() {

  A.innerHTML = `

    ${header()}

    <section class="plans">

      <h1>
        Planos VipNetflix
      </h1>


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
          onclick="payment('Básico', 99)">
          Assinar
        </button>

      </div>


      <div class="plan featured">

        <h2>
          Premium
        </h2>

        <p>
          4K · 4 telas
        </p>

        <div class="price">
          299 MT/mês
        </div>

        <button
          class="btn red"
          onclick="payment('Premium', 299)">
          Assinar
        </button>

      </div>

    </section>

    ${bottom("")}

  `;
}


/* =========================================================
   18 - PAGAMENTO
   ========================================================= */

function payment(plan, price) {

  A.innerHTML = `

    ${header()}

    <section class="section">

      <h1>
        Pagamento
      </h1>

      <div class="box">

        <h2>
          Plano ${plan}
        </h2>

        <p class="muted">
          Valor: ${price} MT / mês
        </p>


        <label>
          Nome
        </label>

        <input
          class="search"
          id="payName"
          placeholder="Digite o seu nome"
        >


        <label>
          Número de telefone
        </label>

        <input
          class="search"
          id="payPhone"
          type="tel"
          placeholder="84/85/86/87..."
        >


        <label>
          Método de pagamento
        </label>

        <select
          id="payMethod"
          class="search">

          <option>
            M-Pesa
          </option>

          <option>
            E-Mola
          </option>

          <option>
            Cartão
          </option>

        </select>


        <button
          class="btn red"
          onclick="confirmPayment('${plan}', ${price})">

          Continuar pagamento

        </button>

      </div>

    </section>

    ${bottom("")}

  `;
}


/* =========================================================
   19 - CONFIRMAR PAGAMENTO
   ========================================================= */

function confirmPayment(plan, price) {

  const name =
    document.getElementById("payName").value.trim();

  const phone =
    document.getElementById("payPhone").value.trim();

  const method =
    document.getElementById("payMethod").value;

  if (!name || !phone) {

    alert(
      "Preencha o nome e o número de telefone."
    );

    return;
  }

  alert(
    "Pedido criado!\n\n" +
    "Plano: " + plan + "\n" +
    "Valor: " + price + " MT\n" +
    "Método: " + method + "\n\n" +
    "A integração real do pagamento será feita depois."
  );

}


/* =========================================================
   20 - PLAYER
   ========================================================= */

function watch(id) {

  const movie =
    data.find(item => item.id === id);

  if (!movie) return;

  A.innerHTML = `

    <main class="player">

      <div
        class="video"
        style="
          background-image:
          linear-gradient(
            rgba(0,0,0,.45),
            rgba(0,0,0,.75)
          ),
          url('${movie.backdrop}');
          background-size: cover;
          background-position: center;
        "
      >

        <button
          class="icon"
          style="
            position:absolute;
            left:16px;
            top:15px;
            z-index:5;
          "
          onclick="detail(${movie.id})">
          ←
        </button>

        <div class="video-center">
          ▶
        </div>

        <div class="controls">

          <div class="timeline">
            <i></i>
          </div>

          <div class="control-line">

            <span>
              ▶　↶10　↷10　🔊
            </span>

            <span>
              00:00 / 47:20　⚙　⛶
            </span>

          </div>

        </div>

      </div>


      <div class="player-info">

        <h1>
          ${movie.title}
        </h1>

        <p class="muted">
          ${movie.year}
          ·
          ${movie.genre}
        </p>

        <h2>
          Começar a assistir
        </h2>

        <p class="detail-desc">
          ${movie.desc}
        </p>

      </div>

    </main>

  `;
}


/* =========================================================
   21 - INICIAR APP
   ========================================================= */

home();
