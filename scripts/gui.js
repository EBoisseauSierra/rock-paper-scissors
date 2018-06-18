let playerSelection
let computerSelection
let scorePlayer = 0;
let scoreComputer = 0;

let btns = document.querySelectorAll('button');
btns.forEach(btn => btn.addEventListener('click', playRound))

function playRound(e) {
    playerSelection = e.target.name;
    computerSelection = computerPlay();
    gameResult = defineWinner(playerSelection, computerSelection);
    if (gameResult === 'player') increaseScorePlayer();
    if (gameResult === 'computer') increaseScoreComputer();
}

function computerPlay() {
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

function defineWinner (playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    switch (playerSelection) {
      case 'rock':
          switch (computerSelection) {
            case 'rock':
                console.log('Rock vs. rock: TIE!');
                return 'tie';
            case 'paper':
                console.log('Paper covers rock: COMPUTER wins!');
                return 'computer';
            case 'scissors':
                console.log('Rock crushes scissors: PLAYER wins!');
                return 'player';
          }
      case 'paper':
          switch (computerSelection) {
            case 'rock':
                console.log('Paper covers rock: PLAYER wins!');
                return 'player';
            case 'paper':
                console.log('Paper vs. paper: TIE!');
                return 'tie';
            case 'scissors':
                console.log('Scissors cut paper: COMPUTER wins!');
                return 'computer';
          }
      case 'scissors':
          switch (computerSelection) {
            case 'rock':
                console.log('Rock crushes scissors: COMPUTER wins!');
                return 'computer';
            case 'paper':
                console.log('Scissors cut paper: PLAYER wins!');
                return 'player';
            case 'scissors':
                console.log('Scissors vs. scissors: TIE!');
                return 'tie';
          }
      default:
        console.error(`Player played "${playerSelection}", which is not a valid play.`);
        console.info('Enter either "paper", "rock", or "scissors"');
        return playRound(prompt('Player, what is your choice?'),computerSelection);
    }
}

function increaseScorePlayer() {
    scorePlayer +=1;
    let scoreText = document.querySelector('#score-player');
    scoreText.textContent = scorePlayer.toString();
}

function increaseScoreComputer() {
    scoreComputer +=1;
    let scoreText = document.querySelector('#score-computer');
    scoreText.textContent = scoreComputer.toString();
}
