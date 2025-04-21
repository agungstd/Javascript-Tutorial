// if ... else branching based on boolean conditions
// if(condition) execute statement
// if(condition) { 
// -- statement 
// } else { 
// -- statement 
// }

let age = 18;
if (age === 18) console.log("You can log in");
else console.log("You are not eligible");

if (age >= 19) {
  console.log("You can log in");
} else {
  console.log("You are not eligible");
}

age = 17;
let country = "ID";
if (age === 16 && country === "ID") {
  console.log("You can drive");
} else {
  console.log("You are denied");
}

// if-else ladder for multiple conditions
let no = 3;
let day;
if (no === 0) {
  day = "Sunday";
} else if (no === 1) {
  day = "Monday";
} else if (no === 2) {
  day = "Tuesday";
} else if (no === 3) {
  day = "Wednesday";
} else if (no === 4) {
  day = "Thursday";
} else if (no === 5) {
  day = "Friday";
} else {
  day = "Saturday";
}

console.log(`The day is: ${day}`);

// Function to get the day based on an index dynamically
function getDay(index) {
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  return days[index] ?? "Invalid day";
}

console.log(`Dynamic day retrieval (index 3): ${getDay(3)}`);
console.log(`Dynamic day retrieval (index 6): ${getDay(6)}`);
console.log(`Dynamic day retrieval (index 10): ${getDay(10)}`);