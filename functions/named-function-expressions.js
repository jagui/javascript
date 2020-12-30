//this is a function expression
let sayHi = function (who) {
  console.log(`Hi, ${who}`);
};

// we're adding a name now, but it's still a function expression
sayHi = function fun(who) {
  console.log(`Hi, ${who}`);
};

// the name fun allows the function to refer to itself and it's not visible outside
sayHi = function fun(who) {
  if (who) console.log(`Hi, ${who}`);
  else fun("guest");
};

sayHi();
