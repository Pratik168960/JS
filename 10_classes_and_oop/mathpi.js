// OBJECT PROPERTY DESCRIPTORS

// The question is can we change roundoff the value  of pi and explain the answer

// we know that we have direct access to object and it has so many properties
// Object.getOwnPropertyDescriptor(Math)
// this tells us about hidden properties


console.log(Math.PI)
// let's try to overwrite
Math.PI = 5
// even though we try to override this will not
console.log(Math.PI) // output is still same 3.14159...
// so why can't we change the value


// we do not check the value of math it is not the key , pi is property name whose value is 3.14..
// math is just a module 
// Math is just an object. PI is a property.
// We can use getOwnPropertyDescriptor to see its hidden rules:
const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")

console.log(descriptor)
// {
//   value: 3.141592653589793,      hardcoded
//   writable: false,      <-- this is why we can't change it
//   enumerable: false,
//   configurable: false
// }


// can we do similar with our objects by giving some properties which cannot be changed
// YES we can


// PROTECTING OUR OWN OBJECT PROPERTIES

const book = {
    name: 'A4 book',
    price: 200,
    isAvailable: true,

    orderBook: function () {
        console.log("Order placed")
    }

}

console.log(book) // { name: 'A4 book', price: 200, isAvailable: true }

// does this have descriptor properties if yes how can i set

// console.log(Object.getOwnPropertyDescriptor(book)) // -- undefined
// because we used descriptor of property book is a object not a property 
console.log(Object.getOwnPropertyDescriptor(book, "name")) 
// {
//   value: 'A4 book',
//   writable: true,    // By default, we can change it
//   enumerable: true,   // By default, it shows up in loops
//   configurable: true
// }



// Now, let's lock down the 'name' property so it acts like Math.PI
Object.defineProperty(book, 'name', {
    writable: false,   // It cannot be changed anymore
    enumerable: false  // It will be hidden from loops
})


// ITERATING OVER OBJECTS


console.log(Object.getOwnPropertyDescriptor(book, "name"))
// {
//   value: 'A4 book',
//   writable: false,
//   enumerable: false,
//   configurable: true
// }


// for (const [key,value] of book) {
//     console.log(`${key}: ${value}`)
// }


// value of book is not iterable
// because it is object
// by default object is iterable or not is situation dependent but to iterate this
// use Object.entries

// Objects are not directly iterable like arrays
// We use Object.entries() to convert the object into an array of [key, value] pairs.


for (const [key, value] of Object.entries(book)) {
    // We add a check so we only print data, not functions (like orderBook)
    if (typeof value !== 'function') {
        console.log(`${key}: ${value}`)
    }

// but here comes a problem if we declare a function in object it also gets printed
// price: 200
// isAvailable: true
// orderBook: function () {
//     console.log("Order placed")
// }
// so we have check this 
}


