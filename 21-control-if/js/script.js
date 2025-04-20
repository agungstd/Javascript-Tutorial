// IF statement executes the block when the condition is true
// if (condition) execute statement
// if(condition){ 
// -- statement 
// }

let age = 18;
if (age === 18) {
  console.log("Your age is 18");
  console.log("This runs");
}

age = 16;
let state = "ID";
if (age === 16) {
  if (state === "ID") {
    console.log("You are the candidate");
  }
}

if (state === "ID" && age === 16) {
  console.log("You are the candidate");
}

// Function to check eligibility
function checkEligibility(age, state) {
  if (state === "ID" && age >= 16) {
    return "Eligible candidate";
  }
  return "Not eligible";
}

console.log(checkEligibility(16, "ID"));
console.log(checkEligibility(15, "ID"));
console.log(checkEligibility(16, "US"));