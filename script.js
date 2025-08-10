// animaçoes
document.addEventListener("DOMContentLoaded", function () {
  AOS.init({
    duration: 800,       
    easing: "ease-in-out", 
    once: false,         
    mirror: true         
  });

  new Typed("#typing", {
    strings: [
      "Olá, eu sou Éric!",
      "Sou Desenvolvedor Web.",
      "Seja bem-vindo!"
    ],
    typeSpeed: 55,       
    backSpeed: 35,       
    backDelay: 2500,     
    startDelay: 500,     
    smartBackspace: true, 
    loop: true,          
    showCursor: true,    
    cursorChar: "|"      
  });
});

// formulario
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
    const formMessage = document.getElementById("formMessage");

    form.addEventListener("submit", async function (e) {
      e.preventDefault();

      formMessage.classList.remove("text-red-400");
      formMessage.classList.remove("hidden");
      formMessage.classList.remove("opacity-0");
      formMessage.textContent = "";

      const formData = new FormData(form);

      try {
        const response = await fetch(form.action, {
          method: form.method,
          body: formData,
          headers: {
            "Accept": "application/json"
          }
        });

        if (response.ok) {
          formMessage.textContent = "Sua mensagem foi enviada com sucesso!";
          formMessage.classList.add("opacity-100");
          form.reset();

          setTimeout(() => {
            formMessage.classList.remove("opacity-100");
            formMessage.classList.add("opacity-0");
            setTimeout(() => formMessage.classList.add("hidden"), 700);
          }, 5000);
        } else {
          throw new Error("Erro no envio do formulário.");
        }
      } catch (error) {
        formMessage.textContent = "❌ Ocorreu um erro. Tente novamente.";
        formMessage.classList.add("text-red-400");
        formMessage.classList.add("opacity-100");
      }
    });
  });

const toggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("menu");

  toggle.addEventListener("click", () => {
    if (menu.classList.contains("scale-y-0")) {
      menu.classList.remove("hidden");
      setTimeout(() => {
        menu.classList.remove("scale-y-0");
      }, 10);
    } else {
      menu.classList.add("scale-y-0");
      setTimeout(() => {
        menu.classList.add("hidden");
      }, 300);
    }
  });

  