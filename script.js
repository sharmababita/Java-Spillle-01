const rockButton = document.querySelector("#rock")
const paperButton = document.querySelector("#paper")
const scissorsButton = document.querySelector("#scissors")
const displayYourChoice = document.querySelector("#yourchoice")
const displayComputerChoice = document.querySelector("#computerChoice");
const displayResults = document.querySelector("#results");

const displayWins = document.querySelector("#Wins");
const displayDraws = document.querySelector("#Draws");
const displayLosses = document.querySelector("#Losses");
const displayCash = document.querySelector("#Cash");
const displayCost = document.querySelector("#Cost");

let wins = 0;
let draws = 0;
let Losses = 0;
let cost = 1000;
let cash = 2000;
let countingNumber =;

let yourChoice;

const choices =["rock", "paper", "scissors"];

console.log(choices[1]);

console.log(rockButton, paperButton,scissorsButton);

function selectRock() {
    yourChoice = "rock"
    console.log("Hei");
    computerChoice();
}
rockButton.addEventListener(`click`, selectRock);

paperButton.addEventListener(`click`, selectPaper);

function selectPaper() {
    yourChoice = 'paper'
    computerChoice();
}

function selectScissors() {
    yourChoice = 'scissors';
computerChoice();
}


scissorsButton.addEventListener("click", selectScissors);



function computerChoice() {
    let computerNumber = choices[Math.floor(Math.random()*3)];
    displayYourChoice.innerHTML = yourChoice;
    displayComputerChoice.innerHTML = computerNumber;

    if(yourChoice === computerNumber) {
    displayResults.innerHTML = "Its a draw";
    draws++;
    displayDraws.innerHTML = "Draws: " + draws;
} else if (
    computerNumber === "rock" && yourChoice === "paper"){
        displayResults.innerHTML = "You win!";

        wins++;
        displayWins.innerHTML = "Wins: " + wins;
    } else if (computerNumber === "paper" && yourChoice === "scissors") {
        displayResults.innerHTML = " You win!";

        wins++;
        displayWins.innerHTML = "Wins: " + wins;

        wins++;
        displayWins.innerHTML = "Wins: " + wins;
        }

        else if (computerNumber === "scissors" && yourChoice === "rock") { 
            displayResults.innerHTML === "You win!";    
            
            wins++;
        displayWins.innerHTML = "Wins: " + wins;
    } else {
        displayResults.innerHTML = "You lose!";

        Losses++;
        displayLosses.innerHTML = "Losses: " + wins;
    }

    




