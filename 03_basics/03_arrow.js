const user = {
    username: "pratik",
    price: 999,

    welcomeMessage: function () {
        console.log(`${this.username} , Welcome to the website`)
        // whenever we have to refer to the current context
        // this keyword is used 
        console.log(this)
        // it gives current context as output
    }

}

// user.welcomeMessage()

// user.username = "sam"
// user.welcomeMessage()
// it gives sam as we have not hardcoded the value
// we said username in current context

console.log(this)
// here it will give an empty object
// as we are in node environment
// this keyword refers to empty object
// because there is nothing in global object


// BUT HERE ARISES PROBLEM

// when we do this in browser it will give result as window
// in browser the global object is window object


// and now when we try to print this in a function it will give
// many values as a result
// function chai() {
//     let username = "pratik"
//     console.log(this)       //this.username -> undefined
// }
// chai()


// we cannot use this inside function only works in object

// const chai = function chai() {
//     let username = "pratik"
//     console.log(this.username)      --> undefined
// }


// const chai = () => {
//     let username = "pratik"
//     console.log(this.username)       // still undefined
// }
// chai()





// explicit returned
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// implicit returned
// const addTwo = (num1, num2) => num1 + num2
// one line statement return keyword is not required


// const addTwo = (num1, num2) => (num1 + num2)

// {} : return is required
// () : return is not required


// if want to return object 
const addTwo = (num1, num2) => ({ username: "pratik" })
// here we want to wrap the object in () parenthesis

console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()