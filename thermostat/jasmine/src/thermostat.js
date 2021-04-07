class Thermostat{
  constructor() {
    this.temperature = 20
  }

  up() {
    this.temperature +=  1
  }

  down() {
    if (this.temperature === 10){
      var error = new Error ( "Temperature already at minimum");
      throw error ;
    }
    else {
    this.temperature -= 1;
    }
  }

}
