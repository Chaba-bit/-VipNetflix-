/* =========================================================
   VIPNETFLIX — APP.JS
   VERSÃO COMPLETA
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
                "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w

/* =====================================================
   PESQUISA — CORRIGIDA
===================================================== */

if (searchButton) {

    searchButton.addEventListener("click", function (event) {

        event.preventDefault();

        if (searchBox) {
            searchBox.classList.remove("hidden");
        }

        if (searchInput) {
            searchInput.focus();
        }

    });

}


if (closeSearch) {

    closeSearch.addEventListener("click", function (event) {

        event.preventDefault();

        if (searchInput) {
            searchInput.value = "";
        }

        if (searchResults) {
            searchResults.innerHTML = "";
        }

        if (searchResultsSection) {
            searchResultsSection.classList.add("hidden");
        }

        if (searchBox) {
            searchBox.classList.add("hidden");
        }

    });

}


/* Quando o usuário escreve */

if (searchInput) {

    searchInput.addEventListener("input", function () {

        const texto =
            searchInput.value
                .trim()
                .toLowerCase();


        /* Campo vazio */

        if (texto === "") {

            searchResults.innerHTML = "";

            searchResultsSection.classList.add(
                "hidden"
            );

            return;
        }


        /* Procurar no catálogo */

        const resultados =
            catalog.filter(function (filme) {

                const titulo =
                    String(filme.title || "")
                        .toLowerCase();

                const genero =
                    String(filme.genre || "")
                        .toLowerCase();

                const tipo =
                    String(filme.type || "")
                        .toLowerCase();

                return (
                    titulo.includes(texto) ||
                    genero.includes(texto) ||
                    tipo.includes(texto)
                );

            });


        /* Mostrar área de resultados */

        searchResultsSection.classList.remove(
            "hidden"
        );


        /* Mostrar resultados */

        renderSearchResults(
            resultados
        );

    });

}


/* =====================================================
   RESULTADOS DA PESQUISA
===================================================== */

function renderSearchResults(resultados) {

    if (!searchResults) return;

    searchResults.innerHTML = "";


    /* Nenhum resultado */

    if (resultados.length === 0) {

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


    /* Resultados encontrados */

    resultados.forEach(function (filme) {

        const card =
            document.createElement("article");

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

    });

}


/* =====================================================
   CLIQUE NO RESULTADO DA PESQUISA
===================================================== */

if (searchResults) {

    searchResults.addEventListener(
        "click",
        function (event) {

            /* Botão ▶ */

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

                    openPlayer(filme);

                }

                return;
            }


            /* Capa do resultado */

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

                    openDetails(filme);

                }

            }

        }
    );

            }           
