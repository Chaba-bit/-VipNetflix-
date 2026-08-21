/* =====================================================
   VIPNETFLIX - APP.JS
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

  /* ELEMENTOS */

  const welcomeScreen =
    document.getElementById("welcomeScreen");

  const appScreen =
    document.getElementById("appScreen");

  const accountScreen =
    document.getElementById("accountScreen");

  const enterBtn =
    document.getElementById("enterBtn");

  const backBtn =
    document.getElementById("backBtn");

  const createAccountBtn =
    document.getElementById("createAccountBtn");

  const accountMessage =
    document.getElementById("accountMessage");


  /* =====================================================
     BOTÃO ENTRAR
  ===================================================== */

  enterBtn.addEventListener("click", function () {

    welcomeScreen.style.display = "none";

    accountScreen.style.display = "block";

    window.scrollTo(0, 0);

  });


  /* =====================================================
     VOLTAR
  ===================================================== */

  backBtn.addEventListener("click", function () {

    accountScreen.style.display = "none";

    welcomeScreen.style.display = "flex";

    window.scrollTo(0, 0);

  });


  /* =====================================================
     CRIAR CONTA
  ===================================================== */

  createAccountBtn.addEventListener("click", function () {

    const name =
      document.getElementById("nameInput").value.trim();

    const email =
      document.getElementById("emailInput").value.trim();

    const password =
      document.getElementById("passwordInput").value.trim();


    if (name === "" || email === "" || password === "") {

      accountMessage.textContent =
        "Preencha todos os campos.";

      accountMessage.style.color = "#ff5555";

      return;
    }


    if (password.length < 6) {

      accountMessage.textContent =
        "A senha deve ter pelo menos 6 caracteres.";

      accountMessage.style.color = "#ff5555";

      return;
    }


    /* Guarda temporariamente a conta no aparelho */

    const user = {
      name: name,
      email: email
    };

    localStorage.setItem(
      "vipnetflix_user",
      JSON.stringify(user)
    );


    accountMessage.textContent =
      "Conta criada com sucesso!";

    accountMessage.style.color = "#39d98a";


    /* Depois de 1 segundo abre a aplicação */

    setTimeout(function () {

      accountScreen.style.display = "none";

      appScreen.style.display = "block";

      window.scrollTo(0, 0);

    }, 1000);

  });


  /* =====================================================
     VERIFICAR SE JÁ EXISTE CONTA
  ===================================================== */

  const savedUser =
    localStorage.getItem("vipnetflix_user");


  if (savedUser) {

    /* Por enquanto mantém a tela de entrada.
       O usuário pode entrar novamente. */

    console.log("Usuário VipNetflix encontrado.");

  }


  /* =====================================================
     BOTÕES DE DOWNLOAD
  ===================================================== */

  const downloadButton =
    document.querySelector(".download-page-btn");

  if (downloadButton) {

    downloadButton.addEventListener("click", function () {

      alert(
        "Aqui ficará a área de Downloads, onde o usuário poderá acessar os conteúdos baixados para assistir offline dentro do aplicativo."
      );

    });

  }

});
