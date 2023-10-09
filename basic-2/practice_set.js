// 1. Write a program to print the marks of a student in an object
// assume the object is like obj = {Namit : 98, Neha : 96, Adi : 88, Darshan : 89}

const printMarks1 = (marksObject) => {
    for(let i = 0; i < Object.keys(marksObject).length ; i++){
        console.log("The marks of "+Object.keys(marksObject)[i]+" are "+marksObject[Object.keys(marksObject)[i]])
    }
}
console.log("Calling printMarks1")
printMarks1({Namit : 98, Neha : 96, Adi : 88, Darshan : 89})
console.log()
console.log()

// 2. Write the answer for Q1 using for in loop  
const printMarks2 = (marksObject) => {
    for(let student in marksObject){
        console.log("The marks of "+student+" are "+marksObject[student])
    }
}
console.log("Calling printMarks2")
printMarks2({Namit : 98, Neha : 96, Adi : 88, Darshan : 89})


// 3. Write a program to print "try again" until a user enters a correct number
let age = prompt("What is your age? : ");
age = Number.parseInt(age);
while(age < 0 || age > 150){
    age = prompt("Please enter a valid age! A valid age is never less than 0 or more than 150. : ");
}
console.log("Thank you your age is : ", age);

// 4. Write a program to find a mean of 5 numbers
const meanOfFiveCalc = (a, b, c, d, e) => {
    return (a + b + c + d + e) / 5;
}
console.log("Mean of 1,2,3,4,5 is ", meanOfFiveCalc(1, 2, 3, 4, 5))
