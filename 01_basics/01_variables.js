const accountId = 14453;
let accountEmail = "anubhav@mmmut.ac";
var accountPassword = "123456";
accountCity = "Jaipur";
let accountState;

// accountId = 2;   // cannot be changed
console.log(accountId);

accountEmail = "anubhav@mmmut";
accountPassword = "1234";
accountCity = "Unnao";

/*
Prefer not to use var because of issue in block scope and functional scope
*/

console.table([accountEmail, accountPassword, accountCity, accountState]);