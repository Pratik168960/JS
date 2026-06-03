// for of

// these are array specific loops

const arr = [1, 2, 3, 4, 5]
for (const num of arr) {
    console.log(num)
}





const greetings = "Hello World!"
for (const greet of greetings) {
    console.log(`Each char is ${greet}`)
}






// maps
// Map is an object in JS which holds key value pairs 
// remembers the insertion order of the keys 
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('FR', "France")
map.set('IN', "India") // this will not get into the map 
// as there cannot be any duplicate values 
console.log(map)






// this will return array
for (const key of map) {
    console.log(key)
}

// if we want the key value pairs we have to use
// sq brackets[] around the iterators
for (const [key, value] of map) {
    console.log(key, ':-', value)
}








const myObject = {
    'game1': 'NFS',
    'game2': 'SpiderMan'
}
// for (const [key, value] of myObject) {
//     console.log(key, ':-', value)
// }     // myObject is not iterable




