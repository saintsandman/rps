function getComputerChoice() {
  const options = ["rock", "paper", "scissors"];

  const choice = options[Math.floor(Math.random() * (options.length))];
  
  return choice;
  
}

let win = 0;
let loss = 0;


function winRound() {
  return win = ++win;
}

function loseRound() {
  return loss = ++loss;
}

result = document.querySelector("#result");


function playRound(playerSelection) {
 
  
  
  let computerSelection = getComputerChoice();

  
  
  if (playerSelection == "rock" && computerSelection == "scissors") {
    winRound();
    return result.textContent = "You Win! Rock beats Scissors!";
  } else if (playerSelection == "rock" && computerSelection == "paper") {
    loseRound();
    return result.textContent = "You Lose! Paper beats Rock!";

  } else if (playerSelection == "paper" && computerSelection == "rock") {
    winRound();
    return result.textContent = "You Win! Paper beats Rock!";
  } else if (playerSelection == "paper" && computerSelection == "scissors") {
    loseRound();
    return result.textContent = "You Lose! Scissors beats Paper!";
 
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    winRound();
    return result.textContent = "You Win! Scissors beats Paper!";
  } else if (playerSelection == "scissors" && computerSelection == "rock") {
    loseRound();
    return result.textContent = "You Lose! Rock beats Paper!";

  } else if (playerSelection == computerSelection) {
    result.textContent = "It's a tie! Try again!";
    return;

  } else {
    result.textContent = "Invalid. Please enter 'Rock', 'Paper', or 'Scissors' :3";
    return;
  }

}

const btn = document.querySelectorAll("button.choice");

verdict = document.createElement("div");
verdict.setAttribute("id", "verdict");
document.body.appendChild(verdict);


function updateScore() {

  
  document.querySelector("#win").textContent = win;
  document.querySelector("#loss").textContent = loss;

  if (win == 5) {
    verdict.textContent = "You won the game! Select an option to play again.";
  }

  if (loss == 5) {
    verdict.textContent = "You lost the game! Select an option to play again.";
  }
}

function resetScore() {
  if ((win == 5) || (loss == 5)) {
    win = 0;
    loss = 0;
    verdict.textContent = "";
  }
}

btn.forEach((button) => {

  button.addEventListener("click", () => {
    resetScore();
    playRound(button.id);
    updateScore();
  });

  });
