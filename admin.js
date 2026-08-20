/* =====================================================
   VIPNETFLIX - PAINEL ADMINISTRATIVO
   ===================================================== */

let adminMovies = JSON.parse(
  localStorage.getItem("vipnetflix_admin_movies") || "[]"
);

let adminSeries = JSON.parse(
  localStorage.getItem("vipnetflix_admin_series") || "[]"
);

let categories = JSON.parse(
  localStorage.getItem("vipnetflix_categories") || "[]"
);

let plans = JSON.parse(
  localStorage.getItem("vipnetflix_plans") || "[]"
);


/* =====================================================
   INICIALIZAÇÃO
   ===================================================== */

document.addEventListener("DOMContentLoaded", () => {

  renderDashboard();
  renderAdminMovies();
  renderAdminSeries();
  renderCategories();
  renderPlans();

});


/* =====================================================
   NAVEGAÇÃO ADMIN
   ===================================================== */

function showAdminPage(pageId) {

  document.querySelectorAll(".admin-page").forEach(page => {
    page.classList.remove("active");
  });

  const page = document.getElementById(pageId);

  if (page) {
    page.classList.add("active");
  }

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}


/* =====================================================
   DASHBOARD
   ===================================================== */

function renderDashboard() {

  const totalMovies =
    document.getElementById("totalMovies");

  const totalSeries =
    document.getElementById("totalSeries");

  const totalPlans =
    document.getElementById("totalPlans");

  const totalUsers =
    document.getElementById("totalUsers");


  if (totalMovies) {
    totalMovies.textContent = adminMovies.length;
  }

  if (totalSeries) {
    totalSeries.textContent = adminSeries.length;
  }

  if (totalPlans) {
    totalPlans.textContent = plans.length;
  }

  if (totalUsers) {

    const users =
      JSON.parse(
        localStorage.getItem(
          "vipnetflix_users"
        ) || "[]"
      );

    totalUsers.textContent = users.length;

  }

}


/* =====================================================
   ADICIONAR FILME
   ===================================================== */

function addMovie() {

  const title =
    document.getElementById("movieTitle").value.trim();

  const year =
    document.getElementById("movieYear").value;

  const genre =
    document.getElementById("movieGenre").value.trim();

  const poster =
    document.getElementById("moviePoster").value.trim();

  const video =
    document.getElementById("movieVideo").value.trim();

  const description =
    document.getElementById("movieDescription").value.trim();

  const premium =
    document.getElementById("moviePremium").value === "true";


  if (!title) {

    alert("Digite o título do filme.");

    return;

  }


  const movie = {

    id: Date.now(),

    type: "movie",

    title,

    year: Number(year) || new Date().getFullYear(),

    genre: genre || "Sem categoria",

    poster:
      poster ||
      "https://placehold.co/600x900/151515/ffffff?text=FILME",

    video,

    description:
      description ||
      "Descrição ainda não adicionada.",

    premium,

    status: "publicado",

    createdAt: Date.now()

  };


  adminMovies.push(movie);


  localStorage.setItem(
    "vipnetflix_admin_movies",
    JSON.stringify(adminMovies)
  );


  clearMovieForm();

  renderAdminMovies();

  renderDashboard();


  alert("Filme adicionado com sucesso.");

}


/* =====================================================
   LIMPAR FORMULÁRIO DE FILME
   ===================================================== */

function clearMovieForm() {

  document.getElementById("movieTitle").value = "";

  document.getElementById("movieYear").value = "";

  document.getElementById("movieGenre").value = "";

  document.getElementById("moviePoster").value = "";

  document.getElementById("movieVideo").value = "";

  document.getElementById("movieDescription").value = "";

  document.getElementById("moviePremium").value = "false";

}


/* =====================================================
   LISTAR FILMES
   ===================================================== */

function renderAdminMovies() {

  const container =
    document.getElementById("adminMoviesList");

  if (!container) return;


  container.innerHTML = "";


  if (adminMovies.length === 0) {

    container.innerHTML = `
      <p style="color:#999">
        Nenhum filme cadastrado.
      </p>
    `;

    return;

  }


  adminMovies.forEach(movie => {

    const card =
      document.createElement("div");

    card.className = "movie-card";


    card.innerHTML = `

      <img
        src="${movie.poster}"
        alt="${escapeAdminHTML(movie.title)}"
      >

      <div class="card-info">

        <h3>
          ${escapeAdminHTML(movie.title)}
        </h3>

        <p>
          ${movie.year} •
          ${escapeAdminHTML(movie.genre)}
        </p>

        <p>
          ${movie.premium ? "PREMIUM" : "GRATUITO"}
        </p>

        <div class="card-buttons">

          <button
            onclick="deleteMovie(${movie.id})"
          >
            🗑
          </button>

        </div>

      </div>
    `;


    container.appendChild(card);

  });

}


/* =====================================================
   EXCLUIR FILME
   ===================================================== */

function deleteMovie(id) {

  const confirmation =
    confirm(
      "Tem certeza que deseja excluir este filme?"
    );


  if (!confirmation) return;


  adminMovies =
    adminMovies.filter(
      movie => movie.id !== id
    );


  localStorage.setItem(
    "vipnetflix_admin_movies",
    JSON.stringify(adminMovies)
  );


  renderAdminMovies();

  renderDashboard();

}


/* =====================================================
   ADICIONAR SÉRIE
   ===================================================== */

function addSeries() {

  const title =
    document.getElementById("seriesTitle").value.trim();

  const year =
    document.getElementById("seriesYear").value;

  const genre =
    document.getElementById("seriesGenre").value.trim();

  const poster =
    document.getElementById("seriesPoster").value.trim();

  const trailer =
    document.getElementById("seriesTrailer").value.trim();

  const description =
    document.getElementById("seriesDescription").value.trim();

  const premium =
    document.getElementById("seriesPremium").value === "true";


  if (!title) {

    alert("Digite o título da série.");

    return;

  }


  const newSeries = {

    id: Date.now(),

    type: "series",

    title,

    year:
      Number(year) ||
      new Date().getFullYear(),

    genre:
      genre ||
      "Sem categoria",

    poster:
      poster ||
      "https://placehold.co/600x900/151515/ffffff?text=SERIE",

    trailer,

    description:
      description ||
      "Descrição ainda não adicionada.",

    premium,

    status: "publicado",

    seasons: [],

    createdAt: Date.now()

  };


  adminSeries.push(newSeries);


  localStorage.setItem(
    "vipnetflix_admin_series",
    JSON.stringify(adminSeries)
  );


  clearSeriesForm();

  renderAdminSeries();

  renderDashboard();


  alert("Série adicionada com sucesso.");

}


/* =====================================================
   LIMPAR FORMULÁRIO DE SÉRIE
   ===================================================== */

function clearSeriesForm() {

  document.getElementById("seriesTitle").value = "";

  document.getElementById("seriesYear").value = "";

  document.getElementById("seriesGenre").value = "";

  document.getElementById("seriesPoster").value = "";

  document.getElementById("seriesTrailer").value = "";

  document.getElementById("seriesDescription").value = "";

  document.getElementById("seriesPremium").value = "false";

}


/* =====================================================
   LISTAR SÉRIES
   ===================================================== */

function renderAdminSeries() {

  const container =
    document.getElementById("adminSeriesList");

  if (!container) return;


  container.innerHTML = "";


  if (adminSeries.length === 0) {

    container.innerHTML = `
      <p style="color:#999">
        Nenhuma série cadastrada.
      </p>
    `;

    return;

  }


  adminSeries.forEach(show => {

    const card =
      document.createElement("div");

    card.className = "movie-card";


    card.innerHTML = `

      <img
        src="${show.poster}"
        alt="${escapeAdminHTML(show.title)}"
      >

      <div class="card-info">

        <h3>
          ${escapeAdminHTML(show.title)}
        </h3>

        <p>
          ${show.year} •
          ${escapeAdminHTML(show.genre)}
        </p>

        <p>
          ${show.premium ? "PREMIUM" : "GRATUITO"}
        </p>

        <div class="card-buttons">

          <button
            onclick="deleteSeries(${show.id})"
          >
            🗑
          </button>

        </div>

      </div>
    `;


    container.appendChild(card);

  });

}


/* =====================================================
   EXCLUIR SÉRIE
   ===================================================== */

function deleteSeries(id) {

  const confirmation =
    confirm(
      "Tem certeza que deseja excluir esta série?"
    );


  if (!confirmation) return;


  adminSeries =
    adminSeries.filter(
      show => show.id !== id
    );


  localStorage.setItem(
    "vipnetflix_admin_series",
    JSON.stringify(adminSeries)
  );


  renderAdminSeries();

  renderDashboard();

}


/* =====================================================
   CATEGORIAS
   ===================================================== */

function addCategory() {

  const input =
    document.getElementById("categoryName");

  const name =
    input.value.trim();


  if (!name) {

    alert("Digite o nome da categoria.");

    return;

  }


  categories.push({

    id: Date.now(),

    name,

    status: "ativo",

    createdAt: Date.now()

  });


  localStorage.setItem(
    "vipnetflix_categories",
    JSON.stringify(categories)
  );


  input.value = "";

  renderCategories();

}


/* =====================================================
   LISTAR CATEGORIAS
   ===================================================== */

function renderCategories() {

  const container =
    document.getElementById("categoriesList");

  if (!container) return;


  container.innerHTML = "";


  if (categories.length === 0) {

    container.innerHTML = `
      <p style="color:#999">
        Nenhuma categoria cadastrada.
      </p>
    `;

    return;

  }


  categories.forEach(category => {

    const item =
      document.createElement("div");

    item.style.padding = "15px";

    item.style.margin = "10px 5%";

    item.style.background = "#151515";

    item.style.borderRadius = "8px";


    item.innerHTML = `

      <strong>
        ${escapeAdminHTML(category.name)}
      </strong>

      <button
        onclick="deleteCategory(${category.id})"
        style="float:right"
      >
        🗑
      </button>

    `;


    container.appendChild(item);

  });

}


/* =====================================================
   EXCLUIR CATEGORIA
   ===================================================== */

function deleteCategory(id) {

  categories =
    categories.filter(
      category => category.id !== id
    );


  localStorage.setItem(
    "vipnetflix_categories",
    JSON.stringify(categories)
  );


  renderCategories();

}


/* =====================================================
   PLANOS
   ===================================================== */

function addPlan() {

  const name =
    document.getElementById("planName").value.trim();

  const price =
    document.getElementById("planPrice").value;

  const screens =
    document.getElementById("planScreens").value;

  const quality =
    document.getElementById("planQuality").value;


  if (!name) {

    alert("Digite o nome do plano.");

    return;

  }


  plans.push({

    id: Date.now(),

    name,

    price:
      Number(price) || 0,

    screens:
      Number(screens) || 1,

    quality,

    status: "ativo",

    createdAt: Date.now()

  });


  localStorage.setItem(
    "vipnetflix_plans",
    JSON.stringify(plans)
  );


  document.getElementById("planName").value = "";

  document.getElementById("planPrice").value = "";

  document.getElementById("planScreens").value = "";

  document.getElementById("planQuality").value = "HD";


  renderPlans();

  renderDashboard();


  alert("Plano adicionado com sucesso.");

}


/* =====================================================
   LISTAR PLANOS
   ===================================================== */

function renderPlans() {

  const container =
    document.getElementById("plansList");

  if (!container) return;


  container.innerHTML = "";


  if (plans.length === 0) {

    container.innerHTML = `
      <p style="color:#999">
        Nenhum plano cadastrado.
      </p>
    `;

    return;

  }


  plans.forEach(plan => {

    const card =
      document.createElement("div");

    card.className = "movie-card";


    card.innerHTML = `

      <div class="card-info">

        <h3>
          ${escapeAdminHTML(plan.name)}
        </h3>

        <p>
          Preço:
          ${plan.price}
        </p>

        <p>
          Qualidade:
          ${escapeAdminHTML(plan.quality)}
        </p>

        <p>
          Telas:
          ${plan.screens}
        </p>

        <div class="card-buttons">

          <button
            onclick="deletePlan(${plan.id})"
          >
            🗑
          </button>

        </div>

      </div>

    `;


    container.appendChild(card);

  });

}


/* =====================================================
   EXCLUIR PLANO
   ===================================================== */

function deletePlan(id) {

  const confirmation =
    confirm(
      "Tem certeza que deseja excluir este plano?"
    );


  if (!confirmation) return;


  plans =
    plans.filter(
      plan => plan.id !== id
    );


  localStorage.setItem(
    "vipnetflix_plans",
    JSON.stringify(plans)
  );


  renderPlans();

  renderDashboard();

}


/* =====================================================
   PROTEÇÃO CONTRA HTML
   ===================================================== */

function escapeAdminHTML(text) {

  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

    }
