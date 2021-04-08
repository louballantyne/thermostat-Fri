class Thermostat{
  constructor() {
    this.temperature = 20;
    this.powerSaving = true;
  }

  getTemperature () {
  return this.temperature;
  }

  setTemperature (temp) {
  return this.temperature = temp;
  }


  up() {
    if (this.powerSaving === true && this.temperature == 25){
      var error1 = new Error ("Cannot exceed 25 degrees in Power Saving Mode");
      throw error1;
    }
    else if (this.temperature === 32){
      var error2 = new Error ("Cannot exceed 32 degrees");
      throw error2;
    }
    else {
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

  changeMode() {
    this.powerSaving = !this.powerSaving
  }

  reset() {
    this.temperature = 20
  }

  energyUse() {
    if (this.temperature < 18) {
      return "low-usage";
    }
    else if (this.temperature <= 25){
      return "medium-usage";
    }
    else {
      return "high-usage";
    }
  }

}
