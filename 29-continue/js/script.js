// NOTE: The continue statement is used to skip the current iteration and continue with the next
// TODO: continue [label]

// Example with for loop
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    continue; // Skips even numbers
  }
  console.log(i); // Prints odd numbers
}

// Example with while loop
let i = 0;
while (i < 10) {
  i++;
  if (i % 2 === 0) {
    continue; // Skips even numbers
  }
  console.log(i); // Prints odd numbers
}

// Example with labeled continue
outer: for (let i = 1; i < 3; i++) {
  for (let j = 1; j < 3; j++) {
    if (i + j === 3) continue outer; // Skips to the next iteration of the outer loop
    console.log(i, j); // Prints pairs where i + j != 3
  }
}

// Function to dynamically execute loops with continue statement
function dynamicContinueLoop(limit, skipCondition) {
  for (let index = 0; index < limit; index++) {
    if (skipCondition(index)) {
      continue;
    }
    console.log(index);
  }
}

console.log("Dynamic execution with continue:");
dynamicContinueLoop(10, (num) => num % 2 === 0); // Skips even numbers dynamically