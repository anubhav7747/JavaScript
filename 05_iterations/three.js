// for of

// ["", "", ""]
// [{}, {}, {}]


// const arr = [1, 2, 3, 4, 5, 8];
// // console.log(arr.length);
// for (const iterator of arr) {
//     console.log(iterator);  // 1, 0, 3, 4, 5, 8
// }


// const greetings = `Good evening`;
// for (const iterator of greetings) {
//     console.log(iterator);
// }



// Maps - known for uniqueness, and order is maintained.


// const map = new Map();
// map.set('IN', 'INDIA');
// map.set('OUT', 'OUTPUT');
// map.set('OS', 'Operating system');
// map.set('IN', 'INDIA');
// console.log(map);

// for (const iterator of map) {
//     console.log(iterator);
// }

// for (const key of map.keys()) {
//     console.log(key);
// }

// for (const [key, value] of map) {
//     console.log(key);
// }



const myObj = {
    'name': 'Abc',
    'age': 36,
};

for (const [key, value] of myObj) {
    console.log(key);
}   // does not work
