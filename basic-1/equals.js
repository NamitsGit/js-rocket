// Arithmetic Operators
let a = 10;
let b = 4;

console.log("a + b", a + b)
console.log("a - b", a - b)
console.log("a * b", a * b)
console.log("a / b", a / b)
console.log("a ** b", a ** b)
console.log("a % b", a % b)


// Conditional Operatorsc && || !
let c1 = 3;
let c2 = 7;

// && AND
if (c1 < c2 && c1 != 0) {
    console.log("c1 is less than c2 and is non-zero");
}
else {
    console.log("c1 is either greater than c2 or is zero");
}

// || OR
let c3 = 4;
let c4 = 0;

if (c3 != 0 || c4 != 0) {
    console.log("Either c3 or c4 is not zero")
}

// ! NOT
let x = 5;
if (!(x < 3)) {
    console.log("x is not less than 3")
}

// Equals in JS differs for == and ===
let s = 3;
s2 = "3";

console.log(s == s2);
// prints true because it only checks the value

console.log(s === s2);
// prints false because it checks the object reference