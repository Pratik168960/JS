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


// there can be case like shopping cart in which we don't know the amount
// of products that is we don't know how many arguments


// function calculateCartPrice(num1) {
//     return num1 
// }
// console.log(calculateCartPrice(2)) 
// console.log(calculateCartPrice(200, 400, 500)) 

function calculateCartPrice(...num1) {     // (...) rest operator as well as spread operator 
    return num1 
}
console.log(calculateCartPrice(200, 400, 500,2000)) 
// rest ka mtlb yeh h ki jo bhi values h unhe ek bundle mei pack kro aur dedo
// it gives an array


//function calculateCartPrice(val1, val2, ...num1) --> [500, 2000]
// val1 = 200, val2 = 400, and the rest are in ...num1 this is use of rest operator

const user = {
    username: "pratik",
    price: 199
}

function handleObject(anyObject) {
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
    
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})


const myNewArray = [200, 400, 600, 1100]
function returnSecondValue(getArray) {
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([200, 440, 500, 1000]))