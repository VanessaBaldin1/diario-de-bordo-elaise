// function mensagem() {
//   alert("Esse site representa minha evolução no desenvolvimento web");
// }

// MENSAGEM BOTÃO HERO

function mensagem() {
  alert("Continue aprendendo e evoluindo no desenvolvimento web 🚀");
}


// BOTÃO SCROLL

const scrollBtn = document.createElement("button");

scrollBtn.innerHTML = "↑";

scrollBtn.setAttribute("id", "scrollTopBtn");

document.body.appendChild(scrollBtn);

// MOSTRAR BOTÃO AO ROLAR

window.addEventListener("scroll", () => {

  if (window.scrollY > 300) {
    scrollBtn.style.display = "flex";
  } else {
    scrollBtn.style.display = "none";
  }

});

// SCROLL SUAVE

scrollBtn.addEventListener("click", () => {

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

});


// CRIA BOTÃO HAMBURGER

const menuBtn = document.createElement("button");

menuBtn.innerHTML = "☰";

menuBtn.setAttribute("id", "menuMobileBtn");

document.querySelector("header").prepend(menuBtn);

// PEGA NAV

const nav = document.querySelector("header nav");

// ABRIR / FECHAR MENU

menuBtn.addEventListener("click", () => {

  nav.classList.toggle("active");

});

// FECHAR MENU AO CLICAR

document.querySelectorAll("header nav a").forEach(link => {

  link.addEventListener("click", () => {

    nav.classList.remove("active");

  });

});

 
// CSS DINÂMICO VIA JS


const style = document.createElement("style");

style.innerHTML = `

/* BOTÃO SCROLL*/

#scrollTopBtn {

  position: fixed;

  bottom: 25px;
  right: 25px;

  width: 55px;
  height: 55px;

  border: none;
  border-radius: 50%;

  background: #00c9a7;
  color: white;

  font-size: 24px;
  font-weight: bold;

  cursor: pointer;

  display: none;

  align-items: center;
  justify-content: center;

  z-index: 999;

  box-shadow: 0 5px 15px rgba(0,0,0,0.3);

  transition: 0.3s;
}

#scrollTopBtn:hover {

  transform: scale(1.1);

  background: #00b093;
}

/* MENU MOBILE */

#menuMobileBtn {

  display: none;

  background: #00c9a7;

  color: white;

  border: none;

  width: 50px;
  height: 50px;

  border-radius: 10px;

  font-size: 24px;

  cursor: pointer;
}

/*MOBILE*/

@media (max-width: 768px) {

  #menuMobileBtn {
    display: block;
  }

  header {

    position: relative;
  }

  header nav {

    position: fixed;

    top: 0;
    left: -100%;

    width: 260px;
    height: 100vh;

    background: #111;

    flex-direction: column;

    padding: 100px 20px;

    transition: 0.4s;

    z-index: 998;
  }

  header nav.active {

    left: 0;
  }

  header nav a {

    width: 100%;

    padding: 15px;

    border-radius: 8px;

    background: rgba(255,255,255,0.05);
  }

  header nav a:hover {

    background: #00c9a7;

    color: #111;
  }

}

/* DESKTOP */

@media (min-width: 769px) {

  header nav {

    position: static !important;

    width: auto !important;
    height: auto !important;

    background: transparent !important;

    padding: 0 !important;

    flex-direction: row !important;
  }

}

`;

document.head.appendChild(style);