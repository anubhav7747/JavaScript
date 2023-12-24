// 2 categories: primitives and non-primitives datatypes


// Primitive datatypes
// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt


// JS is a dynamically typed language. You don’t need to care about the type of the variable because the type for each variable will be set dynamically during code execution. But on other side this feature is source of possible errors. For example, you can define variable “a” and this variable should hold always a number and you assign, for example, initial value 10 to this variable, and then you pass this variable as an argument to one of the functions and that function expects Number as an argument.

// https://codezup.com/is-javascript-static-or-dynamic-type/

// const score = 100;  // number
// const scoreValue = 100.3;   // number

// const isLoggedIn = false;   // boolean
// const outsideTemp = null;   // null is an object 
// let userEmail;  // undefined

// const id = Symbol('123');
// const anotherId = Symbol('123');

// console.log(id, anotherId);  // Symbol(123) Symbol(123)
// console.log(id === anotherId);  // false

// const bigNumber = 123456789987654321n;
// console.log(typeof bigNumber); // bigint when at last we write 'n' at the end of the number


// Reference (Non-primitive)

// Array, Objects, Functions

// to master JS => objects, browser events.

// const heros = [ "Shaktiman", "Naagraj", "JuniorG" ];

// let myObj = {
//     name: "Anubhav",
//     age: 23
// }

// const myFunction = function () {
//     console.log("hello world!");
// }

// all non-primitive datatype are called function.
// console.log(typeof heros);  // object
// console.log(typeof myObj);  // object
// console.log(typeof myFunction); // function or, object function

// console.log(typeof id); // symbol

// https://262.ecma-international.org/5.1/#sec-11.4.3


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non-primitive)
// Stack (they are used where primitive datatype are there), Heap (they are used where non-primitive datatype are used)

// in stack we get a copy of the variable
// in heap we get a reference of the variable of original value whatever change we do the change we also happen in the original value.

let myYoutubeName = "anubhavtiwaridotcom";

let anotherYoutubeName = myYoutubeName;
console.log(anotherYoutubeName, myYoutubeName); // anubhavtiwaridotcom anubhavtiwaridotcom

anotherYoutubeName = "happytiwaridotcom";
console.log(anotherYoutubeName, myYoutubeName); // happytiwaridotcom anubhavtiwaridotcom

let user1 = {
    email: "user@mmmut.ac.in",
    upi: "user@sbi"
};

let user2 = user1;

console.log(user1); // { email: 'user@mmmut.ac.in', upi: 'user@sbi' } 
console.log(user2); // { email: 'user@mmmut.ac.in', upi: 'user@sbi' } 

console.log();

user2.email = "user2@mmmut.ac.in";
console.log(user1); // { email: 'user2@mmmut.ac.in', upi: 'user@sbi' }
console.log(user2); // { email: 'user2@mmmut.ac.in', upi: 'user@sbi' }