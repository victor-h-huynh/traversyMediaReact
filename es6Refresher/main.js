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

const sayHello = (name) => {
  console.log(`Hello ${name}`);
};

const fruits = ['Apples', 'Oranges', 'Grapes'];

// sayHello('Victor');

// FOREACH
// fruits.forEach((fruit, index) => console.log(fruit))

// MAP

const singleFruit = fruits.map((fruit) => fruit.slice(0, -1).toUpperCase());

// console.log(singleFruit);

// FILTER
const people = [
  {id: 1, name: 'Karen'},
  {id: 2, name: 'Bob'},
  {id: 3, name: 'Sharon'}
];

const people2 = people.filter(person => person.id !== 2);
console.log(people2);

// SPREAD

// DESTRUCTURING

// CLASSES

// SUBCLASSES

// MODULES