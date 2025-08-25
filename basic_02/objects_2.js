// const tinderUser = new Object();
const tinderUser = {}

tinderUser.id = '123abc'
tinderUser.name = 'jayendra'
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: 'jd@gmail.com',
    fullname: {
        userfullname:{
            firstname: 'jayendra',
            lastname: 'devaiya'
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: 'a', 2: 'b'}
const obj2 = {3: 'c', 4: 'd'}
let obj4 = {5: 'e', 6: 'f'}

// const obj3 = {obj1,obj2}
// obj3 = Object.assign({},obj1,obj2,obj4)  // merge objects

const obj3 = {...obj1,...obj2,...obj4}  // spread operator
// console.log(obj3);


const users = [
    {
        id:1,
        email: 'h@gmail.com',
    },
    {
        id:1,
        email: 'h@gmail.com',
    },
    {
        id:1,
        email: 'h@gmail.com',
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('name'));


