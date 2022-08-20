'use strict';

let seceretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector('.btn-check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  console.log(seceretNumber);

  // when there is no input
  if (!guess) {
    document.querySelector('.message').textContent = 'NO NUMBER';
  }

  // when input is equal to secret number
  else if (guess === seceretNumber) {
    document.querySelector('.message').textContent = 'HURRAH! CORRECT NUMBER';
    document.querySelector('.message').style.fontSize = '42px';
    document.querySelector('.head').style.textShadow = '2px 2px 2px #19a807';
    document.querySelector('.container').style.backgroundColor = '#19a807';
    document.querySelector('.btn-check').style.backgroundColor = '#19a807';
    document.querySelector('.container').style.boxShadow =
      '2px 2px 10px 10px #19a807';
    document.querySelector('.number').textContent = seceretNumber;
    document.querySelector('.number').style.width = '30rem';

    if (highscore < score) {
      highscore = score;
      document.querySelector('.highscore').textcontent = highscore;
    }
  }

  // when input is greater than the secret number
  else if (guess > seceretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Try lower Number!';
      score--;
      document.querySelector('.score').textContent = score;
      document.querySelector('.head').style.textShadow = '2px 2px 2px #a80707';
      document.querySelector('.container').style.backgroundColor = '#a80707';
      document.querySelector('.btn-check').style.backgroundColor = '#a80707';

      document.querySelector('.container').style.boxShadow =
        '2px 2px 10px 10px #a80707';
    } else {
      score = 0;
      document.querySelector('.message').textContent = 'YOU LOST!';
      document.querySelector('.message').style.fontSize = '53px';
      document.querySelector('.score').textContent = score;
      document.querySelector('.btn-check').style.backgroundColor = '#a80707';
    }
  }

  // when input is less than the secret number
  else if (guess < seceretNumber) {
    if (score > 0) {
      document.querySelector('.message').textContent = 'Try HIGHER Number!';
      score--;
      document.querySelector('.label-score').textContent = score;
      document.querySelector('.head').style.textShadow = '2px 2px 2px #a80707';
      document.querySelector('.container').style.backgroundColor = '#a80707';
      document.querySelector('.container').style.boxShadow =
        '2px 2px 10px 10px #a80707';
      document.querySelector('.btn-check').style.backgroundColor = '#a80707';
    } else {
      score = 0;
      document.querySelector('.message').textContent = 'YOU LOST!';
      document.querySelector('.message').style.fontSize = '53px';
      document.querySelector('.score').textContent = score;
    }
  }
});

document.querySelector('.btn-again').addEventListener('click', function () {
  score = 20;
  seceretNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('.message').textContent = 'Start Guessing...';
  document.querySelector('.container').style.backgroundColor = '#0000ff';
  document.querySelector('.container').style.boxShadow =
    '2px 2px 10px 10px #0000ff';
  document.querySelector('.btn-check').style.backgroundColor = '#0000ff';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').textContent = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').textContent = '?';
  // const myName = ()=> {
  //   console.log("Hello")
  //   return null
  // }

  // myName ? true : false;
});
