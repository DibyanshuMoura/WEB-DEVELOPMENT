let randMove;
let autoPlayIntervalID;
let scoreCount = JSON.parse(localStorage.getItem("score")) || {
  win: 0,
  loss: 0,
  draw: 0,
};

document.querySelector(
  ".scoreCount"
).innerHTML = `Wins: ${scoreCount.win}, Losses: ${scoreCount.loss}, Ties: ${scoreCount.draw}`;

function playGame(userMove) {
  randMove = Math.random();
  let outcome;
  if (randMove <= 1 / 3) {
    outcome = winLossDetection(userMove, 'rock');
  }
  else if (randMove > 1 / 3 && randMove <= 2 / 3) {
    outcome = winLossDetection(userMove, 'paper');
  }
  else {
    outcome = winLossDetection(userMove, 'scissors');
  }

  if (outcome === 'win') scoreCount.win++;
  else if (outcome === 'lose') scoreCount.loss++;
  else scoreCount.draw++;

  document.querySelector('.scoreCount')
    .innerHTML = `Wins: ${scoreCount.win}, Losses: ${scoreCount.loss}, Ties: ${scoreCount.draw}`;

  localStorage.setItem('score', JSON.stringify(scoreCount));
}

function winLossDetection(userMove, computerMove) {
  if (userMove === 'rock') {
    if (computerMove === 'rock')
      return 'draw';
    else if (computerMove === 'paper')
      return 'lose';
    else
      return 'win';
  } else if (userMove === 'paper') {
    if (computerMove === 'rock')
      return 'win';
    else if (computerMove === 'paper')
      return 'draw';
    else
      return 'lose';
  } else {
    if (computerMove === 'rock')
      return 'lose';
    else if (computerMove === 'paper')
      return 'win';
    else
      return 'draw';
  }
}

function autoPilotPlay() {
  let userRandMove = Math.random();
  if (userRandMove <= 1 / 3) {
    playGame('rock');
  }
  else if (userRandMove > 1 / 3 && userRandMove <= 2 / 3) {
    playGame('paper');
  }
  else {
    playGame('scissors');
  }
}

document.querySelector('.rock').addEventListener('click', () => playGame('rock'));
document.querySelector('.paper').addEventListener('click', () => playGame('paper'));
document.querySelector('.scissors').addEventListener('click', () => playGame('scissors'));

function resetScore() {
  scoreCount.win = 0;
  scoreCount.loss = 0;
  scoreCount.draw = 0;
  localStorage.removeItem('score');
  document.querySelector('.scoreCount')
    .innerHTML = `Wins: 0, Losses: 0, Ties: 0`
}

document.querySelector('.resetButton').addEventListener('click', resetScore);

function autoPilotPlayButton() {
  if (document.querySelector('.autoPlay').innerHTML === 'Auto Play') {
    document.querySelector('.autoPlay').innerHTML = 'Stop Play';
    autoPLayIntervalID = setInterval(autoPilotPlay, 1000);
  } else {
    document.querySelector('.autoPlay').innerHTML = 'Auto Play';
    clearInterval(autoPLayIntervalID);
  }

}

document.querySelector('.autoPlay').addEventListener('click', autoPilotPlayButton);

document.body.addEventListener('keydown', (event) => {keyPlay(event);});

function keyPlay (event) {
  if (event.key === 'r') playGame('rock');
  else if  (event.key === 'p') playGame('paper');
  else if (event.key === 's') playGame('scissors');
};