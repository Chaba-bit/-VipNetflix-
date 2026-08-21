/* =========================================================
   VIPNETFLIX
   APP.JS — SISTEMA PRINCIPAL
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  /* =======================================================
     CATÁLOGO
  ======================================================= */

  const catalog = [

    /* =====================================================
       LA CASA DE PAPEL
    ===================================================== */

    {
      id: "lcp",
      title: "La Casa de Papel",
      type: "series",
      genre: "Drama",
      year: 2017,
      rating: 8.5,

      image:
        "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=700&q=85",

      banner:
        "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1500&q=85",

      description:
        "Uma equipe cuidadosamente preparada participa de uma operação de grande escala. Este registro representa a estrutura de uma série dentro do VIPNETFLIX.",

      seasons: [

        {
          number: 1,

          episodes: [

            {
              number: 1,
              title: "Episódio 1",

              image:
                "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=500&q=80",

              description:
                "Primeiro episódio da temporada.",

              /*
                COLOQUE AQUI A URL DO VÍDEO AUTORIZADO.
                Exemplo:
                videoUrl: "https://seu-servidor.com/video.mp4"
              */

              videoUrl: ""
            },

            {
              number: 2,
              title: "Episódio 2",

              image:
                "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=500&q=80",

              description:
                "Segundo episódio da temporada.",

              videoUrl: ""
            },

            {
              number: 3,
              title: "Episódio 3",

              image:
                "https://images.unsplash.com/photo-1533130061792-64b345e4a833?auto=format&fit=crop&w=500&q=80",

              description:
                "Terceiro episódio da temporada.",

              videoUrl: ""
            }

          ]
        },

        {
          number: 2,

          episodes: [

            {
              number: 1,
              title: "Episódio 1",

              image:
                "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=500&q=80",

              description:
                "Primeiro episódio da segunda temporada.",

              videoUrl: ""
            },

            {
              number: 2,
              title: "Episódio 2",

              image:
                "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=500&q=80",

              description:
                "Segundo episódio da segunda temporada.",

              videoUrl: ""
            }

          ]
        }

      ]
    },


    /* =====================================================
       HOMEM-ARANHA: UM NOVO DIA
    ===================================================== */

    {
      id: "spider-new-day",
      title: "Homem-Aranha: Um Novo Dia",
      type: "movie",
      genre: "Ação",
      year: 2026,
      rating: 8.5,

      image:
        "https://images.unsplash.com/photo-1635805737707-575885ab0820?auto=format&fit=crop&w=700&q=85",

      banner:
        "https://images.unsplash.com/photo-1635805737707-575885ab0820?auto=format&fit=crop&w=1500&q=85",

      description:
        "Conteúdo cinematográfico representado no catálogo do VIPNETFLIX. O vídeo deverá ser associado somente através de uma fonte autorizada.",

      /*
        URL DO FILME AUTORIZADO
      */

      videoUrl: ""
    }

  ];


  /* =======================================================
     ESTADO
  ======================================================= */

  let currentContent = null;
  let currentEpisode = null;
  let currentSeason = null;

  let myList =
    readStorage("vipnetflix_my_list", []);

  let progress =
    readStorage("vipnetflix_progress", {});

  let downloads =
    readStorage("vipnetflix_downloads", []);


  /* =======================================================
     ELEMENTOS
  ======================================================= */

  const splash =
    document.getElementById("splash");

  const app =
    document.getElementById("app");

  const pages =
    document.querySelectorAll(".page");

  const navItems =
    document.querySelectorAll(".nav-item");

  const detailsModal =
    document.getElementById("detailsModal");

  const playerModal =
    document.getElementById("playerModal");

  const videoPlayer =
    document.getElementById("videoPlayer");

  const videoMessage =
    document.getElementById("videoMessage");

  const toast =
    document.getElementById("toast");


  /* =======================================================
     INICIALIZAÇÃO
  ======================================================= */

  setTimeout(() => {

    splash.classList.add("hidden");

    app.classList.remove("hidden");

    renderAll();

  }, 1200);


  /* =======================================================
     STORAGE
  ======================================================= */

  function readStorage(key, fallback) {

    try {

      const value =
        localStorage.getItem(key);

      return value
        ? JSON.parse(value)
        : fallback;

    } catch {

      return fallback;

    }

  }


  function saveStorage(key, value) {

    localStorage.setItem(
      key,
      JSON.stringify(value)
    );

  }


  /* =======================================================
     NAVEGAÇÃO
  ======================================================= */

  navItems.forEach(button => {

    button.addEventListener("click", () => {

      openPage(
        button.dataset.page
      );

    });

  });


  document
    .querySelectorAll("[data-open-page]")
    .forEach(button => {

      button.addEventListener(
        "click",
        () => {

          openPage(
            button.dataset.openPage
          );

        }
      );

    });


  function openPage(pageId) {

    pages.forEach(page => {

      page.classList.remove("active");

    });

    const page =
      document.getElementById(pageId);

    if (page) {

      page.classList.add("active");

    }

    navItems.forEach(button => {

      button.classList.toggle(
        "active",
        button.dataset.page === pageId
      );

    });

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

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
     RENDER GERAL
  ======================================================= */

  function renderAll() {

    renderHero();

    renderHomeRows();

    renderMovies();

    renderSeries();

    renderMyList();

    renderDownloads();

  }


  /* =======================================================
     HERO
  ======================================================= */

  function renderHero() {

    const hero =
      document.getElementById("hero");

    const title =
      document.getElementById("heroTitle");

    const meta =
      document.getElementById("heroMeta");

    const description =
      document.getElementById("heroDescription");

    const content =
      catalog[0];

    hero.style.backgroundImage = `
      linear-gradient(
        to top,
        #080808 2%,
        rgba(8,8,8,.75) 30%,
        rgba(8,8,8,.15) 70%
      ),
      linear-gradient(
        to right,
        rgba(0,0,0,.85),
        transparent
      ),
      url("${content.banner}")
    `;

    title.textContent =
      content.title;

    meta.textContent =
      `${content.type === "series" ? "Série" : "Filme"} • ${content.genre} • ⭐ ${content.rating}`;

    description.textContent =
      content.description;

    document
      .getElementById("heroWatch")
      .onclick = () => {

        if (content.type === "series") {

          openDetails(content);

        } else {

          playContent(content);

        }

      };


    document
      .getElementById("heroDetails")
      .onclick = () => {

        openDetails(content);

      };

  }


  /* =======================================================
     HOME
  ======================================================= */

  function renderHomeRows() {

    const movies =
      catalog.filter(
        item => item.type === "movie"
      );

    const series =
      catalog.filter(
        item => item.type === "series"
      );

    renderHorizontal(
      document.getElementById("popularRow"),
      catalog
    );

    renderHorizontal(
      document.getElementById("continueRow"),
      getContinueContent()
    );

    renderHorizontal(
      document.getElementById("homeMoviesRow"),
      movies
    );

    renderHorizontal(
      document.getElementById("homeSeriesRow"),
      series
    );

  }


  function getContinueContent() {

    const ids =
      Object.keys(progress);

    return catalog.filter(
      item => ids.includes(item.id)
    );

  }


  /* =======================================================
     FILMES
  ======================================================= */

  function renderMovies() {

    const movies =
      catalog.filter(
        item => item.type === "movie"
      );

    renderGrid(
      document.getElementById("moviesGrid"),
      movies
    );

  }


  /* =======================================================
     SÉRIES
  ======================================================= */

  function renderSeries() {

    const series =
      catalog.filter(
        item => item.type === "series"
      );

    renderGrid(
      document.getElementById("seriesGrid"),
      series
    );

  }


  /* =======================================================
     MINHA LISTA
  ======================================================= */

  function renderMyList() {

    const items =
      catalog.filter(item =>
        myList.includes(item.id)
      );

    renderGrid(
      document.getElementById("myListGrid"),
      items
    );

  }


  /* =======================================================
     DOWNLOADS
  ======================================================= */

  function renderDownloads() {

    const items =
      catalog.filter(item =>
        downloads.includes(item.id)
      );

    renderGrid(
      document.getElementById("downloadsGrid"),
      items
    );

  }


  /* =======================================================
     CARDS
  ======================================================= */

  function renderGrid(
    container,
    items
  ) {

    container.innerHTML = "";

    if (!items.length) {

      container.innerHTML = `
        <div class="empty-message"
             style="
               grid-column:1/-1;
               padding:25px;
               color:#888;
             ">
          Nenhum conteúdo encontrado.
        </div>
      `;

      return;

    }

    items.forEach(item => {

      container.appendChild(
        createCard(item)
      );

    });

  }


  function renderHorizontal(
    container,
    items
  ) {

    container.innerHTML = "";

    if (!items.length) {

      container.innerHTML = `
        <div style="color:#777;">
          Nenhum conteúdo.
        </div>
      `;

      return;

    }

    items.forEach(item => {

      container.appendChild(
        createCard(item)
      );

    });

  }


  function createCard(item) {

    const card =
      document.createElement("article");

    card.className = "card";

    const type =
      item.type === "series"
        ? "Série"
        : "Filme";

    card.innerHTML = `

      <img
        class="card-image"
        src="${item.image}"
        alt="${escapeHTML(item.title)}"
        loading="lazy"
      >

      <div class="card-body">

        <div class="card-title">
          ${escapeHTML(item.title)}
        </div>

        <div class="card-meta">
          ${type}
          ·
          ${item.year}
          ·
          <span class="rating">
            ⭐ ${item.rating}
          </span>
        </div>

      </div>

    `;

    card.addEventListener(
      "click",
      () => openDetails(item)
    );

    return card;

  }


  /* =======================================================
     DETALHES
  ======================================================= */

  function openDetails(item) {

    currentContent = item;

    document.getElementById(
      "detailsImage"
    ).src = item.image;

    document.getElementById(
      "detailsTitle"
    ).textContent = item.title;

    document.getElementById(
      "detailsMeta"
    ).innerHTML = `

      <span>${item.type === "series" ? "Série" : "Filme"}</span>
      <span>${item.genre}</span>
      <span>${item.year}</span>
      <span>⭐ ${item.rating}</span>

    `;

    document.getElementById(
      "detailsDescription"
    ).textContent =
      item.description;


    const actions =
      document.getElementById(
        "detailsActions"
      );

    actions.innerHTML = "";


    /* ASSISTIR */

    const watchButton =
      makeButton(
        "▶ Assistir",
        "primary"
      );

    watchButton.onclick = () => {

      if (item.type === "series") {

        const firstSeason =
          item.seasons?.[0];

        const firstEpisode =
          firstSeason?.episodes?.[0];

        if (firstEpisode) {

          playEpisode(
            item,
            firstSeason,
            firstEpisode
          );

        }

      } else {

        playContent(item);

      }

    };

    actions.appendChild(
      watchButton
    );


    /* MINHA LISTA */

    const listButton =
      makeButton(
        myList.includes(item.id)
          ? "✓ Na Minha Lista"
          : "＋ Minha Lista",
        "secondary"
      );

    listButton.onclick = () => {

      toggleMyList(item.id);

      listButton.textContent =
        myList.includes(item.id)
          ? "✓ Na Minha Lista"
          : "＋ Minha Lista";

    };

    actions.appendChild(
      listButton
    );


    /* DOWNLOAD */

    const downloadButton =
      makeButton(
        downloads.includes(item.id)
          ? "✓ Nos Downloads"
          : "⬇️ Download",
        "secondary"
      );

    downloadButton.onclick = () => {

      requestDownload(item);

    };

    actions.appendChild(
      downloadButton
    );


    /* TEMPORADAS */

    const seasonArea =
      document.getElementById(
        "seasonArea"
      );

    if (item.type === "series") {

      seasonArea.classList.remove(
        "hidden"
      );

      renderSeasons(item);

    } else {

      seasonArea.classList.add(
        "hidden"
      );

    }


    detailsModal.classList.remove(
      "hidden"
    );

  }


  function makeButton(
    text,
    type
  ) {

    const button =
      document.createElement("button");

    button.className =
      `btn ${type}`;

    button.textContent =
      text;

    return button;

  }


  /* =======================================================
     TEMPORADAS
  ======================================================= */

  function renderSeasons(series) {

    const buttons =
      document.getElementById(
        "seasonButtons"
      );

    buttons.innerHTML = "";

    const episodes =
      document.getElementById(
        "episodeList"
      );

    episodes.innerHTML = "";


    series.seasons.forEach(
      (season, index) => {

        const button =
          document.createElement("button");

        button.className =
          "season-button";

        button.textContent =
          `Temporada ${season.number}`;

        button.addEventListener(
          "click",
          () => {

            document
              .querySelectorAll(
                ".season-button"
              )
              .forEach(
                b => b.classList.remove("active")
              );

            button.classList.add(
              "active"
            );

            renderEpisodes(
              series,
              season
            );

          }
        );

        buttons.appendChild(
          button
        );

        if (index === 0) {

          button.classList.add(
            "active"
          );

          renderEpisodes(
            series,
            season
          );

        }

      }
    );

  }


  /* =======================================================
     EPISÓDIOS
  ======================================================= */

  function renderEpisodes(
    series,
    season
  ) {

    currentSeason =
      season;

    const list =
      document.getElementById(
        "episodeList"
      );

    list.innerHTML = "";

    season.episodes.forEach(
      episode => {

        const element =
          document.createElement("div");

        element.className =
          "episode";

        element.innerHTML = `

          <img
            class="episode-image"
            src="${episode.image}"
            alt=""
          >

          <div class="episode-info">

            <h3>
              ${episode.number}.
              ${escapeHTML(episode.title)}
            </h3>

            <p>
              ${escapeHTML(episode.description)}
            </p>

          </div>

          <button
            class="episode-watch"
            title="Assistir"
          >
            ▶
          </button>

        `;

        element
          .querySelector(
            ".episode-watch"
          )
          .addEventListener(
            "click",
            () => {

              playEpisode(
                series,
                season,
                episode
              );

            }
          );

        list.appendChild(
          element
        );

      }
    );

  }


  /* =======================================================
     PLAYER — FILMES
  ======================================================= */

  function playContent(item) {

    currentContent =
      item;

    currentEpisode =
      null;

    document.getElementById(
      "playerTitle"
    ).textContent =
      item.title;

    document
      .getElementById(
        "nextEpisodeButton"
      )
      .classList.add("hidden");

    openVideo(
      item.videoUrl
    );

  }


  /* =======================================================
     PLAYER — EPISÓDIOS
  ======================================================= */

  function playEpisode(
    series,
    season,
    episode
  ) {

    currentContent =
      series;

    currentSeason =
      season;

    currentEpisode =
      episode;

    document.getElementById(
      "playerTitle"
    ).textContent =
      `${series.title} — T${season.number} E${episode.number}`;

    openVideo(
      episode.videoUrl
    );


    const next =
      findNextEpisode(
        series,
        season,
        episode
      );

    const nextButton =
      document.getElementById(
        "nextEpisodeButton"
      );

    if (next) {

      nextButton.classList.remove(
        "hidden"
      );

      nextButton.onclick = () => {

        playEpisode(
          series,
          next.season,
          next.episode
        );

      };

    } else {

      nextButton.classList.add(
        "hidden"
      );

    }

  }


  /* =======================================================
     ABRIR VÍDEO
  ======================================================= */

  function openVideo(url) {

    videoPlayer.pause();

    videoPlayer.removeAttribute(
      "src"
    );

    videoPlayer.load();

    videoMessage.classList.add(
      "hidden"
    );


    if (!url) {

      videoMessage.classList.remove(
        "hidden"
      );

      playerModal.classList.remove(
        "hidden"
      );

      return;

    }


    videoPlayer.src =
      url;

    playerModal.classList.remove(
      "hidden"
    );


    videoPlayer.play()
      .catch(() => {

        /*
          Alguns navegadores bloqueiam
          autoplay com som.
        */

      });

  }


  /* =======================================================
     PRÓXIMO EPISÓDIO
  ======================================================= */

  function findNextEpisode(
    series,
    season,
    episode
  ) {

    const index =
      season.episodes.findIndex(
        ep =>
          ep.number === episode.number
      );

    if (
      index >= 0 &&
      index <
      season.episodes.length - 1
    ) {

      return {

        season,

        episode:
          season.episodes[index + 1]

      };

    }


    const seasonIndex =
      series.seasons.findIndex(
        s =>
          s.number === season.number
      );


    if (
      seasonIndex >= 0 &&
      seasonIndex <
      series.seasons.length - 1
    ) {

      const nextSeason =
        series.seasons[
          seasonIndex + 1
        ];

      if (
        nextSeason.episodes.length
      ) {

        return {

          season: nextSeason,

          episode:
            nextSeason.episodes[0]

        };

      }

    }

    return null;

  }


  /* =======================================================
     FECHAR PLAYER
  ======================================================= */

  document
    .getElementById("closePlayer")
    .addEventListener(
      "click",
      closePlayer
    );


  function closePlayer() {

    videoPlayer.pause();

    videoPlayer.removeAttribute(
      "src"
    );

    videoPlayer.load();

    playerModal.classList.add(
      "hidden"
    );

  }


  /* =======================================================
     FECHAR DETALHES
  ======================================================= */

  document
    .getElementById("closeDetails")
    .addEventListener(
      "click",
      () => {

        detailsModal.classList.add(
          "hidden"
        );

      }
    );


  detailsModal.addEventListener(
    "click",
    event => {

      if (
        event.target ===
        detailsModal
      ) {

        detailsModal.classList.add(
          "hidden"
        );

      }

    }
  );


  /* =======================================================
     MINHA LISTA
  ======================================================= */

  function toggleMyList(id) {

    if (
      myList.includes(id)
    ) {

      myList =
        myList.filter(
          item => item !== id
        );

      showToast(
        "Removido da Minha Lista"
      );

    } else {

      myList.push(id);

      showToast(
        "Adicionado à Minha Lista"
      );

    }

    saveStorage(
      "vipnetflix_my_list",
      myList
    );

    renderMyList();

  }


  /* =======================================================
     DOWNLOADS
  ======================================================= */

  function requestDownload(item) {

    if (
      !item.videoUrl
    ) {

      showToast(
        "Este conteúdo ainda não possui vídeo autorizado configurado."
      );

      return;

    }


    if (
      downloads.includes(item.id)
    ) {

      showToast(
        "Este conteúdo já está nos Downloads."
      );

      return;

    }


    /*
      O navegador não permite garantir
      armazenamento offline de qualquer
      URL externa.

      Por isso registramos o conteúdo
      somente quando a fonte permitir
      download.
    */

    downloads.push(
      item.id
    );

    saveStorage(
      "vipnetflix_downloads",
      downloads
    );

    renderDownloads();

    showToast(
      "Conteúdo adicionado aos Downloads."
    );

  }


  /* =======================================================
     PESQUISA
  ======================================================= */

  const searchInput =
    document.getElementById(
      "searchInput"
    );

  const searchResults =
    document.getElementById(
      "searchResults"
    );


  searchInput.addEventListener(
    "input",
    () => {

      const query =
        searchInput.value
          .trim()
          .toLowerCase();


      if (!query) {

        searchResults.innerHTML = "";

        return;

      }


      const results =
        catalog.filter(
          item =>

            item.title
              .toLowerCase()
              .includes(query)

            ||

            item.genre
              .toLowerCase()
              .includes(query)

            ||

            item.type
              .toLowerCase()
              .includes(query)

        );


      renderGrid(
        searchResults,
        results
      );

    }
  );


  /* PESQUISA NO TOPO */

  document
    .getElementById(
      "topSearchButton"
    )
    .addEventListener(
      "click",
      () => {

        openPage(
          "searchPage"
        );

        setTimeout(
          () => searchInput.focus(),
          100
        );

      }
    );


  /* =======================================================
     PROGRESSO DO VÍDEO
  ======================================================= */

  videoPlayer.addEventListener(
    "timeupdate",
    () => {

      if (!currentContent) {
        return;
      }

      progress[
        currentContent.id
      ] = {

        currentTime:
          videoPlayer.currentTime,

        duration:
          videoPlayer.duration || 0

      };

      saveStorage(
        "vipnetflix_progress",
        progress
      );

    }
  );


  /* =======================================================
     RESTAURAR PROGRESSO
  ======================================================= */

  videoPlayer.addEventListener(
    "loadedmetadata",
    () => {

      if (!currentContent) {
        return;
      }

      const saved =
        progress[
          currentContent.id
        ];

      if (
        saved &&
        saved.currentTime > 5 &&
        saved.currentTime <
        videoPlayer.duration - 5
      ) {

        videoPlayer.currentTime =
          saved.currentTime;

      }

    }
  );


  /* =======================================================
     TOAST
  ======================================================= */

  let toastTimer;

  function showToast(message) {

    toast.textContent =
      message;

    toast.classList.add(
      "show"
    );

    clearTimeout(
      toastTimer
    );

    toastTimer =
      setTimeout(
        () => {

          toast.classList.remove(
            "show"
          );

        },
        2500
      );

  }


  /* =======================================================
     SEGURANÇA BÁSICA DE TEXTO
  ======================================================= */

  function escapeHTML(value) {

    return String(value)
      .replace(
        /&/g,
        "&amp;"
      )
      .replace(
        /</g,
        "&lt;"
      )
      .replace(
        />/g,
        "&gt;"
      )
      .replace(
        /"/g,
        "&quot;"
      )
      .replace(
        /'/g,
        "&#039;"
      );

  }

});
