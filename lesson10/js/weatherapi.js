const apiURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=ba93ecdd2871472e91bb1e18e6fe2f14&units=imperial";

fetch(apiURL)
  .then((response) => response.json())

  .then((jsObject) => {
      console.log(jsObject);
    console.log(jsObject.list[0].main);
   
    document.getElementById('current-temp').textContent = jsObject.list[0].main.temp;

    const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.list[0].weather[0].icon + '.png'; 
    const desc = jsObject.list[0].weather[0].description;  
    document.getElementById('imagesrc').textContent = imagesrc;  
    document.getElementById('icon').setAttribute('src', imagesrc);  
    document.getElementById('icon').setAttribute('alt', desc);


  });