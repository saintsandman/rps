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


function playRound(playerSelection, computerSelection) {
  playerSelection = prompt("Please Enter 'Rock', 'Paper', or 'Scissors'!");
  
  playerSelection = playerSelection.toLowerCase();
  computerSelection = getComputerChoice();

  
  
  if (playerSelection == "rock" && computerSelection == "scissors") {
    winRound();
    return "You Win! Rock beats Scissors!";
  } else if (playerSelection == "rock" && computerSelection == "paper") {
    loseRound();
    return "You Lose! Paper beats Rock!";

  } else if (playerSelection == "paper" && computerSelection == "rock") {
    winRound();
    return "You Win! Paper beats Rock!";
  } else if (playerSelection == "paper" && computerSelection == "scissors") {
    loseRound();
    return "You Lose! Scissors beats Paper!";
 
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    winRound();
    return "You Win! Scissors beats Paper!";
  } else if (playerSelection == "scissors" && computerSelection == "rock") {
    loseRound();
    return "You Lose! Rock beats Paper!";

  } else if (playerSelection == computerSelection) {
    console.log("It's a tie! Try again!")
    return playRound();

  } else {
    console.log ("Invalid. Please enter 'Rock', 'Paper', or 'Scissors' :3");
    return playRound();
  }

}

const btn = document.querySelectorAll("button.choice");




btn.forEach((button) => {
  

  button.addEventListener("click", () => console.log(button.id));

  }
)

/* 
create a button for rps
add class to buttons
select the buttons in js and put into variable
if you click a button, then it inputs the text content of the id of the button into the play round function
make it so that it gets the id of the button
it puts it into playround playerselection


when pressed, it does playround function with "rock" as selection

*/
