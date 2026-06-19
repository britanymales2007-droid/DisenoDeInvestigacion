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
   El menú resalta la sección activa tanto al hacer clic
   como al desplazarse por la página.
========================================== */

const links = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("section.page");
const navMenu = document.getElementById("navMenu");

function setActiveLink(targetId) {
    links.forEach(link => {
        link.classList.toggle("active", link.dataset.target === targetId);
    });
}

links.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();

        const targetId = link.dataset.target;
        const targetSection = document.getElementById(targetId);

        setActiveLink(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }

        if (navMenu && navMenu.classList.contains("show")) {
            navMenu.classList.remove("show");
        }
    });
});

function updateActiveSection() {
    const headerHeight = header ? header.offsetHeight : 0;
    const scrollPosition = window.scrollY + headerHeight + 120;

    let currentSection = sections[0]?.id || "";

    sections.forEach(section => {
        if (scrollPosition >= section.offsetTop) {
            currentSection = section.id;
        }
    });

    setActiveLink(currentSection);
}

window.addEventListener("scroll", updateActiveSection, { passive: true });
window.addEventListener("load", updateActiveSection);
updateActiveSection();


/* ==========================================
   MENÚ MÓVIL
========================================== */

const hamburger = document.getElementById("hamburger");

if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
        navMenu.classList.toggle("show");
    });
}


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