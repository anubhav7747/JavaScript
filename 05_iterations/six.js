const coding = ["js", "css", "html", "cpp", "go", "java"];

// coding.forEach( (item) => {
//     console.log(item);
// } );

// console.log();

// const value = coding.forEach( (item) => {
//     // console.log(item);
//     return item;
// } )

// console.log(value);

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const nums = num.filter( (item) => item > 5 );
// console.log(nums);

// const newNums = num.filter((item) => {
//   return item > 5;
// });
// console.log(newNums);

// const newNums = [];
// num.forEach( (num) => {
//     if (num > 5)
//         newNums.push(num);
// });

// console.log(newNums);

const books = [
  {
    title: "The Shiva Trilogy",
    genre: "Fiction",
    publish: "2010",
    edition: "2020",
  },
  {
    title: "The Ram Chandra Series",
    genre: "Fiction",
    publish: "2015",
    edition: "2021",
  },
  {
    title: "The Shiva Trilogy 2",
    genre: "Non-Fiction",
    publish: "2017",
    edition: "2020",
  },
  {
    title: "The Bharat Series",
    genre: "Fiction",
    publish: "2008",
    edition: "2019",
  },
  {
    title: "The Shiva Trilogy 3",
    genre: "History",
    publish: "2018",
    edition: "2022",
  },
  {
    title: "The Bharat Series 2",
    genre: "Non-Fiction",
    publish: "2009",
    edition: "2023",
  },
  {
    title: "The Bharat Series 3",
    genre: "Science",
    publish: "2011",
    edition: "2023",
  },
];

let userBooks = books.filter((book) => {
  return book.genre === "Fiction";
});

userBooks = books.filter((book) => {
  return book.genre === "Non-Fiction";
});

userBooks = books.filter((book) => {
  return book.genre === "Science";
});

userBooks = books.filter((book) => {
  return book.publish <= "2010";
});

userBooks = books.filter((book) => {
    return book.genre === "Non-Fiction" && book.publish >= "2010";
});

console.log(userBooks);
