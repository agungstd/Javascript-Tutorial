// Ternary operator - Executes a block based on boolean evaluation in a simplified way

let age = 18;
let message;

if (age >= 16) {
  message = "You can drive";
} else {
  message = "You are not allowed to drive";
}
console.log(message);

// Using ternary operator for the same logic
message = age >= 16 ? "You can drive 2" : "You are not allowed to drive";
console.log(message);

// Another alternative
message = age >= 16 ? "You can drive 3" : "You are not allowed to drive";
console.log(message);

let authentication = true;
let url = authentication
  ? (alert("Your account will be connected to the admin"), "/admin")
  : (alert("You are not authorized"), "/404");
console.log(url);

let locked = 1;
let changed = locked !== 1 ? true : false;
console.log(changed);

// Simplified version
locked = 1;
changed = locked !== 1;
console.log(changed);

let speed = 90;
let speedMessage =
  speed >= 120 ? "Very Fast" : speed >= 80 ? "Fast" : "Slow";
console.log(speedMessage);

// Function to dynamically apply ternary conditions
function ternaryCheck(condition, trueResult, falseResult) {
  return condition ? trueResult : falseResult;
}

console.log(`Ternary check: ${ternaryCheck(age >= 16, "Eligible to drive", "Not eligible to drive")}`);
console.log(`Ternary check: ${ternaryCheck(speed >= 120, "Very Fast", "Not Very Fast")}`);