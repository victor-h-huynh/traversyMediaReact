// ================================================================================== //

// ES6 REFRESHER August 22 2019

// ================================================================================== //

// CONST AND LET
// let name = 'John';
// let test;

// name = 'Jack';

// const person = {
//   name: 'John',
//   age: 33
// };

// person.name = 'Jack';

// const nums = [1,2,3,4];
// nums.push(5);

// console.log(nums);

// ARROW FUNCTIONS

// function sayHello() {
//   console.log('Hello');
// }

// const sayHello = (name) => {
//   console.log(`Hello ${name}`);
// };

// const fruits = ['Apples', 'Oranges', 'Grapes'];

// sayHello('Victor');

// FOREACH
// fruits.forEach((fruit, index) => console.log(fruit))

// MAP

// const singleFruit = fruits.map((fruit) => fruit.slice(0, -1).toUpperCase());

// console.log(singleFruit);

// FILTER
// const people = [
//   {id: 1, name: 'Karen'},
//   {id: 2, name: 'Bob'},
//   {id: 3, name: 'Sharon'}
// ];

// const people2 = people.filter(person => person.id !== 2);
// console.log(people2);

// SPREAD

// const arr = ["apple", "orange", "pear"]
// const arr2 = [...arr, "grape"]
// const arr3 = [...arr.filter(fruit => fruit != "pear")]

// console.log(arr3);

// const dog1 = {
//   name: "Snoopy",
//   color: "white"
// };

// const dog2 = {
//   ...dog1,
//   legs: 4
// };

// console.log(dog2);

// DESTRUCTURING

// const animal = {
//   breed: 'dog',
//   traits: {
//     color: ['yellow', 'red'],
//     legs: 4
//   },
//   tail: true
// }

// const { breed } = animal;
// const { color } = animal.traits
// const { tail } = animal

// console.log(breed)
// console.log(color[1])
// console.log(tail)

// CLASSES

// class Animal {
//   constructor(name, species, cry) {
//     this.name = name;
//     this.species = species;
//     this.cry = cry;
//   }

//   greet() {
//     return `I am a ${this.species} ${this.cry}`
//   }
  

// }

// const animal1 = new Animal('Snoopy', 'Dog', 'Woof');
// const animal2 = new Animal('Santa Paws', 'Cat', 'Meow');

// console.log(animal1.greet());
// console.log(animal2.greet());

// SUBCLASSES

// class Customer extends Animal {
//   constructor(name, species, cry, balance) {
//     super(name, species, cry)
//     this.balance = balance
//   }

//   info() {
//     return `${this.name} owes $${this.balance}.00 :c ${this.cry}`
//   }
// }


// const customer1 = new Customer('Snoopy', 'Dog', 'Woof', 100)
// const customer2 = new Customer('Snakey', 'Snake', 'Hiss', 420)
// console.log(customer1.info());
// console.log(customer2.info());

// MODULES

// file 1 (file1.js)

// export const name = 'Jeff';
// export const nums = [1,2,3];
// export default Person;

// // file 2 (file2.js)

// import { name, nums } from './file1';
// import Person from '.file1';