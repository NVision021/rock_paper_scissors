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

/*Function that gets the user input */
function getHumanChoice() {
  return prompt("Rock, Paper or Scissors?").toLowerCase();
}

/*Global variables that record the score*/
let humanScore = 0;
let computerScore = 0;

/*Functions that provides text and increases score as appropriate*/
function computerWins(computerChoice, humanChoice) {
  let capitalisedComputer = computerChoice.slice(0,1).toUpperCase() + computerChoice.slice(1).toLowerCase();
  console.log(`Computer picked ${computerChoice}. You lose! ${capitalisedComputer} beats ${humanChoice}!`);
  computerScore += 1;
}

function humanWins(computerChoice, humanChoice) {
  let capitalisedHuman = humanChoice.slice(0,1).toUpperCase() + humanChoice.slice(1).toLowerCase();
  console.log(`Computer picked ${computerChoice}. You win! ${capitalisedHuman} beats ${computerChoice}!`);
  humanScore += 1;
}


/*Function that plays a single round */
function playRound () {
  let computerChoice = getComputerChoice();
  let humanChoice = getHumanChoice();

  if (computerChoice === humanChoice) {
    console.log("It's a Tie! No one wins!")
  } else if (computerChoice === "rock" && humanChoice === "scissors" || computerChoice === "scissors" && humanChoice === "paper" || computerChoice === "paper" && humanChoice === "rock") {
    computerWins(computerChoice, humanChoice)
  } else if (humanChoice === "rock" && computerChoice === "scissors" || humanChoice === "scissors" && computerChoice === "paper" || humanChoice === "paper" && computerChoice === "rock") {
    humanWins(computerChoice, humanChoice)
  }

  console.log("Scores:")
  console.log(`Computer: ${computerScore}`)
  console.log(`Player: ${humanScore}`)
}

/*Logic to play entire game */
function playGame() {
  playRound()
  playRound()
  playRound()
  playRound()
  playRound()

  if (humanScore === computerScore) {
    console.log("After 5 rounds, it's a Tie!")
  } else if (humanScore > computerScore) {
    console.log("After 5 rounds, you are the winner!")
  } else {
    console.log("After 5 rounds, the computer is the winner!")
  }
}

playGame()