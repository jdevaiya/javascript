

function sayMyName(){
    console.log("j");
    console.log("a");
    console.log("y");
    console.log("e");
    console.log("n");
    console.log("d");
    console.log("r");
    console.log("a");
}
// sayMyName()


// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }
// addTwoNumbers(3,8)

function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result
    return number1 + number2
}
const result = addTwoNumbers(3,8)

// console.log("Result :",result);

function loginUserMessage(username = "john"){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `Hello ${username}, just logged in`
}

// console.log(loginUserMessage("jayendra"))
// console.log(loginUserMessage());

function calculateCartPrice(...num1){
    return num1
}

// console.log(calculateCartPrice(200,300,400,500,600));


const user = {
    username : "jayendra",
    price :199
}

function handleObject(anyObject){
    // console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleObject(user)
handleObject({
    username : "john",
    price : 899
}) 

const myNewArray = [200, 300, 400, 500]

function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,400,600,800]));