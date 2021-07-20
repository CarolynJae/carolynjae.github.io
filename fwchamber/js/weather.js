/* FORT WORTH WEATHER */

const weatherURL =
    "https://api.openweathermap.org/data/2.5/onecall?lat=32.7555&lon=-97.3308&exclude=minutely,hourly&appid=ba93ecdd2871472e91bb1e18e6fe2f14&units=imperial";

fetch(weatherURL)
  .then((response) => response.json())

  .then((jsObject) => {
 
    document.getElementById("conditions").textContent =
      jsObject.current.weather[0].description;   

    document.getElementById("temperature").textContent =
      Math.round(jsObject.current.temp);
    
    document.getElementById("humidity").textContent =
      jsObject.current.humidity;


/* THREE DAY FORECAST */

    for (let i = 0; i < 4; i++) {
     var daily = threedayforecast[i];
     var tempElement = "temp" + i;
     var iconElement = "icon" + i;
     var dayElement = "day" + i;
     var forecastDate = new Date(daily.dt);
     var forecastDay = days[forecastDate.getDay()];

     const desc = daily.weather.description;
     const iconsrc = 
     "https://openweathermap.org/img/w/" + daily.weather.icon + ".png";

     document.getElementById(dayElement).textContent = forecastDay;
     document.getElementById(iconElement).setAttribute("src", iconsrc);
     document.getElementById(iconElement).setAttribute("alt", desc);
     document.getElementById(tempElement).textContent = Math.round(daily.temp.day);          
   }   
 
 });