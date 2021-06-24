const apiURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=ba93ecdd2871472e91bb1e18e6fe2f14";

fetch(apiURL)
  .then((response) => response.json())


  .then((jsObject) => {
    console.log(jsObject);

    let p1 = document.createElement("p");
    p1.innerHTML = `<span id="current-temp">Temperature: </span> ${[0]}`;

    document.getElementById('current-temp').textContent = jsObject.main.temp;


  });