// There are 7 primary data types in JS
// They can be remembered as NN BB SS U
// Null, Number, Boolean, BigInt, String, Symbol, Undefined

// Examples of primitive data types
let a = null;
let b = 234;
let c = true;
let d = BigInt("697") + BigInt("3")
let e = "Namit";
let f = Symbol("I am a nice symbol");
let g;

console.log(a, b, c, d, e, f, g)
console.log(typeof(d))

// Objects in JS are non-primitive data types
const item={
    "Namit": true,
    "Darshan":true,
    "Omkar": 23,
    "Adi": 53.33,
    "Srushti": "dsfsfsf",
}
console.log(item)
console.log(item["Namit"])