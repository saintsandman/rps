function getComputerChoice() {
  const options = ["rock", "paper", "scissors"];

  const choice = options[Math.floor(Math.random() * (options.length))];
  
  return choice;
  
}

let win = 0;
let loss = 0


function winRound() {
  return win = ++win;
}

function loseRound() {
  return loss = ++loss;
}


function playRound(playerSelection) {
 
  
  
  let computerSelection = getComputerChoice();

  
  
  if (playerSelection == "rock" && computerSelection == "scissors") {
    winRound();
    return console.log("You Win! Rock beats Scissors!");
  } else if (playerSelection == "rock" && computerSelection == "paper") {
    loseRound();
    return console.log("You Lose! Paper beats Rock!");

  } else if (playerSelection == "paper" && computerSelection == "rock") {
    winRound();
    return console.log("You Win! Paper beats Rock!");
  } else if (playerSelection == "paper" && computerSelection == "scissors") {
    loseRound();
    return console.log("You Lose! Scissors beats Paper!");
 
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    winRound();
    return console.log("You Win! Scissors beats Paper!");
  } else if (playerSelection == "scissors" && computerSelection == "rock") {
    loseRound();
    return console.log("You Lose! Rock beats Paper!");

  } else if (playerSelection == computerSelection) {
    console.log("It's a tie! Try again!")
    return;

  } else {
    console.log ("Invalid. Please enter 'Rock', 'Paper', or 'Scissors' :3");
    return;
  }

}

const btn = document.querySelectorAll("button.choice");


function changeScore() {
  document.querySelector("#win").textContent = win;
  document.querySelector("#loss").textContent = loss;
}


btn.forEach((button) => {

  button.addEventListener("click", () => {
    playRound(button.id);
    changeScore();
  });

  });






/* 
when the score changes, update the variable. 

*/
