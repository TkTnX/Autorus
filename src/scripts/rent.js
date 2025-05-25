import { CARS } from "./constants/cars.contant";

const carImages = document.querySelectorAll("#carImage");
const carColorsElements = document.querySelectorAll("#carColorsElements");
const carGallery = document.querySelectorAll("#carGallery");

CARS.map((car, index) => {
  car.colors.map(({ value, img }) => {
    // получение нужных элементов
    const image = carImages[index];
    const colors = carColorsElements[index];
    const gallery = carGallery[index];

    // создание цветов
    const color = document.createElement("div");
    color.classList.add("rent__car-color");
    color.style.backgroundColor = value;
    color.addEventListener("click", () => {
      image.src = img;
      image.alt = car.name;

      colors
        .querySelector(".rent__car-color--choosen")
        .classList.remove("rent__car-color--choosen");
      color.classList.add("rent__car-color--choosen");
    });

    // назначение дефолтных значений
    image.src = car.colors[0].img;
    image.alt = car.name;

    colors.appendChild(color);
    colors
      .querySelectorAll(".rent__car-color")[0]
      .classList.add("rent__car-color--choosen");

    // создание галереи
    gallery.innerHTML = car.gallery.map((img) => {
      return `<div class="rent__car-gallery-img">
              <img src=${img} alt="Gallery image" />
            </div>`;
    });
  });
});
