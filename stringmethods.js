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