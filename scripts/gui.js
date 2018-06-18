function computerPlay () {
switch (Math.floor(Math.random() * 3)) {
  case 0:
  return 'rock';
  case 1:
  return 'paper';
  case 2:
  return 'scissors';
  default:
  console.error('Computer played something weird!');
  return;
}
}

function playRound (playerSelection, computerSelection) {
playerSelection = playerSelection.toLowerCase();
switch (playerSelection) {
  case 'rock':
  switch (computerSelection) {
    case 'rock':
    return 'Rock vs. rock: TIE!'
    case 'paper':
    return 'Paper covers rock: COMPUTER wins!'
    case 'scissors':
    return 'Rock crushes scissors: PLAYER wins!'
  }
  case 'paper':
  switch (computerSelection) {
    case 'rock':
    return 'Paper covers rock: PLAYER wins!'
    case 'paper':
    return 'Paper vs. paper: TIE!'
    case 'scissors':
    return 'Scissors cut paper: COMPUTER wins!'
  }
  case 'scissors':
  switch (computerSelection) {
    case 'rock':
    return 'Rock crushes scissors: COMPUTER wins!'
    case 'paper':
    return 'Scissors cut paper: PLAYER wins!'
    case 'scissors':
    return 'Scissors vs. scissors: TIE!'
  }
  default:
  console.error(`Player played "${playerSelection}", which is not a valid play.`);
  console.info('Enter either "paper", "rock", or "scissors"');
  return playRound(prompt('Player, what is your choice?'),computerSelection);
}
}

function game () {
const nb_games = prompt("How many games you want to play?");
console.info('To play, enter either "paper", "rock", or "scissors"');
let playerSelection,
computerSelection,
scorePlayer = 0,
scoreComputer = 0;

for (i = 0; i < nb_games; i++) {
  playerSelection = prompt('Player, what is your choice?');
  computerSelection = computerPlay();
  gameResult = playRound(playerSelection, computerSelection);
  console.log(gameResult);
  if (gameResult.includes('PLAYER')) scorePlayer++;
  if (gameResult.includes('COMPUTER')) scoreComputer++;
}

if (scorePlayer > scoreComputer) {
  console.log(`PLAYER wins ${scorePlayer}:${scoreComputer}! Congratulation!`);
}
else if (scorePlayer < scoreComputer) {
  console.log(`COMPUTER wins ${scoreComputer}:${scorePlayer}! JS is too strong…`);
}
else {
  console.log(`You are tie: ${scorePlayer}:${scoreComputer}!`);
}
}
