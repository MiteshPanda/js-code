var c = 2306  // Global Scope.
let a = 1904  // Global Scope.

if(true) { 
    let a = 7                     // stays in scope, doesn't return any value, BLOCK SCOPE.
    const b =10                   // stays in scope, doesn't return any value, BLOCK SCOPE.
    var c = 23                    // falls out of scope, returns value.
    d = 19                        // falls out of scope, returns value.
    console.log(`Block Scope value a: ${a}.`)
    console.log(`Block Scope value b: ${b}.`)
}

console.log(`Global Scope value a: ${a}.`)
// console.log(b)    // can't print, because it's called out of scope, works when called in it's block scope.
console.log(`Block Scope value c: ${c}.`)
console.log(`Block Scope value d: ${d}.`)


function one() {
    const username = "Luka Modric"
    function two() {                                            // nested functions.
        const position = "Mid-fielder"
        console.log(`My name is ${username}.`)                  // can access member's of one() as it resides inside the one()'s scope.
        console.log(`${username} is a ${position}.`)
    }
    two()
}
one()

// console.log(position)                   // cannot access member's of two() as it is outside it's scope.

if(true) {
    const club = "Real Madrid"
    if(club === "Real Madrid") {
        const tagline = "Hala Madrid, y nada mas! <3"
        console.log(`Greatest Club in the world is ${club}, and Madridistas always say ${tagline}.`)
    }
}


console.log(addOne(5))                      // JS allows this, before declaration & initialization.

function addOne(num) {                      // normal function.
    return num + 1
}


// console.log(addTwo(5))                   // due to HOISTING issues cannot run before declaration & initialzation.
const addTwo = function(num) {              // function as an EXPRESSION.
    return num + 2
}

console.log(addTwo(5))