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


function updateScore() {
  document.querySelector("#win").textContent = win;
  document.querySelector("#loss").textContent = loss;
}


btn.forEach((button) => {

  button.addEventListener("click", () => {
    playRound(button.id);
    updateScore();
  });

  });






/* 
display result texts in dom
display if won or loss once one reaches 5 points
reset on next button press.

*/
