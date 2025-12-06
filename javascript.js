function getComputerChoice() {
    let computerChoice = Math.ceil(Math.random() * 3);
    if (computerChoice === 1) {
        // console.log("Rock");
        return "rock";
    } else if (computerChoice === 2) {
        // console.log("Paper");
        return "paper";
    } else {
        // console.log("Scissors");
        return "scissors";
    }
}

function getHumanChoice() {
    let humanChoice = prompt("Please type in \"Rock\", \"Paper\" or \"Scissors\": ").toLowerCase();
    // console.log(humanChoice);
    return humanChoice;
}

function playRound(computerChoice, humanChoice) {
    // let computerScore = 0;
    // let humanScore = 0;

    if (humanChoice === computerChoice) {
        console.log(`You chose ${humanChoice}, I chose ${computerChoice}. It's a draw!`);
        return 0;
    } else if (humanChoice === "rock" && computerChoice === "scissors" ||
               humanChoice === "paper" && computerChoice === "rock" ||
               humanChoice === "scissors" && computerChoice === "paper") {
        humanChoice = humanChoice[0].toUpperCase() + humanChoice.slice(1); 
        computerChoice = computerChoice[0].toUpperCase() + computerChoice.slice(1); 
        console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
        alert(`You win! ${humanChoice} beats ${computerChoice}.`);
        humanScore += 1;
        return humanScore

    } else if (humanChoice === "rock" && computerChoice === "paper" ||
               humanChoice === "paper" && computerChoice === "scissors" ||
               humanChoice === "scissors" && computerChoice === "rock") {
        humanChoice = humanChoice[0].toUpperCase() + humanChoice.slice(1);
        computerChoice = computerChoice[0].toUpperCase() + computerChoice.slice(1); 
        console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
        computerScore += 1;
        return computerScore
    }
}

function playGame() {

    for (i = 1; i <= 5; i++) {
        const computerSelection = getComputerChoice();
        const humanSelection = getHumanChoice();

        playRound(computerSelection, humanSelection);
 
        console.log(computerSelection);
        console.log(humanSelection);
    }

    // console.log("You scored: " + humanScore);
    // console.log("I scored: " + computerScore);

    if (humanScore > computerScore) {
        alert("Congratulations, you win!");
    } else if (computerScore > humanScore) {
        alert("You lose. Better luck next time!");
    } else {
        alert("It's a draw! Let's play again.");
    }
}

function declareWinner(test1, test2) {
    // let test1 = 0;
    // let test2 = 0;
    console.log(test1);
    alert("This is from the declareWinner function: " + test2);
}

let computerScore = 0;
let humanScore = 0;

// for (i = 1; i <= 5; i++) {
    playGame();
// }

console.log("You scored: " + humanScore);
console.log("I scored: " + computerScore);

declareWinner(humanScore, computerScore);
