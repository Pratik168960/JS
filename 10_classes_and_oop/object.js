// UNDERSTANDING PROTOTYPES, `this`, AND THE `new` KEYWORD IN JAVASCRIPT

// **** browser console ****
// const newHero = ["hulk","spiderman"]
// undefined
// newHero
// (2) ['hulk', 'spiderman']
// 0: "hulk"
// 1: "spiderman"
// length: 2      -- length property
// [[Prototype]]: Array(0)

// 1. PROTOTYPAL BEHAVIOR
// Default behavior of javascript is prototypal behavior
// which means if javascript does not found required it will serach for upper layer
// access parents grandparents great grandparents until it gets null value

// new keyword this keyword classes prototypal inheritance are all got through prototype


// everything in js is object but parent of object is none so that null
// object has all its own properties and others inherits object's properties


// 2. ARE FUNCTIONS OBJECTS?
// Yes! In JavaScript, functions are technically objects. 
// Because they are objects, we can attach our own properties to them.
function multiplyBy5(num) {
    return num * 5
}

multiplyBy5.power = 2 
// . access is applicable with object so is it object ?
console.log(multiplyBy5(5))      // --> 25
console.log(multiplyBy5.power)   // --> 2
console.log(multiplyBy5.prototype) // --> {} by default some context are set
// .prototype gives properties also with methods
// technically function also refers to object



// 3. CONSTRUCTOR FUNCTIONS AND THE `this` KEYWORD
function createUser(username, score) {
    // here confusion can occur so use this keyword which sets the current context 
    this.username = username 
    this.score = score 
}

// can i inject my own functionality in any function as it is object , object has properties
// and property will hold my function
// can i declare my function
// answer is YESS no problem at all  
// Since functions are objects, we can inject our own custom methods into its prototype!
createUser.prototype.increment = function () {
    // score++;
    this.score++;
}


// increment injected through prototype but the problem is whose score to increase
// how will increment identify which to increase
// because it does not have context it does not understand how to increase which value
// which value has called context is much required to be known
// so we will use this keyword


// for example :
// Agar aapko mummy papa dono ne eksath aavj lagai toh aapko identify krna hoga
// kiske pas jana hai toh jisne bhi aavj di uske pas jana hai
// jis = this (jis ka mtlb this)


createUser.prototype.printMe = function () {
    console.log(`score is ${this.score}`) //jisne score pucchha hai uska score batado  
}

// const user1 = createUser("user1", 25)
// const user2 = createUser("user2", 20)


// myArray.prototype.map()
// we don't use methods on array like this we dont need to use prototype again and again
// javascript gives us the syntactical sugar

// we can inject directly 
// user1.printMe() // now a problem occurs cannot read properties of undefined (reading 'printMe')
// properties are injected BUT when we transferred values from function to user1 we didn't told
// that some additional properties are added we've to tell and it is done by NEW keyword


// 4. THE `new` KEYWORD
const user1 = new createUser("user1", 25)
const user2 = new createUser("user2", 20)

user1.printMe() // output --> score is 25
/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new 
JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype 
property of the constructor function. This means that it has access to properties
and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified 
arguments and this is bound to the newly created object. If no explicit return 
value is specified from the constructor, JavaScript assumes this, the newly 
created object, to be the intended return value.

The new object is returned: After the constructor function has been called, 
if it doesn't return a non-primitive value (object, array, function, etc.), 
the newly created object is returned.

*/


