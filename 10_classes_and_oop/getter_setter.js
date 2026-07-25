
// GETTERS AND SETTERS

class User {
    constructor(email, password) {
        // When we set these, it automatically triggers the 'set' methods below
        this.email = email 
        this.password = password
    }

// SCENARIO: We want fine-grained control over our properties.
// We don't want to give raw access to the password or email.
// To customize how data is read and written, we use 'get' and 'set'.

// But a lot of times we want fine grain control like someone ask for password
// so i will not tell or return encrypted

// there are cases where we have made classes but we don't want to give
// the properties to everyone or if anyone want it so you have to customize code

// so for that getter and setter are used

// if we want do not give access to password

// easiest way to control these getters and setters we can apply it to any of the
// properties of the class
    
// --- PASSWORD GETTER/SETTER ---
    get password() {
        // suppose someone trying to get password 
        // return this.password.toUpperCase() // gives error 
        return `${this._password}pratik` 
        // if we are defining the getter then we also have to set the setter as well 
        // getter's perspective is from outside of class but the setter is not here 
        // if we hard code a value so it will work 
    }

    set password(value) {
        // this.password = value.toUpperCase()
        // we are setting the password in constructor and in setter also so it is
        // allowed or not 
        
        // error : Maximum call stack size exceeded 
        // constructor getting called again and again 
        // setter and constructor both are setting like a race between them 
        
        // so how to set the values 
        // solution to this problem is unique and there is also a alternative approach 
        // so at the time of setting the password create a new property  
        // because now it does not matter what user is giving and what we are calling it 
        // in constructor property can be normal 
        
        
        this._password = value
    }
    // now our constructor setting the value of email but not password 
    // as we have overwrite it 

    get email() {
        return this._email.toUpperCase()
    }
    set email(value) {
        this._email = value 
    }
}
// --- Testing Getters and Setters ---
const pratik = new User("pratik.ai", "abc")
// This automatically calls the `get password()` method behind the scenes
console.log(pratik.password); // Output: abcpratik

// This automatically calls the `get email()` method behind the scenes
console.log(pratik.email); // Output: PRATIK.AI
