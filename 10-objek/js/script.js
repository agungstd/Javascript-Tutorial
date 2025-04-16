// JavaScript Objects
let emptyObject = {};
console.log(emptyObject);

let personal = {
  firstName: "Pojok",
  lastName: "Code",
};

console.log(personal);
console.log(personal.firstName);
console.log(personal.lastName);

console.log(personal["firstName"]);
console.log(personal["lastName"]);

let address = {
  "house number": 1234,
  street: "Flamboyan No. 44",
  province: "DKI",
};

console.log(address["house number"]);

// Validate property access before use
if ("house number" in address) {
  console.log(address["house number"]);
} else {
  console.log("Property 'house number' not found");
}

personal.firstName = "Trial";
personal.age = 24;
console.log(personal);

delete personal.age;
console.log(personal);

// Check object properties with validation
console.log("firstName" in personal ? "Property exists" : "Property not found");
console.log("age" in personal ? "Property exists" : "Property not found");