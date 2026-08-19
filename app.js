const app = document.getElementById("app");

let parte = 1;
let episodio = 1;


/* =========================
   INÍCIO
========================= */

function home() {

    app.innerHTML = `

        <header class="top">

            <div class="logo">
                <span>Vip</span>Netflix
            </div>

            <div class="top-actions">

                <button class="icon">⌕</button>

                <div class="avatar">👤</div>

            </div>

        </header>


        <nav class="nav">

            <button class="active">Início</button>
            <button onclick="explorar()">Filmes</button>
            <button onclick="explorar()">Séries</button>
            <button onclick="explorar()">Novidades</button>

        </nav>


        <section class="hero">

            <div class="hero-content">

                <div class="eyebrow">
                    EM DESTAQUE
                </div>

                <h1>
                    LA CASA<br>DE PAPEL
                </h1>

                <p>
                    O Professor reúne uma equipe
                    para realizar o maior assalto
                    da história.
                </p>

                <button
                    class="btn red"
                    onclick="abrirLaCasa()"
                >
                    ▶ Assistir
                </button>

                <button
                    class="btn dark"
                    onclick="abrirLaCasa()"
                >
                    ⓘ Mais informações
                </button>

            </div>

        </section>


        <section class="section">

            <div class="section-head">

                <h2>
                    La Casa de Papel
                </h2>

            </div>


            <div class="row">

                <div
                    class="card"
                    onclick="abrirLaCasa()"
                >

                    <div class="poster">

                        <img
                            class="poster-image"
                            src="images/lacasadepapel.jpg"
                            onerror="
                            this.src='images/impacto.jpg'
                            "
                        >

                        <div class="poster-gradient"></div>

                        <div class="play-circle">
                            ▶
                        </div>

                        <div class="poster-title">
                            La Casa de Papel
                        </div>

                    </div>


                    <div class="card-info">

                        <h3>
                            La Casa de Papel
                        </h3>

                        <div class="muted">
                            5 Partes • 16+
                        </div>

                    </div>

                </div>

            </div>

        </section>


        <section class="section">

            <h2>
                Categorias
            </h2>

            <div class="chips">

                <button class="chip active">
                    Todos
                </button>

                <button class="chip">
                    Ação
                </button>

                <button class="chip">
                    Drama
                </button>

                <button class="chip">
                    Crime
                </button>

                <button class="chip">
                    Suspense
                </button>

            </div>

        </section>


        ${menuInferior()}

    `;

}


/* =========================
   MENU
========================= */

function menuInferior() {

    return `

        <div class="bottom">

            <button
                class="active"
                onclick="home()"
            >
                <b>⌂</b>
                Início
            </button>


            <button
                onclick="explorar()"
            >
                <b>⌕</b>
                Explorar
            </button>


            <button
                onclick="downloads()"
            >
                <b>↓</b>
                Downloads
            </button>


            <button
                onclick="minhaLista()"
            >
                <b>＋</b>
                Minha Lista
            </button>

        </div>

    `;

}


/* =========================
   LA CASA DE PAPEL
========================= */

function abrirLaCasa() {

    app.innerHTML = `

        <header class="top">

            <div class="logo">
                <span>Vip</span>Netflix
            </div>

            <button
                class="icon"
                onclick="home()"
            >
                ←
            </button>

        </header>


        <section
            class="detail-hero"
            style="
            background:
            linear-gradient(
                90deg,
                #000,
                rgba(0,0,0,.7),
                rgba(0,0,0,.1)
            ),
            url('images/lacasadepapel.jpg')
            center/cover no-repeat;
            "
        >

            <div>

                <div class="eyebrow">
                    NETFLIX ORIGINAL
                </div>


                <h1>
                    LA CASA<br>
                    DE PAPEL
                </h1>


                <div class="detail-meta">
                    2017 • 5 Partes • 16+ • Crime • Suspense
                </div>


                <button
                    class="btn red"
                    onclick="abrirPlayer()"
                >
                    ▶ Assistir
                </button>


                <button
                    class="btn dark"
                    onclick="adicionarLista()"
                >
                    ＋ Minha Lista
                </button>


                <p class="detail-desc">

                    O Professor reúne oito criminosos
                    para realizar um assalto à Casa da
                    Moeda da Espanha. Enquanto o grupo
                    enfrenta a polícia, o plano começa
                    a ser colocado à prova.

                </p>

            </div>

        </section>


        <section class="section">

            <h2>
                Partes
            </h2>


            <div class="seasons">

                <button
                    class="season ${parte === 1 ? "active" : ""}"
                    onclick="selecionarParte(1)"
                >
                    Parte 1
                </button>


                <button
                    class="season ${parte === 2 ? "active" : ""}"
                    onclick="selecionarParte(2)"
                >
                    Parte 2
                </button>


                <button
                    class="season ${parte === 3 ? "active" : ""}"
                    onclick="selecionarParte(3)"
                >
                    Parte 3
                </button>


                <button
                    class="season ${parte === 4 ? "active" : ""}"
                    onclick="selecionarParte(4)"
                >
                    Parte 4
                </button>


                <button
                    class="season ${parte === 5 ? "active" : ""}"
                    onclick="selecionarParte(5)"
                >
                    Parte 5
                </button>

            </div>


            <div id="episodios">

                ${listaEpisodios()}

            </div>

        </section>


        ${menuInferior()}

    `;

}


/* =========================
   PARTES
========================= */

function selecionarParte(numero) {

    parte = numero;

    episodio = 1;

    abrirLaCasa();

}


/* =========================
   EPISÓDIOS
========================= */

function listaEpisodios() {

    const quantidade = [
        9,
        6,
        8,
        8,
        10
    ][parte - 1];


    let html = "";


    for (
        let i = 1;
        i <= quantidade;
        i++
    ) {

        html += `

            <div
                class="episode"
                onclick="abrirEpisodio(${i})"
            >

                <div class="ep-thumb">

                    ▶

                </div>


                <div>

                    <strong>
                        ${i}. Episódio ${i}
                    </strong>


                    <p
                        class="muted"
                        style="margin-top:8px"
                    >

                        La Casa de Papel
                        • Parte ${parte}

                    </p>

                </div>

            </div>

        `;

    }


    return html;

}


/* =========================
   PLAYER
========================= */

function abrirPlayer() {

    abrirEpisodio(1);

}


function abrirEpisodio(numero) {

    episodio = numero;


    app.innerHTML = `

        <div class="player">


            <div
                class="video"
                style="
                background:
                linear-gradient(
                    rgba(0,0,0,.2),
                    #000
                ),
                url('images/lacasadepapel.jpg')
                center/cover;
                "
            >

                <button
                    class="icon"
                    onclick="abrirLaCasa()"
                    style="
                    position:absolute;
                    top:20px;
                    left:20px;
                    z-index:5;
                    "
                >
                    ←
                </button>


                <div class="video-center">

                    ▶

                </div>


                <div class="controls">

                    <div class="timeline">

                        <i></i>

                    </div>


                    <div class="control-line">

                        <span>
                            ▶
                        </span>

                        <span>
                            ⚙
                        </span>

                    </div>

                </div>

            </div>


            <div class="player-info">

                <div class="logo">
                    <span>Vip</span>Netflix
                </div>


                <h2 style="margin-top:20px">

                    La Casa de Papel

                </h2>


                <p
                    class="muted"
                    style="margin-top:10px"
                >

                    Parte ${parte}
                    • Episódio ${episodio}

                </p>


                <h3 style="margin-top:20px">

                    Episódio ${episodio}

                </h3>


                <p
                    class="detail-desc"
                    style="font-size:15px"
                >

                    Você está assistindo
                    La Casa de Papel.

                </p>


                <button
                    class="btn red"
                    style="margin-top:20px"
                    onclick="abrirEpisodio(${episodio})"
                >
                    ▶ Continuar
                </button>

            </div>

        </div>

    `;

}


/* =========================
   EXPLORAR
========================= */

function explorar() {

    app.innerHTML = `

        <header class="top">

            <div class="logo">
                <span>Vip</span>Netflix
            </div>

            <button
                class="icon"
                onclick="home()"
            >
                ←
            </button>

        </header>


        <section class="section">

            <h2>
                Explorar
            </h2>


            <input
                class="search"
                placeholder="Pesquisar filmes e séries..."
            >


            <div class="grid">

                <div
                    class="card"
                    onclick="abrirLaCasa()"
                >

                    <div class="poster">

                        <img
                            class="poster-image"
                            src="images/lacasadepapel.jpg"
                        >

                        <div class="poster-gradient"></div>

                        <div class="poster-title">
                            La Casa de Papel
                        </div>

                    </div>

                </div>

            </div>

        </section>


        ${menuInferior()}

    `;

}


/* =========================
   DOWNLOADS
========================= */

function downloads() {

    alert(
        "Ainda não existem downloads."
    );

}


/* =========================
   MINHA LISTA
========================= */

function minhaLista() {

    app.innerHTML = `

        <header class="top">

            <div class="logo">
                <span>Vip</span>Netflix
            </div>

        </header>


        <section class="section">

            <h2>
                Minha Lista
            </h2>


            <div
                class="card"
                onclick="abrirLaCasa()"
            >

                <div class="poster">

                    <img
                        class="poster-image"
                        src="images/lacasadepapel.jpg"
                    >

                    <div class="poster-gradient"></div>

                    <div class="poster-title">
                        La Casa de Papel
                    </div>

                </div>

            </div>

        </section>


        ${menuInferior()}

    `;

}


/* =========================
   LISTA
========================= */

function adicionarLista() {

    alert(
        "La Casa de Papel foi adicionada à Minha Lista."
    );

}


/* =========================
   INICIAR APP
========================= */

home();
