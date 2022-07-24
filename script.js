'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number!🎉';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

const secretNumber = Math.trunc(Math.random() * 20) + 1; // nr 1-20
let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  const guessedValue = Number(document.querySelector('.guess').value);

  if (!guessedValue) {
    document.querySelector('.message').textContent = '😒 No number!';
  } else if (guessedValue === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct number!';
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
  } else if (guessedValue > secretNumber) {
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
      document.querySelector('.message').textContent = '📈 Too high!';
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guessedValue < secretNumber) {
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
      document.querySelector('.message').textContent = '📉 Too low!';
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
})

const resetGame = function () {
  // hide guess number
  document.querySelector('.number').textContent = '?';
  // default start text
  document.querySelector('.message').textContent = 'Start guessing...';

  // hide the guessing number/clear ínput field
  document.querySelector('.guess').value = '';
  // score
  document.querySelector('.score').textContent = 20;
  // background back to black
  document.querySelector('body').style.backgroundColor = '#222';
  // number size frame smaller
  document.querySelector('.number').style.width = '15rem';
}

document.querySelector('.again').addEventListener('click', resetGame);