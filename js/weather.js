const API_KEY = "750ae4e9e40992bbc9f048b88f1fcd7b";

const onGeoOk = function (position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");

      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
      city.innerText = data.name;

      console.log(data.name, data.weather[0].main);
    });
};

const onGeoError = function () {
  alert(`Can't find you. No weather for you`);
};

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

/**
 * https://api.openweathermap.org/data/2.5/weather?lat=37.566206&lon=127.0292881&appid=750ae4e9e40992bbc9f048b88f1fcd7b
 */

// 750ae4e9e40992bbc9f048b88f1fcd7b
