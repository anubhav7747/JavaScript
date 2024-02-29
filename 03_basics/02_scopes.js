// let a = 10;
// const b = 10;
// var c = 10;

// console.log(a, b, c);


if (true) {
    let a = 10;
    const b = 10;
    var c = 10;
}

// console.log(a);
// console.log(b);
// console.log(c);



function one(){
    const username = "anubhav";

    function two(){
        const website = "youtube.com";
        console.log(username);
    }

    // console.log(website);

    // two();
}

// one();

if (true) {
    const username = "anubhav";
    if (username === "anubhav") {
        const website = " youtube.com";
        // console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);



// ++++++++++++++++++++++++++++ interesting ++++++++++++++++++++++++++++

addOne(5);
function addOne(num){
    return num + 1;
}


addTwo(5);  // Cannot access 'addTwo' before initialization
const addTwo = function(num){
    return num + 2;
}