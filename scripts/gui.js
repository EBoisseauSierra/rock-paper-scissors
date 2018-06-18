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
    let userPlayedElement = e.target;
    let computerPlayedElement;
    switch (computerSelection) {
        case 'rock':
            computerPlayedElement = document.querySelector('.computer-rock');
            break;
        case 'paper':
            computerPlayedElement = document.querySelector('.computer-paper');
            break;
        case 'scissors':
            computerPlayedElement = document.querySelector('.computer-scissors');
            break;
        default:
            console.error('Undefined computer played element');
    }
    if (gameResult === 'player') {
        increaseScorePlayer();
    }
    else if (gameResult === 'computer') {
        increaseScoreComputer();
    }
    else {
        shakeScore();
    }
    highlightWinnerLooser(gameResult, userPlayedElement, computerPlayedElement);
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

function removeShake(e) {
    this.classList.remove('shake-horizontal');
}

function shakeScore() {
    let scoreElements = document.querySelectorAll('.score');
    scoreElements.forEach(element => element.classList.add('shake-horizontal'));
    scoreElements.forEach(element => element.addEventListener('animationend', removeShake));
}

function highlightWinnerLooser(winner, userPlayedElement, computerPlayedElement) {
    if (winner === 'player') {
        userPlayedElement.classList.add('winner');
        userPlayedElement.addEventListener('animationend', removeWinner);
        computerPlayedElement.classList.add('looser');
        computerPlayedElement.addEventListener('animationend', removeLooser)
    }
    else if (winner === 'computer') {
        userPlayedElement.classList.add('looser');
        userPlayedElement.addEventListener('animationend', removeLooser)
        computerPlayedElement.classList.add('winner');
        computerPlayedElement.addEventListener('animationend', removeWinner);
    }
    else {
        userPlayedElement.classList.add('tie');
        userPlayedElement.addEventListener('animationend', removeTie)
        computerPlayedElement.classList.add('tie');
        computerPlayedElement.addEventListener('animationend', removeTie)
    }
}

function removeWinner () {
    this.classList.remove('winner');
}

function removeLooser () {
    this.classList.remove('looser');
}

function removeTie () {
    this.classList.remove('tie');
}
