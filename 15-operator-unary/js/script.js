// JavaScript Unary Operators
let x = "10";
let y = +x;
let z = "11";
console.log(typeof y); // Converts string "10" to number
console.log(typeof z); // Still a string

let f = false, t = true;
console.log(+f); // Converts false to 0
console.log(+t); // Converts true to 1

// Object with custom conversion methods
let person = {
  name: "Pojok Code",
  toString: function () {
    return "25"; // Defines string representation
  },
  valueOf: function () {
    return "30"; // Defines numeric representation
  },
};
console.log(typeof +person); // Unary plus invokes valueOf()

let x1 = 10;
let y1 = -x1; // Negates the value of x1
console.log(y1);

let age = 25;
++age; // Pre-increment
console.log(age);

age = age + 1; // Standard increment
console.log(age);

let weight = 90;
--weight; // Pre-decrement
console.log(weight);

weight = ++weight + 5; // Pre-increment then addition
console.log(weight);

weight = --weight + 5; // Pre-decrement then addition
console.log(weight);

let newWeight = weight++ + 5; // Post-increment then addition
console.log(weight);
console.log(newWeight);

let newWeight1 = weight-- + 5; // Post-decrement then addition
console.log(weight);
console.log(newWeight1);