const A = document.getElementById("app");

/* =====================================================
   FILMES E SÉRIES
===================================================== */

const data = [
  {
    id: 1,
    title: "Impacto",
    type: "Série",
    genre: "Ação",
    year: 2026,
    rating: "8.8",
    image: "images/impacto.jpg",
    background: "images/impacto-bg.jpg",
    description: "Quando o sistema falha, justiça se torna escolha."
  },

  {
    id: 2,
    title: "Stranger Things",
    type: "Série",
    genre: "Ficção científica",
    year: 2016,
    rating: "8.7",
    image: "images/stranger-things.jpg",
    background: "images/stranger-things-bg.jpg",
    description: "Um desaparecimento coloca uma pequena cidade no centro de um mistério sobrenatural."
  },

  {
    id: 3,
    title: "Lupin",
    type: "Série",
    genre: "Policial",
    year: 2021,
    rating: "7.5",
    image: "images/lupin.jpg",
    background: "images/lupin-bg.jpg",
    description: "Um ladrão elegante prepara golpes impossíveis."
  },

  {
    id: 4,
    title: "La Casa de Papel",
    type: "Série",
    genre: "Crime",
    year: 2017,
    rating: "8.3",
    image: "images/casa-de-papel.jpg",
    background: "images/casa-de-papel-bg.jpg",
    description: "Um grupo executa um plano ousado."
  },

  {
    id: 5,
    title: "The Witcher",
    type: "Série",
    genre: "Fantasia",
    year: 2019,
    rating: "8.2",
    image: "images/witcher.jpg",
    background: "images/witcher-bg.jpg",
    description: "Um caçador de monstros percorre um mundo perigoso."
  },

  {
    id: 6,
    title: "Wednesday",
    type: "Série",
    genre: "Terror",
    year: 2022,
    rating: "8.2",
    image: "images/wednesday.jpg",
    background: "images/wednesday-bg.jpg",
    description: "Uma estudante excêntrica investiga mistérios."
  },

  {
    id: 7,
    title: "One Piece",
    type: "Série",
    genre: "Aventura",
    year: 2023,
    rating: "8.6",
    image: "images/one-piece.jpg",
    background: "images/one-piece-bg.jpg",
    description: "Uma tripulação parte em busca de um grande tesouro."
  },

  {
    id: 8,
    title: "O Guardião da Noite",
    type: "Filme",
    genre: "Ação",
    year: 2026,
    rating: "8.0",
    image: "images/guardiao.jpg",
    background: "images/guardiao-bg.jpg",
    description: "Uma noite muda tudo."
  },

  {
    id: 9,
    title: "Entre Dois Mundos",
    type: "Filme",
    genre: "Drama",
    year: 2026,
    rating: "8.1",
    image: "images/dois-mundos.jpg",
    background: "images/dois-mundos-bg.jpg",
    description: "Duas realidades encontram-se."
  },

  {
    id: 10,
    title: "O Legado Escondido",
    type: "Filme",
    genre: "Aventura",
    year: 2026,
    rating: "8.4",
    image: "images/legado.jpg",
    background: "images/legado-bg.jpg",
    description: "Um segredo antigo é descoberto."
  }
];


/* =====================================================
   MINHA LISTA
===================================================== */

let minhaLista = JSON.parse(
  localStorage.getItem("vip_lista") || "[]"
);

function guardarLista() {
  localStorage.setItem(
    "vip_lista",
    JSON.stringify(minhaLista)
  );
}


/* =====================================================
   CABEÇALHO
===================================================== */

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


/* =====================================================
   MENU SUPERIOR
===================================================== */

function menuSuperior() {
  return `
    <div class="nav">

      <button onclick="home()">
        Início
      </button>

      <button onclick="explore()">
        Explorar
      </button>

      <button onclick="filmes()">
        Filmes
      </button>

      <button onclick="series()">
        Séries
      </button>

      <button onclick="novidades()">
        Novidades
      </button>

      <button onclick="favorites()">
        Minha Lista
      </button>

    </div>
  `;
}


/* =====================================================
   MENU INFERIOR
===================================================== */

function menuInferior() {
  return `
    <nav class="bottom">

      <button onclick="home()">
        <b>⌂</b>
        <span>Início</span>
      </button>

      <button onclick="explore()">
        <b>▦</b>
        <span>Explorar</span>
      </button>

      <button onclick="downloads()">
        <b>⇩</b>
        <span>Downloads</span>
      </button>

      <button onclick="favorites()">
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


/* =====================================================
   CARD
===================================================== */

function card(movie) {
  return `
    <article
      class="card"
      onclick="details(${movie.id})">

      <div
        class="poster"
        style="
          background-image:
          url('${movie.image}');
        "
      >

        <span class="poster-title">
          ${movie.title}
        </span>

        <span class="play-circle">
          ▶
        </span>

      </div>

      <div class="card-info">

        <h3>
          ${movie.title}
        </h3>

        <div class="muted">
          ⭐ ${movie.rating} · ${movie.year}
        </div>

      </div>

    </article>
  `;
}


/* =====================================================
   PÁGINA INICIAL
===================================================== */

function home() {

  const destaque = data[0];

  A.innerHTML = `

    ${header()}

    ${menuSuperior()}

    <section
      class="hero"
      style="
        background-image:
        linear-gradient(
          to right,
          rgba(0,0,0,.96),
          rgba(0,0,0,.55),
          rgba(0,0,0,.25)
        ),
        url('${destaque.background}');
      "
    >

      <div class="hero-content">

        <div class="eyebrow">
          N  SÉRIE
        </div>

        <h1>
          ${destaque.title}
        </h1>

        <p>
          ${destaque.description}
        </p>

        <button
          class="btn primary"
          onclick="watch(${destaque.id})">
          ▶ Assistir
        </button>

        <button
          class="btn dark"
          onclick="details(${destaque.id})">
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

        ${data.slice(1, 5).map(card).join("")}

      </div>

    </section>


    <section class="section">

      <div class="section-head">

        <h2>
          Populares na VipNetflix
        </h2>

      </div>

      <div class="row">

        ${data.slice(0, 7).map(card).join("")}

      </div>

    </section>


    <section class="section">

      <div class="section-head">

        <h2>
          Lançamentos
        </h2>

      </div>

      <div class="row">

        ${data.slice(7).map(card).join("")}

      </div>

    </section>

    ${menuInferior()}

  `;
}


/* =====================================================
   EXPLORAR
===================================================== */

function explore() {

  A.innerHTML = `

    ${header()}

    ${menuSuperior()}

    <section class="section">

      <h1>
        Explorar
      </h1>

      <input
        class="search"
        placeholder="Procurar filmes e séries..."
        oninput="pesquisar(this.value)"
      >

      <div
        id="resultados"
        class="grid">

        ${data.map(card).join("")}

      </div>

    </section>

    ${menuInferior()}

  `;
}


/* =====================================================
   PESQUISA
===================================================== */

function pesquisar(texto) {

  const resultados =
    document.getElementById("resultados");

  if (!resultados) return;

  const textoNormalizado =
    texto.toLowerCase().trim();

  const encontrados =
    data.filter(movie =>
      movie.title
        .toLowerCase()
        .includes(textoNormalizado)
    );

  resultados.innerHTML =
    encontrados.length
      ? encontrados.map(card).join("")
      : `
        <p class="muted">
          Nenhum conteúdo encontrado.
        </p>
      `;
}


/* =====================================================
   FILMES
===================================================== */

function filmes() {

  const filmes =
    data.filter(movie =>
      movie.type === "Filme"
    );

  A.innerHTML = `

    ${header()}

    ${menuSuperior()}

    <section class="section">

      <h1>
        Filmes
      </h1>

      <div class="grid">

        ${filmes.map(card).join("")}

      </div>

    </section>

    ${menuInferior()}

  `;
}


/* =====================================================
   SÉRIES
===================================================== */

function series() {

  const series =
    data.filter(movie =>
      movie.type === "Série"
    );

  A.innerHTML = `

    ${header()}

    ${menuSuperior()}

    <section class="section">

      <h1>
        Séries
      </h1>

      <div class="grid">

        ${series.map(card).join("")}

      </div>

    </section>

    ${menuInferior()}

  `;
}


/* =====================================================
   NOVIDADES
===================================================== */

function novidades() {

  A.innerHTML = `

    ${header()}

    ${menuSuperior()}

    <section class="section">

      <h1>
        Novidades
      </h1>

      <div class="grid">

        ${data.slice(-4).map(card).join("")}

      </div>

    </section>

    ${menuInferior()}

  `;
}


/* =====================================================
   DETALHES
===================================================== */

function details(id) {

  const movie =
    data.find(item => item.id === id);

  if (!movie) return;

  const adicionada =
    minhaLista.includes(movie.id);

  A.innerHTML = `

    ${header()}

    <section
      class="detail-hero"
      style="
        background-image:
        linear-gradient(
          to right,
          rgba(0,0,0,.95),
          rgba(0,0,0,.4)
        ),
        url('${movie.background}');
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
          · ⭐ ${movie.rating}
          · ${movie.genre}
        </div>

        <p class="detail-desc">
          ${movie.description}
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
            adicionada
              ? "♥ Na Minha Lista"
              : "＋ Minha Lista"
          }

        </button>

      </div>

    </section>

    ${menuInferior()}

  `;
}


/* =====================================================
   MINHA LISTA
===================================================== */

function toggleList(id) {

  if (minhaLista.includes(id)) {

    minhaLista =
      minhaLista.filter(
        item => item !== id
      );

  } else {

    minhaLista.push(id);

  }

  guardarLista();

  details(id);
}


function favorites() {

  const favoritos =
    data.filter(movie =>
      minhaLista.includes(movie.id)
    );

  A.innerHTML = `

    ${header()}

    ${menuSuperior()}

    <section class="section">

      <h1>
        Minha Lista
      </h1>

      ${
        favoritos.length
          ? `
            <div class="grid">
              ${favoritos.map(card).join("")}
            </div>
          `
          : `
            <div class="box center">

              <h2>
                A tua lista está vazia
              </h2>

              <p class="muted">
                Adiciona filmes e séries
                para aparecerem aqui.
              </p>

            </div>
          `
      }

    </section>

    ${menuInferior()}

  `;
}


/* =====================================================
   DOWNLOADS
===================================================== */

function downloads() {

  A.innerHTML = `

    ${header()}

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

    ${menuInferior()}

  `;
}


/* =====================================================
   PERFIL
===================================================== */

function profile() {

  A.innerHTML = `

    ${header()}

    <section class="profile">

      <h1>
        Perfil
      </h1>

      <div class="box">

        <div class="avatar">
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
          Planos
        </button>

      </div>

    </section>

    ${menuInferior()}

  `;
}


/* =====================================================
   PLANOS
===================================================== */

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

    ${menuInferior()}

  `;
}


/* =====================================================
   PAGAMENTO
===================================================== */

function payment(plano, valor) {

  A.innerHTML = `

    ${header()}

    <section class="section">

      <h1>
        Pagamento
      </h1>

      <div class="box">

        <h2>
          Plano ${plano}
        </h2>

        <p class="muted">
          ${valor} MT por mês
        </p>

        <input
          id="nome"
          class="search"
          placeholder="Nome completo"
        >

        <input
          id="telefone"
          class="search"
          placeholder="Número de telefone"
          type="tel"
        >

        <select
          id="metodo"
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
          onclick="confirmarPagamento()">

          Continuar

        </button>

      </div>

    </section>

    ${menuInferior()}

  `;
}


function confirmarPagamento() {

  const nome =
    document.getElementById("nome").value;

  const telefone =
    document.getElementById("telefone").value;

  if (!nome || !telefone) {

    alert(
      "Preencha o nome e o número de telefone."
    );

    return;
  }

  alert(
    "Pedido criado com sucesso!"
  );
}


/* =====================================================
   PLAYER
===================================================== */

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
          url('${movie.background}');
          background-size: cover;
          background-position: center;
        "
      >

        <button
          class="icon"
          onclick="details(${movie.id})">

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
          ${movie.year} · ${movie.genre}
        </p>

        <p class="detail-desc">
          ${movie.description}
        </p>

      </div>

    </main>

  `;
}


/* =====================================================
   INICIAR
===================================================== */

home();
