// ES2020 introduced BigInt as a primitive data type

// Integer examples
let counter = 100;
console.log(`Integer example: ${counter}`); // 100

// Octal number examples
let num = 71; // Octal in legacy format
console.log(`Legacy octal notation (should be decimal): ${num}`); // 57 in decimal

num = 80; // Invalid octal literal in legacy format (treated as decimal)
console.log(`Invalid octal treated as decimal: ${num}`); // 80

num = 0o71; // Modern ES6 octal notation
console.log(`Modern octal notation: ${num}`); // 57 in decimal

// Commented out invalid octal (8 is not a valid octal digit)
// num = 0o80;
console.log(`Previous valid octal value retained: ${num}`); // 57

// Hexadecimal example
let hex = 0x1a;
console.log(`Hexadecimal representation: ${hex}`); // 26 in decimal

// Floating point examples
let price = 9.99;
let tax = 0.08; // Fixed typo: "tex" to "tax"
let discount = 0.05; // Fixed variable name for consistency

console.log(`Discount value: ${discount}`); // 0.05

// Scientific notation
let amount = 3.14e7; // 31,400,000
console.log(`Scientific notation (large number): ${amount}`);

amount = 5e-7; // 0.0000005
console.log(`Scientific notation (small number): ${amount}`);

amount = 0.0000005; // Same value in standard notation
console.log(`Same small value without notation: ${amount}`);

// Floating point precision issue example
let amount2 = 0.2 + 0.1;
console.log(`Floating point precision issue example: ${amount2}`); // 0.30000000000000004

// BigInt example
let bigInt = 123131231313131n; // Fixed variable name for consistency
console.log(`BigInt example: ${bigInt}`); // 123131231313131n