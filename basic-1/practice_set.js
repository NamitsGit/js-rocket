// Practice set

// 1. Create a variable of string and try to add a number to it
let s = "Good Afternoon";
s = s + 3;
console.log(s)

// 2. Use typeof operation to find out the data type of the string in previous question
console.log(typeof(s))

// 3. Create a const object in JS. Can you change it to hold another number later?
const a = {
    name : "Namit",
    team : "Dragon",
    phone_number : 8899778855
}

// a = 53;

// 4. Try to add a new key to the const object in Q3?
a["new_key"] = 323;
console.log(a)

// 5. Try to crete a word-meaning dict of atleast 5 words?
const dict = {
    airside : "the part of an airport where people go after they have passed through security and passport checks",
    abeam : "in a line at right angles to the length of a vessel, on the beam",
    brave : "courageous or fearless",
    candid : "openly straightforward and direct without secretiveness",
    dapper : "marked by up-to-dateness in dress and manners."
}

console.log(dict.abeam)