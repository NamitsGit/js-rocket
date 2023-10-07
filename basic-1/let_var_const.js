// In JS we use let, const and var to declare variables
var a = "Hello";
let b = "Good";
const c = "Day!!";

console.log(a);
console.log(b);
console.log(c);

// as a rule of thumb all values that do not change during the execution should be stored as const
const PI = 3.414;
console.log("The value of pi is : ",PI);

// you cannot change the value of a const value after declaration
// JS will throw an error if you do so, this error says TypeError: Assignment to constant variable. because 
// a const type value is not expected to be changed

// uncomment the below line to get the above error
// PI = 12345;

// If it's a general variable whose value is expected to change through the program you use let
let speed = 100;
console.log("SPEED IS : ",speed)
speed = 150;
console.log("SPEED UPDATED TO : ",speed);

// var was used in 00's JS code but today it is not considered a good coding standard
var k = 123;
console.log("First declaration of k is : ", k);

// now coming to why using var is not considered a good practice

// try re-declaring the same variable with the same name and javascript accepts it without any problem
// But honestly, this is the problem...... if you are allowed to re-declare the same variables in multiple places in 
// your program. You cannot predit which value will that variable hold, there will be ambiguity introduced because
// of this.

var k = "This should not be allowed but if it's allowed it may cause serious bugs in your program...";
console.log("Second declaration of k is : ", k);
