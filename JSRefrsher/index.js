// let = the new var. can change
// const = not reassignable
// dont use var anymore
let myName = "charlie";
myName = "Max";

// const yourName = "nick";
// yourName = "jack"; // wont work

// Arrow Functions
function PrintMyName(name) {
  console.log(name);
  return;
}
const myFunc = (name) => {
  console.log(name);
  return;
};
// no issues with the this keyword.
myFunc("charlie");
PrintMyName("Charlie");

// Exports
// DEFAULT EXPORT export default myFunc
// NAMED EXPORT export const test => import { test } from '../

// Classes
// class Human {
//   gender = "male";

//   printGender = () => {
//     console.log(gender);
//   };
// }

// class Person extends Human {
//   name = "max";

//   printMyName = () => {
//     console.log(name);
//   };
// }

// const person = new Person();
// person.printMyName();
// person.printGender();
//classes are in es7 syntax

// Spread and Rest operators
// spread is used to split up array elemtns or obj props
const arr = [1, 2, 3, 4];
const newArr = [...arr, 5, 6, 7];
console.log(newArr);

// rest = used to merge  alist of func args into an array
function sortArgs(...args) {
  return args.sort((a, b) => a - b);
}
console.log(sortArgs(1, 4, 32, 6, 4));

// Destructuring
const myObj = {
  name: "Charlie",
};
const { name } = myObj;
console.log(name);
