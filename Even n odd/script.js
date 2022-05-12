// genero il link ai bottoni 


const runEven = document.getElementById("even");

const runOdd = document.getElementById("odd");

even.addEventListener ('click',
function() {
    // chiedo una parola all'utente tramite prompt
    
    let userNum = parseInt(prompt("Inserisci un numero da 0 a 5!"));
    
    // genero un numero casuale tratto dal pc

    let pcNum = Math.floor(Math.random() * 5);

    console.log("Hai scelto ", userNum);
    console.log("Il Pc ha scelto ", pcNum);

    sum = userNum + pcNum;

    if (sum % 2 == 0) {
        console.log (sum, " è pari, hai vinto!!!")
    }

    else {
        console.log (sum, " è dispari, You lose! :(")
    }
}
)

odd.addEventListener ('click',
function() {
    // chiedo una parola all'utente tramite prompt
    
    let userNum = parseInt(prompt("Inserisci un numero da 0 a 5!"));
    
    // genero un numero casuale tratto dal pc

    let pcNum = Math.floor(Math.random() * 5);

    console.log("Hai scelto ", userNum);
    console.log("Il Pc ha scelto ", pcNum);

    sum = userNum + pcNum;

    if (sum % 2 == 0) {
        console.log (sum, " è pari, oh no! Hai persooo!")
    }

    else {
        console.log (sum, " è dispari, Well Done!!!")
    }
}
)