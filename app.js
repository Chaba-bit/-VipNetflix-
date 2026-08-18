const catalog=[
{title:"Aventura VIP",category:"Filme",type:"movies",description:"Título de demonstração. Substitua por conteúdo autorizado.",featured:true},
{title:"Noite de Cinema",category:"Filme",type:"movies",description:"Exemplo de conteúdo para o catálogo."},
{title:"Horizonte",category:"Filme",type:"movies",description:"Exemplo de conteúdo para o catálogo."},
{title:"Código Final",category:"Filme",type:"movies",description:"Exemplo de conteúdo para o catálogo."},
{title:"Missão Oculta",category:"Filme",type:"movies",description:"Exemplo de conteúdo para o catálogo."},
{title:"Além do Tempo",category:"Série",type:"series",description:"Série de demonstração.",featured:true},
{title:"Cidade VIP",category:"Série",type:"series",description:"Exemplo de série."},
{title:"O Último Caminho",category:"Série",type:"series",description:"Exemplo de série."},
{title:"Pequenos Heróis",category:"Infantil",type:"kids",description:"Conteúdo infantil de demonstração.",featured:true},
{title:"Mundo dos Amigos",category:"Infantil",type:"kids",description:"Exemplo de conteúdo infantil."},
{title:"Planeta Azul",category:"Documentário",type:"docs",description:"Documentário de demonstração.",featured:true},
{title:"Histórias Reais",category:"Documentário",type:"docs",description:"Exemplo de documentário."}
];
const grids={movies:moviesGrid,series:seriesGrid,kids:kidsGrid,docs:docsGrid,featured:featuredGrid};
function makeCard(x){const e=document.createElement("article");e.className="card";e.innerHTML=`<div class="poster"><div class="poster-text">${x.title}</div></div><div class="card-info"><h3>${x.title}</h3><div class="meta">${x.category} • VIP</div></div>`;e.onclick=()=>openModal(x);return e}
function render(list=catalog){Object.values(grids).forEach(g=>g.innerHTML="");list.filter(x=>x.featured).forEach(x=>featuredGrid.appendChild(makeCard(x)));list.filter(x=>x.type==="movies").forEach(x=>moviesGrid.appendChild(makeCard(x)));list.filter(x=>x.type==="series").forEach(x=>seriesGrid.appendChild(makeCard(x)));list.filter(x=>x.type==="kids").forEach(x=>kidsGrid.appendChild(makeCard(x)));list.filter(x=>x.type==="docs").forEach(x=>docsGrid.appendChild(makeCard(x)))}render();
const modal=document.getElementById("contentModal");
function openModal(x){modalTitle.textContent=x.title;modalCategory.textContent=x.category;modalDescription.textContent=x.description;modalPoster.textContent=x.title;modal.classList.add("open")}
closeModal.onclick=()=>modal.classList.remove("open");modal.onclick=e=>{if(e.target===modal)modal.classList.remove("open")};
loginBtn.onclick=()=>alert("Área de login — podemos criar esta função na próxima etapa.");
watchBtn.onclick=()=>alert("Aqui entra o link/player do seu conteúdo autorizado.");
searchInput.oninput=e=>{const q=e.target.value.toLowerCase();render(q?catalog.filter(x=>(x.title+" "+x.category).toLowerCase().includes(q)):catalog)};