"use strict";

const apiKey = "b47ecafd449e25914b5164c6b9fe2cad";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const city = document.querySelector(".city");
const temp = document.querySelector(".temp");
const humidity = document.querySelector(".humidity");
const wind = document.querySelector(".wind");

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weather = document.querySelector(".weather");
const weatherIcon = document.querySelector(".weather-icon");
const errorMsg = document.querySelector(".error");

const checkWeather = async function (cityName) {
  const response = await fetch(apiUrl + cityName + `&appid=${apiKey}`);

  if (response.status == 404) {
    errorMsg.style.display = "block";
    weather.style.display = "none";
  } else {
    const data = await response.json();

    city.innerHTML = data.name;
    temp.innerHTML = Math.round(data.main.temp) + "°c";
    humidity.innerHTML = data.main.humidity + "%";
    wind.innerHTML = data.wind.speed + " km/h";

    switch (data.weather[0].main) {
      case "Clouds":
        weatherIcon.src = "images/clouds.png";
        break;
      case "Clear":
        weatherIcon.src = "images/clear.png";
        break;
      case "Rain":
        weatherIcon.src = "images/rain.png";
        break;
      case "Drizzle":
        weatherIcon.src = "images/drizzle.png";
        break;
      case "Mist":
        weatherIcon.src = "images/mist.png";
        break;
    }

    weather.style.display = "block";
    errorMsg.style.display = "none";
    console.log(data);
  }
};

searchBtn.addEventListener("click", function () {
  checkWeather(searchBox.value);
});

document.addEventListener("keypress", (e) => {
  if (e.key == "Enter") checkWeather(searchBox.value);
});
