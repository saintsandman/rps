function getComputerChoice() {
  const options = ["rock", "paper", "scissors"];

  const choice = options[Math.floor(Math.random() * (options.length))];
  
  return choice;
  
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = getComputerChoice();
  
  if (playerSelection == "rock" && computerSelection == "scissors") {
    return "You Win! Rock beats Scissors!";
  } else if (playerSelection == "rock" && computerSelection == "paper") {
    return "You Lose! Paper beats Rock!";
} else if (playerSelection == "paper" && computerSelection == "rock") {
    return "You Win! Paper beats Rock!";
} else if (playerSelection == "paper" && computerSelection == "scissors") {
    return "You Lose! Scissors beats Paper!";
} else if (playerSelection == "scissors" && computerSelection == "paper") {
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
  prompt("Please Enter 'Rock', 'Paper', or 'Scissors'!");
}

