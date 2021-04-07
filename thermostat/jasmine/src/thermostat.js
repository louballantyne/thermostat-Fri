class Thermostat{
  constructor() {
    this.temperature = 20;
    this.powerSaving = false;
  }

  up() {
    if (this.powerSaving === true && this.temperature == 25){
      var error = new Error ("Cannot exceed 25 degrees in Power Saving Mode");
      throw error;
    }
    else{
    this.temperature +=  1;
    }
  }

  down() {
    if (this.temperature === 10){
      var error = new Error ( "Temperature already at minimum");
      throw error;
    }
    else {
    this.temperature -= 1;
    }
  }

}
