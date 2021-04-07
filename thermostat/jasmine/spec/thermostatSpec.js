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
  });
});
