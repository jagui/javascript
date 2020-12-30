let promise = Promise.resolve();
promise.then(() => console.log("promise done"));
//this one runs 1st
console.log("code finished");

//Right order
Promise.resolve()
  .then(() => console.log("promise done"))
  .then(() => console.log("code finished"));
