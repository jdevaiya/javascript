const UserEmail = []
// if(UserEmail) {
//     console.log("got user email");
// }else{
//     console.log("Don't have email");
// }

//  falsy values = false, 0, -0, bigint 0n, "", null, undefine, NaN
//  truthy values ="0", 'false', " ", [], {}, function(){}

// if(UserEmail.length === 0){
//     console.log("array is empty");
    
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty")
}

//  Nullish coalescing operator (??) : null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ??10
// val1 = undefined ??15
val1 = null ?? 10 ?? 30

// console.log(val1);


// Terniary Operator

//  condition ? true:false

const iceTeaPrice = 70
iceTeaPrice >=80 ? console.log("less than 80") : console.log("more than 80");

