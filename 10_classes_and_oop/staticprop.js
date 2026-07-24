// STATIC METHODS

class User {
    constructor(username) {
        this.username = username
    }

    logMe() {
        console.log(`Username: ${this.username}`)
    }

    // 'static' means this method belongs to the class itself, 
    // not to the objects (instances) created from it
    // We use this when we don't want to give objects access to this method
    static createId() {
        // In a real app, this might generate a random unique ID
        return `123`;
    }
}

// --- Testing Static Methods ---
const user1 = new User("user1")
// console.log(user1.createId());
// ^ ERROR: Instances (like user1) cannot access static methods
// in lots of cases we don't want to give method access to object which
// is instantiate from this class
// just use static keyword



// The correct way to use a static method is to call it on the Class itself:
console.log(`Generated ID from User class: ${User.createId()}`);




// --- Static Methods with Inheritance ---

class Teacher extends User {
    constructor(username, email) {
        super(username)
        this.email = email
    }
}

const user2 = new Teacher("user2", "user2@mail.com")
console.log(user2.createId()) 

// teacher1.logMe(); // This works! Instances inherit standard methods.

// console.log(teacher1.createId());
// ^ ERROR: Instances of a child class cannot access static methods either.

// However, the child CLASS itself inherits the static method from the parent CLASS:
console.log(`Generated ID from Teacher class: ${Teacher.createId()}`);