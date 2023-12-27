// const score = 400

// const balance = new Number(100);
// console.log(balance, score);    // [Number: 100] 400


// console.log(balance.toString()); // 100
// console.log(balance.toString().length); // 3
// console.log(balance.toFixed(2));    // 100.00


// const anotherNumber = 47.164647;
// console.log(anotherNumber.toPrecision(5));  // 47.165
// console.log(anotherNumber.toPrecision(2));  // 47
// console.log(anotherNumber.toPrecision(3));  // 47.2


// const hundreds = 10000000;
// console.log(hundreds.toLocaleString()); // 1,00,00,000
// console.log(hundreds.toLocaleString('en-IN')); // 1,00,00,000


// console.log(Number.MAX_VALUE);
// console.log(Number.MIN_VALUE);


// +++++++++++++++++++++++++++++++++ Maths +++++++++++++++++++++++++++++++++

// console.log(Math);

// console.log(Math.abs(-7));  // 7

// console.log(Math.round(4.16)); // 4
// console.log(Math.round(4.6)); // 5
// console.log(Math.ceil(4.6));    // 5
// console.log(Math.floor(4.6));   // 4

// console.log(Math.pow(2, 3));    // 8
// console.log(Math.sqrt(25)); // 5

// console.log(Math.max(4, 3, 6, 8));  // 8
// console.log(Math.min(4, 3, 6, 8));  // 3


// console.log(Math.random());
// console.log( (Math.random() * 10) + 1);
// console.log( Math.floor(Math.random() * 10) + 1);


const min = 10, max = 20;

console.log( Math.floor(Math.random() * (max - min + 1)) + min);