let getmyURL= "https://carolynjae.github.io/fwchamber/data/businessdata.json";

fetch(getmyURL)
  .then(function (response) {
    return response.json();
  })

  .then(function (jsonObject) {
  //  console.table(jsonObject);
    const businesses = jsonObject["businesses"];
    for (let i = 0; i < businesses.length; i++) {
        var thisBusiness = businesses[i];
        let buscards = document.createElement("section");
        let businessName = document.createElement("h3");  
        let businessStreet = document.createElement("p");
        let businessCity = document.createElement("p");
        let businessPhone = document.createElement("p");  
        let businessURL = document.createElement("p"); 
        let businessLogo = document.createElement("img");

      businessName.textContent = thisBusiness.busname;
      businessStreet.textContent = thisBusiness.busstreet;
      businessCity.textContent = thisBusiness.buscity;
      businessPhone.textContent = thisBusiness.busphone;
      businessURL.textContent = thisBusiness.buswebsite;
      businessLogo.setAttribute("src", thisBusiness.busimage);
      businessLogo.setAttribute("alt", thisBusiness.busname + "Logo");

      buscards.appendChild(businessLogo);
      buscards.appendChild(businessName);
      buscards.appendChild(businessStreet);
      buscards.appendChild(businessCity);
      buscards.appendChild(businessPhone);
      buscards.appendChild(businessURL);

      document.querySelector("div.cards").appendChild(buscards);            
    }
  });
  

