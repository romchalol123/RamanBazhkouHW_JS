const moveVars = ['rock', 'scissors', 'paper'];
let counter = [0, 0];

function enterUserName(){
    let userName = prompt('Please, enter your name');
    if (userName === '' || userName === ' ' || userName === null){
        return 'User';
    }else{
        return userName;
    }
}

function compChoice(){

    function randomChoice(min, max){
        let res = Math.round(Math.random()*(max - min) + min);
        return res;
    }

    num = randomChoice(0, moveVars.length);

    return moveVars[num];
}

function playerChoice(){
    let choice = prompt('Rock, Scissors, Paper... Please make your move');

    console.log(choice);

    if(choice === null){
        alert('You aborted this game. To start new game just refresh the page.');
    }else if (moveVars.includes(choice) === true){
        return choice;
    } else{
        return playerChoice();
    }
}

function moveCompare(comp, plr){

    alert(`Computer move is: ${comp}`);

    if (comp === plr){
        return playerChoice();
    } 


}


let player = enterUserName();

let plCH = playerChoice();

let compCH = compChoice();

alert(`${player} ${plCH} vs ${compCH} Computer`)