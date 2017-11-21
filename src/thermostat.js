'use strict';

var INIT_TEMP = 20;

function Thermostat(initial) {
  this.temperature = initial || INIT_TEMP;
};

Thermostat.prototype.up = function (number) {
  this.temperature += number;
};

Thermostat.prototype.down = function (number) {
  this.temperature -= number;
};
