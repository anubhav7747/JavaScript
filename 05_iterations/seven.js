const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newMyNum = myNum.map((num) => num + 10);
// console.log(newMyNum);

// const newNums = myNum.map().map().filter;

const newNums = myNum
  .map((num) => num * 10)
  .map((num) => num + 10)
  .filter((num) => num <= 80)
  .filter((num) => num >= 40);
console.log(newNums);