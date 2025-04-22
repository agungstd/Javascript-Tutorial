// TODO: do-while loop is a statement for executing a block until the condition is false
// NOTE: Unlike a while loop, a do-while loop is guaranteed to execute at least once

// do {
//    statement
// } while(expression);

let count = 0;
do {
  console.log(count);
  count++;
} while (count < 5);

// Example game
const MIN = 1;
const MAX = 10;
let secretNumber = Math.floor(Math.random() * (MAX - MIN + 1)) + MIN;
let guesses = 0;
let hint = "";
let number = 0;

do {
  let input = prompt(`Enter a value between ${MIN} and ${MAX}${hint}`);
  number = parseInt(input);
  guesses++;

  if (number > secretNumber) {
    hint = `, and it is smaller than ${number}`;
  } else if (number < secretNumber) {
    hint = `, and it is larger than ${number}`;
  } else {
    alert(`Congratulations! You guessed correctly after ${guesses} tries.`);
  }
} while (number !== secretNumber);

// Function to dynamically execute a do-while loop
function dynamicLoop(start, condition) {
  do {
    console.log(start);
    start++;
  } while (start < condition);
}

console.log("Dynamic do-while loop execution:");
dynamicLoop(5, 10);