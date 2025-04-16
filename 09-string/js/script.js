// String is a primitive data type
let str = "Welcome";
let message = "Don't forget to subscribe";
console.log(`Message: ${message}`);

let name = `Pojok Code`;
console.log(`Template literal example: ${name}`);

let msg = `"I'm good". Sorry`;
console.log(`Quoted string example: ${msg}`);

let userName = "Pojok Code";
let greeting = `Hi, I'm ${userName}`;
console.log(`String interpolation example: ${greeting}`);

let formattedMessage = "This\nis\tan example of 'string\"";
console.log(`Escaped characters example: ${formattedMessage}`);

formattedMessage = "Hello, how are you?";
console.log(`String length: ${formattedMessage.length}`);
console.log(`First character: ${formattedMessage[0]}`);

let firstName = "Pojok";
let fullName = firstName + " Code";
console.log(`Concatenated string: ${fullName}`);

let className = "btn";
className += " btn-primary"; // Fixed typo
className += " null";
console.log(`Updated class name: ${className}`);

let status = false;
let statusString = status.toString();
let booleanValue = Boolean(statusString);
booleanValue = Boolean("false");
console.log(`Converted boolean value: ${booleanValue}`);

let upperCaseName = fullName.toUpperCase(); // Convert string to uppercase
console.log(`Uppercase string: ${upperCaseName}`);

let reversedMessage = message.split("").reverse().join(""); // Reverse string
console.log(`Reversed string: ${reversedMessage}`);

let containsKeyword = message.includes("Subscribe"); // Check if string contains a keyword
console.log(`Does the string contain 'Subscribe'? ${containsKeyword}`);

// Additional feature: Count occurrences of a specific character
let countOccurrences = (text, char) => text.split(char).length - 1;
console.log(`Occurrences of 'a' in message: ${countOccurrences(message, 'a')}`);