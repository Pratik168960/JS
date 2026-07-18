// in this project we will be using the setInterval method
// main focus is to change the color of webpage every sec after clickikng the start
// and to stop there is a stop button

// generate a random color 
const randomColor = function () {
    const hex = "0123456789ABCDEF"
    let color = '#'
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color
}

// to generate a random color we will use Math.random

let intervalId
const startChangingColor = function () {
    // good practice
    // if we don't do this when the program will start it will change color after each sec
    // but when we stop it this will not work
    
    if (!intervalId) {
        intervalId = setInterval(changeBgColor, 1000)
    }
    
    function changeBgColor() {
        document.body.style.backgroundColor = randomColor()
    }
}
const stopChangingColor = function () {
    clearInterval(intervalId)
    intervalId = null // we are overiding the value again and again
    // so we should clear it this makes code good and professional 
    
}

document.querySelector('#start').addEventListener('click', startChangingColor)

document.querySelector('#stop').addEventListener('click', stopChangingColor)