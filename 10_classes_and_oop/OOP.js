// In JavaScript, an object is a basic unit used to store collections of data
const user = {
    username: "pratik",
    loginCount: 8,
    signedIn: true,
    
    getUserDetails: function () {
        console.log("Got user details from db")
        console.log(`Username: ${this.username}`) // this keyword refers to current context 
        console.log(this)
    }
}

console.log(user.username)
user.getUserDetails()


console.log(this) // this in global context
// gives {}empty parenthesis empty object there is nothing in current global context
// but the global context changes

// and when we try this in browser console
// it gives 'window' object which is a global object

// if we want a user2 so we have to make the user again and again is tedious 
// make a structure of db
// for avoiding this we have constructor functions


// Constructor function examples
// const promiseOne = new Promise()
// const date = new Date()

// this new keyword is constructor function
// it allows you to make multiple instances from one object literal
// used to make new context


function User(username, loginCount, isLoggedIn) {
    this.username = username // LHS: variable on the object | RHS: value passed in
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    this.greetings = function () {
        console.log(`Welcome ${this.username}`)
    }
    return this 
    // We don't actually need to write 'return this'
    // When using the 'new' keyword, returning 'this' happens implicitly (automatically)

}

// ❌ WITHOUT the 'new' keyword:
// const userOne = User("pratik", 12, true)
// const userTwo = User("Javascript", 11, false)
// console.log(userOne) // Doing this overrides the values globally and causes bugs!


// ✅ WITH the 'new' keyword:
// constructor function always gives a new instance a new copy 
// anything we do with that copy does not affect the original
const userOne = new User("pratik", 12, true)
const userTwo = new User("Javascript", 11, false)
console.log(userOne)
console.log(userOne.constructor) // Returns the reference to the User function itself
console.log(userTwo)
 
// NEW keyword
// at first it creates an empty object which is called instance
// as we saw in node case there was an empty parethesis when we tried this keyword


// Step 1: A new empty object is created (called an instance)
// Step 2: The constructor function is called because of the 'new' keyword
// Step 3: The arguments get injected into the 'this' keyword (binding 'this' to the new object)
// Step 4: We get the populated object returned to us

