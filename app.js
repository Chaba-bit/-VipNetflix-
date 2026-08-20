/* =========================================================
   VIPNETFLIX — APP.JS
========================================================= */

/* =========================================================
   DADOS
========================================================= */

const movies = [
  {
    id: 1,
    title: "Aventura VIP",
    type: "movie",
    genre: "Aventura",
    year: 2026,
    rating: 8.8,
    image: "",
    description: "Conteúdo de demonstração para o catálogo VIPNETFLIX.",
    video: ""
  },
  {
    id: 2,
    title: "Noite de Cinema",
    type: "movie",
    genre: "Drama",
    year: 2026,
    rating: 8.2,
    image: "",
    description: "Filme de demonstração do catálogo.",
    video: ""
  },
  {
    id: 3,
    title: "Além do Espaço",
    type: "movie",
    genre: "Ficção científica",
    year: 2026,
    rating: 8.5,
    image: "",
    description: "Uma missão espacial revela um segredo inesperado.",
    video: ""
  }
];

const series = [
  {
    id: 101,
    title: "1923",
    type: "series",
    genre: "Drama",
    year: 2026,
    rating: 8.7,
    image: "",
    description: "Série de demonstração.",
    seasons: []
  },
  {
    id: 102,
    title: "Alice in Borderland",
    type: "series",
    genre: "Ação",
    year: 2026,
    rating: 8.9,
    image: "",
    description: "Série de demonstração.",
    seasons: []
  },
  {
    id: 103,
    title: "O Problema dos 3 Corpos",
    type: "series",
    genre: "Ficção científica",
    year: 2026,
    rating: 8.6,
    image: "",
    description: "Série de demonstração.",
    seasons: []
  }
];

const catalog = [...movies, ...series];


/* =========================================================
   ESTADO
========================================================= */

let currentUser = null;
let currentProfile = null;
let selectedPlan = null;
let selectedPayment = null;
let featuredItem = catalog[0];


/* =========================================================
   UTILIDADES
========================================================= */

function $(id) {
  return document.getElementById(id);
}

function showToast(message) {
  const toast = $("toast");

  if (!toast) return;

  toast.textContent = message;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
}


/* =========================================================
   AUTENTICAÇÃO
========================================================= */

function showAuthForm(form) {
  const forms = [
    $("loginForm"),
    $("registerForm"),
    $("forgotForm")
  ];

  forms.forEach(item => {
    if (item) item.classList.add("hidden");
  });

  const selected = $(form + "Form");

  if (selected) {
    selected.classList.remove("hidden");
  }
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

  if (password.length < 6) {
    showToast("A palavra-passe deve ter pelo menos 6 caracteres.");
    return;
  }

  const user = {
    name,
    email,
    phone,
    password
  };

  localStorage.setItem("vipnetflix_user", JSON.stringify(user));

  currentUser = user;

  showToast("Conta criada com sucesso!");

  setTimeout(() => {
    openProfileScreen();
  }, 700);
}


function loginUser() {
  const email = $("loginEmail")?.value.trim();
  const password = $("loginPassword")?.value;

  const saved = localStorage.getItem("vipnetflix_user");

  if (!saved) {
    showToast("Nenhuma conta encontrada. Crie uma conta primeiro.");
    return;
  }

  const user = JSON.parse(saved);

  if (email !== user.email || password !== user.password) {
    showToast("Email ou palavra-passe incorretos.");
    return;
  }

  currentUser = user;

  showToast("Login efetuado com sucesso!");

  setTimeout(() => {
    openProfileScreen();
  }, 700);
}


function recoverPassword() {
  const email = $("forgotEmail")?.value.trim();

  if (!email) {
    showToast("Digite seu email.");
    return;
  }

  showToast("Se o email estiver cadastrado, enviaremos as instruções.");
}


/* =========================================================
   PERFIS
========================================================= */

function openProfileScreen() {
  $("authScreen")?.classList.add("hidden");
  $("mainApp")?.classList.add("hidden");
  $("profileScreen")?.classList.remove("hidden");

  loadProfiles();
}


function loadProfiles() {
  const container = $("profilesList");

  if (!container) return;

  const savedProfiles =
    JSON.parse(localStorage.getItem("vipnetflix_profiles") || "[]");

  if (savedProfiles.length === 0) {
    savedProfiles.push({
      id: 1,
      name: currentUser?.name || "Meu perfil",
      icon: "👤"
    });

    localStorage.setItem(
      "vipnetflix_profiles",
      JSON.stringify(savedProfiles)
    );
  }

  container.innerHTML = "";

  savedProfiles.forEach(profile => {
    const button = document.createElement("button");

    button.className = "profile-card";
    button.style.background = "none";
    button.style.border = "0";
    button.style.color = "white";

    button.innerHTML = `
      <div style="
        width:90px;
        height:90px;
        border-radius:8px;
        background:#333;
        display:flex;
        align-items:center;
        justify-content:center;
        font-size:45px;
        margin:auto;
      ">
        ${profile.icon}
      </div>

      <div style="
        margin-top:10px;
        font-weight:bold;
      ">
        ${profile.name}
      </div>
    `;

    button.onclick = () => selectProfile(profile);

    container.appendChild(button);
  });
}


function selectProfile(profile) {
  currentProfile = profile;

  localStorage.setItem(
    "vipnetflix_current_profile",
    JSON.stringify(profile)
  );

  $("profileScreen")?.classList.add("hidden");
  $("mainApp")?.classList.remove("hidden");

  updateAccount();
  renderHome();

  showPage("home");
}


function createProfile() {
  const name = prompt("Digite o nome do novo perfil:");

  if (!name) return;

  const profiles =
    JSON.parse(localStorage.getItem("vipnetflix_profiles") || "[]");

  profiles.push({
    id: Date.now(),
    name,
    icon: "👤"
  });

  localStorage.setItem(
    "vipnetflix_profiles",
    JSON.stringify(profiles)
  );

  loadProfiles();

  showToast("Perfil criado!");
}


function changeProfile() {
  $("mainApp")?.classList.add("hidden");
  $("profileScreen")?.classList.remove("hidden");

  loadProfiles();
}


/* =========================================================
   NAVEGAÇÃO
========================================================= */

function showPage(pageName) {
  document.querySelectorAll(".page").forEach(page => {
    page.classList.remove("active");
  });

  const page = $(pageName);

  if (page) {
    page.classList.add("active");
  }

  document.querySelectorAll(".nav-link").forEach(button => {
    button.classList.remove("active");

    if (button.dataset.page === pageName) {
      button.classList.add("active");
    }
  });

  document.querySelectorAll(".bottom-nav-item").forEach(button => {
    button.classList.remove("active");

    if (button.dataset.page === pageName) {
      button.classList.add("active");
    }
  });

  if (pageName === "home") renderHome();
  if (pageName === "series") renderSeries();
  if (pageName === "movies") renderMovies();
  if (pageName === "new") renderNew();
  if (pageName === "mylist") renderMyList();
  if (pageName === "downloads") renderDownloads();
  if (pageName === "history") renderHistory();
  if (pageName === "explore") renderExplore();
}


function toggleMobileMenu() {
  $("mobileMenu")?.classList.toggle("hidden");
}


/* =========================================================
   CARDS
========================================================= */

function createCard(item) {
  const card = document.createElement("article");

  card.className = "content-card";

  const image = item.image
    ? `<img src="${item.image}" alt="${item.title}">`
    : `
      <div style="
        width:100%;
        aspect-ratio:2/3;
        background:linear-gradient(135deg,#222,#111);
        display:flex;
        align-items:center;
        justify-content:center;
        text-align:center;
        padding:15px;
        font-weight:bold;
      ">
        ${item.title}
      </div>
    `;

  card.innerHTML = `
    ${image}

    <div class="card-info">

      <h3>${item.title}</h3>

      <p>
        ${item.year} • ${item.genre}
      </p>

      <p>
        ⭐ ${item.rating}
      </p>

      <div class="card-buttons">

        <button type="button">
          ▶
        </button>

        <button type="button">
          ＋
        </button>

      </div>

    </div>
  `;

  card.querySelector(".card-buttons button:first-child")
    .onclick = () => playItem(item);

  card.querySelector(".card-buttons button:last-child")
    .onclick = () => addToMyList(item);

  card.onclick = event => {
    if (event.target.tagName === "BUTTON") return;

    openDetails(item);
  };

  return card;
}


function renderItems(containerId, items) {
  const container = $(containerId);

  if (!container) return;

  container.innerHTML = "";

  if (!items.length) {
    container.innerHTML = `
      <div class="empty-state">
        <h2>Nenhum conteúdo encontrado</h2>
      </div>
    `;
    return;
  }

  items.forEach(item => {
    container.appendChild(createCard(item));
  });
}


/* =========================================================
   HOME
========================================================= */

function renderHome() {
  renderItems(
    "continueWatching",
    catalog.slice(0, 3)
  );

  renderItems(
    "top10",
    catalog.slice(0, 6)
  );

  renderItems(
    "trending",
    catalog.slice().reverse()
  );

  renderItems(
    "newReleases",
    catalog.slice(0, 5)
  );

  renderItems(
    "popularMovies",
    movies
  );

  renderItems(
    "popularSeries",
    series
  );

  renderItems(
    "categoryAction",
    catalog.filter(item => item.genre === "Ação")
  );

  renderItems(
    "categoryDrama",
    catalog.filter(item => item.genre === "Drama")
  );

  renderItems(
    "categoryComedy",
    catalog.filter(item => item.genre === "Comédia")
  );

  renderItems(
    "categorySciFi",
    catalog.filter(item => item.genre === "Ficção científica")
  );

  updateHero();
}


function updateHero() {
  if (!featuredItem) return;

  const title = $("heroTitle");
  const description = $("heroDescription");
  const year = $("heroYear");
  const genre = $("heroGenre");
  const hero = $("hero");

  if (title) title.textContent = featuredItem.title;
  if (description) description.textContent = featuredItem.description;
  if (year) year.textContent = featuredItem.year;
  if (genre) genre.textContent = featuredItem.genre;

  if (hero && featuredItem.image) {
    hero.style.backgroundImage = `
      linear-gradient(90deg,#080808 0%,rgba(8,8,8,.7) 45%,rgba(8,8,8,.1)),
      url("${featuredItem.image}")
    `;
    hero.style.backgroundSize = "cover";
    hero.style.backgroundPosition = "center";
  }
}


function playFeatured() {
  playItem(featuredItem);
}


function addFeatured() {
  addToMyList(featuredItem);
}


function openFeaturedDetails() {
  openDetails(featuredItem);
}


/* =========================================================
   SÉRIES
========================================================= */

function renderSeries() {
  renderItems("seriesGrid", series);
}


function filterSeries(filter) {
  if (filter === "all") {
    renderItems("seriesGrid", series);
    return;
  }

  const filtered = series.filter(item => {
    if (filter === "action") return item.genre === "Ação";
    if (filter === "drama") return item.genre === "Drama";
    if (filter === "crime") return item.genre === "Crime";
    if (filter === "scifi") return item.genre === "Ficção científica";

    return true;
  });

  renderItems("seriesGrid", filtered);
}


/* =========================================================
   FILMES
========================================================= */

function renderMovies() {
  renderItems("moviesGrid", movies);
}


function filterContent(filter) {
  if (filter === "all") {
    renderItems("moviesGrid", movies);
    return;
  }

  const filtered = movies.filter(item => {

    const genre = item.genre.toLowerCase();

    if (filter === "action") return genre === "ação";
    if (filter === "adventure") return genre === "aventura";
    if (filter === "drama") return genre === "drama";
    if (filter === "comedy") return genre === "comédia";
    if (filter === "scifi") return genre === "ficção científica";

    return true;
  });

  renderItems("moviesGrid", filtered);
}


/* =========================================================
   NOVIDADES
========================================================= */

function renderNew() {
  renderItems(
    "newGrid",
    catalog.slice().sort((a, b) => b.year - a.year)
  );
}


/* =========================================================
   MINHA LISTA
========================================================= */

function getMyList() {
  return JSON.parse(
    localStorage.getItem("vipnetflix_mylist") || "[]"
  );
}


function addToMyList(item) {
  const list = getMyList();

  if (list.some(x => x.id === item.id)) {
    showToast("Este conteúdo já está na sua lista.");
    return;
  }

  list.push(item);

  localStorage.setItem(
    "vipnetflix_mylist",
    JSON.stringify(list)
  );

  showToast("Adicionado à Minha Lista.");
}


function addFeaturedToList() {
  addToMyList(featuredItem);
}


function renderMyList() {
  renderItems("myListGrid", getMyList());
}


/* =========================================================
   DOWNLOADS
========================================================= */

function getDownloads() {
  return JSON.parse(
    localStorage.getItem("vipnetflix_downloads") || "[]"
  );
}


function downloadItem(item) {
  const downloads = getDownloads();

  if (downloads.some(x => x.id === item.id)) {
    showToast("Já está nos downloads.");
    return;
  }

  downloads.push(item);

  localStorage.setItem(
    "vipnetflix_downloads",
    JSON.stringify(downloads)
  );

  showToast("Adicionado aos downloads.");
}


function renderDownloads() {
  const downloads = getDownloads();

  renderItems("downloadsGrid", downloads);

  const empty = $("emptyDownloads");

  if (empty) {
    empty.style.display =
      downloads.length ? "none" : "block";
  }
}


/* =========================================================
   HISTÓRICO
========================================================= */

function getHistory() {
  return JSON.parse(
    localStorage.getItem("vipnetflix_history") || "[]"
  );
}


function addToHistory(item) {
  let history = getHistory();

  history = history.filter(x => x.id !== item.id);

  history.unshift(item);

  history = history.slice(0, 20);

  localStorage.setItem(
    "vipnetflix_history",
    JSON.stringify(history)
  );
}


function renderHistory() {
  renderItems("historyGrid", getHistory());
}


/* =========================================================
   PLAYER
========================================================= */

function playItem(item) {
  addToHistory(item);

  const modal = $("playerModal");
  const video = $("videoPlayer");
  const source = $("videoSource");

  if (!modal) return;

  $("playerTitle").textContent = item.title;
  $("playerDescription").textContent = item.description;

  if (item.video) {
    source.src = item.video;
    video.load();
  } else {
    source.src = "";
    video.load();

    showToast("Este conteúdo ainda não possui vídeo configurado.");
  }

  modal.classList.add("active");
}


function closePlayer() {
  const modal = $("playerModal");
  const video = $("videoPlayer");

  if (video) {
    video.pause();
  }

  modal?.classList.remove("active");
}


/* =========================================================
   DETALHES
========================================================= */

function openDetails(item) {
  const container = $("detailsContent");

  if (!container) return;

  showPage("details");

  container.innerHTML = `
    <div style="
      padding:40px 5%;
      max-width:1000px;
      margin:auto;
    ">

      <button
        class="secondary-btn"
        onclick="showPage('home')"
      >
        ← Voltar
      </button>

      <h1 style="margin-top:30px;">
        ${item.title}
      </h1>

      <p style="
        color:#aaa;
        margin:15px 0;
      ">
        ${item.year} • ${item.genre} • ⭐ ${item.rating}
      </p>

      <p style="
        color:#ccc;
        line-height:1.7;
        max-width:700px;
      ">
        ${item.description}
      </p>

      <div style="
        display:flex;
        gap:10px;
        flex-wrap:wrap;
        margin-top:25px;
      ">

        <button
          class="primary-btn"
          onclick='playItem(${JSON.stringify(item)})'
        >
          ▶ Assistir
        </button>

        <button
          class="secondary-btn"
          onclick='addToMyList(${JSON.stringify(item)})'
        >
          ＋ Minha Lista
        </button>

        <button
          class="secondary-btn"
          onclick='downloadItem(${JSON.stringify(item)})'
        >
          ⬇️ Download
        </button>

      </div>

    </div>
  `;
}


/* =========================================================
   EXPLORAR / PESQUISA
========================================================= */

function renderExplore() {
  const input = $("searchInput");

  if (input) {
    input.value = "";
  }

  const results = $("searchResults");

  if (results) {
    results.innerHTML = "";
  }
}


function searchContent() {
  const input = $("searchInput");

  if (!input) return;

  const term = input.value
    .toLowerCase()
    .trim();

  if (!term) {
    $("searchResults").innerHTML = "";
    return;
  }

  const results = catalog.filter(item =>
    item.title.toLowerCase().includes(term) ||
    item.genre.toLowerCase().includes(term)
  );

  renderItems("searchResults", results);
}


function openCategory(category) {
  const results = catalog.filter(
    item => item.genre.toLowerCase() === category.toLowerCase()
  );

  showPage("explore");

  renderItems("categoryResults", results);
}


/* =========================================================
   PLANOS
========================================================= */

function selectPlan(plan) {
  selectedPlan = plan;

  let price = "0 MT";

  if (plan === "Básico") price = "100 MT";
  if (plan === "Premium") price = "200 MT";
  if (plan === "VIP") price = "300 MT";

  $("selectedPlanName").textContent = plan;
  $("selectedPlanPrice").textContent = price;

  showPage("payment");

  showToast("Plano selecionado: " + plan);
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
      <div style="margin-top:20px">

        <label>Número do cartão</label>

        <input
          type="text"
          placeholder="0000 0000 0000 0000"
          style="
            width:100%;
            padding:13px;
            margin-top:7px;
            background:#222;
            border:1px solid #333;
            color:white;
            border-radius:5px;
          "
        >

        <label style="display:block;margin-top:15px">
          Nome no cartão
        </label>

        <input
          type="text"
          placeholder="Nome completo"
          style="
            width:100%;
            padding:13px;
            margin-top:7px;
            background:#222;
            border:1px solid #333;
            color:white;
            border-radius:5px;
          "
        >

        <button
          class="primary-btn full-btn"
          onclick="finishPayment()"
        >
          Confirmar pagamento
        </button>

      </div>
    `;

  } else {

    form.innerHTML = `
      <div style="
        margin-top:20px;
        background:#222;
        padding:20px;
        border-radius:8px;
      ">

        <p>
          Método selecionado:
          <strong>${method}</strong>
        </p>

        <p style="
          color:#aaa;
          margin-top:10px;
        ">
          A integração real com o serviço de pagamento
          deverá ser configurada posteriormente.
        </p>

        <button
          class="primary-btn full-btn"
          onclick="finishPayment()"
        >
          Continuar
        </button>

      </div>
    `;
  }
}


function finishPayment() {
  if (!selectedPlan) {
    showToast("Selecione um plano.");
    return;
  }

  if (!selectedPayment) {
    showToast("Escolha uma forma de pagamento.");
    return;
  }

  showToast(
    "Pagamento preparado. A integração real será configurada depois."
  );
}


/* =========================================================
   CONTA
========================================================= */

function updateAccount() {
  const name = $("accountName");
  const info = $("currentUserInfo");

  if (name) {
    name.textContent =
      currentUser?.name || "Minha conta";
  }

  if (info) {
    info.textContent =
      currentUser?.email || "";
  }
}


/* =========================================================
   LOGOUT
========================================================= */

function logoutUser() {
  currentUser = null;
  currentProfile = null;

  $("mainApp")?.classList.add("hidden");
  $("profileScreen")?.classList.add("hidden");
  $("authScreen")?.classList.remove("hidden");

  showAuthForm("login");

  showToast("Sessão encerrada.");
}


/* =========================================================
   MODAL DE EPISÓDIO
========================================================= */

function closeEpisodeModal() {
  $("episodeModal")?.classList.remove("active");
}


/* =========================================================
   INICIALIZAÇÃO
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  const savedUser =
    localStorage.getItem("vipnetflix_user");

  const savedProfile =
    localStorage.getItem("vipnetflix_current_profile");

  if (savedUser) {
    try {
      currentUser = JSON.parse(savedUser);
    } catch {
      currentUser = null;
    }
  }

  if (savedProfile) {
    try {
      currentProfile = JSON.parse(savedProfile);
    } catch {
      currentProfile = null;
    }
  }

  if (currentUser && currentProfile) {

    $("authScreen")?.classList.add("hidden");
    $("profileScreen")?.classList.add("hidden");
    $("mainApp")?.classList.remove("hidden");

    updateAccount();
    renderHome();
    showPage("home");

  } else if (currentUser) {

    $("authScreen")?.classList.add("hidden");
    $("profileScreen")?.classList.remove("hidden");

    loadProfiles();

  } else {

    $("authScreen")?.classList.remove("hidden");
    $("profileScreen")?.classList.add("hidden");
    $("mainApp")?.classList.add("hidden");

    showAuthForm("login");
  }

});


/* =========================================================
   SEGURANÇA BÁSICA DE FECHAMENTO DO PLAYER
========================================================= */

document.addEventListener("keydown", event => {

  if (event.key === "Escape") {
    closePlayer();
    closeEpisodeModal();
  }

});
