/* ==========================================
   MENÚ STICKY CON CAMBIO DE FONDO
========================================== */

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

});


/* ==========================================
   NAVEGACIÓN DE UNA SOLA PÁGINA
   El menú solo desplaza la vista a cada sección
========================================== */

const links = document.querySelectorAll(".nav-link");

links.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();

        const targetId = link.dataset.target;
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }

        if (navMenu.classList.contains("show")) {
            navMenu.classList.remove("show");
        }
    });
});


/* ==========================================
   MENÚ MÓVIL
========================================== */

const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("show");
});


/* ==========================================
   ACORDEONES MINIMALISTAS
========================================== */

const accordions =
document.querySelectorAll(".accordion");

accordions.forEach(acc => {

    const button =
    acc.querySelector(".accordion-header");

    button.addEventListener("click", () => {

        acc.classList.toggle("active");

        const content =
        acc.querySelector(".accordion-content");

        if(content.style.maxHeight){

            content.style.maxHeight = null;

        }else{

            content.style.maxHeight =
            content.scrollHeight + "px";
        }

    });

});