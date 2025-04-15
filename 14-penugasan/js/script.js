// Assignment operators
let counter = 0;
counter = counter + 1;
console.log(counter); // Incrementing counter by 1

let coun = 0;
coun += 1;
console.log(coun); // Incrementing using shorthand operator

let a = 10, b = 20, c = 30;
a = b = c;
console.log(a); // Assigning same value to a, b, and c

b = c;
a = b;
console.log(a); // Assigning b to a

// Function to demonstrate assignment operations
function updateValues(x, y) {
  x += y;
  return x;
}

let value1 = 5, value2 = 15;
console.log(`Updated value: ${updateValues(value1, value2)}`);