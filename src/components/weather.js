const { weather_key } = require('../../config.json');
const fetch = require("node-fetch");

function convertKelvinToCelsius(kelvin) {
	if (kelvin < (0)) {
		return 'below absolute zero (0 K)';
	} else {
		return (kelvin-273.15);
	}
}

function getCurrentWeatherByCityName( cityName ) {
    var key = weather_key;
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + cityName+ '&appid=' + key)
    .then(function(resp) { return resp.json() }) // Convert data to json
    .then(function(data) {
        console.log(data);
    })
    .catch(function() {
        // catch any errors
    });
  }

module.exports.init = function () {
   console.log(getCurrentWeatherByCityName('Toronto'));
};
