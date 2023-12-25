// const name = "anubhav";
// const repoCount = 50;

// console.log(name + repoCount + " repositories");    // anubhav50 repositories

// console.log(`hello my name is ${name} ${repoCount} repositories`);   // anubhav 50 repositories
// console.log(`hello my name is ${name.toUpperCase()} ${repoCount} repositories`); // hello my name is ANUBHAV 50 repositories

const gameName = new String('repoCount');
// console.log(gameName);  // [String: 'repoCount']

// console.log(gameName[0]);   // r
// console.log(gameName.__proto__);    // {}

// console.log(gameName.length);   // 9
// console.log(gameName.toUpperCase());   // REPOCOUNT

// original value never change

// console.log(gameName.charAt(2));    // p
// console.log(gameName.indexOf('p')); // 2

// const newString = gameName.substring(0, 4);
// console.log(newString); // repo
// // last value doesn't included

// const newString2 = gameName.substring(4, 10);   // substring(4, length+1)
// console.log(newString2); // Count

// const anotherString = gameName.slice(-9, 4);
// console.log(anotherString); // repo

// in substring we can't give negative index

// const newStringOne = "  hello world     ";
// console.log(newStringOne);  // "  hello world     "
// console.log(newStringOne.trim());   // "hello world"
// console.log(newStringOne.trimEnd());    // "  hello world"
// console.log(newStringOne.trimStart());  // "hello world     "

const url = "http://anubhav.com/anubhav%07tiwari";
console.log(url.replace('%07', '-'));   // http://anubhav.com/anubhav-tiwari

console.log(url.includes('anubhav'));   // true

const str = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, veniam!";
console.log(str.split(' '));    // returns an array
// split(separator)
// [
//     'Lorem',       'ipsum',
//     'dolor',       'sit',
//     'amet',        'consectetur',
//     'adipisicing', 'elit.',
//     'Quod,',       'veniam!'
// ]

console.log(str.split(' ', 5)); // split(separator, limit)
// [ 'Lorem', 'ipsum', 'dolor', 'sit', 'amet' ]