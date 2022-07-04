const choices = ["rock","paper","scissors"]


// For Computer Choice;
function computerChoice(){
    const randomChoice = Math.floor(Math.random() *choices.length)
    return console.log("Computer Choose: "+choices[randomChoice]);
};

// For Player Choice;
function playerChoice(){
 let input = prompt('Enter Rock,Paper,Scissors');
 while(input === null){
    input = prompt('Enter Rock,Paper,Scissors');
 }
 input = input.toLowerCase();
    console.log("You Choose: " +input)
};

// GAME ROUND
function playRound(){
    const playerSelction = playerChoice();
    const computerSelection = computerChoice();
};

// Validation of value
function validationValue(){
    
}

// GAMELOOP
function game(){
    playRound();

};

game();

