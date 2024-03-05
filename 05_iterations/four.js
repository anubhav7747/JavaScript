// for-in

// const myObj = {
//     js: 'javascript',
//     cpp: 'c++',
//     rb: 'ruby',
//     swift: 'swift by apple'
// };

// for (const key in myObj) {
//     console.log(key);    // js, cpp, rb, swift
// }

// console.log();

// for (const key in myObj) {
//     console.log(myObj[key]); // javascript, c++, ruby, swift by apple
// }



// const arr = ['js', 'c++', 'java'];

// for (const key in arr) {
//     console.log(key);   // 0, 1, 2
// }

// console.log();

// for (const key in arr) {
//     console.log(arr[key]);  // js, c++, java
// }



const map = new Map();
map.set('IN', 'INDIA');
map.set('OUT', 'OUTPUT');
map.set('JS', 'JAVASCRIPT');
// console.log(map);

for (const key in map) {
    console.log(key);   // not iterable
}