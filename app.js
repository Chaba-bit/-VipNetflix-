/* =========================================================
   VIPNETFLIX — APP.JS
========================================================= */


/* =========================================================
   ELEMENTOS
========================================================= */

const splashScreen = document.getElementById("splashScreen");
const appScreen = document.getElementById("appScreen");

const enterButton = document.getElementById("enterButton");

const menuButton = document.getElementById("menuButton");
const sideMenu = document.getElementById("sideMenu");
const menuOverlay = document.getElementById("menuOverlay");

const searchButton = document.getElementById("searchButton");
const searchBox = document.getElementById("searchBox");
const searchInput = document.getElementById("searchInput");
const closeSearch = document.getElementById("closeSearch");

const continueList = document.getElementById("continueList");
const catalogList = document.getElementById("catalogList");
const downloadList = document.getElementById("downloadList");
const genresList = document.getElementById("genresList");
const favoritesList = document.getElementById("favoritesList");

const searchResultsSection =
  document.getElementById("searchResultsSection");

const searchResults =
  document.getElementById("searchResults");

const playerModal =
  document.getElementById("playerModal");

const detailsModal =
  document.getElementById("detailsModal");

const toast =
  document.getElementById("toast");


/* =========================================================
   DADOS DO CATÁLOGO
========================================================= */

const catalog = [

  {
    id: 1,
    title: "Reacher",
    type: "Série",
    genre: "Ação",
    year: 2022,
    rating: 8.7,
    seasons: "2 Temporadas",
    description:
      "Um investigador militar viaja pelo país e acaba envolvido numa perigosa investigação.",
    image:
      "https://images.unsplash.com/photo-1599685315640-4eab9f2a2a35?auto=format&fit=crop&w=600&q=80"
  },

  {
    id: 2,
    title: "Aventura VIP",
    type: "Filme",
    genre: "Aventura",
    year: 2026,
    rating: 8.8,
    seasons: "Filme",
    description:
      "Uma aventura extraordinária começa quando uma equipa encontra um segredo perdido.",
    image:
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=600&q=80"
  },

  {
    id: 3,
    title: "Além do Espaço",
    type: "Filme",
    genre: "Ficção científica",
    year: 2026,
    rating: 8.2,
    seasons: "Filme",
    description:
      "Uma missão espacial revela um segredo inesperado.",
    image:
      "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=600&q=80"
  },

  {
    id: 4,
    title: "O Voto de Morte",
    type: "Série",
    genre: "Drama",
    year: 2026,
    rating: 8.4,
    seasons: "1 Temporada",
    description:
      "Uma decisão muda completamente o destino de um grupo de pessoas.",
    image:
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=600&q=80"
  },

  {
    id: 5,
    title: "Percy Jackson",
    type: "Série",
    genre: "Fantasia",
    year: 2026,
    rating: 8.5,
    seasons: "1 Temporada",
    description:
      "Um jovem descobre um mundo de deuses, monstros e aventuras.",
    image:
      "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=600&q=80"
  },

  {
    id: 6,
    title: "Homem-Aranha",
    type: "Filme",
    genre: "Ação",
    year: 2026,
    rating: 8.9,
    seasons: "Filme",
    description:
      "Um novo desafio coloca o herói diante de uma ameaça inesperada.",
    image:
      "https://images.unsplash.com/photo-1635805737707-575885ab0820?auto=format&fit=crop&w=600&q=80"
  },

  {
    id: 7,
    title: "The Witcher",
    type: "Série",
    genre: "Fantasia",
    year: 2025,
    rating: 8.6,
    seasons: "4 Temporadas",
    description:
      "Um caçador de monstros percorre um mundo cheio de perigos.",
    image:
      "https://images.unsplash.com/photo-1518709594023-6eab9bab7b23?auto=format&fit=crop&w=600&q=80"
  },

  {
    id: 8,
    title: "A Casa do Dragão",
    type: "Série",
    genre: "Fantasia",
    year: 2025,
    rating: 8.8,
    seasons: "2 Temporadas",
    description:
      "Uma guerra pelo poder coloca uma família contra outra.",
    image:
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80"
  },

  {
    id: 9,
    title: "Stranger Things",
    type: "Série",
    genre: "Ficção científica",
    year: 2025,
    rating: 8.9,
    seasons: "5 Temporadas",
    description:
      "Um grupo de jovens enfrenta acontecimentos misteriosos.",
    image:
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=600&q=80"
  },

  {
    id: 10,
    title: "O Conde de Monte Cristo",
    type: "Série",
    genre: "Drama",
    year: 2025,
    rating: 8.3,
    seasons: "1 Temporada",
    description:
      "Uma história de injustiça, sobrevivência e vingança.",
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=600&q=80"
  },

  {
    id: 11,
    title: "O Problema dos 3 Corpos",
    type: "Série",
    genre: "Ficção científica",
    year: 2024,
    rating: 8.1,
    seasons: "1 Temporada",
    description:
      "Uma descoberta científica ameaça mudar o futuro da humanidade.",
    image:
      "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?auto=format&fit=crop&w=600&q=80"
  },

  {
    id: 12,
    title: "Operação Lioness",
    type: "Série",
    genre: "Ação",
    year: 2024,
    rating: 8.2,
    seasons: "2 Temporadas",
    description:
      "Uma missão secreta coloca uma equipa de agentes em perigo.",
    image:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=600&q=80"
  }

];


/* =========================================================
   CONTINUAR ASSISTINDO
========================================================= */

const continueWatching = [
  {
    id: 4,
    progress: 64,
    remaining: "1h 32m restantes"
  },

  {
    id: 5,
    progress: 42,
    remaining: "S1:E3"
  },

  {
    id: 6,
    progress: 58,
    remaining: "1h 05m restantes"
  }
];


/* =========================================================
   DOWNLOADS
========================================================= */

let downloads = [
  {
    id: 7,
    title: "The Witcher",
    episode: "T2:E4",
    quality: "720p",
    size: 1.2,
    image: catalog.find(x => x.id === 7).image
  },

  {
    id: 8,
    title: "A Casa do Dragão",
    episode: "S1:E6",
    quality: "720p",
    size: 1.1,
    image: catalog.find(x => x.id === 8).image
  },

  {
    id: 9,
    title: "Stranger Things",
    episode: "S1:E7",
    quality: "720p",
    size: 1.0,
    image: catalog.find(x => x.id === 9).image
  }
];


/* =========================================================
   FAVORITOS
========================================================= */

let favorites =
  JSON.parse(
    localStorage.getItem("vipnetflix_favorites") || "[]"
  );


/* =========================================================
   SPLASH
========================================================= */

enterButton.addEventListener("click", () => {

  splashScreen.style.opacity = "0";
  splashScreen.style.transition = "opacity .4s";

  setTimeout(() => {

    splashScreen.classList.add("hidden");
    appScreen.classList.remove("hidden");

  }, 400);

});


/* =========================================================
   MENU
========================================================= */

menuButton.addEventListener("click", () => {

  sideMenu.classList.add("open");
  menuOverlay.classList.remove("hidden");

});

menuOverlay.addEventListener("click", closeMenu);

function closeMenu() {

  sideMenu.classList.remove("open");
  menuOverlay.classList.add("hidden");

}


/* =========================================================
   PESQUISA
========================================================= */

searchButton.addEventListener("click", () => {

  searchBox.classList.remove("hidden");

  searchInput.focus();

});

closeSearch.addEventListener("click", () => {

  searchInput.value = "";

  searchBox.classList.add("hidden");

  searchResultsSection.classList.add("hidden");

});


searchInput.addEventListener("input", () => {

  const value =
    searchInput.value
      .trim()
      .toLowerCase();

  if (!value) {

    searchResultsSection.classList.add("hidden");

    return;
  }

  const results =
    catalog.filter(movie =>

      movie.title
        .toLowerCase()
        .includes(value)

      ||

      movie.genre
        .toLowerCase()
        .includes(value)

    );

  searchResultsSection.classList.remove("hidden");

  renderGrid(
    searchResults,
    results
  );

});


/* =========================================================
   RENDER CONTINUAR
========================================================= */

function renderContinue() {

  continueList.innerHTML = "";

  continueWatching.forEach(item => {

    const movie =
      catalog.find(
        x => x.id === item.id
      );

    if (!movie) return;

    const card =
      document.createElement("article");

    card.className = "continue-card";

    card.innerHTML = `

      <div class="poster-wrapper">

        <img
          src="${movie.image}"
          alt="${movie.title}"
        >

        <button
          class="poster-play"
          data-play="${movie.id}"
        >
          ▶
        </button>

        <div class="progress">
          <div style="width:${item.progress}%"></div>
        </div>

      </div>

      <div class="card-title">
        ${movie.title}
      </div>

      <div class="card-subtitle">
        ${item.remaining}
      </div>

    `;

    continueList.appendChild(card);

  });

}


/* =========================================================
   RENDER CATÁLOGO
========================================================= */

function renderGrid(container, items) {

  container.innerHTML = "";

  if (!items.length) {

    container.innerHTML = `
      <p style="
        color:#888;
        padding:20px;
        grid-column:1/-1;
        text-align:center;
      ">
        Nenhum conteúdo encontrado.
      </p>
    `;

    return;
  }

  items.forEach(movie => {

    const card =
      document.createElement("article");

    card.className = "poster-card";

    card.innerHTML = `

      <div class="poster-wrapper">

        <img
          src="${movie.image}"
          alt="${movie.title}"
          loading="lazy"
        >

        <button
          class="poster-play"
          data-play="${movie.id}"
        >
          ▶
        </button>

      </div>

      <h3>${movie.title}</h3>

      <p>
        ${movie.year} • ${movie.genre}
      </p>

    `;

    card.addEventListener("click", event => {

      if (
        event.target.closest(".poster-play")
      ) {

        openPlayer(movie);

        return;
      }

      openDetails(movie);

    });

    container.appendChild(card);

  });

}


/* =========================================================
   DOWNLOADS
========================================================= */

function renderDownloads() {

  downloadList.innerHTML = "";

  downloads.forEach(download => {

    const item =
      document.createElement("div");

    item.className = "download-item";

    item.innerHTML = `

      <img
        class="download-image"
        src="${download.image}"
        alt="${download.title}"
      >

      <div class="download-info">

        <strong>
          ${download.title}
        </strong>

        <span>
          ${download.episode} ·
          ${download.quality} ·
          ${download.size.toFixed(1)} GB
        </span>

        <span class="download-status">
          Baixado ✓
        </span>

      </div>

      <button
        class="offline-button"
        data-offline="${download.id}"
      >
        ▶ ASSISTIR OFFLINE
      </button>

      <button
        class="download-menu"
        data-remove-download="${download.id}"
      >
        ⋮
      </button>

    `;

    downloadList.appendChild(item);

  });

  updateStorage();

}


/* =========================================================
   STORAGE
========================================================= */

function updateStorage() {

  const used =
    downloads.reduce(
      (total, item) =>
        total + item.size,
      0
    );

  const totalStorage = 64;

  const available =
    totalStorage - used;

  document.getElementById(
    "storageUsed"
  ).textContent =
    used.toFixed(1) + " GB";

  document.getElementById(
    "storageAvailable"
  ).textContent =
    available.toFixed(1) + " GB";

  const percentage =
    Math.min(
      (used / totalStorage) * 100,
      100
    );

  document.getElementById(
    "storageProgress"
  ).style.width =
    percentage + "%";

}


/* =========================================================
   ADICIONAR DOWNLOAD
========================================================= */

function addDownload(movie) {

  const already =
    downloads.some(
      x => x.id === movie.id
    );

  if (already) {

    showToast(
      "Este conteúdo já está nos downloads."
    );

    return;
  }

  downloads.push({

    id: movie.id,

    title: movie.title,

    episode:
      movie.type === "Série"
        ? "S1:E1"
        : "Filme",

    quality: "720p",

    size: 1.0,

    image: movie.image

  });

  renderDownloads();

  showToast(
    `${movie.title} adicionado aos downloads.`
  );

}


/* =========================================================
   PLAYER
========================================================= */

function openPlayer(movie) {

  document.getElementById(
    "playerTitle"
  ).textContent =
    movie.title;

  playerModal.classList.remove(
    "hidden"
  );

}

document.getElementById(
  "closePlayer"
).addEventListener("click", () => {

  playerModal.classList.add(
    "hidden"
  );

});


document.getElementById(
  "playVideo"
).addEventListener("click", () => {

  showToast(
    "Player pronto para reproduzir o vídeo autorizado."
  );

});


/* =========================================================
   DETALHES
========================================================= */

let selectedMovie = null;

function openDetails(movie) {

  selectedMovie = movie;

  document.getElementById(
    "detailsImage"
  ).src = movie.image;

  document.getElementById(
    "detailsTitle"
  ).textContent = movie.title;

  document.getElementById(
    "detailsDescription"
  ).textContent =
    movie.description;

  detailsModal.classList.remove(
    "hidden"
  );

}


document.getElementById(
  "closeDetails"
).addEventListener("click", () => {

  detailsModal.classList.add(
    "hidden"
  );

});


document.getElementById(
  "detailsPlay"
).addEventListener("click", () => {

  if (!selectedMovie) return;

  detailsModal.classList.add(
    "hidden"
  );

  openPlayer(
    selectedMovie
  );

});


document.getElementById(
  "detailsDownload"
).addEventListener("click", () => {

  if (!selectedMovie) return;

  addDownload(
    selectedMovie
  );

});


/* =========================================================
   BOTÃO BAIXAR DO HERO
========================================================= */

document.getElementById(
  "downloadHero"
).addEventListener("click", () => {

  const movie =
    catalog.find(
      x => x.title === "Reacher"
    );

  addDownload(movie);

});


/* =========================================================
   CONTINUAR DO HERO
========================================================= */

document.getElementById(
  "continueHero"
).addEventListener("click", () => {

  const movie =
    catalog.find(
      x => x.title === "Reacher"
    );

  openPlayer(movie);

});


/* =========================================================
   FAVORITO DO HERO
========================================================= */

document.getElementById(
  "favoriteHero"
).addEventListener("click", () => {

  const movie =
    catalog.find(
      x => x.title === "Reacher"
    );

  toggleFavorite(movie);

});


/* =========================================================
   FAVORITOS
========================================================= */

function toggleFavorite(movie) {

  const index =
    favorites.indexOf(movie.id);

  if (index >= 0) {

    favorites.splice(index, 1);

    showToast(
      "Removido dos favoritos."
    );

  } else {

    favorites.push(movie.id);

    showToast(
      "Adicionado aos favoritos ♥"
    );

  }

  localStorage.setItem(
    "vipnetflix_favorites",
    JSON.stringify(favorites)
  );

  renderFavorites();

}


function renderFavorites() {

  const items =
    catalog.filter(
      movie =>
        favorites.includes(
          movie.id
        )
    );

  renderGrid(
    favoritesList,
    items
  );

}


/* =========================================================
   GÉNEROS
========================================================= */

function renderGenres() {

  const genres = [
    "Ação",
    "Aventura",
    "Drama",
    "Comédia",
    "Fantasia",
    "Ficção científica",
    "Terror",
    "Romance",
    "Documentário",
    "Suspense"
  ];

  genresList.innerHTML = "";

  genres.forEach(genre => {

    const card =
      document.createElement("button");

    card.className =
      "genre-card";

    card.textContent =
      genre;

    card.addEventListener(
      "click",
      () => {

        const movies =
          catalog.filter(
            movie =>
              movie.genre === genre
          );

        showSection("catalog");

        renderGrid(
          catalogList,
          movies
        );

      }
    );

    genresList.appendChild(card);

  });

}


/* =========================================================
   NAVEGAÇÃO
========================================================= */

function hideSections() {

  document.getElementById(
    "continueSection"
  ).classList.add("hidden");

  document.getElementById(
    "downloadsSection"
  ).classList.add("hidden");

  document.getElementById(
    "catalogSection"
  ).classList.add("hidden");

  document.getElementById(
    "genresSection"
  ).classList.add("hidden");

  document.getElementById(
    "favoritesSection"
  ).classList.add("hidden");

}


function showSection(section) {

  closeMenu();

  hideSections();

  searchResultsSection.classList.add(
    "hidden"
  );

  if (section === "home") {

    document.getElementById(
      "continueSection"
    ).classList.remove("hidden");

    document.getElementById(
      "downloadsSection"
    ).classList.remove("hidden");

    document.getElementById(
      "catalogSection"
    ).classList.remove("hidden");

  }

  if (section === "catalog") {

    document.getElementById(
      "catalogSection"
    ).classList.remove("hidden");

    renderGrid(
      catalogList,
      catalog
    );

  }

  if (section === "downloads") {

    document.getElementById(
      "downloadsSection"
    ).classList.remove("hidden");

  }

  if (section === "genres") {

    document.getElementById(
      "genresSection"
    ).classList.remove("hidden");

  }

  if (section === "favorites") {

    document.getElementById(
      "favoritesSection"
    ).classList.remove("hidden");

    renderFavorites();

  }

  document
    .querySelectorAll(".nav-item")
    .forEach(button => {

      button.classList.toggle(
        "active",
        button.dataset.section === section
      );

    });

}


/* =========================================================
   BOTÕES DE NAVEGAÇÃO
========================================================= */

document
  .querySelectorAll(
    ".nav-item, .side-menu button"
  )
  .forEach(button => {

    button.addEventListener(
      "click",
      () => {

        const section =
          button.dataset.section;

        if (!section) return;

        if (
          section === "releases"
        ) {

          showSection("catalog");

          renderGrid(
            catalogList,
            catalog.slice(0, 6)
          );

          return;
        }

        showSection(section);

      }
    );

  });


/* =========================================================
   VER TODOS
========================================================= */

document.getElementById(
  "showAll"
).addEventListener("click", () => {

  showSection("catalog");

});


document.getElementById(
  "viewDownloads"
).addEventListener("click", () => {

  showSection("downloads");

});


/* =========================================================
   LIMPAR CONTINUAR
========================================================= */

document.getElementById(
  "clearContinue"
).addEventListener("click", () => {

  continueWatching.length = 0;

  renderContinue();

  showToast(
    "Lista de continuar assistindo limpa."
  );

});


/* =========================================================
   DOWNLOAD — EVENTOS
========================================================= */

downloadList.addEventListener(
  "click",
  event => {

    const offline =
      event.target.closest(
        "[data-offline]"
      );

    if (offline) {

      const id =
        Number(
          offline.dataset.offline
        );

      const download =
        downloads.find(
          x => x.id === id
        );

      if (download) {

        const movie =
          catalog.find(
            x => x.id === id
          ) || {
            title: download.title
          };

        openPlayer(movie);

      }

      return;
    }

    const remove =
      event.target.closest(
        "[data-remove-download]"
      );

    if (remove) {

      const id =
        Number(
          remove.dataset.removeDownload
        );

      downloads =
        downloads.filter(
          x => x.id !== id
        );

      renderDownloads();

      showToast(
        "Download removido."
      );

    }

  }
);


/* =========================================================
   TOAST
========================================================= */

let toastTimer;

function showToast(message) {

  toast.textContent =
    message;

  toast.classList.add("show");

  clearTimeout(toastTimer);

  toastTimer =
    setTimeout(() => {

      toast.classList.remove(
        "show"
      );

    }, 2500);

}


/* =========================================================
   INICIALIZAÇÃO
========================================================= */

renderContinue();

renderGrid(
  catalogList,
  catalog
);

renderDownloads();

renderFavorites();

renderGenres();

showSection("home");


/* =========================================================
   VOLTAR DO ANDROID
========================================================= */

window.addEventListener(
  "popstate",
  () => {

    if (
      !playerModal.classList.contains(
        "hidden"
      )
    ) {

      playerModal.classList.add(
        "hidden"
      );

      return;
    }

    if (
      !detailsModal.classList.contains(
        "hidden"
      )
    ) {

      detailsModal.classList.add(
        "hidden"
      );

      return;
    }

    if (
      sideMenu.classList.contains(
        "open"
      )
    ) {

      closeMenu();

    }

  }
);
