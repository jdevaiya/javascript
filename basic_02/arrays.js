// arrays 

const myArr = [0, 1, 2, 3, 4, 5]
const myheros = ['superman', 'batman', 'wonderwoman']

const arr2 = new Array(1, 2, 3, 4, 5)
// console.log(myArr[2]) // 2;

//  array methods

// myArr.push(6) // add to end
// myArr.push(7) // add to end
// myArr.pop() // remove from end

// myArr.unshift(90) // add to start
// myArr.shift() // remove from start

// console.log(myArr.includes(5)) // true;
// console.log(myArr.indexOf(5)) // 5;
const newArr = myArr.join()
// console.log(myArr);
// console.log(newArr);

// console.log(myArr)


// slice, splice

// console.log("A", myArr)

const myn1 = myArr.slice(1,3)

// console.log(myn1);
// console.log("B ", myArr);


const myn2 = myArr.splice(1,3)
// console.log("C ",myArr);

// console.log(myn2);

const marvel_heros = ['thor', 'ironman', 'spiderman']
const dc_heros = ['superman', 'flash', 'batman']

// marvel_heros.push(dc_heros)
// console.log(marvel_heros)
// console.log(marvel_heros[3][1]);

// const allHero =  marvel_heros.concat(dc_heros)
// console.log(allHero);

const all_new_heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_heros);

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array)

// console.log(Array.isArray("hitesh"))
// console.log(Array.from("hitesh"))
// console.log(Array.from({name: "hitesh"})) // interesting

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1, score2, score3))
