const name = "Pratik"
const repoCount = 50 

// console.log(name + repoCount + " Value") older way

// new way is using backticks(``) 
// this is called string interpolation 
// which is a feature that allows us to embed variables 

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)


const gameName = new String('pratik-ps-com')

// Using `new String()` creates a String object
// rather than a primitive string 
// and JS stores it in the key value pairs
// alongside properties like length

console.log(gameName[0])
console.log(gameName.__proto__)



console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(2))
console.log(gameName.indexOf('t'))


const newString = gameName.substring(0, 4)
console.log(newString)


const anotherString = gameName.slice(-8, 4)
console.log(anotherString)

const newStringOne = "    pratik   "
console.log(newStringOne)
console.log(newStringOne.trim())


const url = "https://pratik.com/pratik%20singh"

console.log(url.replace('%20', '-'));
console.log(url.includes('pratik'));


console.log(gameName.split('-')) // string convert to array on 
// the basis of parameter to separate the elements 