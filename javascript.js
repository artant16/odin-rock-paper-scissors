// -- Function to return the computer's choice -- //
function getComputerChoice() {
    // Declare variable to randomly produce the numbers 1, 2 or 3 
    let computerChoice = Math.ceil(Math.random() * 3);
    // Conditional statement to determine and return computer's choice
    if (computerChoice === 1) { 
      return "Rock";
    } else if (computerChoice === 2) { 
      return "Paper";
    } else { 
      return "Scissors";
    }
}

// -- Set variables for rock, paper and scissors buttons -- //
const rockSelection = document.querySelector("#rock");
const paperSelection = document.querySelector("#paper");
const scissorsSelection = document.querySelector("#scissors");

// -- Initialise variables for game play -- //
let gameOver = false;
let rounds = 5;
let roundsPlayed = 0;
let humanScore = 0;
let computerScore = 0;

// -- Rock button logic -- //
rockSelection.addEventListener("click", () => {
  if (gameOver === false) {
    newGameStarted(); // update notice that the game has started
    playRound(getComputerChoice(), "Rock"); // run a round of the game
    endGame(); // check if the required number of rounds have been played
  }
});

// -- Paper button logic -- //
paperSelection.addEventListener("click", () => {
  if (gameOver === false) {
    newGameStarted(); // update notice that the game has started
    playRound(getComputerChoice(), "Paper"); // run a round of the game
    endGame(); // check if the required number of rounds have been played
  }
});

// -- Scissor button logic -- //
scissorsSelection.addEventListener("click", () => {
  if (gameOver === false) {
    newGameStarted(); // update notice that the game has started
    playRound(getComputerChoice(), "Scissors"); // run a round of the game
    endGame(); // check if the required number of rounds have been played
  }
});

// -- Function to take two arguments and play a round of Rock Paper Scissors -- //
function playRound(computerChoice, humanChoice) {
  // Set variable for function to list results
  const outcome = document.createElement("li");
  // Conditional statement to determine outcome 
  if (humanChoice === computerChoice) {
    outcome.textContent = `Round ${roundsPlayed + 1} is a draw! 
                           We both chose ${humanChoice}!`; // result
    list.appendChild(outcome); // output result to list on screen
    roundsPlayed += 1; // increment rounds played counter
  } else if (humanChoice === "Rock" && computerChoice === "Scissors" ||
             humanChoice === "Paper" && computerChoice === "Rock" ||
             humanChoice === "Scissors" && computerChoice === "Paper") {
    outcome.textContent = `You win Round ${roundsPlayed + 1}! ${humanChoice} 
                           beats ${computerChoice}.`; // result
    list.appendChild(outcome); // output result to list on screen
    humanScore += 1; // increment player's score
    roundsPlayed += 1; // increment rounds played counter
  } else if (humanChoice === "Rock" && computerChoice === "Paper" ||
             humanChoice === "Paper" && computerChoice === "Scissors" ||
             humanChoice === "Scissors" && computerChoice === "Rock") {
    outcome.textContent = `You lose Round ${roundsPlayed + 1}! ${computerChoice} 
                           beats ${humanChoice}.`; // result
    list.appendChild(outcome); // output result to list on screen
    computerScore += 1; // increment computer's score
    roundsPlayed += 1; // increment rounds played counter
  }
}

// -- Function to play an entire game -- //
function endGame() {
  // Conditional statement to test if game has ended and print final result
  if (roundsPlayed === rounds) {
    gameOver = true;
    if (humanScore > computerScore) {
        para.textContent = `Congratulations, you win ${humanScore} to 
                            ${computerScore}!`;
    } else if (computerScore > humanScore) {
        para.textContent = `You lose ${computerScore} to ${humanScore}. 
                            Better luck next time!`;
    } else {
        para.textContent = "It's a draw! Let's play again.";
    }
    result.appendChild(playAgain); // add button to play again
  }
}

// -- Function to start a new game -- //
function startNewGame() {
  start.textContent = "Click on Rock, Paper or Scissors to start playing!";
}

// -- Function to start a new game -- //
function newGameStarted() {
  start.textContent = "Playing started!";
}

// -- Set elements -- //
const container = document.querySelector("#container");
const start = document.querySelector("#start");
const result = document.querySelector("#result");
const list = document.querySelector("#list");
const para = document.querySelector("#para");
const playAgain = document.createElement("button");

// -- Set the button to play again -- //
playAgain.textContent = "Click here to play again!";
playAgain.addEventListener('click', function() {
  list.replaceChildren(); // clear list of results
  para.replaceChildren(); // clear final result
  playAgain.remove(); // remove the playAgain button 
  // Re-initialise variables for game play
  gameOver = false;
  roundsPlayed = 0;
  humanScore = 0;
  computerScore = 0;
  startNewGame();
});