class Person {
  constructor(name, lastname) {
    this.name = name;
    this.lastname = lastname;
  }

  greet() {
    return `Hello! I am ${this.name} ${this.lastname} `;
  }
}

const user = new Person("Luis", "Gerez");

console.log(user);
console.log(user.greet());

console.log(typeof Person);
