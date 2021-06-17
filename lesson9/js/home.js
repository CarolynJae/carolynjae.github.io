const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(requestURL)
.then(function (response) {
    return response.json();
})

.then(function (jsonObject) {
 //   console.table(jsonObject);
    const towns = jsonObject["towns"];
    for (let i=0; i < towns.length; i++) {
        if (i==0 || i==2 || i==6) {
         
        var thisTown = towns[i];
        let card = document.createElement("section");
        let townName = document.createElement("h2");  
        let townMotto = document.createElement("h3");
        let yearFounded = document.createElement("p");
        let townPopulation = document.createElement("p");
        let townRainfall = document.createElement("p");   
        let townImage = document.createElement("img");

        townName.textContent = thisTown.name;
        townMotto.textContent = thisTown.motto;
        yearFounded.textContent = "Founded in" + " " + thisTown.yearFounded;
        townPopulation.textContent = "Population:" + " " + thisTown.currentPopulation;
        townRainfall.textContent = "Average Yearly Rainfall:" + " " + thisTown.averageRainfall;

        townImage.setAttribute("src", thisTown.photo);
        townImage.setAttribute("alt", thisTown.name);

        card.appendChild(townName);
        card.appendChild(townMotto);
        card.appendChild(yearFounded);
        card.appendChild(townPopulation);
        card.appendChild(townRainfall);
        card.appendChild(townImage);

        document.querySelector("div.cards").appendChild(card); 
    }
}})

