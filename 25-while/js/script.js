// TODO: while loop is a statement for iteration
// It will keep running as long as the condition evaluates to true
// while(expression) { 
// -- statement 
// }

let count = 1;
while (count < 10) {
  console.log(count);
  count += 2;
}

// Function to execute a while loop dynamically
function executeWhileLoop(start, condition, step) {
  while (start < condition) {
    console.log(start);
    start += step;
  }
}

console.log("Dynamic while loop execution:");
executeWhileLoop(2, 15, 3);