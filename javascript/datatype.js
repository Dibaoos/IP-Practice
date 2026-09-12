let studentName = "Diba";
let age = 21;
let passed = true;
let result;
let scholarship = null;
let largeNumber = 12345n;

console.log(typeof studentName);
console.log(typeof age);
console.log(typeof passed);
console.log(typeof result);
console.log(typeof scholarship);
console.log(typeof largeNumber);

const str1 = "id";
const str2 = "id";
console.log(str1 === str2);

const sym1 = Symbol("id");
const sym2 = Symbol("id");
console.log(sym1 === sym2); // false
console.log(sym1.description); // "id"

console.error("Something went wrong!");
console.warn("Check this value!");