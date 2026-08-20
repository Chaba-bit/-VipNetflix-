/* =====================================================
   VIPNETFLIX - APP.JS
   Versão demo/local
   ===================================================== */

"use strict";

/* =====================================================
   CONFIGURAÇÃO
===================================================== */

const STORAGE_USERS = "vipnetflix_users";
const STORAGE_SESSION = "vipnetflix_session";
const STORAGE_PROFILE = "vipnetflix_profile";
const STORAGE_FAVORITES = "vipnetflix_favorites";
const STORAGE_HISTORY = "vipnetflix_history";

/* =====================================================
   DADOS DOS FILMES
===================================================== */

const movies = [
  {
    id: 1,
    title: "A Última Missão",
    type: "movie",
    year: 2026,
    genre: "Ação",
    categories: ["action", "adventure"],
    description:
      "Um agente precisa completar uma última missão antes que seja tarde demais.",
    image:
      "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=600",
    banner:
      "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1600",
    video: ""
  },
  {
    id: 2,
    title: "Além das Estrelas",
    type: "movie",
    year: 2026,
    genre: "Ficção científica",
    categories: ["scifi"],
    description:
      "Uma equipe parte para uma missão que pode mudar o futuro da humanidade.",
    image:
      "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=600",
    banner:
      "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=1600",
    video: ""
  },
  {
    id: 3,
    title: "Coração de Aço",
    type: "movie",
    year: 2025,
    genre: "Drama",
    categories: ["drama"],
    description:
      "Uma história sobre coragem, família e uma segunda oportunidade.",
    image:
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=600",
    banner:
      "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=1600",
    video: ""
  },
  {
    id: 4,
    title: "Férias em Confusão",
    type: "movie",
    year: 2025,
    genre: "Comédia",
    categories: ["comedy"],
    description:
      "Uma viagem transforma-se numa sequência de situações inesperadas.",
    image:
      "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=600",
    banner:
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?w=1600",
    video: ""
  },
  {
    id: 5,
    title: "Código Secreto",
    type: "movie",
    year: 2026,
    genre: "Ação",
    categories: ["action", "crime"],
    description:
      "Uma investigação revela um código escondido que pode mudar tudo.",
    image:
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600",
    banner:
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?w=1600",
    video: ""
  },
  {
    id: 6,
    title: "Horizonte Perdido",
    type: "movie",
    year: 2025,
    genre: "Aventura",
    categories: ["adventure"],
    description:
      "Uma equipe procura uma cidade perdida em uma região desconhecida.",
    image:
      "https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?w=600",
    banner:
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?w=1600",
    video: ""
  }
];

/* =====================================================
   DADOS DAS SÉRIES
   Conteúdo demonstrativo/autorizado
===================================================== */

const series = [
  {
    id: 101,
    title: "Aventura VIP",
    type: "series",
    year: 2026,
    genre: "Aventura",
    categories: ["adventure"],
    description: "Série demonstrativa do catálogo VIPNETFLIX.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600",
    banner:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1600",
    seasons: [
      {
        number: 1,
        title: "Temporada 1",
        episodes: [
          {
            number: 1,
            title: "O começo",
            description: "Primeiro episódio da série demonstrativa.",
            video: ""
          },
          {
            number: 2,
            title: "O desafio",
            description: "Um novo desafio aparece.",
            video: ""
          },
          {
            number: 3,
            title: "A descoberta",
            description: "Uma descoberta muda o rumo da história.",
            video: ""
          }
        ]
      },
      {
        number: 2,
        title: "Temporada 2",
        episodes: [
          {
            number: 1,
            title: "Novo caminho",
            description: "Uma nova fase começa.",
            video: ""
          },
          {
            number: 2,
            title: "O segredo",
            description: "Um segredo é revelado.",
            video: ""
          }
        ]
      }
    ]
  },

  {
    id: 102,
    title: "Cidade VIP",
    type: "series",
    year: 2026,
    genre: "Crime",
    categories: ["crime", "drama"],
    description: "Série demonstrativa de crime e drama.",
    image:
      "https://images.unsplash.com/photo-1519608487953-e999c86e7455?w=600",
    banner:
      "https://images.unsplash.com/photo-1519608487953-e999c86e7455?w=1600",
    seasons: [
      {
        number: 1,
        title: "Temporada 1",
        episodes: [
          {
            number: 1,
            title: "Primeiro caso",
            description: "Um caso misterioso chega à cidade.",
            video: ""
          },
          {
            number: 2,
            title: "A investigação",
            description: "A investigação começa.",
            video: ""
          }
        ]
      }
    ]
  },

  {
    id: 103,
    title: "Além do Tempo",
    type: "series",
    year: 2025,
    genre: "Ficção científica",
    categories: ["scifi", "drama"],
    description: "Uma história demonstrativa de ficção científica.",
    image:
      "https://images.unsplash.com/photo-1534791547706-4b1d4c2d3c7d?w=600",
    banner:
      "https://images.unsplash.com/photo-1534791547706-4b1d4c2d3c7d?w=1600",
    seasons: [
      {
        number: 1,
        title: "Temporada 1",
        episodes: [
          {
            number: 1,
            title: "O portal",
            description: "Um estranho portal aparece.",
            video: ""
          },
          {
            number: 2,
            title: "Outro mundo",
            description: "A equipe descobre um novo mundo.",
            video: ""
          }
        ]
      }
    ]
  }
];

/* =====================================================
   CATÁLOGO
===================================================== */

const catalog = [...movies, ...series];

/* =====================================================
   ESTADO DA APLICAÇÃO
===================================================== */

let currentUser = null;
let currentProfile = null;
let selectedPlan = null;
let selectedPaymentMethod = null;
let currentCategory = "all";

/* =====================================================
   FUNÇÕES DE STORAGE
===================================================== */

function getUsers() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_USERS)) || [];
  } catch (error) {
    console.error("Erro ao ler usuários:", error);
    return [];
  }
}

function saveUsers(users) {
  localStorage.setItem(STORAGE_USERS, JSON.stringify(users));
}

function getSession() {
  return localStorage.getItem(STORAGE_SESSION) || "";
}

function setSession(email) {
  localStorage.setItem(STORAGE_SESSION, email);
}

function clearSession() {
  localStorage.removeItem(STORAGE_SESSION);
}

function getFavorites() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_FAVORITES)) || [];
  } catch {
    return [];
  }
}

function saveFavorites(list) {
  localStorage.setItem(STORAGE_FAVORITES, JSON.stringify(list));
}

function getHistory() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_HISTORY)) || [];
  } catch {
    return [];
  }
}

function saveHistory(list) {
  localStorage.setItem(STORAGE_HISTORY, JSON.stringify(list));
}

/* =====================================================
   MENSAGENS
===================================================== */

function showMessage(message) {
  alert(message);
}

/* =====================================================
   AUTENTICAÇÃO
===================================================== */

function showAuthForm(form) {
  const loginForm = document.getElementById("loginForm");
  const registerForm = document.getElementById("registerForm");
  const forgotForm = document.getElementById("forgotForm");

  if (loginForm) loginForm.classList.add("hidden");
  if (registerForm) registerForm.classList.add("hidden");
  if (forgotForm) forgotForm.classList.add("hidden");

  if (form === "login" && loginForm) {
    loginForm.classList.remove("hidden");
  }

  if (form === "register" && registerForm) {
    registerForm.classList.remove("hidden");
  }

  if (form === "forgot" && forgotForm) {
    forgotForm.classList.remove("hidden");
  }
}

/* =====================================================
   CRIAR CONTA
===================================================== */

function registerUser() {
  const name = document.getElementById("registerName")?.value.trim();
  const email = document.getElementById("registerEmail")?.value
    .trim()
    .toLowerCase();
  const phone = document.getElementById("registerPhone")?.value.trim();
  const password = document.getElementById("registerPassword")?.value;
  const confirmPassword =
    document.getElementById("registerPasswordConfirm")?.value;

  if (!name) {
    showMessage("Digite seu nome completo.");
    return;
  }

  if (!email) {
    showMessage("Digite seu email.");
    return;
  }

  if (!isValidEmail(email)) {
    showMessage("Digite um email válido.");
    return;
  }

  if (!phone) {
    showMessage("Digite seu número de telefone.");
    return;
  }

  if (!password || password.length < 6) {
    showMessage("A palavra-passe deve ter pelo menos 6 caracteres.");
    return;
  }

  if (password !== confirmPassword) {
    showMessage("As palavras-passe não são iguais.");
    return;
  }

  const users = getUsers();

  const alreadyExists = users.some(
    user => user.email.toLowerCase() === email
  );

  if (alreadyExists) {
    showMessage(
      "Este email já possui uma conta. Entre usando sua palavra-passe."
    );
    showAuthForm("login");

    const loginEmail = document.getElementById("loginEmail");
    if (loginEmail) loginEmail.value = email;

    return;
  }

  const newUser = {
    id: Date.now(),
    name,
    email,
    phone,
    password,
    createdAt: new Date().toISOString(),
    plan: null,
    profiles: [
      {
        id: Date.now(),
        name: name.split(" ")[0] || "Principal",
        avatar: "👤"
      }
    ]
  };

  users.push(newUser);
  saveUsers(users);

  showMessage(
    "Conta criada com sucesso!\n\nAgora entre usando seu email e palavra-passe."
  );

  document.getElementById("registerName").value = "";
  document.getElementById("registerEmail").value = "";
  document.getElementById("registerPhone").value = "";
  document.getElementById("registerPassword").value = "";
  document.getElementById("registerPasswordConfirm").value = "";

  showAuthForm("login");

  const loginEmail = document.getElementById("loginEmail");
  if (loginEmail) loginEmail.value = email;
}

/* =====================================================
   LOGIN
===================================================== */

function loginUser() {
  const email = document.getElementById("loginEmail")?.value
    .trim()
    .toLowerCase();

  const password = document.getElementById("loginPassword")?.value;

  if (!email) {
    showMessage("Digite seu email.");
    return;
  }

  if (!isValidEmail(email)) {
    showMessage("Digite um email válido.");
    return;
  }

  if (!password) {
    showMessage("Digite sua palavra-passe.");
    return;
  }

  const users = getUsers();

  const user = users.find(
    item =>
      item.email.toLowerCase() === email &&
      item.password === password
  );

  if (!user) {
    showMessage(
      "Email ou palavra-passe incorretos.\n\nSe ainda não possui uma conta, toque em \"Criar nova conta\"."
    );
    return;
  }

  currentUser = user;

  setSession(user.email);

  showProfileScreen();
}

/* =====================================================
   RECUPERAR SENHA
===================================================== */

function recoverPassword() {
  const email = document.getElementById("forgotEmail")?.value
    .trim()
    .toLowerCase();

  if (!email) {
    showMessage("Digite seu email.");
    return;
  }

  if (!isValidEmail(email)) {
    showMessage("Digite um email válido.");
    return;
  }

  const users = getUsers();

  const user = users.find(
    item => item.email.toLowerCase() === email
  );

  if (!user) {
    showMessage(
      "Não encontramos uma conta com esse email."
    );
    return;
  }

  showMessage(
    "Modo demo:\n\nSua palavra-passe cadastrada é:\n" +
      user.password +
      "\n\nEm uma versão real, a recuperação deve ser feita por email ou SMS."
  );
}

/* =====================================================
   LOGOUT
===================================================== */

function logoutUser() {
  currentUser = null;
  currentProfile = null;

  clearSession();

  localStorage.removeItem(STORAGE_PROFILE);

  const authScreen = document.getElementById("authScreen");
  const profileScreen = document.getElementById("profileScreen");
  const mainApp = document.getElementById("mainApp");

  if (authScreen) authScreen.classList.remove("hidden");
  if (profileScreen) profileScreen.classList.add("hidden");
  if (mainApp) mainApp.classList.add("hidden");

  showAuthForm("login");

  const password = document.getElementById("loginPassword");
  if (password) password.value = "";
}

/* =====================================================
   VALIDAÇÃO
===================================================== */

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

/* =====================================================
   PERFIS
===================================================== */

function showProfileScreen() {
  const authScreen = document.getElementById("authScreen");
  const profileScreen = document.getElementById("profileScreen");
  const mainApp = document.getElementById("mainApp");

  if (authScreen) authScreen.classList.add("hidden");
  if (mainApp) mainApp.classList.add("hidden");
  if (profileScreen) profileScreen.classList.remove("hidden");

  renderProfiles();
}

function renderProfiles() {
  const container = document.getElementById("profilesList");

  if (!container || !currentUser) return;

  container.innerHTML = "";

  const profiles = currentUser.profiles || [];

  profiles.forEach(profile => {
    const button = document.createElement("button");

    button.className = "profile-card";

    button.innerHTML = `
      <div class="profile-avatar">
        ${profile.avatar || "👤"}
      </div>
      <strong>${escapeHtml(profile.name)}</strong>
    `;

    button.onclick = () => selectProfile(profile);

    container.appendChild(button);
  });
}

function selectProfile(profile) {
  currentProfile = profile;

  localStorage.setItem(
    STORAGE_PROFILE,
    JSON.stringify(profile)
  );

  const profileScreen = document.getElementById("profileScreen");
  const mainApp = document.getElementById("mainApp");

  if (profileScreen) profileScreen.classList.add("hidden");
  if (mainApp) mainApp.classList.remove("hidden");

  updateAccountInfo();

  showPage("home");

  renderAll();
}

function createProfile() {
  if (!currentUser) {
    showMessage("Entre na sua conta primeiro.");
    return;
  }

  const name = prompt("Digite o nome do novo perfil:");

  if (!name || !name.trim()) return;

  const profile = {
    id: Date.now(),
    name: name.trim(),
    avatar: "🙂"
  };

  if (!currentUser.profiles) {
    currentUser.profiles = [];
  }

  if (currentUser.profiles.length >= 5) {
    showMessage("Você atingiu o limite de 5 perfis.");
    return;
  }

  currentUser.profiles.push(profile);

  updateCurrentUser();

  renderProfiles();
}

function changeProfile() {
  const profileScreen = document.getElementById("profileScreen");
  const mainApp = document.getElementById("mainApp");

  if (mainApp) mainApp.classList.add("hidden");
  if (profileScreen) profileScreen.classList.remove("hidden");

  renderProfiles();
}

function updateCurrentUser() {
  if (!currentUser) return;

  const users = getUsers();

  const index = users.findIndex(
    user => user.email === currentUser.email
  );

  if (index !== -1) {
    users[index] = currentUser;
    saveUsers(users);
  }
}

/* =====================================================
   INICIALIZAÇÃO
===================================================== */

document.addEventListener("DOMContentLoaded", () => {
  initializeApp();
});

function initializeApp() {
  const sessionEmail = getSession();

  if (sessionEmail) {
    const users = getUsers();

    const user = users.find(
      item => item.email === sessionEmail
    );

    if (user) {
      currentUser = user;

      const savedProfile = localStorage.getItem(STORAGE_PROFILE);

      if (savedProfile) {
        try {
          currentProfile = JSON.parse(savedProfile);
        } catch {
          currentProfile = null;
        }
      }

      if (currentProfile) {
        const authScreen = document.getElementById("authScreen");
        const profileScreen =
          document.getElementById("profileScreen");
        const mainApp = document.getElementById("mainApp");

        if (authScreen) authScreen.classList.add("hidden");
        if (profileScreen) profileScreen.classList.add("hidden");
        if (mainApp) mainApp.classList.remove("hidden");

        updateAccountInfo();
        showPage("home");
        renderAll();
      } else {
        showProfileScreen();
      }

      return;
    }

    clearSession();
  }

  showAuthForm("login");
}

/* =====================================================
   NAVEGAÇÃO
===================================================== */

function showPage(pageId) {
  const pages = document.querySelectorAll(".page");

  pages.forEach(page => {
    page.classList.remove("active");
  });

  const page = document.getElementById(pageId);

  if (page) {
    page.classList.add("active");
  }

  if (pageId === "home") {
    renderHome();
  }

  if (pageId === "movies") {
    renderMovies();
  }

  if (pageId === "series") {
    renderSeries();
  }

  if (pageId === "mylist") {
    renderMyList();
  }

  if (pageId === "plans") {
    renderPlans();
  }

  if (pageId === "profile") {
    updateAccountInfo();
  }
}

/* =====================================================
   RENDER GERAL
===================================================== */

function renderAll() {
  renderHome();
  renderMovies();
  renderSeries();
  renderMyList();
  renderPlans();
  updateAccountInfo();
}

/* =====================================================
   HOME
===================================================== */

function renderHome() {
  renderFeatured();
  renderContinueWatching();
  renderTrending();
  renderTop10();
  renderPopularMovies();
  renderPopularSeries();
  renderCategoryRows();
}

function renderFeatured() {
  const item = catalog[0];

  if (!item) return;

  const title = document.getElementById("heroTitle");
  const description =
    document.getElementById("heroDescription");
  const year = document.getElementById("heroYear");
  const genre = document.getElementById("heroGenre");

  if (title) title.textContent = item.title;
  if (description) description.textContent = item.description || "";
  if (year) year.textContent = item.year || "";
  if (genre) genre.textContent = item.genre || "";
}

function playFeatured() {
  const item = catalog[0];

  if (item) {
    playContent(item);
  }
}

function addFeatured() {
  const item = catalog[0];

  if (item) {
    toggleFavorite(item);
  }
}

function openFeaturedDetails() {
  const item = catalog[0];

  if (item) {
    openDetails(item);
  }
}

function renderContinueWatching() {
  const container = document.getElementById(
    "continueWatching"
  );

  if (!container) return;

  const history = getHistory();

  const items = history
    .map(id => catalog.find(item => item.id === id))
    .filter(Boolean);

  renderCardsInto(container, items);
}

function renderTrending() {
  const container = document.getElementById("trending");

  if (!container) return;

  renderCardsInto(container, catalog.slice(0, 6));
}

function renderTop10() {
  const container = document.getElementById("top10");

  if (!container) return;

  renderCardsInto(container, catalog.slice(0, 10));
}

function renderPopularMovies() {
  const container =
    document.getElementById("popularMovies");

  if (!container) return;

  renderCardsInto(
    container,
    movies.slice(0, 6)
  );
}

function renderPopularSeries() {
  const container =
    document.getElementById("popularSeries");

  if (!container) return;

  renderCardsInto(
    container,
    series.slice(0, 6)
  );
}

function renderCategoryRows() {
  const action = document.getElementById("categoryAction");
  const drama = document.getElementById("categoryDrama");
  const comedy = document.getElementById("categoryComedy");
  const scifi = document.getElementById("categorySciFi");

  if (action) {
    renderCardsInto(
      action,
      catalog.filter(item =>
        item.categories?.includes("action")
      )
    );
  }

  if (drama) {
    renderCardsInto(
      drama,
      catalog.filter(item =>
        item.categories?.includes("drama")
      )
    );
  }

  if (comedy) {
    renderCardsInto(
      comedy,
      catalog.filter(item =>
        item.categories?.includes("comedy")
      )
    );
  }

  if (scifi) {
    renderCardsInto(
      scifi,
      catalog.filter(item =>
        item.categories?.includes("scifi")
      )
    );
  }
}

/* =====================================================
   FILMES
===================================================== */

function renderMovies(list = movies) {
  const grid = document.getElementById("moviesGrid");

  if (!grid) return;

  grid.innerHTML = "";

  list.forEach(item => {
    grid.appendChild(createCard(item));
  });
}

function filterContent(category) {
  currentCategory = category;

  if (category === "all") {
    renderMovies(movies);
    return;
  }

  const filtered = movies.filter(item =>
    item.categories?.includes(category)
  );

  renderMovies(filtered);
}

/* =====================================================
   SÉRIES
===================================================== */

function renderSeries(list = series) {
  const grid = document.getElementById("seriesGrid");

  if (!grid) return;

  grid.innerHTML = "";

  list.forEach(item => {
    grid.appendChild(createCard(item));
  });
}

function filterSeries(category) {
  if (category === "all") {
    renderSeries(series);
    return;
  }

  const filtered = series.filter(item =>
    item.categories?.includes(category)
  );

  renderSeries(filtered);
}

/* =====================================================
   CATEGORIAS
===================================================== */

function openCategory(category) {
  const results =
    document.getElementById("categoryResults");

  if (!results) return;

  const normalized = category.toLowerCase();

  const filtered = catalog.filter(item => {
    return (
      item.genre?.toLowerCase() === normalized ||
      item.categories?.some(
        value => value.toLowerCase() === normalized
      )
    );
  });

  results.innerHTML = "";

  if (!filtered.length) {
    results.innerHTML =
      "<p>Nenhum conteúdo encontrado nesta categoria.</p>";
    return;
  }

  filtered.forEach(item => {
    results.appendChild(createCard(item));
  });
}

/* =====================================================
   FAVORITOS
===================================================== */

function toggleFavorite(item) {
  if (!currentUser) {
    showMessage("Entre na sua conta para usar favoritos.");
    return;
  }

  let favorites = getFavorites();

  if (favorites.includes(item.id)) {
    favorites = favorites.filter(id => id !== item.id);
    showMessage("Removido da sua lista.");
  } else {
    favorites.push(item.id);
    showMessage("Adicionado à sua lista.");
  }

  saveFavorites(favorites);

  renderMyList();
}

function renderMyList() {
  const grid = document.getElementById("myListGrid");

  if (!grid) return;

  const favorites = getFavorites();

  const list = favorites
    .map(id => catalog.find(item => item.id === id))
    .filter(Boolean);

  grid.innerHTML = "";

  if (!list.length) {
    grid.innerHTML =
      "<p>A sua lista ainda está vazia.</p>";
    return;
  }

  list.forEach(item => {
    grid.appendChild(createCard(item));
  });
}

/* =====================================================
   PESQUISA
===================================================== */

function searchContent() {
  const input = document.getElementById("searchInput");
  const results =
    document.getElementById("searchResults");

  if (!input || !results) return;

  const query = input.value.trim().toLowerCase();

  results.innerHTML = "";

  if (!query) {
    return;
  }

  const filtered = catalog.filter(item => {
    const text = [
      item.title,
      item.genre,
      item.description
    ]
      .filter(Boolean)
      .join(" ")
      .toLowerCase();

    return text.includes(query);
  });

  if (!filtered.length) {
    results.innerHTML =
      "<p>Nenhum resultado encontrado.</p>";
    return;
  }

  filtered.forEach(item => {
    results.appendChild(createCard(item));
  });
}

/* =====================================================
   CARTÕES
===================================================== */

function renderCardsInto(container, list) {
  container.innerHTML = "";

  if (!list.length) {
    container.innerHTML =
      "<p>Nenhum conteúdo disponível.</p>";
    return;
  }

  list.forEach(item => {
    container.appendChild(createCard(item));
  });
}

function createCard(item) {
  const card = document.createElement("article");

  card.className = "movie-card";

  const favoriteIds = getFavorites();
  const isFavorite = favoriteIds.includes(item.id);

  const image = item.image
    ? `<img src="${escapeAttribute(item.image)}" alt="${escapeAttribute(
        item.title
      )}" loading="lazy">`
    : `<div class="poster-text">${escapeHtml(
        item.title
      )}</div>`;

  card.innerHTML = `
    <div class="poster">
      ${image}

      <button
        class="favorite-card-btn"
        title="Favoritos"
        type="button"
      >
        ${isFavorite ? "❤️" : "♡"}
      </button>
    </div>

    <div class="card-info">
      <h3>${escapeHtml(item.title)}</h3>

      <div class="meta">
        ${escapeHtml(item.genre || "Conteúdo")} •
        ${item.year || ""}
      </div>
    </div>
  `;

  card.addEventListener("click", event => {
    if (
      event.target.closest(".favorite-card-btn")
    ) {
      return;
    }

    openDetails(item);
  });

  const favoriteButton =
    card.querySelector(".favorite-card-btn");

  if (favoriteButton) {
    favoriteButton.addEventListener(
      "click",
      event => {
        event.stopPropagation();
        toggleFavorite(item);

        favoriteButton.textContent =
          getFavorites().includes(item.id)
            ? "❤️"
            : "♡";
      }
    );
  }

  return card;
}

/* =====================================================
   DETALHES
===================================================== */

function openDetails(item) {
  const details = document.getElementById(
    "detailsContent"
  );

  if (!details) return;

  const isSeries = item.type === "series";

  let episodesHtml = "";

  if (isSeries && item.seasons?.length) {
    episodesHtml = `
      <div class="seasons">
        ${item.seasons
          .map(
            season => `
              <div class="season">
                <h3>${escapeHtml(
                  season.title ||
                    "Temporada " + season.number
                )}</h3>

                <div class="episodes">
                  ${season.episodes
                    .map(
                      episode => `
                        <button
                          class="episode-btn"
                          type="button"
                          onclick="playEpisode(${item.id}, ${season.number}, ${episode.number})"
                        >
                          ▶ Episódio ${episode.number} —
                          ${escapeHtml(episode.title)}
                        </button>
                      `
                    )
                    .join("")}
                </div>
              </div>
            `
          )
          .join("")}
      </div>
    `;
  }

  details.innerHTML = `
    <div class="details-card">

      ${
        item.image
          ? `<img
              class="details-image"
              src="${escapeAttribute(item.image)}"
              alt="${escapeAttribute(item.title)}"
            >`
          : ""
      }

      <div class="details-info">

        <h1>${escapeHtml(item.title)}</h1>

        <p class="details-meta">
          ${item.year || ""} •
          ${escapeHtml(item.genre || "")} •
          ${isSeries ? "Série" : "Filme"}
        </p>

        <p>
          ${escapeHtml(
            item.description ||
              "Informações deste conteúdo."
          )}
        </p>

        <div class="details-buttons">

          <button
            class="primary-btn"
            type="button"
            onclick="playContentById(${item.id})"
          >
            ▶ Assistir
          </button>

          <button
            class="secondary-btn"
            type="button"
            onclick="toggleFavoriteById(${item.id})"
          >
            ❤️ Minha Lista
          </button>

        </div>

        ${episodesHtml}

      </div>

    </div>
  `;

  showPage("details");
}

/* =====================================================
   PLAYER
===================================================== */

function playContentById(id) {
  const item = catalog.find(
    content => content.id === id
  );

  if (item) {
    playContent(item);
  }
}

function playContent(item) {
  if (!item) return;

  addToHistory(item.id);

  if (!item.video) {
    showMessage(
      "Este conteúdo ainda não possui um vídeo autorizado configurado.\n\nQuando você tiver a URL do seu vídeo autorizado, coloque-a no campo \"video\" do conteúdo."
    );
    return;
  }

  openPlayer(
    item.video,
    item.title,
    item.description || ""
  );
}

function openPlayer(
  videoUrl,
  title,
  description
) {
  const modal = document.getElementById(
    "playerModal"
  );

  const video = document.getElementById(
    "videoPlayer"
  );

  const source = document.getElementById(
    "videoSource"
  );

  const playerTitle =
    document.getElementById("playerTitle");

  const playerDescription =
    document.getElementById(
      "playerDescription"
    );

  if (!modal || !video || !source) return;

  source.src = videoUrl;

  if (playerTitle) {
    playerTitle.textContent = title || "";
  }

  if (playerDescription) {
    playerDescription.textContent =
      description || "";
  }

  video.load();

  modal.classList.add("open");

  video.play().catch(() => {});
}

function closePlayer() {
  const modal =
    document.getElementById("playerModal");

  const video =
    document.getElementById("videoPlayer");

  if (video) {
    video.pause();
    video.currentTime = 0;
  }

  if (modal) {
    modal.classList.remove("open");
  }
}

/* =====================================================
   EPISÓDIOS
===================================================== */

function playEpisode(
  seriesId,
  seasonNumber,
  episodeNumber
) {
  const serie = catalog.find(
    item => item.id === seriesId
  );

  if (!serie || !serie.seasons) return;

  const season = serie.seasons.find(
    item => item.number === seasonNumber
  );

  if (!season) return;

  const episode = season.episodes.find(
    item => item.number === episodeNumber
  );

  if (!episode) return;

  const modal = document.getElementById(
    "episodeModal"
  );

  const content = document.getElementById(
    "episodeModalContent"
  );

  if (!modal || !content) return;

  content.innerHTML = `
    <h2>
      Episódio ${episode.number}:
      ${escapeHtml(episode.title)}
    </h2>

    <p>
      ${escapeHtml(
        episode.description || ""
      )}
    </p>

    <button
      class="primary-btn"
      type="button"
      onclick="playEpisodeVideo(${serie.id}, ${season.number}, ${episode.number})"
    >
      ▶ Assistir episódio
    </button>
  `;

  modal.classList.add("open");
}

function playEpisodeVideo(
  seriesId,
  seasonNumber,
  episodeNumber
) {
  const serie = catalog.find(
    item => item.id === seriesId
  );

  if (!serie) return;

  const season = serie.seasons?.find(
    item => item.number === seasonNumber
  );

  const episode = season?.episodes?.find(
    item => item.number === episodeNumber
  );

  if (!episode) return;

  closeEpisodeModal();

  if (!episode.video) {
    showMessage(
      "Este episódio ainda não possui um vídeo autorizado configurado."
    );
    return;
  }

  openPlayer(
    episode.video,
    `${serie.title} - ${episode.title}`,
    episode.description || ""
  );
}

function closeEpisodeModal() {
  const modal =
    document.getElementById("episodeModal");

  if (modal) {
    modal.classList.remove("open");
  }
}

/* =====================================================
   HISTÓRICO
===================================================== */

function addToHistory(id) {
  let history = getHistory();

  history = history.filter(
    itemId => itemId !== id
  );

  history.unshift(id);

  history = history.slice(0, 20);

  saveHistory(history);
}

/* =====================================================
   FAVORITOS POR ID
===================================================== */

function toggleFavoriteById(id) {
  const item = catalog.find(
    content => content.id === id
  );

  if (item) {
    toggleFavorite(item);
  }
}

/* =====================================================
   PLANOS
===================================================== */

function renderPlans() {
  if (!currentUser) return;

  const planName =
    document.getElementById("selectedPlanName");

  if (!planName) return;
}

function selectPlan(planName) {
  const prices = {
    Básico: 100,
    Premium: 200,
    VIP: 300
  };

  selectedPlan = {
    name: planName,
    price: prices[planName] || 0
  };

  const nameElement = document.getElementById(
    "selectedPlanName"
  );

  const priceElement = document.getElementById(
    "selectedPlanPrice"
  );

  if (nameElement) {
    nameElement.textContent =
      selectedPlan.name;
  }

  if (priceElement) {
    priceElement.textContent =
      `${selectedPlan.price} MT`;
  }

  showPage("payment");
}

/* =====================================================
   PAGAMENTO
===================================================== */

function choosePayment(method) {
  selectedPaymentMethod = method;

  const container =
    document.getElementById("paymentForm");

  if (!container) return;

  if (!selectedPlan) {
    showMessage("Escolha um plano primeiro.");
    return;
  }

  let form = "";

  if (method === "Cartão") {
    form = `
      <h3>Pagamento por cartão</h3>

      <input
        id="cardName"
        type="text"
        placeholder="Nome no cartão"
      >

      <input
        id="cardNumber"
        type="text"
        placeholder="Número do cartão"
        maxlength="19"
      >

      <input
        id="cardExpiry"
        type="text"
        placeholder="MM/AA"
        maxlength="5"
      >

      <input
        id="cardCvv"
        type="password"
        placeholder="CVV"
        maxlength="4"
      >

      <button
        class="primary-btn"
        type="button"
        onclick="processPayment()"
      >
        Confirmar pagamento
      </button>
    `;
  } else {
    form = `
      <h3>Pagamento: ${escapeHtml(
        method
      )}</h3>

      <p>
        Nesta versão demo, a integração
        com o serviço de pagamento ainda
        não está conectada.
      </p>

      <button
        class="primary-btn"
        type="button"
        onclick="processPayment()"
      >
        Continuar
      </button>
    `;
  }

  container.innerHTML = form;
}

function processPayment() {
  if (!currentUser) {
    showMessage("Entre na sua conta primeiro.");
    return;
  }

  if (!selectedPlan) {
    showMessage("Escolha um plano.");
    return;
  }

  if (!selectedPaymentMethod) {
    showMessage("Escolha uma forma de pagamento.");
    return;
  }

  if (selectedPaymentMethod === "Cartão") {
    const cardName =
      document.getElementById("cardName")?.value.trim();

    const cardNumber =
      document.getElementById("cardNumber")?.value.trim();

    const cardExpiry =
      document.getElementById("cardExpiry")?.value.trim();

    const cardCvv =
      document.getElementById("cardCvv")?.value.trim();

    if (
      !cardName ||
      !cardNumber ||
      !cardExpiry ||
      !cardCvv
    ) {
      showMessage(
        "Preencha todos os campos do cartão."
      );
      return;
    }

    /*
      IMPORTANTE:
      Este código NÃO envia dados de cartão
      para nenhum servidor. Em produção,
      use um provedor de pagamento seguro.
    */
  }

  currentUser.plan = selectedPlan;

  updateCurrentUser();

  showMessage(
    `Plano ${selectedPlan.name} selecionado com sucesso.\n\nValor: ${selectedPlan.price} MT/mês\n\nModo demo: o pagamento real ainda precisa ser conectado a um provedor oficial.`
  );

  showPage("profile");
}

/* =====================================================
   CONTA
===================================================== */

function updateAccountInfo() {
  const info = document.getElementById(
    "currentUserInfo"
  );

  if (!info || !currentUser) return;

  const plan =
    currentUser.plan?.name || "Nenhum plano";

  const profile =
    currentProfile?.name || "Nenhum perfil";

  info.innerHTML = `
    <strong>${escapeHtml(
      currentUser.name
    )}</strong><br>

    ${escapeHtml(
      currentUser.email
    )}<br>

    Perfil: ${escapeHtml(profile)}<br>

    Plano: ${escapeHtml(plan)}
  `;
}

/* =====================================================
   ESCAPE DE HTML
===================================================== */

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function escapeAttribute(value) {
  return escapeHtml(value);
}

/* =====================================================
   EVENTOS DO PLAYER
===================================================== */

document.addEventListener("click", event => {
  const playerModal =
    document.getElementById("playerModal");

  const episodeModal =
    document.getElementById("episodeModal");

  if (
    playerModal &&
    event.target === playerModal
  ) {
    closePlayer();
  }

  if (
    episodeModal &&
    event.target === episodeModal
  ) {
    closeEpisodeModal();
  }
});

/* =====================================================
   TECLADO
===================================================== */

document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    closePlayer();
    closeEpisodeModal();
  }
});

/* =====================================================
   FORMATAÇÃO DO NÚMERO DO CARTÃO
===================================================== */

document.addEventListener("input", event => {
  if (event.target.id === "cardNumber") {
    let value = event.target.value
      .replace(/\D/g, "")
      .slice(0, 16);

    value = value.replace(
      /(\d{4})(?=\d)/g,
      "$1 "
    );

    event.target.value = value;
  }

  if (event.target.id === "cardExpiry") {
    let value = event.target.value
      .replace(/\D/g, "")
      .slice(0, 4);

    if (value.length >= 3) {
      value =
        value.slice(0, 2) +
        "/" +
        value.slice(2);
    }

    event.target.value = value;
  }
});

/* =====================================================
   FUNÇÕES DE COMPATIBILIDADE
===================================================== */

/*
  Estas funções deixam o arquivo compatível
  com possíveis chamadas existentes no HTML.
*/

function openModal(item) {
  openDetails(item);
}

function closeModal() {
  showPage("home");
}

/* =====================================================
   FIM DO APP.JS
===================================================== */
