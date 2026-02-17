/*
  Conta il tempo
  Scrivi un programma che dato un numero di secondi, calcoli la quantità di ore, minuti e secondi corrispondenti e
  poi stampi il risultato. L'output avrà solo numeri interi.

  Esempio:
    Input: 12560
    Output: 3 ore, 29 minuti e 20 secondi.

  Consigli:
  In un'ora ci sono 60 minuti, in un minuto 60 secondi. Quindi quanti secondi ci sono in un'ora? ;)

  http://www.imparareaprogrammare.it
*/

const prompt = require('prompt-sync')();

console.log("Inserire i secondi da convertire")
let seconds = prompt("");

let secondsPerHours = seconds - (seconds%3600)
let hours = secondsPerHours / 3600;
let finalSeconds = seconds%60;
let minutes = ((seconds%3600) - finalSeconds)/60;


console.log(hours);
console.log(minutes);
console.log(finalSeconds);
