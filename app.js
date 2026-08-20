/* =========================================================
   VIPNETFLIX — APP.JS
   Versão inicial compatível com o novo index.html
========================================================= */

"use strict";

/* =========================================================
   DADOS
========================================================= */

const catalog = [
  {
    id: 1,
    title: "Aventura VIP",
    type: "movie",
    genre: "Aventura",
    year: 2026,
    rating: 8.8,
    description: "Uma aventura especial para começar sua experiência VIPNETFLIX.",
    image: "",
    video: ""
  },
  {
    id: 2,
    title: "Impacto",
    type: "movie",
    genre: "Ação",
    year: 2026,
    rating: 8.7,
    description: "Uma equipa enfrenta uma ameaça que pode mudar o futuro.",
    image: "",
    video: ""
  },
  {
    id: 3,
    title: "Além do Espaço",
    type: "movie",
    genre: "Ficção científica",
    year: 2026,
    rating: 8.2,
    description: "Uma missão espacial revela um segredo inesperado.",
    image: "",
    video: ""
  },
  {
    id: 4,
    title: "Noite de Cinema",
    type: "movie",
    genre: "Drama",
    year: 2026,
    rating: 8.1,
    description: "Uma história de drama para toda a família.",
    image: "",
    video: ""
  },
  {
    id: 5,
    title: "Cidade Sombria",
    type: "series",
    genre: "Crime",
    year: 2026,
    rating: 8.9,
    description: "Uma investigação leva uma equipa aos segredos de uma cidade.",
    image: "",
    video: ""
  },
  {
    id: 6,
    title: "Horizonte",
    type: "series",
    genre: "Drama",
    year: 2026,
    rating: 8.5,
    description: "Uma série sobre escolhas, família e novos caminhos.",
    image: "",
    video: ""
  },
  {
    id: 7,
    title: "Missão Final",
    type: "series",
    genre: "Ação",
    year: 2026,
    rating: 9.0,
    description: "Uma equipa recebe uma missão que pode ser a última.",
    image: "",
    video: ""
  },
  {
    id: 8,
    title: "Universo Zero",
    type: "series",
    genre: "Ficção científica",
    year: 2026,
    rating: 8.6,
    description: "Uma descoberta muda tudo o que a humanidade conhece.",
    image: "",
    video: ""
  }
];


/* =========================================================
   ESTADO DA APLICAÇÃO
========================================================= */

let currentUser = null;
let currentProfile = null;
let selectedPlan = null;
let selectedPayment = null;
let featuredContent = catalog[0];

let myList = JSON.parse(
  localStorage.getItem("vipnetflix_mylist") || "[]"
);

let history = JSON.parse(
  localStorage.getItem("vipnetflix_history") || "[]"
);

let downloads = JSON.parse(
  localStorage.getItem("vipnetflix_downloads") || "[]"
);


/* =========================================================
   UTILITÁRIOS
========================================================= */

function $(id) {
  return document.getElementById(id);
}


function escapeHTML(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}


function saveData() {
  localStorage.setItem(
    "vipnetflix_mylist",
    JSON.stringify(myList)
  );

  localStorage.setItem(
    "vipnetflix_history",
    JSON.stringify(history)
  );

  localStorage.setItem(
    "vipnetflix_downloads",
    JSON.stringify(downloads)
  );
}


function showToast(message) {
  const toast = $("toast");

  if (!toast) return;

  toast.textContent = message;
  toast.classList.add("show");

  clearTimeout(window.vipToastTimer);

  window.vipToastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
}


/* =========================================================
   AUTENTICAÇÃO
========================================================= */

function showAuthForm(form) {

  const forms = [
    "loginForm",
    "registerForm",
    "forgotForm"
  ];

  forms.forEach(id => {
    const element = $(id);

    if (element) {
      element.classList.add("hidden");
    }
  });

  const selected = $(form + "Form");

  if (selected) {
    selected.classList.remove("hidden");
  }
}


function loginUser() {

  const email = $("loginEmail")?.value.trim();
  const password = $("loginPassword")?.value;

  if (!email || !password) {
    showToast("Preencha o email e a palavra-passe.");
    return;
  }

  currentUser = {
    name: email.split("@")[0],
    email: email
  };

  localStorage.setItem(
    "vipnetflix_user",
    JSON.stringify(currentUser)
  );

  showProfileScreen();

  showToast("Login realizado com sucesso.");
}


function registerUser() {

  const name = $("registerName")?.value.trim();
  const email = $("registerEmail")?.value.trim();
  const phone = $("registerPhone")?.value.trim();
  const password = $("registerPassword")?.value;
  const confirm = $("registerPasswordConfirm")?.value;

  if (!name || !email || !phone || !password || !confirm) {
    showToast("Preencha todos os campos.");
    return;
  }

  if (password !== confirm) {
    showToast("As palavras-passe não coincidem.");
    return;
  }

  currentUser = {
    name,
    email,
    phone
  };

  localStorage.setItem(
    "vipnetflix_user",
    JSON.stringify(currentUser)
  );

  showProfileScreen();

  showToast("Conta criada com sucesso.");
}


function recoverPassword() {

  const email = $("forgotEmail")?.value.trim();

  if (!email) {
    showToast("Digite seu email.");
    return;
  }

  showToast(
    "Se o email estiver cadastrado, você receberá as instruções."
  );

  showAuthForm("login");
}


function logoutUser() {

  currentUser = null;
  currentProfile = null;

  localStorage.removeItem("vipnetflix_user");

  const mainApp = $("mainApp");
  const profileScreen = $("profileScreen");
  const authScreen = $("authScreen");

  if (mainApp) mainApp.classList.add("hidden");
  if (profileScreen) profileScreen.classList.add("hidden");
  if (authScreen) authScreen.classList.remove("hidden");

  showAuthForm("login");

  showToast("Sessão encerrada.");
}


/* =========================================================
   PERFIS
========================================================= */

function showProfileScreen() {

  const authScreen = $("authScreen");
  const profileScreen = $("profileScreen");
  const mainApp = $("mainApp");

  if (authScreen) authScreen.classList.add("hidden");
  if (mainApp) mainApp.classList.add("hidden");
  if (profileScreen) profileScreen.classList.remove("hidden");

  renderProfiles();
}


function getProfiles() {

  const saved = JSON.parse(
    localStorage.getItem("vipnetflix_profiles") || "[]"
  );

  if (saved.length > 0) {
    return saved;
  }

  return [
    {
      id: 1,
      name: currentUser?.name || "Meu perfil",
      avatar: "👤"
    }
  ];
}


function saveProfiles(profiles) {

  localStorage.setItem(
    "vipnetflix_profiles",
    JSON.stringify(profiles)
  );
}


function renderProfiles() {

  const container = $("profilesList");

  if (!container) return;

  const profiles = getProfiles();

  container.innerHTML = profiles.map(profile => `
    <button
      class="profile-card"
      type="button"
      onclick="selectProfile(${profile.id})"
    >
      <div class="profile-avatar">
        ${escapeHTML(profile.avatar || "👤")}
      </div>

      <strong>
        ${escapeHTML(profile.name)}
      </strong>
    </button>
  `).join("");
}


function selectProfile(id) {

  const profiles = getProfiles();

  currentProfile = profiles.find(
    profile => profile.id === id
  );

  if (!currentProfile) return;

  const profileScreen = $("profileScreen");
  const mainApp = $("mainApp");

  if (profileScreen) {
    profileScreen.classList.add("hidden");
  }

  if (mainApp) {
    mainApp.classList.remove("hidden");
  }

  updateAccountInfo();
  renderAll();

  showToast(
    `Olá, ${currentProfile.name}!`
  );
}


function createProfile() {

  const name = prompt("Nome do novo perfil:");

  if (!name || !name.trim()) return;

  const profiles = getProfiles();

  const newProfile = {
    id: Date.now(),
    name: name.trim(),
    avatar: "👤"
  };

  profiles.push(newProfile);

  saveProfiles(profiles);
  renderProfiles();

  showToast("Perfil criado.");
}


function changeProfile() {

  const mainApp = $("mainApp");
  const profileScreen = $("profileScreen");

  if (mainApp) mainApp.classList.add("hidden");
  if (profileScreen) profileScreen.classList.remove("hidden");

  renderProfiles();
}


/* =========================================================
   NAVEGAÇÃO
========================================================= */

function showPage(pageId) {

  const pages = document.querySelectorAll(".page");

  pages.forEach(page => {
    page.classList.remove("active");
  });

  const selectedPage = $(pageId);

  if (selectedPage) {
    selectedPage.classList.add("active");
  }

  document.querySelectorAll(
    ".nav-link, .bottom-nav-item"
  ).forEach(button => {

    button.classList.toggle(
      "active",
      button.dataset.page === pageId
    );

  });

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

  if (pageId === "profile") {
    updateAccountInfo();
  }

  if (pageId === "mylist") {
    renderMyList();
  }

  if (pageId === "downloads") {
    renderDownloads();
  }

  if (pageId === "history") {
    renderHistory();
  }

  if (pageId === "plans") {
    selectedPlan = selectedPlan || null;
  }
}


function toggleMobileMenu() {

  const menu = $("mobileMenu");

  if (!menu) return;

  menu.classList.toggle("hidden");
}


/* =========================================================
   CARDS
========================================================= */

function createCard(item, index = 0) {

  const image = item.image
    ? `
      <img
        src="${escapeHTML(item.image)}"
        alt="${escapeHTML(item.title)}"
        loading="lazy"
      >
    `
    : `
      <div class="card-placeholder">
        ${item.type === "series" ? "📺" : "🎬"}
      </div>
    `;

  return `
    <article
      class="content-card"
      data-id="${item.id}"
      onclick="openDetails(${item.id})"
    >

      <div class="card-image">

        ${image}

        ${
          index < 10
            ? `<span class="card-number">${index + 1}</span>`
            : ""
        }

      </div>

      <div class="card-info">

        <h3>
          ${escapeHTML(item.title)}
        </h3>

        <div class="card-meta">
          <span>${escapeHTML(item.year)}</span>
          <span>•</span>
          <span>${escapeHTML(item.genre)}</span>
          <span>•</span>
          <span>⭐ ${escapeHTML(item.rating)}</span>
        </div>

      </div>

    </article>
  `;
}


function renderRow(elementId, items) {

  const container = $(elementId);

  if (!container) return;

  if (!items.length) {
    container.innerHTML = `
      <div class="empty-state">
        Nenhum conteúdo encontrado.
      </div>
    `;
    return;
  }

  container.innerHTML = items
    .map((item, index) => createCard(item, index))
    .join("");
}


function renderGrid(elementId, items) {

  const container = $(elementId);

  if (!container) return;

  if (!items.length) {

    container.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">🎬</div>
        <h2>Nenhum conteúdo encontrado</h2>
        <p>Tente outra categoria.</p>
      </div>
    `;

    return;
  }

  container.innerHTML = items
    .map((item, index) => createCard(item, index))
    .join("");
}


/* =========================================================
   HOME
========================================================= */

function renderHome() {

  const series = catalog.filter(
    item => item.type === "series"
  );

  const movies = catalog.filter(
    item => item.type === "movie"
  );

  renderRow(
    "continueWatching",
    history.slice(0, 10)
      .map(entry => findContent(entry.id))
      .filter(Boolean)
  );

  renderRow(
    "top10",
    catalog
      .slice()
      .sort((a, b) => b.rating - a.rating)
      .slice(0, 10)
  );

  renderRow(
    "trending",
    catalog.slice().reverse()
  );

  renderRow(
    "newReleases",
    catalog
      .slice()
      .sort((a, b) => b.year - a.year)
  );

  renderRow(
    "popularMovies",
    movies
  );

  renderRow(
    "popularSeries",
    series
  );

  renderRow(
    "categoryAction",
    catalog.filter(
      item => item.genre === "Ação"
    )
  );

  renderRow(
    "categoryDrama",
    catalog.filter(
      item => item.genre === "Drama"
    )
  );

  renderRow(
    "categoryComedy",
    catalog.filter(
      item => item.genre === "Comédia"
    )
  );

  renderRow(
    "categorySciFi",
    catalog.filter(
      item => item.genre === "Ficção científica"
    )
  );

  updateHero();
}


function updateHero() {

  if (!featuredContent) return;

  const title = $("heroTitle");
  const description = $("heroDescription");
  const year = $("heroYear");
  const genre = $("heroGenre");
  const hero = $("hero");

  if (title) {
    title.textContent = featuredContent.title;
  }

  if (description) {
    description.textContent =
      featuredContent.description;
  }

  if (year) {
    year.textContent =
      featuredContent.year;
  }

  if (genre) {
    genre.textContent =
      featuredContent.genre;
  }

  if (
    hero &&
    featuredContent.image
  ) {
    hero.style.backgroundImage =
      `url("${featuredContent.image}")`;
  }
}


/* =========================================================
   SÉRIES
========================================================= */

function renderSeries() {

  renderGrid(
    "seriesGrid",
    catalog.filter(
      item => item.type === "series"
    )
  );
}


function filterSeries(category) {

  let results = catalog.filter(
    item => item.type === "series"
  );

  if (category !== "all") {

    const map = {
      action: "Ação",
      drama: "Drama",
      crime: "Crime",
      scifi: "Ficção científica"
    };

    const genre = map[category];

    if (genre) {
      results = results.filter(
        item => item.genre === genre
      );
    }
  }

  renderGrid("seriesGrid", results);
}


/* =========================================================
   FILMES
========================================================= */

function renderMovies() {

  renderGrid(
    "moviesGrid",
    catalog.filter(
      item => item.type === "movie"
    )
  );
}


function filterContent(category) {

  let results = catalog.filter(
    item => item.type === "movie"
  );

  if (category !== "all") {

    const map = {
      action: "Ação",
      adventure: "Aventura",
      drama: "Drama",
      comedy: "Comédia",
      scifi: "Ficção científica"
    };

    const genre = map[category];

    if (genre) {
      results = results.filter(
        item => item.genre === genre
      );
    }
  }

  renderGrid("moviesGrid", results);
}


function renderNew() {

  renderGrid(
    "newGrid",
    catalog
      .slice()
      .sort((a, b) => b.year - a.year)
  );
}


/* =========================================================
   PESQUISA
========================================================= */

function searchContent() {

  const input = $("searchInput");

  if (!input) return;

  const term = input.value
    .trim()
    .toLowerCase();

  if (!term) {

    const results = $("searchResults");

    if (results) {
      results.innerHTML = `
        <p class="empty-state">
          Digite o nome de um filme ou série.
        </p>
      `;
    }

    return;
  }

  const results = catalog.filter(item =>
    item.title.toLowerCase().includes(term) ||
    item.genre.toLowerCase().includes(term) ||
    item.description.toLowerCase().includes(term)
  );

  renderGrid(
    "searchResults",
    results
  );
}


function openCategory(category) {

  showPage("explore");

  const results = catalog.filter(
    item =>
      item.genre.toLowerCase() ===
      category.toLowerCase()
  );

  renderGrid(
    "categoryResults",
    results
  );

  showToast(
    `Categoria: ${category}`
  );
}


/* =========================================================
   DETALHES
========================================================= */

function findContent(id) {

  return catalog.find(
    item => Number(item.id) === Number(id)
  );
}


function openDetails(id) {

  const item = findContent(id);

  if (!item) return;

  const container = $("detailsContent");

  if (!container) return;

  container.innerHTML = `

    <button
      class="secondary-btn"
      type="button"
      onclick="showPage('home')"
    >
      ← Voltar
    </button>

    <div class="details-layout">

      <div class="details-poster">

        ${
          item.image
            ? `<img
                src="${escapeHTML(item.image)}"
                alt="${escapeHTML(item.title)}"
              >`
            : `<div class="details-placeholder">
                ${item.type === "series" ? "📺" : "🎬"}
              </div>`
        }

      </div>

      <div class="details-info">

        <span class="hero-badge">
          ${item.type === "series" ? "SÉRIE" : "FILME"}
        </span>

        <h1>
          ${escapeHTML(item.title)}
        </h1>

        <div class="hero-meta">

          <span>${item.year}</span>
          <span>•</span>
          <span>${escapeHTML(item.genre)}</span>
          <span>•</span>
          <span>⭐ ${item.rating}</span>

        </div>

        <p>
          ${escapeHTML(item.description)}
        </p>

        <div class="hero-actions">

          <button
            class="primary-btn"
            type="button"
            onclick="playContent(${item.id})"
          >
            ▶ Assistir
          </button>

          <button
            class="secondary-btn"
            type="button"
            onclick="toggleMyList(${item.id})"
          >
            ❤️ Minha Lista
          </button>

          <button
            class="secondary-btn"
            type="button"
            onclick="downloadContent(${item.id})"
          >
            ⬇️ Download
          </button>

        </div>

      </div>

    </div>
  `;

  showPage("details");
}


function openFeaturedDetails() {

  if (featuredContent) {
    openDetails(featuredContent.id);
  }
}


/* =========================================================
   MINHA LISTA
========================================================= */

function isInMyList(id) {

  return myList.some(
    item => Number(item.id) === Number(id)
  );
}


function toggleMyList(id) {

  const item = findContent(id);

  if (!item) return;

  if (isInMyList(id)) {

    myList = myList.filter(
      saved => Number(saved.id) !== Number(id)
    );

    showToast("Removido da Minha Lista.");

  } else {

    myList.push(item);

    showToast("Adicionado à Minha Lista.");
  }

  saveData();
  renderMyList();
}


function addFeatured() {

  if (!featuredContent) return;

  toggleMyList(featuredContent.id);
}


function renderMyList() {

  renderGrid(
    "myListGrid",
    myList
  );
}


/* =========================================================
   HISTÓRICO
========================================================= */

function addToHistory(item) {

  history = history.filter(
    entry => Number(entry.id) !== Number(item.id)
  );

  history.unshift({
    ...item,
    watchedAt: Date.now()
  });

  history = history.slice(0, 50);

  saveData();
}


function renderHistory() {

  renderGrid(
    "historyGrid",
    history
  );
}


/* =========================================================
   PLAYER
========================================================= */

function playFeatured() {

  if (!featuredContent) return;

  playContent(
    featuredContent.id
  );
}


function playContent(id) {

  const item = findContent(id);

  if (!item) return;

  addToHistory(item);

  const modal = $("playerModal");
  const video = $("videoPlayer");
  const source = $("videoSource");

  const title = $("playerTitle");
  const description = $("playerDescription");

  if (title) {
    title.textContent = item.title;
  }

  if (description) {
    description.textContent =
      item.description;
  }

  if (!item.video) {

    showToast(
      "O vídeo deste conteúdo ainda não foi configurado."
    );

    return;
  }

  if (source) {
    source.src = item.video;
  }

  if (video) {
    video.load();
  }

  if (modal) {
    modal.classList.add("show");
  }

  if (video) {
    video.play().catch(() => {});
  }
}


function closePlayer() {

  const modal = $("playerModal");
  const video = $("videoPlayer");

  if (video) {
    video.pause();
    video.currentTime = 0;
  }

  if (modal) {
    modal.classList.remove("show");
  }
}


/* =========================================================
   EPISÓDIOS
========================================================= */

function openEpisodeModal(id) {

  const item = findContent(id);

  if (!item) return;

  const modal = $("episodeModal");
  const content = $("episodeModalContent");

  if (!content) return;

  content.innerHTML = `

    <h2>${escapeHTML(item.title)}</h2>

    <p>
      Temporadas e episódios serão adicionados
      ao catálogo desta série.
    </p>

    <button
      class="primary-btn"
      type="button"
      onclick="playContent(${item.id})"
    >
      ▶ Assistir
    </button>

  `;

  if (modal) {
    modal.classList.add("show");
  }
}


function closeEpisodeModal() {

  const modal = $("episodeModal");

  if (modal) {
    modal.classList.remove("show");
  }
}


/* =========================================================
   DOWNLOADS
========================================================= */

function isDownloaded(id) {

  return downloads.some(
    item => Number(item.id) === Number(id)
  );
}


function downloadContent(id) {

  const item = findContent(id);

  if (!item) return;

  if (isDownloaded(id)) {
    showToast("Este conteúdo já está nos downloads.");
    return;
  }

  downloads.push(item);

  saveData();
  renderDownloads();

  showToast(
    `"${item.title}" adicionado aos downloads.`
  );
}


function removeDownload(id) {

  downloads = downloads.filter(
    item => Number(item.id) !== Number(id)
  );

  saveData();
  renderDownloads();

  showToast("Download removido.");
}


function renderDownloads() {

  const grid = $("downloadsGrid");
  const empty = $("emptyDownloads");

  if (!grid) return;

  if (!downloads.length) {

    grid.innerHTML = "";

    if (empty) {
      empty.style.display = "block";
    }

    return;
  }

  if (empty) {
    empty.style.display = "none";
  }

  grid.innerHTML = downloads.map(item => `

    <article class="content-card">

      <div
        onclick="openDetails(${item.id})"
      >

        <div class="card-image">

          ${
            item.image
              ? `<img
                  src="${escapeHTML(item.image)}"
                  alt="${escapeHTML(item.title)}"
                >`
              : `<div class="card-placeholder">🎬</div>`
          }

        </div>

        <div class="card-info">

          <h3>
            ${escapeHTML(item.title)}
          </h3>

        </div>

      </div>

      <button
        class="secondary-btn"
        type="button"
        onclick="removeDownload(${item.id})"
      >
        Remover
      </button>

    </article>

  `).join("");
}


/* =========================================================
   PLANOS
========================================================= */

const plans = {
  "Básico": {
    price: 100
  },

  "Premium": {
    price: 200
  },

  "VIP": {
    price: 300
  }
};


function selectPlan(planName) {

  const plan = plans[planName];

  if (!plan) return;

  selectedPlan = {
    name: planName,
    price: plan.price
  };

  const name = $("selectedPlanName");
  const price = $("selectedPlanPrice");

  if (name) {
    name.textContent =
      selectedPlan.name;
  }

  if (price) {
    price.textContent =
      `${selectedPlan.price} MT / mês`;
  }

  showPage("payment");

  showToast(
    `Plano ${planName} selecionado.`
  );
}


/* =========================================================
   PAGAMENTO
========================================================= */

function choosePayment(method) {

  selectedPayment = method;

  const form = $("paymentForm");

  if (!form) return;

  if (method === "Cartão") {

    form.innerHTML = `

      <h3>Pagamento com cartão</h3>

      <label>Número do cartão</label>

      <input
        type="text"
        inputmode="numeric"
        placeholder="0000 0000 0000 0000"
      >

      <label>Nome no cartão</label>

      <input
        type="text"
        placeholder="Nome completo"
      >

      <div class="payment-row">

        <div>
          <label>Validade</label>
          <input
            type="text"
            placeholder="MM/AA"
          >
        </div>

        <div>
          <label>CVV</label>
          <input
            type="password"
            inputmode="numeric"
            placeholder="123"
          >
        </div>

      </div>

      <button
        class="primary-btn full-btn"
        type="button"
        onclick="processPayment()"
      >
        Pagar agora
      </button>

    `;

  } else {

    form.innerHTML = `

      <h3>
        Pagamento por ${escapeHTML(method)}
      </h3>

      <label>Número de telefone</label>

      <input
        type="tel"
        placeholder="Digite seu número"
      >

      <button
        class="primary-btn full-btn"
        type="button"
        onclick="processPayment()"
      >
        Continuar pagamento
      </button>

    `;
  }
}


function processPayment() {

  if (!selectedPlan) {
    showToast("Escolha um plano primeiro.");
    return;
  }

  if (!selectedPayment) {
    showToast("Escolha uma forma de pagamento.");
    return;
  }

  /*
    IMPORTANTE:
    Esta função é apenas a interface inicial.
    Para cobrar dinheiro de verdade, será necessário
    integrar um gateway de pagamento real.
  */

  showToast(
    `Pagamento preparado: ${selectedPlan.name} — ${selectedPayment}.`
  );
}


/* =========================================================
   CONTA
========================================================= */

function updateAccountInfo() {

  const name = $("accountName");
  const info = $("currentUserInfo");

  if (name) {
    name.textContent =
      currentProfile?.name ||
      currentUser?.name ||
      "Minha conta";
  }

  if (info) {

    info.textContent =
      currentUser?.email ||
      "Conta VIPNETFLIX";
  }
}


/* =========================================================
   INICIALIZAÇÃO
========================================================= */

function renderAll() {

  renderHome();
  renderSeries();
  renderMovies();
  renderNew();
  renderMyList();
  renderDownloads();
  renderHistory();
  updateAccountInfo();
}


function initializeApp() {

  const savedUser = localStorage.getItem(
    "vipnetflix_user"
  );

  if (savedUser) {

    try {

      currentUser =
        JSON.parse(savedUser);

      showProfileScreen();

    } catch (error) {

      localStorage.removeItem(
        "vipnetflix_user"
      );

      showAuthForm("login");
    }

  } else {

    showAuthForm("login");
  }

  renderAll();
}


/* =========================================================
   EVENTOS
========================================================= */

document.addEventListener(
  "keydown",
  event => {

    if (event.key === "Escape") {

      closePlayer();
      closeEpisodeModal();

      const menu = $("mobileMenu");

      if (menu) {
        menu.classList.add("hidden");
      }
    }

  }
);


document.addEventListener(
  "DOMContentLoaded",
  initializeApp
);
