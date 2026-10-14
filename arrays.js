/*
JS arrays are re-sizeable & contain a mix of different data types.
JS array operations creates SHALLOW COPIES. 

Shallow Copy: Is a copy whose properties share the same references[points to same underlying values], as those of the source object.
Deep Copy:  Is a copy whose properties DO NOT share the same references, as those of the source object.
*/

const myArr = [0, 10, 20, 30, 40, 50, 60]
const myHeroes = ["Cristiano Ronaldo", "Batman", "Namikaze Minato", "Zoro", "Luffy", "Shisui", "IronMan"]
const myArr1 = new Array(1, 2, 3, 4, 5, 6, 7)

console.log(myArr[4])
console.log(myHeroes[0]);
console.log(myArr1[4]);

// Array Methods

myArr.push(70) // inserts an element to the end of the array.
console.log(myArr)
myArr.pop() // removes the last element from the array.
console.log(myArr)
myArr.unshift(80) // inserts an element to the start of the array.
console.log(myArr);
myArr.shift() // removes the first element from the array, updated array was : [80, 0, 10, 20, 30, 40, 50, 60].
console.log(myArr);


console.log(myArr)
console.log(myArr.includes(1));
console.log(myArr.indexOf(4));
console.log(myArr.includes(10)); // provide elements here, not the index inside ().
console.log(myArr.indexOf(40)); // provide elements here, not the index inside ().

// const newArr = myArr.join() // join() converts the array into string (CSV).
console.log(myArr);
console.log(newArr);
console.log(typeof(newArr));

// Slice vs Splice

console.log("A: ", myArr); // Original Array
const myNewArray = myArr.slice(1,4) // slice doesn't alter the original array. Slicing starts from [1] and ends before [4].
console.log(myNewArray);
console.log("B: ", myArr); // Sliced Array

const myNewArray1 = myArr.splice(1,4) // splice alters the original array. Splice includes range [1] - [4].
console.log(myNewArray1);
console.log("C: ", myArr); //Spliced Array

const marvelCharacters = ["IronMan", "BlackPanther", "SpiderMan", "Thor", "Hawkeye", "BlackWidow", "WhiteTiger", "CatWoman"]
const dcCharacters = ["BatMan", "BatWoman", "SuperMan", "WonderWoman", "Flash", "GreenLantern", "AquaMan", "BlackCanary"]

const allHeroes = marvelCharacters.concat(dcCharacters) // limit = 1 array concatenation.
console.log(allHeroes);

// spread method
const allCharacters = [...marvelCharacters, ...dcCharacters] // can concatenate as many as you want.
console.log(allCharacters);

const otherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]] // edge case - interviews.
console.log(otherArray);

const usableArray = otherArray.flat(Infinity) // Depth = 2, using Infinity so I don't have to calculate (not usually recommended).
console.log(usableArray);  

console.log(Array.isArray("Cristiano Ronaldo")); // checks whether the array is present or not.
console.log(Array.from("Cristiano Ronaldo")); // includes spaces too.
console.log(Array.from({name: "Cristiano Ronaldo"})); // returns empty object as it cannot create array. Gotta specify to create aray from keys or value in this case.

let score1 = 981
let score2 = 902
let score3 = 777
console.log(Array.of(score1, score2, score3));