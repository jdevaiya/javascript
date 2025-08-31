const user = {
    username :"jayendra",
    loginCount:8,
    signedIn :true,

    getUserDetails:function(){
        // console.log("got user details form database");
        // console.log(`username :${this.username}`);
        console.log(this);
        
    }
}


// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);



function User(username,loginCount,isLoggedIn){
    this.username= username,
    this.isLoggedCount = loginCount,
    this.isLoggedIn = isLoggedIn,

    this.greeting = function(){
        console.log(`welcome ${this.username}`);
        
    }
    return this
}
const userOne = new User("jayendra",12,true)
const userTwe = new User("devang",15,false)
console.log(userOne);
console.log(userTwe);
