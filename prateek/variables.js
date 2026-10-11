const accountId = 123433;
let accountEmail = "prateekgunair1@gmail.com";
var accountPassword = "12345";
accountCity = "Jaipur";
let accountstate

// account = 2 // not allowed

accountEmail = "prateek@gmail.com";
accountPassword = "22222";
accountCity = "MP";

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountstate]);
