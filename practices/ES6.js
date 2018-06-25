// //spread
// const numbers = [1, 2, 3];

// const newNumbers = [...numbers, 4];

// console.log(newNumbers);

// const person = {
//   name: 'Dav'
// };

// const newPerson ={
//   ...person,
//   age: 21
// }
// console.log(newPerson);

// //rest
// //pasa los elementos que le pasamos como un array
// const filter = (...args) => args.filter(el => el === 1);

// console.log(filter(1, 2, 3, 1));

//Destructuring
//arrays
const numbers = [1, 2, 3];

[num1, ,num2] = numbers;
console.log(num1, num2);

//Reference and Primitive Types / Refresher

const number = 1;
const num2 = number;

console.log(num2);

num2 = 3;

console.log(number);

const person = {
  name: 'david'
};

const secondPerson = {
  ...person,
  age: '21'
}
//se copia el pointer

person.name = 'oscar';
//igual se cambia en secondPerson
console.log(secondPerson);