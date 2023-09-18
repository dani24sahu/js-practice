// ..... String Constructor .....

const a = new String("Hello world"); // a === "Hello world" is false
const b = String("Hello world"); // b === "Hello world" is true
a instanceof String; // is true
b instanceof String; // is false
console.log(typeof a); // "object"
console.log(typeof b); // "string"

// Using String() to stringify a symbol
const sym = Symbol("example");
String(sym); 
console.log(sym); // "Symbol(example)"