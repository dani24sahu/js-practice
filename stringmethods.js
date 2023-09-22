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

// String.fromCharCode().........

console.log(String.fromCodePoint(0x1f303)); // "🌃"
console.log(String.fromCharCode(65, 66, 67)); // returns "ABC"
console.log(String.fromCharCode(0x2014)); // returns "—"
console.log(String.fromCharCode(0x12014)); // also returns "—"; the digit 1 is truncated and ignored
console.log(String.fromCharCode(8212)); // also returns "—"; 8212 is the decimal form of 0x2014
console.log(String.fromCharCode(0xd83c, 0xdf03)); // Code Point U+1F303 "Night with
console.log(String.fromCharCode(55356, 57091)); // Stars" === "\uD83C\uDF03"
console.log(String.fromCharCode(0xd834, 0xdf06, 0x61, 0xd834, 0xdf07)); // "\uD834\uDF06a\uD834\uDF07"

// String.fromCodePoint().......

console.log(String.fromCodePoint(42)); // "*"
console.log(String.fromCodePoint(65, 90)); // "AZ"
console.log(String.fromCodePoint(0x404)); // "\u0404" === "Є"
console.log(String.fromCodePoint(0x2f804)); // "\uD87E\uDC04" === "你"
console.log(String.fromCodePoint(194564)); // "\uD87E\uDC04" === "你"
console.log(String.fromCodePoint(0x1d306, 0x61, 0x1d307)); // "\uD834\uDF06a\uD834\uDF07" === "𝌆a𝌇"

// String.raw()........

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

// String.prototype.constructor.......

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

// length.......

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
console.log("CharAt-Length way", lengthWay); // 't'

// Using slice() method
const sliceWay = newString.slice(-2, -1);
console.log("Slice way", sliceWay); // 't'

// Using at() method
const atWay = newString.at(-2);
console.log("At way", atWay); // 't'

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

const str1 = "Hello";
const str2 = "World";
console.log(str1.concat(" ", str2)); // "Hello World"
console.log(str2.concat(", ", str1)); // "World, Hello"

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

// String.prototype.match()..........

const strNew = "For more information, see Chapter 3.4.5.1";
const re = /see (chapter \d+(\.\d)*)/i; //the i flag so that upper/lower case differences will be ignored.
const found = strNew.match(re);

console.log(found);
// [
//   'see Chapter 3.4.5.1',
//   'Chapter 3.4.5.1',
//   '.1',
//   index: 22,
//   input: 'For more information, see Chapter 3.4.5.1',
//   groups: undefined
// ]

// using global and ignoreCase flags with match()
const strNew1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const regexp = /[A-E]/gi;
const matches = strNew1.match(regexp);
console.log(matches); 
// [
//   'A', 'B', 'C', 'D',
//   'E', 'a', 'b', 'c', 
//   'd', 'e'
// ]

// using named capturing groups
const paragraph = "The quick brown fox jumps over the lazy dog. It barked.";
const capturingRegex = /(?<animal>fox|cat) jumps over/;
const foundd = paragraph.match(capturingRegex);
console.log(foundd.groups); // {animal: "fox"}

// using match() with no parameter
const strr = "Nothing will come of nothing.";
console.log(strr.match()); // returns [""]

// String.prototype.matchAll().......
const regexp1 = /t(e)(st(\d?))/g;
const strrr = 'test1test2';
const array = [...strrr.matchAll(regexp1)];
console.log(array[0]); // Array ["test1", "e", "st1", "1"]
console.log(array[1]); // Array ["test2", "e", "st2", "2"]

// String.prototype.normalize()..........
const name1 = '\u0041\u006d\u00e9\u006c\u0069\u0065';
const name2 = '\u0041\u006d\u0065\u0301\u006c\u0069\u0065';
console.log(`${name1}, ${name2}`); // "Amélie, Amélie"
console.log(name1 === name2); // false
console.log(name1.length === name2.length); // false

const name1NFC = name1.normalize('NFC');
const name2NFC = name2.normalize('NFC');
console.log(`${name1NFC}, ${name2NFC}`); // "Amélie, Amélie"
console.log(name1NFC === name2NFC); // true
console.log(name1NFC.length === name2NFC.length); // true

// String.prototype.padEnd()..........
const str4 = 'See more';
console.log(str4.padEnd(15, '.')); // "See more......."

const str5 = '299';
console.log(str5.padEnd(5)); // "299  "

// String.prototype.padStart()..........
const str6 = '5';
console.log(str6.padStart(2, '0')); // "05"

const fullNumber = '2034399002125581';
const last4Digits = fullNumber.slice(-4);
const maskedNumber = last4Digits.padStart(fullNumber.length, '*');
console.log(maskedNumber); // "************5581"

// String.prototype.repeat()..........
// repeat the string
console.log('abc'.repeat(2)); // "abcabc"
console.log('abc'.repeat(0)); // ""
console.log('abc'.repeat(1)); // "abc"

// generate a triangle
const triangle = '🔺';
console.log(triangle.repeat(5)); // "🔺🔺🔺🔺🔺"

// generate a sequence of numbers
const sequence = String(123);
console.log(sequence.repeat(3)); // "123123123"

// String.prototype.replace()..........

// replace a substring. The first argument can also be a regular expression. In that case, the second argument can be a string or a function. If the first argument is a regular expression and the second argument is a string, you can use the special replacement patterns to control the replacement. 
const p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';
const regex = /dog/gi;
console.log(p.replace(regex, 'ferret')); // "The quick brown fox jumps over the lazy ferret. If the ferret reacted, was it really lazy?"

// replace a function
const regex1 = /(\w+)\s(\w+)/;
const str7 = 'John Smith';
const newStr = str7.replace(regex1, '$2, $1');
console.log(newStr); // "Smith, John"

// replace a substring with the matched substring
const regex2 = /(\w+)\s(\w+)/;
const str8 = 'John Smith';

const newStr1 = str8.replace(regex2, (match, p1, p2, offset, string) => {
  console.log(match); // "John Smith"
  console.log(p1); // "John"
  console.log(p2); // "Smith"
  console.log(offset); // "0"
  console.log(string); // "John Smith"
  return `${p2}, ${p1}`;
});

console.log(newStr1); // "Smith, John"

// String.prototype.replaceAll()..........
// replace all occurrences of a substring. The first argument can also be a regular expression. In that case, the second argument can be a string or a function. If the first argument is a regular expression and the second argument is a string, you can use the special replacement patterns to control the replacement. 
const p1 = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';
const regex3 = /dog/gi;
console.log(p1.replaceAll(regex3, 'ferret')); // "The quick brown fox jumps over the lazy ferret. If the ferret reacted, was it really lazy?"

// replace all occurrences of a substring with the matched substring
const regex4 = /(\w+)\s(\w+)/g;
const str9 = 'John Smith';
const newStr2 = str9.replaceAll(regex4, '$2, $1');
console.log(newStr2); // "Smith, John"

// replace all occurrences of a substring with a function
const regex5 = /(\w+)\s(\w+)/g;
const str10 = 'John Smith';
const newStr3 = str10.replaceAll(regex5, (match, p1, p2, offset, string) => {
  console.log(match); // "John Smith"
  console.log(p1); // "John"
  console.log(p2); // "Smith"
  console.log(offset); // "0"
  console.log(string); // "John Smith"
  return `${p2}, ${p1}`;
});

console.log(newStr3); // "Smith, John"

// String.prototype.search()..........
// The search() method executes a search for a match between a regular expression and this String object.
// If successful, search() returns the index of the regular expression inside the string. Otherwise, it returns -1.
const paragraph1 = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';

const regex6 = /[^\w\s]/g;
console.log(paragraph1.search(regex6)); // 43

// String.prototype.slice()..........
// The slice() method extracts a section of a string and returns it as a new string, without modifying the original string.
const str11 = 'The quick brown fox jumps over the lazy dog.';
console.log(str11.slice(31)); // "the lazy dog."
console.log(str11.slice(4, 19)); // "quick brown fox"
console.log(str11.slice(-4)); // "dog."
console.log(str11.slice(-9, -5)); // "lazy"

// String.prototype.split()..........
// The split() method divides a String into an ordered list of substrings, puts these substrings into an array, and returns the array.  The division is done by searching for a pattern; where the pattern is provided as the first parameter in the method's call.
const str12 = 'The quick brown fox jumps over the lazy dog.';
const words = str12.split(' ');
console.log(words[3]); // "fox"

const chars = str12.split('');
console.log(chars[8]); // "k"

const strCopy = str12.split();
console.log(strCopy); // ["The quick brown fox jumps over the lazy dog."]
console.log(str12); // "The quick brown fox jumps over the lazy dog."

const strCopy1 = str12.split('');
console.log(strCopy1); // ["T", "h", "e", " ", "q", "u", "i", "c", "k", " ", "b", "r", "o", "w", "n", " ", "f", "o", "x", " ", "j", "u", "m", "p", "s", " ", "o", "v", "e", "r", " ", "t", "h", "e", " ", "l", "a", "z", "y", " ", "d", "o", "g", "."]
console.log(str12); // "The quick brown fox jumps over the lazy dog."

const strCopy2 = str12.split(' ');
console.log(strCopy2); // ["The", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog."]
console.log(str12); // "The quick brown fox jumps over the lazy dog."

const strCopy3 = str12.split(' ', 3);
console.log(strCopy3); // ["The", "quick", "brown"]
console.log(str12); // "The quick brown fox jumps over the lazy dog."

const strCopy4 = str12.split('o');
console.log(strCopy4); // ["The quick br", "wn f", "x jumps ", "ver the lazy d", "g."]
console.log(str12); // "The quick brown fox jumps over the lazy dog."

const strCopy5 = str12.split(/[^\w\s]/);
console.log(strCopy5); // ["The", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog", ""]
console.log(str12); // "The quick brown fox jumps over the lazy dog."

// String.prototype.startsWith()..........
// The startsWith() method determines whether a string begins with the characters of a specified string, returning true or false as appropriate.
const str13 = 'Saturday night plans';
console.log(str13.startsWith('Sat')); // true
console.log(str13.startsWith('Sat', 3)); // false

// String.prototype.substring()..........
// The substring() method returns the part of the string between the start and end indexes, or to the end of the string.
const str14 = 'Mozilla';
console.log(str14.substring(1, 3)); // "oz"
console.log(str14.substring(2)); // "zilla"

// String.prototype.toLocaleLowerCase()..........
// The toLocaleLowerCase() method returns the calling string value converted to lower case, according to any locale-specific case mappings.
const dotted = 'İstanbul';
console.log(dotted.toLocaleLowerCase('en-US')); // "i̇stanbul"
console.log(dotted.toLocaleLowerCase('tr')); // "istanbul"

// String.prototype.toLocaleUpperCase()..........
// The toLocaleUpperCase() method returns the calling string value converted to upper case, according to any locale-specific case mappings.
const dotted1 = 'istanbul';
console.log(dotted1.toLocaleUpperCase('en-US')); // "ISTANBUL"
console.log(dotted1.toLocaleUpperCase('tr')); // "İSTANBUL"

// String.prototype.toLowerCase()..........
// The toLowerCase() method returns the calling string value converted to lower case.
const sentence = 'The quick brown fox jumps over the lazy dog.';
console.log(sentence.toLowerCase()); // "the quick brown fox jumps over the lazy dog."

// String.prototype.toString()..........
// The toString() method returns a string representing the specified object.
const str15 = 682106892;
console.log(str15.toString()); // "682106892"

function foo(){
  console.log('bar');
}
console.log(foo.toString()); 
// function foo(){
//   console.log('bar');
// }

// String.prototype.toUpperCase()..........
// The toUpperCase() method returns the calling string value converted to uppercase (the value will be converted to a string if it isn't one).
const sentence1 = 'The quick brown fox jumps over the lazy dog.';
console.log(sentence1.toUpperCase()); // "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG."

// String.prototype.trim()..........
// The trim() method removes whitespace from both ends of a string. Whitespace in this context is all the whitespace characters (space, tab, no-break space, etc.) and all the line terminator characters (LF, CR, etc.).

const greeting = '   Hello world!   ';
console.log(greeting); // "   Hello world!   "
console.log(greeting.trim()); // "Hello world!"

// String.prototype.trimEnd()..........
// The trimEnd() method removes whitespace from the end of a string. trimRight() is an alias of this method.
const greeting1 = '   Hello world!   ';
console.log(greeting1); // "   Hello world!   "
console.log(greeting1.trimEnd()); // "   Hello world!"

// String.prototype.trimStart()..........
// The trimStart() method removes whitespace from the beginning of a string. trimLeft() is an alias of this method.
const greeting2 = '   Hello world!   ';
console.log(greeting2); // "   Hello world!   "
console.log(greeting2.trimStart()); // "Hello world!   "

// String.prototype.valueOf()..........
// The valueOf() method returns the primitive value of a String object.
const stringObj = new String('foo');
console.log(stringObj); // String { "foo" }
console.log(stringObj.valueOf()); // "foo"


