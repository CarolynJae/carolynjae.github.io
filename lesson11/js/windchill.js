let t = parseFloat(document.querySelector("#temperature").innerHTML);
let s = parseFloat(document.querySelector("#windspeed").innerHTML);

if (t <= 50 && s > 3) {
        let f = 35.74 + (0.6215 * t) - (35.75 * Math.pow(s, 0.16)) 
                    + (0.4275 * t * Math.pow(s, 0.16));
        var calculation = Math.round(f)
        document.querySelector("#windChill").innerHTML = calculation + "&#8457";
    } 
else {
    document.querySelector("#windChill").innerHTML = "N/A";
}