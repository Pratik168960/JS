// selecting all the buttons 
const buttons = document.querySelectorAll('.button') // this gives nodelist 

// selecting body using tag name 
const body = document.querySelector("body")

// as result is nodelist we can use forEach loop 
buttons.forEach(function(button){
  console.log(button) // HTML_SpanELement
  // now applying event listener(method) on every button 
  button.addEventListener('click',function(e){
    console.log(e)
    console.log(e.target)
    if (e.target.id === 'grey'){
      // body.style.backgroundColor = 'grey' -> hard coding the value 
      // for better coding practice use 
      body.style.backgroundColor = e.target.id
    }
    if (e.target.id === 'white'){ 
      body.style.backgroundColor = e.target.id
    }
    if (e.target.id === 'blue'){ 
      body.style.backgroundColor = e.target.id
    }
    if (e.target.id === 'yellow'){
      body.style.backgroundColor = e.target.id
    }
  })
})

