let t = document.querySelector("#temperature")
let s = document.querySelector("#windspeed")

if (t <= 50) && (s > 3) {
    function windChill(t, s) {
            
        let f = 35.74 + (0.6215 * t) - (35.75 * Math.pow(s, 0.16)) 
                    + (0.4275 * t * Math.pow(s, 0.16));
        var calculation = Math.round(f)
        return calculation;
    } 
}

//I've never been great at javascript...  