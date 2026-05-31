// functions is a block of code where we write a code
// and we can use it wherever we need it

// console.log("P");
// console.log("R");
// console.log("A");
// console.log("T");
// console.log("I");
// console.log("K");
// if i want this multiple times i will not type this again n again 
// i will create a function 

function sayMyName() {
  console.log("P");
  console.log("R");
  console.log("A");
  console.log("T");
  console.log("I");
  console.log("K");
}

// sayMyName is reference and as we typed () parenthesis that is execution
// sayMyName()


// addition of two numbers
// function addTwoNumbers(num1, num2) {
//     console.log(num1 + num2);
// }

// const result = addTwoNumbers(3, 5)
// console.log("Result: ", result);   --> undefined


function addTwoNumbers(num1, num2) {
    // let result = num1 + num2 
    // return result
    return num1 + num2 
}

addTwoNumbers(3, 4)
addTwoNumbers(3, "4")
addTwoNumbers(3, "a")
addTwoNumbers(3, null)


// when we declare function at that time values in () are parameters
// when we call that function at that time values in () are arguments

const result = addTwoNumbers(3, 5)
// console.log("Result: ", result);



// function loginUserMessage(username) {
//     return `${username} just logged in`
// }

// console.log(loginUserMessage("Pratik"))
// console.log(loginUserMessage())      -->when we are not providing any valuue in the argument it returns as undefined 

function loginUserMessage(username) {
    if (username === undefined) /*or you can also use (!username)*/ {
        console.log("please enter a username")
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage());