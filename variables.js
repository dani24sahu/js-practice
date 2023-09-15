// Without variables
console.log("Area without variables", 10 * 5);

// With variables
var length = 10;
var width = 5;
var area = length * width;
console.log("Area with variables", area);

var myName = "Sachin";
var myName = "Sachin Tendulkar";
console.log("My name is", myName); // No Error: Redeclaration of myName with var keyword

let myAge = 30;
// let myAge = 40;                              // Error: Redeclaration of myAge with let keyword

// Updating variables
myName = "Sachin Ramesh Tendulkar";
console.log("My name is", myName); // No Error: Updating myName with var keyword

myAge = 40;
console.log("My age is", myAge); // No Error: Updating myAge with let keyword

// ........... Variable Types ...........
// Number: (No need to declare the type of variable)
let myNumber = 10;
let myDecimal = 10.5;

// String: (No need to declare the type of variable)
let myString = "Hello World";
let myString2 = "+91 1234567890";

// Boolean: (No need to declare the type of variable)
let myBoolean = true;
let myBoolean2 = false;
console.log("Boolean", myBoolean, myBoolean2);

let check = 10 > 5 || 9 > 10; // true || false = true
console.log("Check", check);

// Array: (No need to declare the type of variable)
let myArray = [1, 2, 3, 4, 5];
let myArray2 = ["Sachin", "Ramesh", "Tendulkar"];
console.log("Array", myArray, myArray2);
console.log(myArray[0], myArray2[0]); // Accessing array elements by index

// Object: (No need to declare the type of variable)
let myObject = { obj1: "Sachin", obj2: "Tendulkar", obj3: 10, obj4: true };
console.log("Object", myObject);
console.log(myObject.obj1, myObject.obj2); // Accessing object elements by key
console.log(myObject["obj3"], myObject["obj4"]); // Accessing object elements by key

// Dynamic Typing
let myVariable = 10;
let myVariable2 = "10";
typeof myVariable; // number
typeof myVariable2; // string

// ....... Constants .......
// Constants are immutable

const PI = 3.14;
// PI = 3.15;                                    // TypeError: Assignment to constant variable
console.log("PI", PI + 1);
console.log("PI", PI);

// Constants must be initialized during declaration
// const num;                                      // Error: Missing initializer in const declaration

const objMan = { name: "Sachin", age: 40, retired: true };
objMan.age = 50; // No Error: Updating object properties
console.log("objMan", objMan);
