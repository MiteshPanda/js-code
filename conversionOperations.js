let score = false

//console.log(typeof score)
//console.log(typeof (score))

let convertIntoNumber = Number(score)
//console.log(typeof convertIntoNumber)
//console.log(convertIntoNumber)

// "7" -> 7
// "7Suiii" -> NaN(Not a Number) because of the presence of string in the number.
// true -> 1 ; false -> 0

let isLoggedIn = 1
let convertintoBoolean = Boolean(isLoggedIn)
//console.log(typeof convertintoBoolean)
//console.log(convertintoBoolean)
// 1 -> true ; 0 -> false ; -1 -> true
// "Ronaldo" -> true

let emptyString = ""
let convertEmptyString = Boolean(emptyString)
//console.log(typeof convertEmptyString)
//console.log(convertEmptyString)
// "" -> false ; " " -> true

let ascii = 16
let convertIntoString = String(ascii)
//console.log(typeof ascii)
//console.log(typeof convertIntoString)
//console.log(convertIntoString)


let value = 97
let convertIntoAscii = String.fromCharCode(value)
//console.log(typeof convertIntoAscii)
//console.log(convertIntoAscii)