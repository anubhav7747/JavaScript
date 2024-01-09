const marvelHeroes = [ "Thor", "Ironman", "Captain America" ];
const dcHeroes = [ "superman", "flash", "batman" ];

// marvelHeroes.push(dcHeroes);

// console.log(marvelHeroes);  // [ "Thor", "Ironman", "Captain America", [ "superman", "flash", "batman" ] ]
// console.log(marvelHeroes[3][1]);    // flash

// marvelHeroes.concat(dcHeroes);
// console.log(marvelHeroes);  // [ "Thor", "Ironman", "Captain America" ]

// const allHeroes = marvelHeroes.concat(dcHeroes);
// console.log(allHeroes);  // [ "Thor", "Ironman", "Captain America", "superman", "flash", "batman" ]


// const allNewHeroes = [ ...marvelHeroes, ...dcHeroes];
// console.log(allNewHeroes);  // [ "Thor", "Ironman", "Captain America", "superman", "flash", "batman" ]

// const anotherArray = [ 1, 2, 3, [ 4, 5, 6 ], 7,  [8, 9, [ 10, 11 ] ] ];
// const realAnotherArray = anotherArray.flat(Infinity);
// console.log(realAnotherArray);  // [ 1, 2, 3, 4,  5, 6, 7, 8, 9, 10, 11 ]


console.log(Array.isArray("Anubhav"))   // false
console.log(Array.from("Anubhav"))  // ['A', 'n', 'u', 'b', 'h','a', 'v']
console.log(Array.from({name: "Anubhav"}))  // []


let srcore1 = 100, srcore2=200, score3 = 300;
console.log(Array.of(srcore1, srcore2, score3)); // [100, 200, 300]