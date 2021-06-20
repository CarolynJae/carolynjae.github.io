const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(requestURL)
.then(function (response) {
    return response.json();
})

.then(function (jsonObject) {
    console.table(jsonObject);
    const towns = jsonObject["towns"];

//Preston          
        let card = document.createElement("section");
        let infoDiv = document.createElement("div");
        let townName = document.createElement("h2");  
        let townMotto = document.createElement("h4");
        let yearFounded = document.createElement("p");
        let townPopulation = document.createElement("p");
        let townRainfall = document.createElement("p"); 

        townName.textContent = towns[6].name;
        townMotto.textContent = towns[6].motto;
        yearFounded.textContent = "Founded in" + " " + towns[6].yearFounded;
        townPopulation.textContent = "Population:" + " " + towns[6].currentPopulation;
        townRainfall.textContent = "Average Yearly Rainfall:" + " " + towns[6].averageRainfall; 

        infoDiv.appendChild(townName);
        infoDiv.appendChild(townMotto);
        infoDiv.appendChild(yearFounded);
        infoDiv.appendChild(townPopulation);
        infoDiv.appendChild(townRainfall);

        let townImage = document.createElement("img");
        townImage.setAttribute("src", "images/preston.jpg");
        townImage.setAttribute("alt", towns[6].name);
        card.appendChild(infoDiv, townImage);

        document.querySelector("div.cards").appendChild(card); 


    //Soda Springs
         
        let card2 = document.createElement("section");
        let infoDiv2 = document.createElement("div");
        let townName2 = document.createElement("h2");  
        let townMotto2 = document.createElement("h4");
        let yearFounded2 = document.createElement("p");
        let townPopulation2 = document.createElement("p");
        let townRainfall2 = document.createElement("p"); 

        townName2.textContent = towns[0].name;
        townMotto2.textContent = towns[0].motto;
        yearFounded2.textContent = "Founded in" + " " + towns[0].yearFounded;
        townPopulation2.textContent = "Population:" + " " + towns[0].currentPopulation;
        townRainfall2.textContent = "Average Yearly Rainfall:" + " " + towns[0].averageRainfall; 

        infoDiv2.appendChild(townName2);
        infoDiv2.appendChild(townMotto2);
        infoDiv2.appendChild(yearFounded2);
        infoDiv2.appendChild(townPopulation2);
        infoDiv2.appendChild(townRainfall2);

        let townImage2 = document.createElement("img");
        townImage2.setAttribute("src", "images/sodasprings.jpg");
        townImage2.setAttribute("alt", towns[0].name);
        card2.appendChild(infoDiv2, townImage2);

        document.querySelector("div.cards").appendChild(card2); 

    //Fish Haven

    let card3 = document.createElement("section");
    let infoDiv3 = document.createElement("div");
    let townName3 = document.createElement("h2");  
    let townMotto3 = document.createElement("h4");
    let yearFounded3 = document.createElement("p");
    let townPopulation3 = document.createElement("p");
    let townRainfall3 = document.createElement("p"); 

    townName3.textContent = towns[2].name;
    townMotto3.textContent = towns[2].motto;
    yearFounded3.textContent = "Founded in" + " " + towns[2].yearFounded;
    townPopulation3.textContent = "Population:" + " " + towns[2].currentPopulation;
    townRainfall3.textContent = "Average Yearly Rainfall:" + " " + towns[2].averageRainfall; 

    infoDiv3.appendChild(townName3);
    infoDiv3.appendChild(townMotto3);
    infoDiv3.appendChild(yearFounded3);
    infoDiv3.appendChild(townPopulation3);
    infoDiv3.appendChild(townRainfall3);

    let townImage3 = document.createElement("img");
    townImage3.setAttribute("src", "images/haven.jpg");
    townImage3.setAttribute("alt", towns[2].name);
    card3.appendChild(infoDiv3, townImage3);

    document.querySelector("div.cards").appendChild(card3); 

})