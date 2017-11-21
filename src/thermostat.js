'use strict';

var INIT_TEMP = 20;

function Thermostat(initial) {
  this.temperature = initial || INIT_TEMP;
};
