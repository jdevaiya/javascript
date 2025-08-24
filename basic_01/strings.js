const Name = "jayendra"
const repoCount = 50

// console.log(Name + repoCount + "value");

// console.log(`hello my name is ${Name} and my repo count is ${repoCount}`);

const gameName = new String('chess-sport')

// console.log(gameName[0]) // c   
// console.log(gameName.__proto__); //{}

// console.log(gameName.length); // 11
// console.log(gameName.toUpperCase()); // CHESS
// console.log(gameName.charAt(2)); // e
// console.log(gameName.indexOf('e')); // 2
const newString = gameName.substring(0,7)  
// console.log(newString); // chess-s

const anotherString = gameName.slice(0,5)
// console.log(anotherString); // chess

const newScript = "   hello world   "
// console.log(newScript); // "   hello world   "
// console.log(newScript.trim()); // "hello world"

const url = "https://www.youtube.com/watch?v=12345" 

// console.log(url.replace('?v=12345', '/live')) // https://www.youtube.com/watch/live
console.log(url.includes('youtube')) // true

console.log(gameName.split('-')) // [ 'chess', 'sport' ]


