let name = "Vinicius Jr."
let club = "Real Madrid"

// console.log("My name is " + name + " and I play for " + club + ".") //old method of string concatenation using the + operator.
// console.log(`My name is ${name} and I play for ${club}.`) //new method of string concatenation using template literals (backticks) and interpolation (${expression}).

const gameName = new String('Ghost of Tsushima')

// console.log(gameName[7])
// console.log(gameName.__proto__) //displays {} but it contains all the methods and properties of the String prototype, which is why we can use methods like length, toUpperCase, etc. on the gameName variable.
// console.log(gameName.length)
// console.log(gameName.toUpperCase())
// console.log(gameName.toLowerCase())
// console.log(gameName.includes("T"))
// console.log(gameName.charAt(15))
// console.log(gameName.indexOf('a'))


const newName = gameName.substring(0, 8)
console.log(newName)

const anotherName = gameName.slice(-8, 10)
console.log(anotherName)

const newString = '           Cristiano                       '
console.log(newString);
console.log(newString.trim());

const url = "https://mitesh-panda.framer.website/"
console.log(url.replace('-', ''))
console.log(url.includes('mitesh'));
console.log(url.includes('modric'));
console.log(gameName.split('  '));