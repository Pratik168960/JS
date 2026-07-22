// Goal:
// let myName = "pratik"
// console.log(myName.length())
// console.log(myName.trueLength())
// i know that some properties are by default as it is string
// but if myName = "pratik     " - 5 extra spaces
// it will result string length as 11
// so i want the result should give the true length and also remove the extra spaces
// and return
// we want to build this method so we can use it anywhere with any string


let myHeroes = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling"

    // method
    getSpiderPower: /*we can directly inject a fxn*/function () {
        console.log(`Spidy power is ${this.spiderman}`)
    }
}

// can we do something like 
heroPower.pratik() // what this will result in

// browser console
// const testObj = {username: "pratik"}
// undefined
// testObj
// {username: 'pratik}
// does this contain any fxn named pratik there is username only but can i inject myself

