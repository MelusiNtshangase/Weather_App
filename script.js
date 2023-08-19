"use strict";

const apiKey = "b47ecafd449e25914b5164c6b9fe2cad";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=bangalore";

const city = document.querySelector(".city");
const temp = document.querySelector(".temp");
const humidity = document.querySelector(".humidity");
const wind = document.querySelector(".wind");

const checkWeather = async function () {
  const response = await fetch(apiUrl + `&appid=${apiKey}`);
  const data = await response.json();

  city.innerHTML = data.name;
  temp.innerHTML = Math.round(data.main.temp) + "°c";
  humidity.innerHTML = data.main.humidity + "%";
  wind.innerHTML = data.wind.speed + " km/h";

  console.log(data);
};
checkWeather();
