var apiKey = require('./../.env').apiKey;


function Temperature(){
}

Temperature.prototype.getTemperature = function(city, displayTemp) {
  $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=imperial' + '&appid=' + apiKey).then(function(response){
    displayTemp(city, response.main.temp);
    }).fail(function(error){
    $('.showtemp').text(error.responseJSON.message);
  });
}

exports.temperatureModule = Temperature;
