// var apiKey = require('./../.env').apiKey;
var Temperature = require('./../js/temperature.js').temperatureModule;

var displayTemp = function(city, tempData){
  $('.showtemp').text("The temperature in " + city + " is " + tempData + "F");
}

$(document).ready(function() {
  var currentTempObject = new Temperature();
  $('#temperature-location').click(function(){
    var city = $('#location').val();
    $('#location').val("");
    currentTempObject.getTemperature(city, displayTemp);
  });
});
