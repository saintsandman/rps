function getComputerChoice() {
  const options = ["rock", "paper", "scissors"];

  const choice = options[Math.floor(Math.random() * (options.length))];
  
  return choice;
  
}

let score = 0

function winRound() {
  return score = ++score;
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = getComputerChoice();
  
  if (playerSelection == "rock" && computerSelection == "scissors") {
    winRound();
    return "You Win! Rock beats Scissors!";
  } else if (playerSelection == "rock" && computerSelection == "paper") {
    return "You Lose! Paper beats Rock!";
} else if (playerSelection == "paper" && computerSelection == "rock") {
    winRound();
    return "You Win! Paper beats Rock!";
} else if (playerSelection == "paper" && computerSelection == "scissors") {
    return "You Lose! Scissors beats Paper!";
} else if (playerSelection == "scissors" && computerSelection == "paper") {
    winRound();
    return "You Win! Scissors beats Paper!";
} else if (playerSelection == "scissors" && computerSelection == "rock") {
    return "You Lose! Rock beats Paper!";
  } else if (playerSelection == computerSelection) {
    return "It's a tie! Try again!";
  } else {
    return "Invalid. Please enter 'Rock', 'Paper', or 'Scissors' :3";
  }

}

function game() {
 playerSelection = prompt("Please Enter 'Rock', 'Paper', or 'Scissors'!");
 console.log(playRound(playerSelection));
 
 playerSelection = prompt("ROUND 2: Please Enter 'Rock', 'Paper', or 'Scissors'!");
 console.log(playRound(playerSelection));
 
 playerSelection = prompt("ROUND 3: Please Enter 'Rock', 'Paper', or 'Scissors'!");
 console.log(playRound(playerSelection));
 
 playerSelection = prompt("ROUND 4: Please Enter 'Rock', 'Paper', or 'Scissors'!");
 console.log(playRound(playerSelection));
 
 playerSelection = prompt("ROUND 5: Please Enter 'Rock', 'Paper', or 'Scissors'!");
 console.log(playRound(playerSelection));
}


