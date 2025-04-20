// ?? => Nullish coalescing operator
// If the first value is null or undefined, take the second value
// value1 ?? value2

const name = null ?? "Pojok Code";
console.log(name);

let name2 = null;
if (name2 === null || name2 === undefined) {
  name2 = "Pojok Code";
}
console.log(name2);

const age = undefined ?? 30;
console.log(age);

let count;
console.log(Boolean(count)); // false since count is undefined

let result = count || 1; // Uses OR fallback instead of nullish coalescing
console.log(result);

result = 1 ?? console.log("Hai"); // Doesn't execute console.log since 1 is not null or undefined
result = null ?? console.log("Hai"); // Executes console.log("Hai") since null triggers fallback

// Proper precedence handling for nullish coalescing
result = (null || undefined) ?? "Ok"; // Ensures precedence is handled correctly
console.log(result);

// Function to apply nullish coalescing dynamically
function applyNullishCoalescing(value1, value2) {
  return value1 ?? value2;
}

console.log(`Nullish coalescing with null and 'Fallback': ${applyNullishCoalescing(null, "Fallback")}`);
console.log(`Nullish coalescing with 0 and 'Fallback': ${applyNullishCoalescing(0, "Fallback")}`);
console.log(`Nullish coalescing with undefined and 'Default': ${applyNullishCoalescing(undefined, "Default")}`);