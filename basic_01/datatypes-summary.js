// # primitive datatypes summary
// 7 types of primitive datatypes in JavaScript :
// Number, String, Boolean, Null, Undefined, BigInt, Symbol

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
// console.log(id === anotherId); // false

// const  bigNumber = 1234567890123456789012345678901234567890n


// reference (non-primitive)

// Array,object,Function

const heros = ["shaktiman", "naagraj", "doga"]
let MyObj = {
    name: "john",
    age: 24,
}

const myFunction = function(){
    console.log("hello world");
    
}

// console.log(typeof anotherId);



//  +++++++++++++++++++++++++++++=

//  Stack (primitive), Heap (non-primitive)

let myYouTubeChannel = "technogamer"

let anotherName = myYouTubeChannel
anotherName = "chaiaurcode"
// console.log(anotherName);
// console.log(myYouTubeChannel)

let userOne={
    email: "user@google.com",
    upi: "user@upi"
}

let userTwo = userOne
userTwo.email = "jayendra@google.com"

console.log(userOne.email);
console.log(userTwo.email);
