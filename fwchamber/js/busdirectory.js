let getmyURL= "https://carolynjae.github.io/fwchamber/data/businessdata.json";

fetch(getmyURL)
  .then(function (response) {
    return response.json();
  })

  .then(function (jsonObject) {
    console.table(jsonObject);
    const businesses = jsonObject["businesses"];
    for (let i = 0; i < businesses.length; i++) {
        var thisBusiness = businesses[i];
        let buscards = document.createElement("section");
        let businessName = document.createElement("h3");  
        let businessAddress = document.createElement("p");
        let businessPhone = document.createElement("p");  
        let businessURL = document.createElement("p"); 
        let businessLogo = document.createElement("img");

      businessName.textContent = thisBusiness.busname;
      businessAddress.textContent = thisBusiness.busaddress;
      businessPhone.textContent = thisBusiness.busphone;
      businessURL.textContent = thisBusiness.buswebsite;
      businessLogo.setAttribute("src", thisBusiness.busimage);
      businessLogo.setAttribute("alt", thisBusiness.busname + "Logo");

      buscards.appendChild(businessLogo);
      buscards.appendChild(businessName);
      buscards.appendChild(businessAddress);
      buscards.appendChild(businessPhone);
      buscards.appendChild(businessURL);

      document.querySelector("div.cards").appendChild(buscards);            
    }
  });

  
    /* --- DIRECTORY BUTTONS--- */

    var directoryList = document.getElementById("directorylist");
    
    document.addEventListener("click", function (event) {
      if (!event.target.matches(".list")) return;
    
      event.preventDefault();
      directoryList.classList.add("list");
    });
    
    document.addEventListener("click", function (event) {
      if (!event.target.matches(".grid")) return;
          
      event.preventDefault();
      directoryList.classList.remove("list");
    });