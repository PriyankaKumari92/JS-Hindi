const accountId = 435567
let accountEmail = 'pksing@hmail.com'
var accountPassword = '4428'
accountCity = 'Varanasi'

//accountId = 2   // not allowed due to const value
//console.log(accountId);

accountEmail = "hctest@gmail.com"
accountPassword = "45678"
accountCity = "Delhi"

let accounState;


/*
prefer not to use var bcz issue on block scope and functional scope
*/
console.table([accountId, accountEmail, accountPassword, accountCity, accounState])
