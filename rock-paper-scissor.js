const score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
};

updateScoreElement();

function playGame(playerMove){

    const computerMove = pickComputerMove();
    let result = '';
    if(playerMove === 'scissor'){
        if(computerMove === 'rock'){
            result = 'Lose';
        }else if(computerMove === 'scissor'){
            result = 'Tie';
        }else if(computerMove === 'paper'){
            result = 'Win';
        }

    } else if(playerMove === 'paper'){
        if(computerMove === 'paper'){
            result = 'Tie';
        }else if(computerMove === 'rock'){
            result = 'Win';
        }else if(computerMove === 'scissor'){
            result = 'Lose';
        }
        
    } else if(playerMove === 'rock'){
        if(computerMove === 'rock'){
            result = 'Tie';
        }else if(computerMove === 'scissor'){
            result = 'Win';
        }else if(computerMove === 'paper'){
            result = 'Lose';
        }
    }

    if(result === 'Win'){
        score.wins+=1;
    } else if(result === 'Lose'){
        score.losses+=1;
    } else if(result === 'Tie'){
        score.ties+=1;
    }

    localStorage.setItem('score',JSON.stringify(score));

    updateScoreElement();

    document.querySelector('.js-result').innerHTML = result;
    document.querySelector('.js-moves').innerHTML = `you <img src="emoji/${playerMove}-emoji.png" class="move-icon"> <img src="emoji/${computerMove}-emoji.png" class="move-icon"> computer</img>`;

}

function pickComputerMove(){

    let computerMove = '';
    const computer = Math.random();
    if(computer >= 0 && computer < (1/3))
        computerMove = 'rock';
    else if(computer >= (1/3) && computer < (2/3)) 
        computerMove = 'paper'; 
    else if(computer >= (2/3) && computer < 1) 
        computerMove = 'scissor';
    return computerMove;
}
function updateScoreElement(){
    document.querySelector('.js-score')
    .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}