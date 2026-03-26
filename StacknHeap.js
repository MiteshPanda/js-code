// In JavaScript, primitive data types (such as strings, numbers, booleans, null, undefined, and symbols) are stored in the stack memory.

let userName = "John F. Kennedy";
let name = userName
name = "Cristiano Ronaldo"

console.log(userName)
console.log(name)

// In the above code, we have assigned the value of userName to name. 
// When we change the value of name, it does not affect the value of userName because they are stored in different memory locations. 
// This is because strings are immutable in JavaScript, and when we assign a string to a variable, it creates a new string in memory. 
// Therefore, when we change the value of name, it creates a new string in memory and does not affect the original string stored in userName.

// In JavaScript, non-primitive data types (such as objects and arrays) are stored in the heap memory.

let person1 = {
    name: "Lionel Messi",
    position: "Right Winger",
    nationality: "Argentinian"
}


let person2 = person1
person2.name = "Franco Mastantuono"

console.log(person1)
console.log(person2)

// In the above code, we have assigned the value of person1 to person2. 
// When we change the value of person2.name, it also changes the value of person1.name because both person1 and person2 are referencing the same object in memory. 
// This is because objects are mutable in JavaScript, and when we assign an object to a variable, it creates a reference to that object in memory. 
// Therefore, when we change the value of person2.name, it changes the value of the object that both person1 and person2 are referencing, which is why both person1.name and person2.name reflect the change.