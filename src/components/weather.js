const { weather_key } = require('../../config.json');
const fetch = require("node-fetch");

const url = 'https://api.openweathermap.org/data/2.5/weather?q=';
const command = 'weather'

class Weather {
    static handleWeather(message) {
        var key = weather_key;
        fetch( url + message + '&appid=' + key )
        //Note the temp returned is in Kelvin
        .then(function(resp) { return resp.json() }) // Convert data to json
        .then(function(data) {
            console.log(data);
        })
        .catch(function() {
            // catch any errors
        });
    }
    static handle(message) {
        const arr = message.content.split(' ');
        const command = arr.shift().substr(1); // Maybe un-hardcode the length
        const args = arr;
        this.handleWeather(args);
    }
    static match(message) {
        const command = message.content.split(' ').shift().substr(1); // Maybe un-hardcode the length
        return matches.includes(command);
    }
}

module.exports = Weather;
