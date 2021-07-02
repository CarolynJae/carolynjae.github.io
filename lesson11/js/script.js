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
  
/*Last Visited*/

