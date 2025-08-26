const user = {
    username: 'JohnDoe',
    price : 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
        
    }

}

// user.welcomeMessage()
// user.username = "jayendra"
// user.welcomeMessage()

// console.log(this)

// function one(){
//     let username = "jayendra"
//     console.log(this.username);
// }

// one()
// const chai = function(){
//     let username = "jayendra"
//     console.log(this.username);
// }

// chai()

const chai =() => {
    let username = "jayendra"
    console.log(this);
}
// chai()

// const addTwo = (num1,num2) =>{
//     return num1 + num2
// } 

// const addTwo = (num1,num2) => num1 + num2
// const addTwo = (num1,num2) => (num1 + num2)  // most use in react & real world
const addTwo = (num1,num2) => ({username : "jayendra"})
// console.log(addTwo(3,4));

const myArray = [1,2,3,4,5]

// myArray.forEach()