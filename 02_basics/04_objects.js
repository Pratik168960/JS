// singleton
// objects using constructor

// const tinderUser = new Object()    --> singleton object 
const tinderUser = {}                 // non singleton object

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false


// console.log(tinderUser)


const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "pratik",
            lastname: "singh"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b" }
const obj4 = {5: "a", 6: "b" }


//const obj3 = { obj1, obj2 }       -->same problem as of array
// object ek andr object
// const obj3 = Object.assign(obj1, obj2)

// const obj3 = Object.assign({}, obj1, obj2, obj4)       // {} yeh optional parameter do na do jruri nhi
// pr isse yeh confirm ho jayega ki finally humei saare paramaters isme combined milenge guranteed result yhi aayega
// {} ise target aur baki values ko source maan skte hn toh saare values combine hoke {} isme




//using spread
const obj3 = {...obj1, ...obj2}


// console.log(obj3)




// when values coming from db 
const users = [
    {
        id: 1,
        email: "p@gmail.com"
    },
    {
        id: 1,
        email: "p@gmail.com"
    },
    {
        id: 1,
        email: "p@gmail.com"
    },
    {
        id: 1,
        email: "p@gmail.com"
    }
]


users[1].email
console.log(tinderUser)

console.log(Object.keys(tinderUser))  // datatype array 
console.log(Object.values(tinderUser))  
console.log(Object.entries(tinderUser))  
console.log(tinderUser.hasOwnProperty('isLoggedIn'))








//destructuring 
const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor
// course.price
// course.coursename
// instead of this

const { courseInstructor : instructor} = course
// console.log(courseInstructor)
console.log(instructor)




// API         -- apna kaam dusro k sir pr daalna


// key & values usually both are string
// {
//     "name": "pratik",
//     "coursename": "js in hindi",
//     "price": "free"
// }



    
// api can be returned in array form also 
[
    {},
    {},
    {}
]


// all here are json api 
// json : javascript object notation