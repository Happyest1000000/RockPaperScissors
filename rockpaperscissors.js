// console.log("Hello World");

// PSEUDOCODE
// 1. Obtain player choice of Rock, Paper or Scissors
// 2. Obtain computer choice of Rock, Paper or Scissors
// 3. Compare player and computer choice
//      IF they are the same
//          Make no change to score
//          Print a tie message
//          Report scores and rounds remaining
//          IF less than five rounds complete
//              Report scores and rounds remaining
//              Begin next round
//          ELSE
//              Compare scores
//                  IF human higher
//                      Announce final score and human victory
//                  ELSE computer higher
//                      Announce final score and computer victory
//              Offer a way to rematch
//              IF rematch chosen
//                  Restart game
//      IF different
//          Evaluate winner
//          Announce winner
//          Add to winner's score
//          IF less than five rounds complete
//              Report scores and rounds remaining
//              Begin next round
//          ELSE
//              Compare scores
//                  IF human higher
//                      Announce final score and human victory
//                  ELSE computer higher
//                      Announce final score and computer victory
//              Offer a way to rematch
//              IF rematch chosen
//                  Restart game

// Play round
// Tally and announce score
// Repeat if not 5th round
// Stop if fifth round - reset and restart game

function getComputerChoice() {
    let num = (Math.random()*100);
    if (num <= 33) {
        computerChoice = "rock";
    } else if (num > 33 && num <= 67) {
        computerChoice = "paper";
    } else computerChoice = "scissors";
    return computerChoice;
}

// console.log (getComputerChoice());

function getHumanChoice(input) {
    input = prompt ("Rock, Paper or Scissors?","");
    lowerInput = input.toLowerCase();
    return lowerInput;
}

// console.log(getHumanChoice());

let humanScore = 0;
let computerScore = 0;
let roundCount = 1;
    
function playGame (){



function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log(`Tie! You both chose ${humanChoice}.`);
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log(`You win! Paper beats rock!`);
        ++humanScore;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log(`You win! Scissors beats paper!`);
        ++humanScore;
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log(`You win! Rock beats scissors!`);
        ++humanScore;
    } else if (computerChoice === "paper" && humanChoice === "rock") {
        console.log(`You lose! Paper beats rock!`);
        ++computerScore;
    } else if (computerChoice === "scissors" && humanChoice === "paper") {
        console.log(`You lose! Scissors beats paper!`);
        ++computerScore;
    } else if (computerChoice === "rock" && humanChoice === "scissors") {
        console.log(`You lose! Rock beats scissors!`);
        ++computerScore;
    }
}


const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();


if (roundCount < 5) {
    playRound(humanSelection, computerSelection);
    console.log(`Results After Round ${roundCount}: 
    Human: ${humanScore}
    Computer: ${computerScore}`);
    ++roundCount;
} else {
    playRound(humanSelection, computerSelection);
    console.log(`Final Score: 
    Human: ${humanScore}
    Computer: ${computerScore}`);
    roundCount=0;
    if (humanScore > computerScore) {
        console.log("Congratulations - you win!");
    } else {
        console.log("Better luck next time!");
    }
    console.log("Refresh the page to play again!");
}
}

playGame();
playGame();
playGame();
playGame();
playGame();