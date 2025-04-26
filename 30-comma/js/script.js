// NOTE: The comma operator evaluates expressions from left to right and returns the value of the last expression
// Example:

let result = (10, 10 + 20); // Evaluates 10, then 10 + 20, returning 30
console.log(result); // Output: 30

let x = 10;
let y = (x++, x + 1); // Evaluates x++, then x + 1
console.log(x, y); // Output: 11, 12

// Another example without the comma operator for clarity
x = 10;
x++; // Increment x by 1
y = x + 1; // Add 1 to the incremented x
console.log(x, y); // Output: 11, 12

// Using the comma operator to manage multiple variables in a loop
let board = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let s = "";
for (let i = 0, j = 1; i < board.length; i++, j++) { // i increments, j increments
  s += board[i] + " "; // Concatenate board values into a string
  if (j % 3 === 0) { // Every 3rd element
    console.log(s); // Print the string
    s = ""; // Reset string
  }
}