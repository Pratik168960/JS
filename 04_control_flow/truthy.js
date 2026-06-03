// const userEmail = "p@gmail.com"
const userEmail = []
if (userEmail) {
    console.log("Got user Email")
} else {
    console.log("Don't have user email")
}


// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN


// truthy values
// "0", 'false', " ", [], {}, function () { }

if (userEmail.length === 0) {
    console.log("Array is empty")
}

const emptyObj = {}

if(Object.keys(emptyObj).length === 0) {
    console.log("object is empty")
}


// in browser console
// false == 0 --> true
// false == '' --> true
// 0 == '' --> true





//Nullish Coalescing Operator(??): null defined

let val1;
// val1 = 5 ?? 10
// lot of times when we will call from database
// or use firebase or appwrite then it gives two values
// in return chances of null response or undefined
// in that situation the other value will be used 
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20
    

console.log(val1)


// terniary operator

// condition ? true : false 
const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")
