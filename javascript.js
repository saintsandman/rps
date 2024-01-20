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
  } else if (playerSelection == "rock" && computerSelection == "rock") {
    return "It's a tie!";
  } else {
    return "Invalid. Please enter 'Rock', 'Paper', or 'Scissors' :3";
  }
}



