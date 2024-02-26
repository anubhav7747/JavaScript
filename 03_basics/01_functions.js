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

console.log(loginUserMessage());