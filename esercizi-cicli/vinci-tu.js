/*
  Vinci tu!
  Scrivi un programma che dato il numero dei tiri da effettuare per ciascun giocatore (N),
  simuli un gioco di dadi tra due utenti, stampando il giocatore che ha totalizza più punti.
  Supponendo che ogni dado abbia al massimo 6 facce.

  Ogni giocatore tirerà il dado N volte, ciò significa che verrà generato un numero casuale
  ad ogni tiro che sarà sommato ai precedenti per calcolare il punteggio del giocatore.


  Consigli:
  Il numero casuale generato, deve essere convertito nel tuo intervallo (min = 1, max = 6).
  Se non ti ricordi come si fa puoi rivedere l'esercizio sulle condizioni "Chi l'azzecca?".

  http://www.imparareaprogrammare.it
*/

const prompt = require('prompt-sync')();
let rollNumber = prompt("Quante volte vuoi lanciare il dado? > ");

let gamerOne = sumDiceRoll();
let gamerTwo = sumDiceRoll();

console.log("Giocatore 1 ha totalizzato > " + gamerOne);
console.log("Giocatore 2 ha totalizzato > " + gamerTwo);

if (gamerOne < gamerTwo) {
  console.log('Giocatore 2 ha vinto!')
}
if (gamerOne > gamerTwo) {
  console.log('Giocatore 1 ha vinto!')
}
if (gamerOne === gamerTwo) {
  console.log('Pareggio!')
}

function diceRoll() {
  let roll = Math.floor(Math.random() * (6-1) + 1);
  return roll;
}

// function sumDiceRoll() {
//   let result = 0;
//   for (let i = 1; i <= rollNumber; i++) {
//     result += diceRoll();
//   }
//   return result;
// }

function sumDiceRoll() {
  let result = 0;
  let i = 1;
  while (i <= rollNumber) {
    i++;
    result += diceRoll();
  }
  return result;
}