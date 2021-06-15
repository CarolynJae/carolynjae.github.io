/*-- STARTER CODE SOURCE: W09 Activity: Working with JSON data and the Fetch API --*/

const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

fetch (requestURL)
    .then (function (response) {
        return response.json();
    })

    .then (function (jsonObject) {
        console.table(jsonObject);
        for (let i = 0; i < prophets.length; i++ ) {
    })

const prophets = jsonObject['prophets'];