/*copyright date*/

let date = new Date();
document.getElementById('currentyear').innerHTML= date.getFullYear();

/*"hamburger" menu button*/

function toggleMenu() {
    document.getElementById('primaryNav').classList.toggle('hide');
    }

/*current date*/

    var today = new Date();

    var dd = String(today.getDate()).padStart(2, '0');

    var days = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];

    var dayName = days[today.getDay()];

    var months = [
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

    var mm = String(today.getMonth() + 1).padStart(2, '0');

    var monthName = months[today.getMonth()];

    var yyyy = today.getFullYear();

    today = dayName + ', ' + dd + '' + monthName + '' + yyyy;

    const currentDate = new Date();

    document.querySelector('#year').textContent = today;

    /*Top Banner - display only on Friday*/

    let d = new Date();

    console.log(d.getDay());

    if (d.getDay() != 5) {
     document.querySelector('#topbanner').style.display = 'none';
} 

/*Form*/

function adjustRating(rating) {
  document.getElementById("ratingvalue").innerHTML = rating;
}
  
