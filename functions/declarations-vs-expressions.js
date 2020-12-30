let expression = function () {
  return "this is a function expression";
};

console.log(expression());

console.log(declaration());

function declaration() {
  return "declared functions can be called before being defined";
}

//functions expressions are created when the code reaches them

const age = 10;
let welcome =
  age < 18
    ? function () {
        return "hello!";
      }
    : function () {
        return "greetings!";
      };

console.log(welcome());
