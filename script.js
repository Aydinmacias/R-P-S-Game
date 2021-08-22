var wins =0;
var ties =0;
var losses = 0;
var userChoice = prompt("Enter Rock, Paper, Scissors:");

var options =["Rock","Paper","Scissors"];

var playGame = function() {

 if(!userChoice){
   return;
}}

var index = Math.floor(Math.random()*options.length);
var computerChoice= options[index];

alert("The computer chose "  + computerChoice);

if(userChoice=== computerChoice) {
    ties++;
    window.alert("It's a tie!");
}
else if(
    (userChoice==="Rock" && computerChoice === "Scissors")||
    (userChoice==="Paper" && computerChoice === "Rock")||
    (userChoice=== "Scissors" && computerChoice === "Paper")
){
    wins++;
   alert("You Win!");
}

else{
    losses++;
    alert("You Lost!");
}

window.alert(
    "Stats:\nWins: " + wins + "\nLosses: " + losses + "\nTies: " + ties
);
var playAgain =confirm("Play Again?");
if(playAgain){
    playGame();
}
playGame()