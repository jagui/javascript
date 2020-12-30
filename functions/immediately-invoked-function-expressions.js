// Legacy stuff used to emulate blocl-level visibility. Creates a function expression and invokes it immediately (IIFE)
// the parentheses are required to prevent the js engine to intepret it as a function declaration
(function () {
  var message = "hello";
  console.log(message);
})();

try {
  console.log(message);
} catch (error) {
  console.log("message is now out of scope");
}
