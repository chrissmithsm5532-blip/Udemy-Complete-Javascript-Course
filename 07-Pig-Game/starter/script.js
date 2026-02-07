'use strict';

// Elements

let currentScore, activePlayer, scores, playing;

const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;
  player0ScoreEl.textContent = 0;
  player1ScoreEl.textContent = 0;
  document.querySelector(`.player--1`).classList.remove('player--winner');
  document.querySelector(`.player--0`).classList.remove('player--winner');

  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
  document.getElementById(`current--0`).textContent = 0;
  document.getElementById(`current--1`).textContent = 0;
  diceEl.classList.add('hidden');
};

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

const player0ScoreEl = document.getElementById('score--0');
const player1ScoreEl = document.getElementById('score--1');

const holdBtn = document.querySelector('.btn--hold');
const newBtn = document.querySelector('.btn--new');
const rollBtn = document.querySelector('.btn--roll');

const diceEl = document.querySelector('.dice');

//Starting state

init();

const switchPlayer = function () {
  //if (activePlayer === 0) {
  //}
  // if activeplayer = 0 then background 0 = dark and background 1 = light
  //else background 0 =light and background 1= dark

  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 1 ? 0 : 1;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

//Roll Dice

rollBtn.addEventListener('click', function () {
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
    if (dice !== 1) {
      currentScore += dice;
      //change later
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

holdBtn.addEventListener('click', function () {
  if (playing) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 100) {
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      diceEl.classList.add('hidden');
      playing = false;
    } else switchPlayer();
  }
});

newBtn.addEventListener('click', init);
