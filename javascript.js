var humanPrompt; var humanChoice; var computerPrompt; var machineOptions = ["rock", "paper", "scissors"];//string
var validValue; //bool
var random; var playerScore = 0; var machineScore = 0; //int
var i;

function getHumanPrompt(){
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

function getComputerPrompt(){
    random = Math.floor(Math.random() * machineOptions.length);
    computerPrompt = machineOptions[random];
    computerPrompt = computerPrompt.toLowerCase();
    return computerPrompt;
}

function playRound(humanChoice, computerPrompt){
    if(humanChoice == "rock" && computerPrompt == "scissors" || humanChoice == "scissors" && computerPrompt == "paper" 
      || humanChoice == "paper" && computerPrompt == "rock"){

        console.log("You won!");
        playerScore++
      }
    else if(humanChoice == "rock" && computerPrompt == "paper" || humanChoice == "scissors" && computerPrompt == "rock" 
        || humanChoice == "paper" && computerPrompt == "scissors"){

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
    getHumanPrompt();
    getComputerPrompt();
    console.log(humanChoice);
    if(validValue){  
        console.log(computerPrompt);
        playRound(humanChoice, computerPrompt);
    }
}
whoWon();