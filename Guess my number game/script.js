'use strict';
console.log(document.querySelector('.message'));
//document.querySelector('.message').textContent = 'correct guess';
let screctno = Math.trunc(Math.random() * 20 + 1);
console.log(screctno);
// let guess = Number(document.querySelector('.guess').value);
let score = 20;
let highscore = 0;
const checkfun = function () {
  const guess = Number(document.querySelector('.guess').value);
  if (score === 0) {
    document.querySelector('.message').textContent = 'Game over';
  } else if (!guess) {
    document.querySelector('.message').textContent = 'Empty value';
  } else if (guess > screctno) {
    document.querySelector('.message').textContent = 'Too High';
    score--;
    document.querySelector('.score').textContent = score;
  } else if (guess < screctno) {
    document.querySelector('.message').textContent = 'Too low';
    score--;
    document.querySelector('.score').textContent = score;
  } else {
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = score;
    }
    document.querySelector('.message').textContent = 'correct guess';
    document.querySelector('.number').textContent = screctno;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
  }
};
document.querySelector('.check').addEventListener('click', checkfun);
document.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') checkfun();
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  screctno = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('.message').textContent = 'start guessing';
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});
