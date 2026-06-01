// let a = 10
// const b = 20
// var c = 30
// var does not work with the block scope


// object ka {} mtlb declaration aur baki hrr jagah scope
if (true) {
    let a = 10 
    const b = 20 
    console.log("INNER: ", a)
}


// console.log(a);
// console.log(b);
// console.log(c);

// the global scope in a browser window and
// a Node.js code environment are different





// nested scopes
// chhote log bado se ice cream mang skte h
// pr agar bade log chhoto se ice cream mange toh kharab lgta h 
// similar yha prr bhi 


function one() {
    const username = "pratik"

    function two() {
        const website = "youtube"
        console.log(username)
    }
    // console.log(website)     -->cannot access
    // execution line by line where there is error 
    // it will not proceed to next line 
    two()       // function call 

}

one()



if (true) {
    const username = "pratik"
    if (username === "pratik") {
        const website = " youtube"
        console.log(username + website)
    }
    // console.log(website)     --> cannot access
}
// console.log(username)








// ++++++++++++++++++ interesting +++++++++++++++++++

addone(5)
function addone(num) {
    return num + 1     
}

// addone(5)     // if we call this function
// before the declaration this will not give error



// function / expression
// addTwo(5) --> cannot access before intialization
const addTwo = function (num) {
    return num + 2     
}

// addTwo(5)    // if we call this function
// before the declaration it will give error
// cannot be accessed


// how is function declared and where they are stored 
// are important hoistic concept