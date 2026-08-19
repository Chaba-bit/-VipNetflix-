/* =========================================
   VIPNETFLIX - APP.JS
========================================= */

let parteAtual = 1;
let episodioAtual = 1;
let minhaLista = false;


/* =========================================
   NAVEGAÇÃO
========================================= */

function showPage(id) {

    document.querySelectorAll(".page").forEach(page => {
        page.classList.remove("active");
    });

    const page = document.getElementById(id);

    if (page) {
        page.classList.add("active");
    }

    window.scrollTo(0, 0);
}


/* =========================================
   MENU INFERIOR
========================================= */

function bottom(menu) {

    document.querySelectorAll(".bottom-item")
        .forEach(item => item.classList.remove("active"));

    if (menu === "home") {

        showPage("homePage");

    }

    if (menu === "explore") {

        showPage("explorePage");

    }

    if (menu === "list") {

        showPage("listPage");

    }

    if (menu === "downloads") {

        alert("Seus downloads aparecerão aqui.");

    }

}


/* =========================================
   LA CASA DE PAPEL
========================================= */

function openLaCasa() {

    showPage("detailPage");

}


/* =========================================
   ASSISTIR
========================================= */

function assistir() {

    showPage("playerPage");

}


/* =========================================
   VOLTAR DO PLAYER
========================================= */

function voltarPlayer() {

    showPage("detailPage");

}


/* =========================================
   ESCOLHER PARTE
========================================= */

function escolherParte(parte) {

    parteAtual = parte;

    episodioAtual = 1;

    document.querySelectorAll(".season")
        .forEach(item => {
            item.classList.remove("active");
        });

    const partes =
        document.querySelectorAll(".season");

    if (partes[parte - 1]) {
        partes[parte - 1].classList.add("active");
    }

    carregarEpisodios();

}


/* =========================================
   EPISÓDIOS
========================================= */

function carregarEpisodios() {

    const lista =
        document.getElementById("episodes");

    if (!lista) return;

    lista.innerHTML = "";

    const quantidade = [
        9,
        6,
        8,
        8,
        10
    ][parteAtual - 1];


    for (let i = 1; i <= quantidade; i++) {

        lista.innerHTML += `

            <div
                class="episode"
                onclick="abrirEpisodio(${i})"
            >

                <img
                    src="images/lacasadepapel.jpg"
                >

                <div class="episode-info">

                    <div class="episode-title">

                        ${i}. Episódio ${i}

                    </div>

                    <div class="episode-description">

                        La Casa de Papel
                        • Parte ${parteAtual}

                    </div>

                </div>

                <div
                    class="download"
                    onclick="
                        event.stopPropagation();
                        baixarEpisodio(${i});
                    "
                >
                    ↓
                </div>

            </div>

        `;

    }

}


/* =========================================
   ABRIR EPISÓDIO
========================================= */

function abrirEpisodio(numero) {

    episodioAtual = numero;

    showPage("playerPage");

    const video =
        document.getElementById("videoPlayer");

    if (video) {

        video.src =
            `videos/lacasa-p${parteAtual}-e${episodioAtual}.mp4`;

        video.load();

        video.play().catch(() => {});

    }

}


/* =========================================
   PLAYER
========================================= */

function continuar() {

    const video =
        document.getElementById("videoPlayer");

    if (video) {
        video.play().catch(() => {});
    }

}


/* =========================================
   DOWNLOAD
========================================= */

function baixarEpisodio(numero) {

    alert(
        `Parte ${parteAtual}, episódio ${numero} adicionado aos Downloads.`
    );

}


/* =========================================
   MINHA LISTA
========================================= */

function toggleList() {

    minhaLista = !minhaLista;

    if (minhaLista) {

        alert(
            "La Casa de Papel foi adicionada à Minha Lista."
        );

    } else {

        alert(
            "La Casa de Papel foi removida da Minha Lista."
        );

    }

}


/* =========================================
   MODAL
========================================= */

function showInfo() {

    const modal =
        document.getElementById("modal");

    if (modal) {
        modal.classList.add("active");
    }

}


function closeModal() {

    const modal =
        document.getElementById("modal");

    if (modal) {
        modal.classList.remove("active");
    }

}


/* =========================================
   CATEGORIAS
========================================= */

document.querySelectorAll(".category")
.forEach(item => {

    item.addEventListener("click", () => {

        document.querySelectorAll(".category")
        .forEach(x => x.classList.remove("active"));

        item.classList.add("active");

    });

});


/* =========================================
   GÊNEROS
========================================= */

document.querySelectorAll(".genre")
.forEach(item => {

    item.addEventListener("click", () => {

        document.querySelectorAll(".genre")
        .forEach(x => x.classList.remove("active"));

        item.classList.add("active");

    });

});


/* =========================================
   INICIAR
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    carregarEpisodios();

    showPage("homePage");

});            episodes: 9
        },

        2: {
            name: "Parte 2",
            episodes: 6
        },

        3: {
            name: "Parte 3",
            episodes: 8
        },

        4: {
            name: "Parte 4",
            episodes: 8
        },

        5: {
            name: "Parte 5",
            episodes: 10
        }

    }

};


/* =========================================================
   STRANGER THINGS
========================================================= */

const strangerThings = {

    id: "stranger",

    title: "Stranger Things",

    year: "2016",

    parts: 4,

    age: "16",

    rating: "8.7",

    genre: "Sci-Fi · Terror · Mistério",

    description:
        "Quando um menino desaparece, uma pequena cidade se vê no centro de um mistério sobrenatural. Amigos, família e uma jovem com poderes especiais precisam enfrentar forças perigosas.",

    poster: "images/stranger-things.jpg",

    backdrop: "images/stranger-things-backdrop.jpg"

};


/* =========================================================
   PEGAR PÁGINA
========================================================= */

function getPage(id) {

    return document.getElementById(id);

}


/* =========================================================
   NAVEGAÇÃO
========================================================= */

function showPage(pageId, clicked = null) {

    document
        .querySelectorAll(".page")
        .forEach(page => {

            page.classList.remove("active");

        });


    const page = getPage(pageId);

    if (!page) {

        console.log(
            "Página não encontrada:",
            pageId
        );

        return;

    }


    page.classList.add("active");

    currentPage = pageId;


    if (clicked) {

        document
            .querySelectorAll(".nav-item")
            .forEach(item => {

                item.classList.remove("active");

            });

        clicked.classList.add("active");

    }


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =========================================================
   MENU INFERIOR
========================================================= */

function bottom(active) {

    const items =
        document.querySelectorAll(".bottom-item");


    items.forEach(item => {

        item.classList.remove("active");

    });


    if (active === "home") {

        if (items[0])
            items[0].classList.add("active");

        showPage("homePage");

        return;

    }


    if (active === "explore") {

        if (items[1])
            items[1].classList.add("active");

        showPage("explorePage");

        return;

    }


    if (active === "downloads") {

        if (items[2])
            items[2].classList.add("active");

        showDownloads();

        return;

    }


    if (active === "list") {

        if (items[3])
            items[3].classList.add("active");

        showPage("listPage");

        updateMyList();

        return;

    }


    if (active === "more") {

        if (items[4])
            items[4].classList.add("active");

        showInfo();

    }

}


/* =========================================================
   ABRIR LA CASA DE PAPEL
========================================================= */

function openLaCasaDePapel() {

    currentShow = "lacasa";

    currentPart = 1;

    currentEpisode = 1;

    buildLaCasaDetail();

    showPage("detailPage");

}


/* =========================================================
   ABRIR STRANGER THINGS
========================================================= */

function openDetail() {

    currentShow = "stranger";

    buildStrangerDetail();

    showPage("detailPage");

}


/* =========================================================
   CRIAR DETALHES DA LA CASA DE PAPEL
========================================================= */

function buildLaCasaDetail() {

    const page =
        getPage("detailPage");

    if (!page) return;


    let castHTML = "";


    laCasaDePapel.cast.forEach(person => {

        castHTML += `

            <div class="cast">

                <img
                    src="${person.image}"
                    onerror="this.style.background='#222'"
                >

                <div class="cast-name">
                    ${person.name}
                </div>

                <div class="cast-role">
                    ${person.role}
                </div>

            </div>

        `;

    });


    let partsHTML = "";


    for (
        let i = 1;
        i <= laCasaDePapel.parts;
        i++
    ) {

        partsHTML += `

            <div
                class="season ${i === currentPart ? "active" : ""}"
                onclick="selectLaCasaPart(${i})"
            >
                Parte ${i}
            </div>

        `;

    }


    page.innerHTML = `

        <div
            class="detail-header"
            style="
                background:
                linear-gradient(
                    0deg,
                    #000 3%,
                    transparent 70%
                ),
                linear-gradient(
                    90deg,
                    rgba(0,0,0,.8),
                    transparent
                ),
                url('${laCasaDePapel.backdrop}')
                center/cover;
            "
        >

            <div
                class="back-button"
                onclick="showPage('homePage')"
            >
                ←
            </div>


            <div
                class="logo"
                style="
                    position:absolute;
                    top:20px;
                    left:80px;
                "
            >
                <span>Vip</span>Netflix
            </div>


            <div
                class="detail-logo"
                style="
                    color:#e50914;
                    font-size:48px;
                "
            >
                LA CASA<br>
                DE PAPEL
            </div>

        </div>


        <div class="detail-content">

            <div class="meta">

                <span>
                    ${laCasaDePapel.year}
                </span>

                <span class="age">
                    ${laCasaDePapel.age}
                </span>

                <span>
                    ${laCasaDePapel.parts} Partes
                </span>

                <span>
                    ${laCasaDePapel.genre}
                </span>

            </div>


            <div class="buttons">

                <button
                    class="btn btn-red"
                    onclick="openLaCasaPlayer()"
                >
                    ▶ Assistir
                </button>


                <button
                    class="btn btn-secondary"
                    onclick="toggleLaCasaList()"
                >
                    ＋ Minha Lista
                </button>


                <button
                    class="btn btn-secondary"
                    onclick="showInfo()"
                >
                    ⓘ Mais informações
                </button>

            </div>


            <p class="description">
                ${laCasaDePapel.description}
            </p>


            <h2>
                Elenco
            </h2>


            <div
                class="cast-row"
                style="margin:15px 0 30px"
            >

                ${castHTML}

            </div>


            <h2>
                Partes
            </h2>


            <div class="seasons">

                ${partsHTML}

            </div>


            <div id="laCasaEpisodes">

            </div>

        </div>

    `;


    renderLaCasaEpisodes();

}


/* =========================================================
   EPISÓDIOS LA CASA
========================================================= */

function createLaCasaEpisodes(part) {

    const total =
        laCasaDePapel.partsData[part].episodes;


    let episodes = "";


    for (
        let i = 1;
        i <= total;
        i++
    ) {

        const minutes =
            42 + ((i * 3 + part * 2) % 17);


        episodes += `

            <div
                class="episode"
                onclick="playLaCasaEpisode(${part},${i})"
            >

                <img
                    src="images/lacasa-ep${part}-${i}.jpg"
                    onerror="
                        this.src='images/lacasadepapel.jpg'
                    "
                >


                <div class="episode-info">

                    <div class="episode-title">

                        ${i}.
                        ${getLaCasaEpisodeTitle(part,i)}

                    </div>


                    <div class="episode-description">

                        Episódio ${i} da
                        ${laCasaDePapel.partsData[part].name}.
                        A equipe precisa continuar
                        o plano enquanto enfrenta novos
                        obstáculos.

                    </div>

                </div>


                <div
                    class="download"
                    onclick="
                        event.stopPropagation();
                        downloadLaCasaEpisode(${part},${i});
                    "
                >
                    ↓
                </div>

            </div>

        `;

    }


    return episodes;

}


/* =========================================================
   TÍTULOS DOS EPISÓDIOS
========================================================= */

function getLaCasaEpisodeTitle(part, episode) {

    const titles = {

        1: [
            "O Plano",
            "A Negociação",
            "O Primeiro Obstáculo",
            "Dentro da Casa da Moeda",
            "A Polícia se Aproxima",
            "O Contra-Ataque",
            "O Erro",
            "A Fuga",
            "O Último Passo"
        ],

        2: [
            "O Cerco",
            "O Plano Continua",
            "Uma Nova Estratégia",
            "O Confronto",
            "A Decisão",
            "A Fuga"
        ],

        3: [
            "Um Novo Assalto",
            "O Reencontro",
            "O Banco",
            "O Plano de Resgate",
            "A Resistência",
            "O Contra-Ataque",
            "A Armadilha",
            "O Limite"
        ],

        4: [
            "O Ataque",
            "O Professor",
            "A Resistência",
            "A Estratégia",
            "O Perigo",
            "A Virada",
            "A Última Chance",
            "O Confronto"
        ],

        5: [
            "O Começo do Fim",
            "A Guerra",
            "O Plano",
            "O Sacrifício",
            "O Último Golpe",
            "A Resistência",
            "O Segredo",
            "O Professor",
            "A Decisão",
            "O Fim"
        ]

    };


    if (
        titles[part] &&
        titles[part][episode - 1]
    ) {

        return titles[part][episode - 1];

    }


    return `Episódio ${episode}`;

}


/* =========================================================
   SELECIONAR PARTE
========================================================= */

function selectLaCasaPart(part) {

    currentPart = part;

    currentEpisode = 1;

    renderLaCasaEpisodes();

}


/* =========================================================
   MOSTRAR EPISÓDIOS
========================================================= */

function renderLaCasaEpisodes() {

    const container =
        getPage("detailPage")
            ?.querySelector("#laCasaEpisodes");


    if (!container) return;


    container.innerHTML = `

        <h2 style="margin-top:25px">
            ${laCasaDePapel.partsData[currentPart].name}
        </h2>

        <div style="height:10px"></div>

        ${createLaCasaEpisodes(currentPart)}

    `;


    document
        .querySelectorAll(".season")
        .forEach((item,index) => {

            if (
                item.textContent
                    .includes(`Parte ${currentPart}`)
            ) {

                item.classList.add("active");

            }

        });

}


/* =========================================================
   PLAYER LA CASA DE PAPEL
========================================================= */

function openLaCasaPlayer() {

    currentShow = "lacasa";

    currentPart = currentPart || 1;

    currentEpisode = currentEpisode || 1;

    buildLaCasaPlayer();

    showPage("playerPage");

}


/* =========================================================
   PLAYER DE EPISÓDIO
========================================================= */

function playLaCasaEpisode(part, episode) {

    currentShow = "lacasa";

    currentPart = part;

    currentEpisode = episode;

    buildLaCasaPlayer();

    showPage("playerPage");

}


/* =========================================================
   CRIAR PLAYER
========================================================= */

function buildLaCasaPlayer() {

    const page =
        getPage("playerPage");

    if (!page) return;


    const title =
        getLaCasaEpisodeTitle(
            currentPart,
            currentEpisode
        );


    page.innerHTML = `

        <div class="video-area">

            <video
                id="videoPlayer"
                controls
                poster="${laCasaDePapel.backdrop}"
            >

                <source
                    src="
                    videos/lacasa-p${currentPart}-e${currentEpisode}.mp4
                    "
                    type="video/mp4"
                >

                Seu navegador não suporta vídeo.

            </video>


            <div class="player-top">

                <span
                    onclick="closePlayer()"
                >
                    ←
                </span>


                <div
                    style="
                        display:flex;
                        gap:25px;
                    "
                >

                    <span>📺</span>
                    <span>⚙</span>
                    <span>⛶</span>

                </div>

            </div>

        </div>


        <div class="player-layout">

            <div class="player-info">

                <div class="logo">

                    <span>Vip</span>Netflix

                </div>


                <div class="current-title">

                    La Casa de Papel

                </div>


                <div class="meta">

                    ${laCasaDePapel.year}
                    |
                    ${laCasaDePapel.parts} Partes
                    |
                    ${laCasaDePapel.genre}

                </div>


                <div class="rating">

                    <span>★</span>
                    ${laCasaDePapel.rating}/10

                </div>


                <h2
                    style="margin-top:20px"
                >

                    P${currentPart}:E${currentEpisode}
                    —
                    ${title}

                </h2>


                <p class="player-description">

                    A equipe continua enfrentando
                    obstáculos enquanto tenta levar
                    o plano até o fim.

                </p>


                <div
                    class="buttons"
                    style="margin-top:25px"
                >

                    <button
                        class="btn btn-red"
                        onclick="continueVideo()"
                    >
                        ▶ Continuar Assistindo
                    </button>


                    <button
                        class="btn btn-secondary"
                        onclick="toggleLaCasaList()"
                    >
                        ＋ Minha Lista
                    </button>

                </div>

            </div>


            <div class="player-episodes">

                <h2>
                    Partes
                </h2>


                <div class="seasons">

                    ${createPlayerParts()}

                </div>


                <h3>
                    Episódios
                </h3>


                <div id="playerEpisodeList">

                    ${createPlayerEpisodes()}

                </div>

            </div>

        </div>

    `;


    setTimeout(() => {

        const video =
            getPage("playerPage")
                ?.querySelector("#videoPlayer");


        if (video) {

            video.play()
                .catch(() => {});

        }

    },300);

}


/* =========================================================
   PARTES NO PLAYER
========================================================= */

function createPlayerParts() {

    let html = "";


    for (
        let i = 1;
        i <= 5;
        i++
    ) {

        html += `

            <div
                class="season ${
                    i === currentPart
                    ? "active"
                    : ""
                }"
                onclick="changePlayerPart(${i})"
            >

                P${i}

            </div>

        `;

    }


    return html;

}


/* =========================================================
   EPISÓDIOS NO PLAYER
========================================================= */

function createPlayerEpisodes() {

    const total =
        laCasaDePapel
            .partsData[currentPart]
            .episodes;


    let html = "";


    for (
        let i = 1;
        i <= total;
        i++
    ) {

        html += `

            <div
                class="
                    mini-episode
                    ${
                        i === currentEpisode
                        ? "active"
                        : ""
                    }
                "
                onclick="
                    playLaCasaEpisode(
                        ${currentPart},
                        ${i}
                    )
                "
            >

                <img
                    src="
                    images/lacasa-ep${currentPart}-${i}.jpg
                    "
                    onerror="
                        this.src='images/lacasadepapel.jpg'
                    "
                >


                <div class="mini-info">

                    <strong>

                        ${i}.
                        ${getLaCasaEpisodeTitle(
                            currentPart,
                            i
                        )}

                    </strong>


                    <span>
                        Episódio ${i}
                    </span>

                </div>

            </div>

        `;

    }


    return html;

}


/* =========================================================
   MUDAR PARTE NO PLAYER
========================================================= */

function changePlayerPart(part) {

    currentPart = part;

    currentEpisode = 1;

    buildLaCasaPlayer();

}


/* =========================================================
   FECHAR PLAYER
========================================================= */

function closePlayer() {

    const video =
        document.getElementById("videoPlayer");


    if (video) {

        video.pause();

    }


    if (currentShow === "lacasa") {

        buildLaCasaDetail();

        showPage("detailPage");

    } else {

        buildStrangerDetail();

        showPage("detailPage");

    }

}


/* =========================================================
   CONTINUAR VÍDEO
========================================================= */

function continueVideo() {

    const video =
        document.getElementById("videoPlayer");


    if (!video) return;


    video.play()
        .catch(() => {});

}


/* =========================================================
   DOWNLOAD LA CASA
========================================================= */

function downloadLaCasaEpisode(part, episode) {

    const id =
        `La Casa de Papel P${part}:E${episode}`;


    if (
        !downloadedEpisodes.includes(id)
    ) {

        downloadedEpisodes.push(id);

    }


    alert(
        `${id} adicionado aos Downloads.`
    );

}


/* =========================================================
   MINHA LISTA - LA CASA
========================================================= */

function toggleLaCasaList() {

    const id = "La Casa de Papel";


    const index =
        downloadedEpisodes.indexOf(
            "LIST:" + id
        );


    if (index === -1) {

        downloadedEpisodes.push(
            "LIST:" + id
        );

        inMyList = true;

        alert(
            "La Casa de Papel foi adicionada à Minha Lista."
        );

    } else {

        downloadedEpisodes.splice(
            index,
            1
        );

        inMyList = false;

        alert(
            "La Casa de Papel foi removida da Minha Lista."
        );

    }


    updateMyList();

}


/* =========================================================
   MINHA LISTA
========================================================= */

function updateMyList() {

    const list =
        getPage("listPage")
            ?.querySelector("#myList");


    if (!list) return;


    const hasLaCasa =
        downloadedEpisodes.includes(
            "LIST:La Casa de Papel"
        );


    if (!hasLaCasa) {

        list.innerHTML = `

            <div
                style="
                    color:#777;
                    text-align:center;
                    padding:60px 20px;
                "
            >

                Sua lista está vazia.

                <br><br>

                Adicione filmes e séries
                usando o botão
                "Minha Lista".

            </div>

        `;

        return;

    }


    list.innerHTML = `

        <div
            class="card"
            onclick="openLaCasaDePapel()"
            style="width:145px"
        >

            <img
                class="poster"
                src="images/lacasadepapel.jpg"
            >


            <div class="card-title">

                La Casa de Papel

            </div>


            <div class="card-info">

                Série · 5 Partes

            </div>

        </div>

    `;

}


/* =========================================================
   DOWNLOADS
========================================================= */

function showDownloads() {

    const downloads =
        downloadedEpisodes
            .filter(item =>
                !item.startsWith("LIST:")
            );


    if (downloads.length === 0) {

        showModal(
            "Downloads",
            `
                <p
                    style="
                        color:#aaa;
                        line-height:1.5;
                    "
                >
                    Você ainda não possui
                    episódios baixados.
                </p>
            `
        );

        return;

    }


    let html = "";


    downloads.forEach(item => {

        html += `

            <div
                style="
                    padding:14px;
                    background:#222;
                    border-radius:10px;
                    margin-top:10px;
                "
            >

                📥 ${item}

            </div>

        `;

    });


    showModal(
        "Downloads",
        html
    );

}


/* =========================================================
   MODAL
========================================================= */

function showModal(title, content) {

    const modal =
        getPage("modal");


    if (!modal) return;


    const box =
        modal.querySelector(".modal-box");


    if (!box) return;


    box.innerHTML = `

        <span
            class="close"
            onclick="closeModal()"
        >
            ×
        </span>


        <h2>
            ${title}
        </h2>


        ${content}

    `;


    modal.classList.add("active");

}


function showInfo() {

    showModal(
        "VipNetflix",
        `
            <p
                style="
                    color:#aaa;
                    line-height:1.6;
                "
            >

                Bem-vindo à VipNetflix.

                <br><br>

                Explore filmes e séries,
                abra os detalhes,
                selecione episódios,
                assista e adicione seus
                títulos favoritos à sua lista.

            </p>
        `
    );

}


function closeModal() {

    const modal =
        getPage("modal");


    if (!modal) return;


    modal.classList.remove("active");

}


/* =========================================================
   STRANGER THINGS
========================================================= */

function buildStrangerDetail() {

    const page =
        getPage("detailPage");


    if (!page) return;


    page.innerHTML = `

        <div
            class="detail-header"
            style="
                background:
                linear-gradient(
                    0deg,
                    #000 3%,
                    transparent 70%
                ),
                linear-gradient(
                    90deg,
                    rgba(0,0,0,.8),
                    transparent
                ),
                url(
                    '${strangerThings.backdrop}'
                )
                center/cover;
            "
        >

            <div
                class="back-button"
                onclick="showPage('homePage')"
            >
                ←
            </div>


            <div
                class="logo"
                style="
                    position:absolute;
                    top:20px;
                    left:80px;
                "
            >
                <span>Vip</span>Netflix
            </div>


            <div
                class="detail-logo"
                style="
                    color:#e50914;
                "
            >
                STRANGER<br>
                THINGS
            </div>

        </div>


        <div class="detail-content">

            <div class="meta">

                <span>2016</span>

                <span class="age">
                    16
                </span>

                <span>
                    4 Temporadas
                </span>

                <span>
                    Sci-Fi · Terror · Mistério
                </span>

            </div>


            <div class="buttons">

                <button
                    class="btn btn-red"
                    onclick="openPlayer()"
                >
                    ▶ Assistir
                </button>


                <button
                    class="btn btn-secondary"
                    onclick="toggleList()"
                >
                    ＋ Minha Lista
                </button>


                <button
                    class="btn btn-secondary"
                    onclick="showInfo()"
                >
                    ⓘ Mais informações
                </button>

            </div>


            <p class="description">

                ${strangerThings.description}

            </p>


            <h2>
                Temporadas
            </h2>


            <div class="seasons">

                <div class="season active">
                    Temporada 1
                </div>

                <div class="season">
                    Temporada 2
                </div>

                <div class="season">
                    Temporada 3
                </div>

                <div class="season">
                    Temporada 4
                </div>

            </div>


            <div class="episode">

                <img
                    src="images/episode1.jpg"
                >


                <div class="episode-info">

                    <div class="episode-title">

                        1. O Desaparecimento

                    </div>


                    <div class="episode-description">

                        Um garoto desaparece
                        misteriosamente e seus amigos
                        começam uma busca desesperada.

                    </div>

                </div>

            </div>

        </div>

    `;

}


/* =========================================================
   MINHA LISTA GENÉRICA
========================================================= */

function toggleList() {

    inMyList = !inMyList;


    if (inMyList) {

        alert(
            "Stranger Things foi adicionada à Minha Lista."
        );

    } else {

        alert(
            "Stranger Things foi removida da Minha Lista."
        );

    }

}


/* =========================================================
   CATEGORIAS
========================================================= */

document
    .querySelectorAll(".category")
    .forEach(category => {

        category.addEventListener(
            "click",
            () => {

                document
                    .querySelectorAll(".category")
                    .forEach(item => {

                        item.classList.remove(
                            "active"
                        );

                    });


                category.classList.add(
                    "active"
                );

            }
        );

    });


/* =========================================================
   GÊNEROS
========================================================= */

document
    .querySelectorAll(".genre")
    .forEach(genre => {

        genre.addEventListener(
            "click",
            () => {

                document
                    .querySelectorAll(".genre")
                    .forEach(item => {

                        item.classList.remove(
                            "active"
                        );

                    });


                genre.classList.add(
                    "active"
                );

            }
        );

    });


/* =========================================================
   MODAL
========================================================= */

const modal =
    getPage("modal");


if (modal) {

    modal.addEventListener(
        "click",
        event => {

            if (
                event.target === modal
            ) {

                closeModal();

            }

        }
    );

}


/* =========================================================
   TECLA ESC
========================================================= */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape"
        ) {

            closeModal();

        }

    }
);


/* =========================================================
   INICIALIZAÇÃO
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        updateMyList();

        console.log(
            "VipNetflix iniciado."
        );

        console.log(
            "La Casa de Papel carregada."
        );

    }
);
