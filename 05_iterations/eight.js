// reduce method
// it executes a user-supplied "reducer"


// const array = [1, 2, 3, 4];


// const initialValue = 0;
// const sumWithInitial = array.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   initialValue,
// );

// // 0 + 1 + 2 + 3 + 4
// console.log(sumWithInitial);
// // Expected output: 10


// accumulator is a empty variable given
// for first loop value of initialvalue will go in accumulator
// reduce works on the array
// for second loop the value after accumulator + currentvalue
// will go in the accumulator


const myNums = [1, 2, 3]
const myTotal = myNums.reduce(function (acc, currVal) {
    console.log(`acc: ${acc} and currVal: ${currVal}`)
    return acc + currVal
}, 0)
// 0 is for accumulator , as it does not know where to start from

console.log(myTotal)


// now with arrow function 
// const myTotal = myNums.reduce((acc, curr) => acc + curr, 0)
const shoppingCart = [
    {
        itemname: "js course",
        price: 2999,
    },
    {
        itemname: "py course",
        price: 999,
    },
    {
        itemname: "mobile dev course",
        price: 5999,
    },
    {
        itemname: "data science course",
        price: 12999,
    }
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)
console.log(priceToPay)