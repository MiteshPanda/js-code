// Data types in JavaScript are primarily categorized into two types: Primitive and Non-Primitive (Reference) data types.

// 1. Primitive Data Types: These are the basic data types that are not objects and have no methods. They include:
// - Number: Represents both integer and floating-point numbers. Example: 42, 3.14
// - String: Represents a sequence of characters. Example: "Hello, World!"
// - Boolean: Represents a logical entity that can have two values: true or false. Example: true, false
// - Undefined: Represents a variable that has been declared but not assigned a value. Example: let x; console.log(x); // undefined
// - Null: Represents the intentional absence of any object value. Example: let y = null; console.log(y); // null
// - Symbol: Represents a unique identifier. Example: const id = Symbol('123'); console.log(id); // Symbol(123)
// - BigInt: Represents integers with arbitrary precision. Example: let bigInt = BigInt("123456789012345678901234567890"); console.log(bigInt); // 123456789012345678901234567890n

// 2. Non-Primitive (Reference) Data Types: These are complex data types that can store collections of data and more complex entities. They include:
// - Object: Represents a collection of properties and methods. Example: let obj = { name: "Alice", age: 30 }; console.log(obj); // { name: 'Alice', age: 30 }
// - Array: Represents an ordered list of values. Example: let arr = [1, 2, 3, 4, 5]; console.log(arr); // [1, 2, 3, 4, 5]
// - Function: Represents a block of code designed to perform a particular task. Example: function greet() { console.log("Hello!"); } greet(); // Hello!

const id = Symbol('123')
const anotherID = Symbol('123')

console.log(id === anotherID) // shows false because each Symbol is unique, even if they have the same description.
// ==  -> checks for value equality with type coercion, meaning it converts the operands to the same type before making the comparison.
// === -> checks for both value and type equality without performing type coercion. It returns true only if both the value and the type are the same.

// Type Conversion in JavaScript: JavaScript is a dynamically typed language, which means that variables can hold values of any type and the type can change at runtime. 
// Type conversion is the process of converting a value from one data type to another. There are two types of type conversion in JavaScript: implicit and explicit.

// Implicit Type Conversion (Type Coercion): This occurs when JavaScript automatically converts a value from one type to another during an operation. For example:
console.log("5" + 3) // JavaScript converts the number 3 to a string and concatenates it with "5", resulting in "53".
console.log("5" - 3) // JavaScript converts the string "5" to a number and performs the subtraction, resulting in 2.

// Explicit Type Conversion: This occurs when we manually convert a value from one type to another using built-in functions or methods. For example:
console.log(Number("5")) // converts the string "5" to a number, resulting in 5
console.log(String(5)) // converts the number 5 to a string, resulting in "5"
console.log(Boolean(0)) // converts the number 0 to a boolean, resulting in false
console.log(Boolean(1)) // converts the number 1 to a boolean, resulting in true


//Types of Values           Result
// 1. Undedined             Undedined
// 2. Null                  Object
// 3. Boolean               Boolean
// 4. Number                Number
// 5. String                String
// 6. Symbol                Symbol
// 7. Array                 Object
// 8. Object                Object
// 9. Function              Function (ObjectFunction)