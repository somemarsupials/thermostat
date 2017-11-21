'use strict';

describe('Thermostat', function() {
  var thermostat;
  var limits;

  beforeEach(function() {
    thermostat = new Thermostat(20, limits);
  });

  describe('#new', function() {
    it('should start at 20 degrees', function() {
      expect(thermostat.temperature).toEqual(20);
    });

    it('should start in power-saving mode', function() {
      expect(thermostat.powersaving).toEqual(true);
    });
  });

  describe('#min', function() {
    it('should get minimum temperature', function() {
      expect(thermostat.min()).toEqual(10);
    });
  });

  describe('#max', function() {
    it('should get maximum temperature when not in PS mode', function() {
      thermostat.powersaving = false;
      expect(thermostat.max()).toEqual(32);
    });

    it('should get maximum temperature when in PS mode', function() {
      expect(thermostat.max()).toEqual(25);
    });
  });

  describe('#up', function() {
    it('should increase with an up function', function() {
      thermostat.up(1);
      expect(thermostat.temperature).toEqual(21);
    });

    describe('in power saving mode', function() {
      it('cannot increase above 25 degrees', function() {
        thermostat.up(100);
        expect(thermostat.temperature).toEqual(25);
      });
    });

    describe('not in power saving mode', function() {
      it('cannot increase above 32 degrees', function() {
        thermostat.powersaving = false;
        thermostat.up(100);
        expect(thermostat.temperature).toEqual(32);
      });
    });
  });

  describe('#down', function() {
    it('should decrease with a down function', function() {
      thermostat.down(1);
      expect(thermostat.temperature).toEqual(19);
    });

    it('cannot reduce below 10 degrees', function() {
      thermostat.down(100);
      expect(thermostat.temperature).toEqual(10);
    });
  });

  describe ('#reset', function(){
    it('should reset thermostat termometer', function() {
      thermostat.reset();
      expect(thermostat.temperature).toEqual(20);
    });
  });
  describe ('#energyUsage', function(){
    it('should return low-usage when bellow 18', function() {
      thermostat.down(3);
      expect(thermostat.energyUsage()).toEqual('low-usage');
    });
    it('should return medium-usage when between 18 to 25', function() {
      expect(thermostat.energyUsage()).toEqual('medium-usage');
    });
    it('should return high-usage when above', function() {
      thermostat.powersaving = false;
      thermostat.up(6);
      expect(thermostat.energyUsage()).toEqual('high-usage');
    });
  });
});
