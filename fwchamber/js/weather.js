/* FORT WORTH WEATHER */

const weatherURL =
    "https://api.openweathermap.org/data/2.5/onecall?lat=32.7555&lon=-97.3308&exclude=minutely,hourly&appid=ba93ecdd2871472e91bb1e18e6fe2f14&units=imperial";

fetch(weatherURL)
  .then((response) => response.json())

  .then((jsObject) => {
    console.log(jsObject);
    console.log(jsObject.list[0].main);

    document.getElementById("conditions").textContent =
      jsObject.list[0].weather[0].description;   

    document.getElementById("temperature").textContent =
      Math.round(jsObject.list[0].main.temp);
    
    document.getElementById("humidity").textContent =
      jsObject.list[0].main.humidity;


/* THREE DAY FORECAST */

const threedayforecast = jsObject.list.filter((forecast) =>
     forecast.dt_txt.includes("18:00:00")
   );

   for (let i = 0; i < threedayforecast.length; i++) {
     var forecast = threedayforecast[i];
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