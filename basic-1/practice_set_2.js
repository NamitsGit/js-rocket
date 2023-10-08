// 1. Use logical operators to find if a person's age is between 10 and 20 years
let age = 19;
if (age >= 10 && age <= 20) {
    console.log("Age in range 10 and 20");
}
else {
    console.log("Age not in range 10 and 20")
}

// 2. Demo use of switch case in JS
console.log("The fruit with index 2 is : ");
let fruit = 2;
switch(fruit) {
    case 1:
        console.log("Apple");
        break;
    case 2:
        console.log("Mango");
        break;
    case 3:
        console.log("Orange");
        break;
    case 4:
        console.log("Banana");
        break;
    default:
        console.log("Mixed fruit!")
        break;               
}

// 3. Write a JS program to find whether a number is divisible by 2 and 3
let n = 3;
if (n%2 == 0 && n%3 == 0) {
    console.log("Number", n , " divisible by 2 and 3");
}
else {
    console.log("Number ", n ," not divisible by 2 and 3");
}

// 4. Write a JS program to find if a number is divisible by either 2 or 3
let n2 = 15;
if (n%2 == 0 || n%3 == 0) {
    console.log("Number ", n2, " divisible by either 2 or 3")
}
else {
    console.log("Number",n2,"not divisible by either 2 or 3")
}


// 5. Print "you can drive" or "You cannot drive" considering age > 18 using ternary operator

let age_of_cand = 17;
age_of_cand > 18? console.log("Your age is ", age_of_cand ,"You can drive") : console.log("Your age is ",age_of_cand, "You cannot drive");