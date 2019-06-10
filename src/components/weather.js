const { weather_key } = require('../../config.json');
const fetch = require("node-fetch");
const url = 'https://api.openweathermap.org/data/2.5/weather?q=';


class Weather {
    static handleWeather(message) {
        var key = weather_key;
        fetch( url + message + '&appid=' + key )
        .then(function(resp) { return resp.json() }) // Convert data to json
        .then(function(data) {
            console.log(data);
        })
        .catch(function() {
            // catch any errors
        });
    }
    static handle(message) {
        
    }
}
function convertKelvinToCelsius(kelvin) {
	if (kelvin < (0)) {
		return 'below absolute zero (0 K)';
	} else {
		return (kelvin-273.15);
	}
}



module.exports.init = function () {
   console.log(getCurrentWeatherByCityName('Toronto'));
};
