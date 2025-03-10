// ES2020 introduced BigInt as a primitive data type

// Integer examples
let counter = 100;
console.log(counter); // 100

// Octal number examples
let num = 071; // Octal in legacy format
console.log(num); // 57 in decimal

num = 080; // Invalid octal literal in legacy format (treated as decimal)
console.log(num); // 80

num = 0o71; // Modern ES6 octal notation
console.log(num); // 57 in decimal

// Commented out invalid octal (8 is not a valid octal digit)
// num = 0o80;
console.log(num); // Still shows previous value (57)

// Hexadecimal example
let hex = 0x1a;
console.log(hex); // 26 in decimal

// Floating point examples
let price = 9.99;
let tax = 0.08; // Fixed typo: "tex" to "tax"
let discount = 0.05; // Fixed variable name for consistency

console.log(discount); // 0.05

// Scientific notation
let amount = 3.14e7; // 31,400,000
amount = 5e-7; // 0.0000005
amount = 0.0000005; // Same value in standard notation
console.log(amount); // 0.0000005

// Floating point precision issue example
let amount2 = 0.2 + 0.1;
console.log(amount2); // 0.30000000000000004 (not exactly 0.3 due to IEEE 754)

// BigInt example
let bigInt = 123131231313131n; // Fixed variable name for consistency
console.log(bigInt); // 123131231313131n