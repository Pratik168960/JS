const coding = ["js", "ruby", "java", "python", "cpp"]


const values = coding.forEach((item) => {
    console.log(item)
    return item 
})

console.log(values)
// --> undefined it does not return anything
// foreach loop does not return any value


const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newNums = myNums.filter((num) => num > 4)
// const newNums = myNums.filter((num) => {
//     num > 4
// }) --> this will give empty arr
// as when we are using curly braces 
// it requires return keyword check 03_basics/03_arrows.js
// const newNums = myNums.filter((num) => {
//     return num > 4
// }) 


const newNums = []
myNums.forEach((num) => {
    if (num > 4) {
        newNums.push(num)
    }
})
console.log(newNums)

// filter takes callback func as a parameter
// and it requires a condition



