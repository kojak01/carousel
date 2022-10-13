function getMoveName(argMoveID){
    if(argMoveID == 1) {
        return 'kamień';
    } else if(argMoveID == 2){
        return 'papier';
    } else {
        return 'nożyce';
    }
}

// Computer Move 

let randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('losowa liczba to ' + randomNumber);

computerMove = getMoveName(randomNumber);
console.log('Komputer zagrał ' + computerMove);

// Player Move

let playerInput = prompt('Wpisz liczbe 1: kamień, 2: papier, 3: nożyce!');
console.log('player wpisał ' + playerInput);

playerMove = getMoveName(playerInput);
console.log('gracz zagrał ' + playerMove);

// Result Score

function displayResult(argComputer, argPlayer){
    if((argComputer == 'kamień' && argPlayer == 'papier') ||
    (argComputer == 'papier' && argPlayer == 'nożyce') ||
    (argComputer == 'nożyce' && argPlayer == 'kamień')){
        console.log('Player Wygrywa');
    } else if (argComputer == argPlayer){
        console.log('Remis');
    } else if(argPlayer == 'nieznany ruch'){
        console.log('wpisz liczbe 1, 2 lub 3!');
    } else {
        console.log('przegrywasz!');
    }
}

displayResult(computerMove, playerMove);