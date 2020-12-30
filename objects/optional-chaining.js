"use strict";

let User = function () {};

let user = new User();

try {
  console.log(user.address.street);
} catch (error) {
  console.log(
    "user has no address property, hence accessing to street throws an error"
  );
}
console.log(
  `chaining optionals we get undefined instead of an error ${user?.address?.street}`
);

console.log("conditional also short circuits further execution");
user = null;
user?.sayHi(); //no error

user = new User();
user.sayHi?.();
