/*
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

*/