/* =====================================================
   VIPNETFLIX - APP.JS
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

  /* =====================================================
     TELAS
  ===================================================== */

  const welcomeScreen =
    document.getElementById("welcomeScreen");

  const loginScreen =
    document.getElementById("loginScreen");

  const registerScreen =
    document.getElementById("registerScreen");

  const appScreen =
    document.getElementById("appScreen");


  /* =====================================================
     ABERTURA → LOGIN
  ===================================================== */

  const enterBtn =
    document.getElementById("enterBtn");


  if (enterBtn) {

    enterBtn.addEventListener("click", function () {

      welcomeScreen.style.display = "none";

      loginScreen.style.display = "block";

      registerScreen.style.display = "none";

      appScreen.style.display = "none";

      window.scrollTo(0, 0);

    });

  }


  /* =====================================================
     LOGIN → CRIAR CONTA
  ===================================================== */

  const newAccountBtn =
    document.getElementById("newAccountBtn");


  if (newAccountBtn) {

    newAccountBtn.addEventListener("click", function () {

      loginScreen.style.display = "none";

      registerScreen.style.display = "block";

      window.scrollTo(0, 0);

    });

  }


  /* =====================================================
     VOLTAR DO CADASTRO → LOGIN
  ===================================================== */

  const registerBackBtn =
    document.getElementById("registerBackBtn");


  if (registerBackBtn) {

    registerBackBtn.addEventListener("click", function () {

      registerScreen.style.display = "none";

      loginScreen.style.display = "block";

      window.scrollTo(0, 0);

    });

  }


  /* =====================================================
     VOLTAR DO LOGIN → ABERTURA
  ===================================================== */

  const loginBackBtn =
    document.getElementById("loginBackBtn");


  if (loginBackBtn) {

    loginBackBtn.addEventListener("click", function () {

      loginScreen.style.display = "none";

      registerScreen.style.display = "none";

      appScreen.style.display = "none";

      welcomeScreen.style.display = "flex";

      window.scrollTo(0, 0);

    });

  }


  /* =====================================================
     CRIAR CONTA
  ===================================================== */

  const registerBtn =
    document.getElementById("registerBtn");


  if (registerBtn) {

    registerBtn.addEventListener("click", function () {

      const name =
        document.getElementById("registerName")
        .value
        .trim();


      const email =
        document.getElementById("registerEmail")
        .value
        .trim();


      const password =
        document.getElementById("registerPassword")
        .value;


      const password2 =
        document.getElementById("registerPassword2")
        .value;


      const message =
        document.getElementById("registerMessage");


      /* VALIDAR CAMPOS */

      if (
        name === "" ||
        email === "" ||
        password === "" ||
        password2 === ""
      ) {

        message.textContent =
          "Preencha todos os campos.";

        message.style.color =
          "#ff5555";

        return;

      }


      /* VALIDAR EMAIL */

      if (!email.includes("@")) {

        message.textContent =
          "Digite um email válido.";

        message.style.color =
          "#ff5555";

        return;

      }


      /* VALIDAR SENHA */

      if (password.length < 6) {

        message.textContent =
          "A palavra-passe deve ter pelo menos 6 caracteres.";

        message.style.color =
          "#ff5555";

        return;

      }


      /* CONFIRMAR SENHA */

      if (password !== password2) {

        message.textContent =
          "As palavras-passe não são iguais.";

        message.style.color =
          "#ff5555";

        return;

      }


      /* GUARDAR CONTA PARA TESTE */

      const user = {

        name: name,

        email: email,

        password: password

      };


      localStorage.setItem(
        "vipnetflix_user",
        JSON.stringify(user)
      );


      message.textContent =
        "Conta criada com sucesso!";

      message.style.color =
        "#39d98a";


      /* IR PARA APLICAÇÃO */

      setTimeout(function () {

        registerScreen.style.display = "none";

        appScreen.style.display = "block";

        window.scrollTo(0, 0);

      }, 1000);

    });

  }


  /* =====================================================
     LOGIN
  ===================================================== */

  const loginBtn =
    document.getElementById("loginBtn");


  if (loginBtn) {

    loginBtn.addEventListener("click", function () {

      const email =
        document.getElementById("loginEmail")
        .value
        .trim();


      const password =
        document.getElementById("loginPassword")
        .value;


      const message =
        document.getElementById("loginMessage");


      /* PROCURAR CONTA */

      const savedUser =
        localStorage.getItem("vipnetflix_user");


      if (!savedUser) {

        message.textContent =
          "Você ainda não tem uma conta.";

        message.style.color =
          "#ff5555";

        return;

      }


      const user =
        JSON.parse(savedUser);


      /* VERIFICAR LOGIN */

      if (
        email === user.email &&
        password === user.password
      ) {

        message.textContent =
          "Login realizado com sucesso!";

        message.style.color =
          "#39d98a";


        setTimeout(function () {

          loginScreen.style.display = "none";

          appScreen.style.display = "block";

          window.scrollTo(0, 0);

        }, 800);


      } else {

        message.textContent =
          "Email ou palavra-passe incorretos.";

        message.style.color =
          "#ff5555";

      }

    });

  }


  /* =====================================================
     ESQUECI A PALAVRA-PASSE
  ===================================================== */

  const forgotPasswordBtn =
    document.getElementById("forgotPasswordBtn");


  if (forgotPasswordBtn) {

    forgotPasswordBtn.addEventListener(
      "click",
      function () {

        const savedUser =
          localStorage.getItem("vipnetflix_user");


        if (!savedUser) {

          alert(
            "Ainda não existe uma conta VipNetflix."
          );

          return;

        }


        alert(
          "A recuperação da palavra-passe será ligada a email/telefone na próxima etapa."
        );

      }
    );

  }


  /* =====================================================
     DOWNLOADS
  ===================================================== */

  const downloadPageBtn =
    document.getElementById("downloadPageBtn");


  if (downloadPageBtn) {

    downloadPageBtn.addEventListener(
      "click",
      function () {

        alert(
          "Área de Downloads: os conteúdos autorizados baixados ficarão disponíveis para assistir offline dentro do aplicativo."
        );

      }
    );

  }


  /* =====================================================
     ASSISTIR
  ===================================================== */

  const watchBtn =
    document.getElementById("watchBtn");


  if (watchBtn) {

    watchBtn.addEventListener(
      "click",
      function () {

        alert(
          "O player VipNetflix será aberto aqui."
        );

      }
    );

  }


  /* =====================================================
     MENU
  ===================================================== */

  const menuBtn =
    document.getElementById("menuBtn");


  if (menuBtn) {

    menuBtn.addEventListener(
      "click",
      function () {

        alert(
          "Menu VipNetflix."
        );

      }
    );

  }


});
