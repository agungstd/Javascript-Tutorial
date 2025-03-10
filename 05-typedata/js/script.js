// DATA TYPES IN JAVASCRIPT

// Number type and type conversion demonstrations
let counter = 120;
console.log(typeof counter); // number

counter = false;
console.log(typeof counter); // boolean

counter = "Welcome";
console.log(typeof counter); // string

// Undefined type examples
let counter2;
console.log(typeof counter2); // undefined
console.log(typeof undefinedVariable); // undefined

// Null type
let obj = null;
console.log(typeof obj); // object (this is a known JavaScript quirk)
console.log(null == undefined); // true

// Number type with decimals
let price = 12.5;
console.log(price);
price = 200.0;
console.log(price);

// Number limits and special values
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.MAX_VALUE + Number.MAX_VALUE); // Infinity
console.log(-Number.MAX_VALUE - Number.MAX_VALUE); // -Infinity

// NaN (Not a Number) examples
console.log("a" / 2); // NaN
console.log(NaN / 2); // NaN
console.log(NaN == NaN); // false (NaN is never equal to anything, including itself)

// String type and concatenation
let message = "Hai,";
message = message + " Bye";
console.log(message); // "Hai, Bye"

// String with escape characters
message = "Hai \"Saya 'Pojok' Code\"";
console.log(message);

// Boolean type
let completed = false;
console.log(typeof completed); // boolean

// Boolean conversion examples
console.log(Boolean("Hi")); // true (non-empty string)
console.log(Boolean("")); // false (empty string)
console.log(Boolean(20)); // true (non-zero number)
console.log(Boolean(0)); // false (zero)
console.log(Boolean(Infinity)); // true
console.log(Boolean({ foo: 100 })); // true (object)
console.log(Boolean(null)); // false

// Symbol type
let s1 = Symbol();
console.log(typeof s1); // symbol

// BigInt type
let page = 12313213131231312n;
console.log(typeof page); // bigint

// Object type examples
let emptyObj = {};
let person = {
  firstName: "Pojok",
  lastName: "Code"
};
console.log(person);

// Complex object with nested properties
let contact = {
  firstName: "John",
  lastName: "Doe",
  email: "john.doe@example.com",
  phone: "(408)-555-9999",
  address: {
    building: "4000",
    street: "North 1st street",
    city: "San Jose",
    state: "CA",
    country: "USA"
  }
};

// Accessing object properties
console.log(contact.firstName);
console.log(contact.lastName);
console.log(contact.age); // undefined (property doesn't exist)
console.log(contact["email"]); // Bracket notation
console.log(contact.address.street); // Accessing nested object property