document.querySelector(".currentTemp")
document.querySelector(".windspeed")

if (currentTemp <= 50) and (windspeed < 3) {
    function windChill(tempF, speed) {
            
        let f = 35.74 + (0.6215 * tempF) - (35.75 * Math.pow(speed, 0.16)) 
                    + (0.4275 * tempF * Math.pow(speed, 0.16));
        var calculation = Math.round(f)
        return calculation;
    } 
}

