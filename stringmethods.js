// "use strict";
// ..... String Constructor .....

// With new keyword
const a = new String("Hello world"); // a === "Hello world" is false
// Without new keyword
const b = String("Hello world"); // b === "Hello world" is true
a instanceof String; // is true
b instanceof String; // is false
console.log(typeof a); // "object"
console.log(typeof b); // "string"

// Using String() to stringify a symbol
const sym = Symbol("example");
String(sym);
console.log(sym); // "Symbol(example)"

// ..... Static Methods .....

// String.fromCharCode()
console.log(String.fromCodePoint(0x1f303)); // "🌃"
console.log(String.fromCharCode(65, 66, 67)); // returns "ABC"
console.log(String.fromCharCode(0x2014)); // returns "—"
console.log(String.fromCharCode(0x12014)); // also returns "—"; the digit 1 is truncated and ignored
console.log(String.fromCharCode(8212)); // also returns "—"; 8212 is the decimal form of 0x2014
console.log(String.fromCharCode(0xd83c, 0xdf03)); // Code Point U+1F303 "Night with
console.log(String.fromCharCode(55356, 57091)); // Stars" === "\uD83C\uDF03"
console.log(String.fromCharCode(0xd834, 0xdf06, 0x61, 0xd834, 0xdf07)); // "\uD834\uDF06a\uD834\uDF07"

// String.fromCodePoint()
console.log(String.fromCodePoint(42)); // "*"
console.log(String.fromCodePoint(65, 90)); // "AZ"
console.log(String.fromCodePoint(0x404)); // "\u0404" === "Є"
console.log(String.fromCodePoint(0x2f804)); // "\uD87E\uDC04" === "你"
console.log(String.fromCodePoint(194564)); // "\uD87E\uDC04" === "你"
console.log(String.fromCodePoint(0x1d306, 0x61, 0x1d307)); // "\uD834\uDF06a\uD834\uDF07" === "𝌆a𝌇"

// String.raw()
// The static String.raw() method is a tag function of template literals.
const filePath = String.raw`C:\Development\profile\aboutme.html`;
console.log(`The file was downloaded at: ${filePath}`); // "C:\Development\profile\aboutme.html"
console.log(String.raw`C:\Development\profile\aboutme.html`); // "C:\Development\profile\aboutme.html"
console.log(`C:\Development\profile\aboutme.html`); // C:Developmentprofileaboutme.html

console.log(String.raw`Hi\n${2 + 3}!`); // 'Hi\n5!', the character after 'Hi' is not a newline character, '\' and 'n' are two characters.

console.log(String.raw`Hi\u000A!`); // 'Hi\u000A!', same here, this time we will get the \, u, 0, 0, 0, A, 6 characters. All kinds of escape characters will be ineffective and backslashes will be present in the output string. You can confirm this by checking the .length property of the string.

const name = "Bob";
console.log(String.raw`Hi\n${name}!`); // 'Hi\nBob!', substitutions are processed.

console.log(String.raw`Hi \${name}!`); // 'Hi \${name}!', the dollar sign is escaped; there's no interpolation.

// ..... Instance Properties .....

// String.prototype.constructor
// The constructor function that created the instance object
const o1 = {};
console.log("Object: ", o1.constructor === Object); // true

const o2 = new Object();
console.log("Object: ", o2.constructor === Object); // true

const a1 = [];
console.log("Array: ", a1.constructor === Array); // true

const a2 = new Array();
console.log("Array: ", a2.constructor === Array); // true

const n = 3;
console.log("Number: ", n.constructor === Number); // true

const o = new TypeError(); // Inheritance: TypeError -> Error -> Object
const proto = Object.getPrototypeOf;
console.log("TypeError: ", proto(o).constructor === TypeError); // true
console.log("Error: ", proto(proto(o)).constructor === Error); // true
console.log("Object: ", proto(proto(proto(o))).constructor === Object); // true

// Displaying the constructor of an object
function Tree(name) {
  this.name = name;
}

const theTree = new Tree("Redwood");
console.log(`theTree.constructor is ${theTree.constructor}`); // theTree.constructor is function Tree(name) { this.name = name; }

// length
// basic usage
const x = "Browser";
const empty = "";
console.log(`${x} is ${x.length} code units long`); // Browser is 7 code units long
console.log(`The empty string has a length of ${empty.length}`); // The empty string has a length of 0

// strings with length not equal to the number of characters
const emoji = "😄";
console.log("Emoji lenght; ", emoji.length); // 2
console.log([...emoji].length); // 1
const adlam = "𞤲𞥋𞤣𞤫";
console.log("Expression length: ", adlam.length); // 8
console.log([...adlam].length); // 4
const formula = "∀𝑥∈ℝ,𝑥²≥0";
console.log("Math symbol length: ", formula.length); // 11
console.log([...formula].length); // 9

// assigning to length

const myString = "bluebells";

myString.length = 4;
console.log(myString); // "bluebells" // gives error in strict mode
console.log(myString.length); // 9 // gives error in strict mode

// ..... Instance Methods .....

// String.prototype.at().......
// The at() method takes an integer value and returns a new string consisting of the single UTF-16 code unit located at the specified offset into the string.
// return the last character of a string

// A function which returns the last character of a given string
function returnLast(arr) {
  return arr.at(-1); // returns the last character of the string
}

let invoiceRef = "myinvoice01";
console.log(returnLast(invoiceRef)); // '1'
invoiceRef = "myinvoice02";
console.log(returnLast(invoiceRef)); // '2'

// Comparing methods
const newString = "Every green bus drives fast.";

// Using length property and charAt() method
const lengthWay = newString.charAt(newString.length - 2);
console.log("CharAt-Length way",lengthWay); // 't'

// Using slice() method
const sliceWay = newString.slice(-2, -1);
console.log("Slice way",sliceWay); // 't'

// Using at() method
const atWay = newString.at(-2);
console.log("At way",atWay); // 't'

// String.prototype.charAt()..........
const anyString = "The whole world is my family";
console.log(`The character at index 0   is '${anyString.charAt()}'`); // 'T'
// No index was provided, used 0 as default

console.log(`The character at index 0   is '${anyString.charAt(0)}'`); // 'T'
console.log(`The character at index 1   is '${anyString.charAt(1)}'`); // 'h'
console.log(`The character at index 2   is '${anyString.charAt(2)}'`); // 'e'
console.log(`The character at index 3   is '${anyString.charAt(3)}'`); // ' '
console.log(`The character at index 4   is '${anyString.charAt(4)}'`); // 'w'
console.log(`The character at index 999 is '${anyString.charAt(999)}'`); // ''

// String.prototype.charCodeAt()..........
console.log("ABC".charCodeAt(0)); // returns 65, i.e. the Unicode value of character 'A'

// String.prototype.codePointAt()..........
console.log("ABC".codePointAt(0)); // 65
console.log("ABC".codePointAt(0).toString(16)); // 41, the hexadecimal format of 65
console.log("😍".codePointAt(0)); // 128525
console.log("\ud83d\ude0d".codePointAt(0)); // 128525
console.log("\ud83d\ude0d".codePointAt(0).toString(16)); // 1f60d
console.log("😍".codePointAt(1)); // 56845
console.log("\ud83d\ude0d".codePointAt(1)); // 56845
console.log("\ud83d\ude0d".codePointAt(1).toString(16)); // de0d
console.log("ABC".codePointAt(42)); // undefined

// String.prototype.concat()..........
const str1 = 'Hello';
const str2 = 'World';
console.log(str1.concat(' ', str2)); // "Hello World"
console.log(str2.concat(', ', str1)); // "World, Hello"

const hello = "Hello, ";
console.log(hello.concat("Dear", ". Have a nice day.")); // Hello, Dear. Have a nice day.

const greetList = ["Hello", " ", "Dear", "!"];
"".concat(...greetList); // "Hello Dear!"
"".concat({}); // "[object Object]"
"".concat([]); // ""
"".concat(null); // "null"
"".concat(true); // "true"
"".concat(4, 5); // "45"

// String.prototype.endsWith()..........
const str = "To be, or not to be, that is the question.";

console.log(str.endsWith("question.")); // true
console.log(str.endsWith("to be")); // false
console.log(str.endsWith("to be", 19)); // true

// String.prototype.includes()..........
const str3 = "This sentence is a question, isn't it?";

console.log(str3.includes("sentence")); // true
console.log(str3.includes("question")); // true
console.log(str3.includes("nonexistent")); // false
console.log(str3.includes("is a", 1)); // true
console.log(str3.includes("IS A")); // false
console.log(str3.includes("")); // true

// String.prototype.indexOf()..........
console.log("Blue Whale".indexOf("Blue")); // returns  0
console.log("Blue Whale".indexOf("Blute")); // returns -1
console.log("Blue Whale".indexOf("Whale", 0)); // returns  5
console.log("Blue Whale".indexOf("Whale", 5)); // returns  5
console.log("Blue Whale".indexOf("Whale", 7)); // returns -1
console.log("Blue Whale".indexOf("")); // returns  0
console.log("Blue Whale".indexOf("", 9)); // returns  9
console.log("Blue Whale".indexOf("", 10)); // returns 10
console.log("Blue Whale".indexOf("", 11)); // returns 10

// String.prototype.lastIndexOf()..........
console.log("umbrella".lastIndexOf("b")); // returns 2
console.log("umbrella".lastIndexOf("b", 2)); // returns 2
console.log("umbrella".lastIndexOf("r", 0)); // returns -1
console.log("umbrella".lastIndexOf("x")); // returns -1
console.log("umbrella".lastIndexOf("u", -5)); // returns 0
console.log("umbrella".lastIndexOf("u", 0)); // returns 0
console.log("umbrella".lastIndexOf("")); // returns 8
console.log("umbrella".lastIndexOf("", 2)); // returns 2

// String.prototype.localeCompare()..........
// The localeCompare() method returns a number indicating whether a reference string comes before, or after, or is the same as the given string in sort order.
// The letter "a" is before "c" yielding a negative value
console.log("a".localeCompare("c")); // -2 or -1 (or some other negative value)

// Alphabetically the word "check" comes after "against" yielding a positive value
console.log("check".localeCompare("against")); // 2 or 1 (or some other positive value)

// "a" and "a" are equivalent yielding a neutral value of zero
console.log("a".localeCompare("a")); // 0

// Sort an array - localeCompare() enables case-insensitive sorting for an array.
const items = ["réservé", "Premier", "Cliché", "communiqué", "café", "Adieu"];
items.sort((a, b) => a.localeCompare(b, "fr", { ignorePunctuation: true })); // ['Adieu', 'café', 'Cliché', 'communiqué', 'Premier', 'réservé']

