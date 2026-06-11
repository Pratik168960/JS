// first of all we have to choose a random number for that we will use math library
let randomNumber = parseInt(Math.random() * 100 + 1);
// random gives a random number in between 0 to 1 (1 excluded) -- [0,1) multiplying it with 100 so that number will be from 0 to 99 but sometimes we can get 0 so for that adding 1 into it and then using parseInt to have an integer value

// submit button id subt
const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
// previous guesses using guesses class
const guessSlot = document.querySelector('.guesses');
// how many guesses are remaining
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
// once the user used all the guesses we have to display a msg to startover
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

// array where we will store the previous guesses and display to the user so that user do not guess the same value again
let prevGuess = [];
// how many attempts user did
let numGuess = 1; // as this reach 10 we will disable the submit

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  // to check whether the input is number or not
  // or whether the value given not less than 1
  if (isNaN(guess)) {
    alert('Please enter a valid number');
  } else if (guess < 1) {
    alert('Please enter a number more than 1');
  } else if (guess > 100) {
    alert('Please enter a number less than 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  // check whether the value is equal to random number if yes then use displayMessage correct wrong lesser greater
  if (guess === randomNumber) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is TOOO low`);
  } else if (guess < randomNumber) {
    displayMessage(`Number is TOOO high`);
  }
}

function displayGuess(guess) {
  // or cleanupGuess
  // will clean the values and update the guess array and remaining guess
  userInput.value = '';
  guessSlot.innerHTML += `${guess}  `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
  // DOM manipulation
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame = true;
  });
}
