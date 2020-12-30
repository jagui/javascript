class User {
  constructor(name) {
    this.name = name;
  }

  sayHi() {
    console.log(this.name);
  }
}

let user = new User("john");
user.sayHi();

// This does (mostly) the same:

function OtherUser(name) {
  this.name = name;
}

OtherUser.constructor = OtherUser;
OtherUser.prototype.sayHi = function () {
  console.log(this.name);
};
user = new OtherUser("john");
user.sayHi();

console.log(Object.getOwnPropertyNames(User.prototype));
