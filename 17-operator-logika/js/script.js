// Logical Operators
// ! NOT
// || OR
// && AND

let available = false,
  required = true;

console.log(!available);
console.log(!required);

console.log(!undefined);
console.log(!null);
console.log(!20);
console.log(!0);
console.log(!NaN);
console.log(!{});
console.log(!"");
console.log(!"Ok");
console.log(!false);
console.log(!true);

let counter = 10;
console.log(!!counter); // true -> false -> true

console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

let b = true;
console.log(b && 1 / 0); // Since `b` is true, it evaluates to Infinity
b = false;
console.log(b && 1 / 0); // Since `b` is false, it short-circuits to false

console.log(true && true && true);
console.log(true && true && false);

console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);
console.log(true || false || false);
console.log(false || false || false);

// Function to apply logical operations dynamically
function applyLogicalOperation(value1, value2, operator) {
  switch (operator) {
    case "&&":
      return value1 && value2;
    case "||":
      return value1 || value2;
    case "!":
      return !value1;
    default:
      return "Invalid operator";
  }
}

console.log(`Applying AND (&&) on true and false: ${applyLogicalOperation(true, false, "&&")}`);
console.log(`Applying OR (||) on false and true: ${applyLogicalOperation(false, true, "||")}`);
console.log(`Applying NOT (!) on true: ${applyLogicalOperation(true, null, "!")}`);