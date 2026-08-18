const movies=[
 {title:"Filmes",img:"https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=600&q=80"},
 {title:"Novidades",img:"https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=600&q=80"},
 {title:"Ação",img:"https://images.unsplash.com/photo-1512070679279-8988d32161be?auto=format&fit=crop&w=600&q=80"},
 {title:"Documentários",img:"https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?auto=format&fit=crop&w=600&q=80"}
];
document.getElementById("catalog").innerHTML=movies.map(m=>`<div class="card"><img src="${m.img}"><b>${m.title}</b></div>`).join("");
function go(id){document.getElementById(id).scrollIntoView({behavior:"smooth"})}
function openLogin(){document.getElementById("modal").style.display="flex"}
function closeLogin(){document.getElementById("modal").style.display="none"}
function login(){
 const name=document.getElementById("name").value,email=document.getElementById("email").value,password=document.getElementById("password").value;
 if(!name||!email||!password){document.getElementById("msg").textContent="Preencha todos os campos.";return}
 localStorage.setItem("vip_user",JSON.stringify({name,email}));
 document.getElementById("msg").textContent="Conta de demonstração criada.";
}
function choose(plan){
 if(!localStorage.getItem("vip_user")){openLogin();document.getElementById("msg").textContent="Crie uma conta primeiro.";return}
 alert("Plano "+plan+" selecionado. O pagamento real será conectado no backend.");
}