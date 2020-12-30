let f = async function () {
  return 1;
};
// async makes a function return a promise
console.log(Object.getPrototypeOf(f()));

//We can do it explicitely
f = async function () {
  return Promise.resolve(1);
};
// async makes a function return a promise
console.log(Object.getPrototypeOf(f()));

//await suspends the execution until a promise completes
f = async function () {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("done!"), 1000);
  });

  let result = await promise;
  return result;
};

f().then((result) => console.log(result));

//await can't be called from top-level must be wrapped in a function
(async () => {
  let result = await f();
  console.log(result);
})();
