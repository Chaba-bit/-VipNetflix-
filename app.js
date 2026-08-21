/* =========================================================
   VIPNETFLIX
   APP.JS
========================================================= */


/* =========================================================
   CATÁLOGO
========================================================= */

const catalog = [

  {
    id: 1,
    title: "Reacher",
    type: "series",
    genre: "Ação",
    year: 2022,
    rating: 8.5,
    seasons: 2,
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=600&q=80",
    description:
      "Um investigador militar viaja pelo país enquanto enfrenta crimes e conspirações.",
    episodes: 8
  },

  {
    id: 2,
    title: "Percy Jackson e os Olimpianos",
    type: "series",
    genre: "Fantasia",
    year: 2023,
    rating: 8.1,
    seasons: 2,
    image:
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80",
    description:
      "Um jovem descobre que faz parte de um mundo cheio de deuses e criaturas.",
    episodes: 8
  },

  {
    id: 3,
    title: "Homem-Aranha",
    type: "movie",
    genre: "Ação",
    year: 2026,
    rating: 8.4,
    seasons: 0,
    image:
      "https://images.unsplash.com/photo-1635805737707-575885ab0820?auto=format&fit=crop&w=600&q=80",
    description:
      "Um herói precisa enfrentar novos desafios enquanto protege sua cidade."
  },

  {
    id: 4,
    title: "The Witcher",
    type: "series",
    genre: "Fantasia",
    year: 2019,
    rating: 8.2,
    seasons: 4,
    image:
      "https://images.unsplash.com/photo-1518709594023-6eab9bab7b23?auto=format&fit=crop&w=600&q=80",
    description:
      "Um caçador de monstros enfrenta perigos em um mundo fantástico.",
    episodes: 8
  },

  {
    id: 5,
    title: "A Casa do Dragão",
    type: "series",
    genre: "Drama",
    year: 2022,
    rating: 8.4,
    seasons: 2,
    image:
      "https://images.unsplash.com/photo-1518709779341-56cf4535e94b?auto=format&fit=crop&w=600&q=80",
    description:
      "Uma disputa pelo poder coloca uma poderosa família em conflito.",
    episodes: 8
  },

  {
    id: 6,
    title: "Stranger Things",
    type: "series",
    genre: "Ficção",
    year: 2016,
    rating: 8.7,
    seasons: 5,
    image:
      "https://images.unsplash.com/photo-1514539079130-25950c84af65?auto=format&fit=crop&w=600&q=80",
    description:
      "Um grupo de jovens descobre acontecimentos misteriosos em sua cidade.",
    episodes: 8
  },

  {
    id: 7,
    title: "O Voto de Morte",
    type: "movie",
    genre: "Drama",
    year: 2025,
    rating: 8.0,
    seasons: 0,
    image:
      "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=600&q=80",
    description:
      "Uma história de mistério, escolhas e consequências."
  },

  {
    id: 8,
    title: "Aventura VIP",
    type: "movie",
    genre: "Aventura",
    year: 2026,
    rating: 8.8,
    seasons: 0,
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=600&q=80",
    description:
      "Uma aventura começa quando uma equipe encontra um segredo inesperado."
  }

];


/* =========================================================
   ESTADO
========================================================= */

let favorites =
  JSON.parse(localStorage.getItem("vipFavorites") || "[]");

let downloads =
  JSON.parse(localStorage.getItem("vipDownloads") || "[]");

let continueWatching =
  JSON.parse(localStorage.getItem("vipContinue") || "[]");

let currentSeries = null;


/* =========================================================
   ELEMENTOS
========================================================= */

const welcomeScreen =
  document.getElementById("welcomeScreen");

const accountScreen =
  document.getElementById("accountScreen");

const appScreen =
  document.getElementById("appScreen");


/* =========================================================
   INICIALIZAÇÃO
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  renderAll();

  updateStorage();

  setupEvents();

});


/* =========================================================
   EVENTOS
========================================================= */

function setupEvents() {

  document.getElementById("enterBtn")
    .addEventListener("click", openAccount);

  document.getElementById("backBtn")
    .addEventListener("click", backToWelcome);

  document.getElementById("createAccountBtn")
    .addEventListener("click", createAccount);

  document.getElementById("menuBtn")
    .addEventListener("click", openMenu);

  document.getElementById("searchBtn")
    .addEventListener("click", openSearch);

  document.getElementById("menuOverlay")
    .addEventListener("click", closeMenu);

  document.getElementById("searchInput")
    .addEventListener("input", searchCatalog);

  document.getElementById("seasonSelect")
    .addEventListener("change", renderEpisodes);

}


/* =========================================================
   CONTA
========================================================= */

function openAccount() {

  welcomeScreen.style.display = "none";
  accountScreen.style.display = "flex";

}


function backToWelcome() {

  accountScreen.style.display = "none";
  welcomeScreen.style.display = "flex";

}


function createAccount() {

  const name =
    document.getElementById("nameInput").value.trim();

  const email =
    document.getElementById("emailInput").value.trim();

  const password =
    document.getElementById("passwordInput").value;

  const message =
    document.getElementById("accountMessage");


  if (!name || !email || !password) {

    message.textContent =
      "Preencha todos os campos.";

    message.style.color = "#ff4444";

    return;
  }


  if (password.length < 4) {

    message.textContent =
      "A senha precisa ter pelo menos 4 caracteres.";

    message.style.color = "#ff4444";

    return;
  }


  const user = {
    name,
    email
  };


  localStorage.setItem(
    "vipUser",
    JSON.stringify(user)
  );


  message.textContent =
    "Conta criada com sucesso!";

  message.style.color = "#5ee65e";


  setTimeout(() => {

    accountScreen.style.display = "none";
    appScreen.style.display = "block";

    document.getElementById("profileName")
      .textContent = name;

    window.scrollTo(0,0);

  }, 700);

}


/* =========================================================
   NAVEGAÇÃO
========================================================= */

function showPage(pageId) {

  document.querySelectorAll(".page")
    .forEach(page => {

      page.classList.remove("active-page");

    });


  const page =
    document.getElementById(pageId);

  if (page) {

    page.classList.add("active-page");

  }


  document.querySelectorAll(".nav-item")
    .forEach(item => {

      item.classList.remove("active");

      if (item.dataset.page === pageId) {

        item.classList.add("active");

      }

    });


  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });


  renderAll();

}


/* =========================================================
   MENU
========================================================= */

function openMenu() {

  document
    .getElementById("sideMenu")
    .classList.add("open");

  document
    .getElementById("menuOverlay")
    .classList.add("show");

}


function closeMenu() {

  document
    .getElementById("sideMenu")
    .classList.remove("open");

  document
    .getElementById("menuOverlay")
    .classList.remove("show");

}


/* =========================================================
   PESQUISA
========================================================= */

function openSearch() {

  document
    .getElementById("searchModal")
    .classList.add("open");

  document
    .getElementById("searchInput")
    .focus();

}


function closeSearch() {

  document
    .getElementById("searchModal")
    .classList.remove("open");

}


function searchCatalog() {

  const query =
    document
      .getElementById("searchInput")
      .value
      .toLowerCase()
      .trim();

  const results =
    document.getElementById("searchResults");


  if (!query) {

    results.innerHTML =
      `<p style="color:#777;margin-top:20px">
        Digite o nome de um filme ou série.
       </p>`;

    return;
  }


  const found =
    catalog.filter(item =>
      item.title.toLowerCase().includes(query)
    );


  if (!found.length) {

    results.innerHTML =
      `<p style="color:#777;margin-top:20px">
        Nenhum conteúdo encontrado.
       </p>`;

    return;
  }


  results.innerHTML =
    found.map(item => `

      <div
        class="search-result"
        onclick="openContent(${item.id})">

        <div
          class="search-result-image"
          style="background-image:url('${item.image}')">
        </div>

        <div>
          <strong>${item.title}</strong>
          <p style="color:#888">
            ${item.genre} • ${item.year}
          </p>
        </div>

      </div>

    `).join("");

}


/* =========================================================
   PLAYER
========================================================= */

function playContent(title) {

  addContinue(title);

  document
    .getElementById("playerTitle")
    .textContent = title;

  document
    .getElementById("playerModal")
    .classList.add("open");

}


function closePlayer() {

  document
    .getElementById("playerModal")
    .classList.remove("open");

}


function startDemoVideo() {

  alert(
    "Player pronto. Agora você pode conectar aqui o vídeo autorizado do seu servidor."
  );

}


/* =========================================================
   CONTINUAR ASSISTINDO
========================================================= */

function addContinue(title) {

  if (!continueWatching.includes(title)) {

    continueWatching.unshift(title);

  }

  continueWatching =
    continueWatching.slice(0,10);

  localStorage.setItem(
    "vipContinue",
    JSON.stringify(continueWatching)
  );

  renderContinue();

}


function clearContinue() {

  continueWatching = [];

  localStorage.removeItem("vipContinue");

  renderContinue();

}


function renderContinue() {

  const container =
    document.getElementById("continueCards");

  if (!container) return;


  const items =
    continueWatching
      .map(title =>
        catalog.find(item =>
          item.title === title
        )
      )
      .filter(Boolean);


  if (!items.length) {

    container.innerHTML = `
      <div style="
        color:#777;
        padding:20px 0;
      ">
        Nenhum conteúdo em andamento.
      </div>
    `;

    return;
  }


  container.innerHTML =
    items.map(item =>
      posterHTML(item,true)
    ).join("");

}


/* =========================================================
   DOWNLOAD
========================================================= */

function downloadEpisode(
  title,
  episode,
  quality,
  size
) {

  const already =
    downloads.some(
      item =>
        item.title === title &&
        item.episode === episode
    );


  if (already) {

    alert("Este conteúdo já está nos downloads.");

    showPage("downloadsPage");

    return;
  }


  const numericSize =
    parseFloat(size) || 850;


  downloads.push({

    id: Date.now(),

    title,

    episode,

    quality,

    size,

    numericSize,

    image:
      getImage(title),

    date:
      new Date().toLocaleDateString("pt-PT")

  });


  localStorage.setItem(
    "vipDownloads",
    JSON.stringify(downloads)
  );


  updateStorage();

  renderDownloads();


  alert(
    `${title} ${episode} foi adicionado aos Downloads.`
  );

}


function removeDownload(id) {

  downloads =
    downloads.filter(
      item => item.id !== id
    );


  localStorage.setItem(
    "vipDownloads",
    JSON.stringify(downloads)
  );


  updateStorage();

  renderDownloads();

}


/* =========================================================
   STORAGE
========================================================= */

function updateStorage() {

  const used =
    downloads.reduce(
      (sum,item) =>
        sum + Number(item.numericSize || 0),
      0
    );


  const max =
    64 * 1024;


  const percentage =
    Math.min(
      100,
      (used / max) * 100
    );


  const text =
    `${formatMB(used)} usados de 64 GB`;


  const storageText =
    document.getElementById("storageText");

  const largeStorageText =
    document.getElementById("largeStorageText");

  const storageProgress =
    document.getElementById("storageProgress");

  const largeStorageProgress =
    document.getElementById("largeStorageProgress");


  if (storageText)
    storageText.textContent = text;

  if (largeStorageText)
    largeStorageText.textContent = text;

  if (storageProgress)
    storageProgress.style.width =
      percentage + "%";

  if (largeStorageProgress)
    largeStorageProgress.style.width =
      percentage + "%";

}


function formatMB(mb) {

  if (mb >= 1024) {

    return (
      (mb / 1024).toFixed(1) +
      " GB"
    );

  }

  return (
    Math.round(mb) +
    " MB"
  );

}


/* =========================================================
   FAVORITOS
========================================================= */

function addFavorite(title) {

  if (favorites.includes(title)) {

    favorites =
      favorites.filter(
        item => item !== title
      );

    alert(
      `${title} foi removido da sua lista.`
    );

  } else {

    favorites.push(title);

    alert(
      `${title} foi adicionado à sua lista.`
    );

  }


  localStorage.setItem(
    "vipFavorites",
    JSON.stringify(favorites)
  );


  renderFavorites();

}


function renderFavorites() {

  const container =
    document.getElementById("favoritesGrid");

  if (!container) return;


  const items =
    favorites
      .map(title =>
        catalog.find(item =>
          item.title === title
        )
      )
      .filter(Boolean);


  if (!items.length) {

    container.innerHTML = `
      <div style="
        grid-column:1/-1;
        color:#777;
        text-align:center;
        padding:60px 20px;
      ">
        <div style="font-size:45px">♥</div>
        <h3 style="color:white;margin:15px">
          Nenhum favorito ainda
        </h3>
        <p>
          Adicione conteúdos usando
          "MINHA LISTA".
        </p>
      </div>
    `;

    return;
  }


  container.innerHTML =
    items
      .map(item => catalogHTML(item))
      .join("");

}


/* =========================================================
   SÉRIE
========================================================= */

function openContent(id) {

  const item =
    catalog.find(x => x.id === id);

  if (!item) return;


  if (item.type === "series") {

    openSeries(item);

  } else {

    playContent(item.title);

  }

}


function openSeries(item) {

  currentSeries = item;


  document
    .getElementById("modalTitle")
    .textContent = item.title;


  document
    .getElementById("modalDescription")
    .textContent = item.description;


  document
    .getElementById("modalPoster")
    .style.backgroundImage =
      `url('${item.image}')`;


  const select =
    document.getElementById("seasonSelect");


  select.innerHTML = "";


  for (
    let i = 1;
    i <= item.seasons;
    i++
  ) {

    const option =
      document.createElement("option");

    option.value = i;

    option.textContent =
      `Temporada ${i}`;

    select.appendChild(option);

  }


  renderEpisodes();


  document
    .getElementById("seriesModal")
    .classList.add("open");

}


function closeSeries() {

  document
    .getElementById("seriesModal")
    .classList.remove("open");

}


function renderEpisodes() {

  if (!currentSeries) return;


  const season =
    Number(
      document.getElementById("seasonSelect").value
    ) || 1;


  const container =
    document.getElementById("episodesList");


  const total =
    currentSeries.episodes || 8;


  container.innerHTML =
    Array.from(
      {length: total},
      (_,index) => {

        const episode =
          index + 1;

        const ep =
          `T${season}:E${episode}`;


        return `

          <div class="episode">

            <div class="episode-info">

              <h3>
                Episódio ${episode}
              </h3>

              <p>
                ${ep} • 45 min
              </p>

            </div>

            <div class="episode-buttons">

              <button
                onclick="playContent('${escapeJS(currentSeries.title)} ${ep}')">
                ▶
              </button>

              <button
                onclick="downloadEpisode(
                  '${escapeJS(currentSeries.title)}',
                  '${ep}',
                  '720p',
                  '850 MB'
                )">
                ↓
              </button>

            </div>

          </div>

        `;

      }
    ).join("");

}


/* =========================================================
   RENDERIZAÇÃO
========================================================= */

function renderAll() {

  renderContinue();

  renderReleases();

  renderCatalog();

  renderDownloads();

  renderFavorites();

  renderRecommendations();

  updateStorage();

}


/* =========================================================
   LANÇAMENTOS
========================================================= */

function renderReleases() {

  const home =
    document.getElementById("releaseCards");

  const all =
    document.getElementById("allReleaseGrid");


  const releases =
    catalog.slice(0,6);


  if (home) {

    home.innerHTML =
      releases
        .map(item => posterHTML(item))
        .join("");

  }


  if (all) {

    all.innerHTML =
      catalog
        .map(item => catalogHTML(item))
        .join("");

  }

}


/* =========================================================
   CATÁLOGO
========================================================= */

function renderCatalog() {

  const container =
    document.getElementById("catalogGrid");

  if (!container) return;


  container.innerHTML =
    catalog
      .map(item => catalogHTML(item))
      .join("");

}


/* =========================================================
   RECOMENDAÇÕES
========================================================= */

function renderRecommendations() {

  const container =
    document.getElementById("recommendationCards");

  if (!container) return;


  container.innerHTML =
    catalog
      .slice(2,7)
      .map(item => posterHTML(item))
      .join("");

}


/* =========================================================
   DOWNLOADS
========================================================= */

function renderDownloads() {

  const container =
    document.getElementById("downloadsList");

  if (!container) return;


  if (!downloads.length) {

    container.innerHTML = `

      <div class="empty-downloads">

        <div>⬇</div>

        <h3>
          Nenhum download ainda
        </h3>

        <p>
          Os episódios que você baixar
          aparecerão aqui para acesso
          offline dentro do aplicativo.
        </p>

      </div>

    `;

    return;
  }


  container.innerHTML =
    downloads
      .map(item => `

        <div class="download-item">

          <div
            class="download-image"
            style="
              background-image:url('${item.image}')
            ">
          </div>

          <div class="download-info">

            <h3>
              ${item.title}
            </h3>

            <p>
              ${item.episode} •
              ${item.quality} •
              ${item.size}
            </p>

            <p class="download-status">
              Baixado ✓
            </p>

          </div>

          <button
            class="download-watch"
            onclick="playContent('${escapeJS(item.title)}')">
            ▶
          </button>

          <button
            class="card-menu"
            onclick="removeDownload(${item.id})">
            ×
          </button>

        </div>

      `).join("");

}


/* =========================================================
   POSTER HTML
========================================================= */

function posterHTML(item) {

  return `

    <div class="poster-card">

      <div
        class="poster-image"
        style="
          background-image:url('${item.image}')
        "
        onclick="openContent(${item.id})">

        <div class="poster-play">
          ▶
        </div>

        <div class="poster-progress"></div>

      </div>

      <h3>
        ${item.title}
      </h3>

      <p>
        ${item.type === "series"
          ? "Série"
          : "Filme"}
      </p>

    </div>

  `;

}


/* =========================================================
   CATALOG HTML
========================================================= */

function catalogHTML(item) {

  return `

    <div class="catalog-card">

      <div
        class="catalog-poster"
        style="
          background-image:url('${item.image}')
        "
        onclick="openContent(${item.id})">

        <button
          class="card-menu"
          onclick="
            event.stopPropagation();
            addFavorite('${escapeJS(item.title)}')
          ">
          ♥
        </button>

      </div>

      <h3>
        ${item.title}
      </h3>

      <p>
        ${item.year} •
        ${item.genre} •
        ★ ${item.rating}
      </p>

    </div>

  `;

}


/* =========================================================
   IMAGEM
========================================================= */

function getImage(title) {

  const item =
    catalog.find(
      x => x.title === title
    );


  if (item) {

    return item.image;

  }


  return catalog[0].image;

}


/* =========================================================
   ESCAPE
========================================================= */

function escapeJS(text) {

  return String(text)
    .replace(/\\/g,"\\\\")
    .replace(/'/g,"\\'")
    .replace(/"/g,'\\"');

}


/* =========================================================
   UTILIZADOR GUARDADO
========================================================= */

function loadUser() {

  const user =
    JSON.parse(
      localStorage.getItem("vipUser") || "null"
    );


  if (user) {

    document
      .getElementById("profileName")
      .textContent = user.name;

  }

}


loadUser();
