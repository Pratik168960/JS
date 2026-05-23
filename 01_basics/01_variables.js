const accountId = 14323
let accountEmail = "pratik@gmail.com"
var accountPassword = "12345"
accountCity = "Pune"
let accountState ; 

// accountId = 2 // not allowed 

accountEmail = "pat@gmail.com"
accountPassword = "456"
accountCity = "Bangalore"

/* preferred not to use var 
beacuse of issue in block scope and functional scope */

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

