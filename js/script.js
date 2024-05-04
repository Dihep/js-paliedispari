// Creazione variabili
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