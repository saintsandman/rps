function getComputerChoice() {
  const options = ["Rock", "Paper", "Scissors"];

  const choice = options[Math.floor(Math.random() * (options.length))];


  console.log(choice);
}