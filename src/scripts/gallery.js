import lightGallery from "lightgallery";
import "lightgallery/css/lightgallery-bundle.min.css";

// Plugins
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import { CARS } from "./constants/cars.contant";

const carGallery = document.querySelectorAll("#carGallery");

CARS.map((car, index) => {
  const gallery = carGallery[index];

  // создание галереи

  car.gallery.map((img) => {
    const galleryImg = document.createElement("a");
    galleryImg.classList.add("rent__car-gallery-img");
    galleryImg.href = img;
    galleryImg.innerHTML = `
         <img alt=${car.name} src="${img}"  />
         `;
    gallery.appendChild(galleryImg);
  });
});

carGallery.forEach((gallery) => {
  lightGallery(gallery, {
    plugins: [lgZoom, lgThumbnail],
    speed: 500,
  });
});
