import { CARS } from "./constants/cars.contant";
const equipmentSelectModel = document.querySelectorAll("#equipmentSelectModel");
const equipmentSelectEquipment = document.querySelector(
  "#equipmentSelectEquipment"
);
const equipmentSelectEngine = document.querySelector("#equipmentSelectEngine");
const equipmentList = document.querySelector("#equipmentList");

// MODEL
CARS.map((car, i) => {
  equipmentSelectModel.forEach((item) => {
    const modelOptions = document.createElement("option");
    modelOptions.value = car.name;
    modelOptions.textContent = car.name;
    item.appendChild(modelOptions);
  });
});

// COMPLECTATION
CARS.map((car) => {
  car.variants.map((variant) => {
    const equipmentOption = document.createElement("option");
    equipmentOption.value = variant.name;
    equipmentOption.textContent = variant.name;
    equipmentSelectEquipment.appendChild(equipmentOption);
  });
});

// ENGINE
CARS.map((car) => {
  car.variants.map((variant) => {
    const engineOption = document.createElement("option");
    engineOption.value = variant.engine;
    engineOption.textContent = variant.engine;
    equipmentSelectEngine.appendChild(engineOption);
  });
});

CARS.map((car) => {
  const newCar = document.createElement("div");
  newCar.classList.add("equipment__item");

  newCar.innerHTML = `
            <div class="equipment__item-img">
              <img src=${car.preview} alt="Car" />
            </div>
            <div class="equipment__item-info">
              <h6 class="equipment__item-title">${car.name}</h6>
              <p class="equipment__item-details">
                2.0 л. Бензин, Полный, Автоматическая
              </p>
              <p class="equipment__item-price">${car.variants[0].price} ₽</p>
              <div class="equipment__item-sales">
                <div class="equipment__item-sale">
                  <img src="/src/images/icons/tag.svg" alt="Tag" />
                  <p>Выгода по Trade-in до 450 000 ₽</p>
                </div>
                <div class="equipment__item-sale">
                  <img src="/src/images/icons/gift.svg" alt="Gift" />
                  <p>Керамическое покрытие в подарок!</p>
                </div>
              </div>
            </div>
            <div class="equipment__item-controls">
              <button class="button">
                Получить предложение
                <img
                  src="/src/images/icons/chevron-right.svg"
                  alt="Получить предложение"
                />
              </button>
              <button class="button-outline">
                Тест-драйв
                <img
                  src="/src/images/icons/chevron-right-white.svg"
                  alt="Тест-драйв"
                />
              </button>
            </div>
  `;

  equipmentList.appendChild(newCar);
});
