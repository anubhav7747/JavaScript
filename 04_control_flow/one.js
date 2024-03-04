// if

// if (condition) {
    
// }

// if (true) {

// }

// will below work when above is true?
// no it won't work
// if (false) {

// }


// const isUserLoggedIn = true;

// if (isUserLoggedIn) {

// }


// <, >, <=, >=, ==, !=, ===, !==

// if ( 3 != 2 ) {

// }


// if (2 == "2") {
//     console.log("executed");    // executed
// }

// if (2 === "2") {
//     console.log("executed");    // does not executed
// }


// const temperature = 41;

// if (temperature === 41)
//     console.log("less than 50");
// else
//     console.log("greater than 50");

// console.log("executed");


// const score = 200;

// if ( score > 100 ) {
//     const power = "fly";
//     console.log(`User power: ${power}`);
// }
// console.log(`User power: ${power}`);


// const balance = 1000;
// if ( balance > 100 ) console.log(`balance: ${balance}`);

// if (balance < 500) {
//     console.log('less than 500');
// } else if (balance < 750) {
//     console.log('less than 750');
// } else if (balance < 950) {
//     console.log('less than 950');
// } else {
//     console.log('greater than 950');
// }



const userLoggedIn = true;
const debitCard = true;
const emailId = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

// if (userLoggedIn && debitCard && emailId) {
//     console.log('allow to buy a course');
// }

// if (userLoggedIn && debitCard && emailId && 3==3) {
//     console.log('allow to buy a course');
// }

// if (userLoggedIn && debitCard && emailId && 3==4) {
//     console.log('allow to buy a course');
// }

if (loggedInFromGoogle || loggedInFromEmail || true) {
    console.log("User logged in");
}