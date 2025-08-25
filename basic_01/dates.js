//  Dates

let myDate = new Date();
// console.log(myDate.toString()); // Full date string
// console.log(myDate.toDateString()); // Date portion only
// console.log(myDate.toISOString()); // ISO format
// console.log(myDate.toLocaleDateString()); // Localized date
// console.log(myDate.toLocaleString()); // Localized date and time
// console.log(myDate.toLocaleTimeString()); // Localized time

// console.log(typeof myDate); // "object"
// let myCreatedDate = new Date(2005, 6, 21); // jul 21, 2005
// let myCreatedDate = new Date("2005-07-21"); // ISO format
let myCreatedDate = new Date("07-21-2005"); // ISO format
// console.log(myCreatedDate.toLocaleString())

let myTimeStamp = Date.now(); // milliseconds since Jan 1, 1970
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime()); // milliseconds since Jan 1, 1970 for myCreatedDate
// console.log(Math.round(Date.now()/1000))

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth() + 1); // 0-11
// console.log(newDate.getDay()); // 

// `${newDate.getDate()} and the time`

newDate.toLocaleDateString('default',{
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
})
console.log(newDate);
