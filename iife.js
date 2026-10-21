//  Immediately Invoked Function Expressions [IIFE]

// ()()     // basic IIFE syntax. first() -> stores function, second() -> executes the function stored init.

(function callDB() {
    // named IIFE -> callDB
    console.log(`Database connected successfully.`);           // IIFE in a normal fucntion.
})();         // ; -> mandatory at the end

/* Why use IIFE: Not just only to immediately execute the function but used as a prevention method for problems caused do to pollution in 
Global Scope. */

( () => {
    console.log(`Database disconnected successfully.`);        // IIFE in an arrow function.
})();

(function revokeAccess(username) {
    // named IIFE -> revokeAccess
    console.log(`Database access revoked successfully from ${username}.`);               // User inputs in IIFE -> normal functions.
})("Iker Cassilas");

( (username) => {
    console.log(`Database access granted successfully to ${username}.`);                 // User inputs in IIFE -> arrow functions.
})("Sergio Ramos");