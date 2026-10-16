/*
Object literals  = No Singleton objects possible.
Object constructors = Singleton objects possible. eg: Object.create
*/
eg: 
const bumbleUser = {} // Non-Singleton Object
const bumbleUser = new Object() // Singleton Object


// Object Literals
const mySymbol = Symbol("Cristiano")
const jsUser = {
    name: "Bruce",
    "full name": "Bruce Wayne",
    [mySymbol]: "siuuuuuuu", // declaring Symbol in a object
    age: 27,
    gender: "Male",
    location: "Gotham",
    email: "batman@brucewayne.com",
    isLoggedIn: true,
    lastLoginDays: ["Monday", "Friday"]
}

//calling an object.
console.log(jsUser.email); // okay, but causes error, when cases like "Full Name" appear.
console.log(jsUser["email"]); // efficient way, works in all the cases, RECOMMENDED.
console.log(jsUser["full name"]);
console.log(jsUser[mySymbol]); 
console.log(typeof jsUser[mySymbol]);

jsUser.email = "catwomanlovesbatman@wayneindustries.com" // modify/update the data.
// Object.freeze(jsUser) // locks an object from modifying.
jsUser.email = "thedarkknight@christianbale.in"
console.log(jsUser);

// intro to Functions.

jsUser.greetings = function() {
    console.log("Hola, JS user.")
}
console.log(jsUser.greetings); // does not executes the function, rather displays the fuction is created.
console.log(jsUser.greetings());

jsUser.introduction = function() {
    console.log(`Hola, mister ${this.name} bienvenido a JS.`); // string interpolation, this -> references to all items present in the object (jsUser).
}
console.log(jsUser.introduction());

// Singleton Objects.

const bumbleUser = new Object()

bumbleUser.name = "Kaka"
bumbleUser.fullname = "Ricardo Kaka"
bumbleUser.id = 22
bumbleUser.gender = "Male"
bumbleUser.location = "Milan, Italy"
bumbleUser.email = "kakathesonofjesus@brazil.br"
bumbleUser.isLoggedIn = true,
bumbleUser.lastLoginDays = ["Wednesday", "Sunday"]
console.log(bumbleUser);

const hingeUser = {
    email: "toddsmacks@hinge.com",
    fname : {
        userFullName: {
            FirtsName: "Todd",           // nesting objects.
            Lastname: "Smacker"
        }
    }
}

console.log(hingeUser) // result: { email: 'toddsmacks@hinge.com', fname: { userFullName: { FirtsName: 'Todd', Lastname: 'Smacker' } } }
console.log(hingeUser["fname"]) // result: { userFullName: { FirtsName: 'Todd', Lastname: 'Smacker' } }
console.log(hingeUser.fname?.userFullName.FirtsName) // result: Todd   ? -> Checks if the item is present or not.

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

// const obj3 = Object.assign({}, obj1, obj2) // {} -> used to store everything (target), else the updation happens in a copy of obj1 (source).
const obj3 = {...obj1, ...obj2}
console.log(obj3) // {} -> Target, obj1, obj2 -> source.

console.log(Object.keys(bumbleUser));
console.log(Object.values(bumbleUser));
console.log(Object.entries(bumbleUser));

console.log(bumbleUser.hasOwnProperty("location")) 
console.log(bumbleUser.hasOwnProperty("date"))

// De-structuring an Object.

const football = {
    name: "Pele",
    position: "ST, CAM",
    nationality: "Brazil",
    achievements: "3x World Cup Champion"
}

// football.postion 
// const {position} = football // De-structuring an object.
// console.log(position)

const {position: pos} = football // can rename as per own self's conviction
console.log(pos)