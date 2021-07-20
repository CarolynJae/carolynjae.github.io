/*copyright date*/

let date = new Date();
document.getElementById('currentyear').innerHTML= date.getFullYear();

/*"hamburger" menu button*/

function toggleMenu() {
    document.getElementById('primaryNav').classList.toggle('hide');
    }

/*current date*/

    let today = new Date();

    let dd = String(today.getDate()).padStart(2, '0');

    let days = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];

    let dayName = days[today.getDay()];

    let months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];

    let mm = String(today.getMonth() + 1).padStart(2, '0');

    let monthName = months[today.getMonth()];

    let yyyy = today.getFullYear();

    today = dayName + ', ' + dd + ' ' + monthName + ' ' + yyyy;

    const currentDate = new Date();

    document.querySelector('#year').textContent = today;


    /*Slideshow code by w3schools*/

    var slideIndex = 0;
    showSlides();

    function showSlides() {
      var i;
      var slides = document.getElementsByClassName("mySlides");
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }

      slideIndex++;
      if (slideIndex > slides.length) {slideIndex = 1}
      slides[slideIndex-1].style.display = "block";
      setTimeout(showSlides, 2000); // Change image every 2 seconds
    }

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
