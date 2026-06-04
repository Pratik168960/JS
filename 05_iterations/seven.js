const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.map((num) => num + 10)
// another method map 
// auto return 

const newNums = myNums
                .map((num) => num * 10)  // it will return value after operation
                .map((num) => num + 1)
                .filter((num) => num >= 40)  // it is for true or false check only 
                
// whenever chaining happens of multiple methods 
// the one at the last will get the arr which is resulted after the previous method 
console.log(newNums)

