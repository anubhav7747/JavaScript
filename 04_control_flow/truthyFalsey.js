// const userEmail = "user@example";
// const userEmail = "";
// const userEmail = [];

// if (userEmail) {
//     console.log('got user email', userEmail);
// } else {
//     console.log('no user email');
// }


// Falsey Values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values
// "0", 'false', " ", [], {}, function(){}

// if (userEmail.length === 0) {
//     console.log('array is empty');
// }


// const emptyObj = {};

// if (Object.keys(emptyObj).length === 0) {
//     console.log('object is empty');
// }


// false == 0   // returns true
// false == ''  // returns true
// 0 == ''  // returns true


// Nullish Coalescing Operator (??): null & undefined

// let val1;
// val1 = 5 ?? 10; // 5
// val1 = null ?? 10;  // 10
// val1 = undefined ?? 15; // 15
// val1 = undefined ?? null;   // null
// val1 = null ?? undefined; // undefined
// val1 = null ?? 10 ?? 15; // 10

// console.log(val1);


// Ternary operator
// condition ? true : false;

const iceTeaPrice = 100;
iceTeaPrice <= 80 ? console.log('less than or equal to 80') : console.log('greater than 80');