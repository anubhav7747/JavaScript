// Dates

let myDate = new Date();
// console.log(myDate);    // 2023-12-26T17:24:29.778Z
// console.log(myDate.toString()); // Tue Dec 26 2023 22:54:29 GMT+0530 (India Standard Time)
// console.log(myDate.toISOString());  // 2023-12-26T17:24:29.778Z
// console.log(myDate.toLocaleDateString());   // 26/12/2023
// console.log(myDate.toLocaleString());   // 26/12/2023, 10:54:29 pm
// console.log(myDate.toJSON());   // 2023-12-26T17:26:07.508Z

// console.log(typeof myDate); // object
// console.log(myDate.toDateString()); // Tue Dec 26 2023

let myCreateDate = new Date(2023, 14, 14);
// console.log(myCreateDate.toDateString());   // Mon Mar 14 2024

// myCreateDate = new Date(2023, 10, 14);
// console.log(myCreateDate.toLocaleString());   // 14/11/2023, 12:00:00 am

// myCreateDate = new Date(2023, 10, 14, 5, 3);
// console.log(myCreateDate.toLocaleString());   // 14/11/2023, 5:03:00 am

// myCreateDate = new Date(2023, 10, 14, 15, 3);
// console.log(myCreateDate.toLocaleString());   // 14/11/2023, 3:03:00 pm

// myCreateDate = new Date("2023-11-14");   // YYYY-MM-DD
// console.log(myCreateDate.toLocaleString());   // 14/11/2023, 5:30:00 pm

// myCreateDate = new Date("11-14-2023");  // MM-DD-YYYY
// console.log(myCreateDate.toLocaleString()); // 14/11/2023, 12:00:00 am


let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreateDate.getTime());

// console.log(Math.floor(Date.now()/1000));


let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth());    // 11
console.log(newDate.getFullYear()); // 2023
console.log(newDate.getDay());  // 2

// `{newDate.getDay()} and the time `


newDate.toLocaleString('default', {
    weekday: "long"
});