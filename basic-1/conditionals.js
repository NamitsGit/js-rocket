// if, else if, and else are 3 conditionals used to direct flow of the program acc to certain situations

let a = 30;
// let a = prompt("What's your age?");
// a = Number.parseInt(a);

if (a < 0) {
    console.log("You should not be born yet!!")
}
else if (a > 120) {
    console.log("Behold... An immortal!!")
}
else if ( a < 18 ) {
    console.log("Hello! How is your school? :)")
}
else {
    console.log("You are a responsible citizen. You can cast your vote!")
}

// switch statement
const dayOfWeek = 3;
switch (dayOfWeek) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tueday");
        break;
    case 3:
        console.log("Wednesday");
        break;    
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday!!!!!");
        break;
    case 6:
        console.log("Saturday :)");
        break;
    case 7:
        console.log("Sunday :) :| :( :*( ")
        break;
}