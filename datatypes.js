"use strict"; // treats all JS codes as newer versions.
// alert(3+3) // this won't work as we are using Node and not browser.

//Primitive Data Types in JS
// 1. Number
let num1 = 34;
let num2 = 56.7;
console.log("The value of num1 is ", num1);
console.log("The value of num2 is ", num2);

// 2. String
let str1 = "This is a string";
let str2 = 'This is also a string';
console.log(str1, str2);

// 3. Boolean
let bool1 = true;
let bool2 = false;
console.log("The value of bool1 is ", bool1, " and the value of bool2 is ", bool2);

// 4. Undefined
let undef;
console.log("The value of undef is ", undef);

// 5. Null
let state = null;
console.log("The value of state is ", state);   

// 6. Symbol
let sym = Symbol("This is a symbol");
console.log("The value of sym is ", sym);

// 7. BigInt
let bigInt = BigInt("123456789012345678901234567890");
console.log("The value of bigInt is ", bigInt);

console.log(typeof null); // returns object
console.log(typeof undefined) // returns undefined

