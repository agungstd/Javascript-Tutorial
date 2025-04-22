// TODO: for loop is an iteration statement with three parameters:
// 1. initializer
// 2. condition
// 3. iterator
// NOTE: Basic syntax:
// for (initializer; condition; iterator) {
//     statement;
// }

for (let i = 1; i < 5; i++) {
  console.log(i);
}

// Loop without initializer
let j = 1;
for (; j < 10; j += 2) {
  console.log(j);
}

// For loop without condition
for (let j = 1; ; j += 2) {
  console.log(j);
  if (j > 10) break;
}

// For loop without expression
j = 1;
for (;;) {
  if (j > 10) break;
  console.log(j);
  j += 2;
}

// For loop without body
let sum = 0;
for (let i = 0; i <= 9; i++, sum += i);
console.log(`Sum result: ${sum}`);

// Function to dynamically execute a for loop
function dynamicForLoop(start, condition, step) {
  for (let i = start; i < condition; i += step) {
    console.log(i);
  }
}

console.log("Dynamic for loop execution:");
dynamicForLoop(2, 15, 3);