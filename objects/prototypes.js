"use strict";

let animal = {
  eats: true,
  walk: () => console.log("animal walk"),
};

let rabbit = {
  jumps: true,
};

console.log(rabbit.eats);

rabbit.__proto__ = animal;

console.log(rabbit.eats);

let longEar = {
  earLength: 10,
  __proto__: rabbit,
};

console.log(longEar.jumps);

//Proto is readonly
rabbit.walk = () => console.log("Rabbit, bounce-bounce!");

animal.walk();
rabbit.walk();
