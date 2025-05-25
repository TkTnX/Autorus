const disclaimerButton = document.querySelector("#disclaimerButton");
const disclaimerText = document.querySelector("#disclaimerText");

disclaimerButton.addEventListener("click", () => {
    disclaimerButton.classList.toggle("footer__disclaimer-button--active");
  disclaimerText.classList.toggle("footer__disclaimer-text--active");
});
