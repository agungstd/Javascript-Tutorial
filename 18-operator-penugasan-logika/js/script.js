// Logical assignment operators
// ||= OR assignment
// &&= AND assignment
// ??= Nullish coalescing assignment
// x ||= y  =>  x || (x = y)
// x &&= y  =>  x && (x = y)
// x ??= y  =>  x ?? (x = y)

let title;
console.log(Boolean(title)); // false
title ||= "Untitled"; // Assigns "Untitled" if title is falsy
console.log(title);

let text;
console.log(text || (text = "Untitled")); // Assigns value if falsy
console.log(text || "Untitled"); // Displays fallback value

let heading = "Tutorial Javascript";
console.log(Boolean(heading)); // true
heading ||= "Untitled"; // Won't change because heading is truthy
console.log(heading);

let person = {
  firstName: "Pojok",
  lastName: "Code",
};

person.lastName &&= "Samsul"; // Changes lastName only if it’s truthy
console.log(person);

let data;
data &&= "Empty"; // Won't change because data is falsy
console.log(data);

data = "x";
console.log(data && (data = "Empty")); // Updates only if truthy
console.log(data && "Empty"); // Displays "Empty" if data is truthy

let user = {
  userName: "samson",
  // name: "x",
};

user.name ??= "Pojok"; // Assigns "Pojok" only if name is undefined or null
console.log(user);

// Function to test logical assignment dynamically
function applyLogicalAssignment(variable, value, operator) {
  switch (operator) {
    case "||=":
      variable ||= value;
      break;
    case "&&=":
      variable &&= value;
      break;
    case "??=":
      variable ??= value;
      break;
    default:
      return "Invalid operator";
  }
  return variable;
}

let dynamicValue;
console.log(`Result of ||= with "Example": ${applyLogicalAssignment(dynamicValue, "Example", "||=")}`);
console.log(`Result of ??= with "Fallback": ${applyLogicalAssignment(dynamicValue, "Fallback", "??=")}`);