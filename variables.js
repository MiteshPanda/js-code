const accountId = 7
let accountEmail = "miteshpanda2274@gmail.com"
var accountPassword = "Batman@19"
accountCity = "Pune"
let accountState

// accountId = 10
accountEmail = "pandalaughs19@gmail.com"
accountPassword = "Spiderman@19"
accountCity = "Bhubaneshwar"

/*
prefer to use const for variables that won't change.
use let for variables that will change.
always declare variables with let or const.

prefer not to use var
because of issues in block scope and function scope.
*/

console.log(accountId)

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])