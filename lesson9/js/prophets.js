/*-- STARTER CODE SOURCE: W09 Activity: Working with JSON data and the Fetch API --*/

const requestURL =
  "https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })

  .then(function (jsonObject) {
//    console.table(jsonObject);
    const prophets = jsonObject["prophets"];
    for (let i = 0; i < prophets.length; i++) {
        var thisProphet = prophets[i];
        let card = document.createElement("section");
        let prophetName = document.createElement("h2");  
        let birthDate = document.createElement("p");
        let birthPlace = document.createElement("p");   
        let prophetImage = document.createElement("img");

      prophetName.textContent = thisProphet.name + " " + thisProphet.lastname;
      birthDate.textContent = "Date of Birth:" + " " + thisProphet.birthdate;
      birthPlace.textContent = "Place of Birth:" + " " + thisProphet.birthplace;
      prophetImage.setAttribute("src", thisProphet.imageurl);
      prophetImage.setAttribute("alt", thisProphet.name + " " + thisProphet.lastname + " - " + thisProphet.order);

      card.appendChild(prophetName);
      card.appendChild(birthDate);
      card.appendChild(birthPlace);
      card.appendChild(prophetImage);

      document.querySelector("div.cards").appendChild(card);            
    }
  });
