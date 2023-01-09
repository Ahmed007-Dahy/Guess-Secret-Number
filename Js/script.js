'use strict';
let score = 20;
let highScore = 0;
let secretNumber = Math.trunc(Math.random() * 20) + 1;

const displayMessage = function (message) {
    document.querySelector('.game-statis__guess').textContent = message;
};
document.querySelector('.check').addEventListener('click', function () {
    const guessNumber = Number(
        document.querySelector('.guessed-part__input').value,
    );
    console.log(guessNumber);
    if (!guessNumber) {
        displayMessage('🤡 No number chosen yet !');
    } else if (guessNumber === secretNumber) {
        displayMessage('Great job, you choose correct Number ✌️');
        document.querySelector('body').style.backgroundColor = '#7DCE13';
        document.querySelector('.number-box__guess').textContent = secretNumber;
        document.querySelector('.number-box__guess').style.fontSize = '13rem';
        document.querySelector('.number-box').style.width = '16rem';
        document.querySelector('.guessed-part__input').style.backgroundColor =
            '#7DCE13';
        document.querySelector('.guessed-part__input').style.textAlign =
            'center';
        if (score > highScore) {
            highScore = score;
            document.querySelector('.game-statis__high-score').textContent =
                highScore;
        }
    } else if (guessNumber !== secretNumber) {
        if (score > 1) {
            displayMessage(
                guessNumber > secretNumber
                    ? "it's too high ⬆️"
                    : "it's too low ⬇️",
            );
            score--;
            document.querySelector('.game-statis__number').textContent = score;
        } else {
            displayMessage('You lose game');
            document.querySelector('.game-statis__number').textContent = 0;
        }
    }
});
document.querySelector('.again').addEventListener('click', function () {
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    score = 20;
    document.querySelector('body').style.backgroundColor = '#212121';
    document.querySelector('.guessed-part__input').style.backgroundColor =
        '#212121';
    document.querySelector('.game-statis__number').textContent = score;
    displayMessage('start guessing...!');
    document.querySelector('.guessed-part__input').value = '';
    document.querySelector('.number-box__guess').textContent = '?';
    document.querySelector('.number-box__guess').style.fontSize = '7rem';
});
