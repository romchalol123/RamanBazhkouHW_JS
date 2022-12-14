const moveVars = ['rock', 'scissors', 'paper', 'rock'];

let player = enterUserName();

function enterUserName(){
    let userName = prompt('Please, enter your name');
    if (!userName){
        return 'User';
    } else {
        return userName;
    }
}

function compChoice(){

    function randomChoice(min, max){
        let res = Math.round(Math.random()*(max - min) + min);
        return res;
    }

    num = randomChoice(0, moveVars.length - 2);

    alert(`Computer move is: ${moveVars[num]}`);
    return moveVars[num];
}

function playerChoice(){
    let choiceRequest = prompt('Rock, Scissors, Paper... Please make your move');

    let choice = choiceRequest.trim().toLowerCase();

    if(choice === null){
        alert('You aborted this game. To start new game just refresh the page.');
        return;
    } else if (!!moveVars.includes(choice)){
        return choice;
    } else {
        return playerChoice();
    }
}

function fighting(){
    let plrPoints = 0;
    let compPoints = 0;    
    
    while (plrPoints < 3 && compPoints < 3){
        
        let playerMove = playerChoice();
        
        if (typeof playerMove !== 'string'){
            return;
        }

        let compMove = compChoice();

        if (playerMove === compMove){
            alert('Make an another move. You have the same result as the computer.');
        } else if (moveVars.indexOf(playerMove) === moveVars.indexOf(compMove) + 1){
            compPoints++;
            alert(`Computer won this round: Current count is ${player}: ${plrPoints} - Computer: ${compPoints}`);
        } else if (moveVars.indexOf(playerMove) === moveVars.indexOf(compMove) - 1){
            plrPoints++; 
            alert(`You won this round: Current count is ${player}: ${plrPoints} - Computer: ${compPoints}`);
        } else if (moveVars.lastIndexOf(playerMove) === moveVars.indexOf(compMove) + 1){
            compPoints++;
            alert(`Computer won this round: Current count is ${player}: ${plrPoints} - Computer: ${compPoints}`);
        } else if (moveVars.lastIndexOf(playerMove) === moveVars.indexOf(compMove) + 2){
            plrPoints++;
            alert(`You won this round: Current count is ${player}: ${plrPoints} - Computer: ${compPoints}`);
        }
    }

    let message;

    if (compPoints === 3){
        message = alert(`Sorry. You lost this game. Count - You: ${plrPoints} - Computer: ${compPoints}`);
    } else if (plrPoints === 3){
        message = alert(`Congratulations. You won this game. Count - You: ${plrPoints} - Computer: ${compPoints}`);
    }

    return message;
}

function gameStarted() {

    fighting();

    if(typeof fighting !== 'string'){
        return;
    }

    let newGameConfirm = confirm('Do you want to start new game?');

    if (!!newGameConfirm){
        fighting();
    } else {
        return;
    }
}

gameStarted();
