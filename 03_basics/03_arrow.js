const user = {
    username: 'anubhav',
    price: 'USD',
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website.`);
        console.log(`${user.username}, welcome to website.`);
        // console.log(`${username}, welcome to website.`);    // username is not defined
        console.log(this);
        console.log();
    }
}

// console.log(user.welcomeMessage);   // [Function: welcomeMessage]
// console.log(user.welcomeMessage()); // anubhav, welcome to website.

// user.welcomeMessage();
// user.username = 'happy';
// user.welcomeMessage();

// console.log(this);  // refers empty object {} 


// function chai(){
//     const username = 'chai';
//     console.log(this);
//     // console.log(this.username); // undefined
// }

// chai();


// const chai = function (){
//     const username = 'chai';
//     console.log(this);
//     // console.log(this.username); // undefined
// }
// chai();


// const chai = () => {
//     const username = 'chai';
//     console.log(this);  // {}
//     console.log(this.username); // undefined
// }
// chai();


// "this" keyword works in objects and not in functions.



// const addTwo = (num1, num2) => {
//     return (num1 + num2);
// }

// console.log(addTwo(1, 2));  // 3


// implicit return
// const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => (num1 + num2)

// console.log(addTwo(1, 2));  // 3


// explicit return means using "return" keyword.


// const returnFunc = () => {username: "user"}
// console.log(returnFunc());  // undefined

const returnFunc = () => ({username: "user"})
console.log(returnFunc());  // { username: 'user' }



// demo
// const myArray = [1, 2, 3, 4, 5];
// myArray.forEach(function (item) {});
// myArray.forEach((item) => {});