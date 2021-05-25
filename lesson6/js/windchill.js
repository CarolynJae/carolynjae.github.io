function WindChillFactor(temperature, windspeed) {
    return 35.74 + (0.6215 * temperature) - (35.75 * (windspeed ^ 0.16)) + (0.4275 * temperature * (windspeed ^ 0.16))  ;
  }