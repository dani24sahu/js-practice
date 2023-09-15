// It's all Numbers in Javascript
let myInt = 10;
let myFloat = 10.5;
console.log("Int", myInt, typeof myInt);
console.log("Float", myFloat, typeof myFloat);

const lotsOfDecimal = 1.766584958675746364;
console.log(lotsOfDecimal); // 1.766584958675746364
const twoDecimalPlaces = lotsOfDecimal.toFixed(2); // toFixed used to round your number to a fixed number of decimal places
console.log(twoDecimalPlaces); // 1.77


// ......Converting to Number Datatypes
let myNumber = "10";
myNumber += 5
console.log(myNumber );  // 105 because myNumber is actually defined as a string

let myNumber2 = Number("10");
myNumber2 += 5
console.log(myNumber2 );  // 15 because myNumber is actually defined as a number


// ...... Arithmetic Operators ......
// +, -, *, /, %, **

console.log(10 + 7);    // Addition
console.log(9 * 8);     // Multiplication
console.log(10 - 5);    // Subtraction
console.log(10 / 2);    // Division
console.log(60 % 3);   // Modulo  // 0 because 60 is completely divisible by 3
console.log(5 ** 2);    // Exponentiation  // 25 because 5^2 = 25

const num1 = 10;
const num2 = 50;
console.log(9 * num1);  // 90
console.log(num1 ** 3); // 1000
console.log(num2 / num1); // 5

console.log(5 + 10 * 3);
console.log((num2 % 9) * num1);
const res = num2 + num1 / 8 + 2;    // 50 + 1.25 + 2 = 53.25
console.log(res);

const res2 = (num2 + num1) / (8 + 2); // 60 / 10 = 6 Overriding precedence using parenthesis
console.log(res2); // 6



// ...... Increment and Decrement Operators ......
// ++, --

let myNum = 10;
let myNum2 = 20;

myNum++; // will return 10 and then increment myNum to 11
++myNum2; // will increment myNum2 to 21 and then return 21
console.log(myNum, myNum2); // 11 21

myNum--; // will return 11 and then decrement myNum to 10
--myNum2; // will decrement myNum2 to 20 and then return 20
console.log(myNum, myNum2); // 10 20

let x= 5;
let y = x++ + ++x; // 5 + 7 = 12
console.log(y);  // it is equivalent to y = (x++) + (++x), which means get the current value of x (5), add one to it (6), get the new value of x (6), add one to it (7), and add them together (12).


// ...... Assignment Operators ......
// +=, -=, *=, /=, %=

// Addition Assignment
let a = 10;
a += 5; // a = a + 5
console.log('Addition Assignment',a); // 15

// Subtraction Assignment
let b = 10;
b -= 5; // b = b - 5
console.log('Subtraction Assignment',b); // 5

// Multiplication Assignment
let c = 10;
c *= 5; // c = c * 5
console.log('Multiplication Assignment',c); // 50

// Division Assignment
let d = 10;
d /= 5; // d = d / 5
console.log('Division Assignment',d); // 2

// Modulo Assignment
let e = 10;
e %= 5; // e = e % 5
console.log('Modulo Assignment',e); // 0


// ...... Comparison Operators ......
// ==, ===, !=, !==, >, <, >=, <=

console.log(10 == "10"); // true // Loose Equality Operator doesn't check the type of the operands
console.log(10 != "10"); // false // Loose Not Equality Operator doesn't check the type of the operands

// Strict Equality Operator
console.log(10 === 10); // true

// Strict Inequality Operator
console.log(10 !== "10"); // true

// Greater Than Operator
console.log(10 > 5); // true

// Less Than Operator
console.log(10 < 5); // false

// Greater Than or Equal To Operator
console.log(10 >= 10); // true

// Less Than or Equal To Operator
console.log(10 <= 10); // true