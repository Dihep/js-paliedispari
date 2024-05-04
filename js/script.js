// Creazione variabili
//      PALINDROMIA      //
const parola = prompt();
palindroma(parola);

//Funzione palindromia
function palindroma(p) {
    let pValue = true;
    for (let i = 0; 
        (i < ((p.length)/2)) && (pValue==true); 
        i++) {
        if (p[i] == p[(p.length-1-i)]) {
            pValue = true;
        } else {
            pValue = false;
        };
    };
    console.log(`La parola "${parola}" è palindroma? `, pValue);
};

//     PARI O DISPARI     //
const scelta = prompt("Pari o dispari?");
const numeroU = prompt("Scegli un numero da uno a cinque");
const numeroC = Math.floor(Math.random()*6);
let pari = false;
pariF(numeroU, numeroC);
if (
    ((scelta == "pari" || scelta == "Pari") && pari==true) || 
    ((scelta == "dispari" || scelta == "Dispari") && pari==false)
) {
    console.log("Hai vinto.", numeroU, numeroC)
} else {
    console.log("Hai perso.", numeroU, numeroC)
};

//Funione pari o dispari//
function pariF(numeroU, numeroC) {
    if ((numeroU+numeroC)%2 == 0) {
        pari = true;
    };
};