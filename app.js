/* =====================================================
   VIPNETFLIX - APP.JS
   LOGIN + CADASTRO + PERFIS + CATÁLOGO
===================================================== */

"use strict";

/* =====================================================
   DADOS DO USUÁRIO
===================================================== */

let currentUser = JSON.parse(
  localStorage.getItem("vipnetflix_current_user") || "null"
);

let currentProfile = JSON.parse(
  localStorage.getItem("vipnetflix_current_profile") || "null"
);

let users = JSON.parse(
  localStorage.getItem("vipnetflix_users") || "[]"
);

let myList = JSON.parse(
  localStorage.getItem("vipnetflix_mylist") || "[]"
);

let history = JSON.parse(
  localStorage.getItem("vipnetflix_history") || "[]"
);


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
    video: "",
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
    video: "",
    premium: true
  }
];


/* =====================================================
   INICIALIZAÇÃO
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

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
   TELA DE LOGIN
===================================================== */

function showAuthScreen() {

  const auth = document.getElementById("authScreen");
  const profile = document.getElementById("profileScreen");
  const app = document.getElementById("mainApp");

  if (auth) auth.classList.remove("hidden");
  if (profile) profile.classList.add("hidden");
  if (app) app.classList.add("hidden");

  showAuthForm("login");
}


/* =====================================================
   FORMULÁRIOS DE LOGIN
===================================================== */

function showAuthForm(form) {

  const login = document.getElementById("loginForm");
  const register = document.getElementById("registerForm");
  const forgot = document.getElementById("forgotForm");

  if (login) login.classList.add("hidden");
  if (register) register.classList.add("hidden");
  if (forgot) forgot.classList.add("hidden");

  if (form === "login" && login) {
    login.classList.remove("hidden");
  }

  if (form === "register" && register) {
    register.classList.remove("hidden");
  }

  if (form === "forgot" && forgot) {
    forgot.classList.remove("hidden");
  }
}


/* =====================================================
   CADASTRO
===================================================== */

function registerUser() {

  const nameElement =
    document.getElementById("registerName");

  const emailElement =
    document.getElementById("registerEmail");

  const phoneElement =
    document.getElementById("registerPhone");

  const passwordElement =
    document.getElementById("registerPassword");

  const confirmElement =
    document.getElementById("registerPasswordConfirm");


  const name =
    nameElement ? nameElement.value.trim() : "";

  const email =
    emailElement
      ? emailElement.value.trim().toLowerCase()
      : "";

  const phone =
    phoneElement
      ? phoneElement.value.trim()
      : "";

  const password =
    passwordElement
      ? passwordElement.value
      : "";

  const confirmPassword =
    confirmElement
      ? confirmElement.value
      : "";


  if (!name || !email || !password) {

    alert("Preencha todos os campos obrigatórios.");

    return;
  }


  if (password !== confirmPassword) {

    alert("As palavras-passe não coincidem.");

    return;
  }


  const existingUser =
    users.find(function (user) {
      return user.email === email;
    });


  if (existingUser) {

    alert("Este email já está cadastrado.");

    return;
  }


  const userId = Date.now();


  const user = {

    id: userId,

    name: name,

    email: email,

    phone: phone,

    password: password,

    status: "ativo",

    role: "USER",

    plan: "Básico",

    createdAt: Date.now(),

    profiles: [

      {
        id: userId + 1,

        name: name,

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

  const emailElement =
    document.getElementById("loginEmail");

  const passwordElement =
    document.getElementById("loginPassword");


  const email =
    emailElement
      ? emailElement.value.trim().toLowerCase()
      : "";

  const password =
    passwordElement
      ? passwordElement.value
      : "";


  const user =
    users.find(function (item) {

      return (
        item.email === email &&
        item.password === password
      );

    });


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

  const element =
    document.getElementById("forgotEmail");


  const email =
    element
      ? element.value.trim().toLowerCase()
      : "";


  const user =
    users.find(function (item) {

      return item.email === email;

    });


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


  if (auth) auth.classList.add("hidden");

  if (app) app.classList.add("hidden");

  if (profile) profile.classList.remove("hidden");


  renderProfiles();
}


/* =====================================================
   MOSTRAR PERFIS
===================================================== */

function renderProfiles() {

  const container =
    document.getElementById("profilesList");


  if (!container || !currentUser) {
    return;
  }


  container.innerHTML = "";


  if (
    !currentUser.profiles ||
    !Array.isArray(currentUser.profiles)
  ) {

    currentUser.profiles = [

      {
        id: Date.now(),

        name: currentUser.name,

        avatar:
          "https://placehold.co/200x200/222222/ffffff?text=USER",

        type: "adult",

        pin: "",

        language: "Português"
      }

    ];

  }


  currentUser.profiles.forEach(function (profile) {

    const button =
      document.createElement("button");


    button.className = "profile-card";


    button.innerHTML = `

      <img
        src="${escapeHTML(profile.avatar)}"
        alt="${escapeHTML(profile.name)}"
      >

      <span>
        ${escapeHTML(profile.name)}
      </span>

    `;


    button.onclick = function () {

      selectProfile(profile.id);

    };


    container.appendChild(button);

  });

}


/* =====================================================
   SELECIONAR PERFIL
===================================================== */

function selectProfile(profileId) {

  if (!currentUser) {

    showAuthScreen();

    return;
  }


  const profile =
    currentUser.profiles.find(function (item) {

      return String(item.id) === String(profileId);

    });


  if (!profile) {

    alert("Perfil não encontrado.");

    return;
  }


  currentProfile = profile;


  localStorage.setItem(
    "vipnetflix_current_profile",
    JSON.stringify(currentProfile)
  );


  const profileScreen =
    document.getElementById("profileScreen");

  const mainApp =
    document.getElementById("mainApp");


  if (profileScreen) {
    profileScreen.classList.add("hidden");
  }

  if (mainApp) {
    mainApp.classList.remove("hidden");
  }


  updateAccountInfo();


  showPage("home");


  renderHome();

  renderMovies();

  renderSeries();

  renderMyList();
}


/* =====================================================
   CRIAR PERFIL
===================================================== */

function createProfile() {

  if (!currentUser) {
   
