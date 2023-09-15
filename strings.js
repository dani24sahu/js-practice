// Declaring a string
let myString1 = "Hello";
let myString2 = "Hello";
let myString3 = `Hello`;

console.log(myString1, myString2, myString3);

// let myString4 = "Hello';  // Error: Uncaught SyntaxError: Invalid or unexpected token
// let myString5 = 'Hello";  // Error: Uncaught SyntaxError: Invalid or unexpected token

// .... Template Literals ....
// Template literals are string literals that allow embedded expressions.
// You can use multi-line strings and string interpolation features with them.
// They were called "template strings" in prior editions of the ES2015 specification.
const one = "Hello, ";
const two = "how are you?";
const joined = `${one}${two}`; // Concatenation using template literals
console.log(joined); // "Hello, how are you?"

const greeting = "Hello";
const myName = "Chris";
console.log(greeting + ", " + myName); // "Hello, Chris"  // Concatenation using + operator

// Inclding expressions in string
const song = "We will rock you";
const score = 9;
const highestScore = 10;
const output = `I like the song ${song}. I gave it a score of ${
  (score / highestScore) * 100
}%.`;
console.log(output); // "I like the song Fight the Youth. I gave it a score of 90%."

// Multi-line strings
// using backticks
const newline1 = `One,
Two,
Three`;
console.log(newline1);

// using \n
const newline2 = "One,\nTwo,\nThree";
console.log(newline2);

// Including quotes in strings
// using backticks
const quote1 = `I'm a string`;
console.log(quote1);

// using \"
const quote2 = 'She said "I am hungry!"';
console.log(quote2);

// using escape character
const bigmouth = 'I\'ve got no right to take my place…';
console.log(bigmouth);

