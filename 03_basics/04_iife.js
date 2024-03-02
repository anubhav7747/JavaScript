// immediately invoked function expression (IIFE)
// An IIFE (Immediately Invoked Function Expression) in JavaScript is a function that is defined and executed immediately after its creation. It is often used to create a private scope for variables and avoid polluting the global scope.


// named IIFE
(function chai() {
    console.log("DB Connected");
})();


// unnamed IIFE
( () => {
    console.log('DB Connected two');
} )();


// IIFE with parameters passed
( (database) => {
    console.log(`DB connected is ${database}`);
} )('MONGODB');


// CALL STACK
// BROWSER -> INSPECT -> SOURCES -> SNIPPETS -> chaiaurcode.js (new snippet) + save file + add breakpoints + run + keep an eye on the "Call Stack".

// function one(){
//     console.log('one');
// }
// function two() {
//     console.log('two');
// }
// function three() {
//     console.log('three');
// }

// one();
// two();
// three();

// function one(){
//     console.log('one');
//     two();
// }
// function two() {
//     console.log('two');
//     three();
// }
// function three() {
//     console.log('three');
// }

// one();
// two();
// three();