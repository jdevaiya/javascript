function multipleBy5(num){
    this.num = num
    return num*5
}
// multipleBy5.power = 2
// console.log(multipleBy5(3))
// console.log(multipleBy5.power);
// console.log(multipleBy5.prototype);

function createUser(username,score){
    this.username = username
    this.score = score
}

createUser.prototype.increment = function(){
    this.score++
}
createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`);
    
}
const chai = new createUser("chai",20)
const tea = new createUser("tea", 30)

tea.printMe()