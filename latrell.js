const burgir = document.querySelector(".toggle_menu");
const hnav = document.querySelector(".header_nav");
burgir.addEventListener("click", () => {
    burgir.classList.toggle("open");
    hnav.classList.toggle("open");
});

const contactButton = document.querySelector(".contact_button");
const contactForm = document.querySelector(".contact_forms");
const backDrop = document.querySelector(".backdrop");

contactButton.addEventListener("click", () => {
    if (contactForm.classList.contains("open")) {
        contactForm.classList.remove("open");
        contactButton.classList.remove("open");
        backDrop.classList.remove("open");
    } else {
        contactForm.classList.add("open");
        contactButton.classList.add("open");
        backDrop.classList.add("open");
    }
});

const home = document.querySelector(".homenav");
const about = document.querySelector(".aboutnav");
const program = document.querySelector(".programnav");
const event = document.querySelector(".eventsnav");
const newslettter = document.querySelector(".newsletternav");

home.addEventListener("click", () => {
    burgir.classList.remove("open");
    hnav.classList.remove("open");
});
about.addEventListener("click", () => {
    burgir.classList.remove("open");
    hnav.classList.remove("open");
});
program.addEventListener("click", () => {
    burgir.classList.remove("open");
    hnav.classList.remove("open");
});
event.addEventListener("click", () => {
    burgir.classList.remove("open");
    hnav.classList.remove("open");
});
newslettter.addEventListener("click", () => {
    burgir.classList.remove("open");
    hnav.classList.remove("open");
});

