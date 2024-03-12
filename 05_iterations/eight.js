// mdn
// const arr = [1, 2, 3, 4];

// const initialValue = 0;
// const sumWithInitialValue = arr.reduce(
//   (accumulator, currValue) => accumulator + currValue,
//   initialValue
// );

// console.log(sumWithInitialValue);

const myNum = [1, 2, 3, 4];

// const myTotal = myNum.reduce(function (acc, currVal) {
//   console.log(`acc: ${acc} and currVal: ${currVal}`);
//   return acc + currVal;
// }, 0);

const myTotal = myNum.reduce((acc, currVal) => acc + currVal, 0);
console.log(myTotal);

const shoppingCart = [
  {
    itemName: "js",
    price: 2999,
  },
  {
    itemName: "python",
    price: 2999,
  },
  {
    itemName: "mobile dev",
    price: 5999,
  },
  {
    itemName: "data science",
    price: 7999,
  },
  {
    itemName: "java",
    price: 999,
  },
  {
    itemName: "C++",
    price: 999,
  },
];

const totalPrice = shoppingCart.reduce((acc, item) => acc + item.price, 0);
console.log(totalPrice);