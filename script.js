// Computerchoice Funktion erstellen
function getComputerChoice() {
// Zufallszahl zwischen 1-3 erstellen
  const randomNumber = Math.floor(Math.random() * 3) + 1;
  if (randomNumber === 1) {
    return "rock";
  } else if (randomNumber === 2) {
    return "paper";
  } else {
    return "scissors";
  }
}

console.log(getComputerChoice());

// Humanchoice Funktion erstellen
function getHumanChoice() {
  return prompt("Insert Rock, Paper or Scissors").toLowerCase();
}

const humanChoice = getHumanChoice();

console.log(humanChoice);

//scores festlegen
let computerScore = 0;
let humanScore = 0;
