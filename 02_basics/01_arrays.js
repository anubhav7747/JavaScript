// array

const myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const myHeroes = [ 'Shaktimaan', 'Junior G' ];
// console.log(myArr[2]);

// const myArr1 = new Array(1, 2, 3, 4);
// console.log(myArr1[1]);

// Array methods

// myArr1.push(1);
// myArr1.push(7);
// console.log(myArr1);

// myArr1.pop();
// console.log(myArr1);

// myArr.unshift(1);
// console.log(myArr);

// myArr.shift(1);
// console.log(myArr);


// console.log(myArr.includes(5)); // true
// console.log(myArr.indexOf(9));  // 8

// const newArr = myArr.join();
// console.log(myArr);
// console.log(newArr);
// console.log(typeof myArr);  // object
// console.log(typeof newArr); // string


// let str = "Hello123 World456";
// let numbers = str.match(/\d+/g);
// console.log(numbers);


console.log('A', myArr);    // A [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

const mynum1 = myArr.slice(1, 3);
console.log(mynum1);    // [ 2, 3 ]
console.log('B', myArr);    // B [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]


const mynum2 = myArr.splice(1, 3);
console.log(mynum2);    // [ 2, 3, 4 ]
console.log('C', myArr);    // B [ 1, 5, 6, 7, 8, 9 ]
