/* =====================================================
   VIPNETFLIX - APP.JS
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

  /* =====================================================
     TELAS
  ===================================================== */

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
     NOVA TELA DE LOGIN
  ===================================================== */

  const loginScreen =
    document.getElementById("loginScreen");

  const loginBtn =
    document.getElementById("loginBtn");

  const newAccountBtn =
    document.getElementById("newAccountBtn");

  const registerBackBtn =
    document.getElementById("registerBackBtn");

  const registerBtn =
    document.getElementById("registerBtn");

  const loginMessage =
    document.getElementById("loginMessage");

  const registerMessage =
    document.getElementById("registerMessage");


  /* =====================================================
     ENTRAR NA TELA DE LOGIN
  ===================================================== */

  if (enterBtn) {

    enterBtn.addEventListener("click", function () {

      welcomeScreen.style.display = "none";

      if (loginScreen) {
        loginScreen.style.display = "block";
      }

      if (accountScreen) {
        accountScreen.style.display = "none";
      }

      if (appScreen) {
        appScreen.style.display = "none";
      }

      window.scrollTo(0, 0);

    });

  }


  /* =====================================================
     CRIAR NOVA CONTA
  ===================================================== */

  if (newAccountBtn) {

    newAccountBtn.addEventListener("click", function () {

      if (loginScreen) {
        loginScreen.style.display = "none";
      }

      if (accountScreen) {
        accountScreen.style.display = "block";
      }

      window.scrollTo(0, 0);

    });

  }


  /* =====================================================
     VOLTAR DO CADASTRO PARA LOGIN
  ===================================================== */

  if (registerBackBtn) {

    registerBackBtn.addEventListener("click", function () {

      if (accountScreen) {
        accountScreen.style.display = "none";
      }

      if (loginScreen) {
        loginScreen.style.display = "block";
      }

      window.scrollTo(0, 0);

    });

  }


  /* =====================================================
     VOLTAR DA CONTA ANTIGA
  ===================================================== */

  if (backBtn) {

    backBtn.addEventListener("click", function () {

      if (accountScreen) {
        accountScreen.style.display = "none";
      }

      if (loginScreen) {
        loginScreen.style.display = "block";
      }

      window.scrollTo(0, 0);

    });

  }


  /* =====================================================
     CRIAR CONTA
  ===================================================== */

  if (createAccountBtn) {

    createAccountBtn.addEventListener("click", function () {

      const name =
        document.getElementById("nameInput").value.trim();

      const email =
        document.getElementById("emailInput").value.trim();

      const password =
        document.getElementById("passwordInput").value.trim();


      if (
        name === "" ||
        email === "" ||
        password === ""
      ) {

        accountMessage.textContent =
          "Preencha todos os campos.";

        accountMessage.style.color = "#ff5555";

        return;
      }


      if (password.length < 6) {

        accountMessage.textContent =
          "A palavra-passe deve ter pelo menos 6 caracteres.";

        accountMessage.style.color = "#ff5555";

        return;
      }


      const user = {
        name: name,
        email: email,
        password: password
      };


      localStorage.setItem(
        "vipnetflix_user",
        JSON.stringify(user)
      );


      accountMessage.textContent =
        "Conta criada com sucesso!";

      accountMessage.style.color =
        "#39d98a";


      setTimeout(function () {

        accountScreen.style.display = "none";

        appScreen.style.display = "block";

        window.scrollTo(0, 0);

      }, 1000);

    });

  }


  /* =====================================================
     BOTÃO DA NOVA TELA DE CADASTRO
  ===================================================== */

  if (registerBtn) {

    registerBtn.addEventListener("click", function () {

      const name =
        document.getElementById("registerName").value.trim();

      const email =
        document.getElementById("registerEmail").value.trim();

      const password =
        document.getElementById("registerPassword").value;

      const password2 =
        document.getElementById("registerPassword2").value;


      if (
        name === "" ||
        email === "" ||
        password === "" ||
        password2 === ""
      ) {

        registerMessage.textContent =
          "Preencha todos os campos.";

        registerMessage.style.color =
          "#ff5555";

        return;
      }


      if (password.length < 6) {

        registerMessage.textContent =
          "A palavra-passe deve ter pelo menos 6 caracteres.";

        registerMessage.style.color =
          "#ff5555";

        return;
      }


      if (password !== password2) {

        registerMessage.textContent =
          "As palavras-passe não são iguais.";

        registerMessage.style.color =
          "#ff5555";

        return;
      }


      const user = {

        name: name,

        email: email,

        password: password

      };


      localStorage.setItem(
        "vipnetflix_user",
        JSON.stringify(user)
      );


      registerMessage.textContent =
        "Conta criada com sucesso!";

      registerMessage.style.color =
        "#39d98a";


      setTimeout(function () {

        accountScreen.style.display = "none";

        if (registerScreen) {
          registerScreen.style.display = "none";
        }

        appScreen.style.display = "block";

        window.scrollTo(0, 0);

      }, 1000);

    });

  }


  /* =====================================================
     LOGIN
  ===================================================== */

  if (loginBtn) {

    loginBtn.addEventListener("click", function () {

      const email =
        document.getElementById("loginEmail").value.trim();

      const password =
        document.getElementById("loginPassword").value;


      const savedUser =
        localStorage.getItem("vipnetflix_user");


      if (!savedUser) {

        loginMessage.textContent =
          "Você ainda não tem uma conta. Clique em CRIAR NOVA CONTA.";

        loginMessage.style.color =
          "#ff5555";

        return;
      }


      const user =
        JSON.parse(savedUser);


      if (
        email === user.email &&
        password === user.password
      ) {

        loginMessage.textContent =
          "Login realizado com sucesso!";

        loginMessage.style.color =
          "#39d98a";


        setTimeout(function () {

          loginScreen.style.display = "none";

          appScreen.style.display = "block";

          window.scrollTo(0, 0);

        }, 800);


      } else {

        loginMessage.textContent =
          "Email ou palavra-passe incorretos.";

        loginMessage.style.color =
          "#ff5555";

      }

    });

  }


  /* =====================================================
     DOWNLOADS
  ===================================================== */

  const downloadButton =
    document.querySelector(".download-page-btn");

  if (downloadButton) {

    downloadButton.addEventListener(
      "click",
      function () {

        alert(
          "A área de Downloads ficará disponível aqui para assistir aos conteúdos offline dentro do aplicativo."
        );

      }
    );

  }

});
