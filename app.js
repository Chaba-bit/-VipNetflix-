const app=document.getElementById('app');
const series = [
  {
    id: 100,
    title: "La Casa de Papel",
    genre: "Suspense",
    year: 2021,
    rating: 8.2,
    image: "images/la-casa-de-papel.jpg",
    desc: "Uma equipa de assaltantes executa um plano cuidadosamente preparado.",

    seasons: [
      {
        season: 1,
        title: "Parte 1",
        episodes: [
          {
            episode: 1,
            title: "Episódio 1",
            duration: "48 min",
            videoUrl: "",
            downloadUrl: ""
          },
          {
            episode: 2,
            title: "Episódio 2",
            duration: "42 min",
            videoUrl: "",
            downloadUrl: ""
          },
          {
            episode: 3,
            title: "Episódio 3",
            duration: "51 min",
            videoUrl: "",
            downloadUrl: ""
          }
        ]
      },

      {
        season: 2,
        title: "Parte 2",
        episodes: [
          {
            episode: 1,
            title: "Episódio 1",
            duration: "",
            videoUrl: "",
            downloadUrl: ""
          }
        ]
      }
    ]
  }
];
const movies=[
{id:1,title:'Impacto',genre:'Ação',year:2026,rating:8.8,emoji:'🔥',desc:'Uma equipa enfrenta uma ameaça que pode mudar o futuro.'},
{id:2,title:'Além do Espaço',genre:'Ficção científica',year:2026,rating:8.2,emoji:'🚀',desc:'Uma missão espacial revela um segredo inesperado.'},
{id:3,title:'O Mistério',genre:'Terror',year:2025,rating:7.9,emoji:'👻',desc:'Uma cidade pequena esconde um mistério assustador.'},
{id:4,title:'Guerreiro',genre:'Ação',year:2025,rating:8.0,emoji:'⚔️',desc:'Um jovem lutador precisa proteger a sua família.'},
{id:5,title:'Universo',genre:'Ficção científica',year:2026,rating:8.5,emoji:'🌌',desc:'Uma descoberta transforma a forma como vemos o universo.'},
{id:6,title:'Investigação',genre:'Mistério',year:2025,rating:8.1,emoji:'🕵️',desc:'Uma investigadora procura respostas para um caso impossível.'}
];
let user=JSON.parse(localStorage.getItem('vip_user')||'null');
let fav=JSON.parse(localStorage.getItem('vip_fav')||'[]');

function save(){localStorage.setItem('vip_user',JSON.stringify(user));localStorage.setItem('vip_fav',JSON.stringify(fav))}
function card(m){return `<article class="card" onclick="details(${m.id})"><div class="poster">${m.emoji}</div><div class="body"><h3>${m.title}</h3><div class="small">${m.genre} · ${m.year} · ⭐${m.rating}</div></div></article>`}
function shell(content,active='home'){app.innerHTML=`<header class="top"><div class="logo">VipNetflix</div><div class="avatar">${user?'👤':'🔐'}</div></header>${content}<nav class="bottom"><button class="${active==='home'?'active':''}" onclick="home()"><b>⌂</b>Início</button><button class="${active==='explore'?'active':''}" onclick="explore()"><b>⌕</b>Explorar</button><button class="${active==='fav'?'active':''}" onclick="favorites()"><b>♡</b>Minha Lista</button><button class="${active==='plans'?'active':''}" onclick="plans()"><b>★</b>Planos</button><button class="${active==='profile'?'active':''}" onclick="profile()"><b>●</b>Perfil</button></nav>`}
function home(){const m=movies[0];shell(`<section class="hero"><div><span class="small">SÉRIE ORIGINAL</span><h1>${m.title}</h1><p>${m.desc}</p><button class="btn primary" onclick="watch(${m.id})">▶ Assistir</button><button class="btn gray" onclick="details(${m.id})">ⓘ Detalhes</button></div></section><section class="section"><h2>Continuar assistindo</h2><div class="row">${movies.slice(0,3).map(card).join('')}</div></section><section class="section"><h2>Populares no VipNetflix</h2><div class="row">${movies.map(card).join('')}</div></section>`)}
function explore(){shell(`<section class="section"><h1>Explorar</h1><input class="search" id="q" placeholder="Pesquisar filmes e séries..." oninput="filter(this.value)"><div id="results" class="grid"></div></section>`,'explore');filter('')}
function filter(q){document.getElementById('results').innerHTML=movies.filter(m=>(m.title+' '+m.genre).toLowerCase().includes(q.toLowerCase())).map(card).join('')||'<div class="empty">Nenhum conteúdo encontrado.</div>'}
function details(id){
  const m=movies.find(x=>x.id===id);
  const is=fav.includes(id);

  shell(`
    <section class="hero">
      <div>
        <span class="small">${m.genre} · ${m.year} · ⭐ ${m.rating}</span>
        <h1>${m.title}</h1>
        <p>${m.desc}</p>

        <button class="btn red" onclick="watch(${m.id})">
          ▶ Assistir
        </button>

        <button class="btn gray" onclick="downloadPage(${m.id})">
          ⬇ Baixar
        </button>

        <button class="btn gray" onclick="toggleFav(${m.id})">
          ${is?'♥ Remover':'♡ Minha Lista'}
        </button>
      </div>
    </section>

    <section class="section">
      <h2>Informações</h2>
      <p class="small">
        Conteúdo de demonstração do projeto VipNetflix.
      </p>
    </section>
  `);
}
function watch(id){const m=movies.find(x=>x.id===id);app.innerHTML=`<main style="min-height:100vh;background:#000;text-align:center;padding-top:80px"><div style="font-size:100px">▶️</div><h2>${m.title}</h2><p class="small">Player de demonstração. Para uso real, ligue um vídeo autorizado.</p><button class="btn red" onclick="home()">Voltar</button></main>`}
function toggleFav(id){fav.includes(id)?fav=fav.filter(x=>x!==id):fav.push(id);save();details(id)}
function favorites(){const list=movies.filter(m=>fav.includes(m.id));shell(`<section class="section"><h1>Minha Lista</h1>${list.length?`<div class="grid">${list.map(card).join('')}</div>`:'<div class="empty">Ainda não adicionaste conteúdos.</div>'}`,'fav')}
function plans(){shell(`<section class="section"><h1>Planos</h1><div class="grid">${plan('Básico','99','HD','1')}${plan('Standard','199','Full HD','2')}${plan('Premium','299','4K','4')}</div></section>`,'plans')}
function plan(name,price,quality,screens){return `<div class="plan ${name==='Premium'?'featured':''}"><h2>${name}</h2><p>${quality} · ${screens} tela(s)</p><p class="price">${price} MT/mês</p><button class="btn red" onclick="pay('${name}',${price})">Assinar</button></div>`}
function pay(plan,price){alert(`Plano ${plan} selecionado: ${price} MT/mês.\nPagamento real será integrado numa próxima etapa.`)}
function profile(){shell(`<section class="section"><h1>Perfil</h1><div class="form" style="margin:20px 0"><h2>${user?user.name:'Visitante'}</h2><p class="small">${user?user.email:'Sem conta iniciada'}</p>${user?'<button class="btn red" onclick="logout()">Sair da conta</button>':'<button class="btn red" onclick="login()">Entrar / Criar conta</button>'}</div></section>`,'profile')}
function login(){app.innerHTML=`<div class="form"><div class="logo">VipNetflix</div><h2>Entrar</h2><input id="email" placeholder="E-mail"><input id="pass" type="password" placeholder="Palavra-passe"><button class="btn red" onclick="doLogin()">Entrar</button><button class="btn gray" onclick="register()">Criar conta</button><p class="small">Modo demonstração: qualquer e-mail e palavra-passe com 6+ caracteres.</p></div>`}
function doLogin(){if(!email.value||pass.value.length<6)return alert('Preenche o e-mail e uma palavra-passe com pelo menos 6 caracteres.');user={name:email.value.split('@')[0],email:email.value,plan:'basic'};save();home()}
function register(){app.innerHTML=`<div class="form"><div class="logo">VipNetflix</div><h2>Criar conta</h2><input id="name" placeholder="Nome"><input id="email" placeholder="E-mail"><input id="pass" type="password" placeholder="Palavra-passe (6+)"><button class="btn red" onclick="doRegister()">Criar conta</button><button class="btn gray" onclick="login()">Voltar</button></div>`}
function doRegister(){if(!name.value||!email.value||pass.value.length<6)return alert('Preenche todos os campos.');user={name:name.value,email:email.value,plan:'basic'};save();home()}
function logout(){user=null;save();login()}
home();
