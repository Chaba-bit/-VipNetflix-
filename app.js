/* =====================================================
   VIPNETFLIX - APP.JS
   ===================================================== */

const movies = [
  {
    id: 1,
    type: "movie",
    title: "Exemplo: O Último Horizonte",
    year: 2026,
    genre: "Aventura",
    description: "Substitua este conteúdo por um filme que você tenha autorização para distribuir.",
    poster: "https://placehold.co/600x900/151515/ffffff?text=FILME+1",
    video: "",
    premium: false
  },
  {
    id: 2,
    type: "movie",
    title: "Exemplo: Cidade Sombria",
    year: 2026,
    genre: "Suspense",
    description: "Conteúdo demonstrativo. Substitua pela sua obra licenciada.",
    poster: "https://placehold.co/600x900/151515/ffffff?text=FILME+2",
    video: "",
    premium: true
  },
  {
    id: 3,
    type: "movie",
    title: "Exemplo: Além das Estrelas",
    year: 2026,
    genre: "Ficção científica",
    description: "Conteúdo demonstrativo para testar o catálogo.",
    poster: "https://placehold.co/600x900/151515/ffffff?text=FILME+3",
    video: "",
    premium: false
  }
];

const series = [
  {
    id: 101,
    type: "series",
    title: "Exemplo: Nova Jornada",
    year: 2026,
    genre: "Drama",
    description: "Série demonstrativa. Adicione somente episódios autorizados.",
    poster: "https://placehold.co/600x900/151515/ffffff?text=SERIE+1",
    premium: false
  },
  {
    id: 102,
    type: "series",
    title: "Exemplo: Código Secreto",
    year: 2026,
    genre: "Crime",
    description: "Série demonstrativa para testar a interface.",
    poster: "https://placehold.co/600x900/151515/ffffff?text=SERIE+2",
    premium: true
  }
];

let myList = JSON.parse(
  localStorage.getItem("vipnetflix_mylist") || "[]"
);

let history = JSON.parse(
  localStorage.getItem("vipnetflix_history") || "[]"
);


/* =====================================================
   INICIALIZAÇÃO
   ===================================================== */

document.addEventListener("DOMContentLoaded", () => {
  renderHome();
  renderMovies();
  renderSeries();
  renderMyList();
});


/* =====================================================
   NAVEGAÇÃO
   ===================================================== */

function showPage(pageId) {

  document.querySelectorAll(".page").forEach(page => {
    page.classList.remove("active");
  });

  const page = document.getElementById(pageId);

  if (page) {
    page.classList.add("active");
  }

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

  if (pageId === "mylist") {
    renderMyList();
  }

  if (pageId === "search") {
    setTimeout(() => {
      document.getElementById("searchInput")?.focus();
    }, 100);
  }
}


/* =====================================================
   TODOS OS CONTEÚDOS
   ===================================================== */

function getAllContent() {
  return [...movies, ...series];
}


/* =====================================================
   CRIAR CARD
   ===================================================== */

function createCard(item) {

  const isFavorite = myList.some(
    favorite => favorite.type === item.type &&
                favorite.id === item.id
  );

  const card = document.createElement("div");

  card.className = "movie-card";

  card.innerHTML = `
    <img
      src="${item.poster}"
      alt="${escapeHTML(item.title)}"
      loading="lazy"
    >

    <div class="card-info">

      <h3>${escapeHTML(item.title)}</h3>

      <p>
        ${item.year} • ${escapeHTML(item.genre)}
      </p>

      <div class="card-buttons">

        <button onclick="openDetails(${item.id}, '${item.type}')">
          ▶
        </button>

        <button onclick="toggleMyList(${item.id}, '${item.type}')">
          ${isFavorite ? "♥" : "＋"}
        </button>

      </div>

    </div>
  `;

  return card;
}


/* =====================================================
   HOME
   ===================================================== */

function renderHome() {

  const trending = document.getElementById("trending");
  const popularMovies = document.getElementById("popularMovies");
  const popularSeries = document.getElementById("popularSeries");
  const continueWatching = document.getElementById("continueWatching");

  if (trending) {
    trending.innerHTML = "";

    getAllContent()
      .slice(0, 5)
      .forEach(item => {
        trending.appendChild(createCard(item));
      });
  }

  if (popularMovies) {
    popularMovies.innerHTML = "";

    movies.forEach(item => {
      popularMovies.appendChild(createCard(item));
    });
  }

  if (popularSeries) {
    popularSeries.innerHTML = "";

    series.forEach(item => {
      popularSeries.appendChild(createCard(item));
    });
  }

  if (continueWatching) {
    continueWatching.innerHTML = "";

    const watched = getAllContent().filter(item =>
      history.some(h =>
        h.type === item.type &&
        h.id === item.id
      )
    );

    if (watched.length === 0) {
      continueWatching.innerHTML =
        `<p style="color:#999">Você ainda não começou a assistir.</p>`;
    } else {
      watched.forEach(item => {
        continueWatching.appendChild(createCard(item));
      });
    }
  }
}


/* =====================================================
   FILMES
   ===================================================== */

function renderMovies() {

  const container = document.getElementById("moviesGrid");

  if (!container) return;

  container.innerHTML = "";

  movies.forEach(movie => {
    container.appendChild(createCard(movie));
  });
}


/* =====================================================
   SÉRIES
   ===================================================== */

function renderSeries() {

  const container = document.getElementById("seriesGrid");

  if (!container) return;

  container.innerHTML = "";

  series.forEach(show => {
    container.appendChild(createCard(show));
  });
}


/* =====================================================
   MINHA LISTA
   ===================================================== */

function renderMyList() {

  const container = document.getElementById("myListGrid");

  if (!container) return;

  container.innerHTML = "";

  if (myList.length === 0) {

    container.innerHTML = `
      <p style="color:#999">
        Sua lista está vazia.
      </p>
    `;

    return;
  }

  myList.forEach(item => {

    const content = getAllContent().find(
      content =>
        content.id === item.id &&
        content.type === item.type
    );

    if (content) {
      container.appendChild(createCard(content));
    }
  });
}


/* =====================================================
   MINHA LISTA - ADICIONAR / REMOVER
   ===================================================== */

function toggleMyList(id, type) {

  const index = myList.findIndex(
    item => item.id === id && item.type === type
  );

  if (index >= 0) {

    myList.splice(index, 1);

  } else {

    myList.push({
      id,
      type,
      addedAt: Date.now()
    });
  }

  localStorage.setItem(
    "vipnetflix_mylist",
    JSON.stringify(myList)
  );

  renderHome();
  renderMovies();
  renderSeries();
  renderMyList();
}


/* =====================================================
   PESQUISA
   ===================================================== */

function searchContent() {

  const input = document.getElementById("searchInput");
  const results = document.getElementById("searchResults");

  if (!input || !results) return;

  const query = input.value
    .toLowerCase()
    .trim();

  results.innerHTML = "";

  if (!query) return;

  const matches = getAllContent().filter(item => {

    return (
      item.title.toLowerCase().includes(query) ||
      item.genre.toLowerCase().includes(query) ||
      item.description.toLowerCase().includes(query)
    );

  });

  if (matches.length === 0) {

    results.innerHTML = `
      <p style="color:#999">
        Nenhum conteúdo encontrado.
      </p>
    `;

    return;
  }

  matches.forEach(item => {
    results.appendChild(createCard(item));
  });
}


/* =====================================================
   DETALHES
   ===================================================== */

function openDetails(id, type) {

  const item = getAllContent().find(
    content =>
      content.id === id &&
      content.type === type
  );

  if (!item) return;

  const action = confirm(
    `${item.title}\n\n${item.description}\n\nDeseja assistir agora?`
  );

  if (action) {
    playContent(item);
  }
}


/* =====================================================
   PLAYER
   ===================================================== */

function playFeatured() {

  const featured = movies[0];

  if (featured) {
    playContent(featured);
  }
}


function playContent(item) {

  const modal = document.getElementById("playerModal");
  const video = document.getElementById("videoPlayer");
  const source = document.getElementById("videoSource");
  const title = document.getElementById("playerTitle");
  const description = document.getElementById("playerDescription");

  if (!modal || !video || !source) return;

  title.textContent = item.title;
  description.textContent = item.description;

  if (!item.video) {

    alert(
      "Este conteúdo ainda não possui um vídeo autorizado configurado. " +
      "Adicione a URL de um vídeo que você tenha autorização para distribuir."
    );

    return;
  }

  source.src = item.video;

  video.load();

  modal.classList.add("show");

  saveHistory(item);

  video.play().catch(() => {});
}


function closePlayer() {

  const modal = document.getElementById("playerModal");
  const video = document.getElementById("videoPlayer");

  if (video) {
    video.pause();
    video.currentTime = 0;
  }

  if (modal) {
    modal.classList.remove("show");
  }
}


/* =====================================================
   HISTÓRICO
   ===================================================== */

function saveHistory(item) {

  const existing = history.find(
    h =>
      h.id === item.id &&
      h.type === item.type
  );

  if (!existing) {

    history.push({
      id: item.id,
      type: item.type,
      progress: 0,
      updatedAt: Date.now()
    });

  } else {

    existing.updatedAt = Date.now();
  }

  localStorage.setItem(
    "vipnetflix_history",
    JSON.stringify(history)
  );

  renderHome();
}


/* =====================================================
   FEATURED
   ===================================================== */

function addFeatured() {

  const featured = movies[0];

  if (featured) {
    toggleMyList(
      featured.id,
      featured.type
    );

    alert("Conteúdo atualizado na Minha Lista.");
  }
}


/* =====================================================
   SEGURANÇA BÁSICA DO TEXTO
   ===================================================== */

function escapeHTML(text) {

  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}


/* =====================================================
   FECHAR PLAYER AO CLICAR FORA
   ===================================================== */

document.addEventListener("click", event => {

  const modal = document.getElementById("playerModal");

  if (
    modal &&
    event.target === modal
  ) {
    closePlayer();
  }

});


/* =====================================================
   TECLA ESC
   ===================================================== */

document.addEventListener("keydown", event => {

  if (event.key === "Escape") {
    closePlayer();
  }

});
