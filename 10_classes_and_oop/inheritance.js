class User {
    constructor(username) {
        this.username = username
        
    }
    logMe() {
        console.log(`USERNAME is ${this.username}`)
    }
}

class Teacher extends User {
    // now Teacher class has the functionality of User class 
    // override constructor 
    constructor(username, email, password) {
        super(username) // super keyword identifies the super class and then its constructor executes
        // then setting username it also know the correct context 
        
        this.email = email
        this.password = password
    }

    addCourse() {
        console.log(`A new course was added by ${this.username}`)
    }
}





// creating an object

const user1 = new Teacher("user1", "user1@teacher.com", "123")

user1.addCourse()

const user2 = new User("user2")
user2.addCourse() // user2 does not have access to addCourse we can use its own function only

user1.logMe() // user1 has logMe as it is inherited from the User class


console.log(user1 === Teacher) // false , as it is just instance not exactly that class
// but how we can know is it instance of that class or not

console.log(user1 instanceof Teacher) // true 