let t = parseFloat(document.querySelector("#temperature").innerHTML);
let s = parseFloat(document.querySelector("#windspeed").innerHTML);

if (t <= 50 && s > 3) {
  let f =
    35.74 +
    0.6215 * t -
    35.75 * Math.pow(s, 0.16) +
    0.4275 * t * Math.pow(s, 0.16);
  var calculation = Math.round(f);
  document.querySelector("#windChill").innerHTML = calculation + "&#8457";
} else {
  document.querySelector("#windChill").innerHTML = "N/A";
}

/* Weather Summary Data */

const weatherURL =
  "https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=ba93ecdd2871472e91bb1e18e6fe2f14&units=imperial";

fetch(weatherURL)
  .then((response) => response.json())

  .then((jsObject) => {
    // console.log(jsObject);
    // console.log(jsObject.list[0].main);

    document.getElementById("temperature").textContent =
      jsObject.list[0].main.temp;
    document.getElementById("conditions").textContent =
      jsObject.list[0].weather[0].description;
    document.getElementById("high").textContent =
      jsObject.list[0].main.temp_max;
    document.getElementById("humidity").textContent =
      jsObject.list[0].main.humidity;
    document.getElementById("windspeed").textContent =
      jsObject.list[0].wind.speed;

    /* Five Day Forecast */

    const fivedayforecast = jsObject.list.filter((forecast) =>
      forecast.dt_txt.includes("18:00:00")
    );

    for (let i = 0; i < fivedayforecast.length; i++) {
      var forecast = fivedayforecast[i];
      var tempElement = "temp" + i;
      var iconElement = "icon" + i;
      var dayElement = "day" + i;
      var forecastDate = new Date(forecast.dt_txt);
      var forecastDay = days[forecastDate.getDay()];

      const desc = forecast.weather[0].description;
      const iconsrc = 
      "https://openweathermap.org/img/w/" + forecast.weather[0].icon + ".png";

      document.getElementById(dayElement).textContent = forecastDay;
      document.getElementById(iconElement).setAttribute("src", iconsrc);
      document.getElementById(iconElement).setAttribute("alt", desc);
      document.getElementById(tempElement).textContent = forecast.main.temp;

          
    }});
