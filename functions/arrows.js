const age = 10;
let welcome = age < 18 ? () => "hello!" : () => "greetings!";
console.log(welcome());
