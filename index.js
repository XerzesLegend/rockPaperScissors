function computerPlay(){
    let num = Math.floor(Math.random() * 3);
    switch (num) {
        case 0:
            return "rock"
        case 1:
            return "paper"
        case 2:
            return "scissors"
          }

}

function playerPlay(){
    let answer = prompt("rock, paper, or scissors?");
    answer.toLowerCase();
    return answer
}
function playRound(computerSelection, playerSelection, score){
    let result;
    if (computerSelection == playerSelection){
        result = "It is a tie!"
    }
    else if ((computerSelection=="paper") && (playerSelection=="scissors")){
        result = "You win! " + playerSelection + " beats " + computerSelection;
        score[1] += 1    
    }
    else if ((computerSelection=="scissors") && (playerSelection=="rock")){
        result = "You win! " + playerSelection + " beats " + computerSelection;
        score[1] += 1    
    }
    else if ((computerSelection=="rock") && (playerSelection=="paper")){
        result = "You win! " + playerSelection + " beats " + computerSelection;
        score[1] += 1    
    }
    else if ((computerSelection=="rock") && (playerSelection=="scissors")){
        result = "You lose :( " + playerSelection + " loses to " + computerSelection;
        score[0] += 1    
    }
    else if ((computerSelection=="scissors") && (playerSelection=="paper")){
        result = "You lose :( " + playerSelection + " loses to " + computerSelection;
        score[0] += 1    
    }
    else if ((computerSelection=="paper") && (playerSelection=="rock")){
        result = "You lose :( " + playerSelection + " loses to " + computerSelection;
        score[0] += 1    
    }
    //console.log(result);
    return result
}

function game(){
    score = [0,0]
    let scoreBoard
    while ((score[0] < 5)&&(score[1] < 5)){
        score = playRound(computerPlay(), playerPlay(), score);
        scoreBoard = "You: " + score[1] + " , Computer: " + score[0]
        console.log(scoreBoard)
    }
    let result
    if (score[0] > score[1]){
        result = "You lose, humanity is doomed!"
    }
    else{
        result = "You win, you have saved humanity!"
    }
    console.log(result)
}
function startAgain(){
    if(score[0] == 5){
        score = [0,0];
        player.innerText = score[0];
        computer.innerText = score[1];
        comment.innerText = "You win, you have saved humanity! Pick rock, paper, or scissors to start again";
    }
    if(score[1] == 5){
        score = [0,0];
        player.innerText = score[0];
        computer.innerText = score[1];
        comment.innerText = "You lose, humanity is doomed! Pick rock, paper, or scissors to start again";
    }
}

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const cont = document.querySelector('#container');
let player = document.createElement('div');
let computer = document.createElement('div');
let score = [0,0];
let comment = document.createElement('div');

player.innerText = score[0];
computer.innerText = score[1];
comment.innerText = "Pick rock, paper, or scissors to start";

rock.addEventListener('click', function() { 
    result = playRound(computerPlay(), "rock", score);
    player.innerText = score[0];
    computer.innerText = score[1];
    comment.innerText = result;
    startAgain(); } );
paper.addEventListener('click', function() { 
    result = playRound(computerPlay(), "paper", score);
    player.innerText = score[0];
    computer.innerText = score[1];
    comment.innerText = result;
    startAgain(); });
scissors.addEventListener('click', function() { 
    result = playRound(computerPlay(), "scissors", score);
    player.innerText = score[0];
    computer.innerText = score[1];
    comment.innerText = result;
    startAgain(); });

cont.appendChild(computer);
cont.appendChild(player);
cont.appendChild(comment);



