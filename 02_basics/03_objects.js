// singleton
// Object.create


// object literals

const mySym = Symbol("keys");

const JSUser = {
    "name": "Anubhav",
    "full name": "Anubhav Tiwari",
    [mySym]: "mykey",
    age: 23,
    "course": "MCA",
    "location": "Gorakhpur"
}

// console.log(JSUser);    // { name: 'Anubhav', age: 23, course: 'MCA', location: 'Gorakhpur' }
// console.log(JSUser.name);   // Anubhav
// console.log(JSUser["name"]);    // Anubhav

// console.log(JSUser.age);    // 23
// console.log(JSUser["full name"]); // Anubhav Tiwari


// console.log(JSUser);

// object can be accessed through dot notation and in square brackets using double quotes


// JSUser.age = 24;
// Object.freeze(JSUser);
// JSUser.age = 25;
// console.log(JSUser);

JSUser.greeting = function() {
    console.log("Hello JS User!");
}

JSUser.greetingTwo = function() {
    console.log(`Hello JS User, ${this.name}`);
}

console.log(JSUser.greeting);   // [Function (anonymous)]
console.log(JSUser.greeting());   // Hello JS User
console.log(JSUser.greetingTwo());   // Hello JS User, Anubhav