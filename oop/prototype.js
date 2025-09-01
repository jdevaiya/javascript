// let myName = "jayendra       "
// let mychannel = "jd       "

// console.log(myName.truelength);


let myHero = ["thor","spiderman"] 

let heroPower = {
    thor: "hammer",
    spiderman : "sling",

    getSpiderPower :function(){
        // console.log(`Spidy power is ${this.spiderman}`);
    }
}



Object.prototype.hitesh = function(){
    // console.log(`hitesh is present in all objects`);
    
}

Array.prototype.heyHitesh = function(){
    // console.log(`Hitesh says hello`);
    
}

// heroPower.hitesh()
// myHero.heyHitesh()
// heroPower.heyHitesh()


//  inheritance 

const User = {
    nam:"chai",
    email:"chai@google.com"
}
const Teacher = {
    makeVideo : true
}

const TeachingSupport = {
    isAvalable: false
}

const TASupport = {
    makeAssignment : 'js assignment',
    fullTime : true,
    // __proto__ : TeachingSupportS 
}

Teacher.__proto__ = User

//  modern syntax 

Object.setPrototypeOf(TeachingSupport,Teacher)


let anotherUsername = " jayendra      "
String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is :${this.trim().length}`);
}

anotherUsername.trueLength()
"hitesh             ".trueLength()
"iceTea".trueLength()