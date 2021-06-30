//My team (Emily, Gary, Bonnette, and I) did some problem-solving and worked through 
//some of this code together in our team meeting on Thursday

const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(requestURL)
.then(function (response) {
    return response.json();
})

.then(function (jsonObject) {
//  console.table(jsonObject);
    const towns = jsonObject["towns"];

    //for PRESTON

        let card = document.createElement("section");
        let townInfo = document.createElement("div");
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

        townInfo.appendChild(townName);
        townInfo.appendChild(townMotto);
        townInfo.appendChild(yearFounded);
        townInfo.appendChild(townPopulation);
        townInfo.appendChild(townRainfall);

        let townImage = document.createElement("img");
        townImage.setAttribute("src", "images/preston2.jpg");
        townImage.setAttribute("alt", towns[6].name);

        card.appendChild(townInfo);
        card.appendChild(townImage);
        card.setAttribute("class", "odds");

        document.querySelector("div.cards").appendChild(card); 


    //for SODA SPRINGS

        card = document.createElement("section");
        townInfo = document.createElement("div");
        townName = document.createElement("h2");  
        townMotto = document.createElement("h4");
        yearFounded = document.createElement("p");
        townPopulation = document.createElement("p");
        townRainfall = document.createElement("p"); 
        

        townName.textContent = towns[0].name;
        townMotto.textContent = towns[0].motto;
        yearFounded.textContent = "Founded in" + " " + towns[0].yearFounded;
        townPopulation.textContent = "Population:" + " " + towns[0].currentPopulation;
        townRainfall.textContent = "Average Yearly Rainfall:" + " " + towns[0].averageRainfall; 

        townInfo.appendChild(townName);
        townInfo.appendChild(townMotto);
        townInfo.appendChild(yearFounded);
        townInfo.appendChild(townPopulation);
        townInfo.appendChild(townRainfall);

        townImage = document.createElement("img");
        townImage.setAttribute("src", "images/sodasprings2.jpg");
        townImage.setAttribute("alt", towns[0].name);

        card.appendChild(townInfo);
        card.appendChild(townImage);
        card.setAttribute("class", "even");

        document.querySelector("div.cards").appendChild(card); 


    //for FISH HAVEN

          card = document.createElement("section");
          townInfo = document.createElement("div");
          townName = document.createElement("h2");  
          townMotto = document.createElement("h4");
          yearFounded = document.createElement("p");
          townPopulation = document.createElement("p");
          townRainfall = document.createElement("p"); 
          
  
          townName.textContent = towns[2].name;
          townMotto.textContent = towns[2].motto;
          yearFounded.textContent = "Founded in" + " " + towns[2].yearFounded;
          townPopulation.textContent = "Population:" + " " + towns[2].currentPopulation;
          townRainfall.textContent = "Average Yearly Rainfall:" + " " + towns[2].averageRainfall; 
           
          townInfo.appendChild(townName);
          townInfo.appendChild(townMotto);
          townInfo.appendChild(yearFounded);
          townInfo.appendChild(townPopulation);
          townInfo.appendChild(townRainfall);

          townInfo.setAttribute("class", "info");
  
          townImage = document.createElement("img");
          townImage.setAttribute("src", "images/fishhaven2.jpg");
          townImage.setAttribute("alt", towns[2].name);
  
          card.appendChild(townInfo);
          card.appendChild(townImage);
          card.setAttribute("class", "odds");
  
          document.querySelector("div.cards").appendChild(card); 
   
})