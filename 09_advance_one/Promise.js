// ---- PROMISES IN JS ----
// Promise object represents the eventual completion (or failure) of an asynchronous
// operation and its resulting value
// the task you gave is queued but not loaded and not completed

// a promise has three states
// pending , fulfilled and rejected

// mostly we consume promises


// History Context:
// Before Promises, JavaScript relied heavily on "callbacks" for async tasks, which often led to messy, nested code ("Callback Hell").
// Third-party libraries like Q and Bluebird popularized Promises.
// Later, async/await was introduced to make Promise-based code look synchronous and easier to read.



// --- Example 1: Creating and Consuming a Basic Promise ---
const promiseOne = new Promise(function (resolve, reject) {
    // promise is direct object
    // promises take callback 
    // do an async task
    // e.g DB calls , cryptography , network calls 
    setTimeout(function () {
        console.log('Async task is complete')
        resolve() // connection of resolve with .then() after this promise will get consumed 
    }, 1000)
}) 



// now we have to consume the promise 
promiseOne.then(function () {
    // .then() has a direct connection with the resolve
    // .then has a callback function which receives argument automatically 
    // whose job is whatever the task is done in setTimeout return the value here 
    console.log("Promise consumed")
    // promise not consumed yet for because we have not connected the .then with resolve 

})




// --- Example 2: Creating a Promise without storing it in a variable ---
new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Async task 2")
        resolve()
    },1000)
}).then(function () {
    console.log("Async 2 resolved")
})



// --- Example 3: Passing data through resolve ---
const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        // we won't only use console log 
        // there maybe some case in which data is given 
        resolve({username: "pratik",email: "pratik@xyz.com"}) // we can pass data in resolve as parameter 
        // mostly it will be an object 
    },1000)
})

promiseThree.then(function (user) {
    // here the value returned
    // how we will pass the value from setTimeout to this .then it is done by resolve 
    console.log(user)
})


// --- Example 4: Handling Errors and Promise Chaining ---
const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = false 

        // now we will check with this flag if there is no error then it will get resolved 
        // but if there occurs error so we have to reject and give msg 
        if (!error) {
            resolve({username: "pratik", password: "123"})
        } else {
            reject('ERROR: Something went wrong')
        }
    },1000)
})

// callback hell
// const username = promiseFour.then((user) => {
//     console.log(user)
//     return user.username // but where this will go
//     // will it go in the variable
// })

// console.log(username) // this will give error and the promise state is pending

promiseFour.then((user) => {
    console.log(user)
    return user.username
}).then(( username /*value here came from above .then and used here is called chaining used DB connection*/) => {
    console.log(username)
}).catch(function (error) {
    console.log(error)
}).finally(() => {
    // this will execute everytime 
    console.log("The promise is either resolved or rejected")
})



// --- Example 5: Handling Promises with async/await ---
const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true 
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    },1000)
})

// if we do not use .then .catch
// async function consumePromiseFive() {
//     const response = await promiseFive
//     console.log(response);
// }
// consumePromiseFive() // this will not give error as we used async await
// async await do not handle the errors directly
// so we will use try catch block

// async/await doesn't handle errors gracefully by itself.
// We must use a try/catch block to catch rejected promises.
async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error) // error handled gracefully 
    }
}
consumePromiseFive()


// async function getAllUsers() {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users') // returns a promise
//     const data = response.json() // convert string into json
//     console.log(data)
// }

// getAllUsers() // promise pending

// now we will be using try catch block
// async function getAllUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users') // returns a promise
//         const data = response.json() // convert string into json
//         console.log(data)
//     } catch (error) {
//         console.log("E: ",error)
//     }
// }

// getAllUsers()

// still not working

// response.json() takes time so we have to use await 
// --- Example 6: Real-world example using fetch with async/await ---
async function getAllUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users') // returns a promise 
        const data = await response.json() // convert string into json 
        console.log(data)
    } catch (error) {
        console.log("E: ",error)
    }
}

getAllUsers()


// what if i want .then.catch instead 
// --- Example 7: The same fetch request using .then() and .catch() ---
fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
    return response.json()
    })
    .then((data) =>{
        console.log(data)
    })
    
    .catch((error) => {
    console.log(error)
    })
