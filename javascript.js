var humanPrompt; var humanChoice; var computerChoice; var machineOptions = ["rock", "paper", "scissors"];//string
var validValue; //bool
var random; var playerScore = 0; var machineScore = 0; //int
var i;

function getHumanChoice(){
    humanPrompt = prompt("Jo Ken Po")
    humanPrompt = humanPrompt.toLowerCase();
    if(humanPrompt === "rock" || humanPrompt === "paper" || humanPrompt === "scissors"){
        validValue = true;
        humanChoice = humanPrompt
        return humanChoice;
    }
    else{
        validValue == false;
        console.log("Invalid");
    }
}

function getComputerChoice(){
    random = Math.floor(Math.random() * machineOptions.length);
    computerChoice = machineOptions[random];
    computerChoice = computerChoice.toLowerCase();
    return computerChoice;
}

function playRound(humanChoice, computerChoice){
    if(humanChoice == "rock" && computerChoice == "scissors" || humanChoice == "scissors" && computerChoice == "paper" 
      || humanChoice == "paper" && computerChoice == "rock"){

        console.log("You won!");
        playerScore++
      }
    else if(humanChoice == "rock" && computerChoice == "paper" || humanChoice == "scissors" && computerChoice == "rock" 
        || humanChoice == "paper" && computerChoice == "scissors"){

        console.log("You lost");
        machineScore++
    }
    console.log("The scoreboard is: Player - ", playerScore, "Computer: ", machineScore);
}

function whoWon(){
    if(playerScore > machineScore){
        console.log("You won the game! I am fodder")
    }
    else if(playerScore < machineScore){
        console.log("You lost! You are fodder")

    }
    else if(playerScore == machineScore){
        console.log("we both fodder")
    }
}

for( i = 0; i <= 4; i++){
    getHumanChoice();
    getComputerChoice();
    console.log(humanChoice);
    if(validValue){  
        console.log(computerChoice);
        playRound(humanChoice, computerChoice);
    }
}
whoWon();