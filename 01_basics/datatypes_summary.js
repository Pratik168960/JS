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





//++++++++++++++++++++++++++++++++++++++++++++++++++

//stack(primitvive), Heap(non-primitive)


let myName = "pratiksingh"

let newName = myName
newName = "singhpratik"
console.log(myName)
console.log(newName)


let userOne = {
    email: "user@gmail.com",
    upi: "user@ybl"
}


let userTwo = userOne

userTwo.email = "pratik@gmail.com"


console.log(userOne.email);
console.log(userTwo.email);

