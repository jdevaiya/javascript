// ES6

class User{
    constructor(userName,email,password){
        this.userName = userName,
        this.email =  email,
        this.password =password
    }

    encryptPassword(){
        return `${this.password}abc`
    }

    changeUsername (){
        return `${this.userName.toUpperCase()}`
    }
}
const chai = new User("chai","chai@fb.com","123")

// console.log(chai.encryptPassword());
// console.log(chai.changeUsername());

//  behind the scene 

function user(userName,email,password){
    this.userName = userName,
        this.email =  email,
        this.password =password
}

user.prototype.encryptPassword =  function(){
    return `${this.password}abc`
}

user.prototype.changeUsername = function(){
    return `${this.userName.toUpperCase()}`
}

const tea = new user("chai","chai@fb.com","123")

console.log(tea.encryptPassword());
console.log(tea.changeUsername());