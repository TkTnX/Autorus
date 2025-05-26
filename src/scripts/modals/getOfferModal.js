const getOfferButton = document.querySelector("#getOfferButton");
const closeGetOfferModalButton = document.querySelector(
  "#closeGetOfferModalButton"
);
const getOfferModal = document.querySelector("#getOfferModal");

function changeModalState() {
  getOfferModal.classList.toggle("getOfferModal--active");
  document.body.classList.toggle("no-scroll");
}

getOfferButton.addEventListener("click", changeModalState);
closeGetOfferModalButton.addEventListener("click", changeModalState);
