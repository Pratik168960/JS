// JS is all about 2 things
// 1. objects
// 2. events


// two ways to decclare an object
// 1. literals
// 2. constructor

// singleton : if we create from constructor singleton object
// gets created that it is only one of its kind
// if we use another way it is not singleton
// it has multiple instances
// literals : no singleton
// constructor : always singleton
// Object.create --> constructor method here singleton get created




// object literals
// object declare

// symbol is a primitive datatype it can be asked to add the key in the object 
const mySym = Symbol("key1")



const JsUser = {
    name: "Pratik",            // by default name is treated as string
    "full name": "Pratik Singh",
    [mySym]: "mykey1",         // correct syntax to use key.
                               //  not this mySym directly
    age: 20,
    location: "Pune",
    email: "pratik@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// object access 
console.log(JsUser.email)
console.log(JsUser["email"])
// console.log(JsUser.full name)  --> you cannot access the full nae use .
console.log(JsUser["full name"])
// console.log(JsUser.mySym)       -->not used as symbol 
// console.log(typeof JsUser.mySym)  --> string 
console.log(JsUser[mySym])


JsUser.email = "pratik@google.com"     // value change
// if want to lock the value   
// Object.freeze(JsUser)
JsUser.email = "pratik@microsoft.com"     // value change will not happen doesn't propogate
console.log(JsUser)



// function
// JS no discrimination to functions we can treat them as variables

JsUser.greeting = function() {
    console.log("Hello JS user")
}
JsUser.greetingTwo = function() {
    console.log(`Hello JS user, ${this.name}`)
}

console.log(JsUser.greeting)       // [Function (anonymous)]
// function is not executed only reference is returned

console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())

