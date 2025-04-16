// Mathematical Operations: Addition (+), Subtraction (-), Division (/), Multiplication (*)
let sum = 10 + 20;
console.log(`Addition result: ${sum}`);

let price = 9.99, discount = 1.5;
console.log(`Price after discount: ${price - discount}`);

let x = "10", y = "20";
console.log(`String concatenation x + y: ${x + y}`);

let result = 10 + "20";
console.log(`Number + String concatenation: ${result}`);

console.log(`Subtraction result: ${30 - 10}`);
console.log(`Multiplication result: ${30 * 10}`);
console.log(`Multiplication with string number: ${"30" * 10}`);
console.log(`Division with string number: ${"30" / 10}`);
console.log(`Division result: ${30 / 10}`);

let energy = {
  valueOf() {
    return 100;
  },
};

let energyNow = energy - 10;
console.log(`Energy + 100: ${energy + 100}`);
console.log(`Energy * 10: ${energy * 10}`);
console.log(`Energy / 5: ${energy / 5}`);

let energy2 = {
  toString() {
    return "100"; // Adjusted behavior for explicit conversion
  },
};

energyNow = energy2 - 10;
console.log(`Energy2 + 100: ${energy2 + 100}`);
console.log(`Energy2 * 10: ${energy2 * 10}`);
console.log(`Energy2 / 5: ${energy2 / 5}`);

// Additional feature: Check if a number is even or odd
function isEvenOrOdd(num) {
  return num % 2 === 0 ? "Even" : "Odd";
}

console.log(`Is 30 even or odd? ${isEvenOrOdd(30)}`);
console.log(`Is 99 even or odd? ${isEvenOrOdd(99)}`);