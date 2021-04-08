  $( document ).ready(function() {
   var thermostat = new Thermostat;
   console.log(thermostat);

    $( "#mode" ).click(function( event ) {
      thermostat.changeMode();
      console.log(thermostat.getPowerSave());
    });
  });
