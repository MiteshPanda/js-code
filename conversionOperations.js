// ------------------- CONVERSIONS -------------------------

let score = false
console.log(typeof score)
console.log(typeof (score))

let convertIntoNumber = Number(score)
console.log(typeof convertIntoNumber)
console.log(convertIntoNumber)

// "7" -> 7
// "7Suiii" -> NaN(Not a Number) because of the presence of string in the number.
// true -> 1 ; false -> 0

let isLoggedIn = 1
let convertintoBoolean = Boolean(isLoggedIn)
console.log(typeof convertintoBoolean)
console.log(convertintoBoolean)
// 1 -> true ; 0 -> false ; -1 -> true
// "Ronaldo" -> true

let emptyString = ""
let convertEmptyString = Boolean(emptyString)
console.log(typeof convertEmptyString)
console.log(convertEmptyString)
// "" -> false ; " " -> true

let ascii = 16
let convertIntoString = String(ascii)
console.log(typeof ascii)
console.log(typeof convertIntoString)
console.log(convertIntoString)

let value = 97
let convertIntoAscii = String.fromCharCode(value)
console.log(typeof convertIntoAscii)
console.log(convertIntoAscii)
//print the character corresponding to the ASCII value 97, which is 'a'

// ------------------- OPERATIONS -------------------------

let input = 7
let negativeInput = -input
console.log(negativeInput)

console.log(-(-input)) // double negation will give us the original value of input, which is 7.
console.log(-(-(-input))) // triple negation will give us the negative value of input, which is -7.

console.log(5 + 3) // addition
console.log(5 - 3) // subtraction
console.log(5 * 3) // multiplication
console.log(5 / 3) // division
console.log(5 % 3) // modulus (remainder)
console.log(5 ** 3) // exponentiation (5 raised to the power of 3)

console.log("1" + 2)
console.log(1 + "2") 
console.log("1" + 2 + 9) // "1" + 2 will give us "12", and then "12" + 9 will give us "129"
console.log(1 + 2 + "3") // 1 + 2 will give us 3, and then 3 + "3" will give us "33"
console.log(+true) // 1
console.log(+"") // 1 0
// first input defines the type of the output. If the first input is a string, the output will be a string. 
// If the first input is a number, the output will be a number.
// not preferred to mix data types in operations as it can lead to unexpected results.
// unprofressional industry practice to mix data types in operations. It can lead to confusion and bugs in the code.
// It is better to keep the data types consistent in operations.

let gameCounter = 101
++gameCounter // pre-increment: increments the value of gameCounter by 1 and then returns the updated value. 
console.log(gameCounter) 
gameCounter++ // post-increment: returns the current value of gameCounter and then increments it by 1.
console.log(gameCounter)   


let x = 7
const y = ++x
console.log("Value of x:", x, "Value of y:", y)
console.log(`Value of x: ${x}, Value of y: ${y}`)
// In the pre-increment case, x is incremented first and then assigned to y, so both x and y will have the value 8.

let a = 10
const b = a++
console.log("Value of a:", a, "Value of b:", b)
console.log(`Value of a: ${a}, Value of b: ${b}`)
// In the post-increment case, a is assigned to b first and then incremented, so a will have the value 11 and b will have the value 10.