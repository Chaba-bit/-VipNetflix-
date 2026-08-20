/* =========================================================
   VIPNETFLIX - APP.JS
   VERSÃO COMPLETA
   LOGIN + CADASTRO + PERFIS + CATÁLOGO
   FILMES + SÉRIES + TEMPORADAS + EPISÓDIOS
   TOP 10 + EM ALTA + CATEGORIAS + FAVORITOS
   PLANOS + PAGAMENTO DEMONSTRATIVO + PLAYER
========================================================= */


/* =========================================================
   DADOS DO USUÁRIO
========================================================= */

let currentUser =
  JSON.parse(
    localStorage.getItem("vipnetflix_current_user") || "null"
  );

let currentProfile =
  JSON.parse(
    localStorage.getItem("vipnetflix_current_profile") || "null"
  );

let users =
  JSON.parse(
    localStorage.getItem("vipnetflix_users") || "[]"
  );

let myList =
  JSON.parse(
    localStorage.getItem("vipnetflix_mylist") || "[]"
  );

let history =
  JSON.parse(
    localStorage.getItem("vipnetflix_history") || "[]"
  );


/* =========================================================
   FILMES
========================================================= */

const movies = [

  {
    id: 1,
    type: "movie",
    title: "O Último Horizonte",
    year: 2026,
    genre: "Aventura",
    category: "Aventura",
    rating: "16+",
    duration: "2h 05min",
    description:
      "Uma equipe parte em uma missão perigosa para descobrir o que existe além do último horizonte.",
    poster:
      "https://placehold.co/600x900/161616/ffffff?text=ULTIMO+HORIZONTE",
    video: "",
    premium: false,
    trending: true,
    top10: true
  },

  {
    id: 2,
    type: "movie",
    title: "Cidade Sombria",
    year: 2026,
    genre: "Suspense",
    category: "Suspense",
    rating: "16+",
    duration: "1h 52min",
    description:
      "Uma cidade aparentemente tranquila esconde um segredo que muda tudo.",
    poster:
      "https://placehold.co/600x900/151515/ffffff?text=CIDADE+SOMBRIA",
    video: "",
    premium: true,
    trending: true,
    top10: true
  },

  {
    id: 3,
    type: "movie",
    title: "Além das Estrelas",
    year: 2026,
    genre: "Ficção científica",
    category: "Ficção científica",
    rating: "12+",
    duration: "2h 10min",
    description:
      "Uma missão espacial encontra algo que ninguém esperava.",
    poster:
      "https://placehold.co/600x900/101820/ffffff?text=ALEM+DAS+ESTRELAS",
    video: "",
    premium: false,
    trending: true,
    top10: true
  },

  {
    id: 4,
    type: "movie",
    title: "Operação Final",
    year: 2026,
    genre: "Ação",
    category: "Ação",
    rating: "16+",
    duration: "1h 58min",
    description:
      "Uma última missão coloca uma equipe especial contra o relógio.",
    poster:
      "https://placehold.co/600x900/202020/ffffff?text=OPERACAO+FINAL",
    video: "",
    premium: false,
    trending: true,
    top10: true
  },

  {
    id: 5,
    type: "movie",
    title: "Amor de Verão",
    year: 2026,
    genre: "Romance",
    category: "Romance",
    rating: "12+",
    duration: "1h 45min",
    description:
      "Dois desconhecidos encontram o amor durante um verão inesquecível.",
    poster:
      "https://placehold.co/600x900/25151f/ffffff?text=AMOR+DE+VERAO",
    video: "",
    premium: false,
    trending: false,
    top10: false
  },

  {
    id: 6,
    type: "movie",
    title: "O Mistério da Casa",
    year: 2026,
    genre: "Terror",
    category: "Terror",
    rating: "18+",
    duration: "1h 40min",
    description:
      "Uma casa abandonada guarda uma história que ninguém quer descobrir.",
    poster:
      "https://placehold.co/600x900/120d12/ffffff?text=O+MISTERIO",
    video: "",
    premium: true,
    trending: true,
    top10: true
  }

];


/* =========================================================
   SÉRIES
========================================================= */

const series = [

  {
    id: 101,
    type: "series",
    title: "Nova Jornada",
    year: 2026,
    genre: "Drama",
    category: "Drama",
    rating: "14+",
    description:
      "Uma nova vida começa quando uma família decide deixar tudo para trás.",
    poster:
      "https://placehold.co/600x900/171717/ffffff?text=NOVA+JORNADA",
    premium: false,
    trending: true,
    top10: true,

    seasons: [

      {
        number: 1,
        title: "Temporada 1",

        episodes: [

          {
            id: 1001,
            number: 1,
            title: "O começo",
            duration: "42min",
            description:
              "Tudo começa com uma decisão inesperada.",
            video: ""
          },

          {
            id: 1002,
            number: 2,
            title: "Novos caminhos",
            duration: "45min",
            description:
              "A família enfrenta seus primeiros desafios.",
            video: ""
          },

          {
            id: 1003,
            number: 3,
            title: "O segredo",
            duration: "44min",
            description:
              "Uma verdade escondida finalmente aparece.",
            video: ""
          }

        ]

      },

      {
        number: 2,
        title: "Temporada 2",

        episodes: [

          {
            id: 2001,
            number: 1,
            title: "O retorno",
            duration: "43min",
            description:
              "Uma pessoa do passado retorna.",
            video: ""
          },

          {
            id: 2002,
            number: 2,
            title: "A escolha",
            duration: "46min",
            description:
              "Uma escolha difícil muda o futuro.",
            video: ""
          }

        ]

      }

    ]
  },


  {
    id: 102,
    type: "series",
    title: "Código Secreto",
    year: 2026,
    genre: "Crime",
    category: "Crime",
    rating: "16+",
    description:
      "Um investigador descobre um código ligado a uma organização secreta.",
    poster:
      "https://placehold.co/600x900/111111/ffffff?text=CODIGO+SECRETO",
    premium: true,
    trending: true,
    top10: true,

    seasons: [

      {
        number: 1,
        title: "Temporada 1",

        episodes: [

          {
            id: 3001,
            number: 1,
            title: "O código",
            duration: "48min",
            description:
              "Um código misterioso aparece.",
            video: ""
          },

          {
            id: 3002,
            number: 2,
            title: "A investigação",
            duration: "51min",
            description:
              "A investigação começa.",
            video: ""
          },

          {
            id: 3003,
            number: 3,
            title: "O inimigo",
            duration: "50min",
            description:
              "Um novo inimigo é descoberto.",
            video: ""
          }

        ]

      }

    ]
  },


  {
    id: 103,
    type: "series",
    title: "Horizonte Azul",
    year: 2026,
    genre: "Romance",
    category: "Romance",
    rating: "12+",
    description:
      "Uma história de amor entre duas pessoas de mundos diferentes.",
    poster:
      "https://placehold.co/600x900/172027/ffffff?text=HORIZONTE+AZUL",
    premium: false,
    trending: false,
    top10: false,

    seasons: [

      {
        number: 1,
        title: "Temporada 1",

        episodes: [

          {
            id: 4001,
            number: 1,
            title: "Primeiro encontro",
            duration: "40min",
            description:
              "Um encontro muda duas vidas.",
            video: ""
          },

          {
            id: 4002,
            number: 2,
            title: "A aproximação",
            duration: "42min",
            description:
              "Os dois começam a se conhecer.",
            video: ""
          }

        ]

      }

    ]
  }

];


/* =========================================================
   INICIALIZAÇÃO
========================================================= */

document.addEventListener(
  "DOMContentLoaded",
  () => {

    checkAuthentication();

    createExtraNavigation();

  }
);


/* =========================================================
   AUTENTICAÇÃO
========================================================= */

function checkAuthentication() {

  if (!currentUser) {

    showAuthScreen();

    return;

  }

  showProfileScreen();

}


/* =========================================================
   TELA DE LOGIN
========================================================= */

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


/* =========================================================
   FORMULÁRIOS
========================================================= */

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


/* =========================================================
   CADASTRO
========================================================= */

function registerUser() {

  const name =
    document
      .getElementById("registerName")
      ?.value
      .trim();

  const email =
    document
      .getElementById("registerEmail")
      ?.value
      .trim()
      .toLowerCase();

  const phone =
    document
      .getElementById("registerPhone")
      ?.value
      .trim();

  const password =
    document
      .getElementById("registerPassword")
      ?.value;

  const/* =========================================================
   VIPNETFLIX - APP.JS
   VERSÃO COMPLETA
   LOGIN + CADASTRO + PERFIS + CATÁLOGO
   FILMES + SÉRIES + TEMPORADAS + EPISÓDIOS
   TOP 10 + EM ALTA + CATEGORIAS + FAVORITOS
   PLANOS + PAGAMENTO DEMONSTRATIVO + PLAYER
========================================================= */


/* =========================================================
   DADOS DO USUÁRIO
========================================================= */

let currentUser =
  JSON.parse(
    localStorage.getItem("vipnetflix_current_user") || "null"
  );

let currentProfile =
  JSON.parse(
    localStorage.getItem("vipnetflix_current_profile") || "null"
  );

let users =
  JSON.parse(
    localStorage.getItem("vipnetflix_users") || "[]"
  );

let myList =
  JSON.parse(
    localStorage.getItem("vipnetflix_mylist") || "[]"
  );

let history =
  JSON.parse(
    localStorage.getItem("vipnetflix_history") || "[]"
  );


/* =========================================================
   FILMES
========================================================= */

const movies = [

  {
    id: 1,
    type: "movie",
    title: "O Último Horizonte",
    year: 2026,
    genre: "Aventura",
    category: "Aventura",
    rating: "16+",
    duration: "2h 05min",
    description:
      "Uma equipe parte em uma missão perigosa para descobrir o que existe além do último horizonte.",
    poster:
      "https://placehold.co/600x900/161616/ffffff?text=ULTIMO+HORIZONTE",
    video: "",
    premium: false,
    trending: true,
    top10: true
  },

  {
    id: 2,
    type: "movie",
    title: "Cidade Sombria",
    year: 2026,
    genre: "Suspense",
    category: "Suspense",
    rating: "16+",
    duration: "1h 52min",
    description:
      "Uma cidade aparentemente tranquila esconde um segredo que muda tudo.",
    poster:
      "https://placehold.co/600x900/151515/ffffff?text=CIDADE+SOMBRIA",
    video: "",
    premium: true,
    trending: true,
    top10: true
  },

  {
    id: 3,
    type: "movie",
    title: "Além das Estrelas",
    year: 2026,
    genre: "Ficção científica",
    category: "Ficção científica",
    rating: "12+",
    duration: "2h 10min",
    description:
      "Uma missão espacial encontra algo que ninguém esperava.",
    poster:
      "https://placehold.co/600x900/101820/ffffff?text=ALEM+DAS+ESTRELAS",
    video: "",
    premium: false,
    trending: true,
    top10: true
  },

  {
    id: 4,
    type: "movie",
    title: "Operação Final",
    year: 2026,
    genre: "Ação",
    category: "Ação",
    rating: "16+",
    duration: "1h 58min",
    description:
      "Uma última missão coloca uma equipe especial contra o relógio.",
    poster:
      "https://placehold.co/600x900/202020/ffffff?text=OPERACAO+FINAL",
    video: "",
    premium: false,
    trending: true,
    top10: true
  },

  {
    id: 5,
    type: "movie",
    title: "Amor de Verão",
    year: 2026,
    genre: "Romance",
    category: "Romance",
    rating: "12+",
    duration: "1h 45min",
    description:
      "Dois desconhecidos encontram o amor durante um verão inesquecível.",
    poster:
      "https://placehold.co/600x900/25151f/ffffff?text=AMOR+DE+VERAO",
    video: "",
    premium: false,
    trending: false,
    top10: false
  },

  {
    id: 6,
    type: "movie",
    title: "O Mistério da Casa",
    year: 2026,
    genre: "Terror",
    category: "Terror",
    rating: "18+",
    duration: "1h 40min",
    description:
      "Uma casa abandonada guarda uma história que ninguém quer descobrir.",
    poster:
      "https://placehold.co/600x900/120d12/ffffff?text=O+MISTERIO",
    video: "",
    premium: true,
    trending: true,
    top10: true
  }

];


/* =========================================================
   SÉRIES
========================================================= */

const series = [

  {
    id: 101,
    type: "series",
    title: "Nova Jornada",
    year: 2026,
    genre: "Drama",
    category: "Drama",
    rating: "14+",
    description:
      "Uma nova vida começa quando uma família decide deixar tudo para trás.",
    poster:
      "https://placehold.co/600x900/171717/ffffff?text=NOVA+JORNADA",
    premium: false,
    trending: true,
    top10: true,

    seasons: [

      {
        number: 1,
        title: "Temporada 1",

        episodes: [

          {
            id: 1001,
            number: 1,
            title: "O começo",
            duration: "42min",
            description:
              "Tudo começa com uma decisão inesperada.",
            video: ""
          },

          {
            id: 1002,
            number: 2,
            title: "Novos caminhos",
            duration: "45min",
            description:
              "A família enfrenta seus primeiros desafios.",
            video: ""
          },

          {
            id: 1003,
            number: 3,
            title: "O segredo",
            duration: "44min",
            description:
              "Uma verdade escondida finalmente aparece.",
            video: ""
          }

        ]

      },

      {
        number: 2,
        title: "Temporada 2",

        episodes: [

          {
            id: 2001,
            number: 1,
            title: "O retorno",
            duration: "43min",
            description:
              "Uma pessoa do passado retorna.",
            video: ""
          },

          {
            id: 2002,
            number: 2,
            title: "A escolha",
            duration: "46min",
            description:
              "Uma escolha difícil muda o futuro.",
            video: ""
          }

        ]

      }

    ]
  },


  {
    id: 102,
    type: "series",
    title: "Código Secreto",
    year: 2026,
    genre: "Crime",
    category: "Crime",
    rating: "16+",
    description:
      "Um investigador descobre um código ligado a uma organização secreta.",
    poster:
      "https://placehold.co/600x900/111111/ffffff?text=CODIGO+SECRETO",
    premium: true,
    trending: true,
    top10: true,

    seasons: [

      {
        number: 1,
        title: "Temporada 1",

        episodes: [

          {
            id: 3001,
            number: 1,
            title: "O código",
            duration: "48min",
            description:
              "Um código misterioso aparece.",
            video: ""
          },

          {
            id: 3002,
            number: 2,
            title: "A investigação",
            duration: "51min",
            description:
              "A investigação começa.",
            video: ""
          },

          {
            id: 3003,
            number: 3,
            title: "O inimigo",
            duration: "50min",
            description:
              "Um novo inimigo é descoberto.",
            video: ""
          }

        ]

      }

    ]
  },


  {
    id: 103,
    type: "series",
    title: "Horizonte Azul",
    year: 2026,
    genre: "Romance",
    category: "Romance",
    rating: "12+",
    description:
      "Uma história de amor entre duas pessoas de mundos diferentes.",
    poster:
      "https://placehold.co/600x900/172027/ffffff?text=HORIZONTE+AZUL",
    premium: false,
    trending: false,
    top10: false,

    seasons: [

      {
        number: 1,
        title: "Temporada 1",

        episodes: [

          {
            id: 4001,
            number: 1,
            title: "Primeiro encontro",
            duration: "40min",
            description:
              "Um encontro muda duas vidas.",
            video: ""
          },

          {
            id: 4002,
            number: 2,
            title: "A aproximação",
            duration: "42min",
            description:
              "Os dois começam a se conhecer.",
            video: ""
          }

        ]

      }

    ]
  }

];


/* =========================================================
   INICIALIZAÇÃO
========================================================= */

document.addEventListener(
  "DOMContentLoaded",
  () => {

    checkAuthentication();

    createExtraNavigation();

  }
);


/* =========================================================
   AUTENTICAÇÃO
========================================================= */

function checkAuthentication() {

  if (!currentUser) {

    showAuthScreen();

    return;

  }

  showProfileScreen();

}


/* =========================================================
   TELA DE LOGIN
========================================================= */

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


/* =========================================================
   FORMULÁRIOS
========================================================= */

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


/* =========================================================
   CADASTRO
========================================================= */

function registerUser() {

  const name =
    document
      .getElementById("registerName")
      ?.value
      .trim();

  const email =
    document
      .getElementById("registerEmail")
      ?.value
      .trim()
      .toLowerCase();

  const phone =
    document
      .getElementById("registerPhone")
      ?.value
      .trim();

  const password =
    document
      .getElementById("registerPassword")
      ?.value;

  const/* =========================================================
   VIPNETFLIX - APP.JS
   VERSÃO COMPLETA
   LOGIN + CADASTRO + PERFIS + CATÁLOGO
   FILMES + SÉRIES + TEMPORADAS + EPISÓDIOS
   TOP 10 + EM ALTA + CATEGORIAS + FAVORITOS
   PLANOS + PAGAMENTO DEMONSTRATIVO + PLAYER
========================================================= */


/* =========================================================
   DADOS DO USUÁRIO
========================================================= */

let currentUser =
  JSON.parse(
    localStorage.getItem("vipnetflix_current_user") || "null"
  );

let currentProfile =
  JSON.parse(
    localStorage.getItem("vipnetflix_current_profile") || "null"
  );

let users =
  JSON.parse(
    localStorage.getItem("vipnetflix_users") || "[]"
  );

let myList =
  JSON.parse(
    localStorage.getItem("vipnetflix_mylist") || "[]"
  );

let history =
  JSON.parse(
    localStorage.getItem("vipnetflix_history") || "[]"
  );


/* =========================================================
   FILMES
========================================================= */

const movies = [

  {
    id: 1,
    type: "movie",
    title: "O Último Horizonte",
    year: 2026,
    genre: "Aventura",
    category: "Aventura",
    rating: "16+",
    duration: "2h 05min",
    description:
      "Uma equipe parte em uma missão perigosa para descobrir o que existe além do último horizonte.",
    poster:
      "https://placehold.co/600x900/161616/ffffff?text=ULTIMO+HORIZONTE",
    video: "",
    premium: false,
    trending: true,
    top10: true
  },

  {
    id: 2,
    type: "movie",
    title: "Cidade Sombria",
    year: 2026,
    genre: "Suspense",
    category: "Suspense",
    rating: "16+",
    duration: "1h 52min",
    description:
      "Uma cidade aparentemente tranquila esconde um segredo que muda tudo.",
    poster:
      "https://placehold.co/600x900/151515/ffffff?text=CIDADE+SOMBRIA",
    video: "",
    premium: true,
    trending: true,
    top10: true
  },

  {
    id: 3,
    type: "movie",
    title: "Além das Estrelas",
    year: 2026,
    genre: "Ficção científica",
    category: "Ficção científica",
    rating: "12+",
    duration: "2h 10min",
    description:
      "Uma missão espacial encontra algo que ninguém esperava.",
    poster:
      "https://placehold.co/600x900/101820/ffffff?text=ALEM+DAS+ESTRELAS",
    video: "",
    premium: false,
    trending: true,
    top10: true
  },

  {
    id: 4,
    type: "movie",
    title: "Operação Final",
    year: 2026,
    genre: "Ação",
    category: "Ação",
    rating: "16+",
    duration: "1h 58min",
    description:
      "Uma última missão coloca uma equipe especial contra o relógio.",
    poster:
      "https://placehold.co/600x900/202020/ffffff?text=OPERACAO+FINAL",
    video: "",
    premium: false,
    trending: true,
    top10: true
  },

  {
    id: 5,
    type: "movie",
    title: "Amor de Verão",
    year: 2026,
    genre: "Romance",
    category: "Romance",
    rating: "12+",
    duration: "1h 45min",
    description:
      "Dois desconhecidos encontram o amor durante um verão inesquecível.",
    poster:
      "https://placehold.co/600x900/25151f/ffffff?text=AMOR+DE+VERAO",
    video: "",
    premium: false,
    trending: false,
    top10: false
  },

  {
    id: 6,
    type: "movie",
    title: "O Mistério da Casa",
    year: 2026,
    genre: "Terror",
    category: "Terror",
    rating: "18+",
    duration: "1h 40min",
    description:
      "Uma casa abandonada guarda uma história que ninguém quer descobrir.",
    poster:
      "https://placehold.co/600x900/120d12/ffffff?text=O+MISTERIO",
    video: "",
    premium: true,
    trending: true,
    top10: true
  }

];


/* =========================================================
   SÉRIES
========================================================= */

const series = [

  {
    id: 101,
    type: "series",
    title: "Nova Jornada",
    year: 2026,
    genre: "Drama",
    category: "Drama",
    rating: "14+",
    description:
      "Uma nova vida começa quando uma família decide deixar tudo para trás.",
    poster:
      "https://placehold.co/600x900/171717/ffffff?text=NOVA+JORNADA",
    premium: false,
    trending: true,
    top10: true,

    seasons: [

      {
        number: 1,
        title: "Temporada 1",

        episodes: [

          {
            id: 1001,
            number: 1,
            title: "O começo",
            duration: "42min",
            description:
              "Tudo começa com uma decisão inesperada.",
            video: ""
          },

          {
            id: 1002,
            number: 2,
            title: "Novos caminhos",
            duration: "45min",
            description:
              "A família enfrenta seus primeiros desafios.",
            video: ""
          },

          {
            id: 1003,
            number: 3,
            title: "O segredo",
            duration: "44min",
            description:
              "Uma verdade escondida finalmente aparece.",
            video: ""
          }

        ]

      },

      {
        number: 2,
        title: "Temporada 2",

        episodes: [

          {
            id: 2001,
            number: 1,
            title: "O retorno",
            duration: "43min",
            description:
              "Uma pessoa do passado retorna.",
            video: ""
          },

          {
            id: 2002,
            number: 2,
            title: "A escolha",
            duration: "46min",
            description:
              "Uma escolha difícil muda o futuro.",
            video: ""
          }

        ]

      }

    ]
  },


  {
    id: 102,
    type: "series",
    title: "Código Secreto",
    year: 2026,
    genre: "Crime",
    category: "Crime",
    rating: "16+",
    description:
      "Um investigador descobre um código ligado a uma organização secreta.",
    poster:
      "https://placehold.co/600x900/111111/ffffff?text=CODIGO+SECRETO",
    premium: true,
    trending: true,
    top10: true,

    seasons: [

      {
        number: 1,
        title: "Temporada 1",

        episodes: [

          {
            id: 3001,
            number: 1,
            title: "O código",
            duration: "48min",
            description:
              "Um código misterioso aparece.",
            video: ""
          },

          {
            id: 3002,
            number: 2,
            title: "A investigação",
            duration: "51min",
            description:
              "A investigação começa.",
            video: ""
          },

          {
            id: 3003,
            number: 3,
            title: "O inimigo",
            duration: "50min",
            description:
              "Um novo inimigo é descoberto.",
            video: ""
          }

        ]

      }

    ]
  },


  {
    id: 103,
    type: "series",
    title: "Horizonte Azul",
    year: 2026,
    genre: "Romance",
    category: "Romance",
    rating: "12+",
    description:
      "Uma história de amor entre duas pessoas de mundos diferentes.",
    poster:
      "https://placehold.co/600x900/172027/ffffff?text=HORIZONTE+AZUL",
    premium: false,
    trending: false,
    top10: false,

    seasons: [

      {
        number: 1,
        title: "Temporada 1",

        episodes: [

          {
            id: 4001,
            number: 1,
            title: "Primeiro encontro",
            duration: "40min",
            description:
              "Um encontro muda duas vidas.",
            video: ""
          },

          {
            id: 4002,
            number: 2,
            title: "A aproximação",
            duration: "42min",
            description:
              "Os dois começam a se conhecer.",
            video: ""
          }

        ]

      }

    ]
  }

];


/* =========================================================
   INICIALIZAÇÃO
========================================================= */

document.addEventListener(
  "DOMContentLoaded",
  () => {

    checkAuthentication();

    createExtraNavigation();

  }
);


/* =========================================================
   AUTENTICAÇÃO
========================================================= */

function checkAuthentication() {

  if (!currentUser) {

    showAuthScreen();

    return;

  }

  showProfileScreen();

}


/* =========================================================
   TELA DE LOGIN
========================================================= */

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


/* =========================================================
   FORMULÁRIOS
========================================================= */

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


/* =========================================================
   CADASTRO
========================================================= */

function registerUser() {

  const name =
    document
      .getElementById("registerName")
      ?.value
      .trim();

  const email =
    document
      .getElementById("registerEmail")
      ?.value
      .trim()
      .toLowerCase();

  const phone =
    document
      .getElementById("registerPhone")
      ?.value
      .trim();

  const password =
    document
      .getElementById("registerPassword")
      ?.value;

  const
