const run = document.getElementById("run_btn");

// genero un evento click con funnzione apri

run.addEventListener ('click',
    function() {

    // chiedo una parola all'utente tramite prompt

    let userWord = prompt("Inserisci la parola palindroma (non mettere maiuscole)");

    // genero delle variabili per invertirla
        
    let rtlWord= "";
    
    let letter;

    let i = userWord.length;

    // avvio un ciclo while per stampare la parola al contrario

        while (i > 0) {

            letter = userWord.substring(i-1, i);

            rtlWord += letter;    
            
            i--;
            
        }
        console.log(rtlWord);
        
        console.log(userWord);

        // confronto le parole e genero l'output

        if (userWord == rtlWord) {
            console.log(userWord + " è palindroma!");       
            document.getElementById("feedback").innerHTML= userWord + " è palindroma!"
            
        }

        else {
            console.log(userWord + " non è palindroma.");                   
            document.getElementById("feedback").innerHTML= userWord + " non è palindroma."
            
        }
    }
)

// ------
// const str = 'Hello';
// str.substring(0, 2); // => 'Hel'
// ------
// substring(indexStart, indexEnd)
// ------
// stringName.length
// ------

// function display() {
//     document.getElementById("myID").style.direction = "rtl";
//  } non funziona :(