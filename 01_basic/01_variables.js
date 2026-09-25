const accountId = 458127    // immutuable = change nhi ho skta hai
let accountPassword = "123456"  // mutuable = change hoga
var accountEmail = "ayush@google.com"  // mutuable = change hoga
/* prefer not to use var
  because of issue in block scope and function scope, scope means {}   */

accountCity = "Delhi"  // change hoga
let accountState; // you empty the any variable so, output is undefined

// accountId = 222 not allowed // 

accountEmail = "kumar@google.com"
accountPassword = "5896321"
accountCity = "Jaipur"

console.log(accountId)

console.table([accountId, accountPassword, accountEmail, accountCity, accountState])