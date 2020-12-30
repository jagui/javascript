"use strict";

let promise = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve("done!");
  }, 1000);
});

promise.then(
  (result) => console.log(result),
  (error) => console.log(error.message)
);

promise = new Promise(function (resolve, reject) {
  setTimeout(() => {
    reject(new Error("error"));
  }, 1000);
});

promise.then(
  (result) => console.log(result),
  (error) => console.log(error.message)
);
