/* Weather Summary Data */

const weatherURL =
  "https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=ba93ecdd2871472e91bb1e18e6fe2f14&units=imperial";

fetch(weatherURL)
  .then((response) => response.json())

  .then((jsObject) => {
    console.log(jsObject);
    console.log(jsObject.list[0].main);

    document.getElementById("temperature").textContent =
      Math.round(jsObject.list[0].main.temp);
    document.getElementById("conditions").textContent =
      jsObject.list[0].weather[0].description;
    document.getElementById("high").textContent =
      Math.round(jsObject.list[0].main.temp_max);
    document.getElementById("humidity").textContent =
      jsObject.list[0].main.humidity;
    document.getElementById("windspeed").textContent =
      Math.round(jsObject.list[0].wind.speed);

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
      document.getElementById(tempElement).textContent = Math.round(forecast.main.temp);          
    }   
  
  });

  /* Preston Town Events */
  /* Credit where credit is due: I was able to pull the town event information with
  no problem, but couldn't figure out how to split it into separate lines for the
  separate events. I consulted with my javascript-saavy son and also compared my code 
  against several classmates and was able to adjust my code to make it do what I wanted.*/

  const townListURL = "https://byui-cit230.github.io/weather/data/towndata.json";

  fetch(townListURL)
  .then(function (response) {
      return response.json();
  })
  
  .then(function (townlist) {
     console.table(townlist);
      const idahoTown = townlist.towns.filter((thisTown) => thisTown.name.includes("Preston"));

      let events = idahoTown[0].events;
      let eventCard = document.createElement("section");
      let eventInfo = document.createElement("div");
      
      events.forEach(event => {
        let townEvents = document.createElement("p");
        townEvents.textContent = event;
        eventInfo.appendChild(townEvents);
        eventCard.appendChild(eventInfo);          
      });

      document.querySelector("div.eventCard").appendChild(eventCard);
  });