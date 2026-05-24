// Primitive 

// 7 types : String, Number, Bigint, Boolean, Null, Undefined, Symbol
// JS is a dynamically typed language where we dont have to define the data type of the variable 
const score = 100 
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null 
let userEmail ;

const id = Symbol("123")
const anotherId = Symbol("123")

console.log(id === anotherId)

const bigNumber = 32465465488562356552379n


//Referential(Non Primitive)
// arrays, objects, functions


const heros = ["ironman", "captain america", "thor"]

let myObj = {
    name: "Pratik",
    age: 20
}


const myFunction = function(){
    console.log("Hello world");   
}


console.log(typeof bigNumber);