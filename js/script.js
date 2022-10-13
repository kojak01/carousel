function liczbaGraczaKomputera(KtoGra){
    if(KtoGra == 1){
        return 'kamień';
    } else if(KtoGra == 2){
        return 'papier';
    } else if(KtoGra == 3){
        return 'nożyce';
    } else {
        return 'nieznany ruch';
    }
}

let wpisanaLiczbaprzezGracza = prompt('Wpisz liczbę 1: kamień, 2: papier, 3: nożyce!');
console.log('Gracz wpisał ' + wpisanaLiczbaprzezGracza);

let ZagranieGracza = liczbaGraczaKomputera(wpisanaLiczbaprzezGracza);
console.log('Gracz zagrał figórę ' +  ZagranieGracza + '!');

// computer Move 

let losowaLiczba = Math.floor(Math.random() * 3 + 1);
console.log('losowa liczba to ' + losowaLiczba);

let ZagranieKomputera = liczbaGraczaKomputera(losowaLiczba);
console.log('Komputer zagrał ' + ZagranieKomputera);

// zależności

function podsumowanieWynik(ArgPlayer, ArgComputer){
    if((ArgPlayer == 'kamień' && ArgComputer == 'nożyce') ||
    (ArgPlayer == 'papier' && ArgComputer == 'kamień') ||
    (ArgPlayer == 'nożyce' && ArgComputer == 'papier')){
        console.log('Wygrywasz!');
    } else if(ArgPlayer == ArgComputer){
        console.log('Remis!');
    } else if (ArgPlayer == 'nieznany ruch'){
        console.log('wpisz liczbe 1, 2 lub 3');
    } else {
        console.log('Przegrywasz!');
    }
}

podsumowanieWynik(ZagranieGracza, ZagranieKomputera);