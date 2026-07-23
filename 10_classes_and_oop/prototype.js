// PROTOTYPES AND INHERITANCE IN JAVASCRIPT

// Goal: Create a global method to find the "true length" of a string.
// We want a reusable method that removes extra spaces at the ends of a string
// and returns the actual character count.
// Example: "pratik     " should have a true length of 6, not 11.
// let myName = "pratik"
// console.log(myName.length())
// console.log(myName.trueLength())
// i know that some properties are by default as it is string
// but if myName = "pratik     " - 5 extra spaces
// it will result string length as 11
// so i want the result should give the true length and also remove the extra spaces
// and return
// we want to build this method so we can use it anywhere with any string

// --- 1. UNDERSTANDING OBJECT PROTOTYPES ---

let myHeroes = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    // method
    getSpiderPower: /*we can directly inject a fxn*/function () {
        console.log(`Spidy power is ${this.spiderman}`)
    }
}

// can we do something like
// heroPower.pratik() // what this will result in

// browser console
// const testObj = {username: "pratik"}
// undefined
// testObj
// {username: 'pratik}
// does this contain any fxn named pratik there is username only but can i inject myself

// i want whenever object gets declared the base should be declared in it
// if we inject some superpower in object so
// function array string passes thru object so they should get the power

// In JavaScript, almost everything (Arrays, Strings, Functions) is an Object at its core.
// If we inject a property or method into the top-level `Object.prototype`,
// EVERYTHING else will inherit it and have access to it.
//factory function
Object.prototype.pratik = function () {
    console.log(`pratik is present in all objects`)
}
heroPower.pratik()

// as we saw function array string should get the powers of object and
// myHeroes is our array so does it got the powers ? let's see

myHeroes.pratik()
// we have accessed the top level hierarchy and created a property which further accessed from others


// --- 2. UNDERSTANDING SPECIFIC PROTOTYPES ---
// now we have to test if we give power to the array so will it by default go to the object ?
Array.prototype.heyPratik = function () {
    console.log(`Pratik says Hello`)
}
myHeroes.heyPratik(); // Works, because myHeroes is an Array
//heroPower.heyPratik() // output an error this does not have access to function
// Why? Inheritance flows down, not up. Objects do not inherit properties from Arrays.



// --- 3. PROTOTYPAL INHERITANCE (Linking Objects) ---
// INHERITANCE

const User = {
    name: "user1",
    email: "user1@gmail.com"
}
const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS Assignment',
    fulltime: true,

    // By default, objects do not share information with each other.
    // If we want objects to share properties, we use prototypal inheritance.

    // as every object is unique instance so they do not share among themselves
    // have different unique properties , all have default properties of object

    // if there is some situation in which 2 objects to share some information and getting them linked
    // so for this we can use prototype

    // but in past there was a property __proto__

    __proto__: TeachingSupport
    // prototype to refer TeachingSupport 
    // we can have this outside of this scope 
}

Teacher.__proto__ = User // this __proto__ approach is outdated

// this is what we called prototypal inheritance


// modern syntax 
Object.setPrototypeOf(TeachingSupport, Teacher)

// --- 4. SOLVING OUR INITIAL GOAL ---
// Now we can build our custom string method and inject it into `String.prototype`
// so that ANY string in our code can use it

let anotherUsername = "User2     "

String.prototype.trueLength = function () {
    // 'this' refers to the string that is calling the method
    console.log(`${this}`) 
    console.log(`True length is :${this.trim().length}`)
}

anotherUsername.trueLength()  // --> 5
"pratik".trueLength()         // --> 6
"tea".trueLength()            // --> 3