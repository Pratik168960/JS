
// GETTERS AND SETTERS (ES5 Object based Object.create Syntax)

const User = {
    // The '_' (underscore) is just a naming convention.
    // It tells other developers: "This is private, don't touch it directly!"
    _email: 'p@s.com',
    _password: "abc",

// Getters and setters act as a protective layer over the properties.
    get email() {
        return this._email.toUpperCase()
    },

    set email(value) {
        this._email = value 
    }
}


// In modern code, we mostly see the 'class' syntax
// However, in older codebases, you will often see this approach

// Object.create() creates a brand new, empty object, 
// but it links that new object's prototype directly to the 'User' object above
const user1 = Object.create(/*by default null*/ User)
// on the basis of user refer to user1 
console.log(user1.email) // Output: P@S.COM

// HOW IT WORKS:
// When we ask for 'user1.email' (without the underscore), JavaScript looks for it
// It finds the 'get email()' method, runs the code inside, and returns 
// the protected '_email'
// To the outside user, it doesn't matter how the data is stored behind 
// the scenes

// it get accessed even though our variable is different
// _ represents a private property but when you use get or set so that
// underscore is less meaningful will search for is there any property
// without underscore


// this is what getters and setters do
// they are method which we place over the method

// now user does not matter what the name is 