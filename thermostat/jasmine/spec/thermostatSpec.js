describe('Thermostat', function(){

  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  describe('start', function(){
    it('is equal to 20', function(){
      expect(thermostat.temperature).toEqual(20);
    });
  });

  describe('temp change', function(){
    it('increase when up is run', function(){
      thermostat.up()
      expect(thermostat.temperature).toEqual(21)
    });

    it('decreases when down is run', function(){
      thermostat.down()
      expect(thermostat.temperature).toEqual(19);
    });

    it('cannot go lower than 10 degrees', function(){
      thermostat.temperature = 10;
      expect(function() { thermostat.down(); } ).toThrow(new Error("Temperature already at minimum"))
    });
  });

  describe('power saving mode', function(){
    it("won't increase the temperature beyond 25 degrees in power saving mode", function(){
      thermostat.temperature = 25;
      thermostat.powerSaving = true;
      expect(function() { thermostat.up(); } ).toThrow(new Error("Cannot exceed 25 degrees in Power Saving Mode"))
    });

    it('won\'t increase the temperature beyond 32 degrees in non power saving mode', function(){
      thermostat.temperature = 32;
      thermostat.powerSaving = false;
      expect(function() {thermostat.up(); } ).toThrow(new Error("Cannot exceed 32 degrees"));
    });

    it('is on by default', function(){
      expect(thermostat.powerSaving).toEqual(true);
    });

    it('can be changed to false', function(){
      thermostat.changeMode();
      expect(thermostat.powerSaving).toEqual(false);
    });
  });

  describe('reset function', function(){
    it('resets the temperature to 20 when run', function(){
      thermostat.temerature = 25;
      thermostat.reset();
      expect(thermostat.temperature).toEqual(20);
    });
  });
});
