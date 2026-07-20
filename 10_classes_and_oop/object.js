// **** browser console ****
// const newHero = ["hulk","spiderman"]
// undefined
// newHero
// (2) ['hulk', 'spiderman']
// 0: "hulk"
// 1: "spiderman"
// length: 2      -- length property
// [[Prototype]]: Array(0)
// Default behavior of javascript is prototypal behavior
// which means if javascript does not found required it will serach for upper layer
// access parents grandparents great grandparents until it gets null value

// new keyword this keyword classes prototypal inheritance are all got through prototype


// everything in js is object but parent of object is none so that null
// object has all its own properties and others inherits object's properties


// is function a object ?
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


function createUser(username, score) {
    // here confusion can occur so use this keyword which sets the current context 
    this.username = username 
    this.score = score 
}

// can i inject my own functionality in any function as it is object , object has properties
// and property will hold my function
// can i declare my function 
// answer is YESS no problem at all  
createUser.prototype.increment = function () {
    score++;
}

const 