/* 
1. <   ->  less than 
2. >   ->  greater than
3. <=  ->  less than or equal to
4. >=  ->  greater than or equal to 
5. ==  ->  equals to
6. !=  ->  not equal to
7. === ->  strict equal (checks datatype)
8. !== ->  anti-pattern strict checking (checks negative sign) 
*/

const temperature = 24
if(temperature > 30) {
    console.log("It's going to be hot, I guess")
} else if(temperature === 24) {
    console.log("Mausam dekh ke, dil garden garden horiya hai <3")
} else {
    console.log("It's Cold, out there.")
}

const score = 987
if(score > 507) {
    let name = "Portugas D. Ace"
    let power = "fire"
    console.log(`User name: ${name}.`);
    console.log(`User power: ${power}.`);
}

// console.log(`User got ${power} type of powers.`);  // can't access cause it falls out of scope.

const balance = 6589
if(balance < 1000) {
    console.log("Balance is below 1000");
} else if(balance < 2500) {
    console.log("Balance is below 2500");
} else if(balance < 4800) {
    console.log("Balance is below 4800");
} else if(balance < 5600) {
    console.log("Balance is below 5600");
} else if(balance < 6300) {
    console.log("Balance is below 6300");
} else if(balance < 6982) {
    console.log("Balance is below 6982");
} else {
    console.log("Enough money for a day-out, enjoy!");
}

const userLoggedIn = true
const debitCard = true
const loggedInUsingGoogle = false
const loggedInUsingEmail = true

if (userLoggedIn && debitCard) {
    console.log("User is allowed to shop for mechandise and customize them.");
}

if (loggedInUsingGoogle || loggedInUsingEmail) {
    console.log("Welcome User, would you like to have a detour?")
}


const month = 4

switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("June");
        break;
    case 7:
        console.log("July");
        break;
    case 8:
        console.log("August");
        break;
    case 9:
        console.log("September");
        break;
    case 10:
        console.log("October");
        break;
    case 11:
        console.log("November");
        break;
    case 12:
        console.log("December");
        break;

    default:
        console.log("Out of months, you sure you were born?")
        break;
}


// Truthy & Falsy

// Falsy Values -> false, 0, -0, BIgInt: 0n, "", null, undefined, NaN.
// Truthy Values -> true, "0", 'false', " ", [], {}, function(){}, 
const playerID = []

if(playerID) {
    console.log("Player exists.")
} else {
    console.log("Player doesn't exist.")
}

if(playerID.length === 0){                            // Checking if an array is empty.
    console.log("Array is empty.")
}

const emptyObject = {}
if(Object.keys(emptyObject).length === 0) {           // Checking if an object is empty. 
    console.log("Object is empty.")                   // Object.keys(emptyObject) -> returns an array of the object.
}

false == 0      // true
false == ''/""  // true
0 == ''/""      // true


// Nullish Coalescing Operator (??): null, undefined

let val1
val1 = 7 ?? 10            // 7
val1 = null ?? 10         // 10
val1 = undefined ?? 7     // 7
val1 = null ?? undefined  // undefined
val1 = null ?? 7 ?? 10    // 7

console.log(val1);

// Terniary Operator

// syntax: condition ? true : false

const rmfcKitValue = 6000

rmfcKitValue >= 4000 ? console.log("More than 4000") : console.log("Less than 4000")