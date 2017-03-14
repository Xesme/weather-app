(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = "a5ee50d919aff788b9d1ce661fcc5518";

},{}],2:[function(require,module,exports){
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

},{"./../.env":1}],3:[function(require,module,exports){
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

},{"./../js/temperature.js":2}]},{},[3]);
