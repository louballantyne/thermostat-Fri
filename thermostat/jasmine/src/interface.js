  $( document ).ready(function() {
   var thermostat = new Thermostat;
   console.log(thermostat);

    $( "#mode" ).click(function( event ) {
      thermostat.changeMode();
      $('#power_mode').text(thermostat.getPowerSave())
    });

    $( "#reset" ).click(function( event ) {
      thermostat.reset();
      updateTemperature();

    });

    $( "#up" ).click(function( event ) {
      thermostat.up();
      updateTemperature();
    });

    $( "#down" ).click(function( event ) {
      thermostat.down();
      updateTemperature();
    });

    let updateTemperature = ( ) => {
      $('#temperature').text(thermostat.temperature);
      if(thermostat.energyUse() === "low-usage"){
        $('.dot').css("background-color", "green");
      }
      else if(thermostat.energyUse() === "medium-usage"){
        $('.dot').css("background-color", "black");
      }
      else{
        $('.dot').css("background-color", "red");
      }
    }

  });
