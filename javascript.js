// -- Declare function to return the computer's choice -- //
function getComputerChoice() {
    // Declare variable to randomly produce three numbers - 1, 2 and 3 
    let computerChoice = Math.ceil(Math.random() * 3);
    // Conditional statement to determine and return computer's choice
    if (computerChoice === 1) {
        return "rock";
    } else if (computerChoice === 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

// -- Declare function to prompt and return the human player's choice -- //
function getHumanChoice() {
    // Declare variable to prompt human player for their choice and convert to lower case
    let humanChoice = prompt("Please type in \"Rock\", \"Paper\" or \"Scissors\": ").toLowerCase();
    return humanChoice;
}

// -- Declare function that takes two arguments and plays a round of Rock Paper Scissors -- //
function playRound(computerChoice, humanChoice) {
    // Conditional statement to determine the outcome, increment the score and return the result
    if (humanChoice === computerChoice) {
        console.log(`You chose ${humanChoice}, I chose ${computerChoice}. It's a draw!`); // output to console
        alert(`You chose ${humanChoice}, I chose ${computerChoice}. It's a draw!`); // output to screen
        return 0;
    } else if (humanChoice === "rock" && computerChoice === "scissors" ||
               humanChoice === "paper" && computerChoice === "rock" ||
               humanChoice === "scissors" && computerChoice === "paper") {
        // Format choices for display
        humanChoice = humanChoice[0].toUpperCase() + humanChoice.slice(1); 
        computerChoice = computerChoice[0].toUpperCase() + computerChoice.slice(1); 
        console.log(`You win! ${humanChoice} beats ${computerChoice}.`); // output to console
        alert(`You win! ${humanChoice} beats ${computerChoice}.`); // output to screen
        humanScore += 1; // increment score
        return humanScore

    } else if (humanChoice === "rock" && computerChoice === "paper" ||
               humanChoice === "paper" && computerChoice === "scissors" ||
               humanChoice === "scissors" && computerChoice === "rock") {
        // Format choices for display
        humanChoice = humanChoice[0].toUpperCase() + humanChoice.slice(1);
        computerChoice = computerChoice[0].toUpperCase() + computerChoice.slice(1); 
        console.log(`You lose! ${computerChoice} beats ${humanChoice}.`); // output to console
        alert(`You lose! ${computerChoice} beats ${humanChoice}.`); // output to screen
        computerScore += 1; // increment score
        return computerScore
    }
}

// -- Declare function to play an entire game -- //
function playGame() {
    // for loop to play number of required rounds
    for (i = 1; i <= 5; i++) {
        // Declare variables to get computer and human choices 
        const computerSelection = getComputerChoice();
        const humanSelection = getHumanChoice();
        // Call the function to play a single round
        playRound(computerSelection, humanSelection);
    }
    // Conditional statement to determine the final outcome of the game
    // and output the result to both the console and screen
    if (humanScore > computerScore) {
        console.log("Congratulations, you win!");
        alert("Congratulations, you win!");
    } else if (computerScore > humanScore) {
        console.log("You lose. Better luck next time!");
        alert("You lose. Better luck next time!");
    } else {
        console.log("It's a draw! Let's play again.");
        alert("It's a draw! Let's play again.");
    }
}

// Initialise variables for score keeping
let computerScore = 0;
let humanScore = 0;

// Call the function to play a game
playGame();