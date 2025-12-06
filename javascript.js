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
    
    if (humanChoice === computerChoice) {
        console.log(`You chose ${humanChoice}, I chose ${computerChoice}. It's a draw! Go again.`);
        return 0;
    } else if (humanChoice === "rock" && computerChoice === "scissors" ||
               humanChoice === "paper" && computerChoice === "rock" ||
               humanChoice === "scissors" && computerChoice === "paper") {
        humanChoice = humanChoice[0].toUpperCase() + humanChoice.slice(1); 
        computerChoice = computerChoice[0].toUpperCase() + computerChoice.slice(1); 
        console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
        // return 1;
        humanScore += 1;
        return humanScore

    } else if (humanChoice === "rock" && computerChoice === "paper" ||
               humanChoice === "paper" && computerChoice === "scissors" ||
               humanChoice === "scissors" && computerChoice === "rock") {
        humanChoice = humanChoice[0].toUpperCase() + humanChoice.slice(1);
        computerChoice = computerChoice[0].toUpperCase() + computerChoice.slice(1); 
        console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
        // return 2;
        computerScore += 1;
        return computerScore
    }
}

function playGame() {

    // let result = playRound(computerSelection, humanSelection);

    // for (i = 1; i <= 3; i++) {
    // let counter = 0;    
        // let result = playRound(computerSelection, humanSelection);
        playRound(computerSelection, humanSelection);
        // getHumanChoice();
        // console.log(playRound());
        // if (result === 1) {
        //     console.log("Return 1 was returned!");
        //     humanScore += 1;
        // } else if (result === 2) {
        //     console.log("Return 2 was returned!!!");
        //     computerScore += 1;
        // }
    }

    // console.log("Game over!");
// }


let computerScore = 0;
let humanScore = 0;

const computerSelection = getComputerChoice();
const humanSelection = getHumanChoice();

// for (i = 1; i <= 3; i++) {
// playRound(computerSelection, humanSelection);
playGame();
// getHumanChoice();
// console.log(playRound());
// }

console.log(computerSelection);
console.log(humanSelection);
console.log(humanScore);
console.log(computerScore);

