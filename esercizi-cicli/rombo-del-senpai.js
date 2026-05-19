/*
  Rombo che stampa!
  Scrivi un programma che dato un numero dispari stampi un rombo di lettere.

  Esempio:
    Input : 5
    Output:
            X
           XXX
          XXXXX
           XXX
            X

  Consiglio:
  Per indentare puoi usare il tab con '\t'.
  
  http://www.imparareaprogrammare.it
*/


let altezzaELarghezza = 15;
let result = '';

for (let y = 0; y < altezzaELarghezza; y++) {
    let numeroDiX = ((y * 2) + 1)
    let spazi = altezzaELarghezza - numeroDiX; // dovrebbe essere sempre pari
    let spaziPerLato = spazi / 2;
    if (spaziPerLato < 0) {
        spaziPerLato *= -1
    }
    for (let x = 0; x < altezzaELarghezza; x++) {
        if (x < spaziPerLato) {
            result += ' ';
            continue;
        }
        if (x >= spaziPerLato && x < (altezzaELarghezza - spaziPerLato)) {
            result = result + 'X'
            continue;
        }
        result += ' ';
    }
    result = result + '\n'
}
console.log(result);