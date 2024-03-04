// EXAMPLE 1 - Get the difference between Two Numbers in JavaScript

function getDifference(a, b) {
  return Math.abs(a - b);
}

console.log(getDifference(10, 15)); // 👉️ 5
console.log(getDifference(15, 10)); // 👉️ 5
console.log(getDifference(-10, 10)); // 👉️ 20

// ------------------------------------------------------------------

// // EXAMPLE 2 - Get the Difference between Two Numbers using an `if` statement

// function getDifference(a, b) {
//   if (a > b) {
//     return a - b;
//   }

//   return b - a;
// }

// console.log(getDifference(10, 15)); // 👉️ 5
// console.log(getDifference(15, 10)); // 👉️ 5
// console.log(getDifference(-10, 10)); // 👉️ 20

// ------------------------------------------------------------------

// // EXAMPLE 3 - Get the difference between two numbers using a ternary operator

// const a = 10;
// const b = -20;

// const difference = a > b ? a - b : b - a;

// console.log(difference); // 👉️ 30

// ------------------------------------------------------------------

// // EXAMPLE 4 - Defining a reusable function

// function getDifference(a, b) {
//   return a > b ? a - b : b - a;
// }

// console.log(getDifference(10, 15)); // 👉️ 5
// console.log(getDifference(15, 10)); // 👉️ 5
// console.log(getDifference(-10, 10)); // 👉️ 20
