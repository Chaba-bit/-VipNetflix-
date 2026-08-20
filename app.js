/* =====================================================
   VIPNETFLIX - APP.JS
   LOGIN + CADASTRO + PERFIS + CATÁLOGO
===================================================== */

let currentUser =
  JSON.parse(localStorage.getItem("vipnetflix_current_user") || "null");

let currentProfile =
  JSON.parse(localStorage.getItem("vipnetflix_current_profile") || "null");

let users =
  JSON.parse(localStorage.getItem("vipnetflix_users") || "[]");

let myList =
  JSON.parse(localStorage.getItem("vipnetflix_mylist") || "[]");

let history =
  JSON.parse(localStorage.getItem("vipnetflix_history") || "[]");


/* =====================================================
   CATÁLOGO DE DEMONSTRAÇÃO
===================================================== */

const movies = [
  {
    id: 1,
    type: "movie",
    title: "O Último Horizonte",
    year: 2026,
    genre: "Aventura",
    description: "Conteúdo demonstrativo do VIPNETFLIX.",
    poster: "https://placehold.co/600x900/151515/ffffff?text=FILME+1",
    video: "",
    premium: false
  },

  {
    id: 2,
    type: "movie",
    title: "Cidade Sombria",
    year: 2026,
    genre: "Suspense",
    description: "Conteúdo demonstrativo do VIPNETFLIX.",
    poster: "https://placehold.co/600x900/151515/ffffff?text=FILME+2",
    video: "",
    premium: true
  },

  {
    id: 3,
    type: "movie",
    title: "Além das Estrelas",
    year: 2026,
    genre: "Ficção científica",
    description: "Conteúdo demonstrativo do VIPNETFLIX.",
    poster: "https://placehold.co/600x900/151515/ffffff?text=FILME+3",
    video: "",
    premium: false
  }
];


const series = [
  {
    id: 101,
    type: "series",
    title: "Nova Jornada",
    year: 2026,
    genre: "Drama",
    description: "Série demonstrativa do VIPNETFLIX.",
    poster: "https://placehold.co/600x900/151515/ffffff?text=SERIE+1",
    premium: false
  },

  {
    id: 102,
    type: "series",
    title: "Código Secreto",
    year: 2026,
    genre: "Crime",
    description: "Série demonstrativa do VIPNETFLIX.",
    poster: "https://placehold.co/600x900/151515/ffffff?text=SERIE+2",
    premium: true
  }
];


/* =====================================================
   INICIALIZAÇÃO
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

  checkAuthentication();

});


/* =====================================================
   AUTENTICAÇÃO
===================================================== */

function checkAuthentication() {

  if (!currentUser) {

    showAuthScreen();

    return;

  }

  showProfileScreen();

}


/* =====================================================
   MOSTRAR LOGIN
===================================================== */

function showAuthScreen() {

  const auth =
    document.getElementById("authScreen");

  const profile =
    document.getElementById("profileScreen");

  const app =
    document.getElementById("mainApp");


  auth?.classList.remove("hidden");

  profile?.classList.add("hidden");

  app?.classList.add("hidden");

}


/* =====================================================
   ALTERNAR FORMULÁRIOS
===================================================== */

function showAuthForm(form) {

  document
    .getElementById("loginForm")
    ?.classList.add("hidden");

  document
    .getElementById("registerForm")
    ?.classList.add("hidden");

  document
    .getElementById("forgotForm")
    ?.classList.add("hidden");


  if (form === "login") {

    document
      .getElementById("loginForm")
      ?.classList.remove("hidden");

  }


  if (form === "register") {

    document
      .getElementById("registerForm")
      ?.classList.remove("hidden");

  }


  if (form === "forgot") {

    document
      .getElementById("forgotForm")
      ?.classList.remove("hidden");

  }

}


/* =====================================================
   CADASTRO
===================================================== */

function registerUser() {

  const name =
    document.getElementById("registerName").value.trim();

  const email =
    document.getElementById("registerEmail").value
      .trim()
      .toLowerCase();

  const phone =
    document.getElementById("registerPhone").value.trim();

  const password =
    document.getElementById("registerPassword").value;

  const confirmPassword =
    document.getElementById("registerPasswordConfirm").value;


  if (!name || !email || !password) {

    alert("Preencha todos os campos obrigatórios.");

    return;

  }


  if (password !== confirmPassword) {

    alert("As palavras-passe não coincidem.");

    return;

  }


  const existingUser =
    users.find(user => user.email === email);


  if (existingUser) {

    alert("Este email já está cadastrado.");

    return;

  }


  const user = {

    id: Date.now(),

    name,

    email,

    phone,

    password,

    status: "ativo",

    role: "USER",

    plan: "Básico",

    createdAt: Date.now(),

    profiles: [

      {
        id: Date.now() + 1,

        name,

        avatar:
          "https://placehold.co/200x200/222222/ffffff?text=USER",

        type: "adult",

        pin: "",

        language: "Português"

      }

    ]

  };


  users.push(user);


  localStorage.setItem(
    "vipnetflix_users",
    JSON.stringify(users)
  );


  currentUser = user;


  localStorage.setItem(
    "vipnetflix_current_user",
    JSON.stringify(currentUser)
  );


  alert("Conta criada com sucesso!");

  showProfileScreen();

}


/* =====================================================
   LOGIN
===================================================== */

function loginUser() {

  const email =
    document.getElementById("loginEmail").value
      .trim()
      .toLowerCase();

  const password =
    document.getElementById("loginPassword").value;


  const user =
    users.find(
      item =>
        item.email === email &&
        item.password === password
    );


  if (!user) {

    alert("Email ou palavra-passe incorretos.");

    return;

  }


  if (user.status === "bloqueado") {

    alert("Esta conta está bloqueada.");

    return;

  }


  currentUser = user;


  localStorage.setItem(
    "vipnetflix_current_user",
    JSON.stringify(currentUser)
  );


  showProfileScreen();

}


/* =====================================================
   RECUPERAR PALAVRA-PASSE
===================================================== */

function recoverPassword() {

  const email =
    document.getElementById("forgotEmail").value
      .trim()
      .toLowerCase();


  const user =
    users.find(
      item => item.email === email
    );


  if (!user) {

    alert(
      "Não encontramos uma conta com esse email."
    );

    return;

  }


  alert(
    "Em uma versão de produção, um email seguro de recuperação seria enviado."
  );


  showAuthForm("login");

}


/* =====================================================
   PERFIS
===================================================== */

function showProfileScreen() {

  const auth =
    document.getElementById("authScreen");

  const profile =
    document.getElementById("profileScreen");

  const app =
    document.getElementById("mainApp");


  auth?.classList.add("hidden");

  app?.classList.add("hidden");

  profile?.classList.remove("hidden");


  renderProfiles();

}


function renderProfiles() {

  const container =
    document.getElementById("profilesList");


  if (!container || !currentUser) return;


  container.innerHTML = "";


  currentUser.profiles.forEach(profile => {

    const button =
      document.createElement("button");


    button.className = "profile-card";


    button.innerHTML = `

      <img
        src="${profile.avatar}"
        alt="${escapeHTML(profile.name)}"
      >

      <span>
        ${escapeHTML(profile.name)}
      </span>

    `;


    button.onclick = () => {

      selectProfile(profile.id);

    };


    container.appendChild(button);

  });

}


/* =====================================================
   SELECIONAR PERFIL
===================================================== */

function selectProfile(profileId) {

  const profile =
    currentUser.profiles.find(
      item => item.id === profileId
    );


  if (!profile) return;


  currentProfile = profile;


  localStorage.setItem(
    "vipnetflix_current_profile",
    JSON.stringify(currentProfile)
  );


  const profileScreen =
    document.getElementById("profileScreen");

  const mainApp =
    document.getElementById("mainApp");


  profileScreen?.classList.add("hidden");

  mainApp?.classList.remove("hidden");


  updateAccountInfo();

  renderHome();

  renderMovies();

  renderSeries();

  renderMyList();

}


/* =====================================================
   CRIAR PERFIL
===================================================== */

function createProfile() {

  if (!currentUser) return;


  if (currentUser.profiles.length >= 5) {

    alert("Limite de 5 perfis atingido.");

    return;

  }


  const name =
    prompt("Digite o nome do novo perfil:");


  if (!name || !name.trim()) return;


  const profile = {

    id: Date.now(),

    name: name.trim(),

    avatar:
      "https://placehold.co/200x200/222222/ffffff?text=USER",

    type: "adult",

    pin: "",

    language: "Português"

  };


  currentUser.profiles.push(profile);


  users =
    users.map(
      user =>
        user.id === currentUser.id
          ? currentUser
          : user
    );


  localStorage.setItem(
    "vipnetflix_users",
    JSON.stringify(users)
  );


  localStorage.setItem(
    "vipnetflix_current_user",
    JSON.stringify(currentUser)
  );


  renderProfiles();

}


/* =====================================================
   TROCAR PERFIL
===================================================== */

function changeProfile() {

  currentProfile = null;

  localStorage.removeItem(
    "vipnetflix_current_profile"
  );


  showProfileScreen();

}


/* =====================================================
   LOGOUT
===================================================== */

function logoutUser() {

  const confirmation =
    confirm(
      "Deseja realmente sair da sua conta?"
    );


  if (!confirmation) return;


  currentUser = null;

  currentProfile = null;


  localStorage.removeItem(
    "vipnetflix_current_user"
  );

  localStorage.removeItem(
    "vipnetflix_current_profile"
  );


  showAuthScreen();

  showAuthForm("login");

}


/* =====================================================
   INFORMAÇÕES DA CONTA
===================================================== */

function updateAccountInfo() {

  const element =
    document.getElementById("currentUserInfo");


  if (!element || !currentUser || !currentProfile) {
    return;
  }


  element.innerHTML = `
    <strong>${escapeHTML(currentProfile.name)}</strong><br>
    ${escapeHTML(currentUser.email)}<br>
    Plano: ${escapeHTML(currentUser.plan)}
  `;

}


/* =====================================================
   CATÁLOGO
===================================================== */

function getAllContent() {

  return [
    ...movies,
    ...series,
    ...getAdminMovies(),
    ...getAdminSeries()
  ];

}


function getAdminMovies() {

  return JSON.parse(
    localStorage.getItem(
      "vipnetflix_admin_movies"
    ) || "[]"
  );

}


function getAdminSeries() {

  return JSON.parse(
    localStorage.getItem(
      "vipnetflix_admin_series"
    ) || "[]"
  );

}


/* =====================================================
   NAVEGAÇÃO
===================================================== */

function showPage(pageId) {

  document
    .querySelectorAll(".page")
    .forEach(page => {

      page.classList.remove("active");

    });


  const page =
    document.getElementById(pageId);


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


  if (pageId === "profile") {

    updateAccountInfo();

  }

}


/* =====================================================
   CARDS
===================================================== */

function createCard(item) {

  const isFavorite =
    myList.some(
      favorite =>
        favorite.id === item.id &&
        favorite.type === item.type
    );


  const card =
    document.createElement("div");


  card.className = "movie-card";


  card.innerHTML = `

    <img
      src="${item.poster}"
      alt="${escapeHTML(item.title)}"
      loading="lazy"
    >

    <div class="card-info">

      <h3>
        ${escapeHTML(item.title)}
      </h3>

      <p>
        ${item.year || ""} •
        ${escapeHTML(item.genre || "")}
      </p>

      <div class="card-buttons">

        <button>
          ▶
        </button>

        <button>
          ${isFavorite ? "♥" : "＋"}
        </button>

      </div>

    </div>

  `;


  const buttons =
    card.querySelectorAll("button");


  buttons[0].onclick = () => {

    openDetails(
      item.id,
      item.type
    );

  };


  buttons[1].onclick = () => {

    toggleMyList(
      item.id,
      item.type
    );

  };


  return card;

}


/* =====================================================
   HOME
===================================================== */

function renderHome() {

  const all =
    getAllContent();


  const trending =
    document.getElementById("trending");


  const popularMovies =
    document.getElementById("popularMovies");


  const popularSeries =
    document.getElementById("popularSeries");


  const continueWatching =
    document.getElementById("continueWatching");


  if (trending) {

    trending.innerHTML = "";

    all
      .slice(0, 10)
      .forEach(item => {

        trending.appendChild(
          createCard(item)
        );

      });

  }


  if (popularMovies) {

    popularMovies.innerHTML = "";

    all
      .filter(item => item.type === "movie")
      .forEach(item => {

        popularMovies.appendChild(
          createCard(item)
        );

      });

  }


  if (popularSeries) {

    popularSeries.innerHTML = "";

    all
      .filter(item => item.type === "series")
      .forEach(item => {

        popularSeries.appendChild(
          createCard(item)
        );

      });

  }


  if (continueWatching) {

    continueWatching.innerHTML = "";


    const watched =
      all.filter(item =>

        history.some(
          h =>
            h.id === item.id &&
            h.type === item.type
        )

      );


    if (watched.length === 0) {

      continueWatching.innerHTML = `
        <p style="color:#999">
          Você ainda não começou a assistir.
        </p>
      `;

    } else {

      watched.forEach(item => {

        continueWatching.appendChild(
          createCard(item)
        );

      });

    }

  }

}


/* =====================================================
   FILMES
===================================================== */

function renderMovies() {

  const container =
    document.getElementById("moviesGrid");


  if (!container) return;


  container.innerHTML = "";


  getAllContent()
    .filter(item => item.type === "movie")
    .forEach(movie => {

      container.appendChild(
        createCard(movie)
      );

    });

}


/* =====================================================
   SÉRIES
===================================================== */

function renderSeries() {

  const container =
    document.getElementById("seriesGrid");


  if (!container) return;


  container.innerHTML = "";


  getAllContent()
    .filter(item => item.type === "series")
    .forEach(show => {

      container.appendChild(
        createCard(show)
      );

    });

}


/* =====================================================
   MINHA LISTA
===================================================== */

function renderMyList() {

  const container =
    document.getElementById("myListGrid");


  if (!container) return;


  container.innerHTML = "";


  if (!currentProfile) return;


  const profileList =
    myList.filter(
      item =>
        !item.profileId ||
        item.profileId === currentProfile.id
    );


  if (profileList.length === 0) {

    container.innerHTML = `
      <p style="color:#999">
        Sua lista está vazia.
      </p>
    `;

    return;

  }


  profileList.forEach(item => {

    const content =
      getAllContent().find(
        content =>
          content.id === item.id &&
          content.type === item.type
      );


    if (content) {

      container.appendChild(
        createCard(content)
      );

    }

  });

}


/* =====================================================
   ADICIONAR / REMOVER DA LISTA
===================================================== */

function toggleMyList(id, type) {

  if (!currentProfile) {

    alert("Selecione um perfil primeiro.");

    return;

  }


  const index =
    myList.findIndex(
      item =>
        item.id === id &&
        item.type === type &&
        item.profileId === currentProfile.id
    );


  if (index >= 0) {

    myList.splice(index, 1);

  } else {

    myList.push({

      id,

      type,

      profileId:
        currentProfile.id,

      addedAt:
        Date.now()

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

  const input =
    document.getElementById("searchInput");


  const results =
    document.getElementById("searchResults");


  if (!input || !results) return;


  const query =
    input.value
      .toLowerCase()
      .trim();


  results.innerHTML = "";


  if (!query) return;


  const matches =
    getAllContent().filter(item =>

      item.title
        .toLowerCase()
        .includes(query) ||

      (item.genre || "")
        .toLowerCase()
        .includes(query) ||

      (item.description || "")
        .toLowerCase()
        .includes(query)

    );


  if (matches.length === 0) {

    results.innerHTML = `
      <p style="color:#999">
        Nenhum conteúdo encontrado.
      </p>
    `;

    return;

  }


  matches.forEach(item => {

    results.appendChild(
      createCard(item)
    );

  });

}


/* =====================================================
   DETALHES
===================================================== */

function openDetails(id, type) {

  const item =
    getAllContent().find(
      content =>
        content.id === id &&
        content.type === type
    );


  if (!item) return;


  const action =
    confirm(
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

  const featured =
    getAllContent()[0];


  if (featured) {

    playContent(featured);

  }

}


function playContent(item) {

  const modal =
    document.getElementById("playerModal");


  const video =
    document.getElementById("videoPlayer");


  const source =
    document.getElementById("videoSource");


  const title =
    document.getElementById("playerTitle");


  const description =
    document.getElementById("playerDescription");


  if (!modal || !video || !source) {
    return;
  }


  title.textContent =
    item.title;


  description.textContent =
    item.description;


  if (!item.video) {

    alert(
      "Este conteúdo ainda não possui um vídeo autorizado configurado."
    );

    saveHistory(item);

    return;

  }


  source.src =
    item.video;


  video.load();


  modal.classList.add("show");


  saveHistory(item);


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


  modal?.classList.remove("show");

}


/* =====================================================
   HISTÓRICO
===================================================== */

function saveHistory(item) {

  if (!currentProfile) return;


  const existing =
    history.find(
      h =>
        h.id === item.id &&
        h.type === item.type &&
        h.profileId === currentProfile.id
    );


  if (existing) {

    existing.updatedAt =
      Date.now();

  } else {

    history.push({

      id: item.id,

      type: item.type,

      profileId:
        currentProfile.id,

      progress: 0,

      updatedAt:
        Date.now()

    });

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

  const featured =
    getAllContent()[0];


  if (!featured) return;


  toggleMyList(
    featured.id,
    featured.type
  );

}


/* =====================================================
   SEGURANÇA BÁSICA
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
   FECHAR PLAYER
===================================================== */

document.addEventListener(
  "click",
  event => {

    const modal =
      document.getElementById(
        "playerModal"
      );


    if (
      modal &&
      event.target === modal
    ) {

      closePlayer();

    }

  }
);


/* =====================================================
   ESC
===================================================== */

document.addEventListener(
  "keydown",
  event => {

    if (event.key === "Escape") {

      closePlayer();

    }

  }
);
