  $( document ).ready(function() {
   var thermostat = new Thermostat;
   console.log(thermostat);

      $.get("https://api.openweathermap.org/data/2.5/weather?q=London&APPID=7834542aac1b242f5428237df8c9e5c2", function(data){
          console.log(data)
          $('#weather-temperature').text(data.main.temp)
          console.log(data.main.temp)
          $('#weather').text(data.weather[0].main)
          console.log(data.weather[0].main)
          $('#weather-desc').text(data.weather[0].description)
          console.log(data.weather[0].description)
           });

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
