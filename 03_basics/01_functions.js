function sayMyName () {
    console.log("A");
    console.log("N");
    console.log("U");
    console.log("B");
    console.log("H");
    console.log("A");
    console.log("V");
}

// function reference
// sayMyName;

// function execution
// sayMyName();



// function add2Numbers (a, b) {
//     console.log(a + b);
// }

// add2Numbers(10, 20);

function add2Numbers (a, b) {
    return a+b;
}

const result = add2Numbers(10, 20);
// console.log("Result: ", result);

// function loginUserMessage(username) {
//     return `${username} just logged in`;
// }

// const loginUser = loginUserMessage("anubhav");
// console.log(loginUser); // anubhav just logged in
// const loginUser = loginUserMessage();
// console.log(loginUser); // undefined just logged in


function loginUserMessage(username="Mandalorian") {
    // if (username === undefined) {
    //     console.log("Please enter a username");
    //     return;
    // }
    
    // better way to write
    if (!username) {
        console.log("Please enter a username");
        return;
    }

    return `${username} just logged in`;
}

// console.log(loginUserMessage());
// console.log(loginUserMessage('anubhav'));



// function calculateCartPrice (num1) {
//     return num1;
// }


// '...' acts as both rest and spread operator. It defers in name when and where used it is used.


// function calculateCartPrice (...num1) {
//     return num1;    // [ 200, 400, 600 ]
// }

// console.log(calculateCartPrice(200, 400, 600, 700));


// function calculateCartPrice (val1, val2, ...num1) {
//     return num1;    // [ 600, 700 ]
// }

// console.log(calculateCartPrice(200, 400, 600, 700));


const user = {
    username: 'anubhav',
    price: 100,
};

const user1 = {
    username: 'anubhav',
    prices: 100,
};

function handleObject(anyObject) {
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleObject(user);
// handleObject(user1);
// handleObject({
//     username: 'anubhav',
//     price: 200,
// });


const myNewArray = [ 200, 300, 400, 500 ];

function returnSecondValue(getArray){
    return getArray[1];
}

console.log(returnSecondValue(myNewArray));

console.log(returnSecondValue([ 200, 500, 700 ]));
