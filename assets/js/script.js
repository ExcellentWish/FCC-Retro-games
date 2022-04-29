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
    let randomNumber = Math.floor(Math.random()* 5);
 if ( randomNumber === 0){
     computerChoice = 'rock';
 } else if  ( randomNumber === 1){
    computerChoice = 'paper';
}  else if ( randomNumber === 2){
    computerChoice = 'sissors';
}
else if ( randomNumber === 3){
    computerChoice = 'spock';
}

else if ( randomNumber === 4){
    computerChoice = 'lizard';
}
computerChoiceDisplay.innerHTML = computerChoice;
}

function generateResults(){
    if(computerChoice === userChoice){
        getResults = 'draw';  
    }
    else if(computerChoice === 'sissors' &&  userChoice ==="rock"){
        getResults = 'You won';  
    }
    else if(computerChoice === 'sissors' &&  userChoice ==="spock"){
        getResults = 'You won';  
    }

    else if(computerChoice === 'paper' &&  userChoice ==="sissors"){
        getResults = 'You won';  
    }
    else if(computerChoice === 'paper' && userChoice === 'lizard'){
        getResults = 'You won';  
    }
       else if(computerChoice === 'rock' &&  userChoice ==="paper"){
        getResults = 'You won';  
    }
    else if(computerChoice === 'rock' &&  userChoice ==="spock"){
        getResults = 'You won';  
    }
    else if(computerChoice === 'lizard' &&  userChoice ==="rock"){
        getResults = 'You won';  
    }
    else if(computerChoice === 'lizard' &&  userChoice ==="sissors"){
        getResults = 'You won';  
    }
    else if(computerChoice === 'spock' &&  userChoice ==="paper"){
        getResults = 'You won';  
    }
    else if(computerChoice === 'spock' &&  userChoice ==="lizard"){
        getResults = 'You won';  
    }
    else{
        getResults='You lost'
    }

   
   

    resultDisplay.innerHTML = getResults;
}