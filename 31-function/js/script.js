// NOTE: Functions simplify code that is used repeatedly.
// A function starts with the `function` keyword, followed by its name, parameters, and body.
// Syntax:
// function functionName(parameter) {
//   // function body
// }

// Functions should start with a verb, e.g., getName, setName, etc.

function helo(pesan) {
  console.log(pesan);
}
helo("Selamat Datang"); // Function call with an argument

// Difference between arguments and parameters:
// `pesan` above is the parameter (placeholder in the function declaration).
// `"Selamat Datang"` is the argument (actual value passed when the function is called).

let result = helo("Selamat Belajar"); // Calls the function
console.log(result); // Undefined because `helo` doesn't return any value

// Function returning an expression
function add(a, b) {
  return a + b; // Returns the sum of `a` and `b`
}
console.log("Jumlah :", add(10, 20)); // Outputs 30

// Function with conditional return
function compare(a, b) {
  if (a > b) {
    return -1; // a is greater
  } else if (a < b) {
    return 1; // a is smaller
  }
  return 0; // a is equal to b
}
console.log(compare(2, 2)); // Outputs 0

// Function with validation before execution
function say(pesan) {
  if (!pesan) return; // Exits if `pesan` is falsy
  console.log(pesan);
}
say("Hai"); // Outputs "Hai"

// Function using `arguments` to handle multiple inputs
function add() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i]; // Accumulate all arguments
  }
  return sum;
}
console.log(add(1, 2)); // Outputs 3
console.log(add(1, 2, 3)); // Outputs 6

// Hoisting example: Function declaration can be called before it's defined
show();
function show() {
  console.log("Ayo Belajar"); // Outputs "Ayo Belajar"
}