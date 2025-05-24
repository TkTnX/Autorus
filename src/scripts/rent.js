const carImage = document.querySelector("#carImage");
const carColorsElements = document.querySelector("#carColorsElements");

const COLORS = [
  {
    value: "#ef2929",
    img: "/src/images/cars/300-red.png",
  },
  {
    value: "#e6e7e8",
    img: "/src/images/cars/300-orange.png",
  },
  {
    value: "#c6c9ce",
    img: "/src/images/cars/300-silver.png",
  },
  {
    value: "#df4c30",
    img: "/src/images/cars/300-black.png",
  },
  {
    value: "#212329",
    img: "/src/images/cars/300-white.png",
  },
];

COLORS.map(({ value, img }) => {
  const carColor = document.createElement("button");
  carColor.classList.add("rent__car-color");

  carColor.addEventListener("click", () => {
    carImage.src = img;
    carColorsElements
      .querySelector(".rent__car-color--choosen")
      .classList.remove("rent__car-color--choosen");
    carColor.classList.add("rent__car-color--choosen");
  });

  carColor.style.backgroundColor = value;
  carColorsElements.appendChild(carColor);
  carColorsElements.firstChild.classList.add("rent__car-color--choosen");
});
