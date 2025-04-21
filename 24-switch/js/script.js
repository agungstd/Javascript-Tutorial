// Switch is a simpler way to handle nested if conditions
// Used for boolean evaluations
// switch (expression) {
//     case value1:
//         statement1;
//         break;
//     case value2:
//         statement2;
//         break;
//     case value3:
//         statement3;
//         break;
//     default:
//         statement;
// }

let day = 3;
let name;
switch (day) {
  case 1:
    name = "Sunday";
    break;
  case 2:
    name = "Monday";
    break;
  case 3:
    name = "Tuesday";
    break;
  case 4:
    name = "Wednesday";
    break;
  case 5:
    name = "Thursday";
    break;
  case 6:
    name = "Friday";
    break;
  case 7:
    name = "Saturday";
    break;
  default:
    name = "Invalid";
    break;
}
console.log(`Day name: ${name}`);

let year = 2016;
let month = 2;
let dayCount;
switch (month) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    dayCount = 31;
    break;
  case 4:
  case 6:
  case 9:
  case 11:
    dayCount = 30;
    break;
  case 2:
    if ((year % 4 === 0 && !(year % 100 === 0)) || year % 400 === 0) {
      dayCount = 29;
    } else {
      dayCount = 28;
    }
    break;
  default:
    dayCount = -1; // Assign proper default value instead of calculation
}
console.log(`Number of days: ${dayCount}`);

// Function to dynamically get a day name based on an index
function getDayName(index) {
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  return days[index - 1] ?? "Invalid";
}

console.log(`Dynamic day retrieval (index 3): ${getDayName(3)}`);
console.log(`Dynamic day retrieval (index 7): ${getDayName(7)}`);
console.log(`Dynamic day retrieval (index 10): ${getDayName(10)}`);