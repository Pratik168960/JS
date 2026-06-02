// Immediately Invoked Function Expressions (IIFE)
// as we wrote a function we have to execute it immediately

// if there is a file which is needed for the
// connection with the database it is required that it
// should execute as the app starts


// sometimes don't want global variables to interfare
// in the functions and do not pollute them as they
// can access those variables


(function chai() {
    // named iife
    console.log(`DB CONNECTED.`)
})();


// ()()  // first () for function definition and
// second () for function call


// immediately invoked function gets invoked immediately
// but don't know where to stop the context
// hence we require to end it with the semi colon (;)



// unnamed iife
((name) => {
    console.log(`DB CONNECTED TWO ${name}`)
}) ('pratik')