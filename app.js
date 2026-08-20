/* =========================================================
   VIPNETFLIX - APP.JS
========================================================= */

let currentUser = null;
let currentProfile = null;
let selectedPlan = null;

const demoMovies = [
  {
    id: 1,
    title: "Aventura VIP",
    genre: "Aventura",
    year: 2026,
    rating: "8.8",
    type: "movie",
    image: "",
    description: "Conteúdo de demonstração autorizado."
  },
  {
    id: 2,
    title: "Noite de Cinema",
    genre: "Drama",
    year: 2026,
    rating: "8.2",
    type: "movie",
    image: "",
    description: "Filme de demonstração do catálogo."
  },
  {
    id: 3,
    title: "Além do Espaço",
    genre: "Ficção científica",
    year: 2026,
    rating: "8.5",
    type: "movie",
    image: "",
    description: "Uma missão espacial revela um segredo inesperado."
  }
];

const demoSeries = [
  {
    id: 101,
    title: "Série VIP",
    genre: "Drama",
    year: 2026,
    rating: "8.7",
    type: "series",
    image: "",
    description: "Série de demonstração."
  },
  {
    id: 102,
    title: "Operação VIP",
    genre: "Ação",
    year: 2026,
    rating: "8.9",
    type: "series",
    image: "",
    description: "Uma equipe enfrenta uma missão perigosa."
  }
];

const catalog = [...demoMovies, ...demoSeries];

/* =========================================================
   INICIALIZAÇÃO
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  loadCatalog();

  renderProfiles();

  updateAccount();

});


/* =========================================================
   AUTENTICAÇÃO
========================================================= */

function showAuthForm(form) {

  document.querySelectorAll(".auth-form")
    .forEach(el => el.classList.add("hidden"));

  const target = document.getElementById(form + "Form");

  if (target) {
    target.classList.remove("hidden");
  }
}


function registerUser() {

  const name =
    document.getElementById("registerName")?.value.trim();

  const email =
    document.getElementById("registerEmail")?.value.trim();

  const password =
    document.getElementById("registerPassword")?.value;

  const confirm =
    document.getElementById("registerPasswordConfirm")?.value;

  if (!name || !email || !password) {
    toast("Preencha todos os campos.");
    return;
  }

  if (password !== confirm) {
    toast("As palavras-passe não coincidem.");
    return;
  }

  currentUser = {
    name,
    email
  };

  localStorage.setItem(
    "vipnetflix_user",
    JSON.stringify(currentUser)
  );

  openProfiles();

  toast("Conta criada com sucesso!");
}


function loginUser() {

  const email =
    document.getElementById("loginEmail")?.value.trim();

  const password =
    document.getElementById("loginPassword")?.value;

  if (!email || !password) {
    toast("Digite seu email e palavra-passe.");
    return;
  }

  currentUser = {
    name: email.split("@")[0],
    email
  };

  localStorage.setItem(
    "vipnetflix_user",
    JSON.stringify(currentUser)
  );

  openProfiles();

  toast("Login efetuado!");
}


function recoverPassword() {

  const email =
    document.getElementById("forgotEmail")?.value.trim();

  if (!email) {
    toast("Digite seu email.");
    return;
  }

  toast("Solicitação de recuperação enviada.");
}


/* =========================================================
   PERFIS
========================================================= */

function openProfiles() {

  document.getElementById("authScreen")
    ?.classList.add("hidden");

  document.getElementById("profileScreen")
    ?.classList.remove("hidden");

  renderProfiles();
}


function renderProfiles() {

  const list =
    document.getElementById("profilesList");

  if (!list) return;

  list.innerHTML = `
    <button
      class="profile-card"
      onclick="selectProfile('Principal')"
      style="
        background:#151515;
        color:white;
        border:1px solid #333;
        padding:25px;
        border-radius:10px;
        margin-bottom:20px;
        width:100%;
      "
    >
      <div style="font-size:50px;">👤</div>
      <strong>Principal</strong>
    </button>
  `;
}


function selectProfile(name) {

  currentProfile = name;

  document.getElementById("profileScreen")
    ?.classList.add("hidden");

  document.getElementById("mainApp")
    ?.classList.remove("hidden");

  showPage("home");
}


function createProfile() {

  const name =
    prompt("Nome do novo perfil:");

  if (!name) return;

  toast("Perfil criado: " + name);

  renderProfiles();
}


function changeProfile() {

  document.getElementById("mainApp")
    ?.classList.add("hidden");

  document.getElementById("profileScreen")
    ?.classList.remove("hidden");

  renderProfiles();
}


/* =========================================================
   NAVEGAÇÃO
========================================================= */

function showPage(pageName) {

  document.querySelectorAll(".page")
    .forEach(page => page.classList.remove("active"));

  const page =
    document.getElementById(pageName);

  if (page) {
    page.classList.add("active");
  }

  document.querySelectorAll(".nav-link")
    .forEach(button => {
      button.classList.toggle(
        "active",
        button.dataset.page === pageName
      );
    });

  document.querySelectorAll(".bottom-nav-item")
    .forEach(button => {
      button.classList.toggle(
        "active",
        button.dataset.page === pageName
      );
    });

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

  renderPage(pageName);
}


function renderPage(pageName) {

  if (pageName === "home") {
    loadCatalog();
  }

  if (pageName === "series") {
    renderGrid(
      "seriesGrid",
      demoSeries
    );
  }

  if (pageName === "movies") {
    renderGrid(
      "moviesGrid",
      demoMovies
    );
  }

  if (pageName === "new") {
    renderGrid(
      "newGrid",
      catalog
    );
  }

  if (pageName === "mylist") {
    renderMyList();
  }

  if (pageName === "history") {
    renderGrid(
      "historyGrid",
      []
    );
  }

  if (pageName === "downloads") {
    renderGrid(
      "downloadsGrid",
      []
    );
  }
}


/* =========================================================
   CATÁLOGO
========================================================= */

function loadCatalog() {

  renderGrid(
    "top10",
    catalog
  );

  renderGrid(
    "trending",
    catalog
  );

  renderGrid(
    "newReleases",
    catalog
  );

  renderGrid(
    "popularMovies",
    demoMovies
  );

  renderGrid(
    "popularSeries",
    demoSeries
  );

  renderGrid(
    "categoryAction",
    catalog.filter(x =>
      x.genre === "Ação"
    )
  );

  renderGrid(
    "categoryDrama",
    catalog.filter(x =>
      x.genre === "Drama"
    )
  );

  renderGrid(
    "categoryComedy",
    catalog.filter(x =>
      x.genre === "Comédia"
    )
  );

  renderGrid(
    "categorySciFi",
    catalog.filter(x =>
      x.genre === "Ficção científica"
    )
  );

}


function renderGrid(id, items) {

  const container =
    document.getElementById(id);

  if (!container) return;

  if (!items || items.length === 0) {

    container.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">🎬</div>
        <p>Nenhum conteúdo disponível.</p>
      </div>
    `;

    return;
  }

  container.innerHTML =
    items.map(createCard).join("");
}


function createCard(item) {

  const image =
    item.image ||
    "https://via.placeholder.com/300x450/151515/ffffff?text=VIPNETFLIX";

  return `
    <article class="content-card">

      <img
        src="${image}"
        alt="${escapeHTML(item.title)}"
        loading="lazy"
      >

      <div class="content-card-info">

        <h3>
          ${escapeHTML(item.title)}
        </h3>

        <p>
          ${escapeHTML(item.genre)}
          • ${item.year}
        </p>

        <button
          class="primary-btn"
          style="width:100%;margin-top:10px;"
          onclick="openDetails(${item.id})"
        >
          Ver
        </button>

      </div>

    </article>
  `;
}


/* =========================================================
   DETALHES
========================================================= */

function openDetails(id) {

  const item =
    catalog.find(x => x.id === id);

  if (!item) return;

  const container =
    document.getElementById("detailsContent");

  if (!container) return;

  const image =
    item.image ||
    "https://via.placeholder.com/500x700/151515/ffffff?text=VIPNETFLIX";

  container.innerHTML = `
    <div style="padding:40px 5%;">

      <img
        src="${image}"
        alt="${escapeHTML(item.title)}"
        style="
          width:220px;
          max-width:100%;
          border-radius:8px;
          margin-bottom:20px;
        "
      >

      <h1>${escapeHTML(item.title)}</h1>

      <p style="color:#aaa;margin:15px 0;">
        ${escapeHTML(item.genre)}
        • ${item.year}
        • ⭐ ${item.rating}
      </p>

      <p style="max-width:700px;line-height:1.6;color:#ddd;">
        ${escapeHTML(item.description)}
      </p>

      <div style="margin-top:25px;display:flex;gap:10px;flex-wrap:wrap;">

        <button
          class="primary-btn"
          onclick="playItem(${item.id})"
        >
          ▶ Assistir
        </button>

        <button
          class="secondary-btn"
          onclick="addToMyList(${item.id})"
        >
          ＋ Minha Lista
        </button>

      </div>

    </div>
  `;

  showPage("details");
}


function openFeaturedDetails() {

  if (catalog.length) {
    openDetails(catalog[0].id);
  }
}


/* =========================================================
   PLAYER
========================================================= */

function playItem(id) {

  const item =
    catalog.find(x => x.id === id);

  if (!item) return;

  const modal =
    document.getElementById("playerModal");

  const title =
    document.getElementById("playerTitle");

  const description =
    document.getElementById("playerDescription");

  if (title) title.textContent = item.title;

  if (description) {
    description.textContent =
      item.description || "";
  }

  /*
    Aqui será colocado posteriormente
    o vídeo autorizado do catálogo.
  */

  modal?.classList.add("active");
}


function playFeatured() {

  if (catalog.length) {
    playItem(catalog[0].id);
  }
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

  modal?.classList.remove("active");
}


/* =========================================================
   MINHA LISTA
========================================================= */

function addToMyList(id) {

  let list =
    JSON.parse(
      localStorage.getItem("vipnetflix_mylist") || "[]"
    );

  if (!list.includes(id)) {
    list.push(id);

    localStorage.setItem(
      "vipnetflix_mylist",
      JSON.stringify(list)
    );

    toast("Adicionado à Minha Lista.");
  } else {
    toast("Já está na sua lista.");
  }

  renderMyList();
}


function addFeatured() {

  if (catalog.length) {
    addToMyList(catalog[0].id);
  }
}


function renderMyList() {

  const ids =
    JSON.parse(
      localStorage.getItem("vipnetflix_mylist") || "[]"
    );

  const items =
    catalog.filter(item =>
      ids.includes(item.id)
    );

  renderGrid(
    "myListGrid",
    items
  );
}


/* =========================================================
   PESQUISA
========================================================= */

function searchContent() {

  const input =
    document.getElementById("searchInput");

  const results =
    document.getElementById("searchResults");

  if (!input || !results) return;

  const term =
    input.value.toLowerCase().trim();

  if (!term) {
    results.innerHTML = "";
    return;
  }

  const found =
    catalog.filter(item =>
      item.title.toLowerCase().includes(term) ||
      item.genre.toLowerCase().includes(term)
    );

  results.innerHTML =
    found.map(createCard).join("");
}


function openCategory(category) {

  const results =
    document.getElementById("categoryResults");

  if (!results) return;

  const found =
    catalog.filter(item =>
      item.genre.toLowerCase() ===
      category.toLowerCase()
    );

  results.innerHTML =
    found.map(createCard).join("");

  toast("Categoria: " + category);
}


/* =========================================================
   FILTROS
========================================================= */

function filterSeries(type) {

  if (type === "all") {
    renderGrid("seriesGrid", demoSeries);
    return;
  }

  renderGrid(
    "seriesGrid",
    demoSeries.filter(item =>
      item.genre.toLowerCase().includes(type)
    )
  );
}


function filterContent(type) {

  if (type === "all") {
    renderGrid("moviesGrid", demoMovies);
    return;
  }

  renderGrid(
    "moviesGrid",
    demoMovies.filter(item =>
      item.genre.toLowerCase().includes(type)
    )
  );
}


/* =========================================================
   PLANOS
========================================================= */

function selectPlan(plan) {

  selectedPlan = plan;

  const prices = {
    "Básico": "100 MT / mês",
    "Premium": "200 MT / mês",
    "VIP": "300 MT / mês"
  };

  document.getElementById("selectedPlanName")
    .textContent = plan;

  document.getElementById("selectedPlanPrice")
    .textContent = prices[plan] || "-";

  showPage("payment");
}


/* =========================================================
   PAGAMENTO
========================================================= */

function choosePayment(method) {

  const form =
    document.getElementById("paymentForm");

  if (!form) return;

  form.innerHTML = `
    <div style="
      background:#191919;
      padding:20px;
      border-radius:8px;
      margin-top:20px;
    ">

      <h3>Pagamento por ${method}</h3>

      <p style="color:#aaa;margin:10px 0 20px;">
        Método selecionado.
      </p>

      <button
        class="primary-btn full-btn"
        onclick="confirmPayment('${method}')"
      >
        Continuar
      </button>

    </div>
  `;
}


function confirmPayment(method) {

  toast(
    "Pagamento selecionado: " + method
  );

  /*
    A integração real de pagamento
    será adicionada posteriormente.
  */
}


/* =========================================================
   CONTA
========================================================= */

function updateAccount() {

  const saved =
    localStorage.getItem("vipnetflix_user");

  if (saved) {
    try {
      currentUser = JSON.parse(saved);
    } catch (e) {}
  }

  const name =
    document.getElementById("accountName");

  const info =
    document.getElementById("currentUserInfo");

  if (currentUser) {

    if (name) {
      name.textContent =
        currentUser.name || "Minha conta";
    }

    if (info) {
      info.textContent =
        currentUser.email || "";
    }
  }
}


function logoutUser() {

  localStorage.removeItem("vipnetflix_user");

  currentUser = null;

  document.getElementById("mainApp")
    ?.classList.add("hidden");

  document.getElementById("profileScreen")
    ?.classList.add("hidden");

  document.getElementById("authScreen")
    ?.classList.remove("hidden");

  showAuthForm("login");

  toast("Você saiu da conta.");
}


/* =========================================================
   MENU MOBILE
========================================================= */

function toggleMobileMenu() {

  const menu =
    document.getElementById("mobileMenu");

  menu?.classList.toggle("hidden");
}


/* =========================================================
   TOAST
========================================================= */

function toast(message) {

  const element =
    document.getElementById("toast");

  if (!element) {
    alert(message);
    return;
  }

  element.textContent = message;

  element.style.position = "fixed";
  element.style.bottom = "90px";
  element.style.left = "50%";
  element.style.transform = "translateX(-50%)";
  element.style.background = "#222";
  element.style.color = "#fff";
  element.style.padding = "12px 18px";
  element.style.borderRadius = "6px";
  element.style.zIndex = "2000";

  setTimeout(() => {
    element.textContent = "";
  }, 3000);
}


/* =========================================================
   UTILITÁRIO
========================================================= */

function escapeHTML(text) {

  return String(text)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
      }
