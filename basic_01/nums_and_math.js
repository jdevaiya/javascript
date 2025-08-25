const score = 400 
// console.log(score);

const balance = new Number(100)
// console.log(balance); 

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const otherNumber = 119.8966

// console.log(otherNumber.toPrecision(3));

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN')); // 10,00,000
// console.log(hundreds.toLocaleString('de-DE')); // 1.000.000

// +++++++++++++++++++++++++Math ++++++++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-100));
// console.log(Math.round(4.499));
// console.log(Math.ceil(4.001));
// console.log(Math.floor(4.999));
// console.log(Math.min(4,1,5,6,77,-1));
// console.log(Math.max(4,1,5,6,77,-1));
// console.log((Math.random()*10)+1); // 0 - 0.999999

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max-min +1))+min); // 10 - 20