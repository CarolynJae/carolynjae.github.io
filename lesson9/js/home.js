const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(requestURL)
.then(function (response) {
    return response.json();
})

.then(function (jsonObject) {
 //   console.table(jsonObject);
    const towns = jsonObject["towns"];
    for (let t=0; t <= 2; t++) {
        if (t==0) {i=6;}
        if (t==1) {i=0;}
        if (t==2) {i=2;}
         
        let card = document.createElement("section");
        let townName = document.createElement("h2");  
        let townMotto = document.createElement("h3");
        let yearFounded = document.createElement("p");
        let townPopulation = document.createElement("p");
        let townRainfall = document.createElement("p");   
        let townImage = document.createElement("img");

        townName.textContent = towns[i].name;
        townMotto.textContent = towns[i].motto;
        yearFounded.textContent = "Founded in" + " " + towns[i].yearFounded;
        townPopulation.textContent = "Population:" + " " + towns[i].currentPopulation;
        townRainfall.textContent = "Average Yearly Rainfall:" + " " + towns[i].averageRainfall; 

        card.appendChild(townName);
        card.appendChild(townMotto);
        card.appendChild(yearFounded);
        card.appendChild(townPopulation);
        card.appendChild(townRainfall);
        card.appendChild(townImage);

        document.querySelector("div.").appendChild(card); 

        if (i==6) {
            townImage.setAttribute("src", "images/preston.jpg");
            townImage.setAttribute("alt", towns[6].name);
        }

        if (i==0) {
            townImage.setAttribute("src", "images/sodasprings.jpg");
            townImage.setAttribute("alt", towns[0].name);
        }      

        if (i==2) {
            townImage.setAttribute("src", "images/haven.jpg");
            townImage.setAttribute("alt", towns[2].name);
        }
    }
})

