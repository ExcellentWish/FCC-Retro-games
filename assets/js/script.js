let computerChoiceDisplay = document.getElementById("computer-choice");
let userChoiceDisplay = document.getElementById("user-choice");
let resultDisplay = document.getElementById("result");

let userChoice;
let computerChoice;
let getResults;
let possibleChoices = document.querySelectorAll("button");

possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener("click", (event) => {
    userChoice = event.target.id;
    userChoiceDisplay.innerHTML = userChoice;

    generateComputerChoice();
    generateResults();
}))

function generateComputerChoice(){
    let randomNumber = Math.floor(Math.random()* 3);
 if ( randomNumber === 0){
     computerChoice = 'rock';
 } else if  ( randomNumber === 1){
    computerChoice = 'paper';
}  else if ( randomNumber === 2){
    computerChoice = 'sissors';
}
computerChoiceDisplay.innerHTML = computerChoice;
}

function generateResults(){
    if(computerChoice === userChoice){
        getResults = 'draw';  
    }
     else if(computerChoice === 'rock' &&  userChoice ==="sissors"){
        getResults = 'You lost';  
    }
    else if(computerChoice === 'paper' &&  userChoice ==="rock"){
        getResults = 'You lost';  
    }
    else if(computerChoice === 'sissors' &&  userChoice ==="paper"){
        getResults = 'You lost';  
    }

    else if(computerChoice === 'sissors' &&  userChoice ==="rock"){
        getResults = 'You won';  
    }
    if(computerChoice === 'paper' &&  userChoice ==="sissors"){
        getResults = 'You won';  
    }
    if(computerChoice === 'rock' &&  userChoice ==="paper"){
        getResults = 'You won';  
    }

    resultDisplay.innerHTML = getResults;
}