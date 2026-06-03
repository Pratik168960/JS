//

const coding = ["js", "ruby", "java", "python", "cpp"]
// there are some loops which are directly
// added to the properties of the array

// foreach - higher order function

// callback function as parameter for the foreach
coding.forEach(function (item) {
    console.log(item)
})


// using arrow functions
coding.forEach((item) => {
    console.log(item)
})

// function 
function printMe(item) {
    console.log(item)
}
coding.forEach(printMe)
// we have to give the reference do not execute it



coding.forEach((item, index, arr) => { 
    console.log(item, index, arr)
})






const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    }
]

// arr of objects
// this is very common operations
// as when we fetch the data from the db
// it is in this format


// we can use foreach

myCoding.forEach((item) => {
    console.log(item.languageName)
})