class CoffeMachine {
  //private
  #waterlimit = 200;

  #fixWaterAmount(value) {
    if (value < 0) return 0;
    if (value > this.#waterlimit) return this.#waterlimit;
    return value;
  }

  constructor(power) {
    this._power = power;
    this._waterAmount = 0;
  }
  // Readonly
  get power() {
    return this._power;
  }

  // Protected
  set waterAmount(value) {
    this._waterAmount = this.#fixWaterAmount(value);
  }
  get waterAmount() {
    return this._waterAmount;
  }
}

let coffeeMachine = new CoffeMachine(100);
coffeeMachine.waterAmount = -10;
console.log(coffeeMachine.waterAmount);
coffeeMachine.waterAmount = 20;
console.log(coffeeMachine.waterAmount);
coffeeMachine.waterAmount = 300;
console.log(coffeeMachine.waterAmount);

// can't access privates from outside of the class
// coffeeMachine.#fixWaterAmount(123); // Error
// coffeeMachine.#waterLimit = 1000; // Error
