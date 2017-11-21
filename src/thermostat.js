'use strict';

var INIT_TEMP = 20;
var MAX_TEMP = 32;
var MAX_PS_TEMP = 25;
var MIN_TEMP = 10;

function Thermostat() {
  this.temperature = INIT_TEMP;
  this._min =  MIN_TEMP;
  this._max = MAX_TEMP;
  this._ps_max = MAX_PS_TEMP;
  this.powersaving = true;
};

Thermostat.prototype.min = function() {
  return this._min;
};

Thermostat.prototype.max = function() {
  return this.powersaving ? this._ps_max : this._max;
};

Thermostat.prototype.up = function (number) {
  this.temperature = Math.min(this.max(), this.temperature + number);
};

Thermostat.prototype.down = function (number) {
  this.temperature = Math.max(this.min(), this.temperature - number);
};
