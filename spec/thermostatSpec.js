'use strict';

describe('Thermostat', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe('#new', function() {
    it('should start at 20 degrees', function() {
      expect(thermostat.temperature).toEqual(20);
    });
  });
  describe('#up', function() {
    it('should increase with an up function', function() {
      thermostat.up(1);
      expect(thermostat.temperature).toEqual(21);
    });
  });
  describe('#down', function() {
    it('should decrease with a down function', function() {
      thermostat.down(1);
      expect(thermostat.temperature).toEqual(19);
    });
  });
});
