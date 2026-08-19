const A = document.getElementById("app");

const data = [
  {
    id: 1,
    title: "Impacto",
    type: "Série",
    genre: "Ação",
    year: 2026,
    rating: "8.8",
    image: "images/impacto.jpg",
    desc: "Quando o sistema falha, justiça se torna escolha."
  },
  {
    id: 2,
    title: "Stranger Things",
    type: "Série",
    genre: "Ficção científica · Terror · Mistério",
    year: 2016,
    rating: "8.7",
    image: "images/stranger-things.jpg",
    desc: "Um desaparecimento coloca uma pequena cidade no centro de um mistério sobrenatural."
  },
  {
    id: 3,
    title: "Lupin",
    type: "Série",
    genre: "Policial",
    year: 2021,
    rating: "7.5",
    image: "images/lupin.jpg",
    desc: "Um ladrão elegante prepara golpes impossíveis."
  },
  {
    id: 4,
    title: "La Casa de Papel",
    type: "Série",
    genre: "Crime",
    year: 2017,
    rating: "8.3",
    image: "images/762016.jpeg",
    desc: "Um grupo executa um plano ousado que pode mudar suas vidas."
  },
  {
    id: 5,
    title: "The Witcher",
    type: "Série",
    genre: "Fantasia",
    year: 2019,
    rating: "8.2",
    image: "images/the-witcher.jpg",
    desc: "Um caçador de monstros percorre um mundo perigoso."
  },
  {
    id: 6,
    title: "Wednesday",
    type: "Série",
    genre: "Terror · Mistério",
    year: 2022,
    rating: "8.2",
    image: "images/wednesday.jpg",
    desc: "Uma estudante excêntrica investiga mistérios."
  },
  {
    id: 7,
    title: "One Piece",
    type: "Série",
    genre: "Aventura",
    year: 2023,
    rating: "8.6",
    image: "images/one-piece.jpg",
    desc: "Uma tripulação parte em busca de um grande tesouro."
  },
  {
    id: 8,
    title: "O Guardião da Noite",
    type: "Filme",
    genre: "Ação",
    year: 2026,
    rating: "8.0",
    image: "images/guardiao-da-noite.jpg",
    desc: "Uma noite muda tudo."
  },
  {
    id: 9,
    title: "Entre Dois Mundos",
    type: "Filme",
    genre: "Drama",
    year: 2026,
    rating: "8.1",
    image: "images/entre-dois-mundos.jpg",
    desc: "Duas realidades diferentes acabam se encontrando."
  },
  {
    id: 10,
    title: "O Legado Escondido",
    type: "Filme",
    genre: "Aventura",
    year: 2026,
    rating: "8.4",
    image: "images/legado-escondido.jpg",
    desc: "Um segredo antigo é descoberto."
  }
];

let minhaLista = JSON.parse(
  localStorage.getItem("vip_list") || "[]"
);

function salvarLista() {
  localStorage.setItem(
    "vip_list",
    JSON.stringify(minhaLista)
  );
}

function imagem(m) {
  return `
    <img
      src="${m.image}"
      alt="${m.title}"
      class="poster-image"
      onerror="this.style.display='none'"
    >
  `;
}

function card(m) {
  return `
    <article class="card" onclick="detalhes(${m.id})">

      <div class="poster">
        ${imagem(m)}

        <div class="poster-overlay">
          <strong>${m.title}</strong>
          <span>${m.type}</span>
        </div>
      </div>

      <div class="card-info">
        <h3>${m.title}</h3>
        <div class="muted">
          ⭐ ${m.rating} · ${m.year}
        </div>
      </div>

    </article>
  `;
}

function cards(lista) {
  if (lista.length === 0) {
    return `
      <p class="muted">
        Nenhum conteúdo encontrado.
      </p>
    `;
  }

  return `
    <div class="grid">
      ${lista.map(card).join("")}
    </div>
  `;
}

function header() {
  return `
    <header class="top">

      <div
        class="logo"
        onclick="home()"
      >
        <span>Vip</span>Netflix
      </div>

      <div class="top-actions">

        <button
          class="icon"
          onclick="explorar()"
        >
          ⌕
        </button>

        <button
          class="icon"
          onclick="perfil()"
        >
          ◉
        </button>

        <div
          class="avatar"
          onclick="perfil()"
        >
          👤
        </div>

      </div>

    </header>
  `;
}

function nav() {
  return `
    <div class="nav">

      <button onclick="home()">
        Início
      </button>

      <button onclick="explorar()">
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

      <button onclick="minhaLista()">
        Minha Lista
      </button>

    </div>
  `;
}

function bottom() {
  return `
    <nav class="bottom">

      <button onclick="home()">
        <b>⌂</b>
        <span>Início</span>
      </button>

      <button onclick="explorar()">
        <b>⌕</b>
        <span>Explorar</span>
      </button>

      <button onclick="filmes()">
        <b>▣</b>
        <span>Filmes</span>
      </button>

      <button onclick="series()">
        <b>▶</b>
        <span>Séries</span>
      </button>

      <button onclick="minhaLista()">
        <b>♡</b>
        <span>Minha Lista</span>
      </button>

    </nav>
  `;
}

function home() {

  A.innerHTML = `

    ${header()}
    ${nav()}

    <main>

      <section class="hero">

        <div class="hero-content">

          <span class="badge">
            SÉRIE
          </span>

          <h1>IMPACTO</h1>

          <p>
            Quando o sistema falha,
            justiça se torna escolha.
          </p>

          <button
            class="btn"
            onclick="detalhes(1)"
          >
            ▶ Assistir
          </button>

        </div>

      </section>

      <section class="section">

        <h2>Populares na VipNetflix</h2>

        ${cards(data.slice(0, 7))}

      </section>

      <section class="section">

        <h2>Filmes</h2>

        ${cards(
          data.filter(
            m => m.type === "Filme"
          )
        )}

      </section>

    </main>

    ${bottom()}

  `;
}

function explorar() {

  A.innerHTML = `

    ${header()}
    ${nav()}

    <main class="section">

      <h1>Explorar</h1>

      <input
        id="pesquisa"
        class="search"
        type="search"
        placeholder="Pesquisar filmes e séries..."
        oninput="pesquisar(this.value)"
      >

      <div id="resultado">
        ${cards(data)}
      </div>

    </main>

    ${bottom()}

  `;
}

function pesquisar(texto) {

  const termo = texto
    .toLowerCase()
    .trim();

  const resultado = data.filter(m =>
    m.title.toLowerCase().includes(termo) ||
    m.genre.toLowerCase().includes(termo)
  );

  const area =
    document.getElementById("resultado");

  if (area) {
    area.innerHTML = cards(resultado);
  }
}

function filmes() {

  const lista = data.filter(
    m => m.type === "Filme"
  );

  A.innerHTML = `

    ${header()}
    ${nav()}

    <main class="section">

      <h1>Filmes</h1>

      ${cards(lista)}

    </main>

    ${bottom()}

  `;
}

function series() {

  const lista = data.filter(
    m => m.type === "Série"
  );

  A.innerHTML = `

    ${header()}
    ${nav()}

    <main class="section">

      <h1>Séries</h1>

      ${cards(lista)}

    </main>

    ${bottom()}

  `;
}

function novidades() {

  const lista = [...data]
    .sort(
      (a, b) => b.year - a.year
    );

  A.innerHTML = `

    ${header()}
    ${nav()}

    <main class="section">

      <h1>Novidades</h1>

      ${cards(lista)}

    </main>

    ${bottom()}

  `;
}

function minhaLista() {

  const lista = data.filter(
    m => minhaLista.includes(m.id)
  );

  A.innerHTML = `

    ${header()}
    ${nav()}

    <main class="section">

      <h1>Minha Lista</h1>

      ${
        lista.length
        ? cards(lista)
        : `
          <p class="muted">
            A tua lista está vazia.
          </p>
        `
      }

    </main>

    ${bottom()}

  `;
}

function detalhes(id) {

  const m = data.find(
    item => item.id === id
  );

  if (!m) return;

  const salvo =
    minhaLista.includes(m.id);

  A.innerHTML = `

    ${header()}

    <main>

      <section
        class="detail-hero"
        style="
          background-image:
          linear-gradient(
            to bottom,
            rgba(0,0,0,0.2),
            rgba(0,0,0,0.95)
          ),
          url('${m.image}');
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
            · ${m.genre}
          </div>

          <p>
            ${m.desc}
          </p>

          <button
            class="btn"
            onclick="assistir(${m.id})"
          >
            ▶ Assistir
          </button>

          <button
            class="btn secondary"
            onclick="alternarLista(${m.id})"
          >
            ${
              salvo
              ? "✓ Na Minha Lista"
              : "+ Minha Lista"
            }
          </button>

        </div>

      </section>

    </main>

    ${bottom()}

  `;
}

function alternarLista(id) {

  if (minhaLista.includes(id)) {

    minhaLista =
      minhaLista.filter(
        item => item !== id
      );

  } else {

    minhaLista.push(id);

  }

  salvarLista();

  detalhes(id);
}

function perfil() {

  A.innerHTML = `

    ${header()}
    ${nav()}

    <main class="section">

      <h1>Perfil</h1>

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

      </div>

    </main>

    ${bottom()}

  `;
}

function assistir(id) {

  const m = data.find(
    item => item.id === id
  );

  if (!m) return;

  A.innerHTML = `

    ${header()}

    <main class="section">

      <div class="video">

        <div class="video-center">
          ▶
        </div>

      </div>

      <h1>${m.title}</h1>

      <p class="muted">
        ${m.year} · ${m.genre}
      </p>

      <button
        class="btn"
        onclick="detalhes(${m.id})"
      >
        ← Voltar
      </button>

    </main>

    ${bottom()}

  `;
}


/* =====================================================
   INICIAR APP
   ===================================================== */

home();
