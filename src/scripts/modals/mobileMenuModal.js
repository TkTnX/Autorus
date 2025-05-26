const header = document.querySelector(".header");
const openMobileMenuBtn = document.querySelector("#openMobileMenuBtn");
const mobileMenu = document.querySelector("#mobileMenu");

function openMobileMenu() {
  mobileMenu.classList.toggle("mobile-menu--active");
  header.classList.toggle("header--open");
  document.body.classList.toggle("no-scroll");

  if (mobileMenu.classList.contains("mobile-menu--active"))
    openMobileMenuBtn.children[0].src = "/src/images/icons/close.svg";

  if (!mobileMenu.classList.contains("mobile-menu--active"))
    openMobileMenuBtn.children[0].src = "/src/images/icons/burgerBtn.svg";
}

openMobileMenuBtn.addEventListener("click", openMobileMenu);
