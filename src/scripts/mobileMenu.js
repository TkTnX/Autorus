const header = document.querySelector(".header");
const openMobileMenuBtn = document.querySelector("#openMobileMenuBtn");
const mobileMenu = document.querySelector("#mobileMenu");

function openMobileMenu() {
  mobileMenu.classList.toggle("mobile-menu--active");
    header.classList.toggle("header--open");
    document.body.classList.toggle('no-scroll')
}

openMobileMenuBtn.addEventListener("click", openMobileMenu);
