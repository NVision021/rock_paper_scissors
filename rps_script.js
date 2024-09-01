/* Function that returns Rock, Paper or Scissors */
function getComputerChoice() {
  let numberChoice = Math.random();
  let computerChoice = null;
  
  if (numberChoice <= 1/3) {
    computerChoice = "rock";
  } else if (numberChoice > 1/3 && numberChoice < 2/3) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }

  return computerChoice;
}

/*Adding event listener to each button that starts the game*/
const buttons = document.querySelectorAll("button");
buttons.forEach((button)=> {
  button.addEventListener("click", (event) => {
    let humanChoice = event.target.textContent.toLowerCase();
    playRound(humanChoice);
  })
})

/*Global variables that record the score*/
let humanScore = 0;
let computerScore = 0;

/*Store the results div in a variable*/
const resultsContainer = document.querySelector("#results-container");
resultsContainer.style.fontFamily = "roboto, sans-serif";

/*Functions that provides text and increases score as appropriate*/
function computerWins(computerChoice, humanChoice) {
  let capitalisedComputer = computerChoice.slice(0,1).toUpperCase() + computerChoice.slice(1).toLowerCase();
  resultsContainer.textContent = (`Computer picked ${computerChoice}. You lose! ${capitalisedComputer} beats ${humanChoice}!`);
  computerScore += 1;
}

function humanWins(computerChoice, humanChoice) {
  let capitalisedHuman = humanChoice.slice(0,1).toUpperCase() + humanChoice.slice(1).toLowerCase();
  resultsContainer.textContent = (`Computer picked ${computerChoice}. You win! ${capitalisedHuman} beats ${computerChoice}!`);
  humanScore += 1;
}

/*Function that checks score and resets if someone wins*/
function checkscore() {
  if (computerScore === 5) {
    resultsContainer.textContent += ("Computer reached 5 points. COMPUTER WINS!");
    computerScore = 0;
    humanScore = 0;
  } else if (humanScore === 5) {
    resultsContainer.textContent += (" You reached 5 points. YOU WIN!");
    computerScore = 0;
    humanScore = 0;
  }
}

/*Function that plays a single round */
function playRound (humanChoice) {
  let computerChoice = getComputerChoice();
  if (computerChoice === humanChoice) {
    resultsContainer.textContent = ("It's a tie! No one wins!");
  } else if (computerChoice === "rock" && humanChoice === "scissors" || computerChoice === "scissors" && humanChoice === "paper" || computerChoice === "paper" && humanChoice === "rock") {
    computerWins(computerChoice, humanChoice);
  } else if (humanChoice === "rock" && computerChoice === "scissors" || humanChoice === "scissors" && computerChoice === "paper" || humanChoice === "paper" && computerChoice === "rock") {
    humanWins(computerChoice, humanChoice);
  }

  resultsContainer.textContent += (` Computer: ${computerScore}, Player: ${humanScore}.`);
  checkscore()
}





