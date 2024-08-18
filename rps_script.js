/* Function that returns Rock, Paper or Scissors */
function getComputerChoice() {
  let numberChoice = Math.random();
  let rpsChoice = null;
  
  if (numberChoice <= 1/3) {
    rpsChoice = "rock";
  } else if (numberChoice > 1/3 && numberChoice < 2/3) {
    rpsChoice = "paper";
  } else {
    rpsChoice = "scissors";
  }

  return rpsChoice;
}


/*Function that gets the user input */

/*?Global variables, ?Local variables that record the score*/

/*Function that plays a single round */

/*Logic to play entire game */