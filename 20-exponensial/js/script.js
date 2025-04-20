// Exponential operations
// Math.pow(base, exponent) - Traditional method
// ** - Modern exponentiation operator

let result = Math.pow(2, 2);
console.log(`Math.pow(2, 2): ${result}`);

result = Math.pow(2, 4);
console.log(`Math.pow(2, 4): ${result}`);

// Using exponentiation operator (**)
let hasil = 2 ** 2;
console.log(`2 ** 2: ${hasil}`);

hasil = 2 ** 4;
console.log(`2 ** 4: ${hasil}`);

let x = 2;
x **= 4; // Using exponentiation assignment
console.log(`Exponentiation assignment (x **= 4): ${x}`);
s
let out = (-2) ** 4; // Negative base exponentiation
console.log(`(-2) ** 4: ${out}`);

// Function to perform dynamic exponentiation
function calculateExponent(base, exponent) {
  return base ** exponent;
}

console.log(`Dynamic exponentiation (3 ** 3): ${calculateExponent(3, 3)}`);
console.log(`Dynamic exponentiation (5 ** 2): ${calculateExponent(5, 2)}`);

// Function to calculate square root using exponentiation
function calculateSquareRoot(value) {
  return value ** 0.5;
}

console.log(`Square root of 16: ${calculateSquareRoot(16)}`);
console.log(`Square root of 25: ${calculateSquareRoot(25)}`);