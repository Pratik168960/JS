// MODERN ES6 CLASSES
// whole js we use is of ES6

class User {
// The constructor runs automatically when we use the 'new' keyword
    constructor(username, email, password) {
        this.username = username
        this.email = email 
        this.password = password
    }
    // we don't have to write constructor always

// Method to simulate encrypting a password
    encyrptPassword() {
        return `${this.password}abc`
    }

// Method to change the username to uppercase
    changeUsername() {
        return `${this.username.toUpperCase()}`
    }

}

// Creating a new user using the class
const user1 = new User("user1", "user1@gamil.com", "123")
console.log(user1.encyrptPassword())
console.log(user1.changeUsername())





// BEHIND THE SCENES (ES5 Prototypes)
// This is exactly what the ES6 class is doing under the hood!
function UserFunction(username, email, password) {
    this.username = username
    this.email = email
    this.password = password
}

// We attach methods to the prototype so they are shared across all instances
UserFunction.prototype.encyrptPassword = function () {
    return `${this.password}abc`
}

UserFunction.prototype.changeUsername = function () {
    return `${this.username.toUpperCase}`
}


// Creating a new user using the constructor function
const user2 = new UserFunction("user2", "user2@gamil.com", "123")
console.log(user2.encyrptPassword())
console.log(user2.changeUsername())