
// GETTERS AND SETTERS (ES5 Function Based)
// Before ES6 classes existed, we used constructor functions and
// Object.defineProperty() to create getters and setters.


// As we know in early times classes were not existing 
function User(email, password) {
    // We still use the underscore convention for private backing variables
    this._email = email 
    this._password = password


    // how were getter and setter used when there were no classes

    // Defining the 'email' property with getter and setter
    Object.defineProperty(this, 'email', {
        get: function () {
            return this._email.toUpperCase() 
        },
        set: function (value) {
            this._email = value 
        }
    })
    // Defining the 'password' property with getter and setter
    Object.defineProperty(this, 'password', {
        get: function () {
            return this._password.toUpperCase() 
        },
        set: function (value) {
            this._password = value 
        }
    })
}


const Obj = new User("obj@mail.com", "12345")

console.log(Obj.email) // output: OBJ@MAIL.COM


// there is also one more syntax 
// this is function based syntax another is object based syntax 