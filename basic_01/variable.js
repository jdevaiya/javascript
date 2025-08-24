const accountId =1445532
let accountEmail = "jayendra@google.com"
var accountPassword = "Jay@12345"
accountCity = "Bangalore"
let accountState; // undefined

// accountId = 2 // not allowed in js 
accountEmail = "jd@gmail.com" 
accountPassword = "Jay@54321" 
accountCity = "Mumbai" 

console.table([accountId,accountEmail, accountPassword, accountCity,accountState])

/*
prefer not to use var
because of issue in block scope and functional scope
use let and const
*/