const user = {
    username: "Thibaut Courtios",
    club: "Genk",
    jerseyNo: 28,
    position: "Goalkeeper",
    message: function() {
        console.log(`${this.username}, welcome mate!`);
        console.log(this)
    }
}

user.message()
user.username = "Andrey Lunin"
user.message() 
console.log(this)                // empty object, no context


function mocha() {
    let bistro = "McCafe"
    console.log(this)
    console.log(this.bistro);       // undefined, because "this" can be used in Objects, not in Functions.
}

mocha()    //  returns empty object {}


const mocha = function() {          // another way to declare a Fucntion.
    let bistro = "McCafe"
    console.log(this)
    console.log(this.bistro);       // undefined, because "this" can be used in Objects, not in Functions.
}

mocha()   //  returns empty object {}


const mocha = () => {               // Arrow Function.
    let bistro = "McCafe"
    console.log(this)
    console.log(this.bistro);       // undefined, because "this" can be used in Objects, not in Functions.
}

mocha()

// () => {}            // basic arrow function syntax.

const addNos = (number1, number2) => {
    return number1 + number2
}

console.log(addNos(6,7));

const subNos = (number3, number4) => number3 - number4         // Implicit return (One line statement)
console.log(subNos(23, 19))

const mulNos = (number3, number4) => (number3 * number4)         // Implicit return (One line statement)
console.log(mulNos(7, 10))

// {} -> return must be declared if written inside scope [EXPLICIT RETURN], () -> return declaration is not required [IMPLICIT RETURN].

const uname = (var1) => ({username: "Bojan Kirkic"})      // declaring an object in Arrow function by wrapping it up in {}.
console.log(uname())