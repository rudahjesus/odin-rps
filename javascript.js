var humanPrompt; var humanChoice; var computerChoice; var machineOptions = ["rock", "paper", "scissors"];//string
var validValue; //bool
var random; var playerScore = 0; var machineScore = 0; //int
var i; var flagr, flagp, flags;
var result = document.getElementsByClassName('result'); 

function getComputerChoice(){
    random = Math.floor(Math.random() * machineOptions.length);
    computerChoice = machineOptions[random];
    computerChoice = computerChoice.toLowerCase();
    return computerChoice;
}

function playRound(humanChoice, computerChoice){
    getComputerChoice();
    console.log(humanChoice);
    console.log(computerChoice);

    if(humanChoice == "rock" && computerChoice == "scissors" || 
        humanChoice == "scissors" && computerChoice == "paper" || 
        humanChoice == "paper" && computerChoice == "rock"){

        result.innerText = 'You Won';
        playerScore++;
      }

    else if(humanChoice == "rock" && computerChoice == "paper" ||
         humanChoice == "scissors" && computerChoice == "rock" || 
         humanChoice == "paper" && computerChoice == "scissors"){

        result.innerText = 'You Lost';
        machineScore++;
    }

    console.log("The scoreboard is: Player - ", playerScore, "Computer: ", machineScore);
}

function getWinner(){

    if(playerScore > machineScore){
        console.log("You won the game! I am fodder");
    }
    else if(playerScore < machineScore){
        console.log("You lost! You are fodder");

    }
    else if(playerScore == machineScore){
        console.log("we both fodder");
    }
}


