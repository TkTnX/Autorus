import ymaps from "ymaps";

ymaps
  .load()
  .then((maps) => {
    const map = new maps.Map("map", {
      center: [55.881929, 37.731515],
      zoom: 15,
      controls: [],
    });
    const placemark = new maps.Placemark(
      [55.881929, 37.731515],
      {},
      {
        iconLayout: "default#image",
        iconImageHref: "/src/images/icons/location.svg",
        iconImageSize: [47, 60],
        iconImageOffset: [-15, -42],
      }
    );
    map.geoObjects.add(placemark);
  })
  .catch((error) => console.log("Failed to load Yandex Maps", error));
