// ------------------- NUMBERS -------------------------

const goalsCR = 979
console.log(goalsCR);

const goat = new Number(1000)
console.log(goat);

console.log(goat.toString())
console.log(goat.toString().length)
console.log(goat.toFixed(4));


const xG = 4583.678
console.log(xG.toPrecision(2));

const hundreds = 10000000000000;
console.log(hundreds.toLocaleString('en-IN')); // Follows Indian numerical system
console.log(hundreds.toLocaleString('en-US')); // Follows US numerical system



// ------------------- MATHS -------------------------

console.log(Math);
console.log(Math.abs(-7));
console.log(Math.round(4.3));
console.log(Math.ceil(4.2));
console.log(Math.floor(7.8));
console.log(Math.sqrt(9));
console.log(Math.min(6,8,2,4,9));
console.log(Math.max(6,8,2,4,9));

console.log(Math.random());  // Will always return values between 0 - 1
console.log(Math.random() * 10); // Edge case = 0.00418745, 0.079846348, 0.0....n
console.log((Math.random() * 10) + 1); // Ensures the minimum value is 1; useful for edge cases.
console.log(Math.floor(Math.random() * 10) + 1); // Takes the loweset possible value (floor) to avoid decimals.


const min = 19
const max = 23
console.log(Math.floor(Math.random() * (max - min + 1)) + min) // Gives values between two provided numbers. 