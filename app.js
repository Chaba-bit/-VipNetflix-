/* =========================================================
   VIPNETFLIX — APP.JS
   ESTRUTURA COMPLETA
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  /* =======================================================
     DADOS DO CATÁLOGO
  ======================================================= */

  const catalog = [

    {
      id: 1,
      title: "Aventura VIP",
      type: "Filme",
      genre: "Aventura",
      year: 2026,
      rating: 8.8,
      image: "https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?auto=format&fit=crop&w=700&q=80",
      description: "Uma aventura emocionante onde um grupo precisa enfrentar desafios inesperados."
    },

    {
      id: 2,
      title: "Além do Espaço",
      type: "Filme",
      genre: "Ficção científica",
      year: 2026,
      rating: 8.2,
      image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=700&q=80",
      description: "Uma missão espacial revela um segredo que pode mudar o futuro da humanidade."
    },

    {
      id: 3,
      title: "Código Sombrio",
      type: "Série",
      genre: "Ação",
      year: 2026,
      rating: 9.0,
      image: "https://images.unsplash.com/photo-1518709594023-6eab9bab7b23?auto=format&fit=crop&w=700&q=80",
      description: "Uma equipe especial descobre uma organização secreta."
    },

    {
      id: 4,
      title: "Cidade Perdida",
      type: "Filme",
      genre: "Ação",
      year: 2026,
      rating: 8.5,
      image: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=700&q=80",
      description: "Uma cidade escondida guarda um segredo perigoso."
    },

    {
      id: 5,
      title: "Amor em Paris",
      type: "Filme",
      genre: "Romance",
      year: 2026,
      rating: 7.9,
      image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=700&q=80",
      description: "Uma história de amor inesperada pelas ruas de Paris."
    },

    {
      id: 6,
      title: "O Último Reino",
      type: "Série",
      genre: "Drama",
      year: 2026,
      rating: 8.9,
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=700&q=80",
      description: "Reinos rivais lutam pelo controle de uma terra dividida."
    },

    {
      id: 7,
      title: "Noite de Terror",
      type: "Filme",
      genre: "Terror",
      year: 2026,
      rating: 8.0,
      image: "https://images.unsplash.com/photo-1505635552518-3448f4b5c9b0?auto=format&fit=crop&w=700&q=80",
      description: "Uma noite aparentemente normal transforma-se em um pesadelo."
    },

    {
      id: 8,
      title: "Risos da Cidade",
      type: "Série",
      genre: "Comédia",
      year: 2026,
      rating: 8.1,
      image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=700&q=80",
      description: "Amigos tentam sobreviver às situações mais engraçadas da cidade."
    },

    {
      id: 9,
      title: "Planeta Azul",
      type: "Documentário",
      genre: "Documentário",
      year: 2026,
      rating: 9.1,
      image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=700&q=80",
      description: "Uma viagem pelos lugares mais impressionantes do planeta."
    },

    {
      id: 10,
      title: "Operação Zero",
      type: "Série",
      genre: "Ação",
      year: 2026,
      rating: 8.7,
      image: "https://images.unsplash.com/photo-1533130061792-64b345e4a833?auto=format&fit=crop&w=700&q=80",
      description: "Uma operação secreta coloca uma equipe de elite em perigo."
    },

    {
      id: 11,
      title: "Depois da Tempestade",
      type: "Filme",
      genre: "Drama",
      year: 2026,
      rating: 8.4,
      image: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=700&q=80",
      description: "Depois de perder tudo, uma família tenta reconstruir sua vida."
    },

    {
      id: 12,
      title: "Horizonte",
      type: "Série",
      genre: "Ficção científica",
      year: 2026,
      rating: 8.6,
      image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=700&q=80",
      description: "Uma equipe viaja para além dos limites conhecidos."
    }

  ];


  /* =======================================================
     ELEMENTOS
  ======================================================= */

  const splashScreen = document.getElementById("splashScreen");
  const appScreen = document.getElementById("appScreen");

  const pages = document.querySelectorAll(".page");
  const navButtons = document.querySelectorAll(".nav-button");

  const popularGrid = document.getElementById("popularGrid");
  const newGrid = document.getElementById("newGrid");
  const continueGrid = document.getElementById("continueGrid");

  const moviesGrid = document.getElementById("moviesGrid");
  const seriesGrid = document.getElementById("seriesGrid");

  const myListGrid = document.getElementById("myListGrid");
  const downloadsGrid = document.getElementById("downloadsGrid");

  const searchInput = document.getElementById("searchInput");
  const searchResults = document.getElementById("searchResults");

  const categoryResults = document.getElementById("categoryResults");

  const detailsModal = document.getElementById("detailsModal");
  const loginModal = document.getElementById("loginModal");
  const playerModal = document.getElementById("playerModal");

  const detailsImage = document.getElementById("detailsImage");
  const detailsTitle = document.getElementById("detailsTitle");
  const detailsMeta = document.getElementById("detailsMeta");
  const detailsDescription = document.getElementById("detailsDescription");

  const profileName = document.getElementById("profileName");
  const profileEmail = document.getElementById("profileEmail");

  let selectedMovie = null;


  /* =======================================================
     STORAGE
  ======================================================= */

  let myList =
    JSON.parse(localStorage.getItem("vipnetflix_mylist")) || [];

  let downloads =
    JSON.parse(localStorage.getItem("vipnetflix_downloads")) || [];

  let user =
    JSON.parse(localStorage.getItem("vipnetflix_user")) || null;


  /* =======================================================
     SPLASH
  ======================================================= */

  setTimeout(() => {

    splashScreen.classList.add("hidden");

    appScreen.classList.remove("hidden");

    renderHome();

    updateProfile();

  }, 1800);


  /* =======================================================
     NAVEGAÇÃO
  ======================================================= */

  navButtons.forEach(button => {

    button.addEventListener("click", () => {

      const pageId = button.dataset.page;

      showPage(pageId);

    });

  });


  function showPage(pageId) {

    pages.forEach(page => {

      page.classList.remove("active");

    });

    const target = document.getElementById(pageId);

    if (target) {
      target.classList.add("active");
    }

    navButtons.forEach(button => {

      button.classList.remove("active");

      if (button.dataset.page === pageId) {
        button.classList.add("active");
      }

    });


    if (pageId === "homePage") {
      renderHome();
    }

    if (pageId === "moviesPage") {
      renderMovies();
    }

    if (pageId === "seriesPage") {
      renderSeries();
    }

    if (pageId === "myListPage") {
      renderMyList();
    }

    if (pageId === "downloadsPage") {
      renderDownloads();
    }

  }


  /* =======================================================
     CARD
  ======================================================= */

  function createCard(movie) {

    const card = document.createElement("article");

    card.className = "movie-card";

    card.innerHTML = `

      <img
        src="${movie.image}"
        alt="${movie.title}"
        loading="lazy"
      >

      <div class="movie-info">

        <h3>${movie.title}</h3>

        <div class="movie-meta">

          ${movie.year}
          ·
          <span class="card-rating">
            ⭐ ${movie.rating}
          </span>

        </div>

      </div>

    `;

    card.addEventListener("click", () => {

      openDetails(movie);

    });

    return card;

  }


  /* =======================================================
     RENDER
  ======================================================= */

  function renderGrid(container, movies) {

    if (!container) return;

    container.innerHTML = "";

    if (!movies.length) {

      container.innerHTML = `
        <p style="
          color:#888;
          padding:20px;
          grid-column:1/-1;
        ">
          Nenhum conteúdo encontrado.
        </p>
      `;

      return;

    }

    movies.forEach(movie => {

      container.appendChild(
        createCard(movie)
      );

    });

  }


  /* =======================================================
     INÍCIO
  ======================================================= */

  function renderHome() {

    renderGrid(
      popularGrid,
      catalog
        .slice()
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 8)
    );

    renderGrid(
      newGrid,
      catalog
        .slice()
        .sort((a, b) => b.year - a.year)
        .slice(0, 8)
    );

    const continueWatching = catalog.slice(2, 7);

    renderHorizontal(
      continueGrid,
      continueWatching
    );

  }


  function renderHorizontal(container, movies) {

    if (!container) return;

    container.innerHTML = "";

    movies.forEach(movie => {

      container.appendChild(
        createCard(movie)
      );

    });

  }


  /* =======================================================
     FILMES
  ======================================================= */

  function renderMovies() {

    const movies = catalog.filter(
      movie =>
        movie.type === "Filme" ||
        movie.type === "Documentário"
    );

    renderGrid(
      moviesGrid,
      movies
    );

  }


  /* =======================================================
     SÉRIES
  ======================================================= */

  function renderSeries() {

    const series = catalog.filter(
      movie => movie.type === "Série"
    );

    renderGrid(
      seriesGrid,
      series
    );

  }


  /* =======================================================
     MINHA LISTA
  ======================================================= */

  function renderMyList() {

    const movies = catalog.filter(movie =>
      myList.includes(movie.id)
    );

    renderGrid(
      myListGrid,
      movies
    );

  }


  /* =======================================================
     DOWNLOADS
  ======================================================= */

  function renderDownloads() {

    const movies = catalog.filter(movie =>
      downloads.includes(movie.id)
    );

    renderGrid(
      downloadsGrid,
      movies
    );

  }


  /* =======================================================
     DETALHES
  ======================================================= */

  function openDetails(movie) {

    selectedMovie = movie;

    detailsImage.src = movie.image;

    detailsTitle.textContent = movie.title;

    detailsMeta.innerHTML = `
      <span>${movie.type}</span>
      <span>${movie.year}</span>
      <span>⭐ ${movie.rating}</span>
      <span>${movie.genre}</span>
    `;

    detailsDescription.textContent =
      movie.description;

    detailsModal.classList.remove("hidden");

  }


  document
    .getElementById("closeDetails")
    .addEventListener("click", () => {

      detailsModal.classList.add("hidden");

    });


  detailsModal.addEventListener("click", event => {

    if (event.target === detailsModal) {

      detailsModal.classList.add("hidden");

    }

  });


  /* =======================================================
     MINHA LISTA
  ======================================================= */

  document
    .getElementById("modalList")
    .addEventListener("click", () => {

      if (!selectedMovie) return;

      if (myList.includes(selectedMovie.id)) {

        myList = myList.filter(
          id => id !== selectedMovie.id
        );

      } else {

        myList.push(selectedMovie.id);

      }

      localStorage.setItem(
        "vipnetflix_mylist",
        JSON.stringify(myList)
      );

      renderMyList();

    });


  /* =======================================================
     DOWNLOAD
  ======================================================= */

  document
    .getElementById("modalDownload")
    .addEventListener("click", () => {

      if (!selectedMovie) return;

      if (!downloads.includes(selectedMovie.id)) {

        downloads.push(selectedMovie.id);

        localStorage.setItem(
          "vipnetflix_downloads",
          JSON.stringify(downloads)
        );

        alert(
          `"${selectedMovie.title}" foi adicionado aos Downloads.`
        );

      } else {

        alert(
          "Este conteúdo já está nos Downloads."
        );

      }

      renderDownloads();

    });


  /* =======================================================
     PLAYER
  ======================================================= */

  function openPlayer(movie) {

    if (!movie) return;

    document.getElementById(
      "playerTitle"
    ).textContent = movie.title;

    playerModal.classList.remove(
      "hidden"
    );

  }


  document
    .getElementById("heroPlay")
    .addEventListener("click", () => {

      const movie = catalog[0];

      openPlayer(movie);

    });


  document
    .getElementById("modalPlay")
    .addEventListener("click", () => {

      openPlayer(selectedMovie);

      detailsModal.classList.add(
        "hidden"
      );

    });


  document
    .getElementById("closePlayer")
    .addEventListener("click", () => {

      playerModal.classList.add(
        "hidden"
      );

    });


  /* =======================================================
     HERO INFO
  ======================================================= */

  document
    .getElementById("heroInfo")
    .addEventListener("click", () => {

      openDetails(
        catalog[0]
      );

    });


  /* =======================================================
     BUSCA
  ======================================================= */

  searchInput.addEventListener(
    "input",
    () => {

      const text =
        searchInput.value
          .trim()
          .toLowerCase();

      if (!text) {

        searchResults.innerHTML = "";

        return;

      }

      const results =
        catalog.filter(movie =>

          movie.title
            .toLowerCase()
            .includes(text)

          ||

          movie.genre
            .toLowerCase()
            .includes(text)

          ||

          movie.type
            .toLowerCase()
            .includes(text)

        );

      renderGrid(
        searchResults,
        results
      );

    }
  );


  /* =======================================================
     CATEGORIAS
  ======================================================= */

  document
    .querySelectorAll(
      ".category-grid button"
    )
    .forEach(button => {

      button.addEventListener(
        "click",
        () => {

          const category =
            button.dataset.category;

          const results =
            catalog.filter(movie =>
              movie.genre === category
            );

          renderGrid(
            categoryResults,
            results
          );

        }
      );

    });


  /* =======================================================
     LOGIN
  ======================================================= */

  document
    .getElementById("profileButton")
    .addEventListener("click", () => {

      showPage("profilePage");

    });


  document
    .getElementById("loginButton")
    .addEventListener("click", () => {

      loginModal.classList.remove(
        "hidden"
      );

    });


  document
    .getElementById("closeLogin")
    .addEventListener("click", () => {

      loginModal.classList.add(
        "hidden"
      );

    });


  document
    .getElementById("submitLogin")
    .addEventListener("click", () => {

      const name =
        document.getElementById(
          "loginName"
        ).value.trim();

      const email =
        document.getElementById(
          "loginEmail"
        ).value.trim();

      const password =
        document.getElementById(
          "loginPassword"
        ).value.trim();


      if (!name || !email || !password) {

        alert(
          "Preencha todos os campos."
        );

        return;

      }


      user = {
        name,
        email
      };


      localStorage.setItem(
        "vipnetflix_user",
        JSON.stringify(user)
      );


      updateProfile();


      loginModal.classList.add(
        "hidden"
      );


      alert(
        `Bem-vindo ao VipNetflix, ${name}!`
      );

    });


  /* =======================================================
     PERFIL
  ======================================================= */

  function updateProfile() {

    if (!user) {

      profileName.textContent =
        "Visitante";

      profileEmail.textContent =
        "Não conectado";

      return;

    }


    profileName.textContent =
      user.name;

    profileEmail.textContent =
      user.email;

  }


  /* =======================================================
     BOTÃO VER TUDO
  ======================================================= */

  document
    .querySelectorAll(".see-all")
    .forEach(button => {

      button.addEventListener(
        "click",
        () => {

          showPage("moviesPage");

        }
      );

    });


});
