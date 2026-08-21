/* =========================================================
   VIPNETFLIX — APP.JS
   VERSÃO COMPLETA E CORRIGIDA
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       ELEMENTOS
    ===================================================== */

    const splashScreen = document.getElementById("splashScreen");
    const appScreen = document.getElementById("appScreen");

    const enterButton = document.getElementById("enterButton");

    const menuButton = document.getElementById("menuButton");
    const sideMenu = document.getElementById("sideMenu");
    const menuOverlay = document.getElementById("menuOverlay");

    const searchButton = document.getElementById("searchButton");
    const searchBox = document.getElementById("searchBox");
    const searchInput = document.getElementById("searchInput");
    const closeSearch = document.getElementById("closeSearch");

    const continueList =
        document.getElementById("continueList");

    const catalogList =
        document.getElementById("catalogList");

    const downloadList =
        document.getElementById("downloadList");

    const genresList =
        document.getElementById("genresList");

    const favoritesList =
        document.getElementById("favoritesList");

    const searchResultsSection =
        document.getElementById("searchResultsSection");

    const searchResults =
        document.getElementById("searchResults");

    const playerModal =
        document.getElementById("playerModal");

    const detailsModal =
        document.getElementById("detailsModal");

    const toast =
        document.getElementById("toast");


    console.log("VIPNETFLIX: app.js carregado");


    /* =====================================================
       CATÁLOGO
    ===================================================== */

    const catalog = [

        {
            id: 1,
            title: "Reacher",
            type: "Série",
            genre: "Ação",
            year: 2022,
            rating: 8.7,
            seasons: "2 Temporadas",
            description:
                "Um investigador militar viaja pelo país e acaba envolvido numa perigosa investigação.",
            image:
                "https://images.unsplash.com/photo-1599685315640-4eab9f2a2a35?auto=format&fit=crop&w=600&q=80"
        },

        {
            id: 2,
            title: "Aventura VIP",
            type: "Filme",
            genre: "Aventura",
            year: 2026,
            rating: 8.8,
            seasons: "Filme",
            description:
                "Uma aventura extraordinária começa quando uma equipa encontra um segredo perdido.",
            image:
                "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=600&q=80"
        },

        {
            id: 3,
            title: "Além do Espaço",
            type: "Filme",
            genre: "Ficção científica",
            year: 2026,
            rating: 8.2,
            seasons: "Filme",
            description:
                "Uma missão espacial revela um segredo inesperado.",
            image:
                "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=600&q=80"
        },

        {
            id: 4,
            title: "O Voto de Morte",
            type: "Série",
            genre: "Drama",
            year: 2026,
            rating: 8.4,
            seasons: "1 Temporada",
            description:
                "Uma decisão muda completamente o destino de um grupo de pessoas.",
            image:
                "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=600&q=80"
        },

        {
            id: 5,
            title: "Percy Jackson",
            type: "Série",
            genre: "Fantasia",
            year: 2026,
            rating: 8.5,
            seasons: "1 Temporada",
            description:
                "Um jovem descobre um mundo de deuses, monstros e aventuras.",
            image:
                "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=600&q=80"
        },

        {
            id: 6,
            title: "Homem-Aranha",
            type: "Filme",
            genre: "Ação",
            year: 2026,
            rating: 8.9,
            seasons: "Filme",
            description:
                "Um novo desafio coloca o herói diante de uma ameaça inesperada.",
            image:
                "https://images.unsplash.com/photo-1635805737707-575885ab0820?auto=format&fit=crop&w=600&q=80"
        },

        {
            id: 7,
            title: "The Witcher",
            type: "Série",
            genre: "Fantasia",
            year: 2025,
            rating: 8.6,
            seasons: "4 Temporadas",
            description:
                "Um caçador de monstros percorre um mundo cheio de perigos.",
            image:
                "https://images.unsplash.com/photo-1518709594023-6eab9bab7b23?auto=format&fit=crop&w=600&q=80"
        },

        {
            id: 8,
            title: "A Casa do Dragão",
            type: "Série",
            genre: "Fantasia",
            year: 2025,
            rating: 8.8,
            seasons: "2 Temporadas",
            description:
                "Uma guerra pelo poder coloca uma família contra outra.",
            image:
                "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80"
        },

        {
            id: 9,
            title: "Stranger Things",
            type: "Série",
            genre: "Ficção científica",
            year: 2025,
            rating: 8.9,
            seasons: "5 Temporadas",
            description:
                "Um grupo de jovens enfrenta acontecimentos misteriosos.",
            image:
                "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=600&q=80"
        },

        {
            id: 10,
            title: "O Conde de Monte Cristo",
            type: "Série",
            genre: "Drama",
            year: 2025,
            rating: 8.3,
            seasons: "1 Temporada",
            description:
                "Uma história de injustiça, sobrevivência e vingança.",
            image:
                "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=600&q=80"
        },

        {
            id: 11,
            title: "O Problema dos 3 Corpos",
            type: "Série",
            genre: "Ficção científica",
            year: 2024,
            rating: 8.1,
            seasons: "1 Temporada",
            description:
                "Uma descoberta científica ameaça mudar o futuro da humanidade.",
            image:
                "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?auto=format&fit=crop&w=600&q=80"
        },

        {
            id: 12,
            title: "Operação Lioness",
            type: "Série",
            genre: "Ação",
            year: 2024,
            rating: 8.2,
            seasons: "2 Temporadas",
            description:
                "Uma missão secreta coloca uma equipa de agentes em perigo.",
            image:
                "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=600&q=80"
        }

    ];


    /* =====================================================
       CONTINUAR ASSISTINDO
    ===================================================== */

    let continueWatching = [

        {
            id: 4,
            progress: 64,
            remaining: "1h 32m restantes"
        },

        {
            id: 5,
            progress: 42,
            remaining: "S1:E3"
        },

        {
            id: 6,
            progress: 58,
            remaining: "1h 05m restantes"
        }

    ];


    /* =====================================================
       DOWNLOADS
    ===================================================== */

    let downloads = [

        {
            id: 7,
            title: "The Witcher",
            episode: "T2:E4",
            quality: "720p",
            size: 1.2,
            image: catalog[6].image
        },

        {
            id: 8,
            title: "A Casa do Dragão",
            episode: "S1:E6",
            quality: "720p",
            size: 1.1,
            image: catalog[7].image
        },

        {
            id: 9,
            title: "Stranger Things",
            episode: "S1:E7",
            quality: "720p",
            size: 1.0,
            image: catalog[8].image
        }

    ];


    /* =====================================================
       FAVORITOS
    ===================================================== */

    let favorites = [];

    try {

        favorites = JSON.parse(
            localStorage.getItem(
                "vipnetflix_favorites"
            ) || "[]"
        );

    } catch (error) {

        favorites = [];

    }


    /* =====================================================
       ENTRAR
    ===================================================== */

    if (enterButton) {

        enterButton.addEventListener(
            "click",
            function (event) {

                event.preventDefault();

                if (splashScreen) {

                    splashScreen.style.opacity = "0";

                    splashScreen.style.transition =
                        "opacity .4s";

                }

                setTimeout(
                    function () {

                        if (splashScreen) {

                            splashScreen.classList.add(
                                "hidden"
                            );

                        }

                        if (appScreen) {

                            appScreen.classList.remove(
                                "hidden"
                            );

                        }

                        window.scrollTo(
                            0,
                            0
                        );

                    },
                    400
                );

            }
        );

    }


    /* =====================================================
       MENU
    ===================================================== */

    if (menuButton) {

        menuButton.addEventListener(
            "click",
            function (event) {

                event.preventDefault();

                if (sideMenu) {

                    sideMenu.classList.add(
                        "open"
                    );

                }

                if (menuOverlay) {

                    menuOverlay.classList.remove(
                        "hidden"
                    );

                }

            }
        );

    }


    if (menuOverlay) {

        menuOverlay.addEventListener(
            "click",
            function () {

                closeMenu();

            }
        );

    }


    function closeMenu() {

        if (sideMenu) {

            sideMenu.classList.remove(
                "open"
            );

        }

        if (menuOverlay) {

            menuOverlay.classList.add(
                "hidden"
            );

        }

    }


    /* =====================================================
       PESQUISA
    ===================================================== */

    if (searchButton) {

        searchButton.addEventListener(
            "click",
            function (event) {

                event.preventDefault();

                if (searchBox) {

                    searchBox.classList.remove(
                        "hidden"
                    );

                }

                if (searchInput) {

                    searchInput.focus();

                }

            }
        );

    }


    if (closeSearch) {

        closeSearch.addEventListener(
            "click",
            function (event) {

                event.preventDefault();

                if (searchInput) {

                    searchInput.value = "";

                }

                if (searchResults) {

                    searchResults.innerHTML = "";

                }

                if (searchResultsSection) {

                    searchResultsSection.classList.add(
                        "hidden"
                    );

                }

                if (searchBox) {

                    searchBox.classList.add(
                        "hidden"
                    );

                }

            }
        );

    }


    if (searchInput) {

        searchInput.addEventListener(
            "input",
            function () {

                const texto =
                    searchInput.value
                        .trim()
                        .toLowerCase();


                if (texto === "") {

                    if (searchResults) {

                        searchResults.innerHTML = "";

                    }

                    if (searchResultsSection) {

                        searchResultsSection.classList.add(
                            "hidden"
                        );

                    }

                    return;

                }


                const resultados =
                    catalog.filter(
                        function (filme) {

                            const titulo =
                                String(
                                    filme.title || ""
                                ).toLowerCase();

                            const genero =
                                String(
                                    filme.genre || ""
                                ).toLowerCase();

                            const tipo =
                                String(
                                    filme.type || ""
                                ).toLowerCase();

                            return (
                                titulo.includes(texto) ||
                                genero.includes(texto) ||
                                tipo.includes(texto)
                            );

                        }
                    );


                if (searchResultsSection) {

                    searchResultsSection.classList.remove(
                        "hidden"
                    );

                }

                renderSearchResults(
                    resultados
                );

            }
        );

    }


    /* =====================================================
       RESULTADOS DA PESQUISA
    ===================================================== */

    function renderSearchResults(resultados) {

        if (!searchResults) return;

        searchResults.innerHTML = "";


        if (!resultados.length) {

            searchResults.innerHTML = `

                <div class="no-results">

                    <div style="font-size:40px;">
                        🔍
                    </div>

                    <h3>
                        Nenhum resultado encontrado
                    </h3>

                    <p>
                        Tenta outro nome de filme ou série.
                    </p>

                </div>

            `;

            return;

        }


        resultados.forEach(
            function (filme) {

                const card =
                    document.createElement(
                        "article"
                    );

                card.className =
                    "poster-card search-result-card";

                card.dataset.id =
                    filme.id;


                card.innerHTML = `

                    <div class="poster-wrapper">

                        <img
                            src="${filme.image}"
                            alt="${filme.title}"
                            loading="lazy"
                        >

                        <button
                            class="poster-play"
                            data-play="${filme.id}"
                            type="button"
                        >
                            ▶
                        </button>

                    </div>

                    <h3>
                        ${filme.title}
                    </h3>

                    <p>
                        ${filme.year}
                        •
                        ${filme.genre}
                    </p>

                `;


                searchResults.appendChild(
                    card
                );

            }
        );

    }


    /* =====================================================
       CLIQUE NOS RESULTADOS DA PESQUISA
    ===================================================== */

    if (searchResults) {

        searchResults.addEventListener(
            "click",
            function (event) {

                const playButton =
                    event.target.closest(
                        "[data-play]"
                    );


                if (playButton) {

                    event.preventDefault();
                    event.stopPropagation();

                    const id =
                        Number(
                            playButton.dataset.play
                        );

                    const filme =
                        catalog.find(
                            function (item) {

                                return item.id === id;

                            }
                        );


                    if (filme) {

                        openPlayer(
                            filme
                        );

                    }

                    return;

                }


                const card =
                    event.target.closest(
                        ".search-result-card"
                    );


                if (card) {

                    const id =
                        Number(
                            card.dataset.id
                        );

                    const filme =
                        catalog.find(
                            function (item) {

                                return item.id === id;

                            }
                        );


                    if (filme) {

                        openDetails(
                            filme
                        );

                    }

                }

            }
        );

    }


    /* =====================================================
       CONTINUAR ASSISTINDO
    ===================================================== */

    function renderContinue() {

        if (!continueList) return;

        continueList.innerHTML = "";


        continueWatching.forEach(
            function (item) {

                const movie =
                    catalog.find(
                        function (x) {

                            return x.id === item.id;

                        }
                    );


                if (!movie) return;


                const card =
                    document.createElement(
                        "article"
                    );

                card.className =
                    "continue-card";


                card.innerHTML = `

                    <div class="poster-wrapper">

                        <img
                            src="${movie.image}"
                            alt="${movie.title}"
                        >

                        <button
                            class="poster-play"
                            data-play="${movie.id}"
                            type="button"
                        >
                            ▶
                        </button>

                        <div class="progress">

                            <div
                                style="
                                    width:${item.progress}%;
                                "
                            ></div>

                        </div>

                    </div>

                    <div class="card-title">
                        ${movie.title}
                    </div>

                    <div class="card-subtitle">
                        ${item.remaining}
                    </div>

                `;


                continueList.appendChild(
                    card
                );

            }
        );

    }


    /* =====================================================
       CATÁLOGO
    ===================================================== */

    function renderGrid(
        container,
        items
    ) {

        if (!container) return;

        container.innerHTML = "";


        if (!items.length) {

            container.innerHTML = `

                <p style="
                    color:#aaa;
                    grid-column:1/-1;
                    text-align:center;
                    padding:25px;
                ">
                    Nenhum conteúdo encontrado.
                </p>

            `;

            return;

        }


        items.forEach(
            function (movie) {

                const card =
                    document.createElement(
                        "article"
                    );

                card.className =
                    "poster-card";

                card.dataset.id =
                    movie.id;


                card.innerHTML = `

                    <div class="poster-wrapper">

                        <img
                            src="${movie.image}"
                            alt="${movie.title}"
                            loading="lazy"
                        >

                        <button
                            class="poster-play"
                            data-play="${movie.id}"
                            type="button"
                        >
                            ▶
                        </button>

                    </div>

                    <h3>
                        ${movie.title}
                    </h3>

                    <p>
                        ${movie.year}
                        •
                        ${movie.genre}
                    </p>

                `;


                container.appendChild(
                    card
                );

            }
        );

    }


    /* =====================================================
       CLIQUES NAS CAPAS
    ===================================================== */

    document.addEventListener(
        "click",
        function (event) {

            const playButton =
                event.target.closest(
                    "[data-play]"
                );


            if (playButton) {

                event.preventDefault();
                event.stopPropagation();

                const id =
                    Number(
                        playButton.dataset.play
                    );


                const movie =
                    catalog.find(
                        function (item) {

                            return item.id === id;

                        }
                    );


                if (movie) {

                    openPlayer(
                        movie
                    );

                }

                return;

            }


            const card =
                event.target.closest(
                    ".poster-card"
                );


            if (card) {

                const id =
                    Number(
                        card.dataset.id
                    );


                const movie =
                    catalog.find(
                        function (item) {

                            return item.id === id;

                        }
                    );


                if (movie) {

                    openDetails(
                        movie
                    );

                }

            }

        }
    );


    /* =====================================================
       PLAYER
    ===================================================== */

    function openPlayer(movie) {

        if (!movie) return;


        const title =
            document.getElementById(
                "playerTitle"
            );


        if (title) {

            title.textContent =
                movie.title;

        }


        if (playerModal) {

            playerModal.classList.remove(
                "hidden"
            );

        }

    }


    const closePlayer =
        document.getElementById(
            "closePlayer"
        );


    if (closePlayer) {

        closePlayer.addEventListener(
            "click",
            function () {

                if (playerModal) {

                    playerModal.classList.add(
                        "hidden"
                    );

                }

            }
        );

    }


    const playVideo =
        document.getElementById(
            "playVideo"
        );


    if (playVideo) {

        playVideo.addEventListener(
            "click",
            function () {

                showToast(
                    "Player pronto para reproduzir o conteúdo."
                );

            }
        );

    }


    /* =====================================================
       DETALHES
    ===================================================== */

    let selectedMovie = null;


    function openDetails(movie) {

        if (!movie) return;

        selectedMovie =
            movie;


        const image =
            document.getElementById(
                "detailsImage"
            );

        const title =
            document.getElementById(
                "detailsTitle"
            );

        const description =
            document.getElementById(
                "detailsDescription"
            );


        if (image) {

            image.src =
                movie.image;

        }


        if (title) {

            title.textContent =
                movie.title;

        }


        if (description) {

            description.textContent =
                movie.description;

        }


        if (detailsModal) {

            detailsModal.classList.remove(
                "hidden"
            );

        }

    }


    const closeDetails =
        document.getElementById(
            "closeDetails"
        );


    if (closeDetails) {

        closeDetails.addEventListener(
            "click",
            function () {

                if (detailsModal) {

                    detailsModal.classList.add(
                        "hidden"
                    );

                }

            }
        );

    }


    const detailsPlay =
        document.getElementById(
            "detailsPlay"
        );


    if (detailsPlay) {

        detailsPlay.addEventListener(
            "click",
            function () {

                if (!selectedMovie) return;


                if (detailsModal) {

                    detailsModal.classList.add(
                        "hidden"
                    );

                }


                openPlayer(
                    selectedMovie
                );

            }
        );

    }


    const detailsDownload =
        document.getElementById(
            "detailsDownload"
        );


    if (detailsDownload) {

        detailsDownload.addEventListener(
            "click",
            function () {

                if (!selectedMovie) return;

                addDownload(
                    selectedMovie
                );

            }
        );

    }


    /* =====================================================
       HERO
    ===================================================== */

    const continueHero =
        document.getElementById(
            "continueHero"
        );


    if (continueHero) {

        continueHero.addEventListener(
            "click",
            function () {

                const movie =
                    catalog.find(
                        function (item) {

                            return item.id === 1;

                        }
                    );


                openPlayer(
                    movie
                );

            }
        );

    }


    const downloadHero =
        document.getElementById(
            "downloadHero"
        );


    if (downloadHero) {

        downloadHero.addEventListener(
            "click",
            function () {

                const movie =
                    catalog.find(
                        function (item) {

                            return item.id === 1;

                        }
                    );


                addDownload(
                    movie
                );

            }
        );

    }


    const favoriteHero =
        document.getElementById(
            "favoriteHero"
        );


    if (favoriteHero) {

        favoriteHero.addEventListener(
            "click",
            function () {

                const movie =
                    catalog.find(
                        function (item) {

                            return item.id === 1;

                        }
                    );


                toggleFavorite(
                    movie
                );

            }
        );

    }


    /* =====================================================
       DOWNLOADS
    ===================================================== */

    function renderDownloads() {

        if (!downloadList) return;

        downloadList.innerHTML = "";


        downloads.forEach(
            function (download) {

                const item =
                    document.createElement(
                        "div"
                    );


                item.className =
                    "download-item";


                item.innerHTML = `

                    <img
                        class="download-image"
                        src="${download.image}"
                        alt="${download.title}"
                    >

                    <div class="download-info">

                        <strong>
                            ${download.title}
                        </strong>

                        <span>
                            ${download.episode}
                            ·
                            ${download.quality}
                            ·
                            ${download.size.toFixed(1)}
                            GB
                        </span>

                        <span class="download-status">
                            Baixado ✓
                        </span>

                    </div>


                    <button
                        class="offline-button"
                        data-offline="${download.id}"
                        type="button"
                    >
                        ▶ ASSISTIR OFFLINE
                    </button>


                    <button
                        class="download-menu"
                        data-remove-download="${download.id}"
                        type="button"
                    >
                        ⋮
                    </button>

                `;


                downloadList.appendChild(
                    item
                );

            }
        );


        updateStorage();

    }


    if (downloadList) {

        downloadList.addEventListener(
            "click",
            function (event) {

                const offline =
                    event.target.closest(
                        "[data-offline]"
                    );


                if (offline) {

                    const id =
                        Number(
                            offline.dataset.offline
                        );


                    const movie =
                        catalog.find(
                            function (item) {

                                return item.id === id;

                            }
                        );


                    if (movie) {

                        openPlayer(
                            movie
                        );

                    } else {

                        showToast(
                            "Conteúdo offline selecionado."
                        );

                    }

                    return;

                }


                const remove =
                    event.target.closest(
                        "[data-remove-download]"
                    );


                if (remove) {

                    const id =
                        Number(
                            remove.dataset.removeDownload
                        );


                    downloads =
                        downloads.filter(
                            function (item) {

                                return item.id !== id;

                            }
                        );


                    renderDownloads();


                    showToast(
                        "Download removido."
                    );

                }

            }
        );

    }


    /* =====================================================
       ADICIONAR DOWNLOAD
    ===================================================== */

    function addDownload(movie) {

        if (!movie) return;


        const exists =
            downloads.some(
                function (item) {

                    return item.id === movie.id;

                }
            );


        if (exists) {

            showToast(
                "Este conteúdo já está nos downloads."
            );

            return;

        }


        downloads.push({

            id: movie.id,

            title: movie.title,

            episode:
                movie.type === "Série"
                    ? "S1:E1"
                    : "Filme",

            quality: "720p",

            size: 1.0,

            image: movie.image

        });


        renderDownloads();


        showToast(
            movie.title +
            " adicionado aos downloads."
        );

    }


    /* =====================================================
       ARMAZENAMENTO
    ===================================================== */

    function updateStorage() {

        const used =
            downloads.reduce(
                function (total, item) {

                    return total + item.size;

                },
                0
            );


        const total = 64;


        const available =
            Math.max(
                total - used,
                0
            );


        const usedElement =
            document.getElementById(
                "storageUsed"
            );


        const availableElement =
            document.getElementById(
                "storageAvailable"
            );


        const progress =
            document.getElementById(
                "storageProgress"
            );


        if (usedElement) {

            usedElement.textContent =
                used.toFixed(1) +
                " GB";

        }


        if (availableElement) {

            availableElement.textContent =
                available.toFixed(1) +
                " GB";

        }


        if (progress) {

            progress.style.width =
                Math.min(
                    (used / total) * 100,
                    100
                ) +
                "%";

        }

    }


    /* =====================================================
       FAVORITOS
    ===================================================== */

    function toggleFavorite(movie) {

        if (!movie) return;


        const index =
            favorites.indexOf(
                movie.id
            );


        if (index >= 0) {

            favorites.splice(
                index,
                1
            );


            showToast(
                "Removido dos favoritos."
            );

        } else {

            favorites.push(
                movie.id
            );


            showToast(
                "Adicionado aos favoritos ♥"
            );

        }


        try {

            localStorage.setItem(
                "vipnetflix_favorites",
                JSON.stringify(
                    favorites
                )
            );

        } catch (error) {

            console.log(
                "Não foi possível guardar favoritos."
            );

        }


        renderFavorites();

    }


    function renderFavorites() {

        const items =
            catalog.filter(
                function (movie) {

                    return favorites.includes(
                        movie.id
                    );

                }
            );


        renderGrid(
            favoritesList,
            items
        );

    }


    /* =====================================================
       GÉNEROS
    ===================================================== */

    function renderGenres() {

        if (!genresList) return;


        const genres = [

            "Ação",
            "Aventura",
            "Drama",
            "Comédia",
            "Fantasia",
            "Ficção científica",
            "Terror",
            "Romance",
            "Documentário",
            "Suspense"

        ];


        genresList.innerHTML = "";


        genres.forEach(
            function (genre) {

                const button =
                    document.createElement(
                        "button"
                    );


                button.className =
                    "genre-card";


                button.textContent =
                    genre;


                button.type =
                    "button";


                button.addEventListener(
                    "click",
                    function () {

                        showSection(
                            "catalog"
                        );


                        const filtered =
                            catalog.filter(
                                function (movie) {

                                    return (
                                        movie.genre ===
                                        genre
                                    );

                                }
                            );


                        renderGrid(
                            catalogList,
                            filtered
                        );

                    }
                );


                genresList.appendChild(
                    button
                );

            }
        );

    }


    /* =====================================================
       SEÇÕES
    ===================================================== */

    function hideAllSections() {

        const sections = [

            "continueSection",
            "downloadsSection",
            "catalogSection",
            "genresSection",
            "favoritesSection"

        ];


        sections.forEach(
            function (id) {

                const section =
                    document.getElementById(
                        id
                    );


                if (section) {

                    section.classList.add(
                        "hidden"
                    );

                }

            }
        );

    }


    function showSection(section) {

        closeMenu();

        hideAllSections();


        if (searchResultsSection) {

            searchResultsSection.classList.add(
                "hidden"
            );

        }


        if (section === "home") {

            const continueSection =
                document.getElementById(
                    "continueSection"
                );


            const downloadsSection =
                document.getElementById(
                    "downloadsSection"
                );


            const catalogSection =
                document.getElementById(
                    "catalogSection"
                );


            if (continueSection) {

                continueSection.classList.remove(
                    "hidden"
                );

            }


            if (downloadsSection) {

                downloadsSection.classList.remove(
                    "hidden"
                );

            }


            if (catalogSection) {

                catalogSection.classList.remove(
                    "hidden"
                );

            }

        }


        if (section === "catalog") {

            const catalogSection =
                document.getElementById(
                    "catalogSection"
                );


            if (catalogSection) {

                catalogSection.classList.remove(
                    "hidden"
                );

            }


            renderGrid(
                catalogList,
                catalog
            );

        }


        if (section === "downloads") {

            const downloadsSection =
                document.getElementById(
                    "downloadsSection"
                );


            if (downloadsSection) {

                downloadsSection.classList.remove(
                    "hidden"
                );

            }

        }


        if (section === "genres") {

            const genresSection =
                document.getElementById(
                    "genresSection"
                );


            if (genresSection) {

                genresSection.classList.remove(
                    "hidden"
                );

            }

        }


        if (section === "favorites") {

            const favoritesSection =
                document.getElementById(
                    "favoritesSection"
                );


            if (favoritesSection) {

                favoritesSection.classList.remove(
                    "hidden"
                );

            }


            renderFavorites();

        }


        document
            .querySelectorAll(
                ".nav-item"
            )
            .forEach(
                function (button) {

                    button.classList.toggle(
                        "active",
                        button.dataset.section ===
                        section
                    );

                }
            );

    }


    /* =====================================================
       NAVEGAÇÃO
    ===================================================== */

    document.addEventListener(
        "click",
        function (event) {

            const button =
                event.target.closest(
                    "[data-section]"
                );


            if (!button) return;


            const section =
                button.dataset.section;


            if (!section) return;


            if (section === "releases") {

                showSection(
                    "catalog"
                );


                renderGrid(
                    catalogList,
                    catalog.slice(
                        0,
                        6
                    )
                );


                return;

            }


            showSection(
                section
            );

        }
    );


    /* =====================================================
       VER TODOS
    ===================================================== */

    const showAll =
        document.getElementById(
            "showAll"
        );


    if (showAll) {

        showAll.addEventListener(
            "click",
            function () {

                showSection(
                    "catalog"
                );

            }
        );

    }


    /* =====================================================
       VER DOWNLOADS
    ===================================================== */

    const viewDownloads =
        document.getElementById(
            "viewDownloads"
        );


    if (viewDownloads) {

        viewDownloads.addEventListener(
            "click",
            function () {

                showSection(
                    "downloads"
                );

            }
        );

    }


    /* =====================================================
       LIMPAR CONTINUAR
    ===================================================== */

    const clearContinue =
        document.getElementById(
            "clearContinue"
        );


    if (clearContinue) {

        clearContinue.addEventListener(
            "click",
            function () {

                continueWatching = [];

                renderContinue();


                showToast(
                    "Lista limpa."
                );

            }
        );

    }


    /* =====================================================
       TOAST
    ===================================================== */

    let toastTimer = null;


    function showToast(message) {

        if (!toast) return;


        toast.textContent =
            message;


        toast.classList.add(
            "show"
        );


        if (toastTimer) {

            clearTimeout(
                toastTimer
            );

        }


        toastTimer =
            setTimeout(
                function () {

                    toast.classList.remove(
                        "show"
                    );

                },
                2500
            );

    }


    /* =====================================================
       INICIALIZAÇÃO
    ===================================================== */

    renderContinue();

    renderGrid(
        catalogList,
        catalog
    );

    renderDownloads();

    renderFavorites();

    renderGenres();

    showSection(
        "home"
    );


    console.log(
        "VIPNETFLIX: sistema iniciado corretamente."
    );

});
