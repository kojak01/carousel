function getMoveName(argMoveId){
    if(argMoveId == 1) {
        return 'kamień';
    }else if(argMoveId == 2){
        return 'papier';
    }else{
        return 'nożyce';
    }
}

// Computer Moves 

let randomNumber = Math.floor(Math.random() * 3 + 1);

let computerMove = getMoveName(randomNumber);
console.log('Wylosowana liczba to ' + randomNumber);

console.log('Mój ruch to: ' + computerMove);

// Player Moves 

playerInput = prompt('Zagraj 1: kamień 2: papier 3: nożyce');

console.log('Gracz wpisał ' + playerInput);

let playerMove = getMoveName(playerInput);

console.log('Twój ruch to: ' + playerMove);


//Score Game 

function displayResult(argComputerMove, argPlayerMove){
    console.log('function Move');
    if((argComputerMove == 'kamień' && argPlayerMove == 'papier') ||
    (argComputerMove == 'papier' && argPlayerMove == 'nożyce') ||
    (argComputerMove == 'nożyce' && argPlayerMove == 'kamień')) {
        console.log('wygrywasz!');
    } else if(argComputerMove == argPlayerMove){
        console.log('remis!');
    } else if(argPlayerMove == 'nieznany ruch'){
        console.log('wpisz 1 2 lub 3');
    } else {
        console.log('przegrywasz!');
    }
   
}
displayResult(computerMove, playerMove);

