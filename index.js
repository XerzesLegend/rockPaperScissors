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
    return answer
}
function playRound(computerSelection, playerSelection, score){
    let result
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
        result = "You lose :( " + playerSelection + "loses to " + computerSelection;
        score[0] += 1    
    }
    else if ((computerSelection=="paper") && (playerSelection=="rock")){
        result = "You lose :( " + playerSelection + "loses to " + computerSelection;
        score[0] += 1    
    }
    console.log(result);
    return score
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