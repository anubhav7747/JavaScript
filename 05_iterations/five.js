// const coding = ['js', 'css', 'html', 'cpp', 'go', 'java'];

// coding.forEach( function (item) {
//     console.log(item);
// } );

// coding.forEach( (item) => console.log(item));



// function printMe(item) {
//     console.log(item);
// }

// coding.forEach( printMe );



// coding.forEach( (item, index, arr) => console.log(item, index, arr) );



const myCoding = [
    {
        languageName: 'javascript',
        languageFileName: 'js',
    },
    {
        languageName: 'c++',
        languageFileName: 'cpp',
    },
    {
        languageName: 'css',
        languageFileName: 'css',
    },
];

myCoding.forEach( (item) => {
    console.log(item.languageFileName) 
} );