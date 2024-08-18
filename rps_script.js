/* Function that returns Rock, Paper or Scissors */
function getComputerChoice() {
  let numberChoice = Math.random();
  let computerChoice = null;
  
  if (numberChoice <= 1/3) {
    computerChoice = "rock";
  } else if (numberChoice > 1/3 && numberChoice < 2/3) {
    computerChoiceChoice = "paper";
  } else {
    computerChoice = "scissors";
  }

  return rpsChoice;
}

/*Function that gets the user input */
function getHumanChoice() {
  return prompt("Rock, Paper or Scissors?").toLowerCase();
}


/*?Global variables, ?Local variables that record the score*/

/*Function that plays a single round */

/*Logic to play entire game */