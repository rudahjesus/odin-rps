var humanPrompt; var humanChoice; var computerChoice; var machineOptions = [" rock", " paper", " scissors"];
var validValue;
var random; var playerScore = 0; var machineScore = 0;
var scoreDisplay = document.querySelector('.result#humanScore'); 
var i; 
var results = document.querySelector('.result');
var scoreboard = document.querySelector('.result#scoreboard');
var finalScore = document.querySelector('.result#finalScore');
var rounds = 0;



function getComputerChoice(){
    random = Math.floor(Math.random() * machineOptions.length);
    computerChoice = machineOptions[random];
    computerChoice = computerChoice.toLowerCase();
    return computerChoice;
}

function getWinner(){

    if(playerScore > machineScore){
        finalScore.innerText = "You won the game! I am fodder";
    }
    else if(playerScore < machineScore){
        finalScore.innerText = "You lost! You are fodder";

    }
    else if(playerScore == machineScore){
        finalScore.innerText = "we both fodder";
    }
}


function playGame(humanChoice, computerChoice){
    getComputerChoice();
    results.innerText = `You chose ${humanChoice}, computer chose ${computerChoice}`;
    //console.log(humanChoice);
    //console.log(computerChoice);
    if(humanChoice === "rock" && computerChoice === " scissors" || 
        humanChoice === "scissors" && computerChoice === " paper" || 
        humanChoice === "paper" && computerChoice === " rock"){

        scoreboard.innerText = "You Won!"
        playerScore++;
      }

    else if(humanChoice === "rock" && computerChoice === " paper" ||
         humanChoice === "scissors" && computerChoice === " rock" || 
         humanChoice === "paper" && computerChoice === " scissors"){

        scoreboard.innerText = "You Lost!"
        machineScore++;
    }
    else{
        scoreboard.innerText = "Tie!"
    }
    scoreDisplay.innerText = `Player score is: ${playerScore} | CPU score is: ${machineScore}`;
    rounds++;
    console.log(rounds);

    if(rounds == 5){
        getWinner();
    }
}







