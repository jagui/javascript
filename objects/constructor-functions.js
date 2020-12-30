function User(name) {
  this.name = name;
  this.sayHi = () => `hi I'm ${this.name}`;
}

let user = new User("john");
console.log(user.name);
user.name = "susan";
console.log(user.sayHi());
