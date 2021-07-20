let getmyURL= "https://carolynjae.github.io/fwchamber/data/businessdata.json";

fetch(getmyURL)
  .then(function (response) {
    return response.json();
  })

  .then(function (jsonObject) {
    
    const fwbusiness = jsonObject["fwbusiness"];
    for (let i = 0; i < fwbusiness.length; i++) {        
        let buscards = document.createElement("section");

        let name = document.createElement("h3");  
        name.innerHTML = fwbusiness[i].busname;

        let address = document.createElement("p");
        address.innerHTML = fwbusiness[i].busstreet;

        let city = document.createElement("p");
        city.innerHTML = fwbusiness[i].buscity;

        let phone = document.createElement("p");  
        phone.innerHTML = fwbusiness[i].busphone;

        let website = document.createElement("p"); 
        website.innerHTML = fwbusiness[i].buswebsite;

        let businessLogo = document.createElement("img");
          businessLogo.setAttribute("src", fwbusiness.busimage);
          businessLogo.setAttribute("alt", fwbusiness.busname + "Logo");

      buscards.append(businessLogo, name, address, city, phone, website);
      
      document.querySelector("div.cards").appendChild(buscards);            
    }
  });

  
    /* --- DIRECTORY BUTTONS--- */

  function gridView() {
    let div = document.querySelector("div.cards");
    div.classList.add("grids");
  }

  function listView() {
    let div = document.querySelector("div.cards");
    div.classList.remove("grids");
  }