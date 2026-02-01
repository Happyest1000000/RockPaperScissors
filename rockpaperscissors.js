console.log("Hello World");

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

function getComputerChoice() {
    number = (Math.random()*100);
    if number <= 33 {
        computerChoice = "rock";
    } else if number 
}