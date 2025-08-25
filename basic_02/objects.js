// singleton object

// object literal 
// Object.create  // this is singleton object

const mySym = Symbol('myKey1');


const jsUser = {
    name: 'John',
    "full name": 'John Doe',
    [mySym] : "myKey1",
    age: 30,
    location: 'ahmedabad',
    email : 'j@google.com',
    isLoggedIn: false,
    lastLoginDays: ['Monday', 'saturday']
}

// console.log(jsUser.email);
// console.log(jsUser['email']);
// console.log(jsUser["full name"])
// console.log(jsUser[mySym]) 
// console.log(typeof jsUser[mySym])

jsUser.email = 'jd@google.com'  // update
// Object.freeze(jsUser) // freeze the object - not allow to update, delete, add new property
jsUser.email = 'jayendra@google.com'  // update
// console.log(jsUser)  //;

jsUser.greeting = function() {
    console.log('hello jsUser')
}
jsUser.greetingTwo = function() {
    console.log(`hello jsUser, ${this.name}`)
}


console.log(jsUser.greeting())
console.log(jsUser.greetingTwo())