// Zufallszahl zwischen 1-3 erstellen
let randomNumber = Math.floor(Math.random() * 3) + 1;

// Computerchoice Funktion erstellen
function getComputerChoice() {
  if (randomNumber === 1) {
    return "Rock";
  } else if (randomNumber === 2) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

console.log(getComputerChoice());
