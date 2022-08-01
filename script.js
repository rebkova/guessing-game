'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1; // nr 1-20
let score = 20;

function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
  const guessedValue = Number(document.querySelector('.guess').value);

  if (!guessedValue) {
    displayMessage('😒 No number!');
  } else if (guessedValue === secretNumber) {
    displayMessage('🎉 Correct number!');
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
  } else if (guessedValue !== secretNumber) {
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
      displayMessage(
        guessedValue > secretNumber ? '📈 Too high!' : '📉 Too low!'
      );
    } else {
      displayMessage('💥 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

const resetGame = function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // hide guess number
  document.querySelector('.number').textContent = '?';
  // default start text
  displayMessage('Start guessing...');

  // hide the guessing number/clear ínput field
  document.querySelector('.guess').value = '';
  // score
  document.querySelector('.score').textContent = 20;
  // background back to black
  document.querySelector('body').style.backgroundColor = '#222';
  // number size frame smaller
  document.querySelector('.number').style.width = '15rem';
};

document.querySelector('.again').addEventListener('click', resetGame);