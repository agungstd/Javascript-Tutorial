// Number separator (introduced in ES2021 for better readability)
let buget = 100000000000;
console.log(`Without separator: ${buget}`);

buget = 100_000_000_000;
console.log(`With separator: ${buget}`);

let amount = 120_201_123.05;
console.log(`Formatted amount: ${amount}`);

let expence = 123_450;
console.log(`Expense: ${expence}`);

let fee = 12_345_00; // Fixed separator usage
console.log(`Fee value: ${fee}`);

let salary = 0.000_001;
console.log(`Salary: ${salary}`);

let max = 9_121_121_242_233_232_232_443n;
console.log(`BigInt max value: ${max}`);

let nibbiner = 0b1011_0101;
console.log(`Binary format: ${nibbiner}`);

let val = 0o1234_5670; // Valid octal format
console.log(`Octal format: ${val}`);

let message = 0xd0_e0_f0;
console.log(`Hexadecimal format: ${message}`);

let c = 0o51;
console.log(`Octal value: ${c}`);

let e = parseInt("111", 2); // Valid binary string parsing
console.log(`Parsed binary string: ${e}`);

let f = 0b111; // Valid binary representation
console.log(`Binary value: ${f}`);

// Additional code without removing existing logic
let hexValue = 0x1a_2b_3c; // Hexadecimal with separator example
console.log(`Hexadecimal with separator: ${hexValue}`);

let binaryValue = 0b1111_0000; // Binary with separator example
console.log(`Binary with separator: ${binaryValue}`);

let octalValue = 0o777_666; // Octal with separator example
console.log(`Octal with separator: ${octalValue}`);