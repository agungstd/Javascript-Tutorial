// Modulus (%) - Remainder of division
// Basic modulus command: divided % divisor

let remain = 5 % -2;
console.log(`5 % -2 = ${remain}`); // -2 * -2 = 4 -> 5 - 4 = 1

remain = 5 % 2;
console.log(`5 % 2 = ${remain}`); // 2 * 2 = 4 -> 5 - 4 = 1

remain = -5 % 3;
console.log(`-5 % 3 = ${remain}`); // -1 * 3 = -3 -> -5 -(-3) = -2

remain = -5 % -3;
console.log(`-5 % -3 = ${remain}`); // 1 * -3 = -3 -> -5 -(-3) = -2

// Special cases with Infinity and zero
remain = Infinity % 2;
console.log(`Infinity % 2 = ${remain}`);

remain = 10 % 0;
console.log(`10 % 0 = ${remain}`);

remain = Infinity % Infinity;
console.log(`Infinity % Infinity = ${remain}`);

remain = 10 % Infinity;
console.log(`10 % Infinity = ${remain}`);

remain = 0 % 10;
console.log(`0 % 10 = ${remain}`);

remain = "10" % 3;
console.log(`'10' % 3 = ${remain}`);

let num = 12;
let isOdd = num % 2; // If num is an odd number, the remainder is 1
console.log(`Is ${num} odd? ${isOdd === 1 ? "Yes" : "No"}`);

// Function to check if a number is odd
function isOdd2(num) {
  return num % 2 === 1;
}

console.log(`Is 5 odd? ${isOdd2(5) ? "Yes" : "No"}`);

// Function to check if a number is divisible by another
function isDivisible(num, divisor) {
  return num % divisor === 0 ? `Yes, ${num} is divisible by ${divisor}` : `No, ${num} is not divisible by ${divisor}`;
}

console.log(isDivisible(10, 5));
console.log(isDivisible(10, 3));