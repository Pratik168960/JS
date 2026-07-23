/*
  UNDERSTANDING 'this' AND THE .call() METHOD IN JAVASCRIPT
  
  In JavaScript, the value of 'this' depends on how a function is called.
  - In a browser's global scope, 'this' refers to the 'window' object.
  - In a Node.js environment, global 'this' refers to an empty object {}.
*/

function SetUsername(username) {
    // complex DB calls 
    this.username = username
    console.log("called")
}

function createUser(username, email, password) {
    /*
      If we just write: SetUsername(username)
      The function DOES run, but there is a problem: 'this' inside SetUsername 
      won't refer to our new user object. It will default to the global object.
      
      To fix this, we use the .call() method. 
      .call() executes the function but allows us to explicitly pass our current 
      Execution Context ('this') into it. We are telling SetUsername to hold onto 
      the 'this' of our createUser function.
    */
    SetUsername.call(this, username)

    this.email = email
    this.password = password
    
}

const user1 = new createUser("user1", "user1@fb.com", "123")
console.log(user1)  

// we got email and password but what about the username which is set by method
// does it setted or not , does actually call working or not

// Actually it is not getting called
// for callikng it inside a function , we have just given the reference
// we can see there is parenthesis which means it getting called
// but it is decieving that technically in js its only reference not got called

// In JS we get some methods by which we can call the methods explicitly
// .call() - technically getting called


// callme() gets called and after the execution its EC and variables get removed and there remains
// no reference for the outer function we have to hold the reference
// so we will give the reference


/*
  SUMMARY:
  When a function finishes running, its Execution Context (EC) is popped off the 
  call stack. All its internal variables are destroyed. 
  
  By passing 'this' via .call(), we ensure that SetUsername attaches the 'username' 
  property directly to our permanent user object before its execution context disappears.
*/