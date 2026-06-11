const clock = document.getElementById("clock");
// const clock = document.querySelector('#clock')

// as it is digital clock it should change every second

// let date = new Date()
// console.log(date.toLocaleTimeString)

// so this will give the result in console every time we refresh the page but i want date run everytime and get updated so here we will use a method setInterval it works as give it a method and interval after which to continously run until the program executing

setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleTimeString)
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);
