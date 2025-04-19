// Comparison Operators
// < less than
// > greater than
// <= less than or equal to
// >= greater than or equal to
// != not equal to
// === strict equality
// !== strict inequality

let r1 = 20 > 10;
let r2 = 20 < 10;
let r3 = 10 == 10;
console.log(r1, r2, r3);

let name1 = "alice",
  name2 = "bob";
console.log(name1 < name2); // Lexicographical comparison
console.log(name1 == "alice");

let f1 = "apple",
  f2 = "Banana";
console.log(f1 < f2); // Case-sensitive comparison
console.log(f1.toLowerCase() < f2.toLowerCase()); // Case-insensitive comparison

console.log(10 < "20"); // Type coercion comparison
console.log(10 == "10"); // Loose equality comparison

let apple = {
  valueOf: function () {
    return 10;
  },
};

let orange = {
  toString: function () {
    return "20";
  },
};

console.log(apple > 10);
console.log(orange == 20);

console.log(true > 0);
console.log(false < 1);
console.log(true > false);
console.log(false > true);
console.log(true >= false);
console.log(true <= false);
console.log(false <= false);

console.log(null == undefined);
console.log(null == 1);
console.log(NaN == 1);
console.log(NaN == NaN);
console.log(NaN != NaN);
console.log(NaN != 1);

console.log("10" == 10); // Loose equality comparison
console.log("10" === 10); // Strict equality comparison
console.log("10" !== 10);
console.log("10" != 10);
console.log(10 !== 10);
console.log("10" === "10");

// Function to dynamically validate comparisons
function compareValues(a, b, operator) {
  switch (operator) {
    case "<":
      return a < b;
    case ">":
      return a > b;
    case "<=":
      return a <= b;
    case ">=":
      return a >= b;
    case "==":
      return a == b;
    case "===":
      return a === b;
    case "!=":
      return a != b;
    case "!==":
      return a !== b;
    default:
      return "Invalid operator";
  }
}

console.log(`Is 15 > 10? ${compareValues(15, 10, ">")}`);
console.log(`Is "apple" < "banana"? ${compareValues("apple", "banana", "<")}`);
console.log(`Is 100 === "100"? ${compareValues(100, "100", "===")}`);