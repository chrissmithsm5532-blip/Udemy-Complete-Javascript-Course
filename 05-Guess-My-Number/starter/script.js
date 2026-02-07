'use strict';

/*
document.querySelector('.message').textContent = 'You have won';

console.log(document.querySelector('.message').textContent);

console.log(document.querySelector('.label-highscore').textContent);

console.log(document.querySelector('.number').textContent);

console.log(document.querySelector('.score').textContent);

console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
//document.querySelector('.number').textContent = number;
console.log(secretNumber);
let highscore = 0;
let score = 20;

const setMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.again').addEventListener('click', function () {
  setMessage('Start guessing...');
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

const gameOver = function () {
  setMessage('You Lose. Try Again...');
  document.querySelector('.number').textContent = secretNumber;
  secretNumber = Math.trunc(Math.random * 20) + 1;
  document.querySelector('.number').textContent = guess;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  if (!guess) {
    setMessage = '⛔Enter a number';
  } else if (guess === secretNumber) {
    setMessage('You have won🙌');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    secretNumber = Math.trunc(Math.random * 20) + 1;
    highscore = score;
    document.querySelector('.highscore').textContent = score;
    document.querySelector('.number').textContent = guess;
  } else if (guess !== secretNumber) {
    score--;
    document.querySelector('.score').textContent = score;
    if (score === 0) gameOver();
    setMessage(
      guess > secretNumber ? 'You guesses to high' : 'You guessed too low'
    );
  }
});
