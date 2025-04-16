// Boolean is a primitive data type
let completed = true;
let active = new Boolean(false);

active.primitiveValue = active.valueOf();
console.log(`Active primitive value: ${active.primitiveValue}`);

completed.name = "primitive";
console.log(`Completed name property: ${completed.name}`);
console.log(`Type of completed: ${typeof completed}`);
console.log(`Type of active: ${typeof active}`);

console.log(`Is completed an instance of Boolean? ${completed instanceof Boolean}`);
console.log(`Is active an instance of Boolean? ${active instanceof Boolean}`);

let falseObj = new Boolean(false);
console.log(`Boolean object: ${falseObj}`);
console.log(`Boolean object valueOf: ${falseObj.valueOf()}`);

// Implicit boolean conversion in conditionals
if (falseObj) {
  console.log("This condition is executed because Boolean objects are truthy.");
}

let false2 = true;
if (false2) {
  console.log("This is a primitive boolean condition.");
}

// Additional code without removing existing functionality
let isBooleanPrimitive = (value) => typeof value === "boolean"; // Function to check if a value is a boolean primitive
console.log(`Is completed a boolean primitive? ${isBooleanPrimitive(completed)}`); // true
console.log(`Is active a boolean primitive? ${isBooleanPrimitive(active)}`); // false

let booleanTest = new Boolean(true);
booleanTest.newProperty = "Hello World"; // Adding a new property to a Boolean object
console.log(`BooleanTest new property: ${booleanTest.newProperty}`);