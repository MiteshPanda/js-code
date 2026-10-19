function basketball() {
    console.log("Kobe Bryant")
    console.log("Micheal Jordan")
    console.log("Shaquille O' Neil")
    console.log("Stephen Curry")
    console.log("Lebron James")
    console.log("Yao Ming")
}

basketball // reference, no output
basketball()  // execution

function add(num1, num2) {
    console.log(num1 + num2)
}

add(7, 10) // 17
add(4, "9") // 49 -> considers both as strings.
add(5, "b") // 5b
add(7, null) // 7

const result = add(7, 10)
console.log(results) // unndefined, because function is not returning any value.

function addTwoNos(number1, number2) {
    // let result = number1 + number2
    // return result

    return number1 + number2
}

const result = addTwoNos(7, 10)
console.log("Result: ", result)


function userLoggedIn(username = "Ney") {      // assigns default value as "Ney".
    if(!username) {                            //  username === undefined could also be written as !username.
        console.log("Provide an username.")
        return
    }
    return `${username} just logged in.`
}

console.log(userLoggedIn("Mancini"))
console.log(userLoggedIn()) // returns undefined.
const userL = userLoggedIn("Desire Doue")
console.log(userL)


function calcCartPrice(...number1) {         // ... -> Rest operator, takes multiple input.
    return number1
}

console.log(calcCartPrice(100, 200, 3300))

function calculateCartPrice(val1, val2, ...number1) {         // ... -> Rest operator, takes multiple input.
    return number1
}

console.log(calculateCartPrice(100, 200, 3300, 500, 874, 369))  // assigns val1 = 100., val2 = 200 and ...number1 -> bundles up the rest.

const game = {
    player: "Nani",
    position: "Winger"
}

function handleObject(anyObject) {
    return (`The player is ${anyObject.player} and plays as a ${anyObject.position}.`)
}

console.log(handleObject(game))
console.log(handleObject({   
    player: "Gareth Bale",  // manuak inputs.
    position: "Winger" 
}))

const newArray = [07, 10, 17, 19, 23, 22, 06]

function getValueFromIndex(getArray) {
    return getArray[3]
}
console.log(getValueFromIndex(newArray)) 
console.log(getValueFromIndex([89, 34, 12, 90, 74]))   // manuak inputs.