"use strict";

function sayHi() {
  console.log(this?.name);
}

let john = { name: "john" };
let admin = { name: "admin" };

john.f = sayHi;
admin.f = sayHi;

john.f();
admin.f();

sayHi();
