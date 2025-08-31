

const promiseOne = new Promise(function(resolve, reject){
    // Do an async task
    // Db calls, cryptography, network
    setTimeout(function(){
        // console.log("Async task is complete");
        resolve()
    },1000)

})

promiseOne.then(function(){
    // console.log("promise consumed");
    
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        // console.log("Async task 2");
        resolve()
    },1000)

}).then(function () {
    // console.log("Async 2 resolved");
})

const promiseThree = new Promise(function(resolve, reject)  {
    setTimeout(function (){
        resolve({username:"chai",email : "jayendradevaiya@gmail.com"})
    },1000)
})

promiseThree.then(function(user){
    // console.log(user);
    
})

const promiseFour =new Promise((resolve, reject) => {
    setTimeout(()=>{
        let error = true
        if(!error){
            resolve({username : "jayendra",password : "210780"})
        }else{
            reject("ERROR: Something went wrong")
        }
    },1000)
})

promiseFour.then((user) => {
    console.log(user);
    return user.username
    
}).then((username) =>{
    // console.log(username);

}).catch(function(error) {
    // console.log(error);
    
}).finally(function(){
    // console.log("your promise is resolved or rejected");
})

const promiseFive = new Promise((resolve, reject) => {
    setTimeout(()=>{
        let error = true
        if(!error){
            resolve({username : "javascript",password : "210780"})
        }else{
            reject("ERROR: js went wrong")
        }
    },1000)
})

async function consumePromiseFive() {
    try {
        const response = await promiseFive
        // console.log(response);
    } catch (error) {
        // console.log(error);
        
    }
}

consumePromiseFive()

// async function getAllUser() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
        
//         const data =await response.json()
//         console.log(data);
    
//     } catch (error) {
//         console.log("E:",error);
        
//     }
// }
// getAllUser()

fetch('https://api.github.com/users/jdevaiya')
.then((response) =>{
    return response.json()
})
.then((data)=>{
    console.log(data);
    
})
.catch((error) => console.log(error))