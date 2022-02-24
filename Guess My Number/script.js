'use strict';
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 10;
let highScore = 0;
let gameRunning = true;
document.querySelector('.check').addEventListener('click', function () {
    const input = Number(document.querySelector('.guess').value);
    if ((input < 1 || input > 20) && gameRunning) {
        document.querySelector('.message').textContent = '🚫Type Number Between 1 and 20';
    } else if (gameRunning){
        score--;
        document.querySelector('.score').textContent = score;
        if (score > 0) {
            if (input === secretNumber) {
                document.querySelector('.message').textContent = '🏆You Guessed it Right';
                if (score > highScore) {
                    highScore = score;
                    document.querySelector('.highscore').textContent = highScore;
                }
                document.querySelector('.number').textContent = secretNumber;
                document.querySelector('body').style.backgroundColor = '#60b347';
                document.querySelector('.number').style.width = "30rem";
                gameRunning = false;
            } else if (input < secretNumber) {
                document.querySelector('.message').textContent = '📈Your Number is Lower';
            } else if (input > secretNumber) {
                document.querySelector('.message').textContent = '📉Your Number is Higher';
            }
        } else {
            document.querySelector('.message').textContent = '💣Game Lost';
            document.querySelector('.number').style.width = "10rem";
            document.querySelector('.number').textContent = '☠';
            gameRunning = false;
        }
    }

})
document.querySelector('.again').addEventListener('click', function () {
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    score = 10;
    gameRunning = true;
    document.querySelector('.message').textContent = 'Guess again';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = "15rem";
    document.querySelector('.guess').value = '';
})

